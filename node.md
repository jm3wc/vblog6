# 基本介绍

## 什么是Node?

```
node是一个基于Chrome V8引擎的javascript运行环境，是运行在服务器端的javascript
可以使用node搭建服务器，连接数据库。
Node.js使用了一个事件驱动、非阻塞I/O口，使其轻量且高效
Node的包管理工具npm,是全球最大的开源库生态系统
```

### 事件循环

```
Node.js 是单进程单线程应用程序，但是因为 V8 引擎提供的异步执行回调接口，
通过这些接口可以处理大量的并发，所以性能非常高。
Node.js 几乎每一个 API 都是支持回调函数的。
Node.js 基本上所有的事件机制都是用设计模式中观察者模式实现。
Node.js 单线程类似进入一个while(true)的事件循环，直到没有事件观察者退出，
每个异步事件都生成一个事件观察者，如果有事件发生就调用该回调函数.
```

## 环境安装

# nvm

### 下载：全称 Node Version Manager ，也就是node版本控制；

> 下载地址：https://github.com/coreybutler/nvm-windows/releases 注：下载文件名为 nvm-setup.zip 的链

### 安装

> 解压nvm-setup.zip文件，以管理员的身份运行， 选择nvm的存放路径，以及nodejs的存放路径，这里切记不要选择到c:/program files 打开nvm文件夹下的settings.txt文件，在最后添加以下代码：

```
root:E:\softeware\nvm
path:E:\softeware\nodejs
arch: 64
proxy: none
node_mirror: http://npm.taobao.org/mirrors/node/
npm_mirror: https://npm.taobao.org/mirrors/npm/
```

### 配置环境

> 我的电脑->属性->高级系统设置->环境变量，在用户变量中添加环境变量：

```
NVM_HOME: E:\softeware\nvm
NVM_SYMLINK: E:\softeware\nodejs
path: %NVM_HOME%, %NVM_SYMLINK%
```

### nvm的一些常用指令

```
nvm version // 查看nvm版本
nvm install 6.17.1 // 安装node6.17.1版本（附带安装npm）
nvm uninstall 6.17.1 // 卸载node6.17.1版本
nvm ls  // 列出所有node版本
nvm use 6.17.1 // 将node版本切换到6.17.1版本
```

### 开启多版本控制

```
nvm on
```

### nvm use 报错“exit status 1 乱码”

> 1、安装路径有中文 2、安装路径有空格 3、CMD命令行窗口不是管理员权限打开 4、配置文件和实际安装路径不符

## npm

### npm介绍

> npm 最初它只是被称为 Node Package Manager，用来作为Node.js的包管理器。但是随着其它构建工具(webpack、browserify)的发展，npm已经变成了 "the package manager for JavaScript"，它用来安装、管理和分享JavaScript包，同时会自动处理多个包之间的依赖。

## 下载nodejs

> 登陆官网 http://nodejs.org/ ,便可以看到首页的“INSTALL”按钮，直接点击就会自动下载安装了。
>
> 安装完成后可以使用cmd（win+r然后输入cmd进入）测试下是否安装成功。能查看到版本号就成功了

```
node -v

npm -v
```

> 全局安装

```
npm install express -g
```

## 更换 npm的镜像源

```
npm config set registry https://registry.npm.taobao.org
```

## npm命令

> 1.安装
>
> ```
> npm install 包名（install 可以简写为 i）
> ```
>
> 2.指定版本安装
>
> ```
> npm i 包名@版本号 （2.22.2意思是:大版本.功能版本.Bug修复版本,前面的越高，后边的就为0了）
> ```
>
> 3.快速创建 package.json文件(只用于英文目录）
>
> ```
> npm init -y
> ```
>
> 4.安装指定依赖包
>
> ```
> npm install 包名
> ```
>
> 5.卸载包
>
> ```
> npm uninstall 包名
> ```
>
> 6.npm查看版本
>
> ```
> nmp -v
> ```
>
> 7.将npm升级到最新版
>
> ```
> npm install -g npm
> ```
>
> 8.npm更新到指定版本
>
> ```
> npm install -g npm@版本号
> ```
>
> 9.npm 缓存路径查看命令
>
> ```
> npm config get cache
> ```
>
> 10.清除npm缓存 ``` npm cache verify

npm cache clean --force

```
>11.查看npm全局安装包的位置
```

npm config ls ```

## 代理cnpm

### cnpm介绍

> 因为npm安装插件是从国外服务器下载，受网络的影响比较大，可能会出现异常，淘宝为我们搭建了一个国内的npm服务器，它目前是每隔10分钟将国外npm仓库的所有内容“搬运”回国内的服务器上，这样我们直接访问淘宝的国内服务器就可以了

### 安装

```
$ npm install -g cnpm --registry=https://registry.npm.taobao.org
//安装完后查看版本
$ cnpm -v
```

### 配置环境变量

> 我的电脑->属性->高级系统设置->环境变量，在用户变量和系统变量的PATH：

```
path: D:\nodejs\node_global
```

### 查看

```
cnpm -v
```

## yarn

## yarn介绍

> yarn 就是一个类似于 npm 的包管理工具，它是由 facebook 推出并开源。 与 npm 相比，yarn 有着众多的优势，主要的优势在于：速度快、离线模式、版本控制。

## 安装并查看版本

```
npm install -g yarn
yarn --version
```

## yarn常用命令

> 1.安装
>
> ```
> yarn install
> ```
>
> 2.安装指定依赖包
>
> ```
>  yarn add  包名
> ```
>
> 3.卸载包
>
> ```
> yarn remove  包名
> ```
>
> 4.查看版本
>
> ```
> yarn -v
> ```
>
> 5.快速创建 package.json文件(只用于英文目录）
>
> ```
> yarn init -y
> ```
>
> 6.查看yarn全局缓存目录
>
> ```
> yarn cache dir
> ```
>
> 7.清除yarn缓存
>
> ```
> yarn cache clean
> ```

## fs模块

> fs模块用于对系统文件及目录进行读写操作。

## 一、同步和异步

> 1、异步方法中回调函数的第一个参数总是留给异常参数（exception），如果方法成功完成，该参数为null或undefined。fs.readFile()
>
> 2、同步方法执行完并返回结果后，才能执行后续的代码。而异步方法采用回调函数接收返回结果，可以立即执行后续代码。fs.readFileSync()

## 二、readFile读取文件

```
var fs = require('fs');
//异步
fs.readFile('demo.txt', 'utf8', function(err,data){
    console.log("异步" + data);
})
// 同步
var data = fs.readFileSync('test.txt', 'utf8')
console.log("同步" +data)

// 执行结果
同步星期二 阴雨连绵
异步星期一 天气晴朗
```

## 三、WriteFile写入文件

```
使用fs.writeFile(filename,data,[options],callback)写入内容到文件。

file |  文件名或文件描述符。
data |  要写入的数据
options |
    encoding | 默认值: 'utf8'。
    mode 默认值: 0o666。
    flag 参见文件系统 flag 的支持。 默认值: 'w'。r代表读取文件，w代表写文件，a代表追加。
callback 回调函数，回调函数只包含错误信息参数(err)，在写入失败时返回
var fs = require('fs');

// 异步
fs.writeFile('demo.txt', 'abcd',{'flag': 'a'}, function(err) {
    if (err) {
        throw err;
    }

    console.log('Saved.');

    // 写入成功后读取测试
    fs.readFile('demo.txt', 'utf-8', function(err, data) {
        if (err) {
            throw err;
        }
        console.log(data);
    });
});

// 同步
var res = fs.writeFileSync('test.txt', '00000', { 'flag': 'a' });
console.log(res + '---');

var data = fs.readFileSync('test.txt', 'utf-8');
console.log(data);

// 执行结果
undefined---
星期二 阴雨连绵0000000000
Saved.
1234567abcdabcdabcd
```

## 四、fs.open、read、fs.write读写文件

```
1、fs.open(path,flags,[mode],callback)方法用于打开文件，以便fs.read()读取。

path 文件路径
flags打开文件的方式
[mode] 是文件的权限（可行参数，默认值是0666）
callback 回调函数

flags值及说明如下

r ：读取文件，文件不存在时报错；
r+ ：读取并写入文件，文件不存在时报错；
rs ：以同步方式读取文件，文件不存在时报错；
rs+ ：以同步方式读取并写入文件，文件不存在时报错；
w ：写入文件，文件不存在则创建，存在则清空；
wx ：和w一样，但是文件存在时会报错；
w+ ：读取并写入文件，文件不存在则创建，存在则清空；
wx+ ：和w+一样，但是文件存在时会报错；
a ：以追加方式写入文件，文件不存在则创建；
ax ：和a一样，但是文件存在时会报错；
a+ ：读取并追加写入文件，文件不存在则创建；
ax+ ：和a+一样，但是文件存在时会报错。

2、fs.close(fd,[callback])
用于关闭文件，fd是所打开文件的文件描述符

fs.read(fd,buffer,offset,length,position,callback)

3、fd 文件描述符，必须接收fs.open()方法中的回调函数返回的第二个参数。
buffer 是存放读取到的数据的Buffer对象。
offset 指定 向buffer中存放数据的起始位置。
length 指定 读取文件中数据的字节数。
position 指定 在文件中读取文件内容的起始位置。
callback 回调函数。

4、fs.writeFile(filename, data[, options], callback)

path - 文件路径
data - 要写入文件的数据，可以是 String(字符串) 或 Buffer(流) 对象
options - 该参数是一个对象，包含 {encoding, mode, flag}。默认编码为 utf8,
 模式为 0666 ， flag 为 'w'
callback - 回调函数，回调函数只包含错误信息参数(err)，在写入失败时返回。
var fs = require('fs');

fs.open('demo.txt', `w`, function(err, fd) {
    if (err) {
        throw err;
    }
    console.log('open file success.');

    const buffer = Buffer.from(JSON.stringify("shiyanlou"));

    // 写入文件
    fs.write(fd, buffer, 0, 6, 0, function(err, bytesWritten, buffer) {
        if (err) {
            throw err;
        }
        console.log('write success.');
        // 打印出buffer中存入的数据
        console.log(bytesWritten, buffer.slice(0, bytesWritten).toString());

        // 关闭文件
        fs.close(fd);
    });

});

// 执行结果
open file success.
write success.
6 '"shiya'

fs.open('test.txt', 'r', function(err, fd) {
    if (err) {
        throw err;
    }
    console.log('open file success.');
    // var buffer = new Buffer(255);
    const buffer = Buffer(255);
    // 读取文件
    fs.read(fd, buffer, 0, 10, 0, function(err, bytesRead, buffer) {
        if (err) {
            throw err;
        }
        // 打印出buffer中存入的数据
        console.log(bytesRead, buffer.slice(0, bytesRead).toString());

        // 关闭文件
        fs.close(fd);
    });
});

// 执行结果
open file success.
10 '星期二 '
```

## 五、目录操作

> 1、创建目录

```
使用fs.mkdir(path,[mode],callback)创建目录，
path是需要创建的目录，[mode]是目录的权限（默认是0777），callback是回调函数。
var fs = require('fs');
fs.mkdir('./newtest', function(err) {
    if (err) {
        throw err;
    }
    console.log('make dir success.');
});
```

> 2、读取目录

```
使用fs.readdir(path,callback)读取文件目录
var fs = require('fs');
fs.readdir('./newtest', function(err, files) {
    if (err) {
        throw err;
    }
    // files是一个数组
    // 每个元素是此目录下的文件或文件夹的名称
    console.log(files);
});

运行结果：
[ 'demo' ]
```

## 六、读取文件详细信息

> fs.stat(path,callback)，path表示文件路径； callback是指回调函数，有两个参数：(err,stats)，其中stats是fs.stat的实例;

```
实例常用方法
1.stats.isFile(): 如果是文件则返回true,否则返回false;
2.stats.isDirectiory(): 如果是目录则返回true,否则返回false;
3.stats.isBlockDevice(): 如果是块设备则返回true，否则返回false;
4.stats.isCharacterDevice(): 如果是字符设备返回true,否则返回false;
5.stats.isSymbolicLink(): 如果是软链接返回true,否则返回false;
6.stats.isFIFO(): 如果是FIFO,则返回true,否则返回false.FIFO是UNIX中的一种特殊类型的命令管道；
7.stats.isSocket(): 如果是Socket则返回true,否则返回false;
8.stats.size(): 文件的大小（以字节为单位）。
var fs = require('fs');

let mkdir = 'demo.txt';

fs.open(mkdir, 'r', (err, fd) => {
  if (err) {
    console.log(`open ${mkdir} file failed~`);
    return false;
  }
  fs.fstat(fd, (err, stats) => {
    if (err) {
      console.log(`fstat ${mkdir} file failed~`);
      return false;
    }
    console.log(JSON.stringify(stats));
  })
})
```

> 结果如下

```
"dev":2399061417,
"mode":33206,
"nlink":1,
"uid":0,
"gid":0,
"rdev":0,
"ino":4503599627574561,
"size":6,
"atime":"2022-07-07T12:54:09.188Z",
"mtime":"2022-07-07T12:54:09.188Z",
"ctime":"2022-07-07T12:54:09.188Z",
"birthtime":"2022-07-06T07:38:09.578Z"
```

## http模块

#### 介绍

```
Node中提供了http模块，其中封装了高效的http服务器和http客户端

http.Server是一个基于事件的http服务器，内部是由c++实现的，接口是由JavaScript封装

http.request是一个http客户端工具。 用户向服务器发送数据。
```

#### http.server事件

```
request:当客户端请求到来的时候，该时间被触发，提供两个参数request 和 response，分别是http.ServerRequest 
和 http.ServerResponse 表示请求和响应的信息

connection:当TCP建立链接的时候，该时间被处罚，提供了一个参数 socket ，为net.socket的实例(底层协议对象)

close:当服务器关闭的时候会被触发
```

#### 案例

```
const http = require("http");
const server = http.createServer();
server.on("request", (req, res) => {
    res.setHeader("Content-Type", "text/html;charset=utf-8");
    let content = "";
    if (req.url == "/" || req.url == "/index.html") {
        content = "<h1>首页内容</h1>";
    } else if (req.url == "/detail.html") {
        content = "<h1>详情页内容</h1>";
    } else {
        content = "<h1>你访问的页面不存在</h1>";
    }
    res.end(content);
});
server.listen(8080, () => {
    console.log("server is listen:127.0.0.1或者localhost");
});
```

## path模块

#### 介绍

```
 path 模块是 Node.js 官方提供的、用来处理路径的模块。它提供了一系列的方法和属性，用来满足用户对路径的处理需求。
```

#### **dirname和**filename

```
/* 
__dirname 获取当前文件所属目录的绝对路径
__filename 获取当前文件的绝对路 */

console.log(__dirname)
//结果形式如  E:\phpstudy_pro\WWW\2216\node

const path = require('path')
let str = path.dirname('/foo/bar/baz/asdf/quux')  
console.log(str) 
// /foo/bar/baz/asdf

console.log(__filename)
//结果形式如  E:\phpstudy_pro\WWW\2216\node\path.js
```

#### path.join([...paths]) 多参数路径拼接

```
const path = require('path')
let str = path.join(__dirname,"..","src") 
console.log(str)
//结果形式如 E:\phpstudy_pro\WWW\2216\src

let str = path.join('/demo','./test/index.js')  
console.log(str)
//结果形式如： \demo\test\index.js
```

#### path.resolve([...paths]) 相对路径转绝对路径

```
const path = require('path')

let str = path.resolve(__dirname,"../") 
//  E:\phpstudy_pro\WWW\2216

let str = path.resolve('/bbb/aaa','./test/index.js')
// E:\bbb\aaa\test\index.js

let str = path.resolve('/bbb/aaa','test/index.js') 
// E:\bbb\aaa\test\index.js

let str =path.resolve('/bbb/aaa','..','/test/index.js')
// E:\test\index.js
```

#### path.extname(path) 返回文件的扩展名

```
const path = require('path')

let str = path.extname('/foo/bar/baz/asdf/index.html'); 
// .html

let str =path.extname('/foo/bar/baz/asdf/index.'); 
//  '.'

let str =path.extname('/foo/bar/baz/asdf/index.'); 
//  ' '

let str =path.extname('.index');
// ' '
```

#### path.basename(path[,ext]) 返回path的最后一部分，如果加了扩展名（区分大小写）则是剔除掉扩展名的部分

```
const path = require('path')

let str = path.basename('/foo/bar/baz/asdf/index.html');
// index.html

let str =path.basename('/foo/bar/baz/asdf/index.html','.html'); 
// index

let str = path.basename('/foo/bar/baz/asdf/index.HTML','.html');
// index.HTML
```

#### path.isAbsolute(path) 判断路径是否是绝对路径

```
const path = require('path')

let str = path.isAbsolute(".") 
// false

let str = path.isAbsolute("/")  
// true

let str = path.isAbsolute("./foo/baz")  
// false

let str = path.isAbsolute("/foo/baz")  
// true
```

## url模块

#### 介绍

```
URL模块是用于处理和解析URL的
```

#### url.URL方法

```
var url = require('url');
var testUrl1 = 'http://www.book.com/mdbook/frontend/nodejs/introduction/coremodule1/global.html'
const myURL = new url.URL('test', testUrl1);
console.log(myURL);

/*
结果如下：
URL {
  href: 'http://www.book.com/mdbook/frontend/nodejs/introduction/coremodule1/test',
  origin: 'http://www.book.com',
  protocol: 'http:',
  username: '',
  password: '',
  host: 'www.book.com',
  hostname: 'www.book.com',
  port: '',
  pathname: '/mdbook/frontend/nodejs/introduction/coremodule1/test',
  search: '',
  searchParams: URLSearchParams {},
  hash: '' }
*/
```

#### new URLSearchParams(obj)

```
//  使用查询哈希映射实例化新的 URLSearchParams 对象。 obj 的每个属性的键和值总是被强制转换为字符串。

let params;

params = new URLSearchParams('user=abc&query=xyz');
console.log(params.get('user'));
// 打印 'abc'

console.log(params.toString());
// 打印 'user=abc&query=xyz'

params = new URLSearchParams('?user=abc&query=xyz');
console.log(params.toString());
// 打印 'user=abc&query=xyz'


// 使用数组
params = new URLSearchParams([
  ['user', 'abc'],
  ['query', 'first'],
  ['query', 'second'],
]);
console.log(params.toString());
// 打印 'user=abc&query=first&query=second'

// 使用 Map 对象
const map = new Map();
map.set('user', 'abc');
map.set('query', 'xyz');
params = new URLSearchParams(map);
console.log(params.toString());
// 打印 'user=abc&query=xyz'

// 使用生成器函数
function* getQueryPairs() {
  yield ['user', 'abc'];
  yield ['query', 'first'];
  yield ['query', 'second'];
}
params = new URLSearchParams(getQueryPairs());
console.log(params.toString());
// 打印 'user=abc&query=first&query=second'
```

## global全局对象

#### 介绍

```
global：表示Node所在的全局环境，类似于浏览器的window对象。
```

#### 案例

```
/*
    __filename 
    双下划线filename表示当前正在执行的脚本的文件名，它将输出文件所在位置的绝对路径
*/ 

// 输出全局变量 __filename 的值
console.log(__filename);
//结果: E:\phpstudy_pro\WWW\2216\node\path.js

/*
  __dirname
  双下划线dirname表示当前执行脚本所在的目录
*/ 

// 输出全局变量 __dirname 的值
console.log(__dirname);
//结果: E:\phpstudy_pro\WWW\2216\node

/*
    setTimeout()只执行一次指定函数，返回一个代表定时器的句柄值

    setInterval() 方法会不停地调用函数，直到 clearInterval() 被调用或窗口被关闭
*/
function printHello(){
    console.log('Hello World!');
}
//2秒后执行printHello函数
setTimeout(printHello, 2000);
// 结果： Hello World!

function printHello(){
    console.log('Hello World!');
}
//2秒后执行printHello函数
var T = setInterval(printHello, 2000);

//清除定时器
clearTimeout(T);

/*
    结果如下:
        Hello World!
        Hello World!
        Hello World!
*/
```

## Buffers数据类型

#### 介绍

```
Buffer对象是Node处理二进制数据(eg:TCP数据流)的一个接口。
Buffer对象是一个构造函数，生成的实例代表了V8引擎分配的一段内存，是一个类似数组的对象，
成员都为0到255的整数值，即一个8位的字节。
Buffer类的实例（即对象）类似于整数数组，实例对应于固定大小的原始内存分配，
其大小在创建时被确定且无法更改。
```

#### 创建Buffer

```
1、利用字符串创建buffer：Buffer.from
const { Buffer } = require('node:buffer');
var str = "Hello world"
// 将一个字符串保存到buffer中,并返回
var buf = Buffer.from(str)
console.log(buf)
// 结果： <Buffer 48 65 6c 6c 6f 20 77 6f 72 6c 64>

2、Buffer.alloc()
.alloc() 方法在您想要创建空缓冲区时很有用，不需要初始化数据填充。默认情况下，
它接受一个数字并返回一个给定大小并且填充了 0 的缓冲区。第二个参数：用于预填充新 Buffer 的值
const { Buffer } = require('node:buffer');
const buff = Buffer.alloc(1, 'abcd');
console.log(buff.toString('utf-8')); 
// 结果: a
```

#### 写入Buffer

```
const { Buffer } = require('node:buffer');
const buff = Buffer.alloc(9);
buff.write("hey there"); // 返回 9（写入的字节数）
console.log(buff.toString());
//结果: hey there
// 如果写入的字节数超过缓冲区支持的字节数，
// 您的数据将被截断以适合缓冲区。
buff.write("hey christopher"); // 返回 9（写入的字节数）
console.log(buff.toString());
// 结果: 'hey chris'
```

#### buf.toJSON() 转换为 JSON 对象

```
const { Buffer } = require('node:buffer');
var buf3 = Buffer.from('test');
var json = JSON.stringify(buf3);
console.log(json);
//  结果: {"type":"Buffer","data":[116,101,115,116]}
```

#### Buffer.concat()合并，将所有 Buffer 实例连接在一起的结果

```
const { Buffer } = require('node:buffer');
var i1 =  Buffer.from('Hello');
var i2 =  Buffer.from(' ');
var i3 =  Buffer.from('World');
console.log(Buffer.concat([i1, i2, i3], 10).toString());
//结果: Hello Worl
```

## process

#### 介绍

```
process 对象是一个全局变量，提供了有关当前 Node.js 进程的信息并对其进行控制。
```

#### 功能

> 1、'beforeExit' 事件；当 Node.js 的事件循环数组已经为空，并且没有额外的工作被添加进来，事件 'beforeExit' 会被触发。
>
> 2、'exit' 事件；Node.js 进程即将结束
>
> 3、process.argv 属性返回一个数组，这个数组包含了启动Node.js进程时的命令行参数
>
> 4、process cwd() 方法返回 Node.js 进程当前工作的目录。
>
> 5、process.env属性返回一个包含用户环境信息的对象
>
> 6、process.execPath 属性，返回启动Node.js进程的可执行文件所在的绝对路径。
>
> 7、process.title 属性用于获取或设置当前进程在 ps 命令中显示的进程名字
>
> 8、process.pid属性返回进程的PID。
>
> 9、process.platform属性返回字符串，标识Node.js进程运行其上的操作系统平台。

```
const process = require('node:process');
process.on('beforeExit', (code) => {
    console.log('进程 beforeExit 事件的退出码: ', code);
});

process.on('exit', (code) => {
    console.log('进程 exit 事件的退出码: ', code);
});

process.argv.forEach((val, index) => {
    console.log(`${index}: ${val}`);
});

console.log('此消息会最先显示');

/*
    结果如下：
    0: E:\softeware\nodejs\node.exe
    1: E:\phpstudy_pro\WWW\2216\node\path.js
    此消息会最先显示
    进程 beforeExit 事件的退出码:  0
    进程 exit 事件的退出码:  0
*/ 

console.log(`当前目录: ${process.cwd()}`);

// 结果: 当前目录: E:\phpstudy_pro\WWW\2216\node

console.log(process.env);

console.log(process.execPath)
// 结果：E:\softeware\nodejs\node.exe

console.log(process.title)
//结果：MINGW64:/e/phpstudy_pro/WWW/2216/node

console.log(`进程的pid是： ${process.pid}`);
//结果：进程的pid是： 26068

console.log(`操作系统平台: ${process.platform}`);
//结果：操作系统平台: win32
```

## OS模块

#### 介绍

```
os模块提供了与操作系统相关的实用方法和属性。
```

#### 功能

> 1、os.arch()返回为其编译 Node.js 二进制文件的操作系统 CPU 架构
>
> 2、os.hostname()返回操作系统的主机名。
>
> 3、os.type()返回操作系统名
>
> 4、os.platform() 返回编译时的操作系统名
>
> 5、os.totalmem()返回系统内存总量，单位为字节。
>
> 6、os.cpus()返回一个对象数组，包含所安装的每个 CPU/内核的信息：型号、速度（单位 MHz）、时间（一个包含 user、nice、sys、idle 和 irq 所使用 CPU/内核毫秒数的对象）。
>
> 7、os.networkInterfaces()获得网络接口列表。

```
const os = require('node:os');

const arch = os.arch();
console.log("cpu架构："+arch);
// 结果：cpu架构：x64

const arch =os.hostname();
console.log("主机名："+arch);
// 结果：主机名：liyuan

const arch =os.type();
console.log("操作系统名："+arch);
// 结果：操作系统名：Windows_NT

const arch = os.platform();
console.log("平台："+arch);
// 结果：操作系统名：win32

console.log('总内存: ' + os.totalmem() + " bytes");
// 结果：总内存: 34252070912 bytes

const arch = os.cpus();
console.log(arch);
/*
    {
    model: 'Intel(R) Core(TM) i7-8550U CPU @ 1.80GHz',
    speed: 1992,
    times: {
      user: 11015953,
      nice: 0,
      sys: 5949500,
      idle: 51759468,
      irq: 1168734
    }
  }
*/

const arch = os.networkInterfaces();
console.log(arch);
/*
    WLAN: [
    {
      address: 'fe80::ed58:f528:6f9f:79bf',
      netmask: 'ffff:ffff:ffff:ffff::',
      family: 'IPv6',
      mac: '5c:ea:1d:ae:23:a5',
      internal: false,
      cidr: 'fe80::ed58:f528:6f9f:79bf/64',
      scopeid: 15
    },
    {
      address: '192.168.31.32',
      netmask: '255.255.255.0',
      family: 'IPv4',
      mac: '5c:ea:1d:ae:23:a5',
      internal: false,
      cidr: '192.168.31.32/24'
    }
  ],
  'Loopback Pseudo-Interface 1': [
    {
      address: '::1',
      netmask: 'ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff',
      family: 'IPv6',
      mac: '00:00:00:00:00:00',
      internal: true,
      cidr: '::1/128',
      scopeid: 0
    },
    {
      address: '127.0.0.1',
      netmask: '255.0.0.0',
      family: 'IPv4',
      mac: '00:00:00:00:00:00',
      internal: true,
      cidr: '127.0.0.1/8'
    }
  ]
}
*/
```

## DNS解析模块

#### 介绍

```
 DNS 模块用于解析域名
```

#### 功能

```
const dns = require('dns')

// 域名DNS解析IP地址
dns.lookup('www.yahoo.com', function onLookup(err, address, family) {
    console.log('ip 地址:', address)

    // 大部分服务器基本都会禁止反ping，所以只有少量服务器能够反向解析
    dns.reverse(address, function (err, hostnames) {
        if (err)
        {
            console.log(err.stack)
        }

        console.log('反向解析 ' + address + ': ' + JSON.stringify(hostnames))
    })
})

// 执行以上代码，结果如下所示:
// ip 地址: 180.222.102.202
// 反向解析 180.222.102.202: ["media-router-fp74.prod.media.vip.tp2.yahoo.com"]
```

## events

#### 介绍

```
许多 Node.js 核心 API 都是围绕惯用的异步事件驱动架构构建的，其中某些类型的对象
（称为“发射器”）发出命名事件，从而导致Function对象（“侦听器”）被调用。
```

#### 功能

> 1、addListener() 在侦听器数组的末尾为指定的事件添加侦听器
>
> 2、on()在侦听器数组的末尾为指定的事件添加侦听器。
>
> 3、once()为事件添加一次性侦听器。 只有在下次触发事件时才会调用此侦听器，之后将其删除。
>
> 4、removeListener()从侦听器数组中删除指定事件的侦听器。
>
> 5、removeAllListeners()删除所有侦听器或指定事件的侦听器
>
> 6、listenerCount()返回指定事件的侦听器数量。
>
> 7、emit()使用提供的参数按顺序执行每个侦听器。 如果事件具有侦听器，则返回true，否则返回false。

```
const events = require('node:events');

var emitter = new events.EventEmitter();

// 1、on注册监听事件
emitter.on('test', function (arg) {
    console.log('test1触发，传入参数为：' + arg);
});

emitter.on('test', function (arg) {
    console.log('test2触发，传入参数为：' + arg);
});

emitter.on('test', function (arg) {
    console.log('test3触发，传入参数为：' + arg);
});

// 2、addListener添加一个监听器
emitter.addListener('test', function (arg) {
    console.log('新增test4触发，传入参数为：' + arg);
})

// 3、emit触发监听事件
emitter.emit('test', 'admin');

/*
   结果如下：
      test1触发，传入参数为：admin
      test2触发，传入参数为：admin
      test3触发，传入参数为：admin
      新增test4触发，传入参数为：admin
*/

//  4、once注册单次监听器
emitter.once('onceEvent', function (count) {
    console.log('单次监听器触发，二次将不存在' + count);
})

emitter.emit('onceEvent', 1);
emitter.emit('onceEvent', 2);
/*结果: 单次监听器触发，二次将不存在1*/ 

//  5、removeListener 移除指定监听事件
function callback(arg) {
    console.log('test5触发，传入参数为：' + arg + '\n');
}
emitter.on('test', callback);

emitter.emit('test', 'admin');

emitter.removeListener('test', callback);

emitter.emit('test', 'admin');
/*结果只有一次: test5触发，传入参数为：admin*/  


// 6、listenerCount返回指定事件的监听器数组
emitter.on('test', function (arg) {
    console.log('test1触发，传入参数为：' + arg);
});

emitter.on('test', function (arg) {
    console.log('test2触发，传入参数为：' + arg);
});

emitter.on('test', function (arg) {
    console.log('test3触发，传入参数为：' + arg);
});

var count = emitter.listenerCount('test');
console.log(count);
/* 结果： 3*/ 

// 移除所有监听器
mitter.removeAllListeners();
/*
   一旦一个事件被发射，所有在发射时附加到它的监听器都会被依次调用。这意味着 在发出之后和 
   最后一个侦听器完成执行之前removeListener()的任何orremoveAllListeners()调用都不会将它们从 正在进行的中删除。
*/ 
const events = require('node:events');
const myEmitter = new events.EventEmitter();

const callbackA = () => {
  console.log('A++');
  myEmitter.removeListener('event', callbackB);
};

const callbackB = () => {
  console.log('B');
};

myEmitter.on('event', callbackA);
myEmitter.on('event', callbackB);


myEmitter.emit('event');
/*
   结果：
      A++
      B
*/
myEmitter.emit('event');
/*
   结果：
      A++
*/
```

## 搭建express

## 安装好node环境

> node -v

```
出现版信息: v16.18.0
```

## 全局安装express脚手架安装

```
npm install -g express-generator
```

## 查看安装是否成功

```
express --version
```

## 创建项目

> 利用express框架来创建项目

```
express --view=ejs projectName


cd projectName

npm install

npm start
```

## 目录结构

```
/project
    .gitignore                git仓库忽略文件
    bind                    项目启动文件所有在目录
    public                    公共静态资源目录
    package.json            安装包依赖文件
    node_modules            依赖包
    routes                  模块路由目录
    views                   ejs模板文件目录
    app.js                  项目入口文件
```

## 路由功能

### Response.render()方法：渲染页面

```
// 渲染一个页面文件到客户端  
router.get('/', function(req, res, next) {
    //会去找views目录下的index.html文件  设置一个局部name变量，渲染到index页面上
  res.render('index', {name: '张三'});
});
```

### Response.send()方法：发送HTTP响应

```
// Response.send()方法将Content-Type设置为text/html。
router.get('/user/', function (req, res) {
  // 页面直接渲染内容：<h1>html</h1>
  res.send("<h1>html</h1>");
});
```

### express中的路由

```
1、在express中路由是指客户端的请求与服务区处理函数之间的映射关系

2、在express中路由有三个部分组成，分别是请求类型，请求的URL地址和处理函数，格式如下

3、express中的路由分为3部分，分别是请求类型，请求URL地址，处理函数，格式如下：


//匹配get请求，且请求的URL为'/'
app.get('/',(req,res)=>{
    res.send('hello')
})

//匹配post请求，且请求的URL为'/'
app.post('/',(req,res)=>{
    res.send('hello i am post')
})
```

## 模块化路由

```
为了方便对路由进行模块化的管理，express不建议将路由直接挂载到app上，而是推荐将路由抽离为单独的模块。

步骤如下：

1. 创建路由模块对应的js文件

2. 调用express.Router()函数创建路由对象

3. 向路由对象上挂载具体的路由

4. 使用module.exports向外共享路由对象

5. 使用app.use()函数注册路由模块
```

> 路由模块总入口文件:index.js

```
var express = require('express');
const path = require('path')
// 引入数据库
const db = require(path.join(__dirname, "../config/database")) 

// 引入用户路由模块
const UserRouter = require(path.join(__dirname, "./users")) 

// 引入首页制器
const HomeCtr = require(path.join(__dirname, "../controller/home"))

//创建首页路由模块
const HomeRouter = express.Router()

//设置首页路由规则
HomeRouter.get('/', HomeCtr.index)

module.exports = function (app) {
  // 路由守卫:针对某个路由写的安全守卫  
  app.all('*', async(req, res, next) => {
    if(req.url == '/user/login' || req.url == '/user/register') {
      next();
    } else if (req.session.LognUser) {
      let LongUser = req.session.LognUser
      // 校验用户信息
      const result = await db.table('user').find(LongUser.id);
      if(JSON.stringify(result) != "{}") {
        req.session.LognUser = result;
        next();
      } else {
        res.redirect('/user/login');
      }
    } else {
      res.redirect('/user/login');
    }
  })
  app.use(HomeRouter)
  //设置一个前缀 并挂载路由
  app.use('/user', UserRouter)
}
```

> 用户路由模块文件:users.js

```
var express = require('express');
const path = require('path')
// 引入用户控制器
const UserCtr = require(path.join(__dirname, "../controller/user"))

//创建路由模块
const UserRouter = express.Router()

//设置路由规则
UserRouter.get('/', UserCtr.index)
UserRouter.get('/register', UserCtr.register)
UserRouter.post('/register', UserCtr.registerpost)

module.exports = UserRouter;
```

> 注册路由模块app.js

```
// 引入总路由文件
var router = require('./routes/index.js');

// 通过 router 对象设置（挂载）全部路由
router(app);
```

## 中间件

### 安装第三方中间件

```
cnpm install body-parser --save
```

### 入口文件具体配置app.js

```
// 引入中间件
var bodyParser = require('body-parser')

// 创建 application/x-www-form-urlencoded 解析
app.use(bodyParser.urlencoded({extended:false}));
// 创建 application/json 解析
app.use(bodyParser.json());
```

### 中间件应用

> 在express中，已经封装好获取get参数的方法，即req.query，但是post请求的参数却没有被封装，需要我们借助中间件(body-parser)来获取！
>
> 首页控制器中间应用：先建controller文件夹，创建home.js

```
const path = require('path')
var url = require('url');
// 引入数据库
const db = require(path.join(__dirname, "../config/database"))

// 首页渲染  get请求参数获取
let index = async(req,res) => {
    //url.parse(req.url, true)true把参数query属性转对象  
    var data = url.parse(req.url, true)
    let where ={}
    // 判断是否有分类ID
    if(data.query.typeid > 0 && data.query.typeid != undefined){
        where.typeid = data.query.typeid
    }
    //查询分类
    var typelist = await db.table('type').select();
    typelist.unshift({
        id: 0,
        name: "全部"
    })
    // sql语句查询
    const contactlist = await db.table('contact').where(where).order('createtime DESC').select()
    //赋值
    const assign = {
        typelist: typelist,
        contactlist: contactlist,
        typeid: data.query.typeid ? data.query.typeid : 0
    }
    //渲染模板 视图的index.html页面  assign模板赋值
    res.render('index', assign)
}

//导出模块方法
module.exports = {
    index,
}
```

> 用户控制器中间应用：在controller文件夹，创建user.js

```
const path = require('path')
const md5 = require('md5-node') // 引入加密码处理

// 引入公共函数
const {randstr} = require(path.join(__dirname, "../util/common")) 

// 引入数据库
const db = require(path.join(__dirname, "../config/database")) 

// 渲染用户中心
let index = async(req,res) => {
    // 获取存储的用户信息
    let LongUser = req.session.LognUser
    //赋值
    const assign = {
        LongUser: LongUser 
    }
    //渲染模板 找到视图下面的user.html页面渲染
    res.render('user', assign)
}

// 渲染注册页面
let register = async(req, res) => {
    //渲染模板页面  'user/register' 表示是视图下面的user文件夹下的register.html页面渲染
    res.render('user/register')
}

// 注册方法  post请求的参数通过req.body来获取
let registerpost = async (req, res) => {
    const email = req.body.email
    let password = req.body.password
    // 随机生成密码
    const salt = randstr();
    // 密码加密
    password = md5(password + salt)
    let data = {
        nickname: email,
        email: email,
        password: password,
        salt: salt
    }
    const result = await db.table('user').add(data)
    if(result){
        // 组装接口数据返回
        return res.json({
            code: 1,
            msg: '注册成功'
        })
    } else {
        return res.json({
            code: 0,
            msg: '注册失败'
        })
    }
}

//导出模块方法
module.exports = {
    index,
    register,
    registerpost,
}
```

## 模板引擎

## 模板引擎art-template

> views页面目录中有3个页面文件：index.jade、error.jade和layout.jade。大家可能对jade这样的拓展名文件不太熟悉，其实它就是一种模板引擎，为了使用大家熟悉的HTML结构，通常在项目实际开发过程中会将其更换成便于理解的其他模板引擎，比如art-template等。

```
npm install -S express-art-template
```

## 安装模板ejs的布局

```
npm install -S express-ejs-layouts
```

## 项目入口文件：app.js文件

```
// 引入模板布局插件
var expressLayouts = require('express-ejs-layouts');
// 设置视图模块路径
app.set('views', path.join(__dirname, 'views'));
// 更改视图模板
app.engine('.html', require('express-art-template'));
// 设置视图引擎为html
app.set('view engine', 'html');
// 模板布局
app.use(expressLayouts);
```

## 模板布局：layout.html

```
<!DOCTYPE html>
<html>

<head>
    <title>笔记</title>
    <!-- bootstrap -->
    <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />

    <!-- 公共样式 -->
    <link rel="stylesheet" href="/assets/css/common.css" />

    <!-- jquery  -->
    <script src="/assets/js/jquery.min.js"></script>

    <!-- bootstrap -->
    <script src="/assets/js/bootstrap.min.js"></script>

    <!-- wow.js -->
    <script src="/assets/js/wow.min.js"></script>
</head>

<script>
    //实例化wow.js
    new WOW().init()
</script>

<body>
    <div id="wrapper">
        <div id="page-wrapper">
            <div class="container-fluid">
                <%- defineContent('pageSection') %>
            </div>
        </div>

    </div>
</body>

</html>
```

## index.html页面使用

```
<%- contentFor('pageSection') %>
<!-- 页面独立的 -->
<link rel="stylesheet" href="/assets/css/index.css" />

<!-- 搜索 -->
<div class="search">
    <div class="box">
        <div class="icon">
            <span class="glyphicon glyphicon-search"></span>
        </div>
        <input class="input" placeholder="请输入名字" id="keywords" value="<%= keywords %>"/>
        <button class="btn" size="mini" type="default" onclick="getIndex()">搜索</button>
    </div>
</div>

<!-- 分类 -->
<div class="type wow fadeInUp">
    <div class="list" btn='btn' data-target="#a2">
        <% for(var i =0; i < typelist.length; i++) {%>
            <div class="item <%= typeid == typelist[i].id ? 'active' : '' %>" data-id="<%= typelist[i].id %>"><%= typelist[i].name %></div>
        <% } %>
    </div>
</div>

<!-- 列表 -->
<div class="contact wow fadeInUp" data-wow-delay="100ms">
    <div class="list">
        <% for(var i =0; i < contactlist.length; i++) {%>
        <div class="item">
            <div class="content">
                <h3 class="title">
                    <!-- 路由跳转传参 -->
                    <a href="/contact/info?id=<%= contactlist[i].id %>"><%= contactlist[i].nickname %></a>
                </h3>
                <div class="info">
                    <div class="icon">
                        <image src="./assets/images/info.png"></image>
                    </div>
                    <div class="desc">
                        <%= contactlist[i].remark %>
                    </div>
                </div>
            </div>
            <!-- 事件传参 -->
            <div class="call icon" onclick="call('<%= contactlist[i].phone %>')">
                <image src="./assets/images/call.png"></image>
            </div>
            <div class="call icon">
                <a href="/contact/edit?id=<%= contactlist[i].id %>">
                    <image src="./assets/images/edit.png"></image>
                </a>
            </div>
            <div class="call icon" onclick="del('<%= contactlist[i].id %>')">
                <image src="./assets/images/del.png"></image>
            </div>
        </div>
        <% } %>
    </div>
</div>

<!-- 引入公共底部文件 -->
<%- include("./footer.html") %>
```

## ejs 标签各种含义

```
<% %> 流程控制标签(if else for)
<%= %> 输出标签(原文输出HTML标签)
<%- %> 输出标签(HTML会被浏览器解析)
<%# %>注释标签
<%- include("./footer.html") %>
```

## md5

## 安装md5-node

```
npm install md5-node --save
```

## 使用

```
const md5 = require('md5-node')
const password = md5('123')

打印结果： 202cb962ac59075b964b07152d234b70
```

## 在express中利用中间件crypto中的MD5进行加密

```
const crypto = require('crypto')
//createHash(algorithm)方法 ,是利用给定的算法生成对应的hash对象, update:加密数据,digest:以十六进制返回结果
const pass = crypto.createHash('md5').update('123').digest('hex')

打印结果： 202cb962ac59075b964b07152d234b70
```

## mysql基本使用

### node-mysql-promise

- node-mysql-promise官网链接：https://github.com/ffttpp/node-mysql-promise

```
npm install node-mysql-promise
```

### 配置database.js

```
host: 连接的host（默认: localhost）
port: 连接端口
user: 用户名
password: 密码
database: 数据库名
tablePrefix: 数据表前缀
charset: 编码（默认: UTF8_GENERAL_CI）
```

> 配置文件示例

```
var Mysql = require('node-mysql-promise');
var db = Mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'notepad',
    tablePrefix: 'pre_'
});

module.exports = db;
```

### 简单使用

```
// 引入数据库
const db = require(path.join(__dirname, "../config/database"))

let index = async(req,res) => {
    // 查询pre_type表所有的数据
    const typelist = await db.table('type').select();
    //赋值
    const assign = {
        typelist: typelist 
    }
    //渲染模板 找到视图下面的index.html页面渲染
    res.render('index', assign)
}
```

### 语法

```
table(tableName)  tableName String 要查询的表
field(field)  field String|Array 要查询的字段，可以是字符串，也可以是数组
limit(offset, length)  设置查询的数量  offset Number 起始位置  length Number 查询的数目
order('createtime DESC') 设置排序方式  DESC为倒序， 
select()  查询符合条件的数据
find() 查找一条符合条件的数据
update()更新数据，需要条件
delete()删除数据
where(where)设置where条件
```

## Session使用

### 安装express-session

```
npm install express-session
```

### 入口文件配置：aap.js

```
// 引入 session 中间件
const expressSession = require('express-session');

app.use(expressSession({
  secret: 'notepad',  // secret 属性的值可以是任意字符串
  saveUninitialized: true, // 强制将未初始化的session存储
  resave: false,  // 强制保存session即使它并没有变化
  cookie: {
    maxAge: 1800000
  },
  rolling: true, // 在每次请求时强行设置cookie，这将重置cookie过期时间（默认：false）
}));
```

### 使用

> 存储

```
// 用户登陆方法
let loginpost = async(req, res) => {
    const email = req.body.email
    let password = req.body.password
    const result = await db.table('user').where({email:email}).find();
    if(result){
        const salt = result.salt
        password = md5(password + salt)
        if(password != result.password){
            return res.json({
                code: 0,
                msg: '密码错误，请重新登陆'
            })
        }
        // 存储用户信息
        req.session.LognUser = result;
        return res.json({
            code: 1,
            msg: '登陆成功'
        })
    } else{
        return res.json({
            code: 0,
            msg: '登陆失败，当前用户不存在'
        })
    }
}
```

> 校验页面是否有登陆

```
// 校验所有路由跳转
 app.all('*', async(req, res, next) => {
    // 判断是否登陆页或者注册页
    if(req.url == '/user/login' || req.url == '/user/register') {
      next();
    } else if (req.session.LognUser) {
      let LongUser = req.session.LognUser
      // 校验用户信息
      const result = await db.table('user').find(LongUser.id);
      if(JSON.stringify(result) != "{}") {
        // 重新存储用户信息
        req.session.LognUser = result;
        next();
      } else {
        res.redirect('/user/login');
      }
    } else {
      res.redirect('/user/login');
    }
  })
```

> 清除方法destroy()

```
let logout = async (req, res) => {
    // 清除用户信息
    req.session.destroy()
    return res.json({
        code: 1,
        msg: '退出成功'
    })
}
```

## 服务器部署 (pm2)

### 安装pm2

```
npm install -g pm2
```

### 启动命令写在package.json里

```
"scripts": {
    "start": "node ./bin/www",
    "pm2":"pm2 start processes.json"
},
```

### 项目根目录下新建文件：processes.json

```
{
    "apps": [
      {
        "name": "nodenotepad",
        "cwd": "/nodenotepad",
        "script": "bin/www",
        "log_date_format": "YYYY-MM-DD HH:mm Z",
        "pid_file": "pids/node-geo-api.pid",
        "instances": 6,
        "min_uptime": "200s",
        "max_restarts": 10,
        "max_memory_restart": "1M",
        "cron_restart": "1 0 * * *",
        "watch": false,
        "merge_logs": true,
        "exec_interpreter": "node",
        "exec_mode": "fork",
        "autorestart": false,
        "vizion": false
      }
    ]
}
```

## 搭建站点

> ### 拉取项目

1、首先确认服务器有没有安装git，执行下面的指令，如果没有出现版本号的，说明服务器没有git，那么需要安装git指令

```
// 查看版本号
git --version

// 安装指令
yum install -y git
```

2、现在去宝塔发布目录，`/www/wwwroot` 目录就是宝塔默认的发布目录，一般项目都会上传到这里

```
cd /www/wwwroot
```

3、把项目克隆到该目录

```
sudo git clone 你的项目
```

4、打开宝塔面板，如果忘记了面板地址，可执行`sudo bt default`查看基本信息，选择外网面板地址

## 服务器上线配置 PM2配置

1、登录后，找到宝塔菜单软件商店，搜索PM2管理器先安装

![图片](https://topmost.gitee.io/book/mdphoto/extends/node/pm2/pm1.png)

2、在软件商店，找到PM2管理器，然后添加node项目

![图片](https://topmost.gitee.io/book/mdphoto/extends/node/pm2/pm2.png)

3、添加完之后，设置端口

![图片](https://topmost.gitee.io/book/mdphoto/extends/node/pm2/pm3.png)

4、然后创建映射

![图片](https://topmost.gitee.io/book/mdphoto/extends/node/pm2/pm4.png)

5、node项目启动，可以查看刚刚映射的站点访问项目

![图片](https://topmost.gitee.io/book/mdphoto/extends/node/pm2/pm5.png)

6、项目访问

![图片](https://topmost.gitee.io/book/mdphoto/extends/node/pm2/pm6.png)

### 服务器配上线配置 直接添加node项目

1、登录后，点击网站，然后选择添加Node项目

![图片](https://topmost.gitee.io/book/mdphoto/extends/node/pm2/online-1.png)

2、提交后，配置访问域名

![图片](https://topmost.gitee.io/book/mdphoto/extends/node/pm2/online-2.png)

3、开启外网映射

![图片](https://topmost.gitee.io/book/mdphoto/extends/node/pm2/online-3.png)

4、启动项目访问

![图片](https://topmost.gitee.io/book/mdphoto/extends/node/pm2/online-4.png)

 