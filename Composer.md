## Composer

## 快速入门

## 什么是Composer

```
简单来说，Composer是 PHP 用来管理依赖（dependency）关系的工具，也就是一个安装包管理工具。
它包括了两个部分：Composer 和 Packagist
Packagist 是 Composer 的默认的开发包仓库
```

- [Packagist 英文官网](https://packagist.org/)
- [composer文档](https://docs.phpcomposer.com/)
- [composer官网](https://www.phpcomposer.com/)
- [Packagist中国全量镜像](https://pkg.phpcomposer.com/)
- [阿里镜像源](https://mirrors.aliyun.com/composer/)

## windows安装

[**composer下载**](https://getcomposer.org/download/)

**第一步、选择给哪个用户安装，推荐选择第一个**

 ![img](http://web.wdwangke.com/mdphoto/backend/backend/composer/composer01.png)

**第二步，如图选择，不过根据自己的需求选择**

 ![img](http://web.wdwangke.com/mdphoto/backend/backend/composer/composer02.png)

**第三步，安装路径，根据自己的需求选择**

 ![img](http://web.wdwangke.com/mdphoto/backend/backend/composer/composer03.png)

**第四步，点browser，选择自己的php版本，后面都直接next就好**

 ![img](http://web.wdwangke.com/mdphoto/backend/backend/composer/composer04.png)

**第五步，修改环境变量**

```
我的电脑->属性->高级系统设置->环境变量，在用户变量中添加环境变量

PATH:D:\Program Files\composer
```

**第六步，打开cmd并输入composer，提示这个说明你已经安装成功了**

 ![img](http://web.wdwangke.com/mdphoto/backend/backend/composer/composer05.png)

## 切换镜像

```
至此，我们安装好了Composer，但是众所周知，由于某些原因
github和packagist在国内有时会访问不了，或者速度很慢，这就会导致使用Composer时的各种问题
还好我们国内有Packagist中国全量镜像和阿里镜像可以解决这个问题，只需要把仓库的路径修改为镜像的路径即可
```

## **全局配置(推荐的方式)**

```
这个命令会修改Composer的全局配置文件 config.json

composer config -g repo.packagist composer https://mirrors.aliyun.com/composer/
```

## **查看全局配置**

```
composer config -l -g
```

## **取消全局配置**

```
composer config -g --unset repos.packagist
```

## **修改单个项目的配置**

```
composer config repo.packagist composer https://mirrors.aliyun.com/composer/
```

## **这个命令会修改项目下的composer.json文件，添加如下的配置信息：**

```
"repositories": {
    "packagist": {
        "type": "composer",
        "url": "https://packagist.phpcomposer.com"
    }
}

当然你也可以直接手动修改composer.json文件，添加上面那段配置信息
```

**取消当前项目配置**

```
composer config --unset repos.packagist
```

**注：使用仅修改当前项目配置要切换到该项目根目录**

**Composer更新**

```
composer selfupdate

或者（两者是等效的）

composer self-update
```

**如果想进行版本的回滚，可以使用以下命令：**

```
composer selfupdate --rollback
```

## Composer的基本使用

## **composer.json**

```
安装完Composer后，想要在项目里开始使用它，你唯一需要做的就是创建一个composer.json文件。
这个文件描述了你这个项目所依赖的包以及一些其他的元信息。
```

## **require**

```
通过require这个配置项，我们可以指定项目的依赖
require的值是一个对象，对象里的每一个键对应一个依赖
假设我们项目需要用到monolog/monolog这个日志库，那么我们可以这样配置composer.json文件：

{
    "require": {
        "monolog/monolog": "1.0.*"
    }
}
```

## **安装依赖**

```
composer会根据上面配置的版本约定下载最新版本的`monolog/monolog`到默认目录`vendor`

composer install
```

## **更新依赖**

```
更新所有的依赖
composer update

更新某个依赖
composer update monolog/monolog
```

## **卸载依赖**

```
composer remove monolog/monolog
```

## **composer.lock文件**

```
运行完上面的install命令后，你会发现除了vendor目录，还会多了一个composer.lock文件
这个文件保存了项目已经安装的每个包的具体版本
在运行install命令的时候，如果存在这个文件，则Composer会根据这个文件下载对应版本的包
这样的好处是可以保证各个环境的依赖的版本一致，否则如果没有这个文件
每个环境在运行install时可能下载到的版本就不一致了
所以建议把composer.lock文件也放到版本控制里
```

## **Packagist搜索库**

```
要下载什么包，可以去 https://packagist.org/ 找一下包名及其版本信息

安装命令也直接搜索出来
```

## **不需要composer.json文件安装依赖**

```
不需要配置composer.json文件
直接使用 composer require 命令下载类包(自动更新composer.json文件)
下面以下载 phpexcel 为例：

composer require phpexcel/phpexcel
```

## **composer常用命令**

```
composer list    获取帮助信息
composer search    在当前项目中搜索依赖包
composer show    列举所有可用的资源包
```