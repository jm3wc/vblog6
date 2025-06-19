# Javascript基础

> Javascipt是一种动态、弱类型、基于原型的脚本语言，由web浏览器进行解释和执行

 

## Javascript的组成

1. ECMAScript : 核心 (描述了javascript组成语言的语法和基本对象)
2. DOM : 文档对象模型 (描述处理网页内容的方法和接口)
3. BOM : 浏览器对象模型 (描述与浏览器进行交互的方法和接口)

 

------

 

 

## Javascript应用到网页的几种方式

> 方法一：将javascript代码插入html文档
>
> 部分的标签中`<script>`

```
<head>
    <script type=“text/javascript”>
      //javascript 代码
      alert(‘hello world’);
    </script>
</head>
```

 

> 方法二：将javascript代码存放在一个独立的文件。

```
test.js
alert(‘hello wordld’);


test.html
<head>
  <script type=“text/javascript”src=“test.js”></script>
</head>
```

 

------

 

 

## JS注释

```
//          单行注释     
/* …*/      多行注释
```

 

## JS定义变量

> 变量由 var 运算符加变量名定义

```
var age = 25;     
var mood = ‘happy’;
```

 

## JS拼接

```
当+存在于变量与字符串中间位置的时候就代表是拼接或者连接的作用    
+= 代表什么意思 var a = 1;  a += 3; a = a+3;  给当前这个变量增加多少
```

------

 

## JS变量的命名有哪些规则

```
1. 第一个字符必须是字母、下划线(_)、或美元符号 ($); 

2. 变量名中不能包含空格或标点符号（$ 除外);

3. 变量名区分大小写;       

4. 不能使用保留字、关键字  

4. 为了让变量名有更好的可读性，可以在变量名中适当的插入下划线分隔，       
如：var my_mood = ‘happy’; 

5.使用驼峰命名法(大驼峰,小驼峰)或者匈牙利命名法

[1]小驼峰式命名法（lower camel case）：
第一个单字以小写字母开始；第二个单字的首字母大写，
例如：firstName、lastName。

[2]大驼峰式命名法（upper camel case）：
每一个单字的首字母都采用大写字母，
例如：FirstName、LastName、CamelCase。

[3]匈牙利命名法:
变量名＝数据类型+对象描述
数据类型：指点是JavaScript中六种数据类型之一,undefined、null、boolean、number、string和Object
对象描述：指对象名字全称或名字的一部分，而且要有明确含义，易记而且还要好理解
案例：
var aPerson = []; // Array数组
var oBtn = document.getElementById('btn'); //Object对象
var fnName = function () {}; // function函数
var sName = "alanScott"; // string字符串


6.JavaScript变量名中代表数据类型都有对应的字线，如下所示：

s: 表示字符串String
i: 表示整型Int(它是Number中的整数类型)
fl: 表示浮点Float(它是Number中的小数类型)
b: 表示布尔Boolean
a: 表示数组Array
o: 表示对象Object
fn: 表示函数Function
re: 表示正则Regular Expression
```

## JS关键字保留字汇总

```
关键字大全：
    break    do  instanceof  typeof
    case     else    new     var
    catch    finally     return  void
    continue     for     switch  while
    debugger    function    this    with
    default  if  throw   delete
    in   try

保留字大全：
    abstract     enum    int     short
    boolean  export  interface   static
    byte     extends     long    super
    char     final   native  synchronized
    class    float   package     throws
    const    goto    private     transient
    debugger     implements  protected   volatile
    double   import  public
```

 

------

 

 

## JS常见的数据类型

1. 字符串(String)
2. 数值 (Number)
3. 布尔类型 (Boolean)
4. 数组(Array)
5. 对象(Object)
6. undefined
7. NULL

 

```
1.字符串(String)
  字符串由零个或多个字符构成，字符包括字母，数字，标点符号和空格;
  字符串必须放在引号里（单引号或双引号）;
  var mood = “happy”;
  var mood = ‘happy’;



2.数值(Number)
  var age = 25;
  var price = 33.25; 



3.布尔类型 (Boolean)
  布尔型数据只能有两种种值 true 和 false;
  var married = true;
  var married = false;
  与字符串不同，不要把布尔值用引号括起来。
  布尔值 false 与 字符串 "false"是两回事。



4.数组(Array)
  我们的变量一般都只能存储一个内容 所以它其实是一个单一的容器
  我们的数组一般可以存一个或者是多个值 ，所以数组是一个大的容器

  组成部分:
    数组其实是由多个 (键-值) 所组成的一个多容器
    数组的索引 默认是从0开始的

  定义数组
    var arr = new Array(23,23,45,56,435);
    var arr2 = [23,34,546];
    var arr3 = new Array();
    arr3[0] = 234;
    arr3[1] = 234;



5.对象(Object)
  对象由花括号分隔。在括号内部，对象的属性以名称和值对的形式 (name : value) 来定义。
  属性由逗号分隔.
  var person={firstname:"Bill", lastname:"Gates", id:5566};
  上面例子中的对象 (person) 有三个属性：firstname、lastname 以及 id



6.Undefined 
  在 JavaScript 中, undefined 是一个没有设置值的变量。
  typeof 一个没有值的变量会返回 undefined。
  var person = undefined;    
  你可以设置为 undefined 来清空对象



7.NULL
  在 JavaScript 中 null 表示 "什么都没有"。
  null是一个只有一个值的特殊类型。表示一个空对象引用。
  var person = null;        
  你可以设置为 null 来清空对象


  Undefined 和 Null 的区别
  typeof undefined             // undefined
  typeof null                  // object
  null === undefined           // false
  null == undefined            // true
```

 

------

 

 

## JS查看数据类型

```
var mood = "happy";
alert(typeof mood);
alert(typeof 95);
```

## 转换成字符串

```
var married = false;
alert(married.toString());  // outputs "false"

var age = 25;
alert(age.toString());  //outputs "25"
```

## 转换成数字

|     函数     |     说明     |
| :----------: | :----------: |
|  parseInt()  |  转换成整数  |
| parseFloat() | 转换成浮点数 |

```
var test = parseInt("blue");    //returns NaN
var test = parseInt("1234blue");    //returns 1234
var test = parseInt("22.5");    //returns 22
var test = parseInt("asd23434");  //returns NaN
var test = parseFloat("1234blue");  //returns 1234
var test = parseFloat("22.5");    //returns 22.5

var a = "23";
var b = 1;
alert(a+b); //231 这个例子说明 如果不是同种类型的话 那么+代表的是拼接的意思
alert(a-b); //22这个例子说明除了+这种特殊的运算方式以外即使是不同类型那么也能够进行运算
```

## 运算符

> 算术运算符 + - * / %

```
var total = (1 + 4) * 5;
var i = 100;
var temp = (i – 20) / 2;
alert(“10”+ 20)   //return 1020;
alert(10 + 20)    //return 30;
```

## 赋值运算符

```
var x = 10;
var y =5;
x+=y;      //x=x+y
x-=y;        //x=x-y
x*=y;        //x=x*y
x/=y;        //x=x/y
x%=y;        //x=x%y
console.log(x);
```

## 后增量/后减量运算符 ++/-- 先赋值 在自增

```
var i = 10;
var a = i++;    // i = i + 1;
alert(a);
```

## 前增量/前减量运算符 ++/-- 先自增 在赋值

```
var i = 10;
var a = ++i;    // i = i + 1;
alert(a);
```

## 比较运算符 (>, <, >=, <=, ==, !=)

```
alert ( 10 > 5 );       //outputs  true
var i = 100;
var n = 100;
alert(i == n);          //outputs true;
alert(i != n);          //outputs false;
alert(i === n)         //数据类型，值相等
```

## 逻辑运算符

```
&& ：逻辑与     
|| : 逻辑或     
！ ：逻辑非  

var i = 8;
alert ( i<5 && i<10);           //outputs false
alert ( i > 100 || i < 10);     //outputs true
alert(!(10 > 5));             //outputs false
```

## 逻辑短路

```
逻辑与短路
var a = 5 && 6;
console.log(a); //返回的结果为 6

var a = false && 6;
console.log(a); //返回的结果为 false

逻辑或短路
var a = false || 6;
console.log(a); //返回的结果为 6

var a = true || 6;
console.log(a); //返回的结果为 true
```

## 三元运算符

```
如名字表示的三元运算符需要三个操作数。

语法是 条件 ? 结果1 : 结果2;
这里你把条件写在问号(?)的前面后面跟着用冒号(:)分隔的结果1和结果2。满足条件时结果1否则结果2

var a = 5;
var b = 3;

var res = a>b?"真":"假";
console.log(res);
```

 

------

 

## 程序流程控制

1.条件语句

```
if(10 > 5) {
  alert(“hello world”);
}

var i = 90;
if(i > 100){
 alert(i + “大于100”);
}else if(i > 80) {
 alert(i + “大于80”);
}else{
 alert(i + “小于100”);
}
```

2.Switch 语句

```
Switch 语句相当于条件判断的变种方式 或者是另外的一种形式
var i = 25;
switch(i){
  case 25:
  case 100:
      alert(100);
      break;
  default:
        alert(‘other’);
 }
```

## 循环语句

#### while

> while(条件){需执行的代码}

```
var i = 1;
while(i < 3){
  alert(i);
  i++;
}
```

#### Do…while

> do { 需执行的代码 } while (变量<=结束值)

```
var i = 1;
do {
  alert(i);
  i++;
}while(i < 3);
```

#### for 循环语句

```
for(var count = 1; count < 11; count++){
  alert(count);
}
```

#### forEach 循环语句

```
var arryAll = [];  
arryAll.push(1);  
arryAll.push(2);  
arryAll.push(3);  
arryAll.push(4);  

//匿名方式
arryAll.forEach(function(e){  
    console.log(e);  
})  

function t1(arg){
    console.log(arg);
}

//非匿名方式
arryAll.forEach(t1);
```

#### for...in 循环语句

```
for...in 语句用于遍历数组或者对象的属性（对数组或者对象的属性进行循环操作）

var x
var mycars = new Array()
mycars[0] = "Saab"
mycars[1] = "Volvo"
mycars[2] = "BMW"

for (x in mycars)
{
    document.write(mycars[x] + "<br />")
}
```

#### for...of 循环语句

```
var arr = ['小明','张三','小红','小兰'];

for(var item of arr)
{
    console.log(item)
}
```

 

------

 

 

## break和continue有什么区别？

1. break 语句可以立即退出循环;
2. continue 语句只是退出当前循环;

#### break语句

```
var n = 0;
for(var i=1; i < 10; i++){
  if( i > 5){
     break;
  }
  n++;
}
alert(n);
```

#### continue语句

```
var n = 0;
for(var i = 1; i < 10; i++){
  if(i == 4){
      continue;
  }
  n++;
}
alert(n);
```

# Javascript函数

## 什么是函数？

> 函数就是完成某个功能的一组语句，函数由关键字 `function` 函数名加一组参数定义
>
> 函数在定义后可以被重复调用，通常将常用的功能写成一个函数
>
> 利用函数可以使代码的组织结构更多清晰

```
function say_hello (name, msg){
      alert("hello"+ name + ":"+ msg);
}

say_hello(“david”, “how are you today?”);
```

 

## 如何定义一个函数？

```
定义函数的方法有很多种：
1、函数声明
function sum1(n1,n2)
{
    console.log(n1+n2);
}
sum1(1,2);  //3

2、函数表达式（存储在变量中）
var sum2 = function(n1,n2)
{
    console.log(n1+n2);
}

sum2(1,2);    //3
```

 

## 函数重构

```
function demo()
{
    console.log('js函数');
}

demo();        

function demo()
{
    console.log('覆盖的js函数');
}

demo();
```

 

## 使用 return 语句从函数返回值

```
function sum (num1, num2){
   return num1 + num2;
}

var s = sum(1, 2);
alert(s);

注意：
位于return 语句之后的任何代码都永远不会执行！
在JavaScript中，不一定要指定返回值！
```

## 函数参数设置默认值

```
function sum (a=1, b=2)
{
  return a + b;
}

console.log(sum());
console.log(sum(10));
console.log(sum(10,20));
```

## 函数参数总数获取

```
function demo(a,b,c,d)
{
    return 1;
}

console.log(demo.length);
```

## 什么是全局变量？什么是局部变量？

1. 变量既可以是全局，也可以是局部的
2. 全局变量：可以在脚本中的任何位置被引用，一旦你在某个脚本里声明了全局变量,你就可以在这个脚本的任何位置（包括函数内部）引用它,全局变量的作用域是整个脚本;
3. 局部变量：只存在于对它做出声明的函数内部,在函数的外部无法相用它,局部变量的作用域仅限于函数内部

```
var global = "global";//全局变量
function test()
{
　　var local="local"; //局部变量
　　global2="global2"; //全局变量
}

在函数外用var声明的变量一般就是全局变量
定义在函数当中，但是没有用var声明的是全局变量
定义在函数当中，用var声明的是局部变量
```

## 递归函数

```
递归函数：在函数里面调用自己 从而实现循环的效果

function test(num)
{
  if(num == 0 || num == 1){
        return 1;
  }
  return num*test(num-1);
}
document.write("5的阶乘为:"+test(5));
```

## 回调函数

```
在js当中我们可能会常常见到一种函数叫做回调函数，回调函数一般在执行完一些操作后所调用的函数.

function A(callback) {
    callback('stuff', 'goes', 'here');
}

function B(a, b, c) {
    console.log(a + " " + b + " " + c);
}

A(B);   //B就是我们的回调函数
```

 

## 闭包函数

```
闭包就是一个函数能够访问其函数外部作用域中的变量。
简单来说闭包就是定义在函数体内部的函数。

闭包的三大特点为：
    1、函数嵌套函数
    2、内部函数可以访问外部函数的变量
    3、参数和变量不会被回收。

代码结构：
function test() 
{
    var a = 1;
    return function () 
    {
        console.log(a);
    }
}
var demo = test();
demo();
```

## 立即调用的函数表达式

```
(function(){ /* code */ })();

这种写法都是以圆括号开头，引擎就会认为后面跟的是一个表示式，而不是函数定义。
所以就避免了错误，这就叫做“立即调用的函数表达式”

var i = function(){ return 10; }();
console.log(i)
```

## eval

```
eval 接受一个字符串类型的参数，将这个字符串作为代码在上下文环境中执行，并返回执行的结果

var i = 1;
eval("i = i + 1");
eval("alert(i);");
```

# DOM模型用法

### 模型概述

> DOM (document object model) 文档对象模型

### DOM节点

```
1.元素节点     与HTML标签挂钩
2.文本节点     与HTML标签内容挂钩
3.属性节点     与HTML标签的属性挂钩 同时也包含css属性
```

![dom](http://web.wdwangke.com/mdphoto/base/js/dom2.png)

### 查找节点

```
//通过id获取元素
console.log(document.getElementById("demo"));

//通过name属性获取元素
console.log(document.getElementsByName("demo"));

//通过class属性获取元素
console.log(document.getElementsByClassName("demo"));

//通过标签名称获取元素
console.log(document.getElementsByTagName("input"));

//通过css选择符获取元素获取单个
console.log(document.querySelector(".demo"));

//通过css选择符获取元素获取全部
console.log(document.querySelectorAll(".demo"));

//只能在 HTML 输出流中使用 document.write，在文档已加载后使用它（比如在函数中），会覆盖整个文档
document.write('hello world');
```

### 文本内容操作

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>
    <div id="demo2">hello world <i>斜体</i><u>下划线</u></div>
</body>
</html>
<script>
  var demo2 = document.getElementById("demo2");

  //innerHTML 可以获取该元素的内容包括html标签
  console.log(demo2.innerHTML);

  //innerText 可以获取该元素的内容不包括html标签
  console.log(demo2.innerText);

  //返回内容的长度
  console.log(demo2.innerHTML.length);
</script>
```

### 样式操作

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        #demo1, .demo2{
            width: 300px;
            height: 200px;
            border: 1px solid #cccc;
        }
        .blue{
            color: violet;
        }
        .fb{
            background-color: yellowgreen;
        }
        .blueblue {
            color: darkgoldenrod;
        }
    </style>
</head>
<body>
    <div id="demo1">我是第一行的内容</div>
    <div class="demo2">我是第二行的内容</div>
</body>
</html>
<script>
    (function() {
        var element = document.getElementById('demo1')
        // 一、直接设置style的属性
        element.style.height = '100px';
        element.style['text-align'] = 'center';

        // 二、改变class
        element.className = 'blue';
        element.className += 'blue fb';
    })();

</script>
```

### 属性操作

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>
    <div id="demo" data-name="demo">测试DIV</div>
</body>
</html>
<script>
    var demo = document.getElementById("demo");

    // attributes 获取元素的所有属性
    console.log(demo.attributes);

    //setAttribute 设置属性
    demo.setAttribute("class","demo");

    //getAttribute 获取属性
    console.log(demo.getAttribute("class"));

    //hasAttribute 返回一个布尔值，表示当前元素节点是否包含指定属性。
    console.log(demo.hasAttribute("class"));

    //removeAttribute 用于从当前元素节点移除属性。
    demo.removeAttribute("class");

    //dataset 属性 用户获取 html5指定的 data-* 属性
    console.log(demo.dataset);
</script>
```

### 盒模型相关属性

![dom](http://web.wdwangke.com/mdphoto/base/js/box.png)

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>
  <div id="demo" class="demo">测试DIV</div>
  <div id="demo2" class="demo">测试DIV-2</div>
  <div id="demo3" class="demo">测试DIV-3</div>
  <div id="demo4" class="demo">测试DIV-4</div>
</body>
</html>
<script>
  // 返回元素节点可见部分的高度
  console.log(demo.clientHeight);

  // 返回元素节点可见部分的宽度
  console.log(demo.clientWidth);

  // 等于元素节点左边框（left border）的宽度
  console.log(demo.clientLeft);

  // 等于网页元素顶部边框的宽度
  console.log(demo.clientTop);

  // 返回某个网页元素的总高度
  console.log(document.documentElement.scrollHeight);

  // 返回总宽度
  console.log(document.documentElement.scrollWidth);

  // 表示网页元素的水平滚动条向右侧滚动的像素数量
  document.body.onscroll = function () {
        console.log(document.documentElement.scrollLeft)
  };

  // 表示网页元素的垂直滚动条向下滚动的像素数量。对于那些没有滚动条的网页元素，这两个属性总是等于0。
   document.body.onscroll = function () {
        console.log(document.documentElement.scrollTop)
  };
</script>
```

### Javascript事件

```
JavaScript和HTML之间的交互是通过用户和浏览器操作页面时引发的事件来处理的
页面载入完成时，会触发一个事件。用户点击按钮时，点击也是一个事件。

绑定事件的两种方式！

直接绑定
  <img src="01.jpg" onclick="alert('触发事件');" />

间接绑定
  document.getElementById('demo').onclick = function()
  {
      alert('触发事件')
  }
```

### 事件类型

> 鼠标事件

|   事件名   |                    描述                    |
| :--------: | :----------------------------------------: |
|   click    |              当鼠标点击时触发              |
|  dblclick  |              当鼠标双击时触发              |
| mouseover  |        当鼠标指针移动到元素上时触发        |
|  mouseout  |          当鼠标指针移出元素时触发          |
| mouseenter | 当鼠标指针移动到元素上时触发（不支持冒泡） |
| mouseleave |  当鼠标指针移出元素上时触发（不支持冒泡）  |
| mousemove  |        当鼠标指针移动到元素上时触发        |
| mousedown  |         当元素上按下鼠标按钮时触发         |
|  mouseup   |        当在元素上释放鼠标按钮时触发        |
| mousewheel |      当鼠标滚轮正在被滚动时运行的脚本      |
|   scroll   |       当元素滚动条被滚动时运行的脚本       |

> 键盘事件

|  事件名  |           描述           |
| :------: | :----------------------: |
| keydown  |    某个键盘按键被按下    |
| keypress | 某个键盘按键被按下并松开 |
|  keyup   |    某个键盘按键被松开    |

> 表单事件

|  事件名  |                      描述                       |
| :------: | :---------------------------------------------: |
|   blur   |            元素失去焦点时运行的脚本             |
|  focus   |               元素获取焦点时触发                |
| focusout |             元素即将失去焦点时触发              |
|  change  |           在元素值被改变时运行的脚本            |
|  input   |   代替`keyup`、`keydown` 再输入的时候就会触发   |
|  reset   |                 表单重置时触发                  |
|  submit  |                 表单提交时触发                  |
|  select  | 用户选取文本时触发 ( `<input>` 和 `<textarea>`) |

> 剪贴板事件

| 事件名 |              描述              |
| :----: | :----------------------------: |
|  copy  | 该事件在用户拷贝元素内容时触发 |
|  cut   | 该事件在用户剪切元素内容时触发 |
| paste  | 该事件在用户粘贴元素内容时触发 |

> 触摸事件

|   事件名    |           作用            |
| :---------: | :-----------------------: |
| touchstart  |      手指按到屏幕上       |
|  touchmove  |     手指在屏幕上滑动      |
|  touchend   |       手指离开屏幕        |
| touchcancle | 特殊情况下关闭/退出时触发 |

> 拖动事件

|  事件名   |                 作用                 |
| :-------: | :----------------------------------: |
|   drag    |      该事件在元素正在拖动时触发      |
|  dragend  |   该事件在用户完成元素的拖动时触发   |
| dragenter | 该事件在拖动的元素进入放置目标时触发 |
| dragleave |  该事件在拖动元素离开放置目标时触发  |
| dragover  |  该事件在拖动元素在放置目标上时触发  |
| dragstart |    该事件在用户开始拖动元素时触发    |
|   drop    | 该事件在拖动元素放置在目标区域时触发 |

### 事件监听

```
<input type="button" value="test1" id="btn1" />

<script>
  var btn1 = document.getElementById("btn1");
  var count = 0;

  var handle1 = function () {
    alert(count++);
    if (count == 3) 
    {
      alert("事件结束")
      btn1.removeEventListener("click", handle1, false);
    }
  }

  btn1.addEventListener('click', handle1, false);
</script>
```

### 事件冒泡、捕获、代理

```
事件捕获：父级元素先触发，子集元素后触发
事件冒泡：子集元素先触发，父级元素后触发
```

> 事件冒泡

```
<html lang="zh-cn">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <title>js事件机制</title>
  <style>
    #parent{
            width: 200px;
            height:200px;
            text-align: center;
            line-height: 3;
            background: green;
        }
        #child{
            width: 100px;
            height: 100px;
            margin: 0 auto;
            background: orange;
        }
    </style>
</head>

<body>
  <div id="parent">
    父元素
    <div id="child">
      子元素
    </div>
  </div>
  <script type="text/javascript">
    var parent = document.getElementById("parent");
    var child = document.getElementById("child");

    document.body.addEventListener("click", function (e) {
      console.log("click-body");
    }, false);

    parent.addEventListener("click", function (e) {
      console.log("click-parent");
    }, false);

    child.addEventListener("click", function (e) {
      console.log("click-child");
    }, false);
  </script>
</body>
</html>
```

> 事件捕获

```
<html lang="zh-cn">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <title>js事件机制</title>
  <style>
    #parent{
            width: 200px;
            height:200px;
            text-align: center;
            line-height: 3;
            background: green;
        }
        #child{
            width: 100px;
            height: 100px;
            margin: 0 auto;
            background: orange;
        }
    </style>
</head>

<body>
  <div id="parent">
    父元素
    <div id="child">
      子元素
    </div>
  </div>
  <script type="text/javascript">
    var parent = document.getElementById("parent");
    var child = document.getElementById("child");

    document.body.addEventListener("click", function (e) {
      console.log("click-body");
    }, false);

    parent.addEventListener("click", function (e) {
      console.log("click-parent---事件传播");
    }, false);

    //新增事件捕获事件代码
    parent.addEventListener("click", function (e) {
      console.log("click-parent--事件捕获");
    }, true);

    child.addEventListener("click", function (e) {
      console.log("click-child");
    }, false);
  </script>
</body>
</html>
```

### 事件的代理/委托原理

```
事件委托是指将事件绑定目标元素的到父元素上，利用冒泡机制触发该事件

优点：
    可以减少事件注册，节省大量内存占用
    可以将事件应用于动态添加的子元素上

缺点：
    使用不当会造成事件在不应该触发时触发
<html lang="zh-cn">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <title>js事件机制</title>
  <style>
    #parent{
            width: 200px;
            height:200px;
            text-align: center;
            line-height: 3;
            background: green;
        }
        #child{
            width: 100px;
            height: 100px;
            margin: 0 auto;
            background: orange;
        }
    </style>
</head>

<body>
  <div id="parent">
    父元素
    <div id="child">
      子元素
    </div>
  </div>
  <script type="text/javascript">
    var parent = document.getElementById("parent");
    var child = document.getElementById("child");
    parent.onclick = function (e) {
      if (e.target.id == "child") {
        console.log("您点击了child元素")
      }
    }
  </script>
</body>
</html>
```

### 阻止事件冒泡、事件捕获

```
<!DOCTYPE html>
<html lang="en" onclick="alert('html')">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <script src="https://cdn.bootcss.com/jquery/1.12.2/jquery.min.js"></script>
  <title>Document</title>
</head>

<body onclick="alert('body')">
  <!--html-->
  <div style="width:400px; height:400px; background:red" onclick="alert(this.style.background)">
    <div id="div2" style="width:300px; height:300px; background:palevioletred">
      <div style="width:200px; height:200px; background:yellow" onclick="alert(this.style.background)">
        <div id="div1" style="width:100px; height:100px; background:palegreen">
          <a id="aaa" href="http://www.baidu.com">aaa</a>
        </div>
      </div>
    </div>
  </div>

  <script>
    //此jquery既阻止默认行为又停止冒泡
    // $("#div1").on('click',function(){
    //     return false;
    // });

    window.onload = function () {
      var oDiv1 = document.getElementById('div1');
      var oDiv2 = document.getElementById('div2');

      oDiv1.onclick = function (ev) {
        var oEvent = ev || event;
        alert("this is div1");

        //js阻止事件冒泡
        oEvent.cancelBubble = true;
        oEvent.stopPropagation();

        //js阻止链接默认行为，没有停止冒泡
        oEvent.preventDefault(); 
        return false;
      }

      oDiv2.onclick = function (ev) {
        var oEvent = ev || event;
        alert("this is div2");
        oEvent.cancelBubble = true;
      }
    }
  </script>
</body>

</html>
```

# BOM

> BOM : Browser Object Model 浏览器对象模型

### Window对象

```
alert("系统提示框");
confirm("确认对话框");
prompt("输入对话框");
```

### Location对象

```
Location 对象包含有关当前 URL 的信息
Location 对象是 window 对象的一部分，可通过 window.Location 属性对其进行访问

document.write(location.href) // 返回完整的URL
location.reload() // 重新载入当前文档
```

### History对象

```
history对象是window对象的子对象，对应于浏览器的历史记录

window.history.go(-1);
window.history.go(1);

history.back();
history.forward();
```

### 定时器

```
window.setInterval();   设置循环定时器
      var T = window.setInterval(test,1000);

window.clearInterval();  清除循环定时器
      window.clearInterval(T);

window.setTimeout();    设置单次定时器
      var T = setTimeout(test,1000);

window.clearTimeout()    清除单次定时器
      clearTimeout();
```

### 本地存储

```
// localStorage 永久存储
//设置缓存
localStorage.setItem('username', '张三')

//获取
console.log(localStorage.getItem('username'))

//删除指定key
localStorage.removeItem('username')

//清空
localStorage.clear()

// sessionStorage 关闭浏览器就没有了
sessionStorage.setItem('username', '李四')
console.log(sessionStorage.getItem('username'))
sessionStorage.removeItem('username')
sessionStorage.clear()
```

### Cookie缓存对象

> Cookie 是服务器保存在浏览器的一小段文本信息，每个 Cookie 的大小一般不能超过4KB。浏览器每次向服务器发出请求，就会自动附上这段信息

- Cookie 保存以下几方面的信息
  - Cookie的名字
  - Cookie的值
  - 到期时间
  - 所属域名（默认是当前域名）
  - 生效的路径（默认是当前网址

```
//设置cookie
document.cookie = 'username=张三';

// 获取cookie
console.log(document.cookie)

//删除cookie
document.cookie = 'username=; max-age=0';
```

### Cookie封装

> cookie.html

```
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>cookie example</title>
    </head>
    <body>
        <script type="text/javascript" src="cookie.js" ></script>
        <script type="text/javascript">
            console.log('----------cookie对象-------------');
            console.log(cookie);

            console.log('----------对象-------------');
            console.log(cookie.getCookies());

            console.log('----------设置cookie-------------');
            console.log(cookie.set('name', 'wlh'));

            console.log('----------设置cookie 123-------------');
            console.log(cookie.set('name', 'wlh123'));

            console.log('----------设置cookie age-------------');
            console.log(cookie.set('age', 20));

            console.log('----------获取cookie-------------');
            console.log(cookie.get('name'));

            console.log('----------获取所有-------------');
            console.log(cookie.getCookies());

            console.log('----------清除age-------------');
            console.log(cookie.remove('age'));

            console.log('----------获取所有-------------');
            console.log(cookie.getCookies());

            console.log('----------清除所有-------------');
            console.log(cookie.clear());

            console.log('----------获取所有-------------');
            console.log(cookie.getCookies());

            console.log('----------解决冲突-------------');
            var $Cookie = cookie.noConflict(true /*a new name of cookie*/);
            console.log($Cookie);
            console.log('----------使用新的命名-------------');
            console.log($Cookie.getCookies());
        </script>
    </body>
</html>
```

> cookie.js

```
/*
 * HTTP Cookie:存储会话信息
 * 名称和值传送时必须是经过RUL编码的
 * cookie绑定在指定的域名下，非本域无法共享cookie，但是可以是在主站共享cookie给子站
 * cookie有一些限制：比如IE6 & IE6- 限定在20个；IE7 50个；Opear 30个...所以一般会根据【必须】需求才设定cookie
 * cookie的名称不分大小写；同时建议将cookie URL编码；路径是区分cookie在不同情况下传递的好方式；带安全标志cookie
 *     在SSL情况下发送到服务器端，http则不会。建议针对cookie设置expires、domain、 path；每个cookie小于4KB
 * */
//对cookie的封装，采取getter、setter方式
(function(global){
    //获取cookie对象，以对象表示
    function getCookiesObj(){
        var cookies = {};
        if(document.cookie){
            var objs = document.cookie.split('; ');
            for(var i in objs){
                var index = objs[i].indexOf('='),
                    name = objs[i].substr(0, index),
                    value = objs[i].substr(index + 1, objs[i].length);    
                cookies[name] = value;
            }
        }
        return cookies;
    }
    //设置cookie
    function set(name, value, opts){
        //opts maxAge, path, domain, secure
        if(name && value){
            var cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);
            //可选参数
            if(opts){
                if(opts.maxAge){
                    cookie += '; max-age=' + opts.maxAge; 
                }
                if(opts.path){
                    cookie += '; path=' + opts.path;
                }
                if(opts.domain){
                    cookie += '; domain=' + opts.domain;
                }
                if(opts.secure){
                    cookie += '; secure';
                }
            }
            document.cookie = cookie;
            return cookie;
        }else{
            return '';
        }
    }
    //获取cookie
    function get(name){
        return decodeURIComponent(getCookiesObj()[name]) || null;
    }

    //清除某个cookie
    function remove(name){
        if(getCookiesObj()[name]){
            document.cookie = name + '=; max-age=0';
        }
    }

    //清除所有cookie
    function clear(){
        var cookies = getCookiesObj();
        for(var key in cookies){
            document.cookie = key + '=; max-age=0';
        }
    }
    //获取所有cookies
    function getCookies(name){
        return getCookiesObj();
    }
    //解决冲突
    function noConflict(name){
        if(name && typeof name === 'string'){
            if(name && window['cookie']){
                window[name] = window['cookie'];
                delete window['cookie'];
                return window[name];
            }
        }else{
            return window['cookie'];
            delete window['cookie'];
        }
    }
    global['cookie'] = {
        'getCookies': getCookies,
        'set': set,
        'get': get,
        'remove': remove,
        'clear': clear,
        'noConflict': noConflict
    };
})(window);
```