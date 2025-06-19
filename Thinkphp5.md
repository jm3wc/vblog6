## 快速入门

**在本地部署thinkphp**

[**thinkphp5.0下载**](http://web.wdwangke.com/mdwork/backend/thinkphp/tp5.zip)

**1.把tp5.rar放在你的电脑php环境下的web目录里,然后解压出来，这里重命名为thinkphp**

![img](http://web.wdwangke.com/mdphoto/backend/backend/thinkphp/thinkphp01.png)

**2.给这个项目创建一个虚拟主机，打开phpstudy_pro软件并启动web服务，在侧边菜单栏选择网站，点击创建网站**

如图一配置，还有在创建环境里选择创建数据库，如图二配置，最后一路确认，等待web服务重启完成

 ![img](http://web.wdwangke.com/mdphoto/backend/backend/thinkphp/thinkphp02.png)

 ![img](http://web.wdwangke.com/mdphoto/backend/backend/thinkphp/thinkphp03.png)

**3.打开浏览器，输入刚才配置的域名，看到这个界面说明已经部署成功**

 ![img](http://web.wdwangke.com/mdphoto/backend/backend/thinkphp/thinkphp04.png)

**4.创建Admin，Home模块和User公共模型**

打开cmd，输入如下命令

```php
//创建Admin模块
php think build --module Admin

//创建Home模块
php think build --module Home
//创建模型
php think make:model common/User/User
```

**5.访问home模块里的index控制器里面index方法**

首先打开thinkphp/application/Home/controller/Index.php,如下：

```php
<?php
namespace app\Home\controller;

class Index
{
    public function index()
    {
        return '这是Home模块里的index控制器';
    }
}
```

**注意：如果public里的.htaccess伪静态文件为空，必须要加上；入口文件index.php**

```php
//域名/入口文件/模块/方法
http://www.thinkphp.com/index.php/home/index
```

**隐藏入口文件，给public.htaccess文件加上下面的代码**

```php
<IfModule mod_rewrite.c>
    Options +FollowSymlinks -Multiviews
    RewriteEngine on

    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteRule ^(.*)$ index.php?/$1 [QSA,PT,L]
</IfModule>
//域名/模块/方法
http://www.thinkphp.com/home/index
```

**6.创建验证器**

在application/Admin目录下创建一个叫validate文件夹

在validate目录下创建User文件夹，再User文件夹新建User.php文件

User.php里的代码如下：

```php
<?php

namespace app\Admin\validate\User;

use think\Validate;

class user extends Validate
{
    /**
     * 验证规则
     */
    protected $rule = [
        'phone'   => 'require|unique:user|max:11|/^1[0-9]{10}/',
        'password' => 'require',
        'salt'   => 'require',
        'gender' => 'number|in:0,1,2'
    ];
    /**
     * 提示消息
     */
    protected $message = [
        'phone.require' => '手机号码必填',
        'phone.unique'  => '手机号码必须是唯一的，该手机号码已存在',
        'password.require'  => '密码必填',
        'salt.require'      => '密码盐必填',
    ];

    /**
     * 验证场景
     */
    protected $scene = [
        //添加
        'add'  => ['phone', 'salt', 'password'],

        //h5手机端修改基本资料
        'profile' => ['phone', 'nickname', 'gender']

    ];
}
```

在application/Admin/controller/Index.php引用验证器

```php
<?php
namespace app\Admin\controller;

//使用User验证器
use app\Admin\validate\User\User;

class Index
{
    public function index()
    {
        //实例化User验证器
        $UserValidate = new User;

        return '这是后台';
    }
}
```

**7.模板布局**

在application\config.php里找到template，加上下面的代码

```php
// 模板布局
        'layout_on'     =>  true,
        'layout_name'   =>  'layout',
```

完整

```php
'template'               => [
        // 模板引擎类型 支持 php think 支持扩展
        'type'         => 'Think',
        // 默认模板渲染规则 1 解析为小写+下划线 2 全部转换小写
        'auto_rule'    => 1,
        // 模板路径
        'view_path'    => '',
        // 模板后缀
        'view_suffix'  => 'html',
        // 模板文件名分隔符
        'view_depr'    => DS,
        // 模板引擎普通标签开始标记
        'tpl_begin'    => '{',
        // 模板引擎普通标签结束标记
        'tpl_end'      => '}',
        // 标签库标签开始标记
        'taglib_begin' => '{',
        // 标签库标签结束标记
        'taglib_end'   => '}',
        // 模板布局
        'layout_on'     =>  true,
        'layout_name'   =>  'layout',
    ],
```

然后在application/Admin/view目录下创建layout.html文件，再创建Common作为公共部分，index.html进行头尾分离，目录如下

 ![img](http://web.wdwangke.com/mdphoto/backend/backend/thinkphp/thinkphp05.png)

**layout.html**

```php
{include file="Common/meta" /}
{include file="Common/header" /}
{include file="Common/menu" /}
{__CONTENT__}
{include file="Common/js" /}
```

**8.连接数据库**

在application\database.php文件配置

```php
return [
    // 数据库类型
    'type'            => 'mysql',
    // 服务器地址
    'hostname'        => '127.0.0.1',
    // 数据库名
    'database'        => 'thinkphp',
    // 用户名
    'username'        => 'thinkphp',
    // 密码
    'password'        => '123456',
    // 端口
    'hostport'        => '',
    // 连接dsn
    'dsn'             => '',
    // 数据库连接参数
    'params'          => [],
    // 数据库编码默认采用utf8
    'charset'         => 'utf8',
    // 数据库表前缀
    'prefix'          => 'pre_',
    // 数据库调试模式
    'debug'           => true,
    // 数据库部署方式:0 集中式(单一服务器),1 分布式(主从服务器)
    'deploy'          => 0,
    // 数据库读写是否分离 主从式有效
    'rw_separate'     => false,
    // 读写分离后 主服务器数量
    'master_num'      => 1,
    // 指定从服务器序号
    'slave_no'        => '',
    // 自动读取主库数据
    'read_master'     => false,
    // 是否严格检查字段是否存在
    'fields_strict'   => true,
    // 数据集返回类型
    'resultset_type'  => 'array',
    // 自动写入时间戳字段
    'auto_timestamp'  => false,
    // 时间字段取出后的默认时间格式
    'datetime_format' => 'Y-m-d H:i:s',
    // 是否需要进行SQL性能分析
    'sql_explain'     => false,
];
```

**完整源代码**

[**thinkphp源代码**](http://web.wdwangke.com/mdwork/backend/thinkphp/thinkphp.zip)

## 基本介绍

## 简介

```php
ThinkPHP是一个快速、简单的基于MVC和面向对象的轻量级PHP开发框架，遵循Apache2开源协议发布，
自2006年诞生以来一直秉承简洁实用的设计原则，在保持出色的性能和至简代码的同时，尤其注重开发体验和易用性，
并且拥有众多的原创功能和特性，为WEB应用和API开发提供了强有力的支持。
```

## 安装

- Composer安装
- Git安装
- 源码安装

## **Composer安装**

```php
curl -sS https://getcomposer.org/installer | php

mv composer.phar /usr/local/bin/composer

然后在命令行下面，切换到你的web根目录下面并执行下面的命令：
composer create-project topthink/think=5.0.*  tp5  --prefer-dist
```

## **Git安装**

```php
首先克隆下载应用项目仓库
git clone https://github.com/top-think/think tp5

然后切换到tp5目录下面，再克隆核心框架仓库：
git clone https://github.com/top-think/framework thinkphp

两个仓库克隆完成后，就完成了ThinkPHP5.0的Git方式下载，如果需要更新核心框架的时候，只需要切换到thinkphp核心目录下面，然后执行：
git pull https://github.com/top-think/framework
```

**源码安装(离线安装)**

[**thinkphp5.0下载**](http://web.wdwangke.com/mdwork/backend/thinkphp/tp5.rar)

```
直接下载rar压缩包放到php环境目录下
```

## 目录结构

```
project  应用部署目录
├─application           应用目录（可设置）
│  ├─common             公共模块目录（可更改）
│  ├─index              模块目录(可更改)
│  │  ├─config.php      模块配置文件
│  │  ├─common.php      模块函数文件
│  │  ├─controller      控制器目录
│  │  ├─model           模型目录
│  │  ├─view            视图目录
│  │  └─ ...            更多类库目录
│  ├─command.php        命令行工具配置文件
│  ├─common.php         应用公共（函数）文件
│  ├─config.php         应用（公共）配置文件
│  ├─database.php       数据库配置文件
│  ├─tags.php           应用行为扩展定义文件
│  └─route.php          路由配置文件
├─extend                扩展类库目录（可定义）
├─public                WEB 部署目录（对外访问目录）
│  ├─static             静态资源存放目录(css,js,image)
│  ├─index.php          应用入口文件
│  ├─router.php         快速测试文件
│  └─.htaccess          用于 apache 的重写
├─runtime               应用的运行时目录（可写，可设置）
├─vendor                第三方类库目录（Composer）
├─thinkphp              框架系统目录
│  ├─lang               语言包目录
│  ├─library            框架核心类库目录
│  │  ├─think           Think 类库包目录
│  │  └─traits          系统 Traits 目录
│  ├─tpl                系统模板目录
│  ├─.htaccess          用于 apache 的重写
│  ├─.travis.yml        CI 定义文件
│  ├─base.php           基础定义文件
│  ├─composer.json      composer 定义文件
│  ├─console.php        控制台入口文件
│  ├─convention.php     惯例配置文件
│  ├─helper.php         助手函数文件（可选）
│  ├─LICENSE.txt        授权说明文件
│  ├─phpunit.xml        单元测试配置文件
│  ├─README.md          README 文件
│  └─start.php          框架引导文件
├─build.php             自动生成定义文件（参考）
├─composer.json         composer 定义文件
├─LICENSE.txt           授权说明文件
├─README.md             README 文件
├─think                 命令行入口文件
```

## 入口文件

```php
ThinkPHP5.0版本的默认自带的入口文件位于public/index.php
实际部署的时候public目录为你的应用对外访问目录

浏览器访问路径为：http://localhost/tp5/public/
```

## 静态资源访问

网站的资源文件访问不会影响正常的操作访问，只有当访问的资源文件不存在的时候才会解析到入口文件，一般就会提示模块不存在的错误。

网站的资源文件一般放入public目录的子目录下面，例如下面是一个建议规范：

```
public
├─index.php     应用入口文件
├─static        静态资源目录   
│  ├─css          样式目录
│  ├─js         脚本目录
│  └─img          图像目录
```

**记住，千万不要在`public`目录之外的任何位置放置资源文件，包括`application`目录。**

访问资源文件的URL路径是：

```php
http://tp5.com/static/css/style.css
http://tp5.com/static/js/common.js
http://tp5.com/static/img/picture.jpg
```

如果你没有设置域名绑定，而是使用子目录方式访问的话，那么可能的资源访问地址是：

```php
http://localhost/public/static/css/style.css
http://localhost/public/static/js/common.js
http://localhost/public/static/img/picture.jpg
```

## 静态常量

在模板中可以使用`__STATIC__` 来输出项目目录但是在路径中缺少public目录，可以在配置文件中自定义静态常量

```
// 视图输出字符串内容替换
'view_replace_str'       => [
    '__STATIC__' => '/static',
    '__CSS__'    => '/static/css',
    '__JS__'     => '/static/js',
    '__IMG__'    => '/static/images',
]

加载资源格式：
<linkhref="__CSS__/style.css"rel="stylesheet">
<script src="__JS__/style.js"></script>
<img src="__IMG__/user_logo.jpg" />
```

## 调试模式

ThinkPHP支持调试模式，默认情况下是开启状态（5.0.10+版本开始，默认关闭调试模式，需要自己开启）。调试模式以除错方便优先，而且在异常的时候可以显示尽可能多的信息，所以对性能有一定的影响。

修改应用配置文件（application/config.php）中的app_debug配置参数：

```php
// 关闭调试模式
'app_debug' =>  false,
```

**为了安全考虑，避免泄露你的服务器WEB目录信息等资料，一定记得正式部署的时候关闭调试模式**

## URL访问

默认情况下，URL是不区分大小写的，也就是说 URL里面的**模块/控制器/操作**名会自动转换为小写，控制器在最后调用的时候会转换为驼峰法处理。

```php
http://localhost/index.php/Index/Blog/read
// 和下面的访问是等效的
http://localhost/index.php/index/blog/read
```

如果访问下面的地址

```php
http://localhost/index.php/Index/BlogTest/read
// 和下面的访问是等效的
http://localhost/index.php/index/blogtest/read
```

在这种URL不区分大小写情况下，如果要访问驼峰法的控制器类，则需要使用：

```
http://localhost/index.php/Index/blog_test/read
```

如果希望URL访问严格区分大小写，可以在应用配置文件中设置：

```
// 关闭URL中控制器和操作名的自动转换
'url_convert'    =>  false,
```

隐藏入口文件

在ThinkPHP5.0中，出于优化的URL访问原则，还支持通过URL重写隐藏入口文件，下面以Apache为例说明隐藏应用入口文件index.php的设置。

下面是Apache的配置过程，可以参考下：

- httpd.conf配置文件中加载了mod_rewrite.so模块
- AllowOverride None 将None改为 All
- 在应用入口文件同级目录添加.htaccess文件，内容如下：

```php
<IfModule mod_rewrite.c>
    Options +FollowSymlinks -Multiviews
    RewriteEngine on

    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteRule ^(.*)$ index.php?/$1 [QSA,PT,L]
</IfModule>
```

## 配置信息

文件路径：tp5/application/config

```php
//项目配置文件
return [
    // 默认模块名
    'default_module'        => 'index',
    // 默认控制器名
    'default_controller'    => 'Index',
    // 默认操作名
    'default_action'        => 'index',
    //更多配置参数
    //...
];
```

## 读取配置

```php
//先引入config 配置类
use think\Config;

//读取config 配置
Config::get('配置名称');

//或者你需要判断是否存在某个设置参数
Config::has('配置参数2');

//设置配置参数
Config::set('配置参数','配置值');
// 或者使用助手函数
config('配置参数','配置值');

//也可以批量设置，例如：
Config::set([
    '配置参数1'=>'配置值',
    '配置参数2'=>'配置值'
]);
// 或者使用助手函数
config([
    '配置参数1'=>'配置值',
    '配置参数2'=>'配置值'
]);
```

## 数据库配置

文件路径：tp5/application/database.php

```php
/* 数据库设置 */
'database'              => [
    // 数据库类型
    'type'        => 'mysql',
    // 服务器地址
    'hostname'    => '127.0.0.1',
    // 数据库名
    'database'    => 'thinkphp',
    // 数据库用户名
    'username'    => 'root',
    // 数据库密码
    'password'    => '',
    // 数据库连接端口
    'hostport'    => '',
    // 数据库连接参数
    'params'      => [],
    // 数据库编码默认采用utf8
    'charset'     => 'utf8',
    // 数据库表前缀
    'prefix'      => '',
    // 数据库调试模式
    'debug'       => false,
],
```

## 路由模式

## 定义路由

URL地址里面的index模块怎么才能省略呢，默认的`URL`地址显得有点长，下面就来说说如何通过路由简化`URL`访问。

我们在路由定义文件（application/route.php）里面添加一些路由规则，如下：

```php
return [
    // 添加路由规则 路由到 index控制器的hello操作方法
    'hello/:name' => 'index/index/hello',
];
```

该路由规则表示所有hello开头的并且带参数的访问都会路由到index控制器的hello操作方法。

路由之前的URL访问地址为：

```php
http://tp5.com/index/index/hello/name/thinkphp
```

定义路由后就只能访问下面的URL地址

```php
http://tp5.com/hello/thinkphp
```

**定义路由规则后，原来的URL地址将会失效，变成非法请求。**

使用[]把路由规则中的变量包起来，就表示该变量为可选

```php
return [
    // 路由参数name为可选
    'hello/[:name]' => 'index/hello',
];
http://tp5.com/hello
```

当name参数没有传入值的时候，hello方法的name参数有默认值World，所以输出的内容为 Hello,World!

除了路由配置文件中定义之外，还可以采用动态定义路由规则的方式定义，例如在路由配置文件（`application/route.php`）的开头直接添加下面的方法：

```php
use think\Route;

Route::rule('hello/:name', 'index/hello');
```

完成的效果和使用配置方式定义是一样的。

无论是配置方式还是通过Route类的方法定义路由，都统一放到路由配置文件application/route.php文件中

## 完整匹配

前面定义的路由是只要以hello开头就能进行匹配，如果需要完整匹配，可以使用下面的定义：

```php
return [
    // 路由参数name为可选
    'hello/[:name]$' => 'index/hello',
];
```

当路由规则以**$**结尾的时候就表示当前路由规则需要完整匹配。

当我们访问下面的URL地址的时候：

```php
http://tp5.com/hello // 正确匹配
http://tp5.com/hello/thinkphp // 正确匹配
http://tp5.com/hello/thinkphp/val/value // 不会匹配
```

## 闭包定义

还支持通过定义闭包为某些特殊的场景定义路由规则，例如：

```php
return [
    // 定义闭包
    'hello/[:name]' => function ($name) {
        return 'Hello,' . $name . '!';
    },
];
```

或者

```php
use think\Route;

Route::rule('hello/:name', function ($name) {
    return 'Hello,' . $name . '!';
});
```

因此，当访问下面的URL地址：

```php
http://tp5.com/hello/thinkphp
```

会输出

```php
Hello,thinkphp!
```

## 设置URL分隔符

如果需要改变URL地址中的`pathinfo`参数分隔符，只需要在应用配置文件（application/config.php）中设置：

```php
// 设置pathinfo分隔符
'pathinfo_depr'          => '-',
```

路由规则定义无需做任何改变，我们就可以访问下面的地址：

```php
http://tp5.com/hello-thinkphp
```

## 路由参数

我们还可以约束路由规则的请求类型或者URL后缀之类的条件，例如：

```php
return [
    // 定义路由的请求类型和后缀
    'hello/[:name]' => ['index/hello', ['method' => 'get', 'ext' => 'html']],
];
```

上面定义的路由规则限制了必须是get请求，而且后缀必须是html的，所以下面的访问地址：

```php
http://tp5.com/hello // 无效
http://tp5.com/hello.html // 有效
http://tp5.com/hello/thinkphp // 无效
http://tp5.com/hello/thinkphp.html // 有效
```

## 变量规则

接下来，我们来尝试一些复杂的路由规则定义满足不同的路由变量。在此之前，首先增加一个控制器类如下：

```php
<?php

namespace app\index\controller;

class Blog
{

    public function get($id)
    {
        return '查看id=' . $id . '的内容';
    }

    public function read($name)
    {
        return '查看name=' . $name . '的内容';
    }

    public function archive($year, $month)
    {
        return '查看' . $year . '/' . $month . '的归档内容';
    }
}
```

添加如下路由规则：

```php
return [
    'blog/:year/:month' => ['blog/archive', ['method' => 'get'], ['year' => '\d{4}', 'month' => '\d{2}']],
    'blog/:id'          => ['blog/get', ['method' => 'get'], ['id' => '\d+']],
    'blog/:name'        => ['blog/read', ['method' => 'get'], ['name' => '\w+']],
];
```

在上面的路由规则中，我们对变量进行的规则约束，变量规则使用正则表达式进行定义。

我们看下几种URL访问的情况

```php
// 访问id为5的内容
http://tp5.com/blog/5 
// 访问name为thinkphp的内容
http://tp5.com/blog/thinkphp 
// 访问2015年5月的归档内容
http://tp5.com/blog/2015/05
```

## 路由分组

上面的三个路由规则由于都是`blog`打头，所以我们可以做如下的简化：

```php
return [
    '[blog]' => [
        ':year/:month' => ['blog/archive', ['method' => 'get'], ['year' => '\d{4}', 'month' => '\d{2}']],    
        ':id'          => ['blog/get', ['method' => 'get'], ['id' => '\d+']],
        ':name'        => ['blog/read', ['method' => 'get'], ['name' => '\w+']],
    ],
];
```

对于这种定义方式，我们称之为路由分组，路由分组一定程度上可以提高路由检测的效率。

## 复杂路由

有时候，我们还需要对URL做一些特殊的定制，例如如果要同时支持下面的访问地址

```php
http://tp5.com/blog/thinkphp 
http://tp5.com/blog-2015-05
```

我们只要稍微改变路由定义规则即可：

```php
return [
    'blog/:id'            => ['blog/get', ['method' => 'get'], ['id' => '\d+']],
    'blog/:name'          => ['blog/read', ['method' => 'get'], ['name' => '\w+']],
    'blog-<year>-<month>' => ['blog/archive', ['method' => 'get'], ['year' => '\d{4}', 'month' => '\d{2}']],
];
```

对 `blog-<year>-<month>` 这样的非正常规范，我们需要使用<变量名>这样的变量定义方式，而不是 `:变量名`方式。

简单起见，我们还可以把变量规则统一定义，例如：

```php
return [
    // 全局变量规则定义
    '__pattern__'         => [
        'name'  => '\w+',
        'id'    => '\d+',
        'year'  => '\d{4}',
        'month' => '\d{2}',
    ],
    // 路由规则定义
    'blog/:id'            => 'blog/get',
    'blog/:name'          => 'blog/read',
    'blog-<year>-<month>' => 'blog/archive',
];
```

在`__pattern__`中定义的变量规则我们称之为全局变量规则，在路由规则里面定义的变量规则我们称之为局部变量规则，如果一个变量同时定义了全局规则和局部规则的话，当前的局部规则会覆盖全局规则的，例如：

```php
return [
    // 全局变量规则
    '__pattern__'         => [
        'name'  => '\w+',
        'id'    => '\d+',
        'year'  => '\d{4}',
        'month' => '\d{2}',
    ],

    'blog/:id'            => 'blog/get',
    // 定义了局部变量规则
    'blog/:name'          => ['blog/read', ['method' => 'get'], ['name' => '\w{5,}']],
    'blog-<year>-<month>' => 'blog/archive',
];
```

## URL生成

定义路由规则之后，我们可以通过Url类来方便的生成实际的URL地址（路由地址），针对上面的路由规则，我们可以用下面的方式生成URL地址。

```php
// 输出 blog/thinkphp
Url::build('blog/read', 'name=thinkphp');
Url::build('blog/read', ['name' => 'thinkphp']);
// 输出 blog/5
Url::build('blog/get', 'id=5');
Url::build('blog/get', ['id' => 5]);
// 输出 blog/2015/05
Url::build('blog/archive', 'year=2015&month=05');
Url::build('blog/archive', ['year' => '2015', 'month' => '05']);
```

我们还可以使用系统提供的助手函数url来简化

```php
url('blog/read', 'name=thinkphp');
// 等效于
Url::build('blog/read', 'name=thinkphp');
```

通常在模板文件中输出的话，可以使用助手函数，例如：

```php
{:url('blog/read', 'name=thinkphp')}
```

如果你配置了`url_html_suffix`参数的话，生成的URL地址会带上后缀，例如：

```php
'url_html_suffix'   => 'html',
```

那么生成的URL地址 类似

```php
blog/thinkphp.html 
blog/2015/05.html
```

如果你的URL地址全部采用路由方式定义，也可以直接使用路由规则来定义URL生成，例如：

```php
url('/blog/thinkphp');
Url::build('/blog/8');
Url::build('/blog/archive/2015/05');
```

生成方法的第一个参数一定要和路由定义的路由地址保持一致，如果你的路由地址比较特殊，例如使用闭包定义的话，则需要手动给路由指定标识，例如：

```php
// 添加hello路由标识
Route::rule(['hello','hello/:name'], function($name){
    return 'Hello,'.$name;
});

// 根据路由标识快速生成URL
Url::build('hello', 'name=thinkphp');

// 或者使用
Url::build('hello', ['name' => 'thinkphp']);
```

## 控制器

#### 控制器

ThinkPHP V5.0的控制器定义比较灵活，可以无需继承任何的基础类，也可以继承官方封装的`\think\Controller`类或者其他的控制器类。

## 控制器定义

控制器的实际位置：application\index\controller\Index.php

```php
namespace app\index\controller;

class Index 
{
    public function index()
    {
        return 'index';
    }
}
```

控制器类可以无需继承任何类，命名空间默认以`app`为根命名空间。

控制器的根命名空间可以设置，例如我们在应用配置文件中修改：

```php
// 修改应用类库命名空间
'app_namespace' => 'application',
```

则实际的控制器类应该更改定义如下：

```php
namespace application\index\controller;

class Index 
{
    public function index()
    {
        return 'index';
    }
}
```

如果继承了think\Controller类的话，可以直接调用think\View`及`think\Request类的方法

```php
namespace app\index\controller;

use think\Controller;

class Index extends Controller
{
    public function index()
    {
        // 获取包含域名的完整URL地址
        $this->assign('domain',$this->request->url(true));
        return $this->fetch('index');
    }
}
```

## 控制器初始化

如果你的控制器类继承了\think\Controller类的话，可以定义控制器初始化方法_initialize，在该控制器的方法调用之前首先执行。

```
namespace app\index\controller;

use think\Controller;

class Index extends Controller
{

    public function _initialize()
    {
        echo 'init<br/>';
    }

    public function hello()
    {
        return 'hello';
    }

    public function data()
    {
        return 'data';
    }
}
```

访问 `http://localhost/index.php/index/Index/hello`

```php
输出：
init
hello
```

## 页面跳转

在应用开发中，经常会遇到一些带有提示信息的跳转页面，例如操作成功或者操作错误页面，并且自动跳转到另外一个目标页面。系统的`\think\Controller`类内置了两个跳转方法`success`和`error`，用于页面跳转提示。

```php
namespace app\index\controller;

use think\Controller;
use app\index\model\User;

class Index extends Controller
{
    public function index()
    {
        $User = new User; //实例化User对象
        $result = $User->save($data); 
        if($result){
            //设置成功后跳转页面的地址，默认的返回页面是$_SERVER['HTTP_REFERER']
            $this->success('新增成功', 'User/list');
        } else {
            //错误页面的默认跳转页面是返回前一页，通常不需要设置
            $this->error('新增失败');
        }
    }
}
```

跳转地址是可选的，success方法的默认跳转地址是`$_SERVER["HTTP_REFERER"]`，`error`方法的默认跳转地址是`javascript:history.back(-1);`

`success`和`error`方法都可以对应的模板，默认的设置是两个方法对应的模板都是：

```php
THINK_PATH . 'tpl/dispatch_jump.tpl'
```

我们可以改变默认的模板：

```php
//默认错误跳转对应的模板文件
'dispatch_error_tmpl' => APP_PATH . 'tpl/dispatch_jump.tpl',
//默认成功跳转对应的模板文件
'dispatch_success_tmpl' => APP_PATH . 'tpl/dispatch_jump.tpl',
```

也可以使用项目内部的模板文件

```php
//默认错误跳转对应的模板文件
'dispatch_error_tmpl' => 'public/error',
//默认成功跳转对应的模板文件
'dispatch_success_tmpl' => 'public/success',
```

模板文件可以使用模板标签，并且可以使用下面的模板变量：

## 重定向

`\think\Controller`类的`redirect`方法可以实现页面的重定向功能。

```php
//重定向到News模块的Category操作
$this->redirect('News/category', ['cate_id' => 2]);
```

上面的用法是跳转到News模块的category操作，重定向后会改变当前的URL地址。

或者直接重定向到一个指定的外部URL地址，例如：

```php
//重定向到指定的URL地址 并且使用302
$this->redirect('http://thinkphp.cn/blog/2',302);
```

可以在重定向的时候通过session闪存数据传值，例如

```php
$this->redirect('News/category', ['cate_id' => 2], 302, ['data' => 'hello']);
```

使用redirect助手函数还可以实现更多的功能，例如可以记住当前的URL后跳转

```php
redirect('News/category')->remember();
```

## 空操作

空操作是指系统在找不到指定的操作方法的时候，会定位到空操作（`_empty`）方法来执行，利用这个机制，我们可以实现错误页面和一些`URL`的优化。

例如，下面我们用空操作功能来实现一个城市切换的功能。 我们只需要给City控制器类定义一个_empty （空操作）方法：

```php
<?php
namespace app\index\controller;

class City 
{
    public function _empty($name)
    {
        //把所有城市的操作解析到city方法
        return $this->showCity($name);
    }

    //注意 showCity方法 本身是 protected 方法
    protected function showCity($name)
    {
        //和$name这个城市相关的处理
         return '当前城市' . $name;
    }
}
```

接下来，我们就可以在浏览器里面输入

```php
http://serverName/index/city/beijing/
http://serverName/index/city/shanghai/
http://serverName/index/city/shenzhen/
```

由于City并没有定义`beijing`、`shanghai`或者`shenzhen`操作方法，因此系统会定位到空操作方法 `_empty`中去解析，`_empty`方法的参数就是当前URL里面的操作名，因此会看到依次输出的结果是：

```php
当前城市:beijing
当前城市:shanghai
当前城市:shenzhen
```

## 请求对象

## 请求信息

如果要获取当前的请求信息，可以使用`\think\Request`类

```php
$request = Request::instance();
```

也可以使用助手函数

```php
$request = request();
```

## 获取URL信息

```php
$request = Request::instance();
// 获取当前域名
echo 'domain: ' . $request->domain() . '<br/>';
// 获取当前入口文件
echo 'file: ' . $request->baseFile() . '<br/>';
// 获取当前URL地址 不含域名
echo 'url: ' . $request->url() . '<br/>';
// 获取包含域名的完整URL地址
echo 'url with domain: ' . $request->url(true) . '<br/>';
// 获取当前URL地址 不含QUERY_STRING
echo 'url without query: ' . $request->baseUrl() . '<br/>';
// 获取URL访问的ROOT地址
echo 'root:' . $request->root() . '<br/>';
// 获取URL访问的ROOT地址
echo 'root with domain: ' . $request->root(true) . '<br/>';
// 获取URL地址中的PATH_INFO信息
echo 'pathinfo: ' . $request->pathinfo() . '<br/>';
// 获取URL地址中的PATH_INFO信息 不含后缀
echo 'pathinfo: ' . $request->path() . '<br/>';
// 获取URL地址中的后缀信息
echo 'ext: ' . $request->ext() . '<br/>';
```

输出结果为：

```php
domain: http://tp5.com
file: /index.php
url: /index/index/hello.html?name=thinkphp
url with domain: http://tp5.com/index/index/hello.html?name=thinkphp
url without query: /index/index/hello.html
root:
root with domain: http://tp5.com
pathinfo: index/index/hello.html
pathinfo: index/index/hello
ext: html
```

## 设置/获取 模块/控制器/操作名称

```php
$request = Request::instance();
echo "当前模块名称是" . $request->module();
echo "当前控制器名称是" . $request->controller();
echo "当前操作名称是" . $request->action();
```

如果当前访问的地址是 `http://serverName/index.php/index/hello_world/index`

输出结果为：

```php
当前模块名称是index
当前控制器名称是HelloWorld
当前操作名称是index
```

## 获取请求参数

```php
$request = Request::instance();
echo '请求方法：' . $request->method() . '<br/>';
echo '资源类型：' . $request->type() . '<br/>';
echo '访问ip地址：' . $request->ip() . '<br/>';
echo '是否AJax请求：' . var_export($request->isAjax(), true) . '<br/>';
echo '请求参数：';
dump($request->param());
echo '请求参数：仅包含name';
dump($request->only(['name']));
echo '请求参数：排除name';
dump($request->except(['name']));
```

输出结果为：

```php
请求方法：GET
资源类型：html
访问ip地址：127.0.0.1
是否Ajax请求：false
请求参数：
array (size=2)
  'test' => string 'ddd' (length=3)
  'name' => string 'thinkphp' (length=8)

请求参数：仅包含name
array (size=1)
  'name' => string 'thinkphp' (length=8)

请求参数：排除name
array (size=1)
  'test' => string 'ddd' (length=3)
```

## 输入变量

可以通过`Request`对象完成全局输入变量的检测、获取和安全过滤，支持包括`$_GET、$_POST、$_REQUEST、$_SERVER、$_SESSION、$_COOKIE、$_ENV`等系统变量，以及文件上传信息。

## 获取`PARAM`变量

`PARAM`变量是框架提供的用于自动识别`GET、POST`或者`PUT`请求的一种变量获取方式，是系统推荐的获取请求参数的方法，用法如下：

```php
// 获取当前请求的name变量
Request::instance()->param('name');
// 获取当前请求的所有变量（经过过滤）
Request::instance()->param();
// 获取当前请求的所有变量（原始数据）
Request::instance()->param(false);
// 获取当前请求的所有变量（包含上传文件）
Request::instance()->param(true);
```

使用助手函数实现：

```php
input('param.name');
input('param.');
或者
input('name');
input('');
```

因为`input`函数默认就采用PARAM变量读取方式。

## 获取`GET`变量

```php
Request::instance()->get('id'); // 获取某个get变量
Request::instance()->get('name'); // 获取get变量
Request::instance()->get(); // 获取所有的get变量（经过过滤的数组）
Request::instance()->get(false); // 获取所有的get变量（原始数组）
```

或者使用内置的助手函数`input`方法实现相同的功能：

```php
input('get.id');
input('get.name');
input('get.');
```

## 获取`POST`变量

```php
Request::instance()->post('name'); // 获取某个post变量
Request::instance()->post(); // 获取经过过滤的全部post变量
Request::instance()->post(false); // 获取全部的post原始变量
```

使用助手函数实现：

```php
input('post.name');
input('post.');
```

## 获取`PUT`变量

```php
Request::instance()->put('name'); // 获取某个put变量
Request::instance()->put(); // 获取全部的put变量（经过过滤）
Request::instance()->put(false); // 获取全部的put原始变量
```

使用助手函数实现：

```php
input('put.name');
input('put.');
```

## 获取`REQUEST`变量

```php
Request::instance()->request('id'); // 获取某个request变量
Request::instance()->request(); // 获取全部的request变量（经过过滤）
Request::instance()->request(false); // 获取全部的request原始变量数据
```

使用助手函数实现：

```php
input('request.id');
input('request.');
```

## 获取`SERVER`变量

```php
Request::instance()->server('PHP_SELF'); // 获取某个server变量
Request::instance()->server(); // 获取全部的server变量
```

使用助手函数实现：

```php
input('server.PHP_SELF');
input('server.');
```

## 获取`SESSION`变量

```php
Request::instance()->session('user_id'); // 获取某个session变量
Request::instance()->session(); // 获取全部的session变量
```

使用助手函数实现：

```php
input('session.user_id');
input('session.');
```

## 获取`Cookie`变量

```php
Request::instance()->cookie('user_id'); // 获取某个cookie变量
Request::instance()->cookie(); // 获取全部的cookie变量
```

使用助手函数实现：

```php
input('cookie.user_id');
input('cookie.');
```

## 请求类型

```php
// 是否为 GET 请求
if (Request::instance()->isGet()) echo "当前为 GET 请求";
// 是否为 POST 请求
if (Request::instance()->isPost()) echo "当前为 POST 请求";
// 是否为 PUT 请求
if (Request::instance()->isPut()) echo "当前为 PUT 请求";
// 是否为 DELETE 请求
if (Request::instance()->isDelete()) echo "当前为 DELETE 请求";
// 是否为 Ajax 请求
if (Request::instance()->isAjax()) echo "当前为 Ajax 请求";
// 是否为 Pjax 请求
if (Request::instance()->isPjax()) echo "当前为 Pjax 请求";
// 是否为手机访问
if (Request::instance()->isMobile()) echo "当前为手机访问";
// 是否为 HEAD 请求
if (Request::instance()->isHead()) echo "当前为 HEAD 请求";
// 是否为 Patch 请求
if (Request::instance()->isPatch()) echo "当前为 PATCH 请求";
// 是否为 OPTIONS 请求
if (Request::instance()->isOptions()) echo "当前为 OPTIONS 请求";
// 是否为 cli
if (Request::instance()->isCli()) echo "当前为 cli";
// 是否为 cgi
if (Request::instance()->isCgi()) echo "当前为 cgi";
```

助手函数

```php
// 是否为 GET 请求
if (request()->isGet()) echo "当前为 GET 请求";
……
```

## 数据库操作

## 数据库配置

我们给应用定义数据库配置文件（`appliation/database.php`），里面设置了应用的全局数据库配置信息。

```php
return [
    // 数据库类型
    'type'        => 'mysql',
    // 服务器地址
    'hostname'    => '127.0.0.1',
    // 数据库名
    'database'    => 'test',
    // 数据库用户名
    'username'    => 'root',
    // 数据库密码
    'password'    => '',
    // 数据库连接端口
    'hostport'    => '',
    // 数据库连接参数
    'params'      => [],
    // 数据库编码默认采用utf8
    'charset'     => 'utf8',
    // 数据库表前缀
    'prefix'      => '',
    // 数据库调试模式
    'debug'       => true,
];
```

## 配置长链接

```php
return [
    // 数据库名
    'database'    => 'demo',
    // 数据库表前缀
    'prefix'      => 'think_',
    // 数据库连接参数
    'params' => [
        // 使用长连接
        \PDO::ATTR_PERSISTENT => true,
    ],    
];
```

## 原生查询

设置好数据库连接信息后，我们就可以直接进行原生的SQL查询操作了，包括`query`和`execute`两个方法，分别用于查询操作和写操作，下面我们来实现数据表`think_data`的`CURD`操作。

**创建（create）**

```php
// 插入记录
$result = Db::execute('insert into think_data (id, name ,status) values (5, "thinkphp",1)');
dump($result);
```

**更新（update）**

```php
// 更新记录
$result = Db::execute('update think_data set name = "framework" where id = 5 ');
dump($result);
```

**读取（read）**

```php
// 查询数据
$result = Db::query('select * from think_data where id = 5');
dump($result);
```

**删除（delete）**

```php
// 删除数据
$result = Db::execute('delete from think_data where id = 5 ');
dump($result);
```

**其它操作**

可以执行一些其他的数据库操作，原则上，读操作都使用`query`方法，写操作使用`execute`方法即可，例如：

```php
// 显示数据库列表
$result = Db::query('show tables from demo');
dump($result);


// 清空数据表
$result = Db::execute('TRUNCATE table think_data');
dump($result);
```

## 查询构造器

除了原生查询外，5.0还提供了数据库查询构造器，可以更方便执行数据库操作，查询构造器基于PDO实现，对不同的数据库驱动都是统一的语法。

```php
// 插入记录
Db::table('think_data')
    ->insert(['id' => 18, 'name' => 'thinkphp', 'status' => 1]);

// 更新记录
Db::table('think_data')
    ->where('id', 18)
    ->update(['name' => "hello"]);

// 查询数据
$list = Db::table('think_data')
    ->field('name,email')
    ->where('id', 18)
    ->select();

// 删除数据
Db::table('think_data')
    ->where('id', 18)
    ->delete();
```

由于我们在数据库配置文件中设置了数据表的前缀为`think_`，因此，`table`方法可以改成`name`方法，这样就不会因为数据表前缀的修改而改动`CURD`代码，例如：

```php
// 插入记录
Db::name('data')
    ->insert(['id' => 18, 'name' => 'thinkphp']);

// 更新记录
Db::name('data')
    ->where('id', 18)
    ->update(['name' => "framework"]);

// 查询数据
$list = Db::name('data')
    ->where('id', 18)
    ->select();
dump($list);

// 删除数据
Db::name('data')
    ->where('id', 18)
    ->delete();
```

如果使用系统提供的助手函数`db`则可以进一步简化查询代码如下：

```php
$db = db('data');
// 插入记录
$db->insert(['id' => 20, 'name' => 'thinkphp']);

// 更新记录
$db->where('id', 20)->update(['name' => "framework"]);

// 查询数据
$list = $db->where('id', 20)->select();
dump($list);

// 删除数据
$db->where('id', 20)->delete();
```

## 链式操作

使用链式操作可以完成复杂的数据库查询操作，例如：

```php
// 查询十个满足条件的数据 并按照id倒序排列
$list = Db::name('data')
    ->where('status', 1)
    ->field('id,name')
    ->order('id', 'desc')
    ->limit(10)
    ->select();
dump($list);
```

链式操作不分先后，只要在查询方法（这里是`select`方法）之前调用就行，所以，下面的查询是等效的：

```php
// 查询十个满足条件的数据 并按照id倒序排列
$list = Db::name('data')
    ->field('id,name')
    ->order('id', 'desc')
    ->where('status', 1)
    ->limit(10)
    ->select();
dump($list);
```

支持链式操作的查询方法包括：

| 方法名  | 描述         |
| :------ | :----------- |
| select  | 查询数据集   |
| find    | 查询单个记录 |
| insert  | 插入记录     |
| update  | 更新记录     |
| delete  | 删除记录     |
| value   | 查询值       |
| column  | 查询列       |
| chunk   | 分块查询     |
| count等 | 聚合查询     |

## 事务支持

对于事务的支持，最简单的方法就是使用`transaction`方法，只需要把需要执行的事务操作封装到闭包里面即可自动完成事务，例如：

```php
Db::transaction(function () {
    Db::table('think_user')
        ->delete(1);
    Db::table('think_data')
        ->insert(['id' => 28, 'name' => 'thinkphp', 'status' => 1]);
});
```

一旦`think_data`表写入失败的话，系统会自动回滚，写入成功的话系统会自动提交当前事务。

也可以手动控制事务的提交，上面的实现代码可以改成：

```php
// 启动事务
Db::startTrans();
try {
    Db::table('think_user')
        ->delete(1);
    Db::table('think_data')
        ->insert(['id' => 28, 'name' => 'thinkphp', 'status' => 1]);
    // 提交事务
    Db::commit();
} catch (\Exception $e) {
    // 回滚事务
    Db::rollback();
}
```

## 模型&&验证器

#### 定义一个User模型类：

```php
namespace app\index\model;

use think\Model;

class User extends Model
{
    // 设置当前模型对应的完整数据表名称
    protected $table = 'think_user';


}
```

#### 模型调用

模型类可以使用静态调用或者实例化调用两种方式，例如：

```php
// 静态调用
$user = User::get(1);
$user->name = 'thinkphp';
$user->save();

// 实例化模型
$user = new User;
$user->name= 'thinkphp';
$user->save();

// 使用 Loader 类实例化（单例）
$user = Loader::model('User');

// 或者使用助手函数`model`
$user = model('User');
$user->name= 'thinkphp';
$user->save();
```

#### 模型初始化

模型同样支持初始化，与控制器的初始化不同的是，模型的初始化是重写`Model`的`initialize`，具体如下

```php
namespace app\index\model;

use think\Model;

class Index extends Model
{

    //自定义初始化
    protected function initialize()
    {
        //需要调用`Model`的`initialize`方法
        parent::initialize();
        //TODO:自定义的初始化
    }
}
```

同样也可以使用静态`init`方法，需要注意的是`init`只在第一次实例化的时候执行，并且方法内需要注意静态调用的规范，具体如下：

```php
namespace app\index\model;

use think\Model;

class Index extends Model
{

    //自定义初始化
    protected static function init()
    {
        //TODO:自定义的初始化
    }
}
```

#### 新增

**添加一条数据**

```php
$user           = new User;
$user->name     = 'thinkphp';
$user->email    = 'thinkphp@qq.com';
$user->save();

也可以使用data方法批量赋值：

$user = new User;
$user->data([
    'name'  =>  'thinkphp',
    'email' =>  'thinkphp@qq.com'
]);
$user->save();


或者直接在实例化的时候传入数据

$user = new User([
    'name'  =>  'thinkphp',
    'email' =>  'thinkphp@qq.com'
]);
$user->save();

如果需要过滤非数据表字段的数据，可以使用：

$user = new User($_POST);
// 过滤post数组中的非数据表字段数据
$user->allowField(true)->save();

如果你通过外部提交赋值给模型，并且希望指定某些字段写入，可以使用：

$user = new User($_POST);
// post数组中只有name和email字段会写入
$user->allowField(['name','email'])->save();
```

**获取自增ID**

如果要获取新增数据的自增ID，可以使用下面的方式：

```php
$user           = new User;
$user->name     = 'thinkphp';
$user->email    = 'thinkphp@qq.com';
$user->save();
// 获取自增ID
echo $user->id;
```

注意这里其实是获取模型的主键，如果你的主键不是id，而是user_id的话，其实获取自增ID就变成这样：

```PHP
$user           = new User;
$user->name     = 'thinkphp';
$user->email    = 'thinkphp@qq.com';
$user->save();
// 获取自增ID
echo $user->user_id;
```

注意不要在同一个实例里面多次新增数据，如果确实需要多次新增，那么可以用下面的方式：

```php
$user           = new User;
$user->name     = 'thinkphp';
$user->email    = 'thinkphp@qq.com';
$user->save();
$user->name     = 'onethink';
$user->email    = 'onethink@qq.com';
// 第二次开始必须使用下面的方式新增
$user->isUpdate(false)->save();
```

**添加多条数据**

支持批量新增，可以使用：

```php
$user = new User;
$list = [
    ['name'=>'thinkphp','email'=>'thinkphp@qq.com'],
    ['name'=>'onethink','email'=>'onethink@qq.com']
];
$user->saveAll($list);
```

#### 更新

```php
在取出数据后，更改字段内容后更新数据。

$user = User::get(1);
$user->name     = 'thinkphp';
$user->email    = 'thinkphp@qq.com';
$user->save();


也可以直接带更新条件来更新数据

$user = new User;
// save方法第二个参数为更新条件
$user->save([
    'name'  => 'thinkphp',
    'email' => 'thinkphp@qq.com'
],['id' => 1]);

上面两种方式更新数据，如果需要过滤非数据表字段的数据，可以使用：

$user = new User();
// 过滤post数组中的非数据表字段数据
$user->allowField(true)->save($_POST,['id' => 1]);

如果你通过外部提交赋值给模型，并且希望指定某些字段写入，可以使用：

$user = new User();
// post数组中只有name和email字段会写入
$user->allowField(['name','email'])->save($_POST, ['id' => 1]);

可以使用saveAll方法批量更新数据，例如：

$user = new User;
$list = [
    ['id'=>1, 'name'=>'thinkphp', 'email'=>'thinkphp@qq.com'],
    ['id'=>2, 'name'=>'onethink', 'email'=>'onethink@qq.com']
];
$user->saveAll($list);
```

#### 删除

删除模型数据，可以在实例化后调用delete方法。

```php
$user = User::get(1);
$user->delete();
```

根据主键删除

```php
User::destroy(1);
// 支持批量删除多个数据
User::destroy('1,2,3');
// 或者
User::destroy([1,2,3]);
```

条件删除

```php
// 删除状态为0的数据
User::destroy(['status' => 0]);

还支持使用闭包删除，例如：
User::destroy(function($query){
    $query->where('id','>',10);
});

或者通过数据库类的查询条件删除
User::where('id','>',10)->delete();
```

#### 查询

```php
获取单个数据的方法包括：


取出主键为1的数据
$user = User::get(1);
echo $user->name;

// 使用数组查询
$user = User::get(['name' => 'thinkphp']);

// 使用闭包查询
$user = User::get(function($query){
    $query->where('name', 'thinkphp');
});
echo $user->name;


获取多个数据

取出多个数据：
// 根据主键获取多个数据
$list = User::all('1,2,3');
// 或者使用数组
$list = User::all([1,2,3]);
foreach($list as $key=>$user){
    echo $user->name;
}
// 使用数组查询
$list = User::all(['status'=>1]);
// 使用闭包查询
$list = User::all(function($query){
    $query->where('status', 1)->limit(3)->order('id', 'asc');
});
foreach($list as $key=>$user){
    echo $user->name;
}

获取某个字段或者某个列的值
// 获取某个用户的积分
User::where('id',10)->value('score');
// 获取某个列的所有值
User::where('status',1)->column('name');
// 以id为索引
User::where('status',1)->column('name','id');
User::where('status',1)->column('id,name'); // 同tp3的getField

简单方法查询
User::where('id','>',10)->select();
User::where('name','thinkphp')->find();
```

#### 聚合

在模型中也可以调用数据库的聚合方法进行查询，例如：

| 方法  | 说明                                     |
| :---- | :--------------------------------------- |
| count | 统计数量，参数是要统计的字段名（可选）   |
| max   | 获取最大值，参数是要统计的字段名（必须） |
| min   | 获取最小值，参数是要统计的字段名（必须） |
| avg   | 获取平均值，参数是要统计的字段名（必须） |
| sum   | 获取总分，参数是要统计的字段名（必须）   |

```php
静态调用：
User::count();
User::where('status','>',0)->count();
User::where('status',1)->avg('score');
User::max('score');

动态调用：
$user = new User;
$user->count();
$user->where('status','>',0)->count();
$user->where('status',1)->avg('score');
$user->max('score');
```

#### 获取器

获取器的作用是在获取数据的字段值后自动进行处理，例如，我们需要对状态值进行转换，可以使用：

```PHP
class User extends Model 
{
    public function getStatusAttr($value)
    {
        $status = [-1=>'删除',0=>'禁用',1=>'正常',2=>'待审核'];
        return $status[$value];
    }
}
```

数据表的字段会自动转换为驼峰法，一般status字段的值采用数值类型，我们可以通过获取器定义，自动转换为字符串描述。

```php
$user = User::get(1);
echo $user->status; // 例如输出“正常”
```

获取器还可以定义数据表中不存在的字段，例如：

```PHP
class User extends Model 
{
    public function getStatusTextAttr($value,$data)
    {
        $status = [-1=>'删除',0=>'禁用',1=>'正常',2=>'待审核'];
        return $status[$data['status']];
    }
}
```

我们就可以直接使用status_text字段的值了，例如：

```PHP
$user = User::get(1);
echo $user->status_text; // 例如输出“正常”
```

获取器只有当获取某个数据属性的时候自动触发，如果你要获取包含获取器处理的全部数据属性的话，可以使用下面的方法：

```php
$user = User::get(1);
// 获取全部获取器数据
dump($user->toArray());
```

#### 修改器

```php
修改器的作用是可以在数据赋值的时候自动进行转换处理，例如：

class User extends Model 
{
    public function setNameAttr($value)
    {
        return strtolower($value);
    }
}

如下代码实际保存到数据库中的时候会转为小写
$user = new User();
$user->name = 'THINKPHP';
$user->save();
echo $user->name; // thinkphp

也可以进行序列化字段的组装：
class User extends Model 
{
    public function setNameAttr($value,$data)
    {
        return serialize($data);
    }
}

批量修改
除了赋值的方式可以触发修改器外，还可以用下面的方法批量触发修改器

$user = new User();
$data['name'] = 'THINKPHP';
$data['email'] = 'thinkphp@qq.com';
$user->data($data, true);
$user->save();
echo $user->name; // thinkphp

或者直接使用save方法触发，例如：

$user = new User();
$data['name'] = 'THINKPHP';
$data['email'] = 'thinkphp@qq.com';
$user->save($data);
echo $user->name; // thinkphp
```

#### 时间戳

系统支持自动写入创建和更新的时间戳字段，有两种方式配置支持。

```php
第一种方式，是在数据库配置文件中添加全局设置：
// 开启自动写入时间戳字段
'auto_timestamp' => true,


第二种是直接在单独的模型类里面设置：
protected $autoWriteTimestamp = true;

如果这两个地方设置为true，默认识别为整型int类型，如果你的时间字段不是int类型的话，
例如使用datetime类型的话，可以这样设置：

// 开启自动写入时间戳字段
'auto_timestamp' => 'datetime',

或者

protected $autoWriteTimestamp = 'datetime';

如果是关闭全局的自动时间写入，则可以使用：

// 关闭全局自动写入时间字段
'auto_timestamp' => false,
```

## 验证器

ThinkPHP5.0验证使用独立的`\think\Validate`类或者验证器进行验证。

#### 独立验证

任何时候，都可以使用`Validate`类进行独立的验证操作，例如：

```PHP
$validate = new Validate([
    'name'  => 'require|max:25',
    'email' => 'email'
]);
$data = [
    'name'  => 'thinkphp',
    'email' => 'thinkphp@qq.com'
];
if (!$validate->check($data)) {
    dump($validate->getError());
}
```

这是5.0推荐的验证方式，为具体的验证场景或者数据表定义好验证器类，直接调用验证类的`check`方法即可完成验证，下面是一个例子：

我们定义一个`\app\index\validate\User`验证器类用于`User`的验证。

```PHP
namespace app\index\validate;

use think\Validate;

class User extends Validate
{
    protected $rule = [
        'name'  =>  'require|max:25',
        'email' =>  'email',
    ];

}
```

在需要进行`User`验证的地方，添加如下代码即可：

```php
$data = [
    'name'=>'thinkphp',
    'email'=>'thinkphp@qq.com'
];

$validate = Loader::validate('User');

if(!$validate->check($data)){
    dump($validate->getError());
}
```

使用助手函数实例化验证器

```PHP
$validate = validate('User');
```

## 验证规则

```PHP
$rule = [
    'name'  => 'require|max:25',
    'age'   => 'number|between:1,120',
    'email' => 'email',
];

$msg = [
    'name.require' => '名称必须',
    'name.max'     => '名称最多不能超过25个字符',
    'age.number'   => '年龄必须是数字',
    'age.between'  => '年龄只能在1-120之间',
    'email'        => '邮箱格式错误',
];

$data = [
    'name'  => 'thinkphp',
    'age'   => 10,
    'email' => 'thinkphp@qq.com',
];

$validate = new Validate($rule, $msg);
$result   = $validate->check($data);
```

#### 使用默认的错误提示信息

```php
$rule = [
    'name'  => 'require|max:25',
    'age'   => 'number|between:1,120',
    'email' => 'email',
];

$data = [
    'name'  => 'thinkphp',
    'age'   => 121,
    'email' => 'thinkphp@qq.com',
];
$validate = new Validate($rule);
$result   = $validate->check($data);
if(!$result){
    echo $validate->getError();
}
```

#### 验证场景

```PHP
$rule = [
    'name'  => 'require|max:25',
    'age'   => 'number|between:1,120',
    'email' => 'email',
];
$msg = [
    'name.require' => '名称必须',
    'name.max'     => '名称最多不能超过25个字符',
    'age.number'   => '年龄必须是数字',
    'age.between'  => '年龄只能在1-120之间',
    'email'        => '邮箱格式错误',
];
$data = [
    'name'  => 'thinkphp',
    'age'   => 10,
    'email' => 'thinkphp@qq.com',
];
$validate = new Validate($rule);
$validate->scene('edit', ['name', 'age']);
$result = $validate->scene('edit')->check($data);
```

表示验证edit场景（该场景定义只需要验证name和age字段）。

如果使用了验证器，可以直接在类里面定义场景，例如：

```PHP
namespace app\index\validate;

use think\Validate;

class User extends Validate
{
    protected $rule =   [
        'name'  => 'require|max:25',
        'age'   => 'number|between:1,120',
        'email' => 'email',    
    ];

    protected $message  =   [
        'name.require' => '名称必须',
        'name.max'     => '名称最多不能超过25个字符',
        'age.number'   => '年龄必须是数字',
        'age.between'  => '年龄只能在1-120之间',
        'email'        => '邮箱格式错误',    
    ];

    protected $scene = [
        'edit'  =>  ['name','age'],
    ];

}
```

然后再需要验证的地方直接使用 scene 方法验证

```PHP
$data = [
    'name'  => 'thinkphp',
    'age'   => 10,
    'email' => 'thinkphp@qq.com',
];

$validate = new \app\index\validate\User($rule);
$result = $validate->scene('edit')->check($data);
```

#### 控制器验证

如果你需要在控制器中进行验证，并且继承了`\think\Controller`的话，可以调用控制器类提供的`validate`方法进行验证，如下：

```PHP
$result = $this->validate(
    [
        'name'  => 'thinkphp',
        'email' => 'thinkphp@qq.com',
    ],
    [
        'name'  => 'require|max:25',
        'email'   => 'email',
    ]);
if(true !== $result){
    // 验证失败 输出错误信息
    dump($result);
}
```

如果定义了验证器类的话，例如：

```PHP
namespace app\index\validate;

use think\Validate;

class User extends Validate
{
    protected $rule = [
        'name'  =>  'require|max:25',
        'email' =>  'email',
    ];

    protected $message = [
        'name.require'  =>  '用户名必须',
        'email' =>  '邮箱格式错误',
    ];

    protected $scene = [
        'add'   =>  ['name','email'],
        'edit'  =>  ['email'],
    ];
}
```

控制器中的验证代码可以简化为：

```PHP
$result = $this->validate($data,'User');
if(true !== $result){
    // 验证失败 输出错误信息
    dump($result);
}
```

如果要使用场景，可以使用：

```PHP
$result = $this->validate($data,'User.edit');
if(true !== $result){
    // 验证失败 输出错误信息
    dump($result);
}
```

#### 模型验证

如果使用下面的验证器类的话：

```PHP
namespace app\index\validate;
use think\Validate;
class User extends Validate
{
    protected $rule = [
        'name'  =>  'require|max:25',
        'email' =>  'email',
    ];

    protected $message = [
        'name.require'  =>  '用户名必须',
        'email' =>  '邮箱格式错误',
    ];

    protected $scene = [
        'add'   =>  ['name','email'],
        'edit'  =>  ['email'],
    ];    
}
```

模型验证代码可以简化为：

```PHP
$User = new User;
// 调用当前模型对应的User验证器类进行数据验证
$result = $User->validate(true)->save($data);
if(false === $result){
    // 验证失败 输出错误信息
    dump($User->getError());
}
```

如果需要调用的验证器类和当前的模型名称不一致，则可以使用：

```PHP
$User = new User;
// 调用Member验证器类进行数据验证
$result = $User->validate('Member')->save($data);
if(false === $result){
    // 验证失败 输出错误信息
    dump($User->getError());
}
```

同样也可以支持场景验证：

```PHP
$User = new User;
// 调用Member验证器类进行数据验证
$result = $User->validate('User.edit')->save($data);
if(false === $result){
    // 验证失败 输出错误信息
    dump($User->getError());
}
```

#### 内置规则

```PHP
验证某个字段必须，例如：
'name'=>'require'

验证某个字段的值是否为数字（采用filter_var验证），例如：
'num'=>'number'

验证某个字段的值是否为浮点数字（采用filter_var验证），例如：
'num'=>'float'

验证某个字段的值是否为布尔值（采用filter_var验证），例如：
'num'=>'boolean'

验证某个字段的值是否为email地址（采用filter_var验证），例如：
'email'=>'email'

验证某个字段的值是否为数组，例如：
'info'=>'array'

验证某个字段是否为为 yes, on, 或是 1。这在确认"服务条款"是否同意时很有用，例如：
'accept'=>'accepted'

验证值是否为有效的日期，例如：
'date'=>'date'

验证某个字段的值是否为字母，例如：
'name'=>'alpha'

验证某个字段的值是否为字母和数字，例如：
'name'=>'alphaNum'

验证某个字段的值是否为字母和数字，下划线_及破折号-，例如：
'name'=>'alphaDash'

验证某个字段的值只能是汉字，例如：
'name'=>'chs'

验证某个字段的值只能是汉字、字母，例如：
'name'=>'chsAlpha'

验证某个字段的值只能是汉字、字母和数字，例如：
'name'=>'chsAlphaNum'

验证某个字段的值只能是汉字、字母、数字和下划线_及破折号-，例如：
'name'=>'chsDash'

验证某个字段的值是否为有效的域名或者IP，例如：
'host'=>'activeUrl'

验证某个字段的值是否为有效的URL地址（采用filter_var验证），例如：
'url'=>'url'

验证某个字段的值是否为有效的IP地址（采用filter_var验证），例如：
'ip'=>'ip'

验证某个字段的值是否为指定格式的日期，例如：
'create_time'=>'dateFormat:y-m-d'

验证某个字段的值是否在某个范围，例如：
'num'=>'in:1,2,3'

验证某个字段的值不在某个范围，例如：
'num'=>'notIn:1,2,3'

验证某个字段的值是否在某个区间，例如：
'num'=>'between:1,10'

验证某个字段的值不在某个范围，例如：
'num'=>'notBetween:1,10'

验证某个字段的值的长度是否在某个范围，例如：
'name'=>'length:4,25'

验证某个字段的值的最大长度，例如：
'name'=>'max:25'

验证某个字段的值的最小长度，例如：
'name'=>'min:5'

验证某个字段的值是否在某个日期之后，例如：
'begin_time' => 'after:2016-3-18',

验证某个字段的值是否在某个日期之前，例如：
'end_time'   => 'before:2016-10-01',
```

## 视图模板

#### 视图

视图功能由`\think\View`类配合视图驱动（模板引擎）类一起完成，目前的内置模板引擎包含PHP原生模板和`Think`模板引擎。

因为新版的控制器可以无需继承任何的基础类，因此在控制器中如何使用视图取决于你怎么定义控制器。

如果你的控制器继承了`\think\Controller`类的话，则无需自己实例化视图类，可以直接调用控制器基础类封装的相关视图类的方法。

```PHP
 // 渲染模板输出
return $this->fetch('hello',['name'=>'thinkphp']);
```

下面的方法可以直接被调用：

| 方法    | 说明           |
| :------ | :------------- |
| fetch   | 渲染模板输出   |
| display | 渲染内容输出   |
| assign  | 模板变量赋值   |
| engine  | 初始化模板引擎 |

如果需要调用`View`类的其它方法，可以直接使用`$this->view` 对象：

#### 助手函数

如果你只是需要渲染模板输出的话，可以使用系统提供的助手函数`view`，可以完成相同的功能：

```PHP
return view('hello',['name'=>'thinkphp']);
```

#### 模板赋值

```PHP
namespace index\app\controller;

class Index extends \think\Controller
{
    public function index()
    {
        // 模板变量赋值
        $this->assign('name','ThinkPHP');
        $this->assign('email','thinkphp@qq.com');
        // 或者批量赋值
        $this->assign([
            'name'  => 'ThinkPHP',
            'email' => 'thinkphp@qq.com'
        ]);
        // 模板输出
        return $this->fetch('index');
    }
}
```

#### 模板渲染

```PHP
// 不带任何参数 自动定位当前操作的模板文件
return $this->fetch();

表示系统会按照默认规则自动定位模板文件，其规则是：
当前模块/默认视图目录/当前控制器（小写）/当前操作（小写）.html

// 指定模板输出 表示调用当前控制器下面的edit模板
return $this->fetch('edit'); 

表示调用Member控制器下面的read模板。
return $this->fetch('member/read');

跨模块渲染模板
return $this->fetch('admin@member/edit');
```

#### 模板标签

```PHP
要更改普通标签的起始标签和结束标签，可以更改下面的配置参数：

'template'      => [
    // 模板引擎
    'type'   => 'think',
    //标签库标签开始标签 
    'taglib_begin'  =>  '<',
    //标签库标签结束标记
    'taglib_end'    =>  '>',     
],

输出模板标签就需要改成

<eq name="name" value="value">
相等
<else/>
不相等
</eq>
```

#### 变量输出

```PHP
$view = new View();
$view->name = 'thinkphp';
return $view->fetch();

Hello,{$name}！
```

#### 系统变量输出

```PHP
{$Think.server.script_name} // 输出$_SERVER['SCRIPT_NAME']变量
{$Think.session.user_id} // 输出$_SESSION['user_id']变量
{$Think.get.pageNumber} // 输出$_GET['pageNumber']变量
{$Think.cookie.name}  // 输出$_COOKIE['name']变量
```

#### 请求参数

```php
模板支持直接输出Request请求对象的方法参数，用法如下：

// 调用Request对象的get方法 传入参数为id
{$Request.get.id}
// 调用Request对象的param方法 传入参数为name
{$Request.param.name}
// 调用Request对象的param方法 传入参数为user.nickname
{$Request.param.user.nickname}
// 调用Request对象的root方法
{$Request.root}
// 调用Request对象的root方法，并且传入参数true
{$Request.root.true}
// 调用Request对象的path方法
{$Request.path}
// 调用Request对象的module方法
{$Request.module}
// 调用Request对象的controller方法
{$Request.controller}
// 调用Request对象的action方法
{$Request.action}
// 调用Request对象的ext方法
{$Request.ext}
// 调用Request对象的host方法
{$Request.host}
// 调用Request对象的ip方法
{$Request.ip}
// 调用Request对象的header方法
{$Request.header.accept-encoding}
```

#### 使用函数

```php
我们往往需要对模板输出变量使用函数，可以使用：
{$data.name|md5} 

编译后的结果是：
<?php echo (md5($data['name'])); ?>

{$data.name|substr=0,3}


如果函数有多个参数需要调用，则使用：
{$create_time|date="y-m-d",###}

还可以支持多个函数过滤，多个函数之间用“|”分割即可，例如：
{$name|md5|strtoupper|substr=0,3}
```

#### 使用默认值

```php
给变量输出提供默认值，例如：
{$user.nickname|default="这家伙很懒，什么也没留下"}

系统变量依然可以支持默认值输出，例如：
{$Think.get.name|default="名称为空"}

默认值和函数可以同时使用，例如：
{$Think.get.name|getName|default="名称为空"}
```

#### 三元运算

```php
{$status? '正常' : '错误'}
{$info['status']? $info['msg'] : $info['error']}
{$info.status? $info.msg : $info.error }
```

#### 原样输出

```php
可以使用literal标签来防止模板标签被解析，例如：

{literal}
    Hello,{$name}！
{/literal}
```

#### 模板注释

```php
单行注释
{/* 注释内容 */ } 或 {// 注释内容 } 

多行注释
{/* 这是模板
注释内容*/ }
```

#### 模板布局

```php
全局配置方式

'template'  =>  [
    'layout_on'     =>  true,
    'layout_name'   =>  'layout',
]
```

首先会渲染`application/index/view/layout.html` 模板，布局模板的写法和其他模板的写法类似，本身也可以支持所有的模板标签以及包含文件，区别在于有一个特定的输出替换变量`{__CONTENT__}`，例如，下面是一个典型的`layout.html`模板的写法：

```php
{include file="public/header" /}
 {__CONTENT__}
{include file="public/footer" /}
```

#### 包含文件

```php
在当前模版文件中包含其他的模版文件使用include标签，标签用法：
{include file='模版文件1,模版文件2,...' /}

使用模版表达式
{include file="public/header" /} // 包含头部模版header
{include file="public/menu" /} // 包含菜单模版menu
{include file="blue/public/menu" /} // 包含blue主题下面的menu模版
```

#### 内置标签

| 标签名     | 作用                                                | 包含属性                      |
| :--------- | :-------------------------------------------------- | :---------------------------- |
| include    | 包含外部模板文件（闭合）                            | file                          |
| load       | 导入资源文件（闭合 包括js css import别名）          | file,href,type,value,basepath |
| volist     | 循环数组数据输出                                    | name,id,offset,length,key,mod |
| foreach    | 数组或对象遍历输出                                  | name,item,key                 |
| for        | For循环数据输出                                     | name,from,to,before,step      |
| switch     | 分支判断输出                                        | name                          |
| case       | 分支判断输出（必须和switch配套使用）                | value,break                   |
| default    | 默认情况输出（闭合 必须和switch配套使用）           | 无                            |
| compare    | 比较输出（包括eq neq lt gt egt elt heq nheq等别名） | name,value,type               |
| range      | 范围判断输出（包括in notin between notbetween别名） | name,value,type               |
| present    | 判断是否赋值                                        | name                          |
| notpresent | 判断是否尚未赋值                                    | name                          |
| empty      | 判断数据是否为空                                    | name                          |
| notempty   | 判断数据是否不为空                                  | name                          |
| defined    | 判断常量是否定义                                    | name                          |
| notdefined | 判断常量是否未定义                                  | name                          |
| define     | 常量定义（闭合）                                    | name,value                    |
| assign     | 变量赋值（闭合）                                    | name,value                    |
| if         | 条件判断输出                                        | condition                     |
| elseif     | 条件判断输出（闭合 必须和if标签配套使用）           | condition                     |
| else       | 条件不成立输出（闭合 可用于其他标签）               | 无                            |
| php        | 使用php代码                                         | 无                            |

## 杂项

## 缓存

ThinkPHP采用`think\Cache`类提供缓存功能支持。

#### 设置

```php
$options = [
    // 缓存类型为File
    'type'  =>  'File', 
    // 缓存有效期为永久有效
    'expire'=>  0, 
    //缓存前缀
    'prefix'=>  'think',
     // 指定缓存目录
    'path'  =>  APP_PATH.'runtime/cache/',
];
Cache::connect($options);
```

或者通过定义配置参数的方式，在应用配置文件中添加：

```php
'cache'  => [
    'type'   => 'File',
    'path'   => CACHE_PATH,
    'prefix' => '',
    'expire' => 0,
],
```

#### 获取缓存

```php
dump(Cache::get('name'));
```

#### 删除缓存

```php
Cache::rm('name'); 

获取并删除缓存
Cache::pull('name');
```

#### 清空缓存

```php
Cache::clear();
```

## Session

#### Session初始化

```php
'session'                => [
    'prefix'         => 'think',
    'type'           => '',
    'auto_start'     => true,
],
```

#### 设置session

```php
// 赋值（当前作用域）
Session::set('name','thinkphp');
// 赋值think作用域
Session::set('name','thinkphp','think');
```

#### 判断是否存在

```php
// 判断（当前作用域）是否赋值
Session::has('name');
// 判断think作用域下面是否赋值
Session::has('name','think');
```

#### 取值

```php
// 取值（当前作用域）
Session::get('name');
// 取值think作用域
Session::get('name','think');
```

#### 删除

```php
// 删除（当前作用域）
Session::delete('name');
// 删除think作用域下面的值
Session::delete('name','think');
```

#### 清空

```php
// 清除session（当前作用域）
Session::clear();
// 清除think作用域
Session::clear('think');
```

## Cookie

#### 初始化

```php
// cookie初始化
Cookie::init(['prefix'=>'think_','expire'=>3600,'path'=>'/']);
// 指定当前前缀
Cookie::prefix('think_');
```

支持的参数及默认值如下：

```php
// cookie 名称前缀
'prefix'    => '',
// cookie 保存时间
'expire'    => 0,
// cookie 保存路径
'path'      => '/',
// cookie 有效域名
'domain'    => '',
//  cookie 启用安全传输
'secure'    => false,
// httponly设置
'httponly'  => '',
// 是否使用 setcookie
'setcookie' => true,
```

#### 设置

```php
// 设置Cookie 有效期为 3600秒
Cookie::set('name','value',3600);
// 设置cookie 前缀为think_
Cookie::set('name','value',['prefix'=>'think_','expire'=>3600]);
// 支持数组
Cookie::set('name',[1,2,3]);
```

#### 判断

```php
Cookie::has('name');
// 判断指定前缀的cookie值是否存在
Cookie::has('name','think_');
```

#### 获取

```php
Cookie::get('name');
// 获取指定前缀的cookie值
Cookie::get('name','think_');
```

#### 删除cookie

```php
Cookie::delete('name');
// 删除指定前缀的cookie
Cookie::delete('name','think_');
```

#### 清空

```php
// 清空指定前缀的cookie
Cookie::clear('think_');
```

## 分页

`ThinkPHP5.0`内置了分页实现，要给数据添加分页输出功能在5.0变得非常简单，可以直接在`Db`类查询的时候调用`paginate`方法：

```php
// 查询状态为1的用户数据 并且每页显示10条数据
$list = Db::name('user')->where('status',1)->paginate(10);
// 把分页数据赋值给模板变量list
$this->assign('list', $list);
// 渲染模板输出
return $this->fetch();

模板文件中分页输出代码如下：

<div>
<ul>
{volist name='list' id='user'}
    <li> {$user.nickname}</li>
{/volist}
</ul>
</div>
{$list->render()}
```

也可以单独赋值分页输出的模板变量

```php
// 查询状态为1的用户数据 并且每页显示10条数据
$list = User::where('status',1)->paginate(10);
// 获取分页显示
$page = $list->render();
// 模板变量赋值
$this->assign('list', $list);
$this->assign('page', $page);
// 渲染模板输出
return $this->fetch();

模板文件中分页输出代码如下：
<div>
<ul>
{volist name='list' id='user'}
    <li> {$user.nickname}</li>
{/volist}
</ul>
</div>
{$page}
```

## 上传

`ThinkPHP5.0`对文件上传的支持更加简单。

```php
public function upload(){
    // 获取表单上传文件 例如上传了001.jpg
    $file = request()->file('image');

    // 移动到框架应用根目录/public/uploads/ 目录下
    if($file){
        $info = $file->move(ROOT_PATH . 'public' . DS . 'uploads');
        if($info){
            // 成功上传后 获取上传信息
            // 输出 jpg
            echo $info->getExtension();
            // 输出 20160820/42a79759f284b767dfcb2a0197904287.jpg
            echo $info->getSaveName();
            // 输出 42a79759f284b767dfcb2a0197904287.jpg
            echo $info->getFilename(); 
        }else{
            // 上传失败获取错误信息
            echo $file->getError();
        }
    }
}
```

`move`方法成功的话返回的是一个`\think\File`对象，你可以对上传后的文件进行后续操作。

#### 多文件上传

```php
public function upload(){
    // 获取表单上传文件
    $files = request()->file('image');
    foreach($files as $file){
        // 移动到框架应用根目录/public/uploads/ 目录下
        $info = $file->move(ROOT_PATH . 'public' . DS . 'uploads');
        if($info){
            // 成功上传后 获取上传信息
            // 输出 jpg
            echo $info->getExtension(); 
            // 输出 42a79759f284b767dfcb2a0197904287.jpg
            echo $info->getFilename(); 
        }else{
            // 上传失败获取错误信息
            echo $file->getError();
        }    
    }
}
```

#### 多文件上传重名的解决办法(同一时间上传多张图片问题)

```php
修改源代码文件：
/xxx/thinkphp/library/think/File.php

switch ($this->rule) {
    case 'date':
        $savename = date('Ymd') . DS . md5(microtime(true).$this->filename);
        break;
```

#### 验证码

```php
首先使用Composer安装think-captcha扩展包：

composer require topthink/think-captcha=1.*

模版内验证码的显示
<div>{:captcha_img()}</div>

<div><img src="{:captcha_src()}" alt="captcha" /></div>

使用TP5的内置验证功能，添加captcha验证规则即可
$this->validate($data,[
    'captcha|验证码'=>'require|captcha'
]);

或者手动验证
if(!captcha_check($captcha)){
 //验证失败
};
```

## 命令行

#### 快速生成模块

表示自动生成test模块，自动生成的模块目录包含了config、controller、model和view目录以及common.php公共文件。

```shell
php think build --module test
```

#### 快速生成控制器类

执行下面的指令可以生成 index模块的 Blog控制器类库文件

```shell
php think make:controller index/Blog
```

#### 快速生成模型类

执行下面的指令可以生成 index 模块的 Blog 模型类库文件

```shell
php think make:model index/Blog
```

#### 快速生成类库映射文件

可以使用下面的指令生成类库映射文件，提高系统自动加载的性能。

```shell
php think optimize:autoload
```

指令执行成功后，会在rumtime目录下面生成classmap.php文件，生成的类库映射文件会扫描系统目录和 应用目录的类库

#### 生成路由缓存

optimize:route如果你的应用定义了比较多的路由规则，可以使用下面的指令生成路由缓存文件，提高系统的路由检测的性能

```shell
php think optimize:route
```

指令执行成功后，会在rumtime目录下面生成route.php 文件，生成的路由缓存文件仅仅支持在应用的路由配置文件中定义的路由（包括方法定义和配置定义）

#### 清除缓存文件

1.如果需要清除应用的缓存文件，可以使用下面的命令：

```shell
php think clear
```

不带任何参数调用clear命令的话，会清除 runtime 目录（包括模板缓存、日志文件及其子目录）下面的所 有的文件，但会保留目录。

2.如果需要清除某个指定目录下面的文件，可以使用：

```shell
php think clear --path d:\www\tp5\runtime\log\
```

#### 生成配置缓存文件

1.可以为应用或者模块生成配置缓存文件

```
php think optimize:config
```

默认生成应用的配置缓存文件，调用后会在`runtime`目录下面生成`init.php`文件，生成配置缓存文件 后，应用目录下面的`config.php` `common.php`以及`tags.php`不会被加载，被 `runtime/init.php` 取代。

2.如果需要生成某个模块的配置缓存，可以使用：

```shell
php think optimize:config --module index
```

调用后会在`runtime/index`目录下面生成`init.php`文件，生成后，`index`模块目录下面的 `config.php common.php`以及`tags.php`不会被加载，被`runtime/index/init.php`取代

#### 生成数据表字段缓存

1.可以通过生成数据表字段信息缓存，提升数据库查询的性能，避免多余的查询。命令如下：

```shell
php think optimize:schema
```

会自动生成当前数据库配置文件中定义的数据表字段缓存，也可以指定数据库生成字段缓存（必须有用户权限），例如，下面指定生成demo数据库下面的所有数据表的字段缓存信息

```shell
php think optimize:schema --db demo
```

执行后会自动在'runtime/schema'目录下面按照数据表生成字段缓存文件。

如果你的应用使用了不同的数据库连接，可以根据模块来生成，如下：

```shell
php think optimize:schema --module index
```

会读取index模块的模型来生成数据表字段缓存。

更新数据表字段缓存也是同样的方式，每次执行都会重新生成缓存。如果需要单独更新某个数据表的缓存， 可以使用：

```shell
php think optimize:schema --table think_user
```

支持指定数据库名称

```shell
php think optimize:schema --table demo.think_user
```

#### 创建自定义命令

1.首先在配置文件：application/command.php

```php
return [  
    'app\home\command\Test'  
];
```

配置自定义的命令行的namespace。

2.创建自定义的命令行

我在home模块中的command创建一个Test.php的文件，这里要特别注意，因为是命令行跑，要特别注意文件名的大小写，我一开始的时候没有注意到这个，文件名用了小写，结果一直跑不出来命令。

```php
namespace app\home\command;  

use think\console\Command;  
use think\console\Input;  
use think\console\Output;  

class Test extends Command  
{  
    protected function configure()  
    {  
        $this->setName('test')->setDescription('Command Test');  
    }  

    protected function execute(Input $input, Output $output)  
    {  
        $output->writeln("TestCommand:");  
    }  
}
```

讲解一下，这个文件是集成Think底层的Command类的，configure函数是在命令行中用list命令列出所有任务的时候回显示的出的提示，execute函数是说要执行的命令，在这里可以直接调用其他函数，完成例如统计等任务工作，然后用output输出到命令行。

最后，在根目录中有一个think.php的文件，这个是命令行的入口，文件名可以随意改。代码如下

```php
// 定义项目路径  
define('APP_PATH', './application/');  

// 加载框架引导文件  
require './thinkphp/console.php';
```

然后输入`php think test`， 这样就会显示出结果了。

## Nginx虚拟主机配置

```
server
    {
        listen 80;
        #listen [::]:80;
        server_name aoma.dancefunk.com ;
        index index.html index.htm index.php default.html default.htm default.php;
        root  /home/website/public;

        include none.conf;
        #error_page   404   /404.html;

        # Deny access to PHP files in specific directory
        #location ~ /(wp-content|uploads|wp-includes|images)/.*\.php$ { deny all; }

        location / {
        # 默认请求的文件排序
            index  index.html index.htm index.php;
            # 判断请求的文件是否存在
            #try_files  $uri  /index.php$uri;
            try_files  $uri  /index.php$uri;
            if (!-e $request_filename) {
                # rewrite ^/index.php(.*)$ /index.php?s=$1 last;
                rewrite ^(.*)$ /index.php?s=$1 last;
                break;
            }  

        }

        location ~ .+\.php($|/) {
            #fastcgi_pass remote_php_ip:9000;
            fastcgi_pass unix:/tmp/php-cgi.sock;
            fastcgi_index index.php;
            fastcgi_split_path_info ^(.+\.php)(/.*)$;
            fastcgi_param PATH_INFO $fastcgi_path_info; #add
            fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
            fastcgi_param  PHP_VALUE  "open_basedir=/home/website/:/tmp/:/proc/";
            include fastcgi_params;
        }

        location ~ .*\.(gif|jpg|jpeg|png|bmp|swf)$
        {
            expires      30d;
        }

        location ~ .*\.(js|css)?$
        {
            expires      12h;
        }

        location ~ /.well-known {
            allow all;
        }

        location ~ /\.
        {
            deny all;
        }

        access_log  /home/website/xxxx.com.log;
    }
```

## 项目上线流程

## 服务器

> ### 什么是服务器

服务器的构成包括处理器、硬盘、内存、系统总线等，和通用的计算机架构类似，但是由于需要提供高可靠的服务，因此处理能力、稳定性、可靠性、安全性、可拓展性、可管理性等方面要求较高。在网络环境下，根据服务器提供的服务类型不同，分为文件服务器，数据库服务器，应用程序服务器，WEB服务器等。

> ### 云服务商

现在国内有很多知名的云服务商，我们可以从它们那里购买云服务器，例如腾讯云，阿里云，华为云等等云服务商。当然，可以找国外的云服务商选购，建议选择国内的。首先选一家云服务商注册一个账号，下面列出来的都是比较不错的云服务商。选好一个服务商在注册账号

#### [腾讯云](https://cloud.tencent.com/)

#### [阿里云](https://cn.aliyun.com/)

#### [华为云](https://www.huaweicloud.com/)

> ### 注册流程

#### [腾讯云注册账号流程](https://cloud.tencent.com/document/product/378/17985)

> ### 实名认证

注册好账号后需要实名验证才能购买服务器以及选购域名。腾讯云提供几种认证方式分别是QQ扫码认证，微信扫码认证以及人脸认证。下面

1、登录注册好的账号,在页面右上角找一个头像的图标，选择账号信息去实名认证页面

![图片](http://web.wdwangke.com/mdphoto/backend/backend/thinkphp/process/server/server_1.png)

2、选择个人认证，单击开始个人认证

![图片](http://web.wdwangke.com/mdphoto/backend/backend/thinkphp/process/server/server_2.png)

3、在“填写基本信息”页面，填写真实姓名、证件类型、证件证号、安全手机、手机验证码、行业信息和通讯地址，单击下一步

![图片](http://web.wdwangke.com/mdphoto/backend/backend/thinkphp/process/server/server_3.png)

4、在弹出的提示框中，核对个人信息，单击确定

5、“认证方式”选择人脸识别，打开微信扫一扫，扫描页面的小程序码，进行人脸识别，验证成功即完成实名认证

![图片](http://web.wdwangke.com/mdphoto/backend/backend/thinkphp/process/server/server_4.png)

> ### 学生云服务器

1、打开[最新活动](https://cloud.tencent.com/act)页面并且找到云+校园

![图片](http://web.wdwangke.com/mdphoto/backend/backend/thinkphp/process/server/server_5.png)

2、在云+校园找到学生认证并且完成学生认证，如果未满25岁的可以直接购买学生服务器，注意的是只能25岁以下的，不然只能去学生认证页面完成

![图片](http://web.wdwangke.com/mdphoto/backend/backend/thinkphp/process/server/server_6.png)

3、填写自己个人信息以及学籍资料

![图片](http://web.wdwangke.com/mdphoto/backend/backend/thinkphp/process/server/server_7.png)

4、按需求选择服务器，如果只是放个人项目或个人博客选择轻量服务器即可，如果有业务需求过大的建议选择云服务器

![图片](http://web.wdwangke.com/mdphoto/backend/backend/thinkphp/process/server/server_8.png)

5、其他配置不用选择，默认即可，唯一要选的就是地区，尽量选择的地区离所在地近即可

> ### 云服务器选购

1、首先根据自己的业务需求选择服务器，例如只是用于做个人博客，微信小程序后端等等业务可以选择轻量服务器，性价比比较高。

2、打开[最新活动](https://cloud.tencent.com/act/pro/seckill_season?from=17519)在该页面购买会一定优惠，如果只是用来做个人博客的就选择轻量应用服务器 2核2G的配置基本够用，但是预算充足的情况可以选购轻量应用服务器 2核4G的配置

![图片](http://web.wdwangke.com/mdphoto/backend/backend/thinkphp/process/server/server_9.png)

3、点击购买，选择配置

![图片](http://web.wdwangke.com/mdphoto/backend/backend/thinkphp/process/server/server_10.png)

4、到这里基本选购完成了，结算即可

5、还有一种情况的是这些优惠活动服务器满足不了你的需求，那么去打开[腾讯云](https://cloud.tencent.com/)点击产品选择轻量服务器或者云服务器，开始选购

![图片](http://web.wdwangke.com/mdphoto/backend/backend/thinkphp/process/server/server_11.png)

6、这里也选轻量服务器，因为性价比高。下面是选购轻量服务器的配置

![图片](http://web.wdwangke.com/mdphoto/backend/backend/thinkphp/process/server/server_12.png)

7、基本流程大概这样

## 域名

> ### 什么是域名

域名（Domain Name）是由一串字符组成的，域名指向某一个IP地址，由于IP地址有时很难记住，这个时候域名的出现解决了记忆困难的问题。为了更好记。

> ### 购买域名

有服务器还需要域名。所以下面购买域名

1、打开[域名](https://dnspod.cloud.tencent.com/)该网站进行购买域名。

2、打开后在搜索框输入你想要的域名名称，点击右边搜索图标查询

![图片](http://web.wdwangke.com/mdphoto/backend/backend/thinkphp/process/domain/domain_1.png)

3、选择自己喜欢的，然后添加到清单，点击购买

![图片](http://web.wdwangke.com/mdphoto/backend/backend/thinkphp/process/domain/domain_2.png)

4、根据图片的提示操作，这里要注意的是信息模板，首次是需要自己创建的，如果之前有填写信息模板可以选择之前的

![图片](http://web.wdwangke.com/mdphoto/backend/backend/thinkphp/process/domain/domain_3.png)

5、根据提示填写，建议使用账号信息

![图片](http://web.wdwangke.com/mdphoto/backend/backend/thinkphp/process/domain/domain_4.png)

6、提交订单支付成功后就算完成购买域名流程了

> ### 域名实名认证

1、登录[腾讯云域名注册控制台](https://console.cloud.tencent.com/domain)

2、在我的域名管理页面，选择未实名认证页签，查看您未实名认证的所有域名信息列表。如下图所示

![图片](http://web.wdwangke.com/mdphoto/backend/backend/thinkphp/process/domain/domain_5.png)

3、在需要实名认证域名行中，单击未实名认证，进入 “提交实名信息” 流程。

4、选择认证方式，可选择信息模板或填写资料。

- 若选择实名模板进行实名，域名认证可在1个工作日通过。
- 若选择填写材料进行实名，请填写基本信息以及域名所有者身份认证（可参考新建域名信息模板）
- 下面填写材料需要的东西

![图片](http://web.wdwangke.com/mdphoto/backend/backend/thinkphp/process/domain/domain_6.png)

> ### DNS解析配置

1、登录[腾讯云DNS解析控制台](https://console.cloud.tencent.com/cns)

2、在 `域名解析列表` 中，可查看全部已添加的域名。如下图所示

![图片](http://web.wdwangke.com/mdphoto/backend/backend/thinkphp/process/domain/domain_7.png)

3、在`域名解析列表`中，选择需要解析的域名行，单击解析。

4、在`记录管理`页签中，可以通过单击快速添加网站/邮箱解析添加解析记录

5、在弹出的`新手快速添加`窗口中，单击立即设置。如下图所示

![图片](http://web.wdwangke.com/mdphoto/backend/backend/thinkphp/process/domain/domain_8.png)

6、在`设置网站解析`窗口中输入您的主机 IP 地址（公网 IP）。如下图所示

![图片](http://web.wdwangke.com/mdphoto/backend/backend/thinkphp/process/domain/domain_9.png)

7、选择 “记录管理” 页签。若存在如下提示，说明 DNS 服务器不正确。您可复制页面提供的 DNS 地址到该域名的管理页面进行修改。如下图所示

![图片](http://web.wdwangke.com/mdphoto/backend/backend/thinkphp/process/domain/domain_10.png)

如果需要修改DNS，请打开[修改域名 DNS 服务器](https://cloud.tencent.com/document/product/302/5518)

8、等待生效

9、如果需要添加记录，单击添加记录，填写以下记录信息。如下图所示

![图片](http://web.wdwangke.com/mdphoto/backend/backend/thinkphp/process/domain/domain_11.png)

10、同样等待生效

> ### 备案流程

### [腾讯云备案流程](https://cloud.tencent.com/document/product/243/18958)

## 搭建宝塔

> ### SSH

在 Linux 系统上 SSH 是非常常用的工具，通过 SSH Client 我们可以连接到运行了 SSH Server 的远程机器上。SSH Client 的基本使用方法是

```php
/* 
    user 是你在远程机器上的用户名，如果不指定的话默认为当前用户
    remote 是远程机器的地址，可以是 IP，域名，或者是后面会提到的别名
    port 是 SSH Server 监听的端口，如果不指定的话就为默认值 22
*/
ssh user@remote -p port
```

或者使用[堡塔SSH终端](https://www.bt.cn/new/product_ssh.html)

一般云服务器都是有的，如果没有的请执行安装指令，还有服务器的安全组或者防火墙有没有放行22端口，可以参考下面图片配置

![图片](http://web.wdwangke.com/mdphoto/backend/backend/thinkphp/process/bt/bt_7.png)

> ### ssh常用指令

```shell
#  检查CentOS7是否安装了openssh-server
yum list installed | grep openssh-server

#  安装openssh-server
sudo yum install openssh-server

#  安装vim编辑器
sudo yum -y install vim

# 编辑ssh配置文件
# 取消注释（去掉#）Post 22
# PermitRootLogin（开启远程登陆） yes
# PasswordAuthentication（开启使用密码作为连接远征）

sudo vim /etc/ssh/sshd_config

#  运行ssh服务
sudo service sshd start

#  检查sshd服务状态
ps -e | grep sshd

#  检查22号端口是否开启监听
netstat -an | grep 22

#  查看防火墙
sudo firewall-cmd --state

#  临时关闭防火墙
sudo systemctl stop firewalld

#  临时打开防火墙
sudo systemctl start firewalld

#  开机禁止启动防火墙
sudo systemctl disable firewalld

#  开机启动防火墙
sudo systemctl enable firewalld

#  查看状态：
sudo systemctl status sshd.service

#  启动服务：
sudo systemctl start sshd.service

#  重启服务：
sudo systemctl restart sshd.service

#  开机自启：
sudo systemctl enable sshd.service

#  开机禁用
sudo systemctl disable sshd.service

#  关闭ssh服务
sudo systemctl stop sshd.service

# 重置root的密码
sudo passwd root
```

> ### 安装宝塔

1、打开[宝塔网站](https://www.bt.cn/new/index.html)，点击立即免费安装

2、选择Linux面板

![图片](http://web.wdwangke.com/mdphoto/backend/backend/thinkphp/process/bt/bt_1.png)

3、根据自己的服务器选择相应的安装脚本,注意：必须为没装过其它环境如Apache/Nginx/php/MySQL的新系统，安装脚本可能需要root权限执行，切换指令`su`

```php
// Centos安装脚本
yum install -y wget && wget -O install.sh http://download.bt.cn/install/install_6.0.sh && sh install.sh ed8484bec
```

4、等待安装完成，再通过外网面板地址访问

![图片](http://web.wdwangke.com/mdphoto/backend/backend/thinkphp/process/bt/bt_2.png)

5、输入username和password，点击登录

![图片](http://web.wdwangke.com/mdphoto/backend/backend/thinkphp/process/bt/bt_3.png)

6、如果不看协议就快速滑动到底部，打勾`我已阅读并同意“《用户协议》”`

7、绑定宝塔账号，如果没有需要注册一个

![图片](http://web.wdwangke.com/mdphoto/backend/backend/thinkphp/process/bt/bt_4.png)

8、安装运行环境，选择LNMP，如下图

![图片](http://web.wdwangke.com/mdphoto/backend/backend/thinkphp/process/bt/bt_5.png)

9、等待安装完成即可

![图片](http://web.wdwangke.com/mdphoto/backend/backend/thinkphp/process/bt/bt_6.png)

> ### 修改用户名跟密码

1、在终端输入下面指令

```php
sudo bt
```

2、修改用户名选择6，然后输入新的用户名

3、修改密码再输入一次`sudo bt`,选择5然后输入新的密码

4、这样完成修改用户名以及密码

> 宝塔Linux面板常用指令

### [常用指令](https://www.bt.cn/new/btcode.html)

## 搭建站点访问

> ### 拉取项目

1、首先确认服务器有没有安装git，执行下面的指令，如果没有出现版本号的，说明服务器没有git，那么需要安装git指令

```php
// 查看版本号
git --version

// 安装指令
yum install -y git
```

2、现在去宝塔发布目录，`/www/wwwroot` 目录就是宝塔默认的发布目录，一般项目都会上传到这里

```shell
cd /www/wwwroot
```

3、把项目克隆到该目录

```shell
sudo git clone 你的项目
```

4、拉取完成后，准备搭建站点

> ### 搭建站点

1、打开宝塔面板，如果忘记了面板地址，可执行`sudo bt default`查看基本信息，选择外网面板地址

2、登录后，点击网站，然后选择添加站点

![图片](http://web.wdwangke.com/mdphoto/backend/backend/thinkphp/process/site/site_1.png)

3、配置站点，数据库账号和密码自行填写。注意：域名填写自己的域名，casepro.cn这是演示的域名，www.ask就是子域名

![图片](http://web.wdwangke.com/mdphoto/backend/backend/thinkphp/process/site/site_2.png)

4、添加完成后会显示数据库的信息，如下图所示

![图片](http://web.wdwangke.com/mdphoto/backend/backend/thinkphp/process/site/site_3.png)

5、选择设置

![图片](http://web.wdwangke.com/mdphoto/backend/backend/thinkphp/process/site/site_4.png)

6、点击网站目录，选择运行目录然后找到public目录，还有把防跨站攻击(open_basedir)的打勾取消，最后点击保存

![图片](http://web.wdwangke.com/mdphoto/backend/backend/thinkphp/process/site/site_5.png)

7、配置伪静态，选择ThinkPHP然后点击保存，因为这里部署ThinkPHP的项目

![图片](http://web.wdwangke.com/mdphoto/backend/backend/thinkphp/process/site/site_6.png)

8、放行端口，参考下面的图片

服务器的放行端口配置

![图片](http://web.wdwangke.com/mdphoto/backend/backend/thinkphp/process/site/site_17.png)

宝塔的放行端口配置

![图片](http://web.wdwangke.com/mdphoto/backend/backend/thinkphp/process/site/site_18.png)

8、这样基本完成搭建站点

> ### 导入数据库

1、先从本地数据库导出一份Sql文件，保存路径自行选择，如下图所示

![图片](http://web.wdwangke.com/mdphoto/backend/backend/thinkphp/process/site/site_8.png)

2、回到宝塔面板点击面板菜单的数据库，找到ask数据库然后点击导入

![图片](http://web.wdwangke.com/mdphoto/backend/backend/thinkphp/process/site/site_7.png)

3、上传Sql文件

![图片](http://web.wdwangke.com/mdphoto/backend/backend/thinkphp/process/site/site_9.png)

![图片](http://web.wdwangke.com/mdphoto/backend/backend/thinkphp/process/site/site_10.png)

4、上传完成后关闭上传窗口，然后导入上传数据库，输入验证信息

![图片](http://web.wdwangke.com/mdphoto/backend/backend/thinkphp/process/site/site_11.png)

5、提示导入成功后关闭窗口

6、最后一步，更改数据库配置文件，路径：`/www/wwwroot/k2215ask/application/database.php`,如下图所示，更改完成按CTRL + S保存

![图片](http://web.wdwangke.com/mdphoto/backend/backend/thinkphp/process/site/site_12.png)

7、现在去浏览器输入该站点的域名，测试是否正常访问

8、测试访问时，网站报错，如下图所示

![图片](http://web.wdwangke.com/mdphoto/backend/backend/thinkphp/process/site/site_13.png)

9、解决方法，如下图所示

![图片](http://web.wdwangke.com/mdphoto/backend/backend/thinkphp/process/site/site_14.png)

![图片](http://web.wdwangke.com/mdphoto/backend/backend/thinkphp/process/site/site_15.png)

还有另一种方法解决，就是执行下面的指令

```shell
# 更改所有文件的权限 777 => 开放所有权限
sudo chmod 777 项目路径

# 更改所有文件的用户组
sudo chown -R www:www 项目路径

# 例
sudo chmod 777 /www/wwwroot/ask/k2215ask

sudo chown -R www:www /www/wwwroot/ask/k2215ask
```

10、再去浏览器访问是否正常

![图片](http://web.wdwangke.com/mdphoto/backend/backend/thinkphp/process/site/site_16.png)