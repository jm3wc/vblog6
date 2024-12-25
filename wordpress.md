## WordPress

## 基本介绍

## 什么是WordPress

[WordPress中文官网](https://cn.wordpress.org/)

[WordPress官网](https://wordpress.org/)

```html
WordPress是使用PHP + MySql开发的博客平台，免费，开源，并逐步演化成一款内容管理系统。

WordPress背后有一个庞大的社区，该社区正在不断开发代码。开发人员一直在制作WordPress主题和插件，
因此该平台（以前只是博客系统）现在是一个强大的工具，这是一个了不起的工具，可用于在网络上创建几乎所有内容
```

### WordPress可以搭建什么网站

```html
可以使用WordPress创建大型博客，复杂网站以及介于两者之间的任何内容的简单博客。

本质上，任何可以使用内容管理系统创建的内容都可以使用WordPress创建。
包括博客，网店，论坛社区，新闻咨讯，企业网站（产品，教育，医疗….)
```

## 安装以及搭建WordPress

## 获取WordPress

[获取最新的WordPress](https://cn.wordpress.org/download)

## 搭建以及安装WordPress

1、首先从[WordPress](https://cn.wordpress.org/download)下载最新版本的WordPress，把压缩包解压到phpstudy里面的www目录(路径参考之前安装phpstudy的路径)

2、打开`phpstudy`软件进行搭建，然后选择网站，配置如图所示

![img](http://web.wdwangke.com/mdphoto/extends/wordpress/wordpress_1.png)

3、点击确认后，等会服务重启完成

4、去浏览器输入刚才配置的虚拟主机的域名,如图所示

![img](http://web.wdwangke.com/mdphoto/extends/wordpress/wordpress_2.png)

5、会来到一个配置数据库的视图界面，如图所示

![img](http://web.wdwangke.com/mdphoto/extends/wordpress/wordpress_3.png)

6、配置完成提交后会来到这个安装界面,如图所示

![img](http://web.wdwangke.com/mdphoto/extends/wordpress/wordpress_4.png)

7、确认运行安装程序后，会来到一个配置网站信息以及登录用户名和密码，这里根据自己项目填写,最后确认安装即可

![img](http://web.wdwangke.com/mdphoto/extends/wordpress/wordpress_5.png)

8、跳转到提示安装成功的界面，再点击登录会跳转到后台管理登录界面

![img](http://web.wdwangke.com/mdphoto/extends/wordpress/wordpress_6.png)

9、后台管理登录界面，请输入在第7步配置的用户名密码即可

![img](http://web.wdwangke.com/mdphoto/extends/wordpress/wordpress_7.png)

10、登录成功后所看到的后台首页,能看这里时说明我们已经安装完成了，下面就可以愉快使用wordpress！

![img](http://web.wdwangke.com/mdphoto/extends/wordpress/wordpress_8.png)

```html
第10步所示的是后台界面，在域名后面是接着wp-admin，如果要去前台界面直接在浏览器输入域名即可
```

## 模板安装

## WordPress主题网站

[闪电博](https://www.wbolt.com/)

[WordPress大学](https://www.wpdaxue.com/themes)

[WordPress官方主题](https://wordpress.org/themes)

```html
注意：链接提供的主题有部分是收费，自行选择免费的主题下载安装！！！
```

## 模板安装

1、可以从上面提供的网站下载自己需要的主题模板或者WordPress提供的主题在线商城安装

如果使用WordPress提供的主题在线商城安装的，路径：后台->外观->主题，点击安装主题或者添加都可以

![img](http://web.wdwangke.com/mdphoto/extends/wordpress/template/template_1.png)

2、如图所示，这些都是WordPress提供的主题让我们使用，在里面选择自己需要的主题，点击安装，然后等待安装完成后点击启用即可

![img](http://web.wdwangke.com/mdphoto/extends/wordpress/template/template_2.png)

3、前面两步是从Wordpress在线主题商城安装主题，下面我们从第三方网站下载主题进行安装

首先回到wordpress在线主题商城界面，所图所示操作即可

![img](http://web.wdwangke.com/mdphoto/extends/wordpress/template/template_3.png)

4、它会跳转此界面，可以在这里选择安装,同时安装完后可以在当前界面选择启用该模板或者其他操作

![img](http://web.wdwangke.com/mdphoto/extends/wordpress/template/template_4.png)

5、访问前台首页

![img](http://web.wdwangke.com/mdphoto/extends/wordpress/template/template_5.png)

## 注意事项

应用某个主题后在后台会提示下载相应的插件，按提示操作即可

![img](http://web.wdwangke.com/mdphoto/extends/wordpress/template/template_6.png)

## 自定义模板开发

当在线模板满足不了我们的开发需求时，我们可以选择自定义模板开发

## 自定义模板

1、首先找一个好看或者使用自己的HTML模板，方便接下来的操作

2、在wordpress项目找到此目录,例如路径如下：

```html
wordpress/wp-content/themes
```

3、在`themes`目录下新建一个文件夹来存放模板，模板文件夹名称自定义，这里起名为`test-blog`

4、在`test-blog`里新建一个`style.css`的文件，把下面的内容复制到style.css里，关于模板一些基本信息

```css
/**
 * Theme Name: 主题名称
 * Theme URI: 主题链接
 * Author: 主题作者
 * Author URI: 主题作者主页地址
 * Description: 主题详情
 * Version: 版本号
 * Tags: 标签
 */
```

5、把HTML模板的`index.html`放在`test-blog`里并且重命名为`index.php`

6、去后台->外观->主题,就看到我们添加的主题模板了

![img](http://web.wdwangke.com/mdphoto/extends/wordpress/template/custom/custom_1.png)

7、不过没有缩略图，但是我们可以定义缩略图，找一张关于该模板的图片或者截图，放到test-blog里并且重命名`screenshot.png`(jpg格式也可以)

![img](http://web.wdwangke.com/mdphoto/extends/wordpress/template/custom/custom_2.png)

8、现在去前台看到首页样式都是乱的

9、把模板的`css`，`js`，`images`，`fonts`等放到test-blog里

10、下面我们就可以调用wordpress封装的函数输出数据

## 查询文章

```php
<?php
    // 全局函数 检查是否还有post，如果有就返回true，否则返回false
    if(have_posts())
    {
        // 循环
       while(have_posts())
       {
            // 某条文章数据
            the_post();

            主体代码...
       }
    }

    // 以下的函数用于输出文章
    the_title();// 文章标题
    the_excerpt();// 文章摘要
    the_ID();// 文章ID
    the_content();// 文章内容 只在循环生效
    the_permalink();// 文章链接
    the_category();// 文章分类
    the_comments_number();// 获取评论数量
    the_author();// 文章作者 只在循环生效
    the_time();// 文章时间 参数 定义输出的日期格式
?>
```

## 文章详情

```php
    // 文章标题
    <h1><?php the_title(); ?></h1>

    // 文章内容
    <article>
        <?php if( have_posts() ) : while( have_posts() ) : the_post(); ?>
        <?php the_content(); ?>
        <?php endwhile; ?>
        <?php endif; ?>
    </article>
```

## 文章分页

```php
// 第一种
<?php posts_nav_link(); ?> 

// 第二种
<?php the_posts_pagination( array(
    'base'=>'',  //你可以自己制定导航的URL，一般不用写此属性
    'prev_text' => '上一页', //上一页标题及链接，默认Previous
    'next_text' => '下一页', //下一页标题及链接，默认Next
    'before_page_number' => '', //页码前面的数字
    'after_page_number' => '',  //页码后面的数字
    'total'=>5, //你可以控制显示的页数，默认最大页数
    'format' =>'?paged=%#%', //导航链接格式化，体现在鼠标悬停在翻页链接时。
    'current' => max( 1, get_query_var('paged') ),  //当前页码
    'add_fragment'=>'' //体现在鼠标悬停在翻页链接时，分页链接追加字符串
));?>
```

## 开启文章缩略图功能

functions.php

```php
// 给文章和页面开启缩略图功能
add_theme_support( 'post-thumbnails' );

// 给文章启用文章缩略图功能
add_theme_support( 'post-thumbnails', array( 'post' ) );

// 给页面启用文章缩略图功能
add_theme_support( 'post-thumbnails', array( 'page' ) );

// 设置文章缩略图大小 50 像素宽和 50 像素高，裁剪模式
set_post_thumbnail_size( 50, 50, true );
```

逻辑代码

```php
// 判断是否有缩略图
if ( has_post_thumbnail() ) {
    // 当前文章有缩略图就输出缩略图
    the_post_thumbnail();
} else {
    //当前文章没有设置缩略图
}
```

## 导航菜单

functions.php

```php
// 注册导航菜单函数
function test_register_nav_menus(){
    register_nav_menus( array(
        'header_menu' => __( '顶部菜单', 'top' ), 
        'footer_menu' =>  __( '页脚菜单', 'bottom' )
     ));
}

// 添加动作
add_action( 'init', 'test_register_nav_menus' );
```

在前台输出导航

```php
   <?php
        // 导航配置
        $defaults = array(
              'theme_location' => '', //调用菜单的名称，名称是你自己注册菜单的时候自定义的
              'menu'      => '',  //使用导航菜单的名称调用菜单，可以是 ID、别名和名字（按顺序匹配）
              'container'    => 'div', //最外层容器的标签
              'container_class' => '', //外层容器的class
              'container_id'  => '',  //外层容器的 ID
              'menu_class'   => 'menu',  //ul 父节点的 class 属性
              'menu_id'     => '', //ul 父节点的 id 属性
              'echo'      => true, //布尔值，是否输出菜单，为false是可以用于赋值
              'fallback_cb'   => 'wp_page_menu',  //当前设置的菜单不存在时，显示此处设置的菜单
              'before'     => '',  //显示在每个菜单链接前的文本
              'after'      => '', //显示在每个菜单链接后的文本
              'link_before'   => '',  //显示在每个菜单链接文本前的文本
              'link_after'   => '',  //显示在每个菜单链接文本后的文本
              'items_wrap'   => '<ul class="%1$s" id="%2$s">%3$s</ul>',  //菜单的输出结构，
              'depth'      => 0,  //显示菜单深度，0为显示所有
              'walker'     => '' //菜单的结构对象  通过改参数可以制作任意结构的导航菜单
        );
    ?>

    // 输出导航菜单
   <?php wp_nav_menu( $defaults); ?>
```

## 常用插件安装以及使用

```html
WordPress之所以能成为目前最具人气的独立博客程序，除了无数爱好者为它开发的主题外，
源源不断的插件支持也是重要的原因之一。wordpress的强大，也是在于无数爱好者源源不断的主题和插件。

wordpress插件数量巨大，有改善用户体验的，有辅助SEO的，有增加功能的
```

## 常用插件

```html
Related Posts：显示相关文章的插件。可能需要配合其它插件，比如UTW或Simple tagging使用。

Akismet：最流行的反垃圾留言插件。

Threaded Comments：实现有针对性的留言。也就是可以针对某个留言进行留言，这个留言不出现在最底部，而是在所针对的留言的下方。

De-link Comment Author：有时候你想删除一个评论者的链接但不想删除整个留言，这个插件可以帮助你。

All-in-One SEO Pack：必备的SEO插件，不详细介绍，具体参看Wordpress的SEO插件。

Get Recent Comments：在侧栏里显示最新评论。

Statraq：博客统计插件，记录访问者的IP、搜索关键字、访问人数等等。相当强大。

Role Manager：控制注册用户权限，cms插件

pagepost：文章分页插件

WP-Forum：生成一个论坛
```

## 插件的安装

WordPress提供两种插件安装方法，第一种是在线安装，第二种是本地安装

1、首先先看在线安装，去后台->侧边菜单选择插件

现在看到的是已安装的插件列表

![img](http://web.wdwangke.com/mdphoto/extends/wordpress/plugins/plugins_1.png)

2、点击安装插件就去在线插件商城

![img](http://web.wdwangke.com/mdphoto/extends/wordpress/plugins/plugins_2.png)

3、你浏览在线插件选择适合自己的或者也可以通过搜索查找自己的插件，例如选择这款插件

点击立即安装->等待安装完成后选择启用即可->启用后它跳转回已安装插件列表

![img](http://web.wdwangke.com/mdphoto/extends/wordpress/plugins/plugins_3.png)

4、你会菜单栏看刚才安装的插件，后面我们就可以去插件配置里按我们的需求配置

![img](http://web.wdwangke.com/mdphoto/extends/wordpress/plugins/plugins_4.png)

5、在线安装以已经体验完了，我们再来体验本地安装

首先我们要重复操作上面第1、2步

然后选择自己需要从本地安装的插件，如图所示

![img](http://web.wdwangke.com/mdphoto/extends/wordpress/plugins/plugins_5.png)

选择好自己需要安装插件后点击立即安装，等待安装完成后启用即可，如图所示

![img](http://web.wdwangke.com/mdphoto/extends/wordpress/plugins/plugins_6.png)

6、启用完成后我们就可以插件设置去配置啦！

## 插件使用

由于每款插件的功能不一样，使用方法也不一样，有的插件是在已安装插件列表配置使用，有的是在侧边菜单栏有配置入口，如图所示

![img](http://web.wdwangke.com/mdphoto/extends/wordpress/plugins/plugins_7.png)

1、这里演示Akismet垃圾评论防护，如图所示

![img](http://web.wdwangke.com/mdphoto/extends/wordpress/plugins/plugins_8.png)

2、注意该插件是个人博客免费使用密钥； 付费订阅适用于企业和商业站点

选择设置您的Akismet帐户->按图选择即可

![img](http://web.wdwangke.com/mdphoto/extends/wordpress/plugins/plugins_9.png)

2、选择后需要填写一些基本信息，记得把价格横条拉到最左方，这时价格才会是0 元，确认没问题后，点击最下方的「CONTINUE WITH PERSONAL SUBSCRIPTION」按钮。注意截图是翻译过的

![img](http://web.wdwangke.com/mdphoto/extends/wordpress/plugins/plugins_10.png)

3、在上一步骤完成后，Akismet将向您注册的电子邮件地址发送验证码。然后将邮箱中的验证码放到注册框中。

![img](http://web.wdwangke.com/mdphoto/extends/wordpress/plugins/plugins_11.png)

4、注册完Akismet后，注册邮箱也会收一封邮件，里面有API KEY，进入后台即可找到授权的API KEY，输入到wordpress插件中，注册成功。然后设置一下即可

![img](http://web.wdwangke.com/mdphoto/extends/wordpress/plugins/plugins_12.png)

5、按自己的需求设置即可

![img](http://web.wdwangke.com/mdphoto/extends/wordpress/plugins/plugins_13.png)

## 部署上线

1、首先需要把WordPress项目以及数据库文件上传到服务器，建议使用git + gitee

```shell
# git上传指令

# 初始化git仓库
git init

# 将所有文件添加暂存区
git add .

# 提交暂存区的文件
git commit -m 本次提交的说明

# 添加远程仓库的地址
git remote add origin 自己新建的仓库

# 推送到远程仓库
git push -u origin "master"
```

2、上传到gitee后，需要在服务器克隆项目下来，注意这里的环境是`宝塔集成环境`

```shell
# git克隆指令

# 切换宝塔里的wwwroot目录
cd /www/wwwroot

# 克隆项目，注意不是root用户需要指令前面加上sudo
sudo git clone 自己的仓库地址
```

3、把本地数据库导出成Sql文件再上传服务器数据库里，操作如下

```html
选择WordPress的数据库->右键->选择转储SQL文件->选择结构和数据

注意：每个数据库管理工具的操作都不一样，其他工具请自行摸索
```

![img](http://web.wdwangke.com/mdphoto/extends/wordpress/site/site_1.png)

4、导入数据库

在宝塔数据库新建一个数据库

![img](http://web.wdwangke.com/mdphoto/extends/wordpress/site/site_2.png)

选择新建的wordpress数据库->选择导入->选择从本地上传->选择导出的Sql文件->点击开始上传

![img](http://web.wdwangke.com/mdphoto/extends/wordpress/site/site_3.png)

选择导入->输入验证->等待提示导入成功

![img](http://web.wdwangke.com/mdphoto/extends/wordpress/site/site_4.png)

5、新建站点

![img](http://web.wdwangke.com/mdphoto/extends/wordpress/site/site_5.png)

由于我们在本地开发时配置的数据库名、用户名、密码跟线上的数据库不一样，所以更改为线上的，更改好后需要重新同步到服务器

![img](http://web.wdwangke.com/mdphoto/extends/wordpress/site/site_6.png)

6、修改数据表里的数据,如图所示

```sql
需要修改的数据表：pre_options

需要修改的字段名：siteurl home

把字段名的值改为线上的域名即可
```

![img](http://web.wdwangke.com/mdphoto/extends/wordpress/site/site_7.png)

7、配置伪静态

网站->选择WordPress的站点->点击设置->伪静态

![img](http://web.wdwangke.com/mdphoto/extends/wordpress/site/site_8.png)

8、部署成功，可以去浏览器访问是否成功

![img](http://web.wdwangke.com/mdphoto/extends/wordpress/site/site_9.png)