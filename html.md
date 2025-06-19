# HTML基础&结构

> ## 什么是HTML

1. HyperText Markup Language 简称为HTML
2. HyperText: 超文本 (文本 + 图片 + 音频 + 视频 + 链接)
3. Markup Language: 标记语言
4. 由SGML(标准通用标记语言)发展而来
5. 写给浏览器的语言

 

------

 

> ## HTML版本以及历史

1. html 1.0——1993年6月(IETF制定)
2. HTML 2.0——1995年11月
3. HTML 3.0——1996年1月
4. HTML 4.0——1997年
5. HTML 5.0——2008年1月22日(第一份正式草案)
6. W3C: World Wide Web Consortium (W3C 理事会或万维网联盟) [http://www.w3.org](http://www.w3.org/)

 

------

 

> ## HTML5

HTML5的设计目的是为了在移动设备上支持多媒体。 新的语法特征被引进以支持这一点，如video、audio和canvas svg webgl标记。 HTML5还引进了新的功能，可以真正改变用户与文档的交互方式，包括：

1. 新的解析规则增强了灵活性
2. 新属性
3. 淘汰过时的或冗余的属性
4. 一个HTML5文档到另一个文档间的拖放功能
5. 离线编辑等等

支持Html5的浏览器包括Firefox，IE9及其更高版本，Chrome，Safari，Opera等； 搜狗浏览器、QQ浏览器、猎豹浏览器等国产浏览器同样具备支持HTML5的能力

 

------

 

> ## HTML5声明标签

##### 1. 定义和用法

`<!DOCTYPE>` 声明是文档中的第一个成分，位于

标签之前 该标签告知浏览器文档所使用的 HTML 规范

##### 2. HTML5文档声明

```
<!DOCTYPE HTML>
```

注释：`<!DOCTYPE>` 标签没有结束标签！ 提示：`<!DOCTYPE>` 对大小写不敏感。 在所有 HTML 文档中规定文档类型很重要，这样浏览器才能了解所预期的文档类型。

 

------

 

> ## HTML基本结构

```
<!DOCTYPE HTML>
<html>

    <head>
        <title>我的第一个网页</title>
    </head>
    <body>
        Hello world~
    </body>
</html>
```

- HTML元素由开始标签和结束标签组成
- 位于开始标签和结束标签中的文本是元素的内容
- HTML标签有开始必须有结束，如果是没有内容的标签(空标签), 用/>来结束
- 标签名不区分大小写，但是XHTML中标签名必须用小写
- 标签具有属性，属性用来表示标签的性质和特征。属性要在开始标签中指定

 

------

 

> ## HTML基本元素

##### 1. 换行

```
<br />
```

##### 2. 段落

| 属性  |               说明                |
| :---: | :-------------------------------: |
| align | 对齐方式 （left，right， center） |

```
<p>这是一个段落<p/>
```

##### 3. 标题

```
<h1>标题1<h1/>

<h2>标题2<h2/>

<h3>标题3<h3/>

<h4>标题4<h4/>

<h5>标题5<h5/>

<h6>标题6<h6/>
```

##### 4. 水平线

| 属性  |        说明         |
| :---: | :-----------------: |
| size  |  指定线的粗细(px)   |
| width | 指定线的长度(px或%) |

```
<hr size="5" width="50%" align="center" />
```

##### 5. 文本格式化

```
<b>定义粗体文本</b>

<i> 定义斜体文本 </i>

<s>定义删除文本</s> <del></del>

<u>定义下划线文本</u>

<sup>定义上标字</sup>

<sub>定义下标字</sub>
```

##### 6. 预格式文本

```
<pre>标签可以保留文字在源代码中的格式,使得页面中显示的内容和源代码中的格式一致</pre>
```

##### 7. 字体

| 属性  |     说明     |
| :---: | :----------: |
| size  | 定义字体大小 |
| face  |   定义字体   |
| color | 定义字体颜色 |

```
<font>这是一段文字</font>
```

- 16进制的模式 #DCC123
- 单词模式 red ,blue ,green ,black
- RGB rgb(20,100,35) 0-255

##### 8. 链接

|  属性  |                       说明                        |
| :----: | :-----------------------------------------------: |
|  href  |                   定义链接地址                    |
| title  |                   链接提示信息                    |
| target | 链接打开方式(*blank 新的空白页,*self 当前页,_top) |

```
<a href="URL"> ~ </a>
```

> (1). 区分内部外部链接

```
外部链接：<a href="http://www.163.com"> 网易 </a>
内部链接：<a href="about.html"> 公司简介 </a>
```

> (2). 锚点

```
锚点(锚点标签用于使用户"跳"到文档的某个部分)
<a name="位置名"> ~ </a>
<a href="#位置名"> ~ </a>
```

> (3). 其他应用链接

```
<a href="mailto:邮箱地址">邮件链接</a>
<a href="tel:电话号码">一键拨打</a>
<a href="sms:139xxxxxxx">一键发送短信</a>
```

##### 9. 图像

|  属性  |        说明        |
| :----: | :----------------: |
|  src   |   定义图像的url    |
|  alt   | 定义图像的替代文本 |
| width  |   设置图像的宽度   |
| height |   设置图像的高度   |

```
<img src="URL" width="100" height="100" alt="替代文字" />
```

##### 10. HTML图像热区

|  属性  |            说明            |
| :----: | :------------------------: |
| shape  | 热区形状(rect,circle,poly) |
| coords |        形状的坐标值        |

 

```
<img src="URL" usemap="# map 名称" />
<map name="map 名称">
    <area shape="形状" coords="坐标值" href="URL" />
</map>
```

 

 

##### 11. HTML的特殊字符

- 某些字符在 HTML 中具有特殊意义,如大于号 (<) 定义 HTML 标签的开始
- 字符实体用于在 HTML 文档中插入特殊字符,如版权号 ,注册商标等
- 通常情况下,HTML会自动截去多余的空格。不管你加多少空格,都被看做一个空格。
- 比如你在两个字之间加了10个空格,HTML会截去9个空格,只保留一个。
- 为了在网页中增加空格,你可以使用``表示空格。

 

> HTML的特殊字符

|    属性     | 结构 |
| :---------: | :--: |
|    空格     |  ``  |
|   小于号    | `<`  |
|   大于号    | `>`  |
|    引号     | `"`  |
|   版权号    | `©`  |
|  注册商标   | `®`  |
|    商标     | `™`  |
|    乘号     | `×`  |
|    除号     | `÷`  |
|  元（yen）  | `¥`  |
| 镑（pound） | `£`  |
|    和号     | `&`  |

# HTML表格&列表&框架

> ## HTML表格
>
> 表格由 `<table>` 标签以及一个或多个 tr、th或td 元素组成 单元格可以包含文本、图片、列表、段落、表单、水平线、表格等等

 

|    属性     |           说明           |
| :---------: | :----------------------: |
|    width    |      指定表格的宽度      |
|   height    |        表格的高度        |
|   border    |    指定表格边框的宽度    |
| cellpadding | 指定边框与内容之间的空白 |
| cellspacing |   指定单元格之间的空白   |
|    align    |       指定对齐方式       |
|   valign    |       垂直排列方式       |
|   colspan   |       合并列单元格       |
|   rowspan   |       合并行单元格       |

 

```
<table border="1">
  <tr>
    <td>row 1, cell 1</td> <td>row 1, cell 2</td>
  </tr>
  <tr>
    <td>row 2, cell 1</td> <td>row 2, cell 2</td>
  </tr>
</table>

<table> 定义表格
<th> 定义表头
<tr> 定义表格的行
<td> 定义表格单元
```

 

------

 

> ## HTML列表
>
> 列表用来在网页上组织信息,HTML能够创建三种类型的列表:无序列表、有序列表、定义列表

- 无序列表

| 属性 |        属性值        |          说明          |
| :--: | :------------------: | :--------------------: |
| Type | disc、Circle、square | 用来设置项目前面的标记 |

 

```
<ul>
  <li>......</li>
  <li>......</li>
  <li>......</li>
</ul>
```

 

- 有序列表

| 属性  |      属性值      |          说明          |
| :---: | :--------------: | :--------------------: |
| Type  | 1、 a 、 A、i、I | 用来设置项目前面的标记 |
| start |       数值       |       从哪里开始       |

 

```
<ol>
  <li>......</li>
  <li>......</li>
  <li>......</li>
</ol>
```

 

- 定义列表

> 定义列表用来组织术语和它们的定义 任何信息如果包含多个术语和相对应的解释,都可以使用定义列表进行组织

 

```
<dl>
  <dt>HTML</dt>
  <dd>html 是超文本标记语言</dd>
  <dt>XHTML</dt>
  <dd>可扩展超文本置标语言 </dd>
  <dd>表现形式与超文本置标语言(HTML)类似,不过语法上更加严格 </dd>
</dl>
```

 

------

 

> ## HTML 背景

1. 设置背景颜色 `<body bgcolor="#000000">`
2. 设置背景图片 `<body background="bg.jpg">`
3. 设置网页的字颜色 `<body text="#cccccc">`

 

------

 

> ## HTML 框架

```
框架的作用就是把浏览器窗口划分成多个子窗口。 每个子窗口可以载入自的HTML文档
在HTML文档中 frameset 与body同级，只能存在一个
```

- 框架基本结构

| 属性 |            说明            |
| :--: | :------------------------: |
| rows |        上下分割窗口        |
| cols |        左右分割窗口        |
| src  | 指定要载入到框架的页面地址 |
| name |         框架的名称         |

```
<frameset rows="高度A,高度B">
    <frame src="top.html" />
    <frameset cols="宽度A,宽度B">
      <frame src="menu.html" />
      <frame src="main.html" />
    </frameset>
</frameset>
```

 

- frame框架标签

|     属性     |    属性值     |          说明          |
| :----------: | :-----------: | :--------------------: |
|  scrolling   | yes、no、auto |     是否显示滚动条     |
|   noresize   |      ...      | 禁止改变框架的尺寸大小 |
| marginwidth  |      px       |  框架内左右的空白区域  |
| marginheight |      px       |  框架内上下的空白区域  |
| frameborder  |      1,0      |      是否显示边框      |

```
<frame scrolling="yes" noresize />
<frame marginwidth="左右缩进" marginheight="上下缩进" />
```

- 内嵌框架iframe

|    属性     |   属性值    |      说明      |
| :---------: | :---------: | :------------: |
|    width    |    px,%     | 指定框架的宽度 |
|   height    |    px,%     | 指定框架的高度 |
|  scrolling  | yes,no,auto | 是否显示滚动条 |
| frameborder |     1,0     |  是否显示边框  |

 

```
<iframe src="URL" name="框架名"> ~ </iframe>
```

# HTML表单

 

> 表单是一个包含表单元素的区域。 表单能够包含 input 元素,textarea、select、fieldset、legend 和 label元素。 表单使用标签`(<form>)`定义。 表单用于向服务器传输数据。

 

- 表单的结构

|    属性    |                     说明                     |
| :--------: | :------------------------------------------: |
|    name    |                  表单的名称                  |
|   action   |                 表单提交地址                 |
|   method   |        表单数据提交的方式 (get ,post)        |
|  enctype   |                   MIME类型                   |
| novalidate | 规定当提交表单时不对表单数据（输入）进行验证 |

 

```
<form name="form1" action="URL" method="get">
    用户名:<input type="text" name="uname" />
    密 码:<input type="password" name="passwd" />
</form>
```

- input类型

|   类型   |                             说明                             |
| :------: | :----------------------------------------------------------: |
|  button  |     定义可点击的按钮（大多与 JavaScript 使用来启动脚本）     |
| checkbox |                         定义复选框。                         |
|  color   |                         定义拾色器。                         |
|   date   |              定义日期字段（带有 calendar 控件）              |
|  month   |            定义日期字段的月（带有 calendar 控件）            |
|   week   |            定义日期字段的周（带有 calendar 控件）            |
|   time   |          定义日期字段的时、分、秒（带有 time 控件）          |
|  email   |                定义用于 e-mail 地址的文本字段                |
|   file   |          定义输入字段和 "浏览..." 按钮，供文件上传           |
|  hidden  |                       定义隐藏输入字段                       |
|  image   | 定义图像作为提交按钮,必须把 src 属性 和 alt 属性 结合使用。  |
|  number  |               定义带有 spinner 控件的数字字段                |
| password |             定义密码字段。字段中的字符会被遮蔽。             |
|  radio   |                        定义单选按钮。                        |
|  range   |               定义带有 slider 控件的数字字段。               |
|  reset   |     定义重置按钮。重置按钮会将所有表单字段重置为初始值。     |
|  search  |                   定义用于搜索的文本字段。                   |
|  submit  |           定义提交按钮。提交按钮向服务器发送数据。           |
|   tel    |                 定义用于电话号码的文本字段。                 |
|   text   | 默认。定义单行输入字段，用户可在其中输入文本。默认是 20 个字符。 |
|   url    |                  定义用于 URL 的文本字段。                   |

 

```
<input type="button" value="普通按钮" />

<input type="checkbox" value="复选框" />

<input type="color" value="拾色器" />

<input type="date" value="" />

<input type="month" value="" />选择月份

<input type="week" value="" />选择周

<input type="time" value="" />选择时间

<input type="email" value="" />Email

<input type="file" value="" />文件类型

<input type="hidden" value="" />隐藏域

<input type="image" src="" alt="Submit" />选择图片

<input type="number" value="" />数字键盘

<input type="password" value="" />输入密码

<input type="radio" value="" />单选按钮

<input type="range" min="0" max="10" step="1" />选择范围

<input type="reset" value="重置" />表单重置按钮

<input type="search" value="" />用于搜索

<input type="submit" value="提交" /> 提交按钮

<input type="tel" value="" />电话号码字段

<input type="text" value="" />输入框

<input type="url" value="http://baidu.com" />输入连接
```

- input属性

|      属性      |                             说明                             |
| :------------: | :----------------------------------------------------------: |
|      type      |                        input元素类型                         |
|      name      |                       input元素的名称                        |
|     value      |                        input元素的值                         |
|      size      |                       input元素的宽度                        |
|    readonly    |                           是否只读                           |
|   maxlength    |                      输入字符的字符长度                      |
|    disabled    |                           是否禁用                           |
|   autofocus    |          属性规定当页面加载时按钮应当自动地获得焦点          |
|      form      |  位于 form 表单外的输入字段（但仍然属于 form 表单的一部分）  |
|    pattern     |   pattern 属性规定用于验证 `<input>` 元素的值的正则表达式    |
|  placeholder   |         属性规定可描述输入字段预期值的简短的提示信息         |
|      list      | list 属性引用 `<datalist>` 元素，其中包含 `<input>` 元素的预定义选项 |
| min, max, step | 最小值,最大值,如果 step="3"，则合法数字应该是 -3、0、3、6，以此类推 |
|    multiple    |                  可接受多个值的文件上传字段                  |
|    required    |                             必填                             |

 

```
<input type="text" readonly />

<input type="text" maxlength />

<input type="text" disabled />

<input type=text autofocus />

---form---
<form action="demo_form.html" id="form1">
First name: <input type="text" name="fname"><br>
<input type="submit" value="Submit">
</form>

Last name: <input type="text" name="lname" form="form1">


---pattern---
<form action="demo_form.html">
Country code: <input type="text" name="country_code" pattern="[A-Za-z]{3}" title="Three letter country code">
<input type="submit">
</form>

---list---
<form action="demo-form.php" method="get">
<input list="browsers" name="browser">
<datalist id="browsers">
  <option value="Internet Explorer">
  <option value="Firefox">
  <option value="Chrome">
  <option value="Opera">
  <option value="Safari">
</datalist>
<input type="submit">
</form>


---min, max, step---
<input type="number" name="quantity" step="2" min="1" max="6">


---multiple---
选择图片: <input type="file" name="img" multiple>


---require---
<input type="text" name="usrname" required>
```

- textarea(多行文本框)

| 属性 |       说明       |
| :--: | :--------------: |
| name |    元素的名称    |
| rows | 指定文本框的高度 |
| cols | 指定文本框的宽度 |

```
<textarea name="content" rows="5" cols="50"> </textarea>
```

- select(下拉列表框)

|   属性   |         说明         |
| :------: | :------------------: |
|   name   |   下拉列表框的名称   |
|   size   | 下拉列表框的显示行数 |
| multiple |       是否多选       |
| disabled |       是否禁用       |
| selected |  设置默认选中的选项  |
|  value   |       选项的值       |

```
<select name="city">
  <option value="0">请选择</option>
  <option value="bj">北京</option>
  <option value="gz">广州</option>
</select>
```

- optgroup(用于组合选项的标签)

| 属性  |       说明       |
| :---: | :--------------: |
| label | 指定组合选项名称 |

 

```
<select name="city">
  <option value="0">请选择</option>
  <optgroup label="主要城市">
      <option value="bj">北京</option>
      <option value="gz">广州</option>
  </optgroup>
</select>
```

- fieldset(组合标签)

```
<fieldset>
  <legend>基本资料</legend>
  <form></form>
</fieldset>
```

- lable

> lable标签的作用是将输入项或选项及其标签文字关联起来

```
<input type="radio" name="sex" value="1" id="male" />
<label for="male">男</label>
<input type="radio" name="sex" value="0" id="female" />
<label for="female">女</label>
```

# HTML5新增标签

> ## head设置页面头信息

```
设置页面标题
    <title> ~ </title>

设置页面编码:
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

    utf-8 多国语言编码
    gb2312 中文简体编码

设置页面关键字,内容介绍
    <meta name="keywords" content="关键字1,关键字2,..." />
    <meta name="description" content="关键字1,关键字2,..." />
    <meta name="author" content="mycodewind，mycodewind@qq.com">
    <meta name="copyright" content="本网站版权归XXXXX所有">
```

 

> ## audio音频标签

```
1.标签定义及使用说明

 <audio> 标签定义声音，比如音乐或其他音频流。
目前，<audio> 元素支持的3种文件格式：MP3、Wav、Ogg。

2. 浏览器支持

   IE 9+、Firefox、Opera、Chrome 和 Safari 都支持 <audio> 标签。
   注释： IE 8 或更早版本的 IE 浏览器不支持 <audio> 标签。

3.属性
    Autoplay:如果出现该属性，则音频在就绪后马上播放  autoplay=”autoplay”
    Controls:如果出现该属性，则向用户显示音频控件 controls=”controls”
    Loop:如果出现该属性，则每当音频结束时重新开始播放 loop=”loop”

4. 实例
<audio controls>
  <source src="horse.ogg" type="audio/ogg">
  <source src="horse.mp3" type="audio/mpeg">
  <source src="horse.wav" type="audio/wav">
  您的浏览器不支持 audio 元素。
</audio>
```

 

> ## video标签将视频作为页面背景

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        body{
            margin:0;
        }

        video{
            position: fixed;
            right:0;
            bottom:0;
            min-width:100%;
            min-height:100%;
            width:auto;
            height:auto;
            z-index:-1000;
            /* -webkit-filter: grayscale(100%); */
        }
    </style>
</head>
<body>
    <video autoplay id="background" muted>
        <source src="./80s.mp4" />
    </video>
</body>
</html>
<script>
    //获取id为background的元素
    var background = document.getElementById("background");

    //将视频速度调慢
    background.playbackRate = 0.5;
</script>
```

 

> ## div布局容器标签

```
div 与其它标签一样,也是一个XHTML所支持的标签     
  div 是XHTML中指定的,专门用于布局设计的容器标签       
  在css布局方式中,div是这种布局方式的核心对象,我们的页面排版不再依赖于表格       
  仅从div的使用上说,做一个简单的布局只需要两样东西:div与css       
  因此我们称这种布局方式为 div + css 布局       

  <div id="header">页面头部</div>

  <div id="content">
      <div id="left"></div> 
      <div id="right"></div>
  </div>

  <div id="footer">页脚</div>
```

 

> ## span区块标签

```
1.标签定义及使用说明
<span> 用于对文档中的行内元素进行组合。
<span> 标签没有固定的格式表现。当对它应用样式时，它才会产生视觉上的变化。
如果不对 <span> 应用样式，那么 <span> 元素中的文本与其他文本不会任何视觉上的差异。
<span> 标签提供了一种将文本的一部分或者文档的一部分独立出来的方式。

实例：
<p>我的母亲有 <span style="color:blue">蓝色</span> 的眼睛。</p>
```

 

> ## header头部标签

```
1.标签定义及使用说明

<header> 标签定义文档或者文档的一部分区域的页眉。
<header> 元素应该作为介绍内容或者导航链接栏的容器。
在一个文档中，您可以定义多个 <header> 元素。
注释：<header> 标签不能被放在 <footer>、<address> 或者另一个 <header> 元素内部。

1. 浏览器支持
 IE 9、Firefox、Opera、Chrome 和 Safari 支持 <header> 标签。
  注释：IE 8 或更早版本的 IE 浏览器不支持 <header> 标签。

3. 实例
<article>
  <header>
    <h1>Internet Explorer 9</h1>
    <p><time pubdate datetime="2011-03-15"></time></p>
  </header>
  <p>Windows Internet Explorer 9 (abbreviated as IE9) was released to
  the  public on March 14, 2011 at 21:00 PDT.....</p>
</article>
```

 

> ## footer底部标签

```
1.标签定义及使用说明

<footer> 标签定义文档或者文档的一部分区域的页脚。
<footer> 元素应该包含它所包含的元素的信息。
在典型情况下，该元素会包含文档创作者的姓名、文档的版权信息、使用条款的链接、联系信息等等。
在一个文档中，您可以定义多个 <footer> 元素。

2. 浏览器支持
IE 9、Firefox、Opera、Chrome 和 Safari 支持 <footer> 标签。
注释：IE 8 或更早版本的 IE 浏览器不支持 <footer> 标签。

3. 实例
<footer>
  <p>Posted by: Hege Refsnes</p>
  <p><time pubdate datetime="2012-03-01"></time></p>
</footer>
```

 

> ## nav导航元素

```
1.标签定义及使用说明

表示页面中导航链接的部分，例如：传统导航条，侧边栏导航，页内导航，翻页等
<nav> 标签定义导航链接的部分。
并不是所有的 HTML 文档都要使用到 <nav> 元素。<nav> 元素只是作为标注一个导航链接的区域。
在不同设备上（手机或者PC）可以制定导航链接是否显示，以适应不同屏幕的需求。

1. 浏览器支持
目前大多数浏览器支持 <nav> 标签。

3. 实例
<nav>
  <a href="/html/">HTML</a> |
  <a href="/css/">CSS</a> |
  <a href="/js/">JavaScript</a> |
  <a href="/jquery/">jQuery</a>
</nav>
```

 

> ## base标签

```
1.标签定义及使用说明
<base> 标签为页面上的所有的相对链接规定默认 URL 或默认目标。
在一个文档中，最多能使用一个 <base> 元素。
<base> 标签必须位于 <head> 元素内部。

2.浏览器支持
所有主流浏览器都支持 <base> 标签。

3.实例
<head>
    <base href="/Volumes/dancework/html/images/">
</head>
<body>
    <!--/Volumes/dancework/html/images/cover.jpg-->
    <img src="cover.jpg" />
</body>
```

