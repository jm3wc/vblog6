## PHP应用

## 表单操作

> #### $_GET

```
所有表单输入的数据被加载到请求的URL地址后面;
如：test.php?username=free&password=123&content=dfdsfsfd;
GET方式提交数据只能传递文本，能够提交的数据量大小有限，安全性差;
```

> #### $_POST

```
POST提交数据的方式把表单的数据打包放入http请求中;
POST能够提交更多的数据;
```

> #### 接收数据

```
表单提交的数据会自动封装为数组;     
用$_GET, $_POST, 或$_REQUEST获得表单提交的数据;
```

> #### 处理多值表单控件

```
多值表单控件（如复选框和多选框），大大提高了基于web的数据收集能力;
因为这些组件是多值的，所以表单处理函数必须能够识别一个表单变量中可能有
多个值;为了让php识别一个表单变量的多个值（即考虑为数组），需要对表单名
(元素的name属性值）增加一对中括号，如:

<input type="checkbox" name="love[]" />
```

> #### $_REQUEST

```
$_REQUEST 支持两种方式发送过来的请求，即 post 和 get 它都可以接受，显示不显示要看传递方法。
get 会显示在 url 中（有字符数限制），post 不会在 url 中显示，可以传递任意多的数据（只要服务器支持）
```

> #### 代码示例

## HTML代码

```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <form action="register.php" method="post">
        <table>
            <tr>
                <td>用户名：</td>
                <td><input type="text" name="username" placeholder="请输入用户名" required></td>
            </tr>
            <tr>
                <td>密码：</td>
                <td><input type="password" name="pwd" placeholder="请输入密码" required></td>
            </tr>
            <tr>
                <td>爱好</td>
                <td>
                    <input type="checkbox" name="love[]" value="1">看电影
                    <input type="checkbox" name="love[]" value="2">玩游戏
                    <input type="checkbox" name="love[]" value="3">写代码
                </td>
            </tr>
            <tr>
                <td></td>
                <td><input type="submit" value="登陆"></td>
            </tr>
        </table>
    </form>
</body>

</html>
```

## php代码

```
<?php
    // 接收POST提交过来的数据
    print_r($_POST);
?>
```

## COOKIE缓存 && SESSION缓存

## 什么是COOKIE

```
cookie是在http协议下,服务器或脚本可以维护客户端信息的一种方式。
cookie是web服务器保存在用户浏览器上的小甜饼(一个很小的文本文件)。
它可以包含有关用户的信息,常用于保存用户名,密码,个性化设置,个人偏好记录等。
当用户访问服务器时,服务器可以设置和访问cookie的信息。
cookie保存在客户端,通常是IE或Firefox浏览器的cookie临时文件夹中,可以手动删除。
Cookie是利用了网页代码中的HTTP头信息进行传递的,浏览器的每一次网页请求,都可以伴随Cookie传递。
注意:如果浏览器上cookie 太多,超过了系统所允许的范围,浏览器也会手动对它进行删除。
```

## cookie 工作原理

```
当客户访问某个基于PHP技术的网站时,在PHP中可以使用setcookie函数生成一个cookie.
系统经处理把这个cookie发送到客户端并保存在C:\Documents and Settings\用户名\Cookies目录下。

cookie是HTTP头的一部分,因此setcookie()函数必须在HTML本身的任何内容送到浏览器之前调用。
这种限制与header函数一样。

当客户再次访问该网站时。
浏览器会自动把C:\Documents and Settings\用户名\Cookies目录下与该站点对应的cookie发送到服务器.
服务器则把从客户端传来的cookie将自动地转化成一个PHP变量。
在PHP5中,客户端发来的cookie将被转换成全局变量。可以通过$_COOKIE['xxx']读取
```

## 设置cookie

| 参数   | 描述                           |
| :----- | :----------------------------- |
| name   | 设置cookie的名字.(必须)        |
| value  | 设置cookie的值                 |
| expire | 可选。规定 cookie 的过期时间。 |
| path   | 可选。规定 cookie 的服务器路径 |
| domain | 可选。规定 cookie 的域名       |
| secure | 可选                           |

```
语法
    setcookie(name,value,expire,path,domain,secure)
例
    setcookie(“username”, “admin”, time() + 60 * 60);
```

## 接收和使用cookie

```
PHP对cookie有很好的支持,和form表单一样.
在接收的时候PHP会自动从web服务器接收HTTP头并且分析它。接收的时候和表单接收一样    
echo $_COOKIE["username"];
```

## 删除Cookie

```
调用只带有name参数的setcookie,那么名为这个cookie将被从客户机上删除; 
例:setcookie(“MyCookie”);

设置Cookie的失效时间为time()或time()-1
setcookie("username","admin",time()-1);

time()减多少没有关系,只要是过期时间就行。
那么这个Cookie在这个页面的浏览完之后就被删除了(其实是失效了)。 
当这个Cookie被删除时,它的值在当前页仍然有效。
如果要把cookie设置成在浏览器关闭后就失效。那么可以直接把expiretime设为0,或者不设置此值。
setcookie("name","value",0)。
```

## 使用Cookie注意事项

```
setcookie()之前不能有任何html输出,就是空格,空白行都不行。       
setcookie()后,在当前页调用echo $_COOKIE[“name”]不会有输出。必须刷新或到下一个页面才可以看到cookie值。
使用cookie的限制。一个浏览器能创建的cookie数量最多为300个,并且每个不能超过4KB,
每个WEB站点能设置的cookie总数不能超过20个。
cookie是保存在客户端的,用户禁用了cookie,你的cookie自然也就没作用啦!
如果在某个页面获取不到cookie的，那需要设置cookie的第四个参数，
    例 
    setcookie("id",$id, time()+36002430 ,'/');
```

## 什么是会话控制

```
为了使得网站可以跟踪客户端与服务器之间的交互,保存和记忆每个用户的身份和信息.
我们需要一种强有力的解决方案,这样就产生了会话控制。
HTTP是一个无状态的协议,此协议无法来维护两个事务之间的联系。
当一个用户请求一个页面后再请求另外一个页面时,HTTP无法告诉我们这两个请求是来自同一个人。
会话控制思想就是能够在网站中跟踪一个变量,我们可以跟踪变量,就可以做到对用户的支持。
并根据授权和用户身份显示不同内容,不同页面。
```

## 什么是SESSION

```
Session从用户访问页面开始,到断开与网站连接为止,形成一个会话的生命周期。
在会话期间, 分配客户唯一的一个SessionID,用来标识当前用户,与其他用户进行区分。

Session会话时,SessionID会分别保存在客户端和服务器端两个位置,
对于客户端使用临时的Cookie保存(Cookie名称为PHPSESSID)或者通过URL字符串传递,
服务器端也以文本文件形式保存在指定的Session目录中。

Session通过ID接受每个访问请求,
从而识别当前用户、跟踪和保持用户具体资料,以及Session变量,
比如session_name等等,这些变量信息保存在服务器端。

SessionID可以作为会话信息保存到数据库中,进行Session持久化,
这样可以跟踪每个用户的登陆次数、在线与否、在线时间等。
```

## 使用会话的基本步骤

开始会话 > 注册会话变量 > 使⽤会话变量 > 注销变量并销毁会话

## 开始会话

```
session_start() 开始一个会话或者返回已经存在的会话。

说明:这个函数没有参数,且返回值均为true。
如果你使用基于cookie的session,那么在使用session_start()之前浏览器不能有任何输出,
否则会发生以下错误:
Warning: Cannot send session cache limiter - headers already sent 
(output started at /var/www/html/test.php:2)

也可以在php.ini中启动session.auto_start=1,
这样就无需每次使用session之前都要调用session_start()。
启用此指令的缺点是无法在会话中存储对象,因为定义要在会话开始之前加载才能重新创建对象。
```

## 注册、使用会话变量

```
PHP5使用$_SESSION[‘xxx’]=xxx 注册SESSION全局变量。和GET,POST,COOKIE的使用方法相似。
session_start();
$_SESSION['username'] = "david";
echo "Your username is ".$_SESSION['username'];
```

## 注销会话变量

```
session_unset()函数清除存储在当前会话中的所有变量,它能有效地将会话重置为创建时的状态。

session_destroy()函数从存储机制中完全删除会话,使当前会话失效。
```

## 如何存储session信息

```
session.save_path = /tmp;     设为文件时, session文件保存的路径
session.use_cookies = 1 ;     是否使用cookies
session.name = PHPSESSID;     在cookie的session的名字
session.auto_start = 0 ;      是否自动启动session
session.cookie_lifetime = 0;  设置会话cookie的有效期,以秒为单位,为0时表示直到浏览器被重启
session.cookie_path = / ;     cookie的有效路径
session.cookie_domain = ;     cookie的有效域
session.cache_expire = 180;   设置缓存中的会话文档在 n 分钟后过时
```

## cookie和session的区别

```
cookie和session都可以暂时保存多个页面中使用的变量。

但是它们有本质的差别:cookie 存放在客户端浏览器中，session保存在服务器上;

它们之间的联系是sessionID一般保存在cookie中,或者放在URL上。

当客户端禁用cookie时,session_id将无法传递, 此时session失效。

不过php5在linux/unix平台可以自动检查cookie状态,如果客户端设置了禁用,

则系统自动把session_id附加到url上传递。windows主机则无此功能
```

## PHP验证码功能实现

## 什么是验证码

```
就是将一串随机产生的数字或符号，生成一幅图片，图片里加上一些干扰象素（防止OCR）。
由用户肉眼识别其中的验证码信息，输入表单提交网站验证，验证成功后才能使用某项功能。
作用的是现代的验证码一般是防止机器批量注册的，防止机器批量发帖回复。
目前，不少网站为了防止用户利用机器人自动注册、登录、灌水，刷票都采用了验证码技术。
```

## 第一步：先新建imgcode.php文件，用写验证码的代码

```
<?php
    //验证码
    //设置验证码内的字符
    //参数$length,每次获取几个随机字符
    function get_str($length=1){
        $chars='3456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';//字符库
        $s=str_shuffle($chars);//随机打乱字符串
        $str=substr($s,0,$length);
        return $str;
    }
    //echo get_str();
    //生成验证码
    //创建图片
    $width=80;
    $height=34;
    // 创建画布
    $img=imagecreatetruecolor($width,$height);
    //设置背景颜色,颜色必须使用rgb格式
    $bgcolor=imagecolorallocate($img,238,238,238);//#eeeeee
    //设置文字颜色
    $textcolor=imagecolorallocate($img,255,0,0);//#ff0000
    //绘制图片背景,把背景颜色加入图片
    imagefilledrectangle($img,0,0,$width,$height,$bgcolor);
    //第2个和第3个参数是左上角坐标
    //第4个和第5个参数是右下角坐标
    //这两个坐标可以确定一块矩形区域
    //获取验证码字符,每次1个一共获取4个随机字符
    $get_code1=get_str();
    $get_code2=get_str();
    $get_code3=get_str();
    $get_code4=get_str();
    //把验证码放入图片内
    $font='images/texb.ttf';//注意：如果写相对路径，验证码出不来时，把路径写成绝对路径
    imagettftext($img,16,mt_rand(-30,30),1,26,$textcolor,$font,$get_code1);
    imagettftext($img,16,mt_rand(-30,30),20,26,$textcolor,$font,$get_code2);
    imagettftext($img,16,mt_rand(-30,30),40,26,$textcolor,$font,$get_code3);
    imagettftext($img,16,mt_rand(-30,30),60,26,$textcolor,$font,$get_code4);
    //第一个参数是图片变量
    //第二个参数是字体大小
    //第三个参数是字符倾斜度,负数向左,正数向右,数值越大角度越大
    //第四个和第五个参数是字符所在位置的x坐标和y坐标
    //第六个参数是字符颜色
    //第七个参数是字体库
    //第八个参数是需要放进去的字符

    //绘制一些点状像素
    for($i=0;$i<=10;$i++){
        imagesetpixel($img,mt_rand(0,$width),mt_rand(0,$height),imagecolorallocate($img,mt_rand(0,255),mt_rand(0,255),mt_rand(0,255)));
    }
    //第二个和第三个参数是点的位置坐标
    //第四个参数是点的颜色

    //绘制一些线像素
    for($i=0;$i<=5;$i++){
        imageline($img,mt_rand(0,$width),mt_rand(0,$height),mt_rand(0,$width),mt_rand(0,$height),imagecolorallocate($img,mt_rand(0,255),mt_rand(0,255),mt_rand(0,255)));
    }
    //第2/3/4/5个参数是线的两端坐标

    //将验证码中的四个字符保存在session里面
    session_start();
    $get_code=$get_code1.$get_code2.$get_code3.$get_code4;
    $_SESSION['imgcode']=$get_code;

    //输出图片
    header('Content-Type:image/png');
    imagepng($img);


?>
```

## Ajax异步通信与JSON数据类型

## 什么是Ajax

```
Ajax 的全称是 Asynchronous JavaScript And XML (异步Javascript和XML)。
它不是一项新的技术,而是由多种技术组合而成。

2005年2月18日,Adaptive Path公司的Jess James Garrett发表了一篇名为：
Ajax:A NewApproach to Web Applications(Ajax技术:开发web应用的新思路)的文章。
说白了Ajax技术说的是把Javascript、Css、Dom和(X)HTML结合起来的一种新用法。
这种结合并不是新概念，事实上DHTML技术早就把这几样技术结合在一起了。
Ajax的独到之处在于它在服务器端使用了异步(Asynchronous)处理技术。
```

## Ajax包含了以下几种技术

```
基于web标准（standards-based presentation）XHTML+CSS的表示；
使用 DOM（Document Object Model）进行动态显示及交互；
使用 XML 和 XSLT 进行数据交换及相关操作；
使用 XMLHttpRequest 进行异步数据查询、检索；
使用 JavaScript 将所有的东西绑定在一起。
类似于DHTML或LAMP，AJAX不是指一种单一的技术，而是有机地利用了一系列相关的技术。
```

## Ajax与传统Web程序的区别

图1.传统Web模式的工作流程

 ![img](http://web.wdwangke.com/mdphoto/backend/backend/ajax/ajax1.png)

图2.Ajax程序的工作流程

 ![img](http://web.wdwangke.com/mdphoto/backend/backend/ajax/ajax3.png)

## jQuery.ajax

```
通过 HTTP 请求加载远程数据。
jQuery 底层 AJAX 实现。简单易用的高层实现见 $.get, $.getJSON, $.post 等。
$.ajax() 返回其创建的 XMLHttpRequest对象。
要加载jq库文件
```

> jQuery.ajax(url,[settings])：通过 HTTP 请求加载远程数据。

| 参数     | 说明                                |
| :------- | :---------------------------------- |
| url      | 一个用来包含发送请求的URL字符串。   |
| settings | AJAX 请求设置。所有选项都是可选的。 |

```
// 加载jq库
<script src="https://ajax.aspnetcdn.com/ajax/jquery/jquery-3.5.1.min.js"></script>
// ajax请求
<script>
    $.ajax({
        type: 'get',//请求的方式
        url: "jq_ajax.php",//请求的地址
        data: {// 请求参数
            username: username,
            pwd: pwd
        },
        datetype: 'json',//预期服务器返回的数据类型
        success: function (z) {// 成功回调的函数
            console.log(z);
        }
        error:function(error){// 错误回调的函数
            console.log(error);
        }
    })
</script>
```

## 同源策略

```
同源策略，它是由Netscape提出的一个著名的安全策略。
现在所有支持JavaScript 的浏览器都会使用这个策略。
所谓同源是指，域名，协议，端口相同。
当一个浏览器的两个tab页中分别打开来 
百度和谷歌的页面当浏览器的百度tab页执行一个脚本的时候会检查这个脚本是属于哪个页面的，
即检查是否同源，只有和百度同源的脚本才会被执行。
如果非同源，那么在请求数据时，浏览器会在控制台中报一个异常，提示拒绝访问。
```

## jsonp跨域 && CORS跨域

```
首先抛出浏览器同源策略这个概念，为了保证用户访问的安全，现代浏览器使用了同源策略，即不允许访问非同源的页面

在ajax中，不允许请求非同源的URL就可以了，比如www.a.com下的一个页面，
其中的ajax请求是不允许访问www.b.com/c.php这样一个页面的。

JSONP就是用来解决跨域请求问题的

ajax请求受同源策略影响，不允许进行跨域请求，而script标签src属性中的链接却可以访问跨域的js脚本,
利用这个特性，服务端不再返回JSON格式的数据，而是返回一段调用某个函数的js代码
在src中进行了调用，这样实现了跨域。

跨域资源共享（CORS ）是一种网络浏览器的技术规范，它为Web服务器定义了一种方式，
允许网页从不同的域访问其资源。 
CORS就是为了让AJAX可以实现可控的跨域访问而生的.

CORS与JSONP相比:
    JSONP只能实现GET请求，而CORS支持所有类型的HTTP请求。
    使用CORS，开发者可以使用普通的XMLHttpRequest发起请求和获得数据，比起JSONP有更好的错误处理。
    JSONP主要被老的浏览器支持，但它们往往不支持CORS，而绝大多数现代浏览器都已经支持了CORS。

本质是HTML5 xhr level2原生ajax请求！

CORS只需要在后台中加上响应头来允许域请求！
在被请求的Response header中加入以下设置，就可以实现跨域访问了！

//指定允许其他域名访问
'Access-Control-Allow-Origin:*'//或指定域
//响应类型
'Access-Control-Allow-Methods:GET,POST'
//响应头设置
'Access-Control-Allow-Headers:x-requested-with,content-type'
```

**demo.html**

```
<script type="text/javascript">
    $.ajax({
        type: "get",
        async: false,
        url: "http://www.demo.com/demo.php",
        dataType: "jsonp",
        jsonp: "callback", //请求php的参数名
        jsonpCallback: "jsonhandle",//要执行的回调函数
    });

    function jsonhandle(data) 
    {
        console.log(data);
    }
</script>
```

**demo.php**

```
<?php
header('Access-Control-Allow-Origin:*');

header('Access-Control-Allow-Methods:POST');

header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, x-file-name");

$data = array(
    'age' => 20,
    'name' => '张三',
);

$callback = $_GET['callback'];

echo $callback."(".json_encode($data).")";
exit;

?>
```

## JSON

```
JSON(JavaScript Object Notation) 是一种轻量级的数据交换格式。 
易于人阅读和编写。同时也易于机器解析和生成。 
它基于 JavaScript Programming Language, Standard ECMA-262 3rd Edition - December 1999的一个子集。
JSON采用完全独立于语言的文本格式,但是也使用了类似于C语言家族的习惯
(包括C, C++, C#, Java, JavaScript, Perl, Python等)

JSON有两种结构：对象结构，数组结构
对象结构是使用大括号“{}”括起来的，大括号内是由0个或多个用英文逗号分隔的“关键字:值”对（key:value）构成的。
var jsonObj =
{
    "键名1":"值1",
    "键名2":"值2",
    ……
    "键名n":"值n"
}
JSON数组结构是用中括号“[]”括起来，中括号内部由0个或多个以英文逗号“,”分隔的值列表组成。
var arr =
[
    {
        "键名1":"值1",
        "键名2":"值2"
    },
    {
        "键名1":"值3",
        "键名2":"值4"
    }
]

用于Ajax或者数据交互的数据格式的统一，但是还有另一种用于数据交互时的数据格式统一的可扩展标记语言，简称XML
它可以用来标记数据、定义数据类型，是一种允许用户对自己的标记语言进行定义的源语言。 它非常适合万维网传输，提供统一的方法来描述和交换独立于应用程序或服务器的结构化数据。
```

## JSON库中有一个全局JSON对象, 有2个方法:parse() 和 stringify()

## parse() 用于从一个字符串中解析出json 对象

> JSON.parse(text [, reviver])

| 参数    | 说明                                  |
| :------ | :------------------------------------ |
| text    | text 必需。 有效的 JSON 文本          |
| reviver | reviver 选项。 筛选和转换的结果的函数 |

```
//切记 js语句中 字符串包含json格式的数据外层最好用单引号
var jsontext ='{"firstname":"Jesper","surname":"Aaberg","phone":["555- 0100","555-0120"]}';
var contact = JSON.parse(jsontext);
var fullname = contact.surname + "," + contact.firstname;
```

## stringify 方法用于从一个对象解析出字符串

> JSON.stringify(value [, replacer] [, space])

| 参数     | 说明                                                    |
| :------- | :------------------------------------------------------ |
| value    | 必需,JavaScript 值,该值通常对象或数组,将序列化          |
| replacer | 筛选和转换的结果的函数或数组                            |
| space    | 添加缩进,空白和换行符到的返回值JSON文本使代码更容易阅读 |

```
var arr=['apple','banana',{test:'123'}]; 
var z= JSON.stringify(arr); 
//["apple","banana",{"test":"123"}] 
console.log(z);
```

## PHP中接收和传递JSON

```
json_decode — 对 JSON 格式的字符串进行编码
json_encode — 对变量进行 JSON 编码
```

### json_decode

> mixed json_decode ( string $json [, bool $assoc ] )

| 参数  | 说明                                      |
| :---- | :---------------------------------------- |
| json  | 待解码的 json string格式的字符串          |
| assoc | 当该参数为 TRUE 时,将返回 array 非 object |

```
使用json_decode的一些注意事项
    使用UTF-8编码
    不能在最后元素有逗号
    不能使用单引号
    不能有\r,\t，如果有请替换

$json = '{"a":1,"b":2,"c":3,"d":4,"e":5}';
var_dump(json_decode($json)); 
var_dump(json_decode($json, true));
```

### json_encode

> string json_encode ( mixed $value )

| 参数  | 说明          |
| :---- | :------------ |
| value | 待编码的value |

```
$arr = array ('a'=>1,'b'=>2,'c'=>3,'d'=>4,'e'=>5); 
echo json_encode($arr);
// {"a":1,"b":2,"c":3,"d":4,"e":5}
```

## PHP分页

```
当某个列表的数据过多时，一般都会设置分页功能。
```

#### [分页样式表](http://web.wdwangke.com/mdwork/backend/phpuse/page.zip)

#### 分页功能的代码

```
<?php

/* 
*   获取当前的网址   
*/

function get_url()
{
    // 获取当前的完整地址
    $str = $_SERVER['PHP_SELF'] . '?';

    if($_GET){
        foreach($_GET as $k => $v){
            if($k != 'page'){
                $str.= $k.'='.$v.'&';
            }
        }
    }

    return $str;

}

/** 
 * 
 * 分页函数
 * @pargam $current 当前页
 * @pargam $count   记录总数
 * @pargam $limit   每页显示多少条
 * @pargam $size    中间显示多少条
 * @pargam $class   样式
 * 
*/
function page($current,$count,$limit,$size,$class='digg')
{
    $str = '';
    if($count > $limit){
        // 算出总页数
        $pages = ceil($count / $limit);
        // 获取当前页面的url（带有参数的）
        $url = get_url();
        // 开始拼接分页
        $str.='<div class="'.$class.'">';

        // 判断当前页是否是1
        if($current == 1){
            $str.='<span class="disabled">首&nbsp;&nbsp;页</span>';
            $str.='<span class="disabled">上一页</span>';
        }else{
            $str.='<a href="'.$url.'page=1">首&nbsp;&nbsp;页</a>';
            $str.='<a href="'.$url.'page='.($current - 1).'">上一页</a>';
        }

        // 中间
        if($current<=floor($size / 2)){
            $start = 1;
            $end = $pages < $size ? $pages : $size;
        }elseif ($current >= $pages - floor($size / 2)) {
            $start = $pages - $size + 1 <= 0 ? 1 : $pages - $size + 1;
            $end = $pages;
        }else {
            $start = $current - floor($size / 2);
            $end = $current + floor($size / 2);
        }

        for($i=$start;$i<=$end;$i++){
            if($i==$current){
                $str.='<span class="current">'.$i.'</span>';
            }else{
                $str.='<a href="'.$url.'page='.$i.'">'.$i.'</a>';
            }
        }

        //最后
        if($pages==$current){
            $str .='<span class="disabled">下一页</span>';
            $str.='<span class="disabled">尾&nbsp;&nbsp;页  </span>';
        }else{
            $str.='<a href="'.$url.'page='.($current+1).'">下一页</a>';
            $str.='<a href="'.$url.'page='.$pages.'">尾&nbsp;&nbsp;页 </a>';
        }

        $str.='</div>';
    }

    return $str;
}
```

#### 调用分页

```
<?php

// 引用函数库
include_once('function.php');
// 引用分页函数
include_once('page.php');

// 获取当前的页码
$page = isset($_GET['page']) ? $_GET['page'] : 1;

// 获取admin表的数据总数
$CountSql = "SELECT COUNT(*) AS C FROM pre_admin";
$count = find($CountSql);

// 每页显示多少条数据
$limit = 10;

// 每页显示多少个分页的页码数
$size = 5;

$ShowPage = page($page,$count['c'],$limit,$size);

// 偏移量 -> 索引值
$start = ($page - 1);

// 按索引值以及每页显示多少条数据去查询admin表的数据
$AdminSql = "SELECT * FROM pre_admin ORDER BY id DESC LIMIT $start,$limit";
$AdminList = all($AdminSql);

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <!-- 引用分页样式 -->
</head>
<body>
    <!-- 数据输出 -->

    <!-- 分页输出 -->
    <?php echo $ShowPage; ?>
</body>
</html>
```

## 文件上传

### 文件上传的相关配置

```
表单设置
    要进行文件的上传，需要对form表单进行特殊设置;
    1.设定表单数据的提交方式为POST
    2.设定enctype属性值为: multipart/form-data
    3.为了避免用户等待许久之后才发现上传文件太大，可以在表单中添加
      MAX_FILE_SIZE隐藏域,通过设置其value值可以限制上传文件的大小;

PHP设置

1.file_uploads
      是否允许通过HTTP上传文件，默认为ON

2.upload_max_filesize
      允许上传文件大小的最大值，默认为2M，此指令必须小于post_max_size;

3.upload_tmp_dir
      指定上传文件的临时存放路径，这个目录对于拥有此服务器进程的用户必须是可写的;
      如果未指定则使用系统默认值;

4.post_max_size
      控制POST方式提交数据php所能够接收的最大数据量;

5.memory_limit
      指定单个脚本程序可以使用的最大内存容量;

6.max_execution_time
      此指令确定php脚本可以执行的最长时间，以秒为单位，默认为30秒;
```

### $_FILES 数组

```
$_FILES超级全局变量作用是存储各种与上传文件有关的信息;
$_FILES是一个二维数组，数组中共有5项：

$_FILES["userfile"]["name"] 上传文件的名称

$_FILES["userfile"]["type"]   上传文件的类型

$_FILES["userfile"]["size"]   上传文件的大小, 以字节为单位

$_FILES["userfile"]["tmp_name"] 文件上传后在服务器端储存的临时文件名

$_FILES["userfile"]["error"]  文件上传相关的错误代码

注:userfile只是一个占位符，代表文件上传表单元素的名字; 因此这个值将根据你所给定的名称有所不同;
```

### 上传错误信息

```
$_FILES['userfile']['error']  提供了在文件上传过程中出现的错误：

1.UPLOAD_ERR_OK (value = 0)    
  如果文件上传成功返回0;

2.UPLOAD_ERR_INI_SIZE (value = 1)
  如果试图上传的文件大小超出了 upload_max_filesize指令指定的值，则返回1;

3.UPLOAD_ERR_FORM_SIZE (value = 2)
  如果试图上传的文件大小超出了MAX_FILE_SIZE指令（可能嵌入在HTML表单中）指定的值，则返回2;

4.UPLOAD_ERR_PARTIAL (value = 3)
  如果文件没有完全上传，则返回3; 如网络出现错误，导致上传过程中断;

5.UPLOAD_ERR_NO_FILE (value = 4)
  如果用户没有指定上传的文件就提交表单，则返回4
```

### 文件上传函数

```
is_uploaded_file()  move_uploaded_file()
```

### is_uploaded_file

| 参数 | 描述                     |
| :--- | :----------------------- |
| file | 必需。规定要检查的文件。 |

```
is_uploaded_file(file) 函数检查指定的文件是否是通过 HTTP POST 上传的。

if(is_uploaded_file($_FILES['userfile']['tmp_name'])){
  copy($_FILES['userfile']['tmp_name'], "test.txt");
}else{
  echo "文件上传失败！";
}
```

### move_uploaded_file

| 参数   | 描述                     |
| :----- | :----------------------- |
| file   | 必需。规定要移动的文件。 |
| newloc | 必需。规定文件的新位置。 |

```
move_uploaded_file()作用是将上传文件从临时目录移动到目标目录; 
虽然copy()也可以实现同样功能，
但move_uploaded_file()还提供了一种额外的功能，
它将检查由filename输入参数指定的文件确实是通过http post 上传机制上传的。
如果所指定的文件并非上传文件，则移动失败，返回false;

move_uploaded_file($_FILES['userfile']['tmp_name'], "1/test.jpg");
```

### 图片上传

##### function.php

```
<?php
/*1,通过$_FILES 接收表单上传的图片元素
2,通过$_FILES['input_name']['error']; 判断文件是否上传到服务器
3,定义新的文件名称
4,通过is_uploaded_file函数  判断$_FILES['input_name']['tmp_name'] 是否是通过http post方式上传的
5,然后使用move_uploaded_file($_FILES['input_name']['tmp_name'],'./images/1.jpg');
函数移动图片到指定目录
*/
//图片上传的函数
/*
$name,input框的name值
$type,上传图片的类型
$size,上传图片的大小
$upload,上传的图片保存的目录
*/
function upload($name, $type = array('jpg', 'jpeg', 'png', 'gif'), $size = 1048576, $upload = 'upload')
{
    //1、判断错误值
    $error = $_FILES[$name]['error'];
    switch ($error) {
        case 1:
            return '上传大小不能超过upload_max_filesize设置的值';
            break;
        case 2:
            return '上传大小不能超过MAX_FILE_SIZE设置的值';
            break;
        case 3:
            return '图片上传不完整';
            break;
        case 4:
            return '没有选择图片';
            break;
    }
    //2、判断文件的类型
    $pre = pathinfo($_FILES[$name]['name'], PATHINFO_EXTENSION);
    if (!in_array($pre, $type)) { //后缀没有在$type里面出现
        return '上传的图片类型错误';
    }
    //3、再次限制图片大小
    $s = $_FILES[$name]['size'];
    if ($s > $size) {
        return '图片过大,请压缩后上传';
    }
    //4、保存图片
    //首先设置好保存之后图片的名称
    $file = date('YmdHis', time()) . mt_rand(1000, 9999) . mt_rand(1000, 9999) . '.' . $pre;
    if (is_uploaded_file($_FILES[$name]['tmp_name'])) {
        //先判断图片有没有上传到服务器的临时文件夹
        move_uploaded_file($_FILES[$name]['tmp_name'], $upload . '/' . $file);
        return '图片上传成功,' . $file;
    } else {
        return '图片上传错误';
    }
}
?>
```

## 文件操作

> #### 什么是文件操作

PHP 拥有的多种函数可供创建、读取、上传以及编辑文件

> #### 读取文件

### file_get_contents

| 参数         | 描述                                                         |
| :----------- | :----------------------------------------------------------- |
| path         | 必需。规定要读取的文件。                                     |
| include_path | 可选。                                                       |
| context      | 可选                                                         |
| start        | 可选。规定在文件中开始读取的位置。该参数是 PHP 5.1 中新增的。 |
| max_length   | 可选。规定读取的字节数。该参数是 PHP 5.1 中新增的。          |

```
file_get_contents(path,include_path,context,start,max_length) 函数将文件内容读到字符串中;

$str = file_get_contents("a.txt");
var_dump($str);
```

### 写入文件

```
file_put_contents()
```

### file_put_contents

```
函数把一个字符串写入文件中。与依次调用 fopen()，fwrite() 以及 fclose() 功能一样。  

$str = "hello";
file_put_contents("test.txt", $str);  返回写入文件的长度
```

### 复制,重命名,移动,删除文件

### copy

| 参数    | 描述                         |
| :------ | :--------------------------- |
| file    | 必需。规定要复制的文件。     |
| to_file | 必需。规定复制文件的目的地。 |

```
copy(file,to_file) 将文件从 source 拷贝到 dest。如果成功则返回 TRUE,失败则返回 FALSE。

copy("test.txt", "test.txt.bak");
```

### rename

| 参数    | 描述                                                         |
| :------ | :----------------------------------------------------------- |
| oldname | 必需。规定要重命名的文件或目录。                             |
| newname | 必需。规定文件或目录的新名称。                               |
| context | 可选。规定文件句柄的环境。context 是一套可以修改流的行为的选项。 |

```
rename(oldname,newname,context) 重命名和移动文件

rename("b.txt","c.txt");  //重命名文件(oldname,newnanme)
rename("c.txt","./a/c.txt");   //移动文件
```

### unlink

| 参数     | 描述                             |
| :------- | :------------------------------- |
| filename | 必需。规定要重命名的文件或目录。 |
| context  | 可选                             |

```
unlink(filename,context) 函数删除文件。

unlink("a.txt");      //删除文件
```

### filesize

| 参数     | 描述                     |
| :------- | :----------------------- |
| filename | 必需。规定要检查的文件。 |

```
filesize(filename) 函数返回指定文件的大小。

echo filesize("test.txt");
```

### file_exists

| 参数 | 描述                     |
| :--- | :----------------------- |
| path | 必需。规定要检查的路径。 |

```
file_exists(path) 检查文件是否存在 存在返回 true 否则返回 false

var_dump(file_exists("a.txt"));
```

### 目录操作

### scandir

| 参数          | 描述                     |
| :------------ | :----------------------- |
| directory     | 必需。规定要扫描的目录。 |
| sorting_order | 可选                     |
| context       | 可选                     |

```
var_dump(scandir("."));         //返回当前目录下面的文件结构数组
```

### mkdir

| 参数      | 描述                                           |
| :-------- | :--------------------------------------------- |
| path      | 必需。规定要创建的目录的名称。                 |
| mode      | 可选。规定权限。默认是 0777（允许全局访问）。  |
| recursive | 可选。规定是否设置递归模式。（PHP 5 中新增的） |

```
mkdir(path,mode,recursive,context) 函数创建目录。

mkdir("testing");
```

### rmdir

| 参数    | 描述                   |
| :------ | :--------------------- |
| dir     | 必需。规定要删除的目录 |
| context | 可选                   |

```
rmdir(dir,context) 函数删除空的目录。

$path = "images";
if(!rmdir($path))
{
echo "Could not remove $path";
}
```

### basename

| 参数   | 描述                                                         |
| :----- | :----------------------------------------------------------- |
| path   | 必需。规定要检查的路径。                                     |
| suffix | 可选。规定文件扩展名。如果文件有名有文件扩展名，将不会显示这个扩展名 |

```
basename(path,suffix) 函数返回路径中的文件名部分

$path = "/testweb/home.php";

//显示带有文件扩展名的文件名
echo basename($path) ."<br/>";

//显示没有文件扩展名的文件名
echo basename($path,".php");
```

### dirname

| 参数 | 描述                     |
| :--- | :----------------------- |
| path | 必需。规定要检查的路径。 |

```
dirname(path) 函数返回路径中的目录名称部分。

echo dirname("c:/testweb/home.php") . "<br />";
echo dirname("/testweb/home.php");
```

### pathinfo

| 参数    | 描述                                                         |
| :------ | :----------------------------------------------------------- |
| path    | 必需。规定要检查的路径。                                     |
| options | 可选。PATHINFO_DIRNAME，PATHINFO_BASENAME，PATHINFO_EXTENSION |

```
pathinfo(path,options) 返回一个关联数组 其中包括路径中的三个部分：目录名，文件名，扩展名，

pathinfo($_SERVER['SCRIPT_FILENAME'],PATHINFO_DIRNAME);//返回路径部分
pathinfo($_SERVER['SCRIPT_FILENAME'].PATHINFO_BASENAME);//返回文件名
pathinfo($_SERVER['SCRIPT_FILENAME'],PATHINFO_EXTENSION);//返回后缀部分
```

### is_dir

| 参数 | 描述                     |
| :--- | :----------------------- |
| path | 必需。规定要检查的文件。 |

```
is_dir(file) 判断是否是一个目录

$file = "images";
if(is_dir($file))
{
echo ("$file 是一个目录");
}
else
{
echo ("$file 不是一个目录");
}
```

### is_file

| 参数 | 描述                     |
| :--- | :----------------------- |
| file | 必需。规定要检查的文件。 |

```
is_file(file) 函数检查指定的文件是否是常规的文件。

$file = "test.txt";
if(is_file($file))
{
echo ("$file 是一个常规文件");
}
else
{
echo ("$file 不是一个常规文件");
}
```

## PHP正则表达式

> #### 什么是正则表达式

```
正则表达式就是一套专门用于处理文本的强大工具,可以对进行文本查找，匹配，替换;
正则表达式常用于验证表单提交的内容，比如验证电话号码，Email地址，身份证号码等是否有效;

php支持两种风格的正则表达式：Perl风格   Posix 风格

Perl风格
  PCRE全称为Perl Compatible Regular Expression，意思是Perl兼容正则表达式。
  PCRE来源于Perl语言，而Perl是对字符串操作功能最强大的语言之一，PHP的最初版本就是由Perl开发的产品。
  在PCRE中，通常将正则表达式 包含在两个反斜线"/"之间;
  例："/apple/"
  定界符也不仅仅局限于"/"。除了字母、数字和斜线"\"以外的任何字符都可以作为定界符.
  像"#"、"/"、"!"等都可以的。

Posix 风格
  一般而言，实现相同的功能Perl风格的，效率高些，我们一般使用Perl风格的函数！
  而且在PHP7.0版本后该风格已经被弃用了
```

> #### Perl 兼容正则表达式函数

##### `preg_match`

```
preg_match()         进行正则表达式匹配

语法：
    int preg_match ( string $pattern , string $subject [, array &$matches [, int $flags = 0 [, int $offset = 0 ]]] )
```

| 参数    | 描述                                        |
| :------ | :------------------------------------------ |
| pattern | 要搜索的模式，字符串类型                    |
| subject | 输入字符串                                  |
| matches | 如果提供了参数matches，它将被填充为搜索结果 |
| flags   | flags可以被设置为以下标记值                 |
| offset  | 通常，搜索从目标字符串的开始位置开始        |

```
例：
    $res;
    preg_match("/hello/", "hello world", $res);
    print_r($res);

    //'/hello/'   进行匹配的模式
    //"hello world"   匹配的字符串
    //$res            将匹配的结果存放到一个变量里面
```

##### `preg_match_all`

```
搜索 subject 中所有匹配 pattern 给定正则表达式的匹配结果并且将它们以 flag 指定顺序输出到 matches 中。
在第一个匹配找到后, 子序列继续从最后一次匹配位置搜索。

语法：
    int preg_match_all ( string $pattern , string $subject [, array &$matches [, int $flags = PREG_PATTERN_ORDER [, int $offset = 0 ]]] )

$pattern: 要搜索的模式，字符串形式。

$subject: 输入字符串。

$matches: 多维数组，作为输出参数输出所有匹配结果, 数组排序通过flags指定。

$flags：可以结合下面标记使用(注意不能同时使用PREG_PATTERN_ORDER和 PREG_SET_ORDER)：

PREG_PATTERN_ORDER: 结果排序为$matches[0]保存完整模式的所有匹配, $matches[1] 保存第一个子组的所有匹配，
                    以此类推。

PREG_SET_ORDER: 结果排序为$matches[0]包含第一次匹配得到的所有匹配(包含子组)， 
                $matches[1]是包含第二次匹配到的所有匹配(包含子组)的数组，以此类推。

PREG_OFFSET_CAPTURE: 如果这个标记被传递，每个发现的匹配返回时会增加它相对目标字符串的偏移量。

offset: 通常， 查找时从目标字符串的开始位置开始。可选参数offset用于 从目标字符串中指定位置开始搜索(单位是字节)。

例：
    $res;
    preg_match_all("/h/", "hello hello", $res);   //进行正则表达式全局匹配
    print_r($res);
```

##### `preg_replace`

```
执行正则表达式的搜索和替换

语法：
    mixed preg_replace ( mixed $pattern , mixed $replacement , mixed $subject [, int $limit = -1 [, int &$count ]] )
```

| 参数        | 描述                                                         |
| :---------- | :----------------------------------------------------------- |
| pattern     | 要搜索的模式，字符串类型                                     |
| replacement | 用于替换的字符串或字符串数组                                 |
| subject     | 要进行搜索和替换的字符串或字符串数组                         |
| limit       | flags可以被设置为以下标记值每个模式在每个subject上进行替换的最大次数 |
| count       | 如果指定，将会被填充为完成的替换次数                         |

```
例：
    $res = preg_replace("/hello/","aaaa","hello world");
    var_dump($res); //aaaa  world
```

##### `preg_split`

```
用正则表达式分割字符串

语法：
    array preg_split ( string $pattern , string $subject [, int $limit = -1 [, int $flags = 0 ]] ) 

$pattern: 用于搜索的模式，字符串形式。

$subject: 输入字符串。

$limit: 可选，如果指定，将限制分隔得到的子串最多只有limit个，返回的最后一个 子串将包含所有剩余部分。limit值为-1，
        0或null时都代表"不限制"， 作为php的标准，你可以使用null跳过对flags的设置。

$flags: 可选，可以是任何下面标记的组合(以位或运算 | 组合)：

    PREG_SPLIT_NO_EMPTY: 如果这个标记被设置， preg_split() 将进返回分隔后的非空部分。
    PREG_SPLIT_DELIM_CAPTURE: 如果这个标记设置了，用于分隔的模式中的括号表达式将被捕获并返回。
    PREG_SPLIT_OFFSET_CAPTURE: 如果这个标记被设置, 对于每一个出现的匹配返回时将会附加字符串偏移量.。
                               注意：这将会改变返回数组中的每一个元素, 使其每个元素成为一个由第0 个元素为分隔后的子串，
                               第1个元素为该子串在subject 中的偏移量组成的数组。

例：
    $str = 'hypertext hanguage hrogramming';
    $chars = preg_split('/ /', $str);
    var_dump($chars);   //array()
```

> #### 元字符（特殊字符）

##### *

```
* 匹配前面的字符零次或多次  等同于 ｛0，｝  

preg_match("/a*/","bbbbba",$res); //array(1) { [0]=> string(0) "" }
```

##### +

```
+匹配前面的字符一次或多次  等同于 ｛1，｝

preg_match("/a+/",'bbbbbbbbbbaa',$res);// array(1) { [0]=> string(2) "aa" }
```

##### ?

```
? 匹配前面的字符零次或一次  等同于 ｛0，1｝ 

preg_match("/a?/","aaaabbbb",$res); //array(1) { [0]=> string(1) "a" }
```

##### |

```
| 匹配两个或多个选择  

preg_match("/(h|a)+/","dfghsssssasfgdsf",$res); //array(2) { [0]=> string(1) "h" [1]=> string(1) "h" }
```

##### ^

```
^ 匹配字符串的开始位置

preg_match("/^hello/","hello world",$res);//array(1) { [0]=> string(5) "hello" }
```

###### $

```
$ 匹配字符串结束位置

preg_match("/^hello world$/","hello world",$res);//array(1) { [0]=> string(11) "hello world" }
```

##### \b

```
\b 匹配单词的边界(如空格、横杠，但不包括下划线)  更简单点说 \b匹配特殊字符

preg_match("/hello\b/","hello-world",$res);//array(1) { [0]=> string(5) "hello" }
```

##### \B

```
\B 匹配除单词边界以外的部分 更简单点说 \B匹配除了特殊字符以外的字符

preg_match("/hello\B/","hello_world",$res);//array(1) { [0]=> string(5) "hello" }
```

##### []

```
[] 匹配方括号中的任一字符

preg_match("/[abcdf]/","aaaa -  bbbb - aaac",$res_test);//array(1) { [0]=> string(1) "a" }
[^]匹配除方括号中的字符外的任何字符    

preg_match("/[^abcdf]/","asd",$res_test);//array(1) { [0]=> string(1) "s" }
```

| 字符  | 描述                              |
| :---- | :-------------------------------- |
| {m}   | m 是一个非负整数。匹配确定的 m 次 |
| {m,}  | m 是一个非负整数。至少匹配m 次    |
| {m,n} | 最少匹配 m次且最多匹配 n次        |
| ()    | 表示一个整体                      |
| .     | 匹配除换行之外的任何一个字符      |

> ##### 预定义元字符

```
由于某些模式会反复用到，所以可以使用以下预定义类;
由于某些模式会反复用到，所以可以使用以下预定义类;
\d  匹配一个数字；等价于[0-9]      
    preg_match("/\d+/","asdasdasdad  3434",$res); //array(1) { [0]=> string(4) "3434" }

\D    匹配除数字以外任何一个字符；等价于[^0-9]  
    preg_match("/\D+/","asdasdasdad  3434",$res);//array(1) { [0]=> string(13) "asdasdasdad " }

\w    匹配一个英文字母、数字或下划线；等价于[0-9a-zA-Z_] 
    preg_match("/\w+/","asdasdasdad  3434",$res); //array(1) { [0]=> string(11) "asdasdasdad" }

\W    匹配除英文字母、数字和下划线以外任何一个字符；等价于[^0-9a-zA-Z_]  
    preg_match("/\W+/","asdasdasdad  3434",$res);//array(1) { [0]=> string(2) " " }

\s    匹配一个空白字符；等价于[\f\n\r\t\v]      
    preg_match("/\s+/","asdasdasdad  3434",$res); //array(1) { [0]=> string(2) " " }

\S    匹配除空白字符以外任何一个字符；等价于[^\f\n\r\t\v]   
    preg_match("/\S+/","asdasdasdad  3434",$res);//array(1) { [0]=> string(11) "asdasdasdad" }
```

> #### 匹配字符的开始和结束

```
在某些情况下，需要对匹配范围进行限定，以获得更准确的匹配结果;

"^"置于字符串的开始确保模式匹配出现在字符串首端；

"$"置于字符串的结束，确保模式匹配出现字符串尾端。

 如果不加边界限制元字符，将获得更多的匹配结果。

$res = preg_match("/^hello/", "hello world"); //int(1)
var_dump($res); //int(1)
$res = preg_match("/world$/", "hello world"); 
var_dump($res); //int(1)
```

> #### 匹配任意字符

```
用"."匹配除换行符外任何一个字符
$res = preg_match('/./', "something"); 
var_dump($res);//int(1)
通常可以使用".*"组合来匹配除换行符外的任何字符
```

> #### 匹配包含某个范围的字符

```
用"[start-end]"匹配包含某个范围的字符

[a-z] 匹配所有的小写字母
[A-Z] 匹配所有的大写字母
[a-zA-Z]  匹配所有的字母
[0-9] 匹配所有的数字
[0-9\.\-] 匹配所有的数字，句号和减号   

$res = preg_match("^[a-z]+$^", "abc"); 
var_dump($res);
```

> #### 重复匹配

```
正则表达式中有一些用于重复匹配的元字符："?"、"*"、"+"。他们主要的区别是重复匹配的次数不同。

"?" 匹配前面的字符零次或一次  等同于 ｛0，1｝ 
"*" 匹配前面的字符零次或多次  等同于 ｛0，｝
"+" 匹配前面的字符一次或多次  等同于 ｛1，｝

"{m}"        匹配确定的 m 次。 m 是一个非负整数;
"{m，n}"     最少匹配 m 次且最多匹配 n 次。 m 和 n 均为非负整数，其中m <= n; 
"{m，}"      至少匹配m 次。 m 是一个非负整数;
```

> #### 匹配两个或多个选择

```
用圆括号"(word1|word2|…)"定义包含word1、word2、…的任意字符串的规则
$res= preg_match ('/^(this|the)/', 'this island is a beautiful land');
var_dump($res);
```

> #### 模式修正符 : 模式修正符在正则表达式定界符之外使用

```
i   在和模式进行匹配时不区分大小写                               
      preg_match("/hello/i","HELLO WORLD",$res);// array(1) { [0]=> string(5) "HELLO" }

m   将字符串视为多行       
      $str = 'bcd 
      abc 
      cba'; 
      preg_match_all('/^abc/m',$str,$arr);
      print_r($arr);               

s   模式中的圆点元字符 “ . “将匹配所有的字符，包括换行符        
      $str = 'adsadsa 
      c'; 
      preg_match_all('/a.*c/s',$str,$arr);
      print_r($arr);// Array ( [0] => Array ( [0] => adsadsa c ) )

x   模式中的空白忽略不计，除非已经转义                          
      preg_match_all("/^    hello /x","hello",$res);//array(1) { [0]=> array(1) { [0]=> string(5) "hello" } }

U   取消贪婪匹配                                        
      $pattern = '/<b>.*<\/b>/U'; 
      $string = '<b>welcome</b> <b>to</b> <b>phpfuns</b>'; 
      preg_match($pattern,$string,$res);
```

> #### 常用的正则表达式

**手机号验证**

```
<?php
    //正则表达式
    header("Content-Type:text/html;charset=utf-8");
    $tel = "13055859966";
    //上面部分判断长度是不是11位
    if (strlen($tel) == "11") {
        $reg = "/^((13[0-9])|(14[5,7])|(15[0-3,5-9])|(17[0,3,5-8])|(18[0-9])|166|198|199|(147))\\d{8}$/";
        if (!preg_match($reg, $tel)) {
            echo "手机号不正确";
        }else {
            echo "手机号正确";
        }
    } else {
        echo "长度必须是11位";
    }
?>
```

#### 邮政验证

```
<?php
//正则表达式
header("Content-Type:text/html;charset=utf-8");
$email = '17171226@qq.com';
if (!preg_match('/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/', $email)) {
    echo "邮箱不合法";
}else {
    echo "邮箱合法";
}
?>
```

#### url验证

```
<?php
    $url = 'https://www.baidu.com';
    $url = strtolower(trim($url ));
    if(empty($url )) {
        echo "url格式不正确";
    }
    $match = '/^(http:\/\/)?(https:\/\/)?([\w\d\-]+\.)+[\w\-]+(\/[\d\w\-.\/?%&=]*)?$/';
    if (!preg_match($match, $url)) {
        echo "url格式不正确";
    }else{
        echo "url格式正确";
    }

?>
```

##### 用户名验证

```
<?php
    //6-20位字符，必须以字母开头，只能包含数字、字母、下划线，不区分大小写
    $username = "user11";
    $match = '/^[a-zA-Z_][a-zA-Z0-9-_]{5,19}$/';
    if (!preg_match($match, $username)) {
        echo "用户名格式不正确";
    }else{
        echo "用户名格式正确";
    }

?>
```

##### 密码验证

```
<?php
    //6-16位字符，需包括数字与英文字母
    $pwd = "ddkjs3322";
    $match = '/^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?!([^(0-9a-zA-Z)])+$).{6,16}$/';
    if (!preg_match($match, $pwd)) {
        echo "密码格式不正确";
    }else{
        ehco "密码正确";
    }

?>
```

##### 用正则表达式采集网站上的图片

```
<?php
    header("Content-Type:text/html;charset=utf-8");


    $str = file_get_contents("http://desk.zol.com.cn/qiche/");

    $allpic = "/<span\s*class=\"allPic\">.*<font>(.*)<\/font>.*<\/span>/imsU";

    preg_match($allpic, $str, $res);

    // var_dump($res);exit;
    //总数
    $count = isset($res[1]) ? $res[1]:'';


    //每页显示多少条数据
    $limit = 21;

    if ($count <= 0) {
        echo '无图片采集';
        exit;
    }

    //算出总页数
    $pages = ceil($count / $limit);

    //报错多少个图片
    $number = 0;

    //先封装好请求的地址
    $urllist = [];

    $url = "http://desk.zol.com.cn/qiche/";

    for ($i = 1; $i <= $pages; $i++) {
        $urllist[] = $url . $i . ".html";
    }

    foreach ($urllist as $key => $item) {
        //延迟执行
        sleep(1);

        //循环请求每一页
        $content = file_get_contents($item);

        //列表的正则
        // <ul class="pic-list2  clearfix"></ul>
        $listpreg = "/<ul\s*class=\"pic-list2  clearfix\"\s*>(.*)<\/ul>/imsU";

        preg_match($listpreg, $content, $res);

        $resimg = isset($res[1]) ? $res[1] : '';

        if (empty($resimg)) {
            continue;
        }
        // <img width="208px" height="130px"  alt="经典跑车高清图片壁纸" src="https://desk-fd.zol-img.com.cn/t_s208x130c5/g6/M00/0C/0A/ChMkKV9ti0OINUb4ADCGtlNV8wQAACyQgEjuMoAMIbO670.jpg" title = "经典跑车高清图片壁纸"/>
        $imgpreg = "/<img.*src=\"(.*)\".*>/imsU";
        preg_match_all($imgpreg, $resimg, $imgstr);

        $imglist = isset($imgstr[1]) ? $imgstr[1] : [];

        if (empty($imglist)) {
            continue;
        }

        foreach ($imglist as $index => $value) {
            $content = file_get_contents($value);
            $filename = pathinfo($value, PATHINFO_BASENAME);

            //除了写文本以外，还是可以写文件的
            $success = file_put_contents("./images/$filename", $content);

            //当成功保存一张图片后，Number++
            $success > 0 && $number++;
        }


        // https://desk-fd.zol-img.com.cn/t_s宽x高c5/g3/M08/01/01/ChMlWF7sRuCIIGlRADJiyQ0pQH4AAU9qwDsdOkAMmLh866.jpg
    }

    echo "总共保存了：" . $number . "张图片";




?>
```

用正则表达式采集小说网站的小说

```
<?php
    header("Content-Type:text/html;charset=utf-8");

    $content = file_get_contents("http://book.zongheng.com/showchapter/984807.html"); //读取该地址的数据

    // var_dump($content);exit;
    //匹配书籍名称
    $namepreg = "/<div\s*class=\"book-meta\"\s*>.*<h1>(.*)<\/h1>.*<\/div>/imsU";
    preg_match($namepreg, $content, $nameres);
    //获取到书籍名称
    $bookname = isset($nameres[1]) ? $nameres[1] : '';

    if(empty($bookname))
    {
        echo '书籍名为空';
        exit;
    }

    //匹配章节的正则
    $chapter = "/<ul class=\"chapter-list clearfix\">(.*)<\/ul>/simU";

    preg_match_all($chapter, $content, $chapterlist);

    $booklist = isset($chapterlist[0][1]) ? $chapterlist[0][1] : '';

    if(empty($booklist))
    {
        echo '章节列表为空';
        exit;
    }

    //匹配链接部分
    $chapter2 = "/<a.*href=\"(.*)\".*>(.*)<\/a>/imsU";

    preg_match_all($chapter2,$booklist,$result);

    // var_dump($result);
    $UlrList = isset($result[1]) ? $result[1] : '';

    $TitleList = isset($result[2]) ? $result[2] : '';
    // var_dump($TitleList);

    if(empty($UlrList) || empty($TitleList))
    {
        echo '采集的列表为空';
        exit;
    }

    $ResultStr = '';

    foreach($UlrList as $key => $item)
    {
        //标题
        $ResultStr .= $TitleList[$key];

        $content = file_get_contents($item);
        if (empty($content)) {
            continue;
        }

        //匹配书籍的信息
        $infopreg = "/<div\s*class=\"bookinfo\"\s*>(.*)<\/div>/misU";
        preg_match($infopreg, $content, $infolist);


        $info = isset($infolist[1]) ? $infolist[1] : '';

        if (!empty($info)) {
            $authorpreg = "/<a\s*href=\".*\"\s*>(.*)<\/a>/";
            preg_match($authorpreg, $info, $author);
            $author = isset($author[1]) ? $author[1] : '';

            // //不为空就拼接
            if(!empty($author))
            {
                // echo 111;exit;
                $ResultStr .= "\r\n\r\n作者：$author\r\n\r\n";
            }

            // //匹配更新时间
            $createpreg = "/更新时间.*<span>(.*)<\/span>/";
            preg_match($createpreg, $info, $time);
            $time = isset($time[1]) ? $time[1] : '';
            // var_dump($time);exit;
            // //逻辑短路
            if(!empty($time))
            {
                $ResultStr .= "更新时间：$time\r\n\r\n";
            }
            // !empty($time) && $ResultStr .= "更新时间：$time";

        }
        $contentpreg = "/<div\s*class=\"content\".*>(.*)<\/div>/imsU" ;
        preg_match($contentpreg,$content,$article);
        $article = isset($article[1]) ? $article[1] : '';
        if(!empty($article))
        {

            $article =  preg_replace('/<p.*?>|<\/p>/is', "\r\n\r\n", $article);
            $ResultStr .= $article. "\r\n\r\n";
        }
    }
    //写入
    $filename = $bookname.".txt";
    $length = file_put_contents($filename, $ResultStr);


    if($length<=0)
    {
        echo '采集失败';
    }else {
        echo "采集结果为：$length 长度";
    }
?>
注意：有些网站防止恶意的访问，当某IP过于频繁访问该网站时会弹出验证码的窗口，验证是否是机器人。
上面的小说采集的案例里的网站就有这个验证，当出现采集不了时，那有可能触发到该验证了
```

## PHP接口封装

### 接口大全

[**free-api**](https://www.free-api.com/)

### 什么是API接口

```
api接口指的是应用程序编程接口（Application Programming Interface）。
是一些预先定义的函数，或指软件系统不同组成部分衔接的约定。
用来提供应用程序与开发人员基于某软件或硬件得以访问的一组例程，
而又无需访问原码，或理解内部工作机制的细节。

我们通过API接口可以实现特定的功能，而不需要了解其内部实现细节。
可以把API接口理解为是特定服务的一种封装，将服务封装起来提供给他人调用，这样一来很多功能不需要从新开发。

另外，不同系统和编程语言之间的数据通讯往往也采用API形式进行数据交接。
```

### **常见的API形式有哪些？**

```
1、HTTP类型接口

基于HTTP协议提供的API，这类API常常以“网址”形式提供的，像现在主流的RESTful就属于这类接口。

2、RPC接口

RPC它是指远程过程调用，将一部分代码逻辑放在远程服务器上部署，
然后在需要的地方调用即可（调用远程方法就像调用本地方法一样）。
本质上是Client/Server模式，而且支持多种协议和数据传输方式。

3、Web Service 接口

Web Service并不具象地指某种API，我们将以WEB形式提供的服务都称之为Web Service。
像RESTful也属于Web Service。
```

### 天气预报API

##### 第一步：打开[聚合数据](https://www.juhe.cn/)里面有一些免费的API接口可以使用，但是次数会有限制

##### 第二步：注册账号，如果有账号就直接登录，注册完后再去个人中心—>账号管理—>实名认证，进行实名

##### 第三步：实名认证通过后就选想要使用的API，例如选天气预报API，点击进入天气预报API的详细页后点击申请

##### 第四步：开始写天气预报API接口类封装，新建一个juhe.php

##### 第五步：写前端请求后端的代码，新建一个weather.html

##### 第六步：写接收前端的数据进行处理的代码，新建一个weather.php

##### 第七步：测试API调用是否成功

##### 注意：如果遇到**服务级错误码**，**系统级错误码**，**错误码格式**这三个里的其中一个，请参考该API的文档

##### WeatherApi.php

```
<?
//命名空间
namespace WeatherApi;

Class WeatherApi
{
    private $str;//要查询字符串的值
    private $key;//请求的key，密钥

    public function __construct($str="",$key="")
    {
        $this->str = $str;
        $this->key = $key;
    }

    public function weather()
    {
        // api地址
        $apiUrl = 'http://apis.juhe.cn/simpleWeather/query';
        // 请求参数
        $params = [
            'city' => $this->str, // 要查询的城市
            'key' => $this->key
        ];

        //生成 URL-encode 之后的请求字符串
        $paramsString = http_build_query($params);

        // 发起接口网络请求
        $response = $this->juheHttpRequest($apiUrl, $paramsString, 1);

        // 返回请求到的数据
        return $response;

    }

    /**
     * 发起网络请求函数
     * @param $url 请求的URL
     * @param bool $params 请求的参数内容
     * @param int $ispost 是否POST请求
     * @return bool|string 返回内容
     */
    private function juheHttpRequest($url, $params = false, $ispost = 0)
    {
        $httpInfo = array();
        $ch = curl_init();//初始化


        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);////只获取页面内容，但不输出
        if ($ispost) {
            curl_setopt($ch, CURLOPT_POST, true);////设置请求是POST方式
            curl_setopt($ch, CURLOPT_POSTFIELDS, $params);////设置POST请求所有数据的字符串
            curl_setopt($ch, CURLOPT_URL, $url);//设置访问的URL
        } else {//如果不是post，那就是get
            if ($params) {
                curl_setopt($ch, CURLOPT_URL, $url . '?' . $params);//拼接参数
            } else {
                curl_setopt($ch, CURLOPT_URL, $url);//取回的URL地址
            }
        }
        $response = curl_exec($ch);//执行访问，返回结果
        if ($response === FALSE) {
            // echo "cURL Error: ".curl_error($ch);
            return false;
        }
        $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        $httpInfo = array_merge($httpInfo, curl_getinfo($ch));
        curl_close($ch);
        return $response;
    }


}
```

##### weather.html

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>请求天气接口</title>
</head>
<body>
    <form>
        <table>
            <tr>
                <td>查询城市:</td>
                <td><input type="text" name="city" placeholder="请输入要查询的城市" id="city"></td>
            </tr>
            <tr>
                <td></td>
                <td><input type="button" value="查询" id="btn"></td>
            </tr>
        </table>
    </form>
    <ul id="show"></ul>
</body>
<script src="js/jquery-3.5.1.min.js"></script>
<script>
    $('#btn').click(function () {
            var city = $('#city').val();
            $.ajax({
                type: 'post',
                url: 'weather.php',
                data: {
                    'city': `${city}`,
                },
                dataType: 'json',
                success: function (res) {
                    // 每次请求数据回调成功后都要把ul的显示数据清空
                    $('#show').html('');
                    if(res.code == 1){
                        var li = `
                            <li>当前城市：${res.data.city}</li>
                            <li>当前温度：${res.data.temperature}</li>
                            <li>当前湿度：${res.data.humidity}</li>
                            <li>当前天气：${res.data.info}</li>
                            <li>当前风向：${res.data.direct}</li>
                            <li>当前风力：${res.data.power}</li>
                            <li>当前空气质量：${res.data.aqi}</li>
                        `;
                        $('#show').append(li);
                    }else{
                        var li = `
                            <li>错误码：${res.code}</li>
                            <li>错误信息：${res.msg}</li>
                        `;
                        $('#show').append(li);
                    }
                }
            })
        })
</script>
</html>
```

##### weather.php

```
<?php

// 使用api
require_once('WeatherApi.php');

if ($_POST) {
    // 接收ajax的请求参数
    $city = $_POST['city'];

    // 实例化该类
    $weather = new \WeatherApi\WeatherApi($city, '9ab6176129dbb280b54721e4da1a1e78');

    // 获取到返回的数据
    $result = $weather->weather();

    // 把json数据转化数组数据
    $result = json_decode($result, true);

    // 是否请求成功
    if ($result) {
        // 获取错误码
        $errorCode = $result['error_code'];

        // 获取请求信息
        $reason = $result['reason'];

        // 如果错误码等于0时，说明请求成功
        if ($errorCode == 0) {

            // 获取当天的天气信息
            $result = $result['result'];

            // 封装数组
            $data = [
                'city' => $result['city'],
                'temperature' => $result["realtime"]["temperature"],
                'humidity' => $result['realtime']['humidity'],
                'info' => $result['realtime']['info'],
                'direct' => $result['realtime']['direct'],
                'power' => $result['realtime']['power'],
                'aqi' => $result['realtime']['aqi']
            ];

            // 封装返回请求成功后的信息
            $res = [
                'msg' => $reason,
                'data' => $data,
                'code' => 1
            ];

            // 返回json数据
            echo json_encode($res);
            exit;
        } else {
            // 请求异常
            $res = [
                'msg' => $reason,
                'data' =>  null,
                'code' => $errorCode
            ];
            echo json_encode($res);
            exit;
        }
    } else {
        // 可能网络异常等问题，无法正常获得相应内容，业务逻辑可自行修改
        $res = [
            'msg' => '请求异常',
            'data' =>  null,
            'code' =>  404,
        ];

        echo json_encode($res);
        exit;
    }
}
```

## IP查询

##### 步骤跟写天气预报的API一样

##### ipApi.php

```
<?php

//命名空间
namespace IpApi;

Class IpApi
{
    private $str;//要查询字符串的值
    private $key;//请求的key，密钥

    public function __construct($ip="",$key="")
    {
        $this->ip = $ip;
        $this->key = $key;
    }


    /* 查询ip API */
    public function ip()
    {
        // api地址
        $url = "http://apis.juhe.cn/ip/ipNew";

        // 请求参数
        $params = [
            "ip" => $this->ip, //需要查询的IP地址或域名
            "key" => $this->key, //应用APPKEY(应用详细页查询)
        ];

        //生成 URL-encode 之后的请求字符串
        $paramstring = http_build_query($params);

        // 发起接口网络请求
        $response = $this->juheHttpRequest($url, $paramstring, 1);

        // 返回请求到的数据
        return $response;
    }


    /**
     * 发起网络请求函数
     * @param $url 请求的URL
     * @param bool $params 请求的参数内容
     * @param int $ispost 是否POST请求
     * @return bool|string 返回内容
     */
    private function juheHttpRequest($url, $params = false, $ispost = 0)
    {
        $httpInfo = array();
        $ch = curl_init();//初始化


        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);////只获取页面内容，但不输出
        if ($ispost) {
            curl_setopt($ch, CURLOPT_POST, true);////设置请求是POST方式
            curl_setopt($ch, CURLOPT_POSTFIELDS, $params);////设置POST请求所有数据的字符串
            curl_setopt($ch, CURLOPT_URL, $url);//设置访问的URL
        } else {//如果不是post，那就是get
            if ($params) {
                curl_setopt($ch, CURLOPT_URL, $url . '?' . $params);//拼接参数
            } else {
                curl_setopt($ch, CURLOPT_URL, $url);//取回的URL地址
            }
        }
        $response = curl_exec($ch);//执行访问，返回结果
        if ($response === FALSE) {
            // echo "cURL Error: ".curl_error($ch);
            return false;
        }
        $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        $httpInfo = array_merge($httpInfo, curl_getinfo($ch));
        curl_close($ch);
        return $response;
    }


}
```

##### ipAip.html

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>查询ip接口</title>
</head>
<body>
    <form>
        <table>
            <tr>
                <td>查询IP地址:</td>
                <td><input type="text" name="ip" placeholder="请输入要查询的城市" id="ip"></td>
            </tr>
            <tr>
                <td></td>
                <td><input type="button" value="查询" id="btn"></td>
            </tr>
        </table>
    </form>
    <ul id="show"></ul>
</body>
<script src="js/jquery-3.5.1.min.js"></script>
<script>
    $('#btn').click(function () {
            var ip = $('#ip').val();
            $.ajax({
                type: 'post',
                url: 'ip.php',
                data: {
                    'ip': `${ip}`,
                },
                dataType: 'json',
                success: function (res) {
                    // 每次请求数据回调成功后都要把ul的显示数据清空
                    $('#show').html('');
                    if(res.code == 1){
                        var li = `
                            <li>国家：${res.data.Country}</li>
                            <li>省份：${res.data.Province}</li>
                            <li>城市：${res.data.City}</li>
                            <li>运营商：${res.data.Isp}</li>
                        `;
                        $('#show').append(li);
                    }else{
                        var li = `
                            <li>错误码：${res.code}</li>
                            <li>错误信息：${res.msg}</li>
                        `;
                        $('#show').append(li);
                    }
                }
            });
        });
</script>
</html>
```

##### ip.php

```
<?php

// 使用api
require_once('IpApi.php');

if ($_POST) {
    // 接收ajax的请求参数
    $ip = $_POST['ip'];

    // 实例化该类
    $ipApi = new \IpApi\IpApi($ip, '0d299c6f416192337e0907a013b9be4d');

    // 获取到返回的数据
    $result = $ipApi->ip();

    // 把json数据转化数组数据
    $result = json_decode($result, true);
    // 是否请求成功
    if ($result) {
        // 获取返回码
        $resultCode = $result['resultcode'];

        // 获取错误码
        $errorCode = $result['error_code'];

        // 获取请求信息
        $reason = $result['reason'];

        // 如果返回码等于200时，说明请求成功
        if ($resultCode == 200) {

            // 获取当天的天气信息
            $result = $result['result'];

            // 封装数组
            $data = [
                'Country' => $result['Country'],
                'Province' => $result['Province'],
                'City' => $result['City'],
                'Isp' => $result['Isp'],
            ];

            // 封装返回请求成功后的信息
            $res = [
                'msg' => $reason,
                'data' => $data,
                'code' => 1
            ];

            // 返回json数据
            echo json_encode($res);
            exit;
        } else {
            // 请求异常
            $res = [
                'msg' => $reason,
                'data' =>  null,
                'code' => $errorCode
            ];
            echo json_encode($res);
            exit;
        }
    } else {
        // 可能网络异常等问题，无法正常获得相应内容，业务逻辑可自行修改
        $res = [
            'msg' => '请求异常',
            'data' =>  null,
            'code' =>  404,
        ];

        echo json_encode($res);
        exit;
    }
}
```

## 查询手机号码(段)归属地

##### 步骤一样

##### PhoneApi.php

```
<?php

//命名空间
namespace PhoneApi;

class PhoneApi
{
    private $str; //要查询字符串的值
    private $key; //请求的key，密钥

    public function __construct($phone = "", $key = "")
    {
        $this->phone = $phone;
        $this->key = $key;
    }


    /* 查询查询手机号码归属地信息 API */
    public function phone()
    {
        //Api地址 根据手机号码或手机号码的前7位，查询手机号码归属地信息，如省份 、城市、运营商等。
        $url = "http://apis.juhe.cn/mobile/get";
        // 请求参数
        $params = [
            "phone" => $this->phone, //手机号码或手机号码的前7位
            "key" => $this->key, //应用APPKEY(应用详细页查询)
        ];
        //生成 URL-encode 之后的请求字符串
        $paramstring = http_build_query($params);

        // 发起接口网络请求
        $response = $this->juheHttpRequest($url, $paramstring, 1);

        // 返回数据
        return $response;
    }


    /**
     * 发起网络请求函数
     * @param $url 请求的URL
     * @param bool $params 请求的参数内容
     * @param int $ispost 是否POST请求
     * @return bool|string 返回内容
     */
    private function juheHttpRequest($url, $params = false, $ispost = 0)
    {
        $httpInfo = array();
        $ch = curl_init(); //初始化


        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true); ////只获取页面内容，但不输出
        if ($ispost) {
            curl_setopt($ch, CURLOPT_POST, true); ////设置请求是POST方式
            curl_setopt($ch, CURLOPT_POSTFIELDS, $params); ////设置POST请求所有数据的字符串
            curl_setopt($ch, CURLOPT_URL, $url); //设置访问的URL
        } else { //如果不是post，那就是get
            if ($params) {
                curl_setopt($ch, CURLOPT_URL, $url . '?' . $params); //拼接参数
            } else {
                curl_setopt($ch, CURLOPT_URL, $url); //取回的URL地址
            }
        }
        $response = curl_exec($ch); //执行访问，返回结果
        if ($response === FALSE) {
            // echo "cURL Error: ".curl_error($ch);
            return false;
        }
        $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        $httpInfo = array_merge($httpInfo, curl_getinfo($ch));
        curl_close($ch);
        return $response;
    }
}
```

##### phone.html

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>查询手机归属地接口</title>
</head>
<body>
    <form>
        <table>
            <tr>
                <td>查询手机归属地:</td>
                <td><input type="text" name="phone" placeholder="请输入要查询的城市" id="phone"></td>
            </tr>
            <tr>
                <td></td>
                <td><input type="button" value="查询" id="btn"></td>
            </tr>
        </table>
    </form>
    <ul id="show"></ul>
</body>
<script src="js/jquery-3.5.1.min.js"></script>
<script>
    $('#btn').click(function () {
            var phone = $('#phone').val();
            $.ajax({
                type: 'post',
                url: 'phone.php',
                data: {
                    'phone': `${phone}`,
                },
                dataType: 'json',
                success: function (res) {
                    // 每次请求数据回调成功后都要把ul的显示数据清空
                    $('#show').html('');
                    if(res.code == 1){
                        var li = `
                            <li>省份：${res.data.province}</li>
                            <li>城市：${res.data.city}</li>
                            <li>区号：${res.data.areacode}</li>
                            <li>邮编：${res.data.zip}</li>
                            <li>运营商：${res.data.company}</li>
                        `;
                        $('#show').append(li);
                    }else{
                        var li = `
                            <li>错误码：${res.code}</li>
                            <li>错误信息：${res.msg}</li>
                        `;
                        $('#show').append(li);
                    }
                }
            });
        });
</script>
</html>
```

##### phone.php

```
<?php

// 使用api
require_once('PhoneApi.php');

if ($_POST) {
    // 接收ajax的请求参数
    $phone = $_POST['phone'];

    // 验证是否是手机号码，并且是否为11位
    if (strlen($phone) == "11") {
        // 正则
        $reg = "/^((13[0-9])|(14[5,7])|(15[0-3,5-9])|(17[0,3,5-8])|(18[0-9])|166|198|199|(147))\\d{8}$/";

        // 是否是手机号
        if (!preg_match($reg, $phone)) {
            // 如果不是手机号码就返回以下信息
            $data = [
                'msg' => '手机号码不正确',
                'data' => null,
                'code' => 0
            ];
            echo json_encode($data);
            exit;
        }
    } else {
        // 如果不是11位的就返回以下信息
        $data = [
            'msg' => '请输入11位的手机号码',
            'data' => null,
            'code' => 0
        ];
        echo json_encode($data);
        exit;
    }

    // 实例化该类
    $phoneApi = new \PhoneApi\PhoneApi($phone, 'a58be0b1bcdcf717426a74be95c5f63d');

    // 获取到返回的数据
    $result = $phoneApi->phone();

    // 把json数据转化数组数据
    $result = json_decode($result, true);
    // print_r($result);
    // exit;
    // 是否请求成功
    if ($result) {
        // 获取返回码
        $resultCode = $result['resultcode'];

        // 获取错误码
        $errorCode = $result['error_code'];

        // 获取请求信息
        $reason = $result['reason'];

        // 如果返回码等于200时，说明请求成功
        if ($resultCode == 200) {

            // 获取当天的天气信息
            $result = $result['result'];

            // 封装数组
            $data = [
                'province' => $result['province'],
                'city' => $result['city'],
                'areacode' => $result['areacode'],
                'zip' => $result['zip'],
                'company' => $result['company'],
            ];

            // 封装返回请求成功后的信息
            $res = [
                'msg' => $reason == 'Return Successd!' ? '查询成功' : $reason,
                'data' => $data,
                'code' => 1
            ];

            // 返回json数据
            echo json_encode($res);
            exit;
        } else {
            // 请求异常
            $res = [
                'msg' => $reason,
                'data' =>  null,
                'code' => $errorCode
            ];
            echo json_encode($res);
            exit;
        }
    } else {
        // 可能网络异常等问题，无法正常获得相应内容，业务逻辑可自行修改
        $res = [
            'msg' => '请求异常',
            'data' =>  null,
            'code' =>  404,
        ];

        echo json_encode($res);
        exit;
    }
}
```

## 实战演练

```
实战项目需求
1.数据库 使用company数据库
2.部门管理模块
    完成部门的增删改查
    完成部门的分页功能
3.职位管理模块
    完成职位模块的增删改查
    完成职位模块的分页功能
4.员工管理模块
    完成员工模块的增删改查
    完成员工模块的分页
    完成员工模块的头像的上传功能
5.使用admin后台模板
```

### 素材下载

[**后台模板文件**](http://web.wdwangke.com/mdwork/backend/phpuse/admin.zip)

图一，完成把json文件的数据渲染到列表里

![img](http://web.wdwangke.com/mdphoto/backend/backend/project/AdminList.png)

图二，完成管理员的添加功能

![img](http://web.wdwangke.com/mdphoto/backend/backend/project/AdminAdd.png)

图三，完成管理员的编辑功能

![img](http://web.wdwangke.com/mdphoto/backend/backend/project/AdminEdit.png)