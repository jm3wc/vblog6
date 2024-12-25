## phpstudy快速入门

安装php自定义环境是非常复杂，而安装PHP集成环境是非常简便，可以大大节省了搭建环境的时间。安装好就可以使用了

现在市场上有很多集成环境，例如`phpstudy`、`laragon`、`phpenv`、`wampserver`等等

## 架构

在开发时经常遇到搭建lnmp环境或者wamp环境，那么它们代表什么呢？

其实它们就是一个缩写，它们指的是一组通常一起使用来运行动态网站或者服务器的自由软件。以下就是它们代表的软件：

```
lnmp: Linux + Nginx + MySql + PHP

lamp: Linux + Apache + MySql + PHP

wamp：Windows + Apache + MySql + PHP

wnmp：Windows + Nginx + MySql + PHP
```

## Apache

```
Apache是世界使用排名第一的Web服务器软件

它可以运行在几乎所有广泛使用的计算机平台上，由于其跨平台和安全性被广泛使用

Apache是最流行的Web服务器端软件之一
```

## [Apache官网](http://www.apache.org/)

## MySql

```
MySQL是一种开放源代码的关系型数据库管理系统

体积小，速度快，开放源码

目前 MySQL被广泛地应用在中小型网站中
```

## [MySql官网](http://www.mysql.com/)

## 安装phpStudy

1、[phpStudy下载地址](https://www.xp.cn/)

2、选择Windows版本

![img](https://topmost.gitee.io/book/mdphoto/base/env/phpstudy_1.png)

3、一般选择64位版本的安装包，除非系统是32位的系统

![img](https://topmost.gitee.io/book/mdphoto/base/env/phpstudy_2.png)

4、打开下载好的压缩包，双击打开`phpstudy_x64_8.1.1.2.exe`

![img](https://topmost.gitee.io/book/mdphoto/base/env/phpstudy_3.png)

5、会弹出一个安装导向，注意的是安装路径不能有中文或者空格，可以参考图片所示

![img](https://topmost.gitee.io/book/mdphoto/base/env/phpstudy_4.png)

6、安装成功后点击完成

![img](https://topmost.gitee.io/book/mdphoto/base/env/phpstudy_5.png)

6、打开软件会看到一个图片所示的界面，先在这里启动需要使用软件，分别启动`Apache`和`MySql5.7.26`

![img](https://topmost.gitee.io/book/mdphoto/base/env/phpstudy_6.png)

## 新建站点

#### 注意事项

```
1、在新建站点根据自己的需求确认要不要创建数据库或者后面有需要再创建也可以，数据库名，用户名和密码自定义

2、同步hosts这个选项默认打勾，不要动它！不要动它！不要动它！重要的事说三遍

3、根目录指向的要根据项目的要求指向，有些项目的指向的是public
```

1、按图片所示操作，有些选项根据项目的要求来选择，前七步配置好后，先别执行图中的第8步

![img](https://topmost.gitee.io/book/mdphoto/base/env/phpstudy_7.png)

2、开启目录索引，如果站点访问不到网站首页文件时会显示该站点的目录，如图操作：

![配置图](https://topmost.gitee.io/book/mdphoto/base/env/phpstudy_10.png)

3、关闭创建错误页面

![配置图](https://topmost.gitee.io/book/mdphoto/base/env/phpstudy_11.png)

4、创建站点完成后可以去浏览器输入新建站点的域名，测试是否能成功访问

## 访问站点被重定向到未知网站

有时遇到站点不能正常访问，一般情况如下：

```
一、站点在被重定向其他网站前都是一直能正常访问的，突然就不能访问了

    原因：可能电脑开加速器或者代理导致站点被强制走代理的端口

    解决方法：
        1、把加速器或者代理软件关了或者看一下使用的这类软件有没有设置绕过代理的功能

        2、检查一下电脑自带代理是否开启了
            电脑设置 -> 网络与Internet -> 代理 -> 自动设置代理和手动设置代理 -> 关闭即可

        3、清除浏览器的历史记录

二、站点创建完成功后不能正常访问

    原因：hosts写入域名失败

    解决方法：
        1、找到C:\Windows\System32\drivers\etc\hosts，查看hosts文件是否有该站点的域名

        2、如果没有的就手动添加，如下：
            127.0.0.1   www.test.com

        3、把鼠标移动到hosts文件然后右键 -> 选择属性 -> 常规 -> 看只读属性是否打勾了，如果打勾了，请取消打勾即可

        4、重启apache服务

        5、清除浏览器的历史记录
```

## 配置文件(以phpStudy为准)

```
// apache配置文件
盘符：phpstudy_pro/Extensions/Apache2.4.43/conf/httpd.conf

// MySQL配置文件
盘符：phpstudy_pro/Extensions/MySQL5.7.26/my.ini

// php配置文件 php7.3.4nts => 版本 如果需要修改不是7.3.4，而是7.4.3，那么找到7.4.3的文件夹里面的php.ini
盘符：phpstudy_pro/Extensions/php/php7.3.4nts/php.ini
```

## 解决端口冲突

## 解决端口冲突

假设某一天突然apache启动不了，提示端口被占用了，那么需要把占用的进程结束，以下教程就是何如解决端口占用

1、开始 —> 运行 —> `cmd` 或者 `window + R` 组合键再输入 `cmd` ,调出命令窗口

2、先查找所有运行的端口

```
# 该命令列出所有端口的使用情况
netstat -ano
```

在列表中我们观察被占用的端口，比如是 80，首先找到它

3、查看被占用端口对应的 PID

```
netstat -aon | findstr "80"
```

回车执行该命令，最后一位数字(最右)就是 PID，比如是31088，再看是什么进程在占用

4、查看指定 PID 的进程

```
tasklist | findstr "31088"
```

回车执行该命令后就会显示出来哪个进程在占用，结果是：nginx.exe

5、结束进程

```
# 强制（/F参数）杀死 pid 为 31088 的所有进程包括子进程（/T参数）
taskkill /T /F /PID 31088
```

## phpMyAdmin安装

## 安装phpMyAdmin

1、打开phpstudy软件，侧边菜单找到软件管理,选择网站程序就能看到phpMyAdmin,

![phpMyAdmin](https://topmost.gitee.io/book/mdphoto/base/env/phpstudy_12.png)

2、选择安装哪个站点下，自行选择

![phpMyAdmin](https://topmost.gitee.io/book/mdphoto/base/env/phpstudy_13.png)

3、安装完成后，在浏览器输入刚才选择的站点域名或者如图操作：

![phpMyAdmin](https://topmost.gitee.io/book/mdphoto/base/env/phpstudy_14.png)

4、选择phpMyAdmin

## 解决登陆phpMyAdmin提示：配置文件现在需要一个短语密码

在登陆phpMyAdmin后发现最下面有如下信息提示：配置文件现在需要一个短语密码

1、在 phpMyAdmin 根目录中找到一个文件 `config.sample.inc.php` 里查找到 `$cfg['blowfish_secret']` 配置项，如下修改：

```
// 注：其中的'123456′为随意的字符，至少6位
$cfg['blowfish_secret'] = '123456';
```

2、找到 `phpMyAdmin/libraries/config.default.php` 里查找到 `$cfg['blowfish_secret']` 配置项，如下修改：

```
// 注：其中的'123456′为随意的字符，至少6位
$cfg['blowfish_secret'] = '123456';
```

## php环境变量

有时在终端执行php的一些指令会提示跟图片所示一样

![cmd](https://topmost.gitee.io/book/mdphoto/base/env/phpstudy_15.png)

原因是环境变量里面没有设置php的环境变量

## 设置php变量

1、首先找到phpstudy的php文件，例如：路径为 `D:\Software\phpstudy_pro\Extensions\php`

![php](https://topmost.gitee.io/book/mdphoto/base/env/php_1.png)

这里有两个php版本，建议选择一个常用的版本来设置环境变量，这里选择php7.4.3版本

2、复制选择php版本所在的路径

![php](https://topmost.gitee.io/book/mdphoto/base/env/php_2.png)

3、找到高级系统设置，位置如下：

```
设置 -> 系统信息 -> 高级系统设置 -> 选择环境变量
```

![php](https://topmost.gitee.io/book/mdphoto/base/env/php_3.png)

4、选择系统变量 -> 双击path，如图操作：

![php](https://topmost.gitee.io/book/mdphoto/base/env/php_4.png)

然后看到确认就点击确认即可

5、先关闭之前打开终端再重新打开，测试一下是否配置成功，输入 `php -v` 如果能跟下面的图片显示一样说明配置成功了

![php](https://topmost.gitee.io/book/mdphoto/base/env/php_5.png)

## navicat安装

## 下载地址

## [navicat](https://www.navicat.com.cn/download/navicat-premium)

## 安装Navicat

1、打开应用的安装包,会有一个安装向导，如图：

![navicat](https://topmost.gitee.io/book/mdphoto/base/env/navicat_1.png)

2、版本许可

![navicat](https://topmost.gitee.io/book/mdphoto/base/env/navicat_2.png)

3、安装路径，不建议安装C盘

![navicat](https://topmost.gitee.io/book/mdphoto/base/env/navicat_3.png)

3、是否创建桌面图标，按自己需求来

![navicat](https://topmost.gitee.io/book/mdphoto/base/env/navicat_4.png)

4、准备安装，如果没问题就点击安装即可

![navicat](https://topmost.gitee.io/book/mdphoto/base/env/navicat_5.png)

## 连接数据库

1、选择图中的连接 -> 选择Mysql

![navicat](https://topmost.gitee.io/book/mdphoto/base/env/navicat_6.png)

2、如图操作

![navicat](https://topmost.gitee.io/book/mdphoto/base/env/navicat_7.png)

## 无限试用脚本

由于这款软件是需要购买的，免费试用14天，试用期过就需要购买才能试用了，但是这里提供一个方法可以达到免费试用的效果。就是删除注册表的记录，这里提供脚本

1、首先新建一个`bat`的文件，命名自定义

2、把下面的代码复制到新建文件里

```
@echo off

echo Delete HKEY_CURRENT_USER\Software\PremiumSoft\NavicatPremium\Registration[version and language]
for /f %%i in ('"REG QUERY "HKEY_CURRENT_USER\Software\PremiumSoft\NavicatPremium" /s | findstr /L Registration"') do (
    reg delete %%i /va /f
)
echo.

echo Delete Info folder under HKEY_CURRENT_USER\Software\Classes\CLSID
for /f %%i in ('"REG QUERY "HKEY_CURRENT_USER\Software\Classes\CLSID" /s | findstr /E Info"') do (
    reg delete %%i /va /f
)
echo.

echo Finish

pause
```

3、双击打开，等待提示以下内容

```
Finish
请按任意键继续. . .
```

4、随便在键盘按一个键，命令窗就会关闭

5、打开软件查看试用期是否回到可用14天