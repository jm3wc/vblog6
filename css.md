# CSS3基础&选择符

 

> ## CSS基础知识

 

- CSS是Cascading Style Sheet（层叠样式表）的缩写 是用于增强控制网页样式并允许将样式信息与网页内容分离的一种标记性语言
- 使用CSS样式可以有效地对页面进行布局,对页面字体，颜色，背景和其它效果实现精确描述。可以支持多种设备，如手机，PDA，打印机，电视机，游戏机等
- 目的：将表现与结构分离

 

------

 

 

> ## CSS语法结构

 

- CSS语法由三部分构成:选择符、属性和值,每个属性有一个值,属性和值被冒号分开

```
<style type="text/css">
    body { background-color:#cccccc;}
</style>
```

 

------

 

 

> ## 将CSS应用到网页中

- 将CSS应用到网页中有：3种方式 尽量使用外部样式表这种方式 目的是让我们的`html`结构与`css`表现形式分开

 

1.行内样式表：内联样式表是指将CSS样式写在HTML标签中

```
<body style="background-color:#ccccc;"></body>
<h1 style="font-size:12px; color:#ff0000;">这是一个标题</h1>
```

 

2.内部样式表：内部样式表作为页面中的一个单独部分

```
<head>
    <style type="text/css">
      body {
            background-color:#cccccc;
        }
    </style>
</head>
```

 

3.外部样式表：外部样式表是CSS应用中应用最多的形式，它将CSS样式代码单独放在一个外部文件中， 再由网页进行调用

```
style.css
    body { background-color:#cccccc;}

<head>
    <link rel="stylesheet" type="text/css" href="style.css" />
</head>
```

 

------

 

 

> ## CSS选择符

- 元素选择符
- 关系选择符
- 伪类选择符
- 属性选择符
- 伪对象选择符

 

- 元素选择符

|    名称     |        描述         |
| :---------: | :-----------------: |
| 通配选择符  |          *          |
| 类型选择符  |       `body`        |
| 群组选择符  | `body`，`p`，`span` |
|  ID选择符   |        `#id`        |
| CLASS选择符 |      `.class`       |

 

- 通配选择符

```
* 号表示所有的元素
*{ color:blue; margin:0; padding:0;}
```

 

- 类型选择符

```
类型选择符就是将html标签作为选择符的一种
body {} h1 {} p {}
```

- 群组选择符

```
除了可以对单个标签进行样式指定外,还可以对组合标签进行相同的样式定义
使用逗号对选择符进行分隔。对页面中需要使用相同样式的地方,只需写一次样式
h1,h2, h3, p { font-size:12px; font-family:arial;}
```

- ID选择符

```
id 及 class 均是css提供由用户给定义标签名称的选择符     
id 选择器可以为标有特定 id 的 HTML 元素指定特定的样式
id 选择器以 "#" 来定义

<style>
#p1 { font-size:12px; font-weight:bold;}
</style>

<p id="p1"> 这是一个段落 </p>
```

- CLASS选择符

```
在网页中,每个id名称中只能使用一次,不得重复。
与id 不同,class允许重复使用
比如页面中的多个元素,都可以使用同一个样式定义.

<style>
.p1 { font-size:12px; font-weight:bold;}
</style>

<p class="p1"> 这是一个段落 </p>
```

 

- 关系选择符

|                名称                | 描述 |
| :--------------------------------: | :--: |
| 包含选择符(所有被E元素包含的F元素) | E F  |
|  子选择符(所有作为E元素的子元素F)  | E>F  |
|  相邻选择符(紧贴在E元素之后F元素)  | E+F  |
|   兄弟选择符(E元素所有兄弟元素F)   | E~F  |

 

```
<style>
/* 包含选择符 */
.son1 a { color:red;} 

/* 子选择符 */
.son1>a { color:red;} 

/* 相邻选择符 */
.son1+div { color:green;}

/* 兄弟选择符*/
.son1~div { color:yellow;}
</style>

<div class="father">
    <div class="son1">
        <a href="#">son1</a>
        <div class="grandson">
            <a href="#">grandson</a>
        </div>
    </div>
    <div class="son2">son2</div>
    <div class="son3">son3</div>
</div>
```

 

- 伪类选择符

 

|        名称         |  版本  |                       描述                        |
| :-----------------: | :----: | :-----------------------------------------------: |
|       E:link        |  CSS1  |               链接未被访问前的样式                |
|      E:visited      |  CSS1  |               链接已被访问过的样式                |
|       E:hover       | CSS1/2 |                鼠标在链接上的样式                 |
|      E:active       | CSS1/2 |         鼠标点击激活状态的样式(点击瞬间)          |
|       E:focus       | CSS1/2 |            元素在产生输入焦点时的样式             |
|    E:first-child    |  CSS2  |             匹配父元素的第一个子元素              |
|    E:last-child     |  CSS3  |            匹配父元素的最后一个子元素             |
|   E:nth-child(n)    |  CSS3  |              匹配父元素的第n个子元素              |
| E:nth-last-child(n) |  CSS3  |            匹配父元素的倒数第n个子元素            |
|  E:nth-child(odd)   |  CSS3  |                   匹配奇数元素                    |
|  E:nth-child(even)  |  CSS3  |                   匹配偶数元素                    |
|      E:checked      |  CSS3  | 匹配处于选中状态的元素(用于type为radio与checkbox) |

 

```
/* link 未访问的链接 */
a:link {color: #FF0000; text-decoration: none} 


/* visited 已访问的链接 */
a:visited {color: #00FF00; text-decoration: none} 


/* hover 鼠标在链接上 */
a:hover {color: #FF00FF; text-decoration: underline}  


/* active 激活链接 */
a:active {color: #0000FF; text-decoration: underline}  


/* focus 元素在产生输入焦点时的样式 */
input[type="text"]:focus {background: #f6f6f6;}

/* first-child 匹配父元素的第一个子元素 */
li:first-child {color: #f00;}


/* last-child 匹配父元素的最后一个子元素 */
li:last-child {color: #f00;}

/* 奇数 */
ul li:nth-child(odd){background-color:#ccc;} 
ul li:nth-child(2n+1){border-left:2px solid red;}


/* 偶数 */
ul li:nth-child(even){background-color:#0F7CCF;}
ul li:nth-child(2n){border-left:2px solid black;}   


/* 3的倍数 */
ul li:nth-child(3n){color:red;font-weight:bold;} 


<div class="test">
    <div>我是一个div元素</div>
    <p>我是一个p元素</p>
    <p>我是一个p元素</p>
</div>


/* checked 匹配用户界面上处于选中状态的元素(用于type为radio与checkbox) */
input[name="love[]"]:checked+label{color:blue;background-color:red;}

<input type="checkbox" name="love[]" id="book" value="book">
<label for="book">书</label>
<br>
<input type="checkbox" name="love[]" id="music" value="music">
<label for="music">音乐</label>
<br>
<input type="checkbox" name="love[]" id="movie" value="movie">
<label for=“movie”>电影</label>
<br>
```

 

- 属性选择符

 

|     选择符     | 版本 |               描述               |
| :------------: | :--: | :------------------------------: |
|    `E[att]`    | CSS2 |        具有att属性的元素         |
| `E[att="val"`] | CSS2 | 具有att属性且属性值等于val的元素 |

 

```
<style>
p[class]{color:green;}
p[class="qq"]{color:red;}     
</style>

<p class="a">测试数据1</p>
<p class="qq">测试数据2</p>
```

 

- 伪对象选择符

|        选择符        |  版本  |                      描述                       |
| :------------------: | :----: | :---------------------------------------------: |
| E:before / E::before | CSS2/3 | 设置在对象前追加内容。用来和content属性一起使用 |
|  E:after / E::after  | CSS2/3 | 设置在对象后追加内容。用来和content属性一起使用 |

 

> before after

```
<style>
.t2::before{content:'123';}

.t2::after{content:'123';}
</style>

<p class="t2">test</p>
```

 

> 选择符优先权

```
!important > 行内样式 >ID选择器 > 类选择器 > 标签 > 通配符 > 继承 > 浏览器默认属性

CSS样式的层级越深执行的权限就越大
```

 

## CSS语法规则

|     名称      |  版本  |                          描述                           |
| :-----------: | :----: | :-----------------------------------------------------: |
|  !important   |  CSS1  |                提升指定样式的应用优先权                 |
|    @import    | CSS1/3 | 导入外部样式表及目标媒体,该规则必须在样式表头部最先声明 |
|    @media     | CSS2/3 |         指定样式表规则用于指定的媒体类型和条件          |
|  @font-face   |  CSS3  |             设置嵌入HTML文档的OpenType字体              |
|  @keyframes   |  CSS3  |                 指定动画名称和动画效果                  |
|  CSS度量单位  |  CSS   |                       CSS常用单位                       |
| CSS浏览器前缀 |  CSS3  |                    CSS浏览器引擎前缀                    |

## !important

```
HTML中的标签会继承部分父标签的样式。body { color:#ff0000;}   
那么页面中,body之下的所有标签及标签下的所有子标签的文本都将变成红色  

!important 在两个相同类型的css样式定义中,往优先执行后面一个

p{font-size:14px;font-size:20px;}

但是可以通过!important语法,提升某一句样式表的重要性,使及优先执先 !important标注的语句

p{ 
    font-size:14px!important; 
    font-size:20px;
}
```

 

------

## @import

1. 指定导入的外部样式表及目标媒体
2. 该规则必须在样式表头部最先声明
3. IE使用@import无法引入超过35条的样式表
4. 使用url(url)和直接使用url需要注意的地方

 

```
@import url("global.css");
@import url(global.css);
@import "global.css";

以上3种方式都有效。当使用url(url)的方式时，包住路径的引号可有可无；
当直接使用url时，包住路径的引号必须保留

指定媒体查询
@import url(example.css) screen and (min-width:800px);
@import url(example.css) screen and (width:800px),(color);
@import url(example.css) screen and (min-device-width:500px) and (max-device-width:1024px);
```

------

## media

```
1. 指定样式表规则用于指定的媒体类型和查询条件
2. IE8及以下只能实现CSS2中的部分，即只可以设置媒体类型
3. 媒体查询可以被用在CSS中的@media和@import规则上，媒体查询让CSS可以更精确作用于不同的媒体类型和同一媒体的不同条件. 
通过这个标签属性，我们可以很方便的在不同的设备下实现丰富的界面.特别是移动设备，将会运用更加的广泛.
语法结构及用法
@media 设备名 only (选取条件) not (选取条件) and(设备选取条件)，设备二{sRules}

<link rel="stylesheet" media="screen and (max-width: 600px)" href="small.css" />

@media screen and (max-width: 600px) {   
  选择器 {   
    属性：属性值；   
  }   

}  


body {
    background-color:lightgreen;
}

@media screen and (max-width: 300px) {
    body {
        background-color:lightblue;
    }
}
```

 

|     属性      |          值          | Min/Max |        描述        |
| :-----------: | :------------------: | :-----: | :----------------: |
| device-height |        length        |   yes   |  设备屏幕的输出高  |
| device-width  |        length        |   yes   | 设备屏幕的输出宽度 |
|    height     |        length        |   yes   |   渲染界面的高度   |
|     width     |        length        |   yes   |   渲染界面的宽度   |
|  orientation  | portrait , landscape |   no    |     横屏或竖屏     |

## @font-face

设置嵌入HTML文档的字体

需要兼容当前的主流浏览器，需同时使用.ttf、.woff、.eot、.svg四种字体格式

```
@font-face {
    font-family: 'diyfont';
    src: url('diyfont.eot'); /* IE9+ */
    src: url('diyfont.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
         url('diyfont.woff') format('woff'), /* chrome、firefox */
         url('diyfont.ttf') format('truetype'), /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/
         url('diyfont.svg#fontname') format('svg'); /* iOS 4.1 */
}
```

 

------

## 常用的CSS度量单位

```
em 
相对长度单位。相对于当前对象内文本的字体尺寸。 
如当前对行内文本的字体尺寸未被人为设置，则相对于浏览器的默认字体尺寸。

em有如下特点： 
1. em的值并不是固定的； 
2. em会继承父级元素的字体大小。 

px 
像素（Pixel）。相对长度单位。 
像素是相对于显示器屏幕分辨率而言的。譬如，WONDOWS的用户所使用的分辨率一般是96像素/英寸。
而MAC的用户所使用的分辨率一般是72像素/英寸。 

em vs px 
em 指字体高，任意浏览器的默认字体高都是16px。所以未经调整的浏览器都符合: 1em=16px。
那么12px=0.75em, 10px=0.625em。
为了简化font-size的换算，需要在css中的body选择器中声明Font-size=62.5%，
这就使em值变为 16px*62.5%=10px, 这样12px=1.2em, 10px=1em, 
也就是说只需要将你的原来的px数值除以10，然后换上em作为单位就行了。 

rem
相对长度单位。相对于根元素(即html元素)font-size计算值的倍数

实例：
<style>
    html,h1 {
        font-size: 12px;
    }
    p {
        font-size: 2rem;
    }
</style>

<body>
    <h1>下面的文字将是html定义的字体大小的2倍：</h1>
    <p>我是html定义的12px的2倍，字体大小为24px</p>
</body>

在使用rem单位的时候，我们为了统一管理和转换，一般会在初始化(reset.css)中设置
<style>
    html{
        /* 16px = 1rem */
        font-size: 16px;
    }
</style>


vw / vh 
相对于视口的宽度。视口被均分为100单位的vw
相对于视口的高度。视口被均分为100单位的vh

<style>
    h1 {
        font-size: 8vw;
    }

    h2 {
        font-size: 8vh;
    }
</style>
```

 

------

## 颜色

```
color:red /* 用单词形式来表示颜色 */
color:rgb();   /* 用rgb的形式来表示颜色 */
color:rgba();  /* 用rgba的形式来表示颜色 a 表示opacity 表示透明度*/
color:#3456787    /* 用十六进制的形式来表示颜色 */
```

 

------

## 浏览器引擎前缀(Vendor Prefix)有哪些？

```
-moz-     /* 火狐等使用Mozilla浏览器引擎的浏览器 */
-webkit-  /* Safari, 谷歌浏览器等使用Webkit引擎的浏览器 */
-o-       /* Opera浏览器(早期) */
-ms-      /* Internet Explorer (不一定) */
```

 

------

## 浏览器引擎前缀(vendor-prefix)的用法

```
当需要使用浏览器引擎前缀(vendor-prefix)时，最好是把带有各种前缀的写法放在前面，
然后把不带前缀的标准的写法放到最后。比如：

/* 简单属性 */
.myClass {
    -webkit-animation-name: fadeIn;
    -moz-animation-name: fadeIn;
    -o-animation-name: fadeIn;
    -ms-animation-name: fadeIn;
    animation-name: fadeIn;  /* 不带前缀的放到最后 */
}


/* 复杂属性 keyframes */
@-webkit-keyframes fadeIn {
    0% { opacity: 0; } 100% { opacity: 0; }
}
@-moz-keyframes fadeIn {
    0% { opacity: 0; } 100% { opacity: 0; }
}
@-o-keyframes fadeIn {
    0% { opacity: 0; } 100% { opacity: 0; }
}
@-ms-keyframes fadeIn {
    0% { opacity: 0; } 100% { opacity: 0; }
}
/* 不带前缀的放到最后 */
@keyframes fadeIn {
    0% { opacity: 0; } 100% { opacity: 0; }
}
```

## CSS常用样式（上）

- 尺寸样式 (width min-width max-width height min-height max-height)
- 字体样式 (font font-style font-variant font-weight font-size.....)
- 文本样式 (text-transform white-space tab-size word-wrap.......)
- 边框样式（border-width border-style border-color border-radius）
- 边距样式（margin padding......）
- 背景样式（background-image background-repeat background......）
- 列表样式（list-style-type list-style-position list-style-image....）
- 鼠标样式（url default auto crosshair pointer move ne-resize......）
- 布局样式（文档流 display float clear overflow overflow-x overflow-y.....）
- 定位样式（position z-index top right bottom left.......）
- 多列样式（column-width column-count column-gap column-rule.....）
- 伸缩盒样式（flex flex-grow flex-shrink flex-basis flex-flow.....）
- [手册](http://css.doyoe.com/)

### 尺寸样式

|    属性    |   描述   |
| :--------: | :------: |
|   width    |   宽度   |
|   height   |   高度   |
| min-width  | 最小宽度 |
| max-width  | 最大宽度 |
| min-height | 最小高度 |
| max-height | 最大高度 |

```
<div class="demo"></div>

.demo{
    width:100px;
    min-width:100px;
    max-width:200px;
    height:100px;
    min-height:100px;
    max-height:200px;
    background-color:red;
}
```

### 字体样式

|     属性     |                          描述                          |
| :----------: | :----------------------------------------------------: |
|  font-style  |                      设置字体样式                      |
| font-variant |                设置字体为小型的大写字母                |
| font-weight  |                      设置字体粗细                      |
|  font-size   |                      设置字体尺寸                      |
| font-family  |                      设置字体类型                      |
|     font     | 字体缩写(style variant weight size/line-height family) |

```
<div class="demo">demo</div>

.demo{
    font-style:normal;  /* 指定文本字体样式为正常的字体 */
    font-style:italic;    /* 指定文本字体样式为斜体。对于没有设计斜体的特殊字体，如果要使用斜体外观将应用oblique */
    font-style:oblique; /* 指定文本字体样式为倾斜的字体。人为的使文字倾斜，而不是去选取字体中的斜体字 */

    font-variant:normal; /* 正常的字体 */
    font-variant:small-caps; /* 小型的大写字母字体 */

    font-weight:normal; /*正常的字体。相当于数字值400*/
    font-weight:bold; /* bold粗体。相当于数字值700*/
    font-weight:bolder; /* bolder：定义比继承值更重的值 */
    font-weight:lighter; /* lighter：定义比继承值更轻的值 */
    font-weight:900;  /* 用数值来表示 100-900*/

    font-size:20px;  /* 设置字体大小 */
    font-family:'微软雅黑'; /* 设置字体类型 */

    font:italic small-caps bolder 20px/30px '微软雅黑';
}
```

### 文本样式

|      属性       |             描述             |
| :-------------: | :--------------------------: |
|   text-align    | 设置文本中内容的水平对齐方式 |
| letter-spacing  |      设置文本之间的间距      |
|   text-indent   |       设置文本首行缩进       |
|   line-height   |           设置行高           |
|   text-shadow   |         设置文本阴影         |
| text-decoration |       设置文本样式缩写       |
| text-transform  |        设置文本大小写        |
|   white-space   |    设置文本空格的处理方式    |

```
<div class="demo">XXXX</div>

text-align:left;  /*内容左对齐*/
text-align:center;    /*内容居中对齐*/
text-align:right;    /*内容右对齐*/
text-align:justify;    /*内容两端对齐，但对于强制打断的行（被打断的这一行）及最后一行（包括仅有一行文本的情况，因为它既是第一行也是最后一行）不做处理*/
text-align:start;    /*内容对齐开始边界*/
text-align:end;        /*内容对齐结束边界*/

letter-spacing:30px;    /*字与字之间的间距*/

text-indent:30px;    /*首行缩进*/

line-height:30px;    /*行高*/

text-shadow:10px 20px 30px red;        /* 水平方向的值 垂直方向的值 阴影模糊的值 模糊的颜色 */

text-decoration:underline solid red; /* 线的位置 线的类型 线的颜色*/

text-transform:none;  /*无转换*/
text-transform:capitalize; /*将每个单词的第一个字母转换成大写*/
text-transform:uppercase; /*将每个单词转换成大写*/
text-transform:lowercase; /*将每个单词转换成小写*/

white-space:normal; /*默认处理方式*/
white-space:pre; /*用等宽字体显示预先格式化的文本，不合并文字间的空白距离，当文字超出边界时不换行。*/
white-space:nowrap; /*强制在同一行内显示所有文本，合并文本间的多余空白，直到文本结束或者遭遇br对象*/
white-space:pre-wrap; /*用等宽字体显示预先格式化的文本，不合并文字间的空白距离，当文字碰到边界时发生换行*/
white-space:pre-line; /*保持文本的换行，不保留文字间的空白距离，当文字碰到边界时发生换行*/
```

### 边框样式

|     属性      |             描述             |
| :-----------: | :--------------------------: |
| border-width  |       设置元素边框宽度       |
| border-style  |       设置元素边框样式       |
| border-color  |       设置元素边框颜色       |
|    border     | 复合属性。设置元素边框的特性 |
| border-radius |     设置元素使用圆角边框     |
|  box-shadow   |         设置元素阴影         |

```
<div class="demo"></div>

.demo{
    width:100px;
    height:100px;

    border-width:20px;  /*设置元素边框宽度*/
    border-style:solid;    /*设置元素边框样式*/
    border-color:red;    /*设置元素边框颜色*/
    border:1px solid red; /*复合属性。设置元素边框的特性*/
    border-radius:20px;    /*设置元素使用圆角边框*/
    box-shadow:10px 20px 30px 40px green;    /*设置元素阴影*/
}
```

### 举例1：利用 border 属性画一个三角形（小技巧）

完整代码如下：

```
div{
    width: 0;
    height: 0;
    border: 50px solid transparent;
    border-top-color: red;
    border-bottom: none;
}

```

步骤如下：

（1）当我们设置盒子的width和height为0时，此时效果如下：

![img](http://img.smyhvae.com/20170728_1639.png)

（2）然后将border的底部取消：

![img](http://img.smyhvae.com/20170728_1645.png)

（3）最后设置border的左边和右边为白色或者**透明**：

![img](http://img.smyhvae.com/20170728_1649.png)

这样，一个三角形就画好了。

### 举例2：利用 border 属性画一个三角形（更推荐的技巧）

上面的例子1中，画出来的是直角三角形，可如果我想画等边三角形，要怎么做呢？

完整代码如下：（用 css 画等边三角形）

```
.div1{
    width: 0;
    height: 0;
    border-top: 30px solid red;
    /* 通过改变 border-left 和 border-right 中的像素值，来改变三角形的形状 */
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
}

```

效果如下：

![img](http://img.smyhvae.com/20191004_1830.png)

另外，我们在上方代码的基础之上，再加一个 `border-radus: 20px;` 就能画出一个扇形。

### 边距样式

|  属性   |  描述  |
| :-----: | :----: |
| margin  | 外边距 |
| padding | 内边距 |

```
<div class="demo"></div>

.demo{
    width:100px;
    height:100px;

    background-color:red;

    margin:10px;
    margin:10px 20px;
    margin:10px 20px 30px;
    margin:10px 20px 30px 40px;

    padding:10px;
    padding:10px 20px;
    padding:10px 20px 30px;
    padding:10px 20px 30px 40px;
}
```

### 背景样式

|        属性         |              描述              |
| :-----------------: | :----------------------------: |
|  background-color   |       设置元素的背景颜色       |
|  background-image   |       设置元素的背景图像       |
|     background      |  复合属性。设置元素的背景特性  |
|  background-repeat  | 设置元素的背景图像如何铺排填充 |
| background-position |     设置元素的背景图像位置     |
|   background-size   |  设置元素的背景图像的尺寸大小  |

```
<div class="demo"></div>

.demo{
    width:100px;
    height:100px;

    background-color:red;        /*设置元素的背景颜色*/

    background-image:url('pic.png');    /*设置元素的背景图像*/

    background-repeat:repeat-x;        /*设置元素的背景图像如何铺排填充*/

    background-position:right top;    /*设置元素的背景图像位置*/

    background:url(test1.jpg) no-repeat  10px 20px/110px 130px      #aaa;
    /*image repeat  position size  color */
}
```

### 列表样式

|        属性         |              描述              |
| :-----------------: | :----------------------------: |
|   list-style-type   |   设置列表项所使用的预设标记   |
| list-style-position | 设置列表项标记如何根据文本排列 |

```
<ul class="demo">
    <li>demo</li>
    <li>demo</li>
</ul>


.demo{
    list-style-type:circle;    /*空心圆*/
    list-style-type:disc;    /*实心圆*/
    list-style-type:square;    /*实心方块*/
    list-style-type:none;    /*不使用项目符号*/

    list-style-position:outside;  /*列表项目标记放置在文本以外，且环绕文本不根据标记对齐*/
    list-style-position:inside;      /*列表项目标记放置在文本以内，且环绕文本根据标记对齐*/
}
```

### 鼠标样式

```
<p>请把鼠标移动到单词上，可以看到鼠标指针发生变化：</p>
<span style="cursor:auto">Auto - 默认。浏览器设置的光标。</span><br />
<span style="cursor:crosshair">Crosshair - 光标呈现为十字线。</span><br />
<span style="cursor:default">Default -  默认光标（通常是一个箭头）</span><br />
<span style="cursor:pointer">Pointer - 光标呈现为指示链接的指针（一只手）</span><br />
<span style="cursor:move">Move - 此光标指示某对象可被移动</span><br />
<span style="cursor:e-resize">e-resize - 此光标指示矩形框的边缘可被向右（东）移动</span><br />
<span style="cursor:ne-resize">ne-resize - 此光标指示矩形框的边缘可被向上及向右移动（北/东）</span><br />
<span style="cursor:nw-resize">nw-resize - 此光标指示矩形框的边缘可被向上及向左移动（北/西）</span><br />
<span style="cursor:n-resize">n-resize - 此光标指示矩形框的边缘可被向上（北）移动</span><br />
<span style="cursor:se-resize">se-resize - 此光标指示矩形框的边缘可被向下及向右移动（南/东）</span><br />
<span style="cursor:sw-resize">sw-resize - 此光标指示矩形框的边缘可被向下及向左移动（南/西）</span><br />
<span style="cursor:s-resize">s-resize - 此光标指示矩形框的边缘可被向下移动（南）</span><br />
<span style="cursor:w-resize">w-resize - 此光标指示矩形框的边缘可被向左移动（西）</span><br />
<span style="cursor:text">text - 此光标指示文本</span><br />
<span style="cursor:wait">wait - 此光标指示程序正忙（通常是一只表或沙漏）</span><br />
<span style="cursor:help">help - 此光标指示可用的帮助（通常是一个问号或一个气球）</span><br />
<span  style="cursor: url('GerardTalbot.cur'), default;">url - 需使用的自定义光标的 URL</span><br />
```

### 布局样式

|   属性   |                 描述                 |
| :------: | :----------------------------------: |
| display  |            元素的显示模式            |
|  float   |               元素浮动               |
|  clear   |               清除浮动               |
| overflow | 复合属性。设置元素处理溢出内容的方式 |

1. 文档流是浏览器解析网页的一个重要概念,对于一个XHTML网页,body元素下的任意元素
2. 根据其前后顺序，组成了一个上下关系,这便是文档流
3. 浏览器根据这些元素的顺序去显示它们在网页中的位置。文档流是浏览器的默认显示规则

```
<div class="demo"></div>


.demo{
    width:100px;
    height:100px;

    background-color:red;

    display:inline-block;         /*行间块状元素*/
    display:inline;            /*行间元素*/
    display: block;            /*块状元素*/
    display: none;            /*隐藏元素*/
    display: flex;            /*弹性元素*/
    display: inline-flex;     /*行间弹性元素*/

    float:left;        /*左浮动*/
    float:right;    /*右浮动*/

    clear:left;        /*左清除*/
    clear:right;    /*右清除*/
    clear:both;        /*两边清除*/
    clear:none;        /*不清除*/


    overflow:visible;        /*对溢出内容不做处理，内容可能会超出容器。*/
    overflow:hidden;        /*隐藏溢出容器的内容且不出现滚动条。*/
    overflow:scroll;        /*隐藏溢出容器的内容，溢出的内容将以卷动滚动条的方式呈现。*/
    overflow:auto;            /*当内容没有溢出容器时不出现滚动条，当内容溢出容器时出现滚动条，按需出现滚动条*/
}
```



 

## 文本主要内容

- 标准文档流
  - 标准文档流的特性
  - 行内元素和块级元素
  - 行内元素和块级元素的相互转换
- 浮动的性质
- 浮动的清除
- 浏览器的兼容性问题
- 浮动中margin相关
- 关于margin的IE6兼容问题

## 标准文档流

宏观地讲，我们的web页面和photoshop等设计软件有本质的区别：web页面的制作，是个“流”，必须从上而下，像“织毛衣”。而设计软件，想往哪里画个东西，都能画。

### 标准文档流的特性

**（1）空白折叠现象：**

无论多少个空格、换行、tab，都会折叠为一个空格。

比如，如果我们想让img标签之间没有空隙，必须紧密连接：

```
<img src="images/0.jpg" /><img src="images/1.jpg" /><img src="images/2.jpg" />
```

**（2）高矮不齐，底边对齐：**

举例如下：

![img](http://img.smyhvae.com/20170729_1508_2.png)

**（3）自动换行，一行写不满，换行写。**

### 行内元素和块级元素

学习的初期，我们就要知道，标准文档流等级森严。标签分为两种等级：

- 行内元素
- 块级元素

我们可以举一个例子，看看块级元素和行内元素的区别：

![img](http://img.smyhvae.com/20170729_1529_2.png)

上图中可以看到，`h1`标签是块级元素，占据了整行，`span`标签是行内元素，只占据内容这一部分。

现在我们尝试给两个标签设置宽高。效果如下：

![img](http://img.smyhvae.com/20170729_1532_2.png)

上图中，我们尝试给两个标签设置宽高，但发现，宽高属性只对块级元素`h1`生效。于是我们可以做出如下总结。

**行内元素和块级元素的区别：**（非常重要）

行内元素：

- 与其他行内元素并排；
- 不能设置宽、高。默认的宽度，就是文字的宽度。

块级元素：

- 霸占一行，不能与其他任何元素并列；
- 能接受宽、高。如果不设置宽度，那么宽度将默认变为父亲的100%。

 

**行内元素和块级元素的分类：**

在以前的HTML知识中，我们已经将标签分过类，当时分为了：文本级、容器级。

从HTML的角度来讲，标签分为：

- 文本级标签：p、span、a、b、i、u、em。
- 容器级标签：div、h系列、li、dt、dd。

> PS：为甚么说p是文本级标签呢？因为p里面只能放文字&图片&表单元素，p里面不能放h和ul，p里面也不能放p。

现在，从CSS的角度讲，CSS的分类和上面的很像，就p不一样：

- 行内元素：除了p之外，所有的文本级标签，都是行内元素。p是个文本级，但是是个块级元素。
- 块级元素：所有的容器级标签都是块级元素，还有p标签。

我们把上面的分类画一个图，即可一目了然：

![img](http://img.smyhvae.com/20170729_1545.png)

 

### 行内元素和块级元素的相互转换

我们可以通过`display`属性将块级元素和行内元素进行相互转换。display即“显示模式”。

#### 块级元素可以转换为行内元素：

一旦，给一个块级元素（比如div）设置：

```
display: inline;
```

那么，这个标签将立即变为行内元素，此时它和一个span无异。inline就是“行内”。也就是说：

- 此时这个div不能设置宽度、高度；
- 此时这个div可以和别人并排了。

举例如下：

![img](http://img.smyhvae.com/20170729_1629.png)

#### 行内元素转换为块级元素：

同样的道理，一旦给一个行内元素（比如span）设置：

```
display: block;
```

那么，这个标签将立即变为块级元素，此时它和一个div无异。block”是“块”的意思。也就是说：

- 此时这个span能够设置宽度、高度
- 此时这个span必须霸占一行了，别人无法和他并排
- 如果不设置宽度，将撑满父亲

举例如下：

![img](http://img.smyhvae.com/20170729_1638.png)

标准流里面的限制非常多，导致很多页面效果无法实现。如果我们现在就要并排、并且就要设置宽高，那该怎么办呢？办法是：移民！**脱离标准流**！

css中一共有三种手段，使一个元素脱离标准文档流：

- （1）浮动
- （2）绝对定位
- （3）固定定位

这便引出我们今天要讲的内容：浮动。

## 浮动的性质

> 浮动是css里面布局用的最多的属性。

现在有两个div，分别设置宽高。我们知道，它们的效果如下：

![img](http://img.smyhvae.com/20170729_1722.png)

此时，如果给这两个div增加一个浮动属性，比如`float: left;`，效果如下：

![img](http://img.smyhvae.com/20170729_1723.png)

这就达到了浮动的效果。此时，两个元素并排了，并且两个元素都能够设置宽度、高度了（这在上一段的标准流中，不能实现）。

浮动想学好，一定要知道三个性质。接下来讲一讲。

### 性质1：浮动的元素脱标

脱标即脱离标准流。我们来看几个例子。

证明1：

![img](http://img.smyhvae.com/20170729_2028.png)

上图中，在默认情况下，两个div标签是上下进行排列的。现在由于float属性让上图中的第一个`<div>`标签出现了浮动，于是这个标签在另外一个层面上进行排列。而第二个`<div>`还在自己的层面上遵从标准流进行排列。

证明2：

![img](http://img.smyhvae.com/20180111_2320.png)

上图中，span标签在标准流中，是不能设置宽高的（因为是行内元素）。但是，一旦设置为浮动之后，即使不转成块级元素，也能够设置宽高了。

所以能够证明一件事：**一旦一个元素浮动了，那么，将能够并排了，并且能够设置宽高了。无论它原来是个div还是个span。**所有标签，浮动之后，已经不区分行内、块级了。

### 性质2：浮动的元素互相贴靠

我们来看一个例子就明白了。

我们给三个div均设置了`float: left;`属性之后，然后设置宽高。当改变浏览器窗口大小时，可以看到div的贴靠效果：

![img](http://img.smyhvae.com/20170730_1910.gif)

上图显示，3号如果有足够空间，那么就会靠着2号。如果没有足够的空间，那么会靠着1号大哥。 如果没有足够的空间靠着1号大哥，3号自己去贴左墙。

不过3号自己去贴墙的时候，注意：

![img](http://img.smyhvae.com/20170730_1928.gif)

上图显示，3号贴左墙的时候，并不会往1号里面挤。

同样，float还有一个属性值是`right`，这个和属性值`left`是对称的。

### 性质3：浮动的元素有“字围”效果

来看一张图就明白了。我们让div浮动，p不浮动。

![img](http://img.smyhvae.com/20170730_2005.png)

上图中，我们发现：**div挡住了p，但不会挡住p中的文字**，形成“字围”效果。

总结：**标准流中的文字不会被浮动的盒子遮挡住**。（文字就像水一样）

关于浮动我们要强调一点，浮动这个东西，为避免混乱，我们在初期一定要遵循一个原则：**永远不是一个东西单独浮动，浮动都是一起浮动，要浮动，大家都浮动。**

### 性质4：收缩

收缩：一个浮动的元素，如果没有设置width，那么将自动收缩为内容的宽度（这点非常像行内元素）。

举例如下：

![img](http://img.smyhvae.com/20170801_1720.png)

上图中，div本身是块级元素，如果不设置width，它会单独霸占整行；但是，设置div浮动后，它会收缩

### 浮动的补充（做网站时注意）

![img](http://img.smyhvae.com/20170731_2248.png)

上图所示，将para1和para2设置为浮动，它们是div的儿子。此时para1+para2的宽度小于div的宽度。效果如上图所示。可如果设置para1+para2的宽度大于div的宽度，我们会发现，para2掉下来了：

![img](http://img.smyhvae.com/20170731_2252_2.png)

 

### 布置一个作业

布置一个作业，要求实现下面的效果：

![img](http://img.smyhvae.com/20170801_0858.png)

为实现上方效果，代码如下：

```
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
    <title>Document</title>
    <style type="text/css">
        *{
            margin: 0;
            padding: 0;
        }
        .header{
            width: 970px;
            height: 103px;
            /*居中。这个语句的意思是：居中：*/
            margin: 0 auto;
        }
        .header .logo{
            float: left;
            width: 277px;
            height: 103px;
            background-color: red;
        }
        .header .language{
            float: right;
            width: 137px;
            height: 49px;
            background-color: green;
            margin-bottom: 8px;
        }
        .header .nav{
            float: right;
            width: 679px;
            height: 46px;
            background-color: green;
        }

        .content{
            width: 970px;
            height: 435px;
            /*居中，这个语句今天没讲，你照抄，就是居中：*/
            margin: 0 auto;
            margin-top: 10px;
        }
        .content .banner{
            float: left;
            width: 310px;
            height: 435px;
            background-color: gold;
            margin-right: 10px;
        }
        .content .rightPart{
            float: left;
            width: 650px;
            height: 435px;
        }
        .content .rightPart .main{
            width: 650px;
            height: 400px;
            margin-bottom: 10px;
        }
        .content .rightPart .links{
            width: 650px;
            height: 25px;
            background-color: blue;
        }
        .content .rightPart .main .news{
            float: left;
            width: 450px;
            height: 400px;
        }
        .content .rightPart .main .hotpic{
            float: left;
            width: 190px;
            height: 400px;
            background-color: purple;
            margin-left: 10px;
        }
        .content .rightPart .main .news .news1{
            width: 450px;
            height: 240px;
            background-color: skyblue;
            margin-bottom: 10px;
        }
        .content .rightPart .main .news .news2{
            width: 450px;
            height: 110px;
            background-color: skyblue;
            margin-bottom: 10px;
        }
        .content .rightPart .main .news .news3{
            width: 450px;
            height: 30px;
            background-color: skyblue;
        }
        .footer{
            width: 970px;
            height: 35px;
            background-color: pink;
            /*没学，就是居中：*/
            margin: 0 auto;
            margin-top: 10px;
        }
    </style>
</head>
<body>
    <!-- 头部 -->
    <div class="header">
        <div class="logo">logo</div>
        <div class="language">语言选择</div>
        <div class="nav">导航条</div>
    </div>

    <!-- 主要内容 -->
    <div class="content">
        <div class="banner">大广告</div>
        <div class="rightPart">
            <div class="main">
                <div class="news">
                    <div class="news1"></div>
                    <div class="news2"></div>
                    <div class="news3"></div>
                </div>
                <div class="hotpic"></div>
            </div>
            <div class="links"></div>
        </div>
    </div>

    <!-- 页尾 -->
    <div class="footer"></div>
</body>
</html>
```

其实，这个页面的布局是下面这个网站：

![img](http://img.smyhvae.com/20170801_0900.png)

## 浮动的清除

> 这里所说的清除浮动，指的是清除浮动与浮动之间的影响。

### 前言

通过上面这个例子，我们发现，此例中的网页就是通过浮动实现并排的。

比如说一个网页有header、content、footer这三部分。就拿content部分来举例，如果设置content的儿子为浮动，但是，这个儿子又是一个全新的标准流，于是儿子的儿子仍然在标准流里。

从学习浮动的第一天起，我们就要明白，浮动有开始，就要有清除。我们先来做个实验。

下面这个例子，有两个块级元素div，div没有任何属性，每个div里有li，效果如下：

![img](http://img.smyhvae.com/20170801_2122.png)

上面这个例子很简单。可如果我们给里面的`<li>`标签加浮动。效果却成了下面这个样子：

代码如下：

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <style type="text/css">
        *{

        }
        li{
            float: left;
            width: 100px;
            height: 20px;
            background-color: pink;


        }
    </style>
</head>
<body>
    <div class="box1">
        <ul>
            <li>生命壹号1</li>
            <li>生命壹号2</li>
            <li>生命壹号3</li>
            <li>生命壹号4</li>
        </ul>
    </div>
    <div class="box2">
        <ul>
            <li>许嵩1</li>
            <li>许嵩2</li>
            <li>许嵩3</li>
            <li>许嵩4</li>
        </ul>
    </div>
</body>
</html>
```

效果如下：

![img](http://img.smyhvae.com/20170801_2137.png)

上图中，我们发现：第二组中的第1个li，去贴靠第一组中的最后一个li了（我们本以为这些li会分成两排）。

这便引出我们要讲的：清除浮动的第一种方式。 那该怎么解决呢？

### 方法1：给浮动元素的祖先元素加高度

 

造成前言中这个现象的根本原因是：li的**父亲div没有设置高度**，导致这两个div的高度均为0px（我们可以通过网页的审查元素进行查看）。div的高度为零，导致不能给自己浮动的孩子，撑起一个容器。

撑不起一个容器，导致自己的孩子没办法在自己的内部进行正确的浮动。

好，现在就算给这个div设置高度，可如果div自己的高度小于孩子的高度，也会出现不正常的现象：

![img](http://img.smyhvae.com/20170801_2152.png)

给div设置一个正确的合适的高度（至少保证高度大于儿子的高度），就可以看到正确的现象：

![img](http://img.smyhvae.com/20170801_2153.png)

**总结：**

**如果一个元素要浮动，那么它的祖先元素一定要有高度。**

**有高度的盒子，才能关住浮动**。（记住这句过来人的经验之语）

只要浮动在一个有高度的盒子中，那么这个浮动就不会影响后面的浮动元素。所以就是清除浮动带来的影响了。

![img](http://img.smyhvae.com/20170801_2200.png)

![img](http://img.smyhvae.com/20170801_2201.png)

### 方法2：clear:both;

网页制作中，高度height其实很少出现。为什么？因为能被内容撑高！也就是说，刚刚我们讲解的方法1，工作中用得很少。

那么，能不能不写height，也把浮动清除了呢？也让浮动之间，互不影响呢？

这个时候，我们可以使用`clear:both;`这个属性。如下：

![img](http://img.smyhvae.com/20170801_2233.png)

```
clear:both;
```

clear就是清除，both指的是左浮动、右浮动都要清除。`clear:both`的意思就是：**不允许左侧和右侧有浮动对象。**

这种方法有一个非常大的、致命的问题，**它所在的标签，margin属性失效了**。读者可以试试看。

margin失效的本质原因是：上图中的box1和box2，高度为零。

 

### 方法3：隔墙法

上面这个例子中，为了防止第二个div贴靠到第二个div，我们可以在这两个div中间用一个新的div隔开，然后给这个新的div设置`clear: both;`属性；同时，既然这个新的div无法设置margin属性，我们可以给它设置height，以达到margin的效果（曲线救国）。这便是隔墙法。

我们看看例子效果就知道了：

![img](http://img.smyhvae.com/20170802_1109.png)

上图这个例子就是隔墙法。

**内墙法：**

近些年，有演化出了“内墙法”：

![img](http://img.smyhvae.com/20170802_1123.png)

上面这个图非常重要，当作内墙法的公式，先记下来。

为了讲内墙法，我们先记住一句重要的话：**一个父亲是不能被浮动的儿子撑出高度的**。举例如下：

（1）我们在一个div里放一个有宽高的p，效果如下：（很简单）

![img](http://img.smyhvae.com/20170802_1716.png)

（2）可如果在此基础之上，给p设置浮动，却发现父亲div没有高度了：

![img](http://img.smyhvae.com/20170802_1730.png)

（3）此时，我么可以在div的里面放一个div（作为内墙），就可以让父亲div恢复高度：

![img](http://img.smyhvae.com/20170802_1812.png)

于是，我们采用内墙法解决前言中的问题：

![img](http://img.smyhvae.com/20170802_1834.png)

与外墙法相比，内墙法的优势（本质区别）在于：内墙法可以给它所在的家撑出宽度（让box1有高）。即：box1的高度可以自适应内容。

而外墙法，虽然一道墙可以把两个div隔开，但是这两个div没有高，也就是说，无法wrap_content。

### 清除浮动方法4：overflow:hidden;

我们可以使用如下属性：

```
overflow:hidden;
```

overflow即“溢出”， hidden即“隐藏”。这个属性的意思是“溢出隐藏”。顾名思义：所有溢出边框的内容，都要隐藏掉。如下：

![img](http://img.smyhvae.com/20170804_1449.png)

上图显示，`overflow:hidden;`的本意是清除溢出到盒子外面的文字。但是，前端开发工程师发现了，它能做偏方。如下：

一个父亲不能被自己浮动的儿子，撑出高度。但是，只要给父亲加上`overflow:hidden`; 那么，父亲就能被儿子撑出高了。这是一个偏方。

举个例子：

![img](http://img.smyhvae.com/20170804_1920.png)

那么对于前言中的例子，我们同样可以使用这一属性：

![img](http://img.smyhvae.com/20170804_1934.png)

这一招，实际上生成了BFC。关于BFC的解释，详见本项目的另外一篇文章《前端面试/CSS盒模型及BFC.md》。

## 浮动清除的总结

> 我们在上一段讲了四种清除浮动的方法，本段来进行一个总结。

浮动的元素，只能被有高度的盒子关住。 也就是说，如果盒子内部有浮动，这个盒子有高，那么妥妥的，浮动不会互相影响。

### 1、加高法

工作上，我们绝对不会给所有的盒子加高度，这是因为麻烦，并且不能适应页面的快速变化。

```
<div>     //设置height
    <p></p>
    <p></p>
    <p></p>
</div>

<div>    //设置height
    <p></p>
    <p></p>
    <p></p>
</div>
```

### 2、`clear:both;`法

最简单的清除浮动的方法，就是给盒子增加clear:both；表示自己的内部元素，不受其他盒子的影响。

```
<div>
    <p></p>
    <p></p>
    <p></p>
</div>

<div>   //clear:both;
    <p></p>
    <p></p>
    <p></p>
</div>
```

浮动确实被清除了，不会互相影响了。但是有一个问题，就是margin失效。两个div之间，没有任何的间隙了。

 

### 3、隔墙法

在两部分浮动元素中间，建一个墙。隔开两部分浮动，让后面的浮动元素，不去追前面的浮动元素。 墙用自己的身体当做了间隙。

```
<div>
    <p></p>
    <p></p>
    <p></p>
</div>

<div class="cl h10"></div>

<div>
    <p></p>
    <p></p>
    <p></p>
</div>
```

我们发现，隔墙法好用，但是第一个div，还是没有高度。如果我们现在想让第一个div，自动根据自己的儿子撑出高度，我们就要想一些“小伎俩”。

内墙法：

```
<div>
    <p></p>
    <p></p>
    <p></p>
    <div class="cl h10"></div>
</div>

<div>
    <p></p>
    <p></p>
    <p></p>
</div>
```

内墙法的优点就是，不仅仅能够让后部分的p不去追前部分的p了，并且能把第一个div撑出高度。这样，这个div的背景、边框就能够根据p的高度来撑开了。

### 4、`overflow:hidden;`

这个属性的本意，就是将所有溢出盒子的内容，隐藏掉。但是，我们发现这个东西能够用于浮动的清除。 我们知道，一个父亲，不能被自己浮动的儿子撑出高度，但是，如果这个父亲加上了overflow:hidden；那么这个父亲就能够被浮动的儿子撑出高度了。这个现象，不能解释，就是浏览器的偏方。 并且,overflow:hidden;能够让margin生效。

**清除浮动的例子：**

我们现在举个例子，要求实现下图中无序列表部分的效果：

![img](http://img.smyhvae.com/20170804_2321.png)

对比一下我们讲的四种清除浮动的方法。如果用外墙法，ul中不能插入div标签，因为ul中只能插入li，如果插入li的墙，会浪费语义。如果用内墙法，不美观。综合对比，还是用第四种方法来实现吧，这会让标签显得极其干净整洁：

![img](http://img.smyhvae.com/20170805_1615.png)

上方代码中，如果没有加`overflow:hidden;`，那么第二行的li会紧跟着第一行li的后面。

## 浏览器的兼容性问题

 

> 讲一下上述知识点涉及到的浏览器兼容问题。

### 兼容性1（微型盒子）

**兼容性的第一条**：IE6不支持小于12px的盒子，任何小于12px的盒子，在IE6中看都大。即：IE 6不支持微型盒子。

举个例子。我们设置一个height为 5px 、宽度为 200px的盒子，看下在IE 8和 IE 6中的显示效果：

![img](http://img.smyhvae.com/20170805_1726.png)

解决办法很简单，就是将盒子的字号大小，设置为**小于盒子的高**，比如，如果盒子的高为5px，那就把font-size设置为0px(0px < 5px)。如下：

```
height: 5px;
_font-size: 0px;
```

我们现在介绍一下浏览器hack。hack就是“黑客”，就是使用浏览器提供的后门，针对某一种浏览器做兼容。

IE6留了一个**后门**：只要给css属性之前，加上**下划线**，这个属性就是IE6的专有属性。

比如说，我们给背景颜色这个属性加上下划线，就变成了`_background-color: green;`。效果如下：

![img](http://img.smyhvae.com/20170805_2026.png)

 

于是乎，为了解决微型盒子（即height小于12px）的问题，正确写法：（注意不要忘记下划线）

```
height: 10px;
_font-size:0;
```

 

### 兼容性2

**兼容性的第二条：**IE6不支持用`overflow:hidden;`来清除浮动。

解决办法，以毒攻毒。追加一条：

```
_zoom:1;
```

完整写法：

```
overflow: hidden;
_zoom:1;
```

实际上，`_zoom:1;`能够触发浏览器hasLayout机制。这个机制，不要深究了，因为只有IE6有。我们只需要让IE6好用，具体的实现机制，可以自行查阅。

需要强调的是，`overflow:hidden;`的本意，就是让溢出盒子的border的内容隐藏，这个功能是IE6兼容的。不兼容的是`overflow:hidden;`清除浮动的时候。

**总结：**

我们刚才学习的两个IE6的兼容问题，都是通过多写一条hack来解决的，这个我们称为伴生属性，即两个属性，要写一起写。

属性1：

```
height:6px;
_font-size:0;
```

属性2：

```
overflow:hidden;
_zoom:1;
```

## margin相关

> 我们来讲一下浮动中和margin相关的知识。

### margin塌陷/margin重叠

 

**标准文档流中，竖直方向的margin不叠加，取**较大的值**作为margin(水平方向的margin是可以叠加的，即水平方向没有塌陷现象)。如下图所示：

![img](http://img.smyhvae.com/20170805_0904.png)

 

如果不在标准流，比如盒子都浮动了，那么两个盒子之间是没有塌陷现象的。

### 盒子居中`margin:0 auto;`

margin的值可以为auto，表示自动。当left、right两个方向都是auto的时候，盒子居中了：

```
margin-left: auto;
margin-right: auto;
```

盒子居中的简写为：

```
margin:0 auto;
```

对上方代码的理解：上下的margin为0，左右的margin都尽可能的大，于是就居中了。

注意：

- （1）只有标准流的盒子，才能使用`margin:0 auto;`居中。也就是说，当一个盒子浮动了、绝对定位了、固定定位了，都不能使用margin:0 auto;
- （2）使用`margin:0 auto;`的盒子，必须有width，有明确的width。（可以这样理解，如果没有明确的width，那么它的width就是霸占整行，没有意义）
- （3）`margin:0 auto;`是让盒子居中，不是让盒子里的文本居中。文本的居中，要使用`text-align:center;`

对上面的第三条总结一下：（非常重要）

```
margin:0 auto;    //让这个div自己在大容器中的水平方向上居中。
text-align: center;  //让这个div内部的文本居中。
```

顺便普及一下知识，text-align还有：

```
text-align:left;     //没啥用，因为默认居左
text-align:right;    //文本居右
```

 

### 善于使用父亲的padding，而不是儿子的margin

我们来看一个奇怪的现象。现在有下面这样一个结构：（div中放一个p）

```
    <div>
        <p></p>
    </div>
```

上面的结构中，我们尝试通过给儿子`p`一个`margin-top:50px;`的属性，让其与父亲保持50px的上边距。结果却看到了下面的奇怪的现象：

![img](http://img.smyhvae.com/20170806_1537.png)

此时我们给父亲div加一个border属性，就正常了：

![img](http://img.smyhvae.com/20170806_1544.png)

 

如果父亲没有border，那么儿子的margin实际上踹的是“流”，踹的是这“行”。所以，父亲整体也掉下来了。

**margin这个属性，本质上描述的是兄弟和兄弟之间的距离； 最好不要用这个marign表达父子之间的距离。**

所以，如果要表达父子之间的距离，我们一定要善于使用父亲的padding，而不是儿子的margin。

## 关于margin的IE6兼容问题

### IE6的双倍margin的bug：

当出现连续浮动的元素，携带与浮动方向相同的margin时，队首的元素，会双倍marign。

```
    <ul>
        <li></li>
        <li></li>
        <li></li>
    </ul>
```

![img](http://img.smyhvae.com/20170806_1558.png)

 

解决方案：

（1）使浮动的方向和margin的方向，相反。

所以，你就会发现，我们特别喜欢，浮动的方向和margin的方向相反。并且，前端开发工程师，把这个当做习惯了。

```
    float: left;
    margin-right: 40px;
```

 

（2）使用hack：（没必要，别惯着这个IE6）

单独给队首的元素，写一个一半的margin：

```
<li class="no1"></li>
ul li.no1{
    _margin-left:20px;
}
```

PS：双倍margin的问题，面试经常问哦。

 

### IE6的3px bug

![img](http://img.smyhvae.com/20170806_1616.png)

解决办法：不用管，因为根本就不允许用儿子踹父亲（即描述父子之间的距离，请用padding，而不是margin）。所以，如果你出现了3px bug，说明你的代码不标准。

IE6，千万不要跟他死坑、较劲，它不配。 格调要高，我们讲IE6的兼容性问题，就是为了增加面试的成功率，不是为了成为IE6的专家。

 

## Fireworks和others

### Fireworks

fireworks是Adobe公司的一个设计软件。功能非常多，我们以后用啥讲啥。Fireworks的默认文件格式是png。

标尺的快捷键：Ctrl + Alt+ R

### others

 

首行缩进两个汉字：

```
text-indent: 2em;
```

上方属性中，单位比较奇怪，叫做em，em就是汉字的一个宽度。indent的意思是缩进。

### 清除浮动

一、浮动产生原因

- 简单地说浮动是因为使用了float:left或float:right或两者都有而产生的浮动，导致样式缺失或者不正确显示等问题；

二、浮动产生负作用

- 1、背景不能显示 由于浮动产生，如果对父级设置了（CSS background背景）CSS背景颜色或CSS背景图片，而父级不能被撑开，所以导致CSS背景不能显示。

- 2、边框不能撑开 如果父级设置了CSS边框属性（css border），由于子级里使用了float属性，产生浮动，父级不能被撑开，导致边框不能随内容而被撑开。

- 3、margin padding设置值不能正确显示 由于浮动导致父级子级之间设置了css padding、css margin属性的值不能正确表达。特别是上下边的padding和margin不能正确显示。

三、css解决浮动，清除浮动方法

```
首先列举一个小案例：
<style>
    .box{margin: 50px auto;border:1px solid #ccc;background: #fc9;color:#fff;}
    .red{width: 80px;height: 100px;background: red;float:left;}
    .sienna{width: 80px;height: 100px;background: sienna;float:left;}
    .blue{width: 80px;height: 100px;background: blue;float:left;}
</style>
<body>
<div class="box">
    <div class="red">1</div>
    <div class="sienna">2</div>
    <div class="blue">3</div>
</div>
</body>

子元素都设置了float属性，父元素div高度不能撑开，样式margin属性显示有问题；


方法一：添加新的元素 、应用 clear：both；
在浮动的盒子之下再放一个标签，在这个标签中使用clear:both，来清除浮动对页面的影响.
注意：一般情况下不会使用这一种方式来清除浮动。因为这种清除浮动的方式会增加页面的标签，造成结构的混乱.

.clear{clear: both;}
<div class="box">
    <div class="red">1</div>
    <div class="sienna">2</div>
    <div class="blue">3</div>
    <div class="clear"></div>
</div>

方法二： 使用伪元素来清除浮动(:after,注意：作用于浮动元素的父亲）
主要推荐使用这种方法清除浮动

.clearfix:after{
    content:"";/*设置内容为空*/
    height:0;/*高度为0*/
    line-height:0;/*行高为0*/
    display:block;/*将文本转为块级元素*/
    visibility:hidden;/*将元素隐藏*/
    clear:both;/*清除浮动*/
}
.clearfix{
    zoom:1;/*为了兼容IE*/
}


<body>
    <div class="box clearfix">
        <div class="red">1</div>
        <div class="sienna">2</div>
        <div class="blue">3</div>
    </div>
</body>
```

### 定位样式



 

CSS的定位属性有三种，分别是绝对定位、相对定位、固定定位。

```
    position: absolute;  <!-- 绝对定位 -->

    position: relative;  <!-- 相对定位 -->

    position: fixed;     <!-- 固定定位 -->

```

下面逐一介绍。

## 相对定位

**相对定位**：让元素相对于自己原来的位置，进行位置调整（可用于盒子的位置微调）。

我们之前学习的背景属性中，是通过如下格式：

```
    background-position:向右偏移量 向下偏移量;
```

但这回的定位属性，是通过如下格式：

```
    position: relative;
    left: 50px;
    top: 50px;
```

相对定位的举例：

```
<!doctype html>
<html lang="en">
 <head>
  <meta charset="UTF-8">
  <meta name="Generator" content="EditPlus®">
  <meta name="Author" content="">
  <meta name="Keywords" content="">
  <meta name="Description" content="">
  <title>Document</title>

    <style type="text/css">

        body{
            margin: 0px;
        }

        .div1{
            width: 200px;
            height: 200px;
            border: 1px solid red;
        }

        .div2{
            position: relative;/*相对定位：相对于自己原来的位置*/
            left: 50px;/*横坐标：正值表示向右偏移，负值表示向左偏移*/
            top: 50px;/*纵坐标：正值表示向下偏移，负值表示向上偏移*/

            width: 200px;
            height: 200px;
            border: 1px solid red;
        }
    </style>
 </head>

 <body>

    <div class="div1">有生之年</div>
    <div class="div2">狭路相逢</div>

 </body>

</html>
```

效果：

![img](http://img.smyhvae.com/2015-10-03-css-28.png)

### 相对定位不脱标

**相对定位**：不脱标，老家留坑，**别人不会把它的位置挤走**。

也就是说，相对定位的真实位置还在老家，只不过影子出去了，可以到处飘。

### 相对定位的用途

如果想做“压盖”效果（把一个div放到另一个div之上），我们一般**不用**相对定位来做。相对定位，就两个作用：

- （1）微调元素
- （2）做绝对定位的参考，子绝父相

### 相对定位的定位值

- left：盒子右移
- right：盒子左移
- top：盒子下移
- bottom：盒子上移

PS：负数表示相反的方向。

↘：

```
    position: relative;
    left: 40px;
    top: 10px;
```

↙：

```
    position: relative;
    right: 100px;
    top: 100px;
```

↖：

```
    position: relative;
    right: 100px;
    bottom: 100px;
```

↗：

```
    position: relative;
    left: 200px;
    bottom: 200px;

```

![img](http://img.smyhvae.com/20180115_1716.png)

如果要描述上面这张图的方向，我们可以首先可以这样描述：

```
    position: relative;
    left: 200px;
    top: 100px;

```

因为`left: 200px`等价于`right: -200px`，所以这张图其实有四种写法。

## 绝对定位

**绝对定位**：定义横纵坐标。原点在父容器的左上角或左下角。横坐标用left表示，纵坐标用top或者bottom表示。

格式举例如下：

```
    position: absolute;  /*绝对定位*/
    left: 10px;  /*横坐标*/
    top/bottom: 20px;  /*纵坐标*/
```

### 绝对定位脱标

**绝对定位的盒子脱离了标准文档流。**

所以，所有的标准文档流的性质，绝对定位之后都不遵守了。

绝对定位之后，标签就不区分所谓的行内元素、块级元素了，不需要`display:block`就可以设置宽、高了。

### 绝对定位的参考点（重要）

（1）如果用**top描述**，那么参考点就是**页面的左上角**，而不是浏览器的左上角：

![img](http://img.smyhvae.com/20180115_2120.png)

（2）如果用**bottom描述**，那么参考点就是**浏览器首屏窗口尺寸**（好好理解“首屏”二字），对应的页面的左下角：

![img](http://img.smyhvae.com/20180115_2121.png)

为了理解“**首屏**”二字的含义，我们来看一下动态图：

![img](https://img.smyhvae.com/20180115_2200.gif)

问题：

![img](http://img.smyhvae.com/20180115_2131.png)

答案：

用bottom的定位的时候，参考的是浏览器首屏大小对应的页面左下角。

![img](http://img.smyhvae.com/20180115_2132.png)

### 以盒子为参考点

一个绝对定位的元素，如果父辈元素中也出现了已定位（无论是绝对定位、相对定位，还是固定定位）的元素，那么将以父辈这个元素，为参考点。

如下：（子绝父相）

![img](http://img.smyhvae.com/20180115_2210.png)

以下几点需要注意。

（1） 要听最近的已经定位的祖先元素的，不一定是父亲，可能是爷爷：

```
        <div class="box1">        相对定位
            <div class="box2">    没有定位
                <p></p>           绝对定位，将以box1为参考，因为box2没有定位，box1就是最近的父辈元素
            </div>
        </div>

```

再比如：

```
        <div class="box1">        相对定位
            <div class="box2">    相对定位
                <p></p>           绝对定位，将以box2为参考，因为box2是自己最近的父辈元素
            </div>
        </div>
```

（2）不一定是相对定位，任何定位，都可以作为儿子的参考点：

子绝父绝、**子绝父相**、子绝父固，都是可以给儿子定位的。但是在工程上，如果子绝、父绝，没有一个盒子在标准流里面了，所以页面就不稳固，没有任何实战用途。

**工程应用：**

“**子绝父相**”有意义：这样可以保证父亲没有脱标，儿子脱标在父亲的范围里面移动。于是，工程上经常这样做：

> 父亲浮动，设置相对定位（零偏移），然后让儿子绝对定位一定的距离。

（3）绝对定位的儿子，无视参考的那个盒子的padding：

下图中，绿色部分是父亲div的padding，蓝色部分p是div的内容区域。此时，如果div相对定位，p绝对定位，那么， p将无视父亲的padding，在border内侧为参考点，进行定位：

![img](http://img.smyhvae.com/20180116_0812.png)

**工程应用：**

绝对定位非常适合用来做“压盖”效果。我们来举个lagou.com上的例子。

现在有如下两张图片素材：

![img](http://img.smyhvae.com/20180116_1115.png)

![img](http://img.smyhvae.com/20180116_1116.jpg)

要求作出如下效果：

![img](http://img.smyhvae.com/20180116_1117.png)

代码实现如下：

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <style type="text/css">
        .box{
            margin: 100px;
            width: 308px;
            height: 307px;
            border: 1px solid #FF7E00;
            position: relative;  /*子绝父相*/

        }
        .box .image img{
            width: 308px;
            height: 196px;
        }
        .box .dtc{
            display: block;  /*转为块级元素，才能设置span的宽高*/
            width: 52px;
            height: 28px;
            background-image: url(http://img.smyhvae.com/20180116_1115.png);
            background-position: -108px 0px; /*这里用到了精灵图*/
            position: absolute;  /*采用绝对定位的方式，将精灵图盖在最上层*/
            top: -9px;
            left: 13px;
        }
        .box h4{
            background-color: black;
            color: white;
            width:308px;
            height: 40px;
            line-height: 40px;
            position: absolute;
            top: 156px;
        }
    </style>
</head>
<body>
    <div class="box">
        <span class="dtc"></span>
        <div class="image">
            <img src="http://img.smyhvae.com/20180116_1116.jpg" alt="">
        </div>
        <h4>广东深圳宝安区建安一路海雅缤纷城4楼</h4>
    </div>
</body>
</html>
```

代码解释如下：

- 为了显示“多套餐”那个小图，我们需要用到精灵图。
- “多套餐”下方黑色背景的文字都是通过“子绝父相”的方式的盖在大海报image的上方的。

代码的效果如下：

![img](http://img.smyhvae.com/20180116_1335.png)

### 让绝对定位中的盒子在父亲里居中

我们知道，如果想让一个**标准流中的盒子在父亲里居中**（水平方向看），可以将其设置`margin: 0 auto`属性。

可如果盒子是绝对定位的，此时已经脱标了，如果还想让其居中（位于父亲的正中间），可以这样做：

```
    div {
        width: 600px;
        height: 60px;
        position: absolute;  绝对定位的盒子
        left: 50%;           首先，让左边线居中
        top: 0;
        margin-left: -300px;  然后，向左移动宽度（600px）的一半
    }
```

如上方代码所示，我们先让这个宽度为600px的盒子，左边线居中，然后向左移动宽度（600px）的一半，就达到效果了。

![img](http://img.smyhvae.com/20180116_1356.png)

我们可以总结成一个公式：

> left:50%; margin-left:负的宽度的一半

## 固定定位

**固定定位**：就是相对浏览器窗口进行定位。无论页面如何滚动，这个盒子显示的位置不变。

备注：IE6不兼容。

**用途1**：网页右下角的“返回到顶部”

比如我们经常看到的网页右下角显示的“返回到顶部”，就可以固定定位。

```
    <style type="text/css">
        .backtop{
            position: fixed;
            bottom: 100px;
            right: 30px;
            width: 60px;
            height: 60px;
            background-color: gray;
            text-align: center;
            line-height:30px;
            color:white;
            text-decoration: none;   /*去掉超链接的下划线*/
        }
    </style>
```

**用途2：**顶部导航条

我们经常能看到固定在网页顶端的导航条，可以用固定定位来做。

需要注意的是，假设顶部导航条的高度是60px，那么，为了防止其他的内容被导航条覆盖，我们要给body标签设置60px的padding-top。

顶部导航条的实现如下：

```
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
    <title>Document</title>
    <style type="text/css">
        *{
            margin: 0;
            padding: 0;
        }
body{
            /*为什么要写这个？*/
            /*不希望我们的页面被nav挡住*/
            padding-top: 60px;
            /*IE6不兼容固定定位，所以这个padding没有什么用，就去掉就行了*/
            _padding-top:0;
        }
        .nav{
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 60px;
            background-color: #333;
            z-index: 99999999;
        }
        .inner_c{
            width: 1000px;
            height: 60px;
            margin: 0 auto;

        }
        .inner_c ul{
            list-style: none;
        }
        .inner_c ul li{
            float: left;
            width: 100px;
            height: 60px;
            text-align: center;
            line-height: 60px;
        }
        .inner_c ul li a{
            display: block;
            width: 100px;
            height: 60px;
            color:white;
            text-decoration: none;
        }
        .inner_c ul li a:hover{
            background-color: gold;
        }
        p{
            font-size: 30px;
        }
        .btn{
            display: block;
            width: 120px;
            height: 30px;
            background-color: orange;
            position: relative;
            top: 2px;
            left: 1px;
        }
    </style>
</head>
<body>
    <div class="nav">
        <div class="inner_c">
            <ul>
                <li><a href="#">网页栏目</a></li>
                <li><a href="#">网页栏目</a></li>
                <li><a href="#">网页栏目</a></li>
                <li><a href="#">网页栏目</a></li>
                <li><a href="#">网页栏目</a></li>
                <li><a href="#">网页栏目</a></li>
                <li><a href="#">网页栏目</a></li>
                <li><a href="#">网页栏目</a></li>
                <li><a href="#">网页栏目</a></li>
                <li><a href="#">网页栏目</a></li>
            </ul>
        </div>
    </div>
</body>
</html>

```

### 5、z-index属性：

**z-index**属性：表示谁压着谁。数值大的压盖住数值小的。

有如下特性：

 （1）属性值大的位于上层，属性值小的位于下层。

 （2）z-index值没有单位，就是一个正整数。默认的z-index值是0。

 （3）如果大家都没有z-index值，或者z-index值一样，那么在HTML代码里写在后面，谁就在上面能压住别人。定位了的元素，永远能够压住没有定位的元素。

 （4）只有定位了的元素，才能有z-index值。也就是说，不管相对定位、绝对定位、固定定位，都可以使用z-index值。**而浮动的元素不能用**。

 （5）从父现象：父亲怂了，儿子再牛逼也没用。意思是，如果父亲1比父亲2大，那么，即使儿子1比儿子2小，儿子1也能在最上层。

针对（1）（2）（3）条，举例如下：

这是默认情况下的例子：（div2在上层，div1在下层）

![img](http://img.smyhvae.com/2015-10-03-css-32.png)

现在加一个`z-index`属性，要求效果如下：

![img](http://img.smyhvae.com/2015-10-03-css-33.png)

第五条分析：

![img](http://img.smyhvae.com/20180116_1445.png)

z-index属性的应用还是很广泛的。当好几个已定位的标签出现覆盖的现象时，我们可以用这个z-index属性决定，谁处于最上方。也就是**层级**的应用。

**层级：**

（1）必须有定位（除去static）

（2）用`z-index`来控制层级数。

|   属性   |                 描述                 |
| :------: | :----------------------------------: |
| position |               定位方式               |
|   left   | 设置元素参照相对物左边界向右偏移位置 |
|  right   | 设置元素参照相对物右边界向左偏移位置 |
|   top    | 设置元素参照相对物顶边界向下偏移位置 |
|  bottom  | 设置元素参照相对物底边界向上偏移位置 |
| z-index  |          设置元素的层叠顺序          |

```
<div class="demo"></div>

.demo{
    width:100px;
    height:100px;

    position: static;    /*静态定位*/
    position:absolute;    /*绝对定位*/
    position: relative;    /*相对定位*/
    position: fixed;    /*固定定位*/
    position: sticky;    /*头部固定定位*/

    left:20px;    /*设置元素参照相对物左边界向右偏移位置*/
    right:30px;    /*设置元素参照相对物右边界向左偏移位置*/
    top:30px;    /*设置元素参照相对物顶边界向下偏移位置*/
    bottom:30px;    /*设置元素参照相对物底边界向上偏移位置*/
    z-index:30;    /*设置元素的层叠顺序*/
}
```



## 前言

CSS3中的 flex 属性，在布局方面做了非常大的改进，使得我们对**多个元素之间**的布局排列变得十分灵活，适应性非常强。其强大的伸缩性和自适应性，在网页开中可以发挥极大的作用。

### flex 初体验

我们先来看看下面这个最简单的布局：

![img](http://img.smyhvae.com/20191009_1555.png)

上面这张图中的布局是我们都熟悉的：默认文档流中，在一个父容器里放置多个块级的子元素，那么，这些子元素会默认从上往下排列。

在此基础之上，如果我给父容器仅仅加一个 `display: flex`属性，此时，这些子元素的布局会摇身一变：

![img](http://img.smyhvae.com/20191009_1600.png)

没错，子元素们会**在水平方向上，从左至右排列**，就是这么神奇。到此为止，你已经掌握了关于 flex 的一半的知识。

### flex 布局的优势

1、**flex 布局的子元素不会脱离文档流**，很好地遵从了“流的特性”。

但你如果用 float 来做布局，float 属性的元素会脱离文档流，而且会涉及到各种 BFC、清除浮动的问题。浮动相关的问题，比较麻烦，所以也成了面试必问的经典题目。但有了 flex 布局之后，这些问题都不存在的。

2、**flex 是一种现代的布局方式，是 W3C 第一次提供真正用于布局的 CSS 规范**。 flex 非常提供了丰富的属性，非常灵活，让布局的实现更佳多样化，且方便易用。

flex 唯一的缺点就在于，它不支持低版本的 IE 浏览器。

### flex 的兼容性问题

![img](http://img.smyhvae.com/20191005_1200.png)

上图中可以看到， flex 布局不支持 IE9 及以下的版本；IE10及以上也只是部分支持。如果你的页面不需要处理 IE浏览器的兼容性问题，则可以放心大胆地使用 flex 布局。

但是，比如网易新闻、淘宝这样的大型网站，面对的是海量用户，即便使用低版本浏览器的用户比例很少，但绝对基数仍然是很庞大的。因此，这些网站为了兼容低版本的 IE 浏览器，暂时还不敢尝试使用 flex 布局。

### 概念：弹性盒子、子元素

在讲 flex 的知识点之前，我们事先约定两个概念：

- **弹性盒子**：指的是使用 `display:flex` 或 `display:inline-flex` 声明的**父容器**。
- **子元素/弹性元素**：指的是父容器里面的子元素们（父容器被声明为 flex 盒子的情况下）。

### 概念：主轴和侧轴

在上面的“初体验”例子中，我们发现，弹性盒子里面的子元素们，默认是从左至右排列的，这个方向，代表的就是主轴的方向。

在此，我们引入主轴和侧轴的概念。

![img](http://img.smyhvae.com/20191009_1701.png)

如上图所示：

- 主轴：flex容器的主轴，默认是水平方向，从左向右。
- 侧轴：与主轴垂直的轴称作侧轴，默认是垂直方向，从上往下。

PS：主轴和侧轴并不是固定不变的，可以通过 `flex-direction` 更换方向，我们在后面会讲到。

## 弹性盒子

### 声明定义

使用 `display:flex` 或 `display:inline-flex` 声明一个**父容器**为弹性盒子。此时，这个父容器里的子元素们，会遵循弹性布局。

备注：一般是用 `display:flex`这个属性。`display:inline-flex`用得较少。

### flex-direction 属性

`flex-direction`：用于设置盒子中**子元素**的排列方向。属性值可以是：

| 属性值         | 描述                             |
| :------------- | :------------------------------- |
| row            | 从左到右水平排列子元素（默认值） |
| column         | 从上到下垂直排列子元素           |
| row-reverse    | 从右向左排列子元素               |
| column-reverse | 从下到上垂直排列子元素           |

备注：如果我们不给父容器写`flex-direction`这个属性，那么，子元素默认就是从左到右排列的。

代码演示：

```
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        *{
            margin: 0;
            padding: 0;
            list-style: none;
        }
       body{
           background-color: #eee;
           font-family: "Microsoft Yahei";
           font-size:22px;
       }

        h3{
            font-weight: normal;
        }
        section{
            width: 1000px;

            margin:40px auto;
        }

        ul{
            background-color: #fff;
            border: 1px solid #ccc;

        }

        ul li{
            width: 200px;
            height: 200px;
            background-color: pink;
            margin:10px;
        }
        section:nth-child(1) ul{
            overflow: hidden; /* 清除浮动 */
        }
        section:nth-child(1) ul li{
            float: left;
        }
        /* 设置伸缩盒子*/
        section:nth-child(2) ul{
            display: flex;
        }

        section:nth-child(3) ul{
            /* 设置伸缩布局*/
            display: flex;
            /* 设置主轴方向*/
            flex-direction: row;
        }

        section:nth-child(4) ul{
            /* 设置伸缩布局*/
            display: flex;
            /* 设置主轴方向 :水平翻转*/
            flex-direction: row-reverse;
        }

        section:nth-child(5) ul{
            /* 设置伸缩布局*/
            display: flex;
            /* 设置主轴方向 :垂直*/
            flex-direction: column;
        }

        section:nth-child(6) ul{
            /* 设置伸缩布局*/
            display: flex;
            /* 设置主轴方向 :垂直*/
            flex-direction: column-reverse;
        }
    </style>
</head>
<body>
    <section>
        <h3>传统布局</h3>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    </section>

    <section>
        <h3>伸缩布局 display:flex</h3>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    </section>

    <section>
        <h3>主轴方向 flex-direction:row</h3>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    </section>

    <section>
        <h3>主轴方向 flex-direction:row-reverse</h3>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    </section>

    <section>
        <h3>主轴方向 flex-direction:column</h3>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    </section>

    <section>
        <h3>主轴方向 flex-direction:column-reverse</h3>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    </section>
</body>
</html>
```

### flex-wrap 属性

`flex-wrap`：控制子元素溢出时的换行处理。

### justify-content 属性

`justify-content`：控制子元素在主轴上的排列方式。

## 弹性元素

### justify-content 属性

- `justify-content: flex-start;` 设置子元素在**主轴上的对齐方式**。属性值可以是：
  - `flex-start` 从主轴的起点对齐（默认值）
  - `flex-end` 从主轴的终点对齐
  - `center` 居中对齐
  - `space-around` 在父盒子里平分
  - `space-between` 两端对齐 平分

代码演示：（在浏览器中打开看效果）

```
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        *{
            margin: 0;
            padding: 0;
            list-style:none;}
        body{
            background-color: #eee;
            font-family: "Microsoft Yahei";

        }
        section{
            width: 1000px;
            margin:50px auto;
        }
        section h3{
            font-size:22px;
            font-weight: normal;
        }

        ul{
            border: 1px solid #999;
            background-color: #fff;
            display: flex;

        }

        ul li{
            width: 200px;
            height: 200px;
            background: pink;
            margin:10px;

        }

        section:nth-child(1) ul{
            /* 主轴对齐方式：从主轴开始的方向对齐*/
            justify-content: flex-start;
        }

        section:nth-child(2) ul{
            /* 主轴对齐方式：从主轴结束的方向对齐*/
            justify-content: flex-end;
        }

        section:nth-child(3) ul{
            /* 主轴对齐方式：居中对齐*/
            justify-content: center;
        }

        section:nth-child(4) ul{
            /* 主轴对齐方式：在父盒子中平分*/
            justify-content: space-around;

           }

        section:nth-child(5) ul{
            /* 主轴对齐方式：两端对齐 平分*/
            justify-content: space-between;
        }
    </style>
</head>
<body>
    <section>
        <h3>主轴的对齐方式：justify-content:flex-start</h3>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    </section>

    <section>
        <h3>主轴的对齐方式：justify-content:flex-end</h3>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    </section>

    <section>
        <h3>主轴的对齐方式：justify-content:center</h3>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    </section>

    <section>
        <h3>主轴的对齐方式：justify-content:space-round</h3>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    </section>

    <section>
        <h3>主轴的对齐方式：justify-content:space-bettwen</h3>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
        </ul>
    </section>
</body>
</html>
```

### align-items 属性

`align-items`：设置子元素在**侧轴上的对齐方式**。属性值可以是：    - `flex-start` 从侧轴开始的方向对齐    - `flex-end` 从侧轴结束的方向对齐    - `baseline` 基线 默认同flex-start    - `center` 中间对齐    - `stretch` 拉伸

代码演示：

```
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        *{
            margin: 0;
            padding: 0;
            list-style:none;
        }
        body{
            background-color: #eee;
            font-family: "Microsoft Yahei";

        }
        section{
            width: 1000px;
            margin:50px auto;
        }
        section h3{
            font-size:22px;
            font-weight: normal;
        }

        ul{
            border: 1px solid #999;
            background-color: #fff;
            display: flex;
            height:500px;

        }

        ul li{
            width: 200px;
            height: 200px;
            background: pink;
            margin:10px;

        }

        section:nth-child(1) ul{
            /* 侧轴对齐方式 ：从侧轴开始的方向对齐*/
            align-items:flex-start;
        }

        section:nth-child(2) ul{
            /* 侧轴对齐方式 ：从侧轴结束的方向对齐*/
            align-items:flex-end;
        }

        section:nth-child(3) ul{
            /* 侧轴对齐方式 ：居中*/
            align-items:center;
        }

        section:nth-child(4) ul{
            /* 侧轴对齐方式 ：基线 默认同flex-start*/
            align-items:baseline;
        }

        section:nth-child(5) ul{
            /* 侧轴对齐方式 ：拉伸*/
            align-items:stretch;

        }

        section:nth-child(5) ul li{
            height:auto;
        }


    </style>
</head>
<body>
<section>
    <h3>侧轴的对齐方式:align-items ：flex-start</h3>
    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
</section>

<section>
    <h3>侧轴的对齐方式：align-items:flex-end</h3>
    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
</section>

<section>
    <h3>侧轴的对齐方式：align-items:center</h3>
    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
</section>

<section>
    <h3>侧轴的对齐方式：align-itmes:baseline</h3>
    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
</section>

<section>
    <h3>侧轴的对齐方式：align-itmes: stretch</h3>
    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
</section>
</body>
</html>
```

### `flex`属性：设置子盒子的权重

代码演示：

```
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        *{
            margin: 0;
            padding: 0;
            list-style:none;
        }
        body{
            background-color: #eee;
            font-family: "Microsoft Yahei";

        }
        section{
            width: 1000px;
            margin:50px auto;
        }
        section h3{
            font-size:22px;
            font-weight: normal;
        }

        ul{
            border: 1px solid #999;
            background-color: #fff;
            display: flex;

        }

        ul li{
            width: 200px;
            height: 200px;
            background: pink;
            margin:10px;

        }

        section:nth-child(1) ul li:nth-child(1){
            flex:1;
        }

        section:nth-child(1) ul li:nth-child(2){
            flex:1;
        }

        section:nth-child(1) ul li:nth-child(3){
            flex:8;
        }

        section:nth-child(2) ul li:nth-child(1){

        }

        section:nth-child(2) ul li:nth-child(2){
            flex:1;
        }

        section:nth-child(2) ul li:nth-child(3){
           flex:4;
        }


    </style>
</head>
<body>
<section>
    <h3>伸缩比例:flex</h3>
    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
</section>

<section>
    <h3>伸缩比例:flex</h3>
    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
</section>


</body>
</html>
```

## 相关链接

### CSS Flexbox 可视化手册

可视化的截图如下：（请点开链接，查看大图）

http://img.smyhvae.com/20190821_2101.png

相关文章：

- 【英文原版】 CSS Flexbox Fundamentals Visual Guide：https://medium.com/swlh/css-flexbox-fundamentals-visual-guide-1c467f480dac
- 【中文翻译】CSS Flexbox 可视化手册：https://zhuanlan.zhihu.com/p/56046851

### flex 相关的推荐文章

- flex 效果在线演示：https://demos.scotch.io/visual-guide-to-css3-flexbox-flexbox-playground/demos/
- A Complete Guide to Flexbox | 英文原版：https://css-tricks.com/snippets/css/a-guide-to-flexbox/
- CSS3 Flexbox 布局完全指南 | 中文翻译：https://www.html.cn/archives/8629

### flex 相关的教程

- [后盾人 flex 教程](http://houdunren.gitee.io/note/css/10 弹性布局.html)

#### 技巧：使用 margin 自动撑满剩余空间

 

### 伸缩盒样式

|      属性       |                     描述                     |
| :-------------: | :------------------------------------------: |
|    flex-grow    |             设置弹性盒的扩展比率             |
|   flex-shrink   |             设置弹性盒的收缩比率             |
|   flex-basis    |             设置弹性盒伸缩基准值             |
|      flex       |  复合属性。设置缩盒对象的子元素如何分配空间  |
| flex-direction  |       设置弹性盒元素水平方向的显示方式       |
|    flex-wrap    |       设置弹性盒元素垂直方向的显示方式       |
|    flex-flow    | 复合属性。设置弹性盒模型对象的子元素显示方式 |
|  align-content  |    设置弹性盒元素所在行垂直方向的排列方式    |
|   align-items   |       设置弹性盒元素垂直方向的排列方式       |
|   align-self    |       设置弹性子元素垂直方向的排列方式       |
| justify-content |       设置弹性盒元素水平方向的排列方式       |

------

### flex-grow，flex-basis

```
<div class="demo">
  <div style="background-color:coral;"></div>
  <div style="background-color:lightblue;"></div>
</div>

.demo {
  width: 400px;
  height: 100px;
  border: 1px solid #c3c3c3;
  display: flex;    /*设置元素为弹性盒子*/
}

.demo div{
    flex-basis:100px;  /* 设置弹性盒伸缩基准值 */
}

.demo div:nth-child(1) {
    flex-grow: 1;  /*设置弹性盒的扩展比率*/
}

.demo div:nth-child(2) {
    flex-grow: 3;    /*设置弹性盒的扩展比率*/
}
```

### flex-shrink

```
<div class="demo">
  <div style="background-color:coral;"></div>
  <div style="background-color:lightblue;"></div>
  <div style="background-color:green;"></div>
  <div style="background-color:red;"></div>
</div>

.demo {
  width: 350px;
  height: 100px;
  border: 1px solid #c3c3c3;
  display: flex; /*设置元素为弹性盒子*/
}

.demo div{
    flex-basis:100px;   /* 设置弹性盒伸缩基准值 */
}

.demo div:nth-child(1){
    flex-shrink:5;    /* 设置弹性盒的收缩比率 */
}
```

### flex

```
<div class="demo">
    <div style="background-color:red;"></div>
    <div style="background-color:green;"></div>
    <div style="background-color:blue;"></div>
</div>

.demo{
    display:flex;
    width:400px;
    height:100px;
}

.demo div:nth-child(1){flex:1 1 400px;}
.demo div:nth-child(2){flex:1 2 400px;}
.demo div:nth-child(3){flex:1 2 400px;}
```

### flex-direction

```
<ul class="demo">
    <li style="background-color:red;"></li>
    <li style="background-color:green;"></li>
    <li style="background-color:blue;"></li>
</ul>

.demo{
    display:flex;
    flex-direction:row;    /*默认值。项目将水平显示正如一行一样*/
    flex-direction:row-reverse;    /*与 row 相同，但是以相反的顺序*/
    flex-direction:column; /*项目将垂直显示，正如一列一样*/
    flex-direction:column-reverse; /*与 column 相同，但是以相反的顺序*/
}

.demo li{
    width:100px;
    height:100px;
    list-style:none;
    border:1px solid #ccc;
}
```

### flex-wrap

```
<ul class="demo">
    <li style="background-color:coral;"></li>
    <li style="background-color:lightblue;"></li>
    <li style="background-color:khaki;"></li>
    <li style="background-color:pink;"></li>
    <li style="background-color:lightgrey;"></li>
    <li style="background-color:lightgreen;"></li>
</ul>

.demo{
    width:200px;
    height:200px;
    display:flex;
    flex-wrap:nowrap;    /*flex容器为单行。该情况下flex子项可能会溢出容器*/
    flex-wrap:wrap;        /*flex容器为多行。该情况下flex子项溢出的部分会被放置到新行，子项内部会发生断行*/
    flex-wrap:wrap-reverse;    /*反转 wrap 排列*/

}

.demo li{
    width:50px;
    height:50px;
    list-style:none;
    border:1px solid #ccc;
}
```

### flex-flow

```
<ul class="demo">
    <li style="background-color:coral;"></li>
    <li style="background-color:lightblue;"></li>
    <li style="background-color:khaki;"></li>
    <li style="background-color:pink;"></li>
    <li style="background-color:lightgrey;"></li>
    <li style="background-color:lightgreen;"></li>
</ul>

.demo{
    width:200px;
    height:200px;
    display:flex;
    flex-flow:column wrap-reverse;  /*水平方向的排列、垂直方向的排列*/

}

.demo li{
    width:50px;
    height:50px;
    list-style:none;
    border:1px solid #ccc;
}
```

### align-content

```
<ul class="demo">
    <li style="background-color:coral;"></li>
    <li style="background-color:lightblue;"></li>
    <li style="background-color:khaki;"></li>
    <li style="background-color:pink;"></li>
    <li style="background-color:lightgrey;"></li>
    <li style="background-color:lightgreen;"></li>
</ul>


.demo{
    width:200px;
    height:200px;
    display:flex;
    border:1px solid red;
    flex-flow: row wrap;
    align-content:stretch;     /*默认值。项目被拉伸以适应容器*/
    align-content:center;    /*项目位于容器的中心*/
    align-content:flex-start;     /*项目位于容器的开头*/
    align-content:flex-end;     /*项目位于容器的结尾*/
    align-content:space-between;     /*项目位于各行之间留有空白的容器内*/
    align-content:space-around;     /*项目位于各行之前、之间、之后都留有空白的容器内*/
}

.demo li{
    width:50px;
    height:50px;
    list-style:none;
    border:1px solid #ccc;
}
```

### align-items

```
<ul class="demo">
    <li style="background-color:coral;"></li>
    <li style="background-color:lightblue;"></li>
    <li style="background-color:khaki;"></li>
    <li style="background-color:pink;"></li>
    <li style="background-color:lightgrey;"></li>
    <li style="background-color:lightgreen;"></li>
</ul>

.demo{
    width:200px;
    height:200px;
    padding:0;
    display:flex;
    border:1px solid red;
    align-items:stretch;    /*默认值。元素被拉伸以适应容器*/
    align-items:baseline;    /*元素位于容器的基线上*/
    align-items:center;        /*元素位于容器的中心*/
    align-items:flex-start;    /*元素位于容器的开头*/
    align-items:flex-end;    /*元素位于容器的结尾*/

}

.demo li{
    width:50px;
    height:50px;
    list-style:none;
    border:1px solid #ccc;
}
```

### align-self

```
<ul class="demo">
    <li style="background-color:coral;"></li>
    <li style="background-color:lightblue;"></li>
    <li style="background-color:khaki;"></li>
    <li style="background-color:pink;"></li>
    <li style="background-color:lightgrey;"></li>
    <li style="background-color:lightgreen;"></li>
</ul>


.demo{
    width:200px;
    height:200px;
    padding:0;
    display:flex;
    border:1px solid red;

}

.demo li{
    width:50px;
    height:50px;
    list-style:none;
    border:1px solid #ccc;
}

.demo li:nth-child(3){
    align-self:auto;    /*默认值。元素继承了它的父容器的 align-items 属性。如果没有父容器则为 "stretch"*/
    align-self:stretch;        /*元素被拉伸以适应容器*/
    align-self:center;        /*元素位于容器的中心*/
    align-self:baseline;    /*元素位于容器的基线上*/
    align-self:flex-start;    /*元素位于容器的开头*/
    align-self:flex-end;    /*元素位于容器的结尾*/
}
```

### justify-content

```
<ul class="demo">
    <li style="background-color:coral;"></li>
    <li style="background-color:lightblue;"></li>
    <li style="background-color:khaki;"></li>
    <li style="background-color:pink;"></li>
</ul>

.demo{
    width:400px;
    height:200px;
    padding:0;
    border:1px solid red;
    display:flex;
    justify-content:center;        /*项目位于容器的中心*/
    justify-content:flex-start;    /*默认值。项目位于容器的开头*/
    justify-content:flex-end;    /*项目位于容器的结尾*/
    justify-content:space-between;    /*项目位于各行之间留有空白的容器内*/
    justify-content:space-around;    /*项目位于各行之前、之间、之后都留有空白的容器内*/
}

.demo li{
    width:50px;
    height:50px;
    list-style:none;
    border:1px solid #ccc;
}
```

# CSS3动画

 

## CSS动画制作

- 变换样式 （transform）
- 过渡样式 （transition）
- 自定义动画（animate）
- [手册](http://css.doyoe.com/)

 

## 变换样式(transform)

|        属性        |                             描述                             |
| :----------------: | :----------------------------------------------------------: |
|    translate()     | 2D平移，第一个参数对应X轴，第二个参数对应Y轴。如果第二个参数未提供，则默认值为0 |
|    translateX()    |                指定对象X轴（水平方向）的平移                 |
|    translateY()    |                指定对象Y轴（垂直方向）的平移                 |
|      rotate()      | 指定对象的2D rotation（2D旋转），需先有 <' transform-origin '> 属性的定义 |
|     rotateX()      |                  指定对象在x轴上的旋转角度                   |
|     rotateY()      |                  指定对象在y轴上的旋转角度                   |
|     rotateZ()      |                  指定对象在z轴上的旋转角度                   |
|      scale()       | 指定对象的2D scale（2D缩放）。第一个参数对应X轴，第二个参数对应Y轴。如果第二个参数未提供，则默认取第一个参数的值 |
|      scaleX()      |                指定对象X轴的（水平方向）缩放                 |
|      scaleY()      |                指定对象Y轴的（垂直方向）缩放                 |
|       skew()       | 指定对象skew transformation（斜切扭曲）。第一个参数对应X轴，第二个参数对应Y轴。如果第二个参数未提供，则默认值为0 |
|      skewX()       |                指定对象X轴的（水平方向）扭曲                 |
|      skewY()       |                指定对象Y轴的（垂直方向）扭曲                 |
|     transform      |                   复合属性。设置对象的变换                   |
|  transform-origin  |                 设置对象中的变换所参照的原点                 |
|  transform-style   |             指定某元素的子元素是否位于三维空间内             |
|    perspective     | perspective 属性定义 3D 元素距视图的距离，以像素计。该属性允许您改变 3D 元素查看 3D 元素的视图 |
| perspective-origin |                       指定透视点的位置                       |

 

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>3D元素</title>
    <style>
        *{
            margin:0;
            padding:0;
        }

        html{
            height:100%;

            /* 背景色渐变属性 线性渐变 */
            background:linear-gradient(#ff0 0%, #000 80%);
        }

        body{
            text-align: center;
            padding-top:7em;
        }

        input{
            display: none;
        }

        label{
            display: inline-block;

            width:5em;
            height:3em;
            line-height:3em;
            text-align: center;
            border:1px solid #666;
            cursor: pointer;
            border-radius: 5px;
            margin-right:2em;

            transition:all linear .3s;
        }

        label:last-child{
            margin-right:0;
        }

        label:hover{
            transform:translateY(-10px);
            box-shadow: 0px 10px 20px 0px rgb(156, 154, 154);
            background-color:aqua;
        }


        .clear{
            height:10em;
        }


        /* 3D空间 */
        .views{
            width:250px;
            height:250px;
            /* border:1px solid red; */
            margin:0 auto;

            position: relative;

            /* 设置3D效果的距离 近大远小 */
            perspective: 1000px;
        }

        /* 3D的立体元素 */
        .box{
            width:100%;
            height:100%;

            /* 将元素以3D的效果显示 */
            transform-style: preserve-3d;

            /* 稍微的转换一下角度，看到不同的层面 */
            transform:rotateX(-15deg) rotateY(20deg);

            transition:all ease-in-out .3s;
        }

        /* 6个面 */
        .face{
            width:100%;
            height:100%;
            line-height:250px;
            font-size:2em;
            font-weight: bold;
            text-align: center;
            background-color:rgba(51, 51, 51, .1);
            border:1px solid #fff;
            position: absolute;
            left:0;
            top:0;
            box-shadow: 0px 0px 20px 0px #333;
            color:#fff;
            opacity: .6;
            transition:all ease-in-out .3s;
        }


        .front{
            transform:translate3d(0px, 0px, 125px);
        }

        .back{
            transform:rotateY(180deg) translate3d(0px, 0px, 125px);
        }

        .left{
            transform:rotateY(-90deg) translate3d(0px, 0px, 125px);
        }

        .right{
            transform:rotateY(90deg) translate3d(0px, 0px, 125px);
        }

        .top{
            transform:rotateX(90deg) translate3d(0px, 0px, 125px);
        }

        .bottom{
            transform:rotateX(-90deg) translate3d(0px, 0px, 125px);
        }


        input:checked + label{
            transform:translateY(-10px);
            box-shadow: 0px 10px 20px 0px rgb(156, 154, 154);
            background-color:aqua;
        }

        #front:checked ~ .views .box{
            transform:rotateX(-15deg) rotateY(20deg);
        }

        #back:checked ~ .views .box{
            transform:rotateX(-15deg) rotateY(200deg);
        }

        #left:checked ~ .views .box{
            transform:rotateX(-15deg) rotateY(110deg);
        }

        #right:checked ~ .views .box{
            transform:rotateX(-15deg) rotateY(-70deg);
        }

        #top:checked ~ .views .box{
            transform:rotateY(20deg) rotateX(-90deg);
        }

        #bottom:checked ~ .views .box{
            transform:rotateY(20deg) rotateX(90deg);
        }

        #big:checked ~ .views .box{
            transform:scale(2) rotateX(-15deg) rotateY(20deg);
        }

        #small:checked ~ .views .box{
            transform:scale(.5) rotateX(-15deg) rotateY(20deg);
        }

        #rotate:checked ~ .views .box{
            animation:rotate linear 6s infinite;
        }

        @keyframes rotate{
            0%{
                transform:rotateX(0deg) rotateY(0deg);
            }
            100%{
                transform:rotateX(360deg) rotateY(360deg);
            }
        }


        /* 展开 */
        #open:checked ~ .views .box .front{
            transform:translate3d(0px, 0px, 300px);
        }

        #open:checked ~ .views .box .back{
            transform:rotateY(180deg) translate3d(0px, 0px, 300px);
        }

        #open:checked ~ .views .box .left{
            transform:rotateY(-90deg) translate3d(0px, 0px, 300px);
        }

        #open:checked ~ .views .box .right{
            transform:rotateY(90deg) translate3d(0px, 0px, 300px);
        }

        #open:checked ~ .views .box .top{
            transform:rotateX(90deg) translate3d(0px, 0px, 300px);
        }

        #open:checked ~ .views .box .bottom{
            transform:rotateX(-90deg) translate3d(0px, 0px, 300px);
}
        }



    </style>
</head>
<body>
    <input type="radio" name="box" id="front" checked />
    <label for="front">正面</label>

    <input type="radio" name="box" id="back" />
    <label for="back">背面</label>

    <input type="radio" name="box" id="left" />
    <label for="left">左边</label>

    <input type="radio" name="box" id="right" />
    <label for="right">右边</label>

    <input type="radio" name="box" id="top" />
    <label for="top">上面</label>

    <input type="radio" name="box" id="bottom" />
    <label for="bottom">下面</label>

    <input type="radio" name="box" id="big" />
    <label for="big">放大</label>

    <input type="radio" name="box" id="small" />
    <label for="small">缩小</label>

    <input type="radio" name="box" id="rotate" />
    <label for="rotate">旋转</label>

    <input type="radio" name="box" id="open" />
    <label for="open">展开</label>

    <div class="clear"></div>

    <!-- 3D空间 -->
    <div class="views">
        <!-- 3D元素 -->
        <div class="box">
            <div class="face front">正面</div>
            <div class="face back">背面</div>
            <div class="face left">左面</div>
            <div class="face right">右面</div>
            <div class="face top">上面</div>
            <div class="face bottom">下面</div>
        </div>
    </div>
</body>
</html>
```

 

------

 

 

## perspective-origin

```
<div class="wrapper w1">
    <div>1</div>
</div>
<div class="wrapper w2">
    <div>2</div>
</div>

.wrapper {
    display: inline-block;
    width: 200px;
    height: 200px;
    margin: 10px;
    border: 1px solid #000;
    -webkit-perspective: 150px;   /*设置3D元素与3D页面间的距离*/
    perspective: 150px;        /*设置3D元素与3D页面间的距离*/
    -webkit-transform-style: preserve-3d;    /*设置元素的效果在3D空间内显示*/
    transform-style: preserve-3d;        /*设置元素的效果在3D空间内显示*/
}
.w1 {
    -webkit-perspective-origin: center top;
    perspective-origin: center top;
}
.w2 {
    -webkit-perspective-origin: center bottom;
    perspective-origin: center bottom;
}
.wrapper > div {
    width: 180px;
    height: 120px;
    margin: 40px 10px;
    background-color: #ccc;
    -webkit-transform: rotatex(90deg);
    transform: rotatex(90deg);
}
```

 

------

 

 

## 过渡样式(transition)

|            属性            |                描述                |
| :------------------------: | :--------------------------------: |
|    transition-property     |     设置对象中的参与过渡的属性     |
|    transition-duration     |       设置对象过渡的持续时间       |
| transition-timing-function |        设置对象中过渡的类型        |
|      transition-delay      |       设置对象延迟过渡的时间       |
|         transition         | 复合属性。设置对象变换时的过渡效果 |

 

```
<div class="demo"></div>


.demo{
    width:100px;
    height:100px;
    background-color:red;

    transition-property:all;    /*设置对象中的参与过渡的属性*/
    transition-duration:3s;        /*设置对象过渡的持续时间*/
    transition-timing-function:linear;    /*设置对象中过渡的类型*/
    transition-delay:2s;        /*设置对象延迟过渡的时间*/
    transition:all 3s linear 1s;    /*复合属性。设置对象变换时的过渡效果*/
}

.demo:hover{
    background-color:green;
    transform:rotate(300deg) skew(-20deg) scale(3.0) translate(100px,0);
}
```

 

------

 

 

## 自定义动画(animation)

|           属性            |               说明               |
| :-----------------------: | :------------------------------: |
|      animation-name       |     设置对象所应用的动画名称     |
|    animation-duration     |      设置对象动画的持续时间      |
| animation-timing-function |      设置对象动画的过渡类型      |
|      animation-delay      |      设置对象动画延迟的时间      |
| animation-iteration-count |        设置动画的播放次数        |
|    animation-direction    | 设置对象动画在循环中是否反向运动 |
|   animation-play-state    |        设置对象动画的状态        |
|    animation-fill-mode    |    设置对象动画时间之外的状态    |

 

```
<div class="demo"></div>

.demo{
    width:100px;
    height:100px;
    background-color:red;

    animation-name:demo;    /*设置对象所应用的动画名称*/

    animation-duration:3s;    /*设置对象动画的持续时间*/

    animation-timing-function:linear;    /*设置对象动画的过渡类型*/

    animation-delay:2s;        /*设置对象动画延迟的时间*/

    animation-iteration-count:infinite;     /*无限循环*/
    animation-iteration-count:5;        /*设置对象动画的循环次数*/

    animation-direction:normal;        /*正常方向*/
    animation-direction:reverse;    /*反方向运行*/
    animation-direction:alternate;    /*动画先正常运行再反方向运行，并持续交替运行*/
    animation-direction:alternate-reverse;/*动画先反运行再正方向运行，并持续交替运行*/

    animation-fill-mode:none;        /*默认值。不设置对象动画之外的状态*/
    animation-fill-mode:forwards;    /*设置对象状态为动画结束时的状态*/
    animation-fill-mode:backwards;    /*设置对象状态为动画开始时的状态*/
    animation-fill-mode:both;        
    /*
        设置对象状态为动画在播放之前或之后，其动画效果是否可见,
        both的运行轨迹:0%——动画运行中——100%;
        最后：animation-fill-mode的状态和animation-direction的值有关。 
        1、当animation-direction为normal 或 alternate时，和上面的状态相同。 
        2、当animation-direction为alternate-reverse 或reverse 时，状态刚好和上面相反。从100%到0%执行。
    */

    animation:demo 2s ease-out forwards;    /*复合属性。设置对象所应用的动画特效*/
}

@keyframes demo{
    from{background-color:red;}
    20%{background-color:pink;}
    40%{background-color:blue;}
    60%{background-color:yellow;}
    80%{background-color:black;}
    to{background-color:green;}
}

.demo:hover{
    animation-play-state:paused;  /*暂停*/
}
```