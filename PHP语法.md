## PHP变量

> #### 什么是变量

变量是用于储存值的容器，与代数类似，可以给 PHP 变量赋予某个值（x=5）或者表达式（z=x+y）。变量可以是很短的名称（如 x 和 y）或者更具描述性的名称（如 age、carname、totalvolume）。

> #### PHP变量命名的规则

```
变量以美元符 $ 开头，然后是变量名;

变量名由字母或下划线开头，由字母，下划线，数字组成;

变量名区分大小写;

变量名里面不能够有标点符号,空格 除了下划线以外

php是弱类型的语言，不需要事先声明变量的数据类型;

php可以不用显示的声明变量就直接使用，不过好的编码习惯：所有的变量在使用前应该进行声明;

可以使用驼峰命名法、匈牙利命名法、帕斯卡命名法、来给变量进行命名。

//例：
    $a = 25;
    $age = 18;
```

> #### 变量赋值

```
值赋值：就是将赋值表达式的值复制到变量;

引用赋值：php4引入了引用赋值功能，创建的变量与另一个变量引用的内容相同。

    $val_1 = 'hello word';
    $val_2 = &$val_1;  //把$val_1的内存空间地址赋值给$val_2,是同一个值
    $val_2 = 'hello'; 
    $val_1 = 'hello';
```

> #### 变量的变量

```
    $val_1 = 'hello';
    $$val_1 = 'world';
    echo $hello;
    echo $val_1;
    echo ${$val_1};
```

> #### PHP的超全局变量

```
php提供了很多有用的预定义变量，用于提供大量与环境有关的信息。

(1) $_SERVER 服务器变量  该全局变量包含着服务器和客户端配置及当前请求环境的有关信息
    $_SERVER['SERVER_NAME']; //当前运行脚本所在的服务器的主机名
    $_SERVER['REMOTE_ADDR']; //客户端IP地址
    $_SERVER['REQUEST_URI']; //URL的路径部份
    $_SERVER['HTTP_USER_AGENT']; //操作系统和浏览器的有关信息

(2) $_GET   该变量包含使用 GET 方法传递的参数的有关信息;
    例：

    url: http://www.test.com?id=100&page=2
    $id = $_GET['id'];
    $page = $_GET['page'];
    echo $id,page;

(3) $_POST  该变量包含使用 POST 方法传递的参数的有关信息;
    html:
         <form action="index.php" method="POST">
            <table>
                <tr>
                    <td>用户名:</td>
                    <td><input type="text" name="username"></td>
                </tr>
                <tr>
                    <td>密码:</td>
                    <td><input type="password" name="pwd"></td>
                </tr>
                <tr>
                    <td></td>
                    <td><input type="submit" value="提交" /></td>
                </tr>
            </table>
        </form>
    php:    
        $username = $_POST[‘username’];
        $passwd = $_POST[‘pwd’];

(4) $_REQUEST 该变量记录着通过各种输入方法传递给脚本的变量，如GET POST,但不要用这个超级全局变量，因为它不安全而且速度比较慢;
(5) $_COOKIE  cookie变量数组
(6) $_SESSION 会话变量数组
(7) $_FILES 与上传文件有关的变量数组
(8) $_ENV 环境变量数组
(9) $GLOBALS 有全局变量数组
```

> #### 常量的定义

```
常量是指在程序执行中无法修改的值。如 test (3.14);
在脚本执行期间该值不能改变;
常量对大小写敏感，通常常量名总是大写;
常量是全局的，可以在脚本的任何地方引用;
常量分为内置常量和自定义常量;
常量使用define()函数定义;

例：
    define('test',3.14);
    echo test;
```

> #### 内置常量

```
PHP_OS           PHP所在的操作系统的名字
PHP_VERSION      当前 PHP 的版本
```

> 魔术常量

```
__LINE__    文件中的当前行号;
__FILE__    文件的完整路径和文件名;
__FUNCTION__    函数名称;
__CLASS__    类的名称;
__METHOD__    类的方法名;

 例：
  class a { 
        function fa() { 
            return __METHOD__; 
        } 

        function fb() { 
            return __FUNCTION__; 
        } 
   } 

    $Obj = new a(); 
    echo $Obj->fa();// output a::fa  返回类名称与函数名称
    echo $Obj->fb();// output fb 仅返回回函数名称
```

## PHP数据类型

## 什么是数据类型

String（字符串）, Integer（整型）, Float（浮点型）, Boolean（布尔型）, Array（数组）, Object（对象）, NULL（空值）resource（资源）这都是PHP的数据类型。

上面几种数据细分为标量类型、复合类型、还有特殊类型。

> #### 标量类型

## 1、字符串 (string)

```
    字符串有三种定义方式：单引号，双引号，定界符(heredoc);
    单引号字符串中出现的变量不会被变量的值替代;
    双引号字符串中最重要的一点是其中的变量会被变量值替代;

    如果遇到美元符号($)解析器会尽可能多地取得后面的字符以组成一个合法的变量名.
    如果想明确的指定名字的结束，用花括号把变量名括起来。

    例：

        $beer = "Heineken";
        echo "He drank some {$beer}s";

字符串定界的方法使用定界符语法 "<<<"

    例：
        $str = <<<EOD
        This is test.
        Hello word.
        EOD;
        echo $str;

  转义字符
    \n    换行

    \r    回车 ( WINDOW \r\n ) (linux \n) （Mac OS \r）

    \t    水平制表符 (按键盘 tab 产生的效果)

    \\    反斜线

    \$    美元符(表示变量的开始)

    \"    双引号
```

## 2、整型(integer)

```
整数是一个没有小数的数字。
整数规则:
    整数必须至少有一个数字 (0-9)
    整数不能包含逗号或空格
    整数是没有小数点的
    整数可以是正数或负数
    整型可以用三种格式来指定：十进制， 十六进制（ 以 0x 为前缀）或八进制（前缀为 0）


例：
    $a = 1234;
    var_dump($a);
```

## 3、浮点型(float, double)

```
浮点数是带小数部分的数字，或是指数形式。

例：
    $a = 1.234; 
    var_dump($a); //float(1.234)
```

## 4、布尔型（bool）

```
布尔型可以是 TRUE 或 FALSE，布尔型通常用于条件判断。

以下值被认为是FALSE:
    布尔值  FALSE
    整型值 0
    浮点型值 0.0
    空白字符串和字符串 “0”
    没有成员变量的数组
    没有单元的对象(php4适用)
    特殊类型的NULL

例：
    $fo1 = false;
    var_dump($fo1);
```

> #### 复合数据类型

## 1、数组 (array)

```
数组可以在一个变量中存储多个值。

例：
    $data = ['一','二','三'];
    $data1 = array('a' => '周一','b' => '周二','c' => '周三')
    var_dump($data);
    var_dump($data1);
```

## 2、对象 (Object)

```
对象是存储数据和有关如何处理数据的信息的数据类型
    $test = new test;
    var_dump($test);
```

> #### 特殊类型

## 1、资源 (resource)

```
存放资源数据( PHP外部数据, 如数据库, 文件 )

例：
    $fh = fopen("test.txt", "rw");
    var_dump($fh);
```

## 2、空值 (null)

```
null 无，表示没有值，null不表示空格，也不表示0;
    以下情况，则认为是null:

    没有设置为任何预定义的变量;
    明确的赋值为null;
    使用函数unset()清除;
例：
    $x = "Hello world!";
    $x = null;
    var_dump($x);
```

> #### 类型自动转换

```
因为php对于类型定义非常的松散，所以有时会根据引用变量的环境，将变量自动转换为最适合的类型;

例：
    $num = 5;
    $str = "15";
    echo $num + $str;

    $str = "100 hello";
    $num = 200;
    echo $num + $str;

    $str = '1.2';
    if($str){  //if 判断为 true
         echo 'hello world';
    }
```

> #### 类型转换

```
第一种转换方式： (int)  (bool)  (float)  (string)  (array) (object)

例： 
    $num = 3.14;
    $res = (int)$num;
    $res = (float)$num;
    $res = (string)$num;
    $res = (bool)$num;
    $res = (array)$num;
    $res = (object)$num;
    var_dump($res);

第二种转换方式：  intval()  floatval()  strval()

例：
    $str="123.9abc";   
    $int=intval($str);     //转换后数值：123   
    $float=floatval($str); //转换后数值：123.9   
    $str=strval($float);   //转换后字符串："123.9"    
    var_dump($int);
    var_dump($float);
    var_dump($str);
第三种转换方式：  settype();

例：
    $num=12.8;   
    settype($num,"int");   
    settype($num,"float");   
    settype($num,"string");   
    settype($num,"bool");   
    settype($num,"array");   
    settype($num,"object");    
    var_dump($num);
```

> #### 与类型相关的函数

```
1.gettype() 返回变量的类型

共有8个可能的值 string、integer、float、boolean、array、object、null、unknow
$str = 'hello';
echo gettype($str);

2.is_type() 查看变量是否属于某个类型,是返回 TRUE ,否返回 FALSE;

$arr = array(1);
echo is_array($arr);

$num = 5;
echo is_int($num);

3.var_dump();  函数用来得到变量的类型和值的详细信息

$str = 'hello';
var_dump($str);

$arr = array('A', 'B', 'C');
var_dump($arr);
```

## PHP运算符

```
  算术运算符 
  赋值运算符  
  字符串运算符 
  递增(++)和递减(--)运算符 
  逻辑运算符 
  比较运算符 
  三元运算符
```

> #### 算数运算符

```
+ 加法运算      $a + $b

- 减法运算      $a - $b

* 乘法运算      $a * $b

/ 除法运算      $a / $b

% 取模运算（求余数)   $a % $b
```

> #### 赋值运算符

```
赋值运算符，将一个数据值赋给一个变量;
组合赋值运算符，在赋值之前会完成某个运算;

$a = 5    赋值
$a += 5   加法赋值    $a = $a + 5
$a -= 5   减法赋值    $a = $a – 5
$a *= 5   乘法赋值    $a = $a * 5
$a /= 5   除法赋值    $a = $a / 5
$a .= 5   拼接赋值    $a = $a.5
```

> #### 字符串运算符

```
字符串运算符用于拼接字符串, 拼接表示将两个或多个对象组合起来;
$a = "hello";
$b = $a . "world";
echo $b;

$b = "Hello";
$b .= "World!";
echo $b;
```

> #### 递增(++)和递减(--)运算符

```
递增和递减运算符将变量的当前值加1或减1，可以使代码更简洁;

++$i    先加  $i的值加1，然后再返回$i的值;

$i++    后加  先返回$i的值，然后再将$i的值加1;

--$i    先减  $i的值减1，然后再返回$i的值;

$i--    后减  先返回$i的值，然后再将$i的值减1;

$i = 5;
$a = $i++;
echo 'i = '.$i;
echo '<br>';
echo 'a = '.$a;
```

> #### 逻辑运算符

```
利用逻辑运算符可以根据多个变量的值进行判断，这使得控制程序的流程成为可能.
逻辑操作符常用于控制结构中，如if条件和while及for循环;
&&，  AND   逻辑与  
||，  OR    逻辑或
!,    NOT   逻辑非
```

> #### 比较运算符

```
比较运算符，返回一个布尔值 TRUE 或 FALSE;
>         大于
<         小于
>=        大于或等于
<=        小于或等于
!=        不等于
<>        不等于
==        等于
===       全等于 （两个比较的内容里，类型也要一样）
!==       全不等
```

> #### 三元运算符

```
语法：expression1 ? expression2 : expression3

$a = 5;
$b = 2;
$res = $a > $b ? "yes":"no";
echo $res;
```

> #### 运算符的优先级

```
所谓运算符的优先级指的是哪一个运算符应该先计算。 具体运算符的优先级，参考php手册;
赋值运算，从右到左

echo 1 + 2 * 3;   //outputs 7
```

## PHP流程控制

## 1、if语句

```
If语句用括号中的表达式返回值（true 或 false )来控制是否执行指定的代码程序.

$os = "windows";
if($os == 'mac'){
    echo '你的系统OS是mac';
}else if($os == 'liunx'){
    echo '你的系统OS是liunx';
}else{
    echo '你的系统OS是windows';
}
```

## 2、switch 语句

```
switch 语句可以看作是if-else组合的一种变体，如果需要比较有限值的变量，通常会使用switch语句;

$os = "windows";
switch($os){
  case 'mac':
    echo "你的系统OS是mac";
    break;
  case 'liunx':
    echo "你的系统OS是liunx";
    break;
  default:
    echo "你的系统OS是windows";
}
在每个case块的末尾处都有break语句，如果没有break语句，就会执行所有后续的case块直到遇到break语句为止;
```

## PHP循环

## do{}while()

```
do...while 语句会至少执行一次代码，然后检查条件，只要条件成立，就会重复进行循环。

例：
    $i=1;
    do
    {
        $i++;
        echo "The number is " . $i . "<br>";
    }
    while ($i<=5);
```

## while(){}

```
while 循环将重复执行代码块，直到指定的条件不成立

例：
    $i=1;
    while($i<=5)
    {
        echo "The number is " . $i . "<br>";
        $i++;
    }
```

## for(){}

```
for 循环用于您预先知道脚本需要运行的次数的情况。
例:
for ($i=1; $i<=5; $i++)
{
    echo "数字为 " . $i . ‘<br>’;
}
?>
```

## foreach(){}

```
foreach 循环用于遍历数组，它根据数组中每个元素来循环代码块。
例：
    $x = array("Google", "Runoob", "Taobao");
    foreach ($x as $value) {
        echo $value.‘<br>’;
    }
```

## 遍历二维数组

```
    $products = array(
        array(
            'pname' => 'nokia n73',
            'price' =>  1500,
        ),
        array(
            'pname' => 'nokia 5800',
            'price' =>  2000,
        ),
    );

    foreach ($products as $product_k => $product_v) {
        foreach ($product_v as $key => $val) {
            echo $key . '=>' . $val;
        }
    }
```

## break

```
如果包含一个break语句，将立即结束 while、do…while、for、foreach、switch的执行。

for($i=0;$i < 5;$i++){
    if($i == 3){
        break;
    }
    echo $i."<br>";
}
```

## continue

```
continue 语句使当前循环执行结束，并从下一次循环开始执行.
for($i=0;$i < 5;$i++){
    if($i == 3){
        continue;
    }
    echo $i."<br>";
}
```

## PHP函数

## 什么是函数

```
函数是用来完成某种特定任务的可重用代码块;
函数可以使程序更具模块化,拥有良好的结构;
函数定义后在程序中可以重复调用;
函数分为内置函数和自定义函数
```

> #### 内置函数

```
PHP系统提供了大量功能强大的函数，帮助我们解决各种问题
```

> #### 创建自定义函数

```
function function_name(parameters) {

  //function body

}

function sayhello(){
  echo 'hello';
}

函数用function关键字来声明;
函数名称是由字母或下划线开始,中间可以包含数字;
函数名不区分大小写,不过在调用函数的时候，通常使用其在定义时相同的形式;
php不支持函数重载, 所以自定义函数不能和内置函数重名;
不能在一个文件中自定义同名的函数;
参数出现在括号中,如果有多个参数用逗号分隔;
```

> #### 传递参数

```
值传递(传值)
    函数内对参数值的改变不会影响函数外部的值;
引用传递(传址)
    有些情况下，可能希望在函数体内对参数的修改在函数体外也能反映;
    使用引用传递参数要在参数前加上"&"符号;
    变量本身传入，传入后的变量与原变量建立联系;
    函数体内变量的变化，会影响到原变量本身;

默认参数值
    可以为参数指定默认值，在没有提供其他值的情况下，则将默认值自动赋给该参数;

可选参数
    可以指定某个参数为可选参数，这些参数需要放在参数列表的末尾，需且要指定其默认值为空;
    如果指定了多个可选参数，可以选择性地传递某些参数;


function demo($name,$age = null){
    echo '姓名：' . $name . ' 年龄：' .$age;
}

demo('李四');
```

> #### 从函数返回值

```
通常情况下，只依靠函数做某些事情还不够;
需要将函数的执行结果返回给调用者，这时可以使用 return 语句返回结果;
return 语句变执行后，将使得函数立即结束运行，并且将控制权返回被调用的行;

function mysquare($num)
{
    if ($num == 4) {
        return;
        echo '1';
    }
    $res = $num * $num;
    return $res;
}
echo mysquare(4);
```

> #### 递归函数

```
递归函数是一个可以重复调用自身的函数，直到满足某个条件为止;
递归函数常用来解决一些重复的问题;
递归应该特别注意条件，防止进入死循环中;

function demo($val)
{
    if($val == 0 || $val == 1){
        return 1;
    }
    return $val * demo($val - 1);

}

echo demo(3);
```

> #### 变量作用域和生命周期

```
由于引入了函数，程序中变量的能见度发生了变化，即变量的作用范围发生了改变;    
变量分为:全局变量，局部变量，静态变量;
```

> #### 全局变量

```
函数体外定义的变量为全局变量，与局部变量相反，全局变量可以在程序的任何地方访问;   
如果在函数体中需要使用全局变量，使用 global 关键字访问;    
全局变量的作用域：从声明它的那条语句开始到文件末尾;

$test = 'test';

function demo(){
    global $test;
    echo $test;
}

demo();
```

> #### 局部变量

```
局部变量：只存在于对它做出声明的函数内部,在函数的外部无法相用它,局部变量的作用域仅限于函数内部

$test = 'test';// 全局变量

function demo(){
    $test = 'demo';// 局部变量
    echo $test;
}

demo();
```

> #### 静态变量

```
局部变量在函数退出时会被撤消，与局部变量不同.
静态变量在函数退出时不会丢失值，并且再次调用函数时还能保留这个值;
在变量名前面加上 static 关键字就可以声明一个静态变量;

function keep_val(){
    static $count = 0;
    $count++;
    echo $count;
    echo '<br>';
}

keep_val();
keep_val();
keep_val();
```

> #### 函数库

```
通常将常用的函数组织到函数库中，可以在以后类似的应用程序中重复使用。
需要调用时使用include()或require()将函数库包含到脚本中;  

include 与 require

include()语句将在其被调用的位置处包含一个文件。
  include("init.php");

include_once()的作用与include()相同，不过它会首先验证是否已经包含了该文件.
如果已经包含，则不再执行include_once();

require()
require_once() 

require() 与 include() 之间的区别
如果require()包含文件出错时，脚本将停止执行。 而使用include()脚本将继续执行。
```

> #### 回调函数

```
function demo($callback)
{
    //调用回调函数
    $callback();
}

// test函数
function test(){
    echo "hello world";
}
// 参数
demo('test');
```

> #### 匿名函数

```
匿名函数，也就是没有函数名的函数。
匿名函数的第一种用法，直接把函数赋值给变量，调用变量即为调用函数。
匿名函数的写法比较灵活。

$greet = function($name)
{
echo $name.'，你好';
};

$greet('明天');
$greet('PHP');
```

> #### 闭包函数

```
php的闭包（Closure）也就是匿名函数。是PHP5.3引入的。
闭包的几个作用：
1 减少foreach的循环的代码
2 减少函数的参数
3 解除递归函数
4 关于延迟绑定


//闭包：延长局部变量的使用范围，缺点：内存泄露
function callFunc( $func ) {
    $func( 'some string' );

}

$printStrFunc = function( $str ) {
    echo $str;

};

callFunc( $printStrFunc );

//也可以直接将匿名函数进行传递。如果你了解js，这种写法可能会很熟悉 callFunc( function( $str ) {
// echo $str;
// } );
```

## PHP数学函数

## 什么是数学函数

```
函数能处理 integer 和 float 范围内的值。
```

> #### abs

| 参数 | 描述           |
| :--- | :------------- |
| x    | 必需。一个数。 |

```
定义和用法
abs() 函数返回一个数的绝对值。

语法
abs(x)

例
echo(abs(6.7));
echo(abs(-3));
echo(abs(3));
```

> #### ceil

| 参数 | 描述           |
| :--- | :------------- |
| x    | 必需。一个数。 |

```
定义和用法
ceil() 函数向上舍入为最接近的整数。

语法
ceil(x)

说明
返回不小于 x 的下一个整数，x 如果有小数部分则进一位。ceil() 返回的类型仍然是 float，因为 float 值的范围通常比 integer 要大。

例
echo(ceil(0.60));
echo(ceil(0.40));
echo(ceil(5));
echo(ceil(5.1));
echo(ceil(-5.1));
echo(ceil(-5.9));
```

> #### floor

| 参数 | 描述           |
| :--- | :------------- |
| x    | 必需。一个数。 |

```
定义和用法
floor() 函数向下舍入为最接近的整数。

语法
floor(x)

说明
返回不大于 x 的下一个整数，将 x 的小数部分舍去取整。floor() 返回的类型仍然是 float，因为 float 值的范围通常比 integer 要大。

例
在本例中，我们将对不同的数应用 floor() 函数：
echo(floor(0.60));
echo(floor(0.40));
echo(floor(5));
echo(floor(5.1));
echo(floor(-5.1));
echo(floor(-5.9));
```

> #### max

| 参数 | 描述           |
| :--- | :------------- |
| x    | 必需。一个数。 |
| y    | 必需。一个数。 |

```
定义和用法
max() 返回最大值。

语法
max(x,y)

例
echo(max(5,7));
echo(max(-3,5));
echo(max(-3,-5));
echo(max(7.25,7.30));
```

> #### min

| 参数 | 描述           |
| :--- | :------------- |
| x    | 必需。一个数。 |
| y    | 必需。一个数。 |

```
定义和用法
min() 返回最大值。

语法
min(x,y)

例
echo(min(5,7));
echo(min(-3,5));
echo(min(-3,-5));
echo(min(7.25,7.30));
```

> #### mt_rand

```
定义和用法
mt_rand() 使用 Mersenne Twister 算法返回随机整数。

语法
mt_rand(min,max)

例
在本例中，我们会返回一些随机数：
echo(mt_rand());
echo(mt_rand());
echo(mt_rand(10,100));
```

> #### pi

```
定义和用法
pi() 函数返回圆周率的值。

语法
pi()

echo pi();
```

> #### pow

| 参数 | 描述           |
| :--- | :------------- |
| x    | 必需。一个数。 |
| y    | 必需。一个数。 |

```
定义和用法
pow() 函数返回 x 的 y 次方。

语法
pow(x,y)

例
echo pow(4,2);
echo pow(6,2);
echo pow(-6,2);
echo pow(-6,-2);
echo pow(-6,5.5);
```

> #### rand

| 参数    | 描述                         |
| :------ | :--------------------------- |
| min,max | 可选。规定随机数产生的范围。 |

```
定义和用法
rand() 函数返回随机整数。

语法
rand(min,max)

例
echo(rand());
echo(rand());
echo(rand(10,100));
```

> #### round

| 参数 | 描述                       |
| :--- | :------------------------- |
| x    | 可选。规定要舍入的数字。   |
| prec | 可选。规定小数点后的位数。 |

```
定义和用法
round() 函数对浮点数进行四舍五入。

语法
round(x,prec)

例
echo(round(0.60));
echo(round(0.50));
echo(round(0.49));
echo(round(-4.40));
echo(round(-4.60));
```

# PHP日期函数

## date_default_timezone_set

> 设置在脚本中所有日期/时间函数的默认时区

```
date_default_timezone_set("PRC");
```

## time

> time() 函数返回当前时间的 Unix 时间戳，返回自从 Unix 纪元（格林威治时间 1970 年 1 月 1 日 00:00:00）到当前时间的秒数。

```
echo time()
```

## date

> date() 函数格式化一个本地时间／日期。

| 参数      | 描述                     |
| :-------- | :----------------------- |
| format    | 必需。规定如何返回结果。 |
| timestamp | 可选。                   |

```
echo date("Y-m-d",time());
```

## strtotime

> 将任何英文文本的日期时间描述解析为 Unix 时间戳。

```
echo strotime('2021-08-26');
```

## PHP数组

## 什么是数组

数组可以理解为有序的（键-值)对组成的数据值的集合; 如果我们把变量理解为单个值的容器，那么数组就是可以包含多个值的容器; 根据索引值的不同数组分为：索引数组和关联数组;

```
$week = array("a"=> "星期一", "b"=>"星期二", "c"=> "星期三");//a是键，星期一是值
```

## 创建数组

```
与其它语言的数组实现方式不同，php不需要在创建数组时指定其大小;
因为php是一种松散类型的语言，所以甚至不需要在使用前先声明;
索引可以是整型数字或者是字符串;
索引数组：索引为整数,如果没有指定索引值则默认为零，依次递增;
关联数组：索引为字符串的数组;

例：

  $arr = array();
  $fruits = array("orange", "apple", "banana");
  $languages = array("en"=> "english", "cn"=> "china");

  $arr[key] = value;  直接对数组变量赋值

如果方括号中没有指定索引，则取当前最大整数索引值，新的键名将是该值 + 1。
如果当前还没有整数索引，则键名将为0。如果指定的键名已经有值了，该值将被覆盖。

例：
  $fruits[] = "orange";
  $fruits[] = "apple";
  $languages["en"] = "english";
  $languages["cn"] = "china";

使用函数创建数组  range() 建立一个包含指定范围单元的数组

例：
  $num = range(1, 100);
  var_dump($num);

  $letter = range('a','I');
  var_dump($letter);
```

> #### 删除数组或数组元素

```
删除数组或数组元素  (注意：删除数组元素不会重建索引)

unset 释放给定的变量

例：
    $fruits = array('apple', 'banana', 'orange');
    print_r($fruits);
    unset($fruits[1]);
    print_r($fruits);
```

> #### 常用的数组函数

```
1.print_r() 打印数组
    $today = getdate();
    print_r($today);

2.count() 取得数组大小
    count($week); 

3.in_array() 检查数组中是否包含某个值
    in_array('apple', $fruits);
    var_dump(in_array(apple, $fruits));
```

> #### 数组排序

```
sort() 、 rsort() 对数组进行升序和降序

例：

  $fruits = array("lemon", "orange", "banana", "apple");
  sort($fruits);
  print_r($fruits);

ksort()、krsort() 对数组按索引进行升序或降序, 并保持索引关系

例：

  $fruits = array("l"=>"lemon", "o"=>"orange", "b"=>"banana", "a"=>"apple");
  ksort($fruits);
  print_r($fruits);
```

> #### 字符串与数组转换

```
explode  explode() 函数把字符串打散为数组。

例：
  $str = "1,2,3,4,5,6";
  $arr = explode(',', $str);
  print_r($arr);

implode  implode() 函数将数组元素连接成字符

例：
    $arr = array('a','b', 'c', 'd');
    $str = implode('|', $arr );
    echo $str;
```

#### `array_pop`

```
array_pop() 函数删除数组中的最后一个元素。
```

| 参数  | 描述                       |
| :---- | :------------------------- |
| array | 必需。规定输入的数组参数。 |

```
例：
    $stack = array("orange", "banana", "apple", "raspberry");
    $fruit = array_pop($stack);
    print_r($stack);
```

#### `array_push`

```
array_push() 函数向数组尾部插入一个或多个元素。
提示：您可以添加一个或者多个值。
注释：即使您的数组有字符串键名，您所添加的元素将是数字键名
注释：如果用 array_push() 来给数组增加一个单元，还不如用 $array[] =，因为这样没有调用函数的额外负担。
注释：如果第一个参数不是数组，array_push() 将发出一条警告。这和 $var[] 的行为不同，后者会新建一个数组。
```

| **参数** | **描述**               |
| :------- | :--------------------- |
| array    | 必需。规定一个数组。   |
| value1   | 必需。规定要添加的值。 |
| value2   | 可选。规定要添加的值。 |

```
例：
    $stack = array("orange", "banana");
    array_push($stack, "apple", "raspberry");
    print_r($stack);

    $a=array("a"=>"Dog","b"=>"Cat");
    array_push($a,"Horse","Bird");
    print_r($a);
```

##### `array_rand`

```
array_rand() 函数从数组中随机选出一个或多个元素，并返回。
第二个参数用来确定要选出几个元素。如果选出的元素不止一个，则返回包含随机键名的数组，否则返回该元素的键名。
注释：自 PHP 4.2.0 起，不再需要用 srand() 或 mt_srand() 函数给随机数发生器播种，现已被自动完成。
```

| 参数   | **描述**                                 |
| :----- | :--------------------------------------- |
| array  | 必需。规定输入的数组参数                 |
| number | 可选。默认是 1。规定返回多少个随机的元素 |

```
例：
    $a = array("a" => "Dog", "b" => "Cat", "c" => "Horse");
    print_r(array_rand($a, 2));

    $array = array(
        'fruit1' => 'apple',
        'fruit2' => 'orange',
        'fruit3' => 'grape',
        'fruit4' => 'apple',
        'fruit5' => 'apple'
    );
    print_r(array_rand($array, 1));
```

##### `array_sum`

```
array_sum() 函数返回数组中所有值的总和。

如果所有值多是整数，则返回一个整数值。如果其中有一个或多个值是浮点数，则返回浮点数。

PHP 4.2.1 之前的版本修改了传入的数组本身，将其中的字符串值转换成数值（大多数情况下都转换成了零，根据具体制而定）。
```

| 参数  | 描述                   |
| :---- | :--------------------- |
| array | 必需。规定输入的数组。 |

```
例：
    $a=array(0=>"5",1=>"15",2=>"25");
    echo array_sum($a);
```

## PHP字符串

> #### echo

```
定义和用法
echo() 函数输出一个或多个字符串。

语法
echo(strings)

例
echo '没有返回值';
echo '可以输出多个值，使用逗号分隔;';
```

> #### print

```
定义和用法
print() 函数输出一个或多个字符串。

语法
print(strings)

例
print ("hello $val");
print "hello world";
```

> #### printf

| 参数   | 描述                                       |
| :----- | :----------------------------------------- |
| format | 必需。规定字符串以及如何格式化其中的变量。 |

```
定义和用法
printf() 函数输出格式化的字符串。

语法
printf(format,arg1,arg2,arg++)

说明
%% - 返回百分比符号
%b - 二进制数
%c - 依照 ASCII 值的字符
%d - 带符号十进制数
%e - 可续计数法（比如 1.5e+3）
%u - 无符号十进制数
%f - 浮点数(local settings aware)
%F - 浮点数(not local settings aware)
%o - 八进制数
%s - 字符串
%x - 十六进制数（小写字母）
%X - 十六进制数（大写字母）

例
$str = "123 test";
printf("整数：%d", $str);
printf("浮点数：%.2f", $str);
printf("字符串：%s", $str);
```

> #### var_dump

```
var_dump() 函数用于输出变量的相关信息。显示关于一个或多个表达式的结构信息，包括表达式的类型与值。数组将递归展开值，通过缩进显示其结构。

    $a = array(1, 2, array("a", "b", "c"));
    var_dump($a);
```

> #### htmlspecialchars

| 参数   | 描述                       |
| :----- | :------------------------- |
| string | 必需。规定要解码的字符串。 |

```
定义和用法
htmlspecialchars() 函数把一些预定义的字符转换为 HTML 实体。

预定义的字符是：
& （和号） 成为 &
" （双引号） 成为 "
’ （单引号） 成为 ’
< （小于） 成为 <
> （大于） 成为 >

$str = '<div class="test">测试</div>';
echo $str;// 输出的结果为测试
echo htmlspecialchars($str);// 输出的结果为<div class="test">测试</div>
```

> #### ltrim rtrim trim

```
定义和用法
ltrim() 函数从字符串左侧删除空格或其他预定义字符。
rtrim() 函数从字符串右侧删除空格或其他预定义字符。
trim() 函数从字符串的两端删除空白字符和其他预定义字符。

语法
ltrim(string,charlist)

例
$str = "       Hello World!";
echo ltrim($str);

$str = "Hello World!    ";、
echo rtrim($str);

$str = " Hello World! ";
echo trim($str);
```

> #### md5

```
定义和用法
md5() 函数计算字符串的 MD5 散列。

md5() 函数使用 RSA 数据安全，包括 MD5 报文摘译算法。

如果成功，则返回所计算的 MD5 散列，如果失败，则返回 false。

语法
md5(_string_,_raw_)

例
$str = "Hello";
echo md5($str);
```

> #### sha1

```
定义和用法
sha1() 函数计算字符串的 SHA-1 散列。

sha1() 函数使用美国 Secure Hash 算法 1。

如果成功，则返回所计算的 SHA-1 散列，如果失败，则返回 false。

语法
sha1(_string_,_raw_)

例
$str = 'Hello';
echo sha1($str);
```

> #### str_replace str_ireplace

| 参数    | 描述                               |
| :------ | :--------------------------------- |
| find    | 必需。规定要查找的值。             |
| replace | 必需。规定替换 find 中的值的值。   |
| string  | 必需。规定被搜索的字符串。         |
| count   | 可选。一个变量，对替换数进行计数。 |

```
定义和用法
str_replace() 函数使用一个字符串替换字符串中的另一些字符。
str_ireplace() 函数使用一个字符串替换字符串中的另一些字符。

语法
str_replace(find,replace,string,count)

例子
echo str_replace("world","John","Hello world!");
```

> #### strpos stripos

| 参数   | 描述                       |
| :----- | :------------------------- |
| string | 必需。规定被搜索的字符串。 |
| find   | 必需。规定要查找的字符。   |
| start  | 可选。规定开始搜索的位置。 |

```
定义和用法
stripos() 函数返回字符串在另一个字符串中第一次出现的位置。
如果没有找到该字符串，则返回 false。
strpos() 查找字符串在另一字符串中第一次出现的位置（区分大小写）
strripos()查找字符串在另一字符串中最后一次出现的位置（不区分大小写）

语法
stripos(string,find,start)

提示和注释
注释：该函数对大小写不敏感。如需进行对大小写敏感的搜索，请使用 strpos() 函数。

例
echo stripos("Hello world!","WO");
```

> #### str_shuffle

| 参数   | 描述                       |
| :----- | :------------------------- |
| string | 必需。规定要打乱的字符串。 |

```
定义和用法
str_shuffle() 函数随机地打乱字符串中的所有字符。

语法
str_shuffle(string)

例
echo str_shuffle("Hello World");
```

> #### strip_tags

| 参数   | 描述                                       |
| :----- | :----------------------------------------- |
| string | 必需。规定要检查的字符串。                 |
| allow  | 可选。规定允许的标签。这些标签不会被删除。 |

```
定义和用法
strip_tags() 函数剥去 HTML、XML 以及 PHP 的标签。

语法
strip_tags(string,allow)

例
echo strip_tags("Hello <b>world!</b>");

例
echo strip_tags("Hello <b><i>world!</i></b>","<b>");
```

> #### strtolower

| 参数   | 描述                       |
| :----- | :------------------------- |
| string | 必需。规定要转换的字符串。 |

```
定义和用法
strtolower() 函数把字符串转换为小写。

语法
strtolower(string)

例
echo strtolower("Hello WORLD!");
```

> #### strtoupper

| 参数   | 描述                       |
| :----- | :------------------------- |
| string | 必需。规定要转换的字符串。 |

```
定义和用法
strtoupper() 函数把字符串转换为大写。

语法
strtoupper(string)

例
echo strtoupper("Hello WORLD!");
```

> #### substr

| 参数   | 描述                                                         |
| :----- | :----------------------------------------------------------- |
| string | 必需。规定要返回其中一部分的字符串。                         |
| start  | 必需。规定在字符串的何处开始。 正数 - 在字符串的指定位置开始 负数 - 在从字符串结尾的指定位置开始 0 - 在字符串中的第一个字符处开始 |
| length | 可选。规定要返回的字符串长度。默认是直到字符串的结尾。 正数 - 从 start 参数所在的位置返回 负数 - 从字符串末端返回 |

```
定义和用法
substr() 函数返回字符串的一部分。

语法
substr(_string_,_start_,_length_)

echo substr("Hello world",10)."<br>";
echo substr("Hello world",1)."<br>";
echo substr("Hello world",3)."<br>";
echo substr("Hello world",7)."<br>";

echo substr("Hello world",-1)."<br>";
echo substr("Hello world",-10)."<br>";
echo substr("Hello world",-8)."<br>";
echo substr("Hello world",-4)."<br>";
```

## PHP面向对象

## 类与对象

## 过程式编程

```
初学编程的方法通常由顺序结构开始。
这是步骤式的过程性编程,过程式编程方法下的制成品,是一个“大胖子”,为什么呢?
假设拆开这个制成品，里面是无数纠缠不清的程序和数据(变量等),数据是给各程序共享的。
即任何程序都可以读取或修改它,一个程序接着另一个程序来执行。
假设要修改这个制成品,就有一种触发牵动全身的感觉,例如改了这个程序,可能会影响其他的程序。
```

## 面向对象编程

```
OOP(Object-Oriented Programming)面向对象编程
面向对象程序设计的诞生为开发策略带来的极大的改变,
使编程的注意力重新从应用程序的逻辑回到其数据上来。
换句话说,OOP将焦点从过程式编程转向最终建模的真实体。
这使得应用程序更接近我们周围的现实世界。

OOP达到了软件工程的三个目标:重用性、灵活性和扩展性。
采用面向对象方法可以使系统各部分各司其职、各尽所能;
使其编程的代码更简洁、更易于维护,并且具有更强的可重用性
```

## 类

```
日常环境由无数实体组成:植物,人群,交通工具,食物... 每个实体都由一组性质和行为来定义。
例如: 男人可以定义有:身高,体重,是否帅,肤色等性质,并且定义有能赚钱,能下厨,能开车等行为。
在OOP术语中,实体的性质和行为的具体定义称为类
```

## 对象

```
通过类创建出来的实体称为对象。
对象是系统中用来描述客观事物的一个实体。
它是构成系统的一个基本单位,数据与代码都被捆绑在一个实体中。
一个对象由一组属性和对这组属性进行操作的一组行为组成。
从更抽象的角度来说,对象是问题域或实现域中某些事物的一个抽象.
它反映该事物在系统中需要保存的信息和发挥的作用.
它是一组属性和有权对这些属性进行操作的一组行为的封装体。
客观世界是由对象和对象之间的联系组成的。
```

## 类和对象的关系

```
类与对象的关系就如模具和铸件的关系,类的实例化结果就是对象,对象的抽象就是类.
类描述了一组有相同特性(属性)和相同行为(方法)的对象
```

## PHP的面向对象

```
PHP4开始提供了面向对象功能,但存在许多不足。
从PHP4到PHP5是一次全新革新,PHP5已经完全支持面向对象,对PHP面向对象功能大幅改进和提高。
```

## 定义类

```
<?php
Class test {
    public $name = "test";//声明属性，并且赋初值
    public $age = "22";

    public function say(){//方法
        echo '你好！';
    }

}

?>
```

## 创建对象(实例化)

```
创建对象使用 new 关键字
$test = new test();
```

## 属性

```
属性用于描述类某个层面的性质,它与一般的PHP变量非常相似。
因为PHP是弱类型的语类,属性甚至不需要声明;
但不建议这么做。相反常见的做法是在类开始处声明属性,可以为属性赋初值。
class test {
     public $name;
     public $age;
 }
```

## 方法

```
方法与函数非常相似,只不过方法用来定义特定类的行为。
与函数一样,方法可以接受输入参数,可以向调用者返回一个值.
public function say(){
    $str = 'hello';
    return $str;
}
```

## 访问对象中的成员

```
PHP对象中的成员有两种:一种是成员属性,一种是成员方法;
怎么去使用对象的成员呢?
要想访问对象中的成员就要使用一个特殊的操作符“->”来完成对象成员的访问

$test = new test;//实例化test类
echo $test->name;//访问对象属性
echo $test->say();//访问对象方法
```

## this

```
访问对象中的成员,是通过“对象->成员”的方式访问的.
这是在对象的外部去访问对象中成员的形式.
那么如果我想在对象的内部,让对象里的方法访问本对象的属性.
或者是对象中的方法去调用本对象的其它方法这时我们怎么办?
因为对象里面的所有的成员都要用对象来调用,包括对象的内部成员之间的调用,
所以在PHP里面给我们提供了一个本对象的引用$this;
class test {

   public $name;
   public $age;

   function say(){
       echo $this->name;
   }

}
```

## const常量

```
可以在类中定义常量,即不会在类中改变的值。
对于从该类实例化的任何对象来说,常量值在这些对象的整个生命周期中都保持不变。

类常量如下创建:const NAME = ‘value’;

假设定义一个与数学有关的类,其包括一些定义数学函数的方法以及常量
   class math_function {
       const PI = 3.1415926;
   }

访问常量
 echo self::PI; //类内部访问
 echo math_function::PI; //类外部访问
```

## static静态属性与静态方法

```
使用static 关键字可以用来标识成员属性,也可以用来标识成员方法.

static $test_static = 'value'; //属性

static function test(){   //方法

  }

声明类属性或方法为静态,就可以不实例化类而直接访问         
静态方法不需要通过对象即可调用,所以伪变量 $this 在静态方法中不可用。         
静态属性不可以由对象通过 -> 操作符来访问。         

 class Test{
       static $a='static';
       static function m(){
         return self::$a; //类内部访问
       }
   }
echo Test::$a; //外部访问属性         
echo Test::m(); //外部访问方法  

静态的成员属于类所有,所以我们在静态方法里,不能使用$this来引用静态成员.
建议使用self关键字来调用。
```

## 访问修饰符

### 什么是访问修饰符

```
访问修饰符允许开发人员对类成员的访问进行限制,这是PHP5的新特性。

public 公共修饰符
     类的成员将没有访问限制,所有的外部成员都可以访问(读和写)这个类成员。
     在属性或方法前面加上关键字public,或不加任何关键字,都可以声明一个公共属性或方法。

private 私有修饰符
     被定义为private的成员,对于同一个类的所有成员是可见的,即没有访问限制;
     但对于该类的外部代码是不允许改变甚至读操作,对于该类的子类也不能访问。

protected 保护修饰符
     被修饰为protected的成员不能被该类的外部代码访问。
     但是对于该类的直接子类有访问权限,可以进行属性、方法的读及写操作。
     被子类继承的protected成员,在子类外部同样不能被访问
```

#### public

```
<?php

class demo
{
    public $name = 'alan scott';

    public function test()
    {
        echo $this->name;
    }

}

$demo = new demo();

echo $demo->name;
echo "<br />";
echo $demo->test();


?>
```

#### private

```
<?php

class demo
{
    private $name = 'alan scott';

    public function test()
    {
        return $this->name;
    }
}

class test extends demo
{
    public function test2()
    {
        return $this->name;
    }
}

$demo = new demo();

echo $demo->test();
echo "<br />";

$test = new test();
echo $test->test2();//为空
?>
```

#### protected

```
<?php
class demo
{

    public $name = 'alan scott';
    protected $age = '1000';

    public function test()
    {
        return $this->age;
    }
}

class test extends demo
{
    public function test2()
    {
        return $this->age;
    }
}

$demo = new demo();

// echo $demo->age;//会报错
echo "<br />";
// echo $demo->test();

$test = new test();

// echo $test->age;//会报错
echo "<br />";
echo $test->test2();
?>
```

# 魔术方法

#### 什么是魔术方法

```
PHP 将所有以 __（两个下划线）开头的类方法保留为魔术方法。
所以在定义类方法时，除了上述魔术方法，建议不要以 __ 为前缀。

所有的魔术方法 必须 声明为 public。
```

#### 构造函数

```
构造函数
通常我们希望在对象实例化时可以初始化某些属性,或执行某些方法
当然,可以在对象实例化之后再这么做,不过如果能在实例化的时候自动完成这些操作会更方便
oop就有这样一种机制,称为构造函数

声明构造函数格式:
    class BaseClass
    {
        function __construct()
        {
            echo "In BaseClass constructor\n";
        }
    }

    $obj = new BaseClass();

    var_dump($obj);
```

#### 析构函数

```
析构函数
在PHP4中没有析构函数,php5中引入了析构函数。
析构函数允许在销毁一个类之前执行的一些操作或完成一些功能,
这些操作或功能通常在所有对该类的引用都被重置或超出作用域时自动发生。

    class BaseClass
    {
        function __destruct()
        {
            echo 'class instance destroyed';
        }
    }

    $obj = new BaseClass();

    var_dump($obj);
```

#### 魔术方法

```
魔术方法是PHP面向对象中特有的特性。
它们在特定的情况下被触发，都是以双下划线开头，你可以把它们理解为钩子。
利用魔术方法可以轻松实现PHP面向对象中重载。
魔术方法很多还是成对出现的，以下列出目前PHP中所有的模式方法。
```

#### __set()

```
<?php
Class test{

    /**
        当给不可访问或不存在属性赋值时被调用

    **/
    public  function __set($name,$val){

        echo "自动执行了test类中的__set方法,当前属性为:{$name},值为:{$val}";

    }
}

$test = new test();

$test->name = "小狗";
?>
```

#### __get()

```
<?php
Class test{
    /**
        读取不可访问或不存在属性时被调用
    **/
   public  function __get($name){

        echo "自动执行了test类中的__get方法,当前属性为:{$name}";

    }

}

$test = new test();

$name = $test->age;
?>
```

## 封装-继承-多态-对象链

### OOP三个基本概念

```
OOP三个基本概念:封装、继承、多态
```

### 封装

```
封装就是把对象的属性和行为结合成一个独立的相同单位,并尽可能隐蔽对象的内部细节信息隐蔽.
即尽可能隐蔽对象的内部细节,对外形成一道屏障.
只保留有限的对外接口使之与外部发生联系。

封装的原则在软件上的反映是:
要求使对象以外的部分不能随意存取对象的内部数据(属性).
从而有效的避免了外部错误对它的“交叉感染”,使软件错误能够局部化,大大减少查错和排错的难度。

类的封装性带来的优点:隐藏类的实现细节,让使用者只能通过事先定义好的方法来访问数据.
可以方便的加入逻辑控制,进行数据检查,限制对属性的不合理操作。便于修改增强代码的可维护性。

<?php
class test
{
    private $name;
    private $age;

    function get_age()
    {
        return $this->age;
    }

    function set_age($age)
    {
        if ($age < 0 || $age > 130) {
            return;
        }

        $this->age = $age;
    }
}
$test = new test();
$test->set_age(10);
$age = $test->get_age();
var_dump($test);
?>
```

### 继承

```
面向对象开发方法建立在继承概念的基础上,这种策略提高了代码的重用性。       
继承是指建立一个新的派生类,从先前定义的类中继承属性和方法.
而且可以重新定义或加进新的属性和方法,从而建立类的层次或等级。       
说的简单点就是,继承是子类自动共享父类的数据结构和方法的机制,这是类之间的一种关系。

在定义和实现一个类的时候,可以在一个已经存在的类的基础之上来进行,
把这个已经存在的类所定义的内容作为自己的内容,并加入若干新的内容。 


在PHP中,类继承通过 extends 关键字实现;
继承其他类的类称为子类(child class 或 subclass)
子类所继承的类称为父类( parent class) 或 基类 (base class)

<?php


class test
{
    private $x;
    private $y;

    public function __construct($x='',$y='')
    {
        $this->x = $x;
        $this->y = $y;
    }
    public function add()
    {
        return $this->x + $this->y;
    }
}

class demo extends test
{

}

$demo = new demo('2','3');
$add = $demo->add();
var_dump($add)
?>
```

### 多态

```
对象的多态性是指在父类中定义的属性或行为被子类继承之后.
可以具有不同的数据类型或表现出不同的行为。
这使得同一个属性或行为在父类及其各个子类中具有不同的语义。

<?php
class animal{
    public function can(){
        echo "this function weill be re-write in the children";
    }
}
class cat extends animal{
    public function can(){
        echo "I can climb";
    }
}
class dog extends animal{
    public function can(){
        echo "I can swim";
    }
}
function test($obj){
    $obj->can();
}
test(new cat());
test(new dog());
?>
```

### 对象链

```
实例化一个对象后，连续的调用多个方法成员。使用return this表示本对象

语法格式:

$obj->a()->b()->c();

<?php
class test
{
    public $name;
    public function __construct($name = '')
    {
        $this->name = $name;
    }
    public function self()
    {
        echo "我是{$this->name},";
        return $this;
    }
    public function eat()
    {
        echo "正在吃饭，";
        return $this;
    }
    public function sleep()
    {
        echo "已经吃饱，正在睡觉，非诚勿扰。";
        return $this;
    }
}
$test = new test('小明');
$test->self()->eat()->sleep();
?>
```

## 命名空间

```
php5.3新加的特性,为了避免产生类名冲突而产生的。
1、命名空间采用namespace来声明
2、如果在一个文件中包含命名空间,它必须在其它所有代码之前声明命名空间。
3、任意合法的PHP代码都可以包含在命名空间中,但只有三种类型的代码受命名空间的影响:类,函数和常量
4、不提倡在同一个文件中定义多个命名空间
5、use 别名使用
```

#### class.php

```
<?php
namespace test;//定义了一个名字空间

class test{
    public function demo()
    {
        echo 'test类里的demo方法';
    }
}

function time(){
  return "demo里面的time函数";
}

const PHP_OS='demo里面的常量';

?>
```

#### index.php

```
<?php
header('Content-Type:text/html;charset=utf-8');
include_once('class.php');

$test = new test\test();
use test as demo;//使用别名
$test = new demo\test();
$test->demo();

echo time();          //非限定名称
echo "<br>";
echo test\time();   //限定名称
echo "<br>";
echo \test\time();  //完全限定名称
?>
```