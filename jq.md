 

## 为什么要学jquery

使用javascript开发过程中，有许多的缺点：

1. 查找元素的方法单一，麻烦。
2. 遍历数组很麻烦，通常要嵌套一大堆的for循环。
3. 有兼容性问题。
4. 想要实现简单的动画效果，也很麻烦
5. 代码冗余。

## 体验jquery的使用

```
/*
* 1. 查找元素的方法多种多样，非常灵活
* 2. 拥有隐式迭代特性，因此不再需要手写for循环了。
* 3. 完全没有兼容性问题。
* 4. 实现动画非常简单，而且功能更加的强大。
* 5. 代码简单、粗暴。
* */
$(document).ready(function () {
    $("#btn1").click(function () {
        $("div").show(200);
    });
    $("#btn2").click(function () {
        $("div").text("我是内容");
    });
});

```

## jquery到底是什么

> jQuery的官网 http://jquery.com/
> jQuery就是一个js库，使用jQuery的话，会比使用JavaScript更简单。

**What is jQuery?**

```
   jQuery is a fast, small, and feature-rich JavaScript library. 
   It makes things like HTML document traversal and manipulation, 
   event handling, animation, and Ajax 
   much simpler with an easy-to-use API that works across a multitude of browsers. 
   With a combination of versatility and extensibility, 
   jQuery has changed the way that millions of people write JavaScript. 

```

js库：把一些常用到的方法写到一个单独的js文件，使用的时候直接去引用这js文件就可以了。
（animate.js、common.js）

我们知道了，jQuery其实就是一个js文件，里面封装了一大堆的方法方便我们的开发，
其实就是一个加强版的common.js，因此我们学习jQuery，其实就是学习jQuery这个js文件中封装的一大堆方法。

## jquery的版本问题

> 官网下载地址：http://jquery.com/download/
> jQuery版本有很多，分为1.x 2.x 3.x
> 1.x和2.x版本jquery都不再更新版本了，现在只更新3.x版本。

大版本分类：

- 1.x版本：能够兼容IE678浏览器
- 2.x版本：不能兼容IE678浏览器
- 3.x版本：不能兼容IE678浏览器，更加的精简（在国内不流行，因为国内使用jQuery的主要目的就是兼容IE678）

关于压缩版和未压缩版：

- jquery-1.12.4.min.js:压缩版本，适用于生产环境，因为文件比较小，去除了注释、换行、空格等东西，但是基本没有颗阅读性。
- jquery-1.12.4.js:未压缩版本，适用于学习与开发环境，源码清晰，易阅读。

## jquery的入口函数

使用jQuery的三个步骤：

1. 引入jQuery文件
2. 入口函数
3. 功能实现

关于jQuery的入口函数：

```
//第一种写法
$(document).ready(function() {
    
});
//第二种写法
$(function() {
    
});

```

jQuery入口函数与js入口函数的对比：

1. JavaScript的入口函数要等到页面中所有资源（包括图片、文件）加载完成才开始执行。
2. jQuery的入口函数只会等待文档树加载完成就开始执行，并不会等待图片、文件的加载。

```
<script>
  //1.$是什么?
  //如果报了这个错误:$ is not defined,就说明没有引入jQuery文件.
  // $(function () {
  //
  // });

  //2.jQuery文件结构.
  //其实是一个自执行函数.
  // (function(){
  //   window.jQuery = window.$ = jQuery;
  // }());

  //3.
  //a.引入一个js文件,是会执行这js文件中的代码的.
  //console.log(num);//10
  //b.jQuery文件是一个自执行函数,执行这个jQUERY文件中的代码,其实就是执行这个自执行函数.
  //c.这个自执行文件就是给window对象添加一个jQuery属性和$属性.
  //console.log(window);
  //d.$其实和jQuery是等价的,是一个函数.

  // console.log(window.jQuery === window.$);//true
  // console.log(Object.prototype.toString.call($));//'[object Function]'

  //4.$是一个函数
  //参数传递不同,效果也不一样.
  //4.1 如果参数传递的是一个匿名函数-入口函数
  // $(function(){
  // });

  //4.2 如果参数传递的是一个字符串-选择器/创建一个标签
  //$('#one');
  //$('<div>啦啦,我是一个div</div>');

  //4.3 如果参数是一个dom对象,那他就会把dom对象转换成jQuery对象.
  //$(dom对象);

</script>

```

## jq对象和dom对象(重要)

1. DOM对象：使用JavaScript中的方法获取页面中的元素返回的对象就是dom对象。
2. jQuery对象：jquery对象就是使用jquery的方法获取页面中的元素返回的对象就是jQuery对象。
3. jQuery对象其实就是DOM对象的包装集**包装了DOM对象的集合（伪数组）**
4. DOM对象与jQuery对象的方法不能混用。

DOM对象转换成jQuery对象：【联想记忆：花钱】

```
var $obj = $(domObj);
// $(document).ready(function(){});就是典型的DOM对象转jQuery对象


```

jQuery对象转换成DOM对象：

```
var $li = $("li");
//第一种方法（推荐使用）
$li[0]
//第二种方法
$li.get(0)

```

## jquery选择器

#### 什么是jQuery选择器

- jQuery选择器是jQuery为我们提供的一组方法，让我们更加方便的获取到页面中的元素。
  注意：jQuery选择器返回的是jQuery对象。
- jQuery选择器有很多，基本兼容了CSS1到CSS3所有的选择器，并且jQuery还添加了很多扩展性的选择器。
  【查看jQuery文档】
- jQuery选择器虽然很多，但是选择器之间可以相互替代，就是说获取一个元素，你会有很多种方法获取到。
  所以我们平时真正能用到的只是少数的最常用的选择器。

#### 基本选择器

| 名称       | 用法               | 描述                                 |
| :--------- | :----------------- | :----------------------------------- |
| ID选择器   | $(“#id”);          | 获取指定ID的元素                     |
| 类选择器   | $(“.class”);       | 获取同一类class的元素                |
| 标签选择器 | $(“div”);          | 获取同一类标签的所有元素             |
| 并集选择器 | $(“div,p,li”);     | 使用逗号分隔，只要符合条件之一就可。 |
| 交集选择器 | $(“div.redClass”); | 获取class为redClass的div元素         |

> 总结：跟css的选择器用法一模一样。

#### 层级选择器

| 名称       | 用法        | 描述                                                        |
| :--------- | :---------- | :---------------------------------------------------------- |
| 子代选择器 | $(“ul>li”); | 使用>号，获取儿子层级的元素，注意，并不会获取孙子层级的元素 |
| 后代选择器 | $(“ul li”); | 使用空格，代表后代选择器，获取ul下的所有li元素，包括孙子等  |

> 总结：跟css的选择器用法一模一样。

#### 过滤选择器

| 名称         | 用法                               | 描述                                                        |
| :----------- | :--------------------------------- | :---------------------------------------------------------- |
| :eq（index） | $(“li:eq(2)”).css(“color”, ”red”); | 获取到的li元素中，选择索引号为2的元素，索引号index从0开始。 |
| :odd         | $(“li:odd”).css(“color”, ”red”);   | 获取到的li元素中，选择索引号为奇数的元素                    |
| :even        | $(“li:even”).css(“color”, ”red”);  | 获取到的li元素中，选择索引号为偶数的元素                    |

> 总结：这类选择器都带冒号

#### 筛选选择器(方法)

| 名称               | 用法                        | 描述                             |
| :----------------- | :-------------------------- | :------------------------------- |
| children(selector) | $(“ul”).children(“li”)      | 相当于$(“ul>li”)，子类选择器     |
| find(selector)     | $(“ul”).find(“li”);         | 相当于$(“ul li”),后代选择器      |
| siblings(selector) | $(“#first”).siblings(“li”); | 查找兄弟节点，不包括自己本身。   |
| parent()           | $(“#first”).parent();       | 查找父亲                         |
| eq(index)          | $(“li”).eq(2);              | 相当于$(“li:eq(2)”),index从0开始 |
| next()             | $(“li”).next()              | 找下一个兄弟                     |
| prev()             | $(“li”).prev()              | 找上一次兄弟                     |

> 总结：筛选选择器的功能与过滤选择器有点类似，但是用法不一样，筛选选择器主要是方法。

【案例：下拉菜单】
代码位于文章尾部
![在这里插入图片描述](https://img-blog.csdnimg.cn/20191223173502981.gif)

【案例：突出展示】
代码位于文章尾部
![在这里插入图片描述](https://img-blog.csdnimg.cn/20191223173420379.gif)

【案例：手风琴】
代码位于文章尾部
![在这里插入图片描述](https://img-blog.csdnimg.cn/20191223173802590.gif)

【案例：淘宝精品】
代码位于文章尾部
![在这里插入图片描述](https://img-blog.csdnimg.cn/20191223173958746.gif)

## 元素设置

#### 样式设置

```
    /*1.设置一个样式*/
    //两个参数  设置的样式属性,具体样式
    $('li').css('color','red');
    //传入对象（设置的样式属性:具体样式）
    $('li').css({'color':'red'});
    /*2.设置多个样式*/
    $('li').css({
        'color':'green',
        'font-size':'20px'
    });

```

#### 类名设置

```
    /*1.添加一个类*/
    $('li').addClass('now');
    /*2.删除一个类*/
    $('li').removeClass('now');
    /*3.切换一个类  有就删除没有就添加*/
    $('li').toggleClass('now');
    /*4.匹配一个类  判断是否包含某个类  如果包含返回true否知返回false*/
    $('li').hasClass('now');

```

对应案例：`案例-《tab切换》`

![在这里插入图片描述](https://img-blog.csdnimg.cn/20191224205225608.gif)

#### 属性设置

```
    /*1.获取属性*/
    $('li').attr('name');
    /*2.设置属性*/
    $('li').attr('name','tom');
    /*3.设置多个属性*/
    $('li').attr({
        'name':'tom',
        'age':'18'
    });
    /*4.删除属性*/
    $('li').removeAttr('name');

```

对应案例：`案例-《美女相册》`
![在这里插入图片描述](https://img-blog.csdnimg.cn/20191226180946383.gif)

#### prop方法

```
    /*对于布尔类型的属性，不要attr方法，应该用prop方法 prop用法跟attr方法一样。*/
    $("#checkbox").prop("checked");
    $("#checkbox").prop("checked", true);
    $("#checkbox").prop("checked", false);
    $("#checkbox").removeProp("checked");

```

对应案例：`案例-《表格全选》`
![在这里插入图片描述](https://img-blog.csdnimg.cn/20191226181926529.gif)

## 动画

#### 基本动画

```
    /*注意：动画的本质是改变容器的大小和透明度*/
    /*注意：如果不传参数是看不到动画*/
    /*注意：可传入特殊的字符  fast normal slow*/
    /*注意：可传入数字 单位毫秒*/
    /*1.展示动画*/
    $('li').show();
    /*2.隐藏动画*/
    $('li').hide();
    /*3.切换展示和隐藏*/
    $('li').toggle();

```

#### 滑入滑出

```
    /*注意：动画的本质是改变容器的高度*/
    /*1.滑入动画*/
    $('li').slideDown();
    /*2.滑出动画*/
    $('li').slideUp();
    /*3.切换滑入滑出*/
    $('li').slideToggle();

```

对应案例：`案例-《下拉菜单2》`
![在这里插入图片描述](https://img-blog.csdnimg.cn/20191225134646561.gif)

#### 淡入淡出

```
    /*注意：动画的本质是改变容器的透明度*/
    /*1.淡入动画*/
    $('li').fadeIn();
    /*2.淡出动画*/
    $('li').fadeOut();
    /*3.切换淡入淡出*/
    $('li').fadeToggle();
    $('li').fadeTo('speed','opacity');

```

对应案例：`案例-《淡入淡出》`

![在这里插入图片描述](https://img-blog.csdnimg.cn/20191225134857193.gif)

#### 自定义动画

```
    /*
    * 自定义动画
    * 参数1：需要做动画的属性
    * 参数2：需要执行动画的总时长
    * 参数3：执行动画的时候的速度
    * 参数4：执行动画完成之后的回调函数
    * */
    $('#box1').animate({left:800},5000);
    $('#box2').animate({left:800},5000,'linear');
    $('#box3').animate({left:800},5000,'swing',function () {
        console.log('动画执行完成');
    });

```

对应案例：`案例-《360开关机动画》`
![在这里插入图片描述](https://img-blog.csdnimg.cn/20191224211729803.gif)

#### 动画队列

```
    /*
    jQuery中有个动画队列的机制。
    当我们对一个对象添加多次动画效果时后添加的动作就会被放入这个动画队列中，  
    等前面的动画完成后再开始执行。
    可是用户的操作往往都比动画快，  
    如果用户对一个对象频繁操作时不处理动画队列就会造成队列堆积，
    影响到效果。
    */

```

#### stop使用

```
    /*1.停止当前动画  如果动画队列当中还有动画立即执行*/
    //$('div').stop();
    /*2.和stop()效果一致  说明这是默认设置*/
    //$('div').stop(false,false);
    /*3.停止当前动画  清除动画队列*/
    //$('div').stop(true,false);
    /*4.停止当前动画并且到结束位置  清除了动画队列*/
    //$('div').stop(true,true);
    /*5.停止当前动画并且到结束位置  如果动画队列当中还有动画立即执行*/
    $('div').stop(false,true);

```

对应案例：`案例-《音乐导航》`
对应案例：`案例-《工具栏》`

## 节点操作

#### 创建节点

```
    /*创建节点*/
    var $a = $('<a href="http://www.baidu.com" target="_blank">百度1</a>');

```

#### 克隆节点

```
    /*如果想克隆事件  false  true克隆事件*/
    var $cloneP = $('p').clone(true);

```

#### 添加&移动节点

```
    /*追加自身的最后面  传对象和html格式代码*/
    $('#box').append('<a href="http://www.baidu.com" target="_blank"><b>百度3</b></a>');
    $('#box').append($('a'));
    /*追加到目标元素最后面  传目标元素的选择器或者对象*/
    $('<a href="http://www.baidu.com" target="_blank"><b>百度3</b></a>').appendTo($('#box'));
    $('a').appendTo('#box');
    
    prepend();
    prependTo();
    after();
    before();

```

#### 删除节点&清空节点

```
    /*1.清空box里面的元素*/
    /* 清理门户 */
    $('#box').empty();
    /*2.删除某个元素*/
    /* 自杀 */
    $('#box').remove();

```

【案例-《表格删除》】
![在这里插入图片描述](https://img-blog.csdnimg.cn/20191225135110832.gif)

## jQuery特殊属性操作

#### val方法

> val方法用于设置和获取表单元素的值，例如input、textarea的值

```
    //设置值
    $("#name").val('张三');
    //获取值
    $("#name").val();

```

#### html方法与text方法

> html方法相当于innerHTML text方法相当于innerText

```
    //设置内容
    $('div').html('<span>这是一段内容</span>');
    //获取内容
    $('div').html()
    
    //设置内容
    $('div').text('<span>这是一段内容</span>');
    //获取内容
    $('div').text()

```

区别：html方法会识别html标签，text方法会那内容直接当成字符串，并不会识别html标签。

#### width方法与height方法

> 设置或者获取高度

```
    //带参数表示设置高度
    $('img').height(200);
    //不带参数获取高度
    $('img').height();


```

获取网页的可视区宽高

```
    //获取可视区宽度
    $(window).width();
    //获取可视区高度
    $(window).height();

```

#### scrollTop与scrollLeft

> 设置或者获取垂直滚动条的位置

```
    //获取页面被卷曲的高度
    $(window).scrollTop();
    //获取页面被卷曲的宽度
    $(window).scrollLeft();

```

#### offset方法与position方法

> offset方法获取元素距离document的位置，position方法获取的是元素距离有定位的父元素的位置。

```
    //获取元素距离document的位置,返回值为对象：{left:100, top:100}
    $(selector).offset();
    //获取相对于其最近的有定位的父元素的位置。
    $(selector).position();

```

## jQuery事件机制

> JavaScript中已经学习过了事件，但是jQuery对JavaScript事件进行了封装，增加并扩展了事件处理机制。jQuery不仅提供了更加优雅的事件处理语法，而且极大的增强了事件的处理能力。

#### jQuery事件发展历程(了解)

简单事件绑定>>bind事件绑定>>delegate事件绑定>>on事件绑定(推荐)

> 简单事件注册

```
    click(handler)          //单击事件
    mouseenter(handler)     //鼠标进入事件
    mouseleave(handler)     //鼠标离开事件

```

缺点：不能同时注册多个事件

> bind方式注册事件

```
    //第一个参数：事件类型
    //第二个参数：事件处理程序
    $("p").bind("click mouseenter", function(){
        //事件响应方法
    });

```

缺点：不支持动态事件绑定

> delegate注册委托事件

```
    // 第一个参数：selector，要绑定事件的元素
    // 第二个参数：事件类型
    // 第三个参数：事件处理函数
    $(".parentBox").delegate("p", "click", function(){
        //为 .parentBox下面的所有的p标签绑定事件
    });

```

缺点：只能注册委托事件，因此注册时间需要记得方法太多了

> on注册事件

#### on注册事件(重点)

> jQuery1.7之后，jQuery用on统一了所有事件的处理方法。
>
> 最现代的方式，兼容zepto(移动端类似jQuery的一个库)，强烈建议使用。

on注册简单事件

```
    // 表示给$(selector)绑定事件，并且由自己触发，不支持动态绑定。
    $(selector).on( "click", function() {});

```

on注册委托事件

```
    // 表示给$(selector)绑定代理事件，当必须是它的内部元素span才能触发这个事件，支持动态绑定
    $(selector).on( "click",'span', function() {});

```

on注册事件的语法：

```
    // 第一个参数：events，绑定事件的名称可以是由空格分隔的多个事件（标准事件或者自定义事件）
    // 第二个参数：selector, 执行事件的后代元素（可选），如果没有后代元素，那么事件将有自己执行。
    // 第三个参数：data，传递给处理函数的数据，事件触发的时候通过event.data来使用（不常使用）
    // 第四个参数：handler，事件处理函数
    $(selector).on(events,[selector],[data],handler);

```

#### 事件解绑

> unbind方式（不用）

```
    $(selector).unbind(); //解绑所有的事件
    $(selector).unbind("click"); //解绑指定的事件

```

> undelegate方式（不用）

```
    $( selector ).undelegate(); //解绑所有的delegate事件
    $( selector).undelegate( 'click' ); //解绑所有的click事件

```

> off方式（推荐）

```
    // 解绑匹配元素的所有事件
    $(selector).off();
    // 解绑匹配元素的所有click事件
    $(selector).off("click");

```

#### 触发事件

```
    $(selector).click(); //触发 click事件
    $(selector).trigger("click");

```

#### jQuery事件对象

jQuery事件对象其实就是js事件对象的一个封装，处理了兼容性。

```
    //screenX和screenY   对应屏幕最左上角的值
    //clientX和clientY   距离页面左上角的位置（忽视滚动条）
    //pageX和pageY   距离页面最顶部的左上角的位置（会计算滚动条的距离）
    
    //event.keyCode 按下的键盘代码
    //event.data    存储绑定事件时传递的附加数据
    
    //event.stopPropagation()   阻止事件冒泡行为
    //event.preventDefault()    阻止浏览器默认行为
    //return false:既能阻止事件冒泡，又能阻止浏览器默认行为。

```

## jQuery补充知识点

#### 链式编程

> 通常情况下，只有设置操作才能把链式编程延续下去。因为获取操作的时候，会返回获取到的相应的值，无法返回 jQuery对象。

```
    end(); // 筛选选择器会改变jQuery对象的DOM对象，想要回复到上一次的状态，并且返回匹配元素之前的状态。

```

【案例：五角星评分案例.html】

#### each方法

> jQuery的隐式迭代会对所有的DOM对象设置相同的值，但是如果我们需要给每一个对象设置不同的值的时候，就需要自己进行迭代了。

作用：遍历jQuery对象集合，为每个匹配的元素执行一个函数

```
    // 参数一表示当前元素在所有匹配元素中的索引号
    // 参数二表示当前元素（DOM对象）
    $(selector).each(function(index,element){});

```

【案例：不同的透明度.html】

#### 多库共存

> jQuery使用 作 为 标 示 符 ， 但 是 如 果 与 其 他 框 架 中 的 作为标示符，但是如果与其他框架中的 作为标示符，但是如果与其他框架中的冲突时，jQuery可以释放$符的控制权.

```
    var c = $.noConflict();//释放$的控制权,并且把$的能力给了c

```

## 插件

#### 常用插件

> 插件：jquery不可能包含所有的功能，我们可以通过插件扩展jquery的功能。
>
> jQuery有着丰富的插件，使用这些插件能给jQuery提供一些额外的功能。

1. jquery.color.js

> animate不支持颜色的渐变，但是使用了jquery.color.js后，就可以支持颜色的渐变了。

使用插件的步骤

```
    //1. 引入jQuery文件
    //2. 引入插件（如果有用到css的话，需要引入css）
    //3. 使用插件

```

1. jquery.lazyload.js

懒加载插件

#### jquery.ui.js插件

jQueryUI专指由jQuery官方维护的UI方向的插件。

官方API：http://api.jqueryui.com/category/all/

其他教程：[jQueryUI教程](http://www.runoob.com/jqueryui/jqueryui-tutorial.html)

基本使用:

```
    //1.    引入jQueryUI的样式文件
    //2.    引入jQuery
    //3.    引入jQueryUI的js文件
    //4.    使用jQueryUI功能

```

使用jquery.ui.js手风琴菜单

### 制作jquery插件

> 原理：jquery插件其实说白了就是给jquery对象增加一个新的方法，让jquery对象拥有某一个功能。

```
//通过给$.fn添加方法就能够扩展jquery对象
$.fn. pluginName = function() {};

```

## 案例代码

## 【案例：下拉菜单】

```
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style type="text/css">
        * {
            margin: 0;
            padding: 0;
        }

        ul {
            list-style: none;
        }

        .wrap {
            width: 330px;
            height: 30px;
            margin: 100px auto 0;
            padding-left: 10px;
            background-image: url(images/bg.jpg);
        }

        .wrap li{
            background-image: url(images/libg.jpg);
        }

        .wrap > ul > li {
            float: left;
            margin-right: 10px;
            position: relative;
        }

        .wrap a {
            display: block;
            height: 30px;
            width: 100px;
            text-decoration: none;
            color: #000;
            line-height: 30px;
            text-align: center;
        }

        .wrap li ul {
            position: absolute;
            top: 30px;
            display: none;
        }
    </style>
</head>
<body>
<div class="wrap">
    <ul>
        <li>
            <a href="javascript:void(0);">一级菜单1</a>
            <ul>
                <li><a href="javascript:void(0);">二级菜单1</a></li>
                <li><a href="javascript:void(0);">二级菜单2</a></li>
                <li><a href="javascript:void(0);">二级菜单3</a></li>
            </ul>
        </li>
        <li>
            <a href="javascript:void(0);">一级菜单1</a>
            <ul>
                <li><a href="javascript:void(0);">二级菜单1</a></li>
                <li><a href="javascript:void(0);">二级菜单2</a></li>
                <li><a href="javascript:void(0);">二级菜单3</a></li>
            </ul>
        </li>
        <li>
            <a href="javascript:void(0);">一级菜单1</a>
            <ul>
                <li><a href="javascript:void(0);">二级菜单1</a></li>
                <li><a href="javascript:void(0);">二级菜单2</a></li>
                <li><a href="javascript:void(0);">二级菜单3</a></li>
            </ul>
        </li>
    </ul>
</div>
</body>
</html>
<script src="jquery-1.12.4.js"></script>
<script>
  $(function () {
    //需求: 给一级菜单li设置鼠标移入事件，二级菜单显示。
    //      给一级菜单li设置鼠标离开事件，二级菜单隐藏。


    //获取一级菜单li的方式:
    //$('li');//不行
    //$('ul>li');//不行
    //$('.wrap li');//不行
    //$('.wrap>ul>li')//可行的.


    //1.给一级菜单li设置鼠标移入事件，二级菜单显示。
    $('.wrap>ul>li').mouseover(function () {
      //console.log(this);//谁触发了鼠标移入事件,那这个this就是谁,this还是一个dom对象.
      // $(this).children('ul').css('display','block');//显示就是更改display属性为block.
      $(this).children('ul').show();//show()方法本质上还是更新display属性为block.
    });

    //2.给一级菜单li设置鼠标离开事件，二级菜单隐藏。
    $('.wrap>ul>li').mouseout(function () {
      $(this).children('ul').hide(); //hide()方法本质上还是更新display属性为none
    });



    //3.思考题:
    //为什么不给一级菜单a标签设置鼠标移入和离开事件?
    //因为这样的话,选不到二级菜单.
    // $('.wrap>ul>li>a').mouseover(function () {
    //   $(this).siblings('ul').show();
    // });
    // $('.wrap>ul>li>a').mouseout(function () {
    //   $(this).siblings('ul').hide();
    // });


  });
</script>


```

## 【案例：突出展示】

```
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style type="text/css">
        * {
            margin: 0;
            padding: 0;
        }

        ul {
            list-style: none;
        }

        body {
            background: #000;
        }

        .wrap {
            margin: 100px auto 0;
            width: 630px;
                  height: 394px;
            padding: 10px 0 0 10px;
            background: #000;
            overflow: hidden;
            border: 1px solid #fff;
        }

        .wrap li {
            float: left;
            margin: 0 10px 10px 0;
        }

        .wrap img {
            display: block;
                  border: 0;
        }
    </style>
</head>
<body>
<div class="wrap">
    <ul>
        <li><a href="#"><img src="images/01.jpg" alt=""/></a></li>
        <li><a href="#"><img src="images/02.jpg" alt=""/></a></li>
        <li><a href="#"><img src="images/03.jpg" alt=""/></a></li>
        <li><a href="#"><img src="images/04.jpg" alt=""/></a></li>
        <li><a href="#"><img src="images/05.jpg" alt=""/></a></li>
        <li><a href="#"><img src="images/06.jpg" alt=""/></a></li>
    </ul>
</div>
</body>
</html>
<script src="jquery-1.12.4.js"></script>
<script>
  $(function () {
    //需求1:给小人物所在的li标签设置鼠标移入事件:当前li标签透明度为1,其他的兄弟li标签透明度为0.4
    //需求2:鼠标离开大盒子,所有的li标签的透明度改成1.


    //获取小人物们所在的li
    //$('.wrap li')//可以的
    //console.log($('.wrap').find('li'));//可以的

    //需求1:
    $('.wrap').find('li').mouseenter(function () {
        console.log($(this).css('opacity', 1));//这个css方法有返回值,返回值就是设置这个方法的元素本身.
        console.log($(this).css('opacity', 1).siblings('li'));
        
        $(this).css('opacity', 1).siblings('li').css('opacity',0.4);
    });

    //需求2:
    $('.wrap').mouseleave(function () {
        //$('.wrap').find('li').css('opacity',1);

        //console.log($(this));//在这个离开事件中,this是这整个大盒子.
        $(this).find('li').css('opacity',1);
    });

  });
</script>


```

## 【案例：手风琴】

```
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style type="text/css">
        * {
            padding: 0;
            margin: 0;
        }

        ul {
            list-style-type: none;
        }

        .parentWrap {
            width: 200px;
            text-align: center;

        }

        .menuGroup {
            border: 1px solid #999;
            background-color: #e0ecff;
        }

        .groupTitle {
            display: block;
            height: 20px;
            line-height: 20px;
            font-size: 16px;
            border-bottom: 1px solid #ccc;
            cursor: pointer;
        }

        .menuGroup > div {
            height: 200px;
            background-color: #fff;
            display: none;
        }

    </style>
</head>
<body>
    <ul class="parentWrap">
        <li class="menuGroup">
            <span class="groupTitle">标题1</span>
            <div>我是弹出来的div1</div>
        </li>

        <li class="menuGroup">
            <span class="groupTitle">标题2</span>
            <div>我是弹出来的div2</div>
        </li>

        <li class="menuGroup">
            <span class="groupTitle">标题3</span>
            <div>我是弹出来的div3</div>
        </li>

        <li class="menuGroup">
            <span class="groupTitle">标题4</span>
            <div>我是弹出来的div4</div>
        </li>
    </ul>

</body>
</html>
<script src="jquery-1.12.4.js"></script>
<script>
    $(function () {
        //需求:点击标题li标签,对应的div显示, 他的兄弟标签li下面的div隐藏.
        $('.parentWrap>.menuGroup').click(function () {
            //jQuery特性:隐式迭代
            //jQuery特性:链式编程,在于一个方法返回的是一个jQuery对象,既然是jQueyr对象就可以继续点出jQuery的方法来.
            $(this).children('div').show().parent().siblings('li').children('div').hide();
        });

    });
</script>

```

## 【案例：淘宝精品】

```

<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style type="text/css">
        * {
            margin: 0;
            padding: 0;
            font-size: 12px;
        }
        ul {
            list-style: none;
        }
        a {
            text-decoration: none;
        }

        .wrapper {
            width: 298px;
            height: 248px;
            margin: 100px auto 0;
            border: 1px solid pink;
            overflow: hidden;
        }
        #left,#center,#right{
            float: left;
        }
        #left li , #right li{
            background: url(images/lili.jpg) repeat-x;
        }
        #left li a,#right li a{
            display: block;
            width: 48px;
            height: 27px;
            border-bottom: 1px solid pink;
            line-height: 27px;
            text-align: center;
            color: black;
        }
        #left li a:hover,#right li a:hover{
            background-image: url(images/abg.gif);
        }
        #center {
            border-left: 1px solid pink;
            border-right: 1px solid pink;
        }
    </style>
    <script src="jquery-1.12.4.js"></script>
    <script>
      $(function () {
          //需求1:给左边的li标签们设置鼠标移入事件,让中间索引对应的li显示,其他的li隐藏.
          //需求2:给右边的li标签们设置鼠标移入事件,让中间索引对应的li显示,其他的li隐藏.

          //需求1:
          $('#left>li').mouseenter(function () {
              //获取当前鼠标移入的这个li标签的索引.
              var idx = $(this).index();//索引:表示的是这个元素在他兄弟元素间的排行.
              //console.log(idx);
              //让中间索引对应的li显示,其他的li隐藏.
              //$('#center>li:eq('+idx+')'); //字符串的拼接
              $('#center>li').eq(idx).show().siblings('li').hide();
          });

          //需求2:
          $('#right>li').mouseenter(function () {
              //获取当前鼠标移入的这个li标签的索引.
              var idx = $(this).index();
              idx += 9;//9不要写死,9是左边li标签的个数.
              //让中间索引对应的li显示,其他的li隐藏.
              $('#center>li').eq(idx).show().siblings('li').hide();
          });




          //因为age已经成为字符串的一部分了.不能拿到age变量的值.
          // var age = 18;
          // console.log("我的名字是age");


          //思考题:
          //为什么是给li标签设置鼠标移入事件,而不是给a标签设置鼠标移入事件?
          //因为给a标签设置的话,不能拿到正确的索引.
          // $('#left a').mouseenter(function () {
          //    var idx =  $(this).index();
          //     console.log(idx);
          // });

      });
    </script>
</head>
<body>
<div class="wrapper">

    <ul id="left">
        <li><a href="#">女靴</a></li>
        <li><a href="#">雪地靴</a></li>
        <li><a href="#">冬裙</a></li>
        <li><a href="#">呢大衣</a></li>
        <li><a href="#">毛衣</a></li>
        <li><a href="#">棉服</a></li>
        <li><a href="#">女裤</a></li>
        <li><a href="#">羽绒服</a></li>
        <li><a href="#">牛仔裤</a></li>
    </ul>
    <ul id="center">
        <li><a href="#"><img src="images/女靴.jpg" width="200" height="250"/></a></li>
        <li><a href="#"><img src="images/雪地靴.jpg" width="200" height="250"/></a></li>
        <li><a href="#"><img src="images/冬裙.jpg" width="200" height="250"/></a></li>
        <li><a href="#"><img src="images/呢大衣.jpg" width="200" height="250"/></a></li>
        <li><a href="#"><img src="images/毛衣.jpg" width="200" height="250"/></a></li>
        <li><a href="#"><img src="images/棉服.jpg" width="200" height="250"/></a></li>
        <li><a href="#"><img src="images/女裤.jpg" width="200" height="250"/></a></li>
        <li><a href="#"><img src="images/羽绒服.jpg" width="200" height="250"/></a></li>
        <li><a href="#"><img src="images/牛仔裤.jpg" width="200" height="250"/></a></li>
        <li><a href="#"><img src="images/女包.jpg" width="200" height="250"/></a></li>
        <li><a href="#"><img src="images/男包.jpg" width="200" height="250"/></a></li>
        <li><a href="#"><img src="images/登山鞋.jpg" width="200" height="250"/></a></li>
        <li><a href="#"><img src="images/皮带.jpg" width="200" height="250"/></a></li>
        <li><a href="#"><img src="images/围巾.jpg" width="200" height="250"/></a></li>
        <li><a href="#"><img src="images/皮衣.jpg" width="200" height="250"/></a></li>
        <li><a href="#"><img src="images/男毛衣.jpg" width="200" height="250"/></a></li>
        <li><a href="#"><img src="images/男棉服.jpg" width="200" height="250"/></a></li>
        <li><a href="#"><img src="images/男靴.jpg" width="200" height="250" /></a></li>
    </ul>
    <ul id="right">
        <li><a href="#">女包</a></li>
        <li><a href="#">男包</a></li>
        <li><a href="#">登山鞋</a></li>
        <li><a href="#">皮带</a></li>
        <li><a href="#">围巾</a></li>
        <li><a href="#">皮衣</a></li>
        <li><a href="#">男毛衣</a></li>
        <li><a href="#">男棉服</a></li>
        <li><a href="#">男靴</a></li>
    </ul>

</div>
</body>
</html>


```

## 案例-《tab切换》

```
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style type="text/css">
        * {
            margin: 0;
            padding: 0;
        }

        ul {
            list-style: none;
        }

        .wrapper {
            width: 1000px;
            height: 475px;
            margin: 0 auto;
            margin-top: 100px;
        }

        .tab {
            border: 1px solid #ddd;
            border-bottom: 0;
            height: 36px;
            width: 320px;
        }

        .tab li {
            position: relative;
            float: left;
            width: 80px;
            height: 34px;
            line-height: 34px;
            text-align: center;
            cursor: pointer;
            border-top: 4px solid #fff;
        }

        .tab span {
            position: absolute;
            right: 0;
            top: 10px;
            background: #ddd;
            width: 1px;
            height: 14px;
            overflow: hidden;
        }

        .products {
            width: 1002px;
            border: 1px solid #ddd;
            height: 476px;
        }

        .products .main {
            float: left;
            display: none;
        }

        .products .main.selected {
            display: block;
        }

        .tab li.active {
            border-color: red;
            border-bottom: 0;
        }

    </style>
</head>
<body>
<div class="wrapper">
    <ul class="tab">
        <li class="tab-item active">国际大牌<span>◆</span></li>
        <li class="tab-item">国妆名牌<span>◆</span></li>
        <li class="tab-item">清洁用品<span>◆</span></li>
        <li class="tab-item">男士精品</li>
    </ul>
    <div class="products">
        <div class="main selected">
            <a href="###"><img src="images/guojidapai.jpg" alt=""/></a>
        </div>
        <div class="main">
            <a href="###"><img src="images/guozhuangmingpin.jpg" alt=""/></a>
        </div>
        <div class="main">
            <a href="###"><img src="images/qingjieyongpin.jpg" alt=""/></a>
        </div>
        <div class="main">
            <a href="###"><img src="images/nanshijingpin.jpg" alt=""/></a>
        </div>
    </div>
</div>

</body>
</html>

<script src="jquery-1.12.4.js"></script>
<script>
    $(function () {
        //需求:给tab栏的每一个li标签设置鼠标移入事件: 当前li添加active类,其他的兄弟li移除active类.
        //    找到当前tab栏索引一致的div,让他添加 selected类,其他的兄弟div移除selected类.

        //需求1
        $('.tab>.tab-item').mouseenter(function () {
            $(this).addClass('active').siblings('li').removeClass('active');

            //获取鼠标当前移入的这个li标签的索引
            var idx = $(this).index();

            //需求2:
            $('.products>.main').eq(idx).addClass('selected').siblings('div').removeClass('selected');
        });

    });
</script>

```

## 案例-《下拉菜单2》

```
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style type="text/css">
        * {
            margin: 0;
            padding: 0;
        }

        ul {
            list-style: none;
        }

        .wrap {
            width: 330px;
            height: 30px;
            margin: 100px auto 0;
            padding-left: 10px;
            background-image: url(images/bg.jpg);
        }

        .wrap li{
            background-image: url(images/libg.jpg);
        }

        .wrap > ul > li {
            float: left;
            margin-right: 10px;
            position: relative;
        }

        .wrap a {
            display: block;
            height: 30px;
            width: 100px;
            text-decoration: none;
            color: #000;
            line-height: 30px;
            text-align: center;
        }

        .wrap li ul {
            position: absolute;
            top: 30px;
            display: none;
        }
    </style>
</head>
<body>
<div class="wrap">
    <ul>
        <li>
            <a href="javascript:void(0);">一级菜单1</a>
            <ul>
                <li><a href="javascript:void(0);">二级菜单1</a></li>
                <li><a href="javascript:void(0);">二级菜单2</a></li>
                <li><a href="javascript:void(0);">二级菜单3</a></li>
            </ul>
        </li>
        <li>
            <a href="javascript:void(0);">一级菜单1</a>
            <ul>
                <li><a href="javascript:void(0);">二级菜单1</a></li>
                <li><a href="javascript:void(0);">二级菜单2</a></li>
                <li><a href="javascript:void(0);">二级菜单3</a></li>
            </ul>
        </li>
        <li>
            <a href="javascript:void(0);">一级菜单1</a>
            <ul>
                <li><a href="javascript:void(0);">二级菜单1</a></li>
                <li><a href="javascript:void(0);">二级菜单2</a></li>
                <li><a href="javascript:void(0);">二级菜单3</a></li>
            </ul>
        </li>
    </ul>
</div>
</body>
</html>
<script src="jquery-1.12.4.js"></script>
<script>
  $(function () {
    //需求: 给一级菜单的li标签设置鼠标移入事件，二级菜单ul显示。
    //      给一级菜单li设置鼠标离开事件，二级菜单隐藏。


    //鼠标移入事件.
    $('.wrap>ul>li').mouseenter(function () {
      //$(this).children('ul').css('display','block');
      //简写
      $(this).children('ul').stop(true,false).slideDown(300);
    });

    //鼠标移出事件.
    $('.wrap>ul>li').mouseleave(function () {
      //$(this).find('ul').css('display','none');
      //简写
      $(this).find('ul').stop(true,false).slideUp(150);
    });



  });
</script>

```

## 案例-《360开关机动画》

```
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        .box {
            width: 322px;
            position: fixed;
            bottom: 0;
            right: 0;
            overflow: hidden;
        }

        span {
            position: absolute;
            top: 0;
            right: 0;
            width: 30px;
            height: 20px;
            cursor: pointer;
        }
    </style>
</head>
<body>

<div class="box" id="box">
    <span id="closeButton"></span>
    <div class="hd" id="headPart">
        <img src="images/t.jpg" alt=""/>
    </div>
    <div class="bd" id="bottomPart">
        <img src="images/b.jpg" alt=""/>
    </div>
</div>

</body>
</html>
<script src="jquery-1.12.4.js"></script>
<script>
  $(function () {
      //1.给关闭按钮一个点击事件.
      $('#closeButton').click(function () {
          //2.让下面那部分的高度动画变为0.
          $('#bottomPart').animate({
              height:0
          },500, function () {
              //3.让整个大盒子的宽度动画变为0
              $('#box').animate({
                  width:0
              },1000);
          });
      });

  });
</script>

```

## 案例-《淡入淡出》

```
<!DOCTYPE html>
<html>
<head lang="en">
  <meta charset="UTF-8">
  <title>标题</title>
  <style>
    div {
      width: 200px;
      height: 200px;
      background-color: red;
      display: none;
    }
  </style>
</head>
<body>
  <input type="button" value="淡入" id="fadeIn"/>
  <input type="button" value="淡出" id="fadeOut"/>
  <input type="button" value="切换" id="fadeToggle"/>
  <input type="button" value="淡入到那里" id="fadeTo"/><br/><br/>
  <div id="div1"></div>
</body>
</html>
<script src="jquery-1.12.4.js"></script>
<script>
  $(function () {
    //1.淡入 fadeIn
    $('#fadeIn').click(function () {
      //让id为div1的这个元素淡入.
      //$('#div1').fadeIn(); //不给参数相当于给了一个默认的动画时长,mormal400毫秒
      $('#div1').fadeIn(1000);
      // $('#div1').fadeIn(2000, function () {
      //   alert('淡入完成了...');
      // });
    });

    //2.淡出 fadeOut
    $('#fadeOut').click(function () {
      //让id为div1的这个元素淡出
      $('#div1').fadeOut(1000);
      // $('#div1').fadeOut(1000, function () {
      //   alert('淡出完成了');
      // });
    });


    //3.切换 fadeToggle
    $('#fadeToggle').click(function () {
      $('#div1').fadeToggle(1000);
    });


    //4.淡入到那里 fadeTo
    $('#fadeTo').click(function () {
      $('#div1').fadeTo(1000,0.5);
    });

  });
</script>

```

## 案例-《表格删除》

```

<!DOCTYPE html>
<html>

<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        * {
            padding: 0;
            margin: 0;
        }

        .wrap {
            width: 410px;
            margin: 100px auto 0;
        }

        table {
            border-collapse: collapse;
            border-spacing: 0;
            border: 1px solid #c0c0c0;
        }

        th,
        td {
            border: 1px solid #d0d0d0;
            color: #404060;
            padding: 10px;
        }

        th {
            background-color: #09c;
            font: bold 16px "Î¢ÈíÑÅºÚ";
            color: #fff;
        }

        td {
            font: 14px "Î¢ÈíÑÅºÚ";
        }

        td a.get {
            text-decoration: none;
        }

        a.del:hover {
            text-decoration: underline;
        }

        tbody tr {
            background-color: #f0f0f0;
        }

        tbody tr:hover {
            cursor: pointer;
            background-color: #fafafa;
        }

        .btnAdd {
            width: 110px;
            height: 30px;
            font-size: 20px;
            font-weight: bold;
        }

        .form-item {
            height: 100%;
            position: relative;
            padding-left: 100px;
            padding-right: 20px;
            margin-bottom: 34px;
            line-height: 36px;
        }

        .form-item > .lb {
            position: absolute;
            left: 0;
            top: 0;
            display: block;
            width: 100px;
            text-align: right;
        }

        .form-item > .txt {
            width: 300px;
            height: 32px;
        }

        .mask {
            position: absolute;
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100%;
            background: #000;
            opacity: 0.15;
            display: none;
        }

        .form-add {
            position: fixed;
            top: 30%;
            left: 50%;
            margin-left: -197px;
            padding-bottom: 20px;
            background: #fff;
            display: none;
        }

        .form-add-title {
            background-color: #f7f7f7;
            border-width: 1px 1px 0 1px;
            border-bottom: 0;
            margin-bottom: 15px;
            position: relative;
        }

        .form-add-title span {
            width: auto;
            height: 18px;
            font-size: 16px;
            font-family: ËÎÌå;
            font-weight: bold;
            color: rgb(102, 102, 102);
            text-indent: 12px;
            padding: 8px 0px 10px;
            margin-right: 10px;
            display: block;
            overflow: hidden;
            text-align: left;
        }

        .form-add-title div {
            width: 16px;
            height: 20px;
            position: absolute;
            right: 10px;
            top: 6px;
            font-size: 30px;
            line-height: 16px;
            cursor: pointer;
        }

        .form-submit {
            text-align: center;
        }

        .form-submit input {
            width: 170px;
            height: 32px;
        }
    </style>
</head>

<body>
<div class="wrap">
    <input type="button" value="清空内容" id="btn">
    <table>
        <thead>
        <tr>
            <th>课程名称</th>
            <th>所属学院</th>
            <th>操作</th>
        </tr>
        </thead>
        <tbody id="j_tb">
        <tr>
            <!-- <td><input type="checkbox"/></td> -->
            <td>JavaScript</td>
            <td>传智播客-前端与移动开发学院</td>
            <td><a href="javascrip:;" class="get">DELETE</a></td>
        </tr>
        <tr>
            <!-- <td><input type="checkbox"/></td> -->
            <td>css</td>
            <td>传智播客-前端与移动开发学院</td>
            <td><a href="javascrip:;" class="get">DELETE</a></td>
        </tr>
        <tr>
            <!-- <td><input type="checkbox"/></td> -->
            <td>html</td>
            <td>传智播客-前端与移动开发学院</td>
            <td><a href="javascrip:;" class="get">DELETE</a></td>
        </tr>
        <tr>
            <!-- <td><input type="checkbox"/></td> -->
            <td>jQuery</td>
            <td>传智播客-前端与移动开发学院</td>
            <td><a href="javascrip:;" class="get">DELETE</a></td>
        </tr>
        </tbody>
    </table>
</div>
</body>
</html>
<script src="jquery-1.12.4.js"></script>
<script>
    $(function () {
        //1.清空内容
        $('#btn').click(function () {
            //找到tbody,清空他的内容.
            $('#j_tb').empty();
        });

        //2.删除对应的行.
        $('#j_tb .get').click(function () {
            //点击a标签,删除a标签对应的那一行.
            $(this).parent().parent().remove();
        });
    });
</script>

```

## 案例-《美女相册》

```
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style type="text/css">
        body {
            font-family: "Helvetica","Arial",serif;
            color: #333;
            background-color: #ccc;
            margin: 1em 10%;
        }
        h1 {
            color: #333;
            background-color: transparent;
        }
        a {
            color: #c60;
            background-color: transparent;
            font-weight: bold;
            text-decoration: none;
        }
        ul {
            padding: 0;
        }
        li {
            float: left;
            padding: 1em;
            list-style: none;
        }
        #imagegallery {

            list-style: none;
        }

        #imagegallery li {
            margin: 0px 20px 20px 0px;
            padding: 0px;
            display: inline;
        }

        #imagegallery li a img {
            border: 0;
        }
    </style>
</head>
<body>
<h2>
    美女画廊
</h2>

<ul id="imagegallery">
    <li><a href="images/meinv/1.jpg" title="美女A">
        <img src="images/meinv/1-small.jpg" width="100" alt="美女1" />
    </a></li>
    <li><a href="images/meinv/2.jpg" title="美女B">
        <img src="images/meinv/2-small.jpg" width="100" alt="美女2" />
    </a></li>
    <li><a href="images/meinv/3.jpg" title="美女C">
        <img src="images/meinv/3-small.jpg" width="100" alt="美女3" />
    </a></li>
    <li><a href="images/meinv/4.jpg" title="美女D">
        <img src="images/meinv/4-small.jpg" width="100" alt="美女4" />
    </a></li>
</ul>
<div style="clear:both"></div>
<img id="image" src="images/meinv/placeholder.png" alt="" width="450px" />
<p id="des">选择一个图片</p>
<script src="jquery-1.12.4.js"></script>
<script>
  $(function () {
      //1.需求
      //给小图片a标签设置一个单击事件.
      //让id为image的img标签修改src属性为当前点击的a标签的href属性的值
      //让id为des的这个p标签的文本设置为当前点击的这个a标签的title属性的值.

      $('#imagegallery>li>a').click(function () {
          //获取当前点击的a标签的href属性的值和title属性的值。
          var srcValue = $(this).attr('href');
          var contentValue = $(this).attr('title');
          //给img标签的src属性赋值，以及给p标签的内容赋值。
          $('#image').attr('src',srcValue);
          $('#des').text(contentValue);
          //阻止a标签的跳转
          return false;
      });


  });
</script>
</body>
</html>

```

## 案例-《表格全选》

```
<!DOCTYPE html>
<html>

<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        * {
            padding: 0;
            margin: 0;
        }
        .wrap {
            width: 300px;
            margin: 100px auto 0;
        }

        table {
            border-collapse: collapse;
            border-spacing: 0;
            border: 1px solid #c0c0c0;
        }

        th,
        td {
            border: 1px solid #d0d0d0;
            color: #404060;
            padding: 10px;
        }

        th {
            background-color: #09c;
            font: bold 16px "微软雅黑";
            color: #fff;
        }

        td {
            font: 14px "微软雅黑";
        }

        tbody tr {
            background-color: #f0f0f0;
        }

        tbody tr:hover {
            cursor: pointer;
            background-color: #fafafa;
        }
    </style>
</head>

<body>
<div class="wrap">
    <table>
        <thead>
            <tr>
                <th>
                    <input type="checkbox" id="j_cbAll"/>
                </th>
                <th>课程名称</th>
                <th>所属学院</th>
            </tr>
        </thead>
        <tbody id="j_tb">
            <tr>
                <td>
                    <input type="checkbox"/>
                </td>
                <td>JavaScript</td>
                <td>前端与移动开发学院</td>
            </tr>
            <tr>
                <td>
                    <input type="checkbox"/>
                </td>
                <td>css</td>
                <td>前端与移动开发学院</td>
            </tr>
            <tr>
                <td>
                    <input type="checkbox"/>
                </td>
                <td>html</td>
                <td>前端与移动开发学院</td>
            </tr>
            <tr>
                <td>
                    <input type="checkbox"/>
                </td>
                <td>jQuery</td>
                <td>前端与移动开发学院</td>
            </tr>
        </tbody>
    </table>
</div>
<div id="one"></div>
</body>
<script src="jquery-1.12.4.js"></script>
<script>
  $(function () {
      //需求1:上面的多选框选中,下面的多选框们跟着选中,上面的多选框没有选中,下面的多选框们跟着不选中.
      //需求2:下面的多选框们,都有单击事件:
      //如果下面的多选框们都选中了,那么上面的那个多选框跟着选中,如果下面多选框有一个没有选中,那么上面的多选框就不选中.

      //需求1：
      $('#j_cbAll').click(function () {
          //获取这多选框的checked值。
          var checkedValue = $(this).prop('checked');
          //console.log(checkedValue);
          //让下面的多选框们的checked跟随这个checkedValue
          $('#j_tb input').prop('checked',checkedValue);
      });

      //需求2：
      $('#j_tb input').click(function () {
          //判断下面的那四个多选框是否都被选中了。
          var numOfAll = $('#j_tb input').length; //获取到下面所有多选框的个数。
          var numOfSelect = $('#j_tb input:checked').length; //获取到下面被选中的多选框的个数。
          console.log(numOfAll + ":" + numOfSelect);
          //判断
          // if(numOfAll == numOfSelect){
          //     //全部被选中。
          //     $('#j_cbAll').prop('checked',true);
          // }else {
          //     //有的有没选中。
          //     $('#j_cbAll').prop('checked',false);
          // }

          //上面这个判断其实可以优化。
          $('#j_cbAll').prop('checked',numOfAll == numOfSelect);
      });

  });
</script>
</html>


```

 

  

 