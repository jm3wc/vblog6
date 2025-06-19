## Node环境搭建

### 参考链接

> [https://www.cnblogs.com/gaozejie/p/10689742.html(opens new window)](https://www.cnblogs.com/gaozejie/p/10689742.html)

> https://www.cnblogs.com/wyy1234/p/9727142.html

## nvm安装

> 下载nvm-setup.zip https://github.com/coreybutler/nvm-windows/releases

## 安装nvm

```
首先把nvm-setup.zip解压到比如E:/dev/nvm 中(其它盘也可以)
然后以管理员的身份运行nvm-setup
选择nvm安装目录为 E:\dev\nvm
node安装目录为 E:\dev\nodejs
修改settings.txt的内容为：
root: E:\dev\nvm
path: E:\dev\nodejs
arch: 64
proxy: none
node_mirror: http://npm.taobao.org/mirrors/node/
npm_mirror: https://npm.taobao.org/mirrors/npm/
```

## nvm配置步骤

```
nvm安装
下载地址https://github.com/coreybutler/nvm-windows/releases    (opens new window)下载nvm-setup.zip

下载
nvm-setup.zip

在盘符创建文件夹nvm
里面创建nodejs文件（切换版本的node版本）
在创建一个跟父级同名 nvm

安装nvm 
第一个文件目录安装在nvm 删除一个nvm
第二个安装软件在node

用管理员运行命令

开启多版本管理nvm on
查看可以下载的node版本 nvm list available

下载node的版本 nvm install 16.14.2

切换node版本命令 nvm use 16.14.2

查看电脑已下载安装版本 nvm list


查看环境变量
在nvm里的nvm创建npm文件夹（安装全局依赖）
在系统变量创建
NPM_HOME
E:\nvm\nvm\nvm\npm(路径)

在path添加%NPM_HOME%的值


安装npm install npm -g

测试 nrm test

nvm ls

查看可用镜像源 nrm ls

使用哪个镜像源 nrm use taobao

查看已选镜像源 nrm test


脚手架
npm install -g @vue/cli@4（@4指定版本 vue2版本）

```

 

## nvm环境变量

```
我的电脑->属性->高级系统设置->环境变量

新增环境变量
NVM_HOME:E:\dev\nvm
NVM_SYMLINK:E:\dev\nodejs

修改环境变量
PATH:%NVM_HOME%;%NVM_SYMLINK%
```

## 开启多版本控制

```
nvm on
```

## 通过nvm安装node

```
nvm -v //查看nvm版本
nvm install latest  //安装最新版本
nvm install 8.12.0  //下载指定版本
nvm use 8.12.0 //使用指定版本
nvm ls //查看已经安装的nodejs版本
node -v //查看nodejs版本
```

## 安装全局npm

```
安装node的时候，npm其实也已经一起安装了
因为nvm可以管理多个版本的node，如果每次添加一个node版本都要安装一堆的包就很麻烦
如果有一个npm可以让各个版本的node共用，就不会这么麻烦了
这就是为什么我们要配置一个全局的npm的原因
简单的三步就可以配置一个全局的npm
配置用npm下载包时全局安装的包路径
npm config set prefix "E:\dev\nvm\npm"

安装cnpm淘宝镜像  https://npmmirror.com/
npm install -g cnpm --registry=https://registry.npmmirror.com

新增环境变量
NPM_HOME=E:\dev\nvm\npm

修改环境变量
path中添加%NPM_HOME%
```

## nvm常用命令

```
显示nvm版本
nvm version

开启和关闭node版本管理
nvm on
nvm off

安装node，最新稳定版本latest
nvm install latest

显示已安装的node版本
nvm list

切换node版本
nvm use version

卸载指定版本node
nvm uninstall version

设置存储不同版本node的目录
nvm root 存储路径
```

#### nvm use [version] 报错“exit status 1 乱码”

```
搜索到的可能导致的原因有：
1、安装路径有中文
2、安装路径有空格
3、CMD命令行窗口不是管理员权限打开
4、配置文件和实际安装路径不符
```

## Node版本切换n(Mac)

```
安装
npm install -g n

安装完成之后，直接输入n后，会输出当前已经安装的node版本以及正在使用的版本
你可以通过移动上下方向键来选择要使用的版本，最后按回车生效

n
    0.10.1 
    0.10.15 
o   0.10.21 
    0.11.8

安装最新版本
n latest

安装稳定版本
n stable

删除某个版本
n rm 0.10.1

以指定的版本来执行脚本
n use 0.10.21 some.js
```

## npm

> **官网：[https://www.npmjs.com/(opens new window)](https://www.npmjs.com/)**

```
NPM的全称是Node Package Manager包管理器，随NodeJS一起安装的包管理工具
它很方便的让开发者下载、安装、上传以及管理已经安装的包
```

## 生成包配置文件package.json

```
npm init
{
    name:"包名",
    version:"版本号",
    description:"包的简介",
    keywords:"关键词数组，可被npm库中搜索到",
    author："包作者",
    scripts："包的命令列表",
    main:"入口文件",
    dependencies:"生产环境下依赖包列表",
    devDenpendencies:"开发环境下依赖包列表",
    maintainters:"包维护者列表",
    contributors:"贡献者列表",
    bus:"可反馈bug的url或者email",
    lincenses:"当前包所使用的许可证列表",
    repositories:"源代码的托管位置",
    homepage:"当前包的网站位置",
    os:"支持的操作系统列表，一般为空（基本都支持）",
    cpu:"支持的CPU架构列表，一般为空（基本都支持）",
    engine:"支持的javascript引擎列表，一般为空（基本都支持）",
}      
```

## 全局安装与本地安装

```
本地安装
npm install express

全局安装
npm install express -g

安装指定版本
npm install express@4.1.1
```

## 本地安装

```
将安装包放在当前目录下的node_modules文件夹中

如果没有node_modules目录，会在当前执行 npm 命令的目录下生成node_modules目录

可以通过 require() 来引入本地安装的包
```

## 全局安装

```
将安装包放在 /usr/local 下可以直接在命令行里使用
不能通过 require() 来引入本地安装的包

查看全局安装路径
npm config get prefix
```

## 其他参数

```
-S, --save 安装包信息将写入到 dependencies（生产环境下依赖包列表）
npm install express --save
npm install express -S

-D, --save-dev 安装包信息将加入到 devDependencies（开发环境下依赖包列表）
npm install gulp --save-dev
npm install gulp -D
```

## 常用命令

```
查看所有全局安装的模块
npm ls -g

查看npm默认设置
npm config ls（部分）
npm config ls -l（全部）

清除node_modules中的编译缓存
npm cache clean -f

安装package.json中的所有依赖包
npm install

搜索模块
npm search express

更新模块
npm update express
npm update express -g 更新全局

卸载模块
npm uninstall express
npm uninstall express -g 删除全局
```

## nrm快速切换NPM源

> **[github.com/Pana/nrm(opens new window)](https://github.com/Pana/nrm)**

```
安装
npm install -g nrm

列出可选的源
nrm ls    

* npm ---- https://registry.npmjs.org/
  cnpm --- http://r.cnpmjs.org/
  taobao - http://registry.npm.taobao.org/
  eu ----- http://registry.npmjs.eu/
  au ----- http://registry.npmjs.org.au/
  sl ----- http://npm.strongloop.com/
  nj ----- https://registry.nodejitsu.com/
带 * 的是当前使用的源，上面的输出表明当前源是官方源。

切换
nrm use taobao  

测试速度
nrm test npm


测试所有源的响应时间：
nrm test 

  npm ---- 891ms
  cnpm --- 1213ms
* taobao - 460ms
  eu ----- 3859ms
  au ----- 1073ms
  sl ----- 4150ms
  nj ----- 8008ms
```

## npx

```
npx是npm5.2之后发布的一个命令，就是执行npm依赖包的二进制文件，简而言之，就是我们可以使用npx来执行各种命令

使用npx可以在命令行直接执行本地已安装的依赖包命令，不用在scripts脚本写入命令，也不用麻烦的去找本地脚本
```

## npx举例

```
npm i -D mocha
npx mocha --version    
```

## 原理

```
1、去node_modules/.bin路径检查npx后的命令是否存在，找到之后执行
2、找不到，就去环境变量$PATH里面，检查npx后的命令是否存在，找到之后执行
3、还是找不到，自动下载一个临时的依赖包最新版本在一个临时目录，然后再运行命令，运行完之后删除，不污染全局环境
```

## Yarn

> **官网：[https://www.yarnpkg.cn/(opens new window)](https://www.yarnpkg.cn/)**

```
Yarn为Node.js平台的代码包管理器。类似于知名的npm包管理器，实际是npm客户端

特点：快速、安全、可靠

1.离线模式
如果你之前安装过某个包，你就可以在没有网络连接的情况下再次安装它

2.确定性
不管是什么顺序，在不同的机器上的依赖会以同一方式安装

3.网络性能
Yarn可以高效地队列化请求并且避免请求瀑布化，使网络利用率最大化

4.相同的软件包
从 npm 安装软件包并使用相同的包管理流程

5.网络适应
单个请求失败不会导致安装失败，请求失败时会重试

6.扁平模式
解析不匹配的依赖版本为一个单一的版本来避免导致多个版本
```

## 安装

```
Mac安装
brew install yarn

Windows安装
下载.msi按装包。确保Node.js已经安装并可用。
https://yarnpkg.com/latest.msi

检查安装是否成功
yarn --version
```

## 修改yarn全局安装和缓存位置

```
改变 yarn 全局安装位置
yarn config  set global-folder "你的磁盘路径"

改变 yarn 缓存位置
yarn config set cache-folder "你的磁盘路径"

检查当前 yarn 的 bin位置
yarn global bin

检查当前 yarn 的 全局安装位置
yarn global dir

我们需要将全局安装目录添加到系统环境变量中去，否则通过 yarn安装全局包 的时候，在cmd命令行中是找不到的命令的
```

## 手动更换镜像源

```
$ yarn config set registry "https://registry.npm.taobao.org"
```

## yrm快速切换镜像源

```
npm install -g yrm

列出当前可用的所有镜像源
yrm ls

npm -----  https://registry.npmjs.org/
cnpm ----  http://r.cnpmjs.org/
taobao --  https://registry.npm.taobao.org/
nj ------  https://registry.nodejitsu.com/
rednpm -- http://registry.mirror.cqupt.edu.cn
skimdb -- https://skimdb.npmjs.com/registry
yarn ----  https://registry.yarnpkg.com


使用淘宝镜像源
yrm use taobao


测试访问速度
yrm test taobao
```

## 常用命令

```
生成包配置文件 package.json
yarn init

安装所有依赖包
yarn install

安装依赖包
yarn add express -S

更新依赖包
yarn upgrade express -S

手动选择升级的依赖包
yarn upgrade-interactive --latest

更新到最新版
yarn self-update

删除依赖包
yarn remove express -S

清除缓存
yarn cache clean
```

## GitBook环境

### 以下命令需要在超级管理员权限下执行

### 1、安装nvm工具多NodeJS版本管理工具,按照下面的步骤来走

> - https://www.cnblogs.com/gaozejie/p/10689742.html
> - https://www.cnblogs.com/wyy1234/p/9727142.html (需要设置nvm安装npm包的全局目录)

### 2、安装nodejs版本

> - nvm install 6.17.1

### 3、切换版本

> - nvm use 6.17.1

### 4、开启NodeJS版本管理

> - nvm on

### 5、查看node版本是否有切换

> - node --version

### 6、安装cnpm淘宝镜像

> - npm install -g cnpm --registry=[https://registry.npm.taobao.org](https://registry.npm.taobao.org/)

### 7、安装Gitbook

> - cnpm install ­-g gitbook­-cli

### 8、安装完成后在webnote项目目录下面执行

> - gitbook init

### 9、最后一步编译，编译成功后看下图

> - gitbook build --gitbook=2.6.7

![gitbook](https://topmost.gitee.io/book/mdphoto/extends/gitbook.png)

## 目录结构

```
_book            书籍编译生成目录;
book.json        书籍配置文件不需要动
README.md        默认首页
SUMMARY.md        书籍目录

mdbook/          书籍文件夹
    backend/         WEB后端开发
    base/            WEB入门基础
    frontend/         WEB前端开发
    standard/         预科体验班
    extends/        课外拓展技术


mdphoto/         图片资源文件夹
    backend/         WEB后端开发
    base/            WEB入门基础
    frontend/         WEB前端开发
    standard/         预科体验班
    back/              首页背景图
    extends/        课外拓展技术


mdwork/            作业文件夹
    backend/         WEB后端开发
    base/            WEB入门基础
    frontend/         WEB前端开发
    standard/         预科体验班
    extends/        课外拓展技术
```

### SUMMARY.md

```
先在SUMMARY.md文件中设置好书籍目录结构，发给管理员看
没有问题了用下面命令初始化自动生成文件
```

> - gitbook init

##### 写好之后提交到Git仓库远程仓库里面,已经设置好文件忽略规则了,所以按照忽略文件规则上传

##### 笔记一定要按照规范来书写，不要乱写！否则返工次数太多影响进度