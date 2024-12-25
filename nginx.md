## 01 【Nginx的安装和启动】

## 1.Nginx的介绍

Nginx (engine x) 是一个高性能的HTTP和反向代理web服务器，同时也提供了 IMAP/POP3/SMTP服务。Nginx是由伊戈尔·赛索耶夫为俄罗斯访问量第二的 Rambler.ru站点（俄文：Рамблер）开发的，第一个公开版本0.1.0发布于2004 年10月4日。 

其将源代码以类BSD许可证的形式发布，因它的稳定性、丰富的功能集、简单的配 置文件和低系统资源的消耗而闻名。2011年6月1日，nginx 1.0.4发布。 Nginx是一款轻量级的Web 服务器/反向代理服务器及电子邮件（IMAP/POP3） 代理服务器，在BSD-like 协议下发行。其特点是占有内存少，并发能力强，事实 上nginx的并发能力在同类型的网页服务器中表现较好，中国大陆使用nginx网站 用户有：百度、京东、新浪、网易、腾讯、淘宝等。

## 2.版本区别  

 常用版本分为四大阵营 

[Nginx开源版](http://nginx.org/) 				http://nginx.org/ 

[Nginx plus 商业版](https://www.nginx.com) 			https://www.nginx.com 

[openresty](http://openresty.org/cn/) 				http://openresty.org/cn/ 

[Tengine ](http://tengine.taobao.org/)					http://tengine.taobao.org/  



## 3.Centos安装

链接: https://pan.baidu.com/s/15KT0845iAEiEz6-NTYUNiA?pwd=qn7d 提取码: qn7d 

**安装完后需要配置静态ip**

1. 修改配置网卡配置文件
   `vi /etc/sysconfig/network-scripts/ifcfg-ens33`
   ![image-20220815204909611](https://i0.hdslb.com/bfs/album/a414c7903674fcdaf58a3f3e8ab13725f9a4b2ae.png)
   ![image-20220815204852826](https://i0.hdslb.com/bfs/album/46b13351b7f4804b7dd921392fe0114aedd6685d.png)

   ​		一些公网DNS服务器

   ```tex
   #阿里
   223.5.5.5
   223.6.6.6
   #腾讯
   119.29.29.29
   182.254.118.118
   #百度
   180.76.76.76
   #114 DNS
   114.114.114.114
   114.114.115.115
   #谷歌
   8.8.8.8
   8.8.4.4
   ```

2. 重启网络服务

   ````bash
   三种方法
   1.service network restart
   2.systemctl restart network
   下面这时Centos8的方法
   3.nmcli c reload 
   nmcli c up ens160
   ````

3. 然后使用`ifconfig`或者`ip addr`来查看是否修改成功

## 4.Nginx开源版安装

将安装包`nginx-1.21.6.tar.gz`放到linux操作系统用户根目录下，使用tar zxvf安装，命令：`tar zxvf nginx-1.21.6.tar.gz`  。

**然后进入到nginx安装文件夹目录**

![image-20220823105625223](https://i0.hdslb.com/bfs/album/0cf632323f5aff6c2c9b24954b64470fcf62c2a0.png)

安装指令：

```css
 ./configure --prefix=/usr/local/nginx
```

安装到`usr/local/nginx`路径下

安装成功页面

![image-20220823105715862](https://i0.hdslb.com/bfs/album/fc186b1f589af06a28f218ce03d6fe77be8e0710.png)

**但遇到报错，需要安装以下环境**  

安装Nginx需要C语言编译器等。。

 安装 `gcc yum install -y gcc`

 安装perl库 `yum install -y pcre pcre-devel  `

 安装zlib库 `yum install -y zlib zlib-devel  `

 接下来依次执行 

```css
make
make install
```

**查看 /usr/local目录，确定安装成功**

![image-20220823105922400](https://i0.hdslb.com/bfs/album/f35e5c909f51bb8de5ee12e837f6dd9236510cdf.png)

## 5.启动Nginx

**放行Nginx，端口号：80**

```bash
 firewall-cmd --zone=public --add-port=80/tcp --permanent
```

**重启防火墙**

```bash
 firewall-cmd --reload  
```

> **CentOS 7.0默认使用的是firewall作为防火墙**
>
> 1. 查看防火墙状态
>
>    firewall-cmd --state
>
> 2. 停止firewall
>
>    systemctl stop firewalld.service
>
> 3. 禁止firewall开机启动
>
>    systemctl disable firewalld.service
>
> 4. 放行端口
>
>    firewall-cmd --zone=public --add-port=80/tcp --permanent
>
> 5. 重启防火墙
>
>    firewall-cmd --reload

 **然后进入安装好的目录 `/usr/local/nginx/sbin  `**

```bash
./nginx					    ## 启动
./nginx -s stop			 	#快速停止
./nginx -s quit 			#优雅关闭，在退出前完成已经接受的连接请求
./nginx -s reload 			#重新加载配置
```

**启动Nginx  `./nginx`**

**访问服务器ip**

![image-20220823110253824](https://i0.hdslb.com/bfs/album/51b9498b820979d41768cd430e6738d4a0bbdfab.png)

## 6.安装成系统服务，开机自启

在如下位置创建服务脚本nginx.service

`vi /usr/lib/systemd/system/nginx.service `

服务脚本内容如下(注意路径要对应，这里的路径是/usr/local/nginx/sbin)：

```css
[Unit]
Description=nginx - web server
After=network.target remote-fs.target nss-lookup.target
[Service]
Type=forking
PIDFile=/usr/local/nginx/logs/nginx.pid
ExecStartPre=/usr/local/nginx/sbin/nginx -t -c /usr/local/nginx/conf/nginx.conf
ExecStart=/usr/local/nginx/sbin/nginx -c /usr/local/nginx/conf/nginx.conf
ExecReload=/usr/local/nginx/sbin/nginx -s reload
ExecStop=/usr/local/nginx/sbin/nginx -s stop
ExecQuit=/usr/local/nginx/sbin/nginx -s quit
PrivateTmp=true
[Install]
WantedBy=multi-user.target
```

 重新加载系统服务 

```css
systemctl daemon-reload  
```

使用系统启动服务之前，建议先把之前启动的关闭，否则可能有冲突

在`/usr/local/nginx/sbin`目录下

```css
./nginx -s stop
```

 启动服务 

```css
systemctl start nginx.service  
```

![image-20220823110653960](https://i0.hdslb.com/bfs/album/60dc9a06c5f8c439ca2f8c8015300192c972571c.png)

重新启动nginx服务

```css
systemctl reload nginx
```

开机启动

```css
systemctl enable nginx.service
```

测试，访问http://192.168.2.100：

## 02 【Nginx的目录介绍】

## 1.Nginx目录结构

![image-20220823111154881](https://i0.hdslb.com/bfs/album/57cc40457d8c213875d6583111e2109257b28772.png)

```css
[root@localhost ~]# tree /usr/local/nginx
/usr/local/nginx
├── client_body_temp                 # POST 大文件暂存目录
├── conf                             # Nginx所有配置文件的目录
│   ├── fastcgi.conf                 # fastcgi相关参数的配置文件
│   ├── fastcgi.conf.default         # fastcgi.conf的原始备份文件
│   ├── fastcgi_params               # fastcgi的参数文件
│   ├── fastcgi_params.default       
│   ├── koi-utf
│   ├── koi-win
│   ├── mime.types                   # 媒体类型
│   ├── mime.types.default
│   ├── nginx.conf                   #这是Nginx默认的主配置文件，日常使用和修改的文件
│   ├── nginx.conf.default
│   ├── scgi_params                  # scgi相关参数文件
│   ├── scgi_params.default  
│   ├── uwsgi_params                 # uwsgi相关参数文件
│   ├── uwsgi_params.default
│   └── win-utf
├── fastcgi_temp                     # fastcgi临时数据目录
├── html                             # Nginx默认站点目录
│   ├── 50x.html                     # 错误页面优雅替代显示文件，例如出现502错误时会调用此页面
│   └── index.html                   # 默认的首页文件
├── logs                             # Nginx日志目录
│   ├── access.log                   # 访问日志文件
│   ├── error.log                    # 错误日志文件
│   └── nginx.pid                    # pid文件，Nginx进程启动后，会把所有进程的ID号写到此文件
├── proxy_temp                       # 临时目录
├── sbin                             # Nginx 可执行文件目录
│   └── nginx                        # Nginx 二进制可执行程序
├── scgi_temp                        # 临时目录
└── uwsgi_temp                       # 临时目录
```

 其中这几个文件夹在刚安装后是没有的，主要用来存放运行过程中的临时文件  

 client_body_temp fastcgi_temp proxy_temp scgi_temp  

主要的目录是conf,html,log及sbin。

- conf目录放的是核心配置文件

- html目录放的是静态页面：

  ![image-20220823111330446](https://i0.hdslb.com/bfs/album/ec5e50565454a22fc3936d686c8db9e6b3614c6a.png)

50x.html是发生错误展示的页面，index.html是默认的访问页面。可以在该目录下新建html，然后在浏览器中访问，例如在该目录下新建hello.html，内容是hello，然后访问：http://192.168.2.100/hello.html，结果如下：

![image-20220823111448251](https://i0.hdslb.com/bfs/album/072441b83c05b441c6e65ea9ea6cc30558046b38.png)

- logs文件夹用于存放日志信息：

  ![image-20220823111537888](https://i0.hdslb.com/bfs/album/4ec467aa9577640d45e6984a8ddf48acfa144f01.png)error.log存放出错的信息，nginx.pid存放的是当前nginx的pid。

- sbin存放的是可执行文件，可以用 ./nginx启动nginx：
  ![image-20220823111610620](https://i0.hdslb.com/bfs/album/f1cd96779b4385b914546be89e536760af268bb7.png)

## 2.Nginx基本运行原理

![image-20220823111631721](https://i0.hdslb.com/bfs/album/f671dc8a00f96433f9fe6f5cd114bdffb308dd0a.png)

Nginx的进程是使用经典的「Master-Worker」模型,Nginx在启动后，会有一个master进程和多个worker进程。master进程主要用来管理worker进程，包含：接收来自外界的信号，向各worker进程发送信号，监控worker进程的运行状态，当worker进程退出后(异常情况下)，会自动重新启动新的worker进程。worker进程主要处理基本的网络事件，多个worker进程之间是对等的，他们同等竞争来自客户端的请求，各进程互相之间是独立的。一个请求，只可能在一个worker进程中处理，一个worker进程，不可能处理其它进程的请求。worker进程的个数是可以设置的，一般会设置与机器cpu核数一致，这里面的原因与nginx的进程模型以及事件处理模型是分不开的。

## 3.Nginx的基本配置文件

Nginx的默认配置文件是nginx.conf

![image-20220823111744359](https://i0.hdslb.com/bfs/album/85b68ea2b37b92714f7da30e775b809492776c25.png)

> 有一个文件是`nginx.conf.default`，那个就是`nginx.conf`初始内容，出了问题可以对照着找问题。

`nginx.cong`去掉注释的简单版如下：

```php
worker_processes  1; #允许进程数量，建议设置为cpu核心数或者auto自动检测，注意Windows服务器上虽然可以启动多个processes，但是实际只会用其中一个

events {
    #单个进程最大连接数（最大连接数=连接数*进程数）
    #根据硬件调整，和前面工作进程配合起来用，尽量大，但是别把cpu跑到100%就行。
    worker_connections  1024;
}


http {
    #文件扩展名与文件类型映射表(是conf目录下的一个文件)
    include       mime.types;
    #默认文件类型，如果mime.types预先定义的类型没匹配上，默认使用二进制流的方式传输
    default_type  application/octet-stream;

    #sendfile指令指定nginx是否调用sendfile 函数（zero copy 方式）来输出文件，对于普通应用，必须设为on。如果用来进行下载等应用磁盘IO重负载应用，可设置为off，以平衡磁盘与网络IO处理速度。
    sendfile        on;
    
     #长连接超时时间，单位是秒
    keepalive_timeout  65;

 #虚拟主机的配置
    server {
    #监听端口
        listen       80;
        #域名，可以有多个，用空格隔开
        server_name  localhost;

	#配置根目录以及默认页面
        location / { 
            # 文件根目录(这里是以nginx文件夹为根目录)
            root   html;
            #默认页名称
            index  index.html index.htm;
        }

	#出错页面配置
        error_page   500 502 503 504  /50x.html;
        #/50x.html文件所在位置
        location = /50x.html {
            root   html;
        }
        
    }

}
```

- **worker_processes** 

worker_processes 1; 默认为1，表示开启一个业务进程 

- **worker_connections** 

worker_connections 1024; 单个业务进程可接受连接数 

- **include mime.types;**

 include mime.types; 引入http mime类型 

- **default_type application/octet-stream;** 

default_type application/octet-stream; 如果mime类型没匹配上，默认使用二进制流的方式传输。 

- **sendfile on;** 

sendfile on; 使用linux的 sendfile(socket, file, len) 高效网络传输，也就是数据0拷贝。
未开启sendfile  

![image-20220823112052472](https://i0.hdslb.com/bfs/album/274b7fd11c8a1c8575db88bb5a6abfa9c64a4033.png)

开启后

![image-20220823112108345](https://i0.hdslb.com/bfs/album/77dc6e6b39146a41451d078ecc49d8868c636c5b.png)

- **keepalive_timeout 65;** 

keepalive_timeout 65;  ，保持连接，超时时间。

-  **server**  

![image-20220823112140071](https://i0.hdslb.com/bfs/album/963758ee4a7f1a66285342f481dbd5dd429a4193.png)

## 03 【Nginx虚拟主机和域名解析】

虚拟主机使用特殊的软硬件技术，把一台运行在因特网上的服务器主机分成一台台“虚拟”的主机，每一台虚拟主机都具有独立的域名，具有完整的Internet服务器（WWW、FTP、Email等）功能，虚拟主机之间完全独立，并可由用户自行管理，在外界看来，每一台虚拟主机和一台独立的主机完全一样。

域名解析就是域名到IP地址的转换过程，IP地址是网路上标识站点的数字地址，为了简单好记，采用域名来代替ip地址标识站点地址，域名的解析工作由DNS服务器完成。

## 1.域名、dns、ip地址的关系

- 域名是相对网站来说的，IP是相对网络来说的。当输入一个域名的时候，网页是如何做出反应的？

输入域名---->域名解析服务器（dns）解析成ip地址—>访问IP地址—>完成访问的内容—>返回信息。

- Internet上的计算机IP是唯一的，一个IP地址对应一个计算机。

一台计算机上面可以有很多个服务，也就是一个ip地址对应了很多个域名，即一个计算机上有很多网站。

**IP地址和DNS地址的区别**

IP地址是指单个主机的唯一IP地址，而DNS服务器地址是用于域名解析的地址。

一个是私网地址，一个是公网地址；

一个作为主机的逻辑标志，一个作为域名解析服务器的访问地址。

**IP地址**

IP，就是Internet Protocol的缩写，是一种通信协议，我们用的因特网基本是IP网组成的。

IP地址就是因特网上的某个设备的一个编号。

IP地址一般由网络号，主机号，掩码来组成。

IP网络上有很多路由器，路由器之间转发、通信都是只认这个IP地址，类似什么哪？就好像你寄包裹，你的写上发件人地址，你的姓名，收件人地址，收件人姓名。

这个发件人地址就是你电脑的IP的网络号，你的姓名就是你的主机号。

收件人的地址就是你要访问的IP的网络号，收件人的姓名就是访问IP的主机号。

现在还有了更复杂的IPV6,还有IPV9。

**DNS是什么？**

我们访问因特网必须知道对端的IP地址，可是我们访问网站一般只知道域名啊，怎么办？

这时候DNS就有用处了，电脑先访问DNS服务器，查找域名对应的IP,于是，你的电脑就知道要发包到IP地址了。

## 2.http协议

HTTP是一个应用层协议，由请求和响应构成，是一个标准的客户端服务器模型。HTTP是一个无状态的协议。

HTTP协议通常承载于TCP协议之上，有时也承载于TLS或SSL协议层之上，这个时候，就成了我们常说的HTTPS。如下图所示：

![image-20220823112632146](https://i0.hdslb.com/bfs/album/cad7e4d03f01d64a1f8c0e5e841030b0c9fbd26b.png)

客户端与服务器的数据交互的流程：

1）首先客户机与服务器需要建立TCP连接。只要单击某个超级链接，HTTP的工作开始，下图是TCP连接流程。

![image-20220823112651941](https://i0.hdslb.com/bfs/album/6d258d5fe8ebfeebbc20ef86409e20cf10704801.png)

2）建立连接后，客户机发送一个请求给服务器，请求方式的格式为：统一资源标识符（URL）、协议版本号，后边是MIME信息包括请求修饰符、客户机信息和可能的内容。

3）服务器接到请求后，给予相应的响应信息，其格式为一个状态行，包括信息的协议版本号、一个成功或错误的代码，后边是MIME信息包括服务器信息、实体信息和可能的内容，例如返回一个HTML的文本。

4）客户端接收服务器所返回的信息通过浏览器显示在用户的显示屏上，然后客户机与服务器断开连接。如果在以上过程中的某一步出现错误，那么产生错误的信息将返回到客户端，有显示屏输出。对于用户来说，这些过程是由HTTP自己完成的，用户只要用鼠标点击，等待信息显示就可以了。

## 3.虚拟主机原理

虚拟主机是为了在同一台物理机器上运行多个不同的网站，提高资源利用率引入的技术。

一般的web服务器一个ip地址的80端口只能正确对应一个网站。web服务器在不使用多个ip地址和端口的情况下，如果需要支持多个相对独立的网站就需要一种机制来分辨同一个ip地址上的不同网站的请求，这就出现了主机头绑定的方法。简单的说就是，将不同的网站空间对应不同的域名，以连接请求中的域名字段来分发和应答正确的对应空间的文件执行结果。举个例子来说，一台服务器ip地址为192.168.8.101，有两个域名和对应的空间在这台服务器上，使用的都是192.168.8.101的80端口来提供服务。如果只是简单的将两个域名A和B的域名记录解析到这个ip地址，那么web服务器在收到任何请求时反馈的都会是同一个网站的信息，这显然达不到要求。接下来我们使用主机头绑定域名A和B到他们对应的空间文件夹C和D。当含有域名A的web请求信息到达192.168.8.101时，web服务器将执行它对应的空间C中的首页文件，并返回给客户端，含有域名B的web请求信息同理，web服务器将执行它对应的空间D中的首页文件，并返回给客户端，所以在使用主机头绑定功能后就不能使用ip地址访问其上的任何网站了，因为请求信息中不存在域名信息，所以会出错。

## 4.使用host文件解析域名

![image-20230805180808945](https://article.biliimg.com/bfs/article/d807d76ce297eef29232d689448439a7dfb14549.png)

修改完成后，访问虚拟机的ip解析的域名 

![image-20230805180856460](https://article.biliimg.com/bfs/article/de1e07f398a67b9c186ed66941a5412cb1e12a39.png)

> 还可以通过域名解析 然后连接到内网
>
> 我们在阿里云的dns域名解析上面添加添加了我们域名和内网ip的对应关系，仅仅只是对应关系，所以我们ping域名可以解析成我们的内网ip，由于终端与对应机器在同一局域网所以能通，你换个不在同一内网的不行

## 5.虚拟主机域名配置

在根目录的`www`目录下创建文件夹`test`，里面在创建两个文件夹`test1`和`test2`，分别创建`index.html`：

![image-20230805181232579](https://article.biliimg.com/bfs/article/6587c46a2d0d1b81aed5a18aa32c8fad3a52f078.png)

使用腾讯云`DNSPod`添加域名解析记录：

![image-20230805181614222](https://article.biliimg.com/bfs/article/fb1fd8e2b1fc20f3fe655f3e5f4ab82559ccdcfc.png)

修改`nginx.conf`：

```bash
      server {
        listen 80;
        server_name test1.dselegent.icu;
        location /
        {
           root /www/test/test1;
           index index.html index.htm;
        }
      }
      
        server {
        listen 80;
        server_name test2.dselegent.icu;
        location /
        {
           root /www/test/test2;
           index index.html index.htm;
        }
      }
```

重新加载服务：`systemctl reload nginx`。

结果：

![image-20230805181750749](https://article.biliimg.com/bfs/article/2b02b3d9474c1bcba9e7b132d3981e99fa3d1f30.png)

![image-20230805181805077](https://article.biliimg.com/bfs/article/d8b91ea0fe41fa6595bc79d15945dca314f2d33a.png)

**注意：**

虚拟主机技术server中，相同的主机端口号会报错。

可以这样配置：

- listen 80;		server_name  www.website.com;
- listen 88;		server_name qqq.website.com;

两者组合起来不重复就可以了。

## 6.泛域名

所谓“泛域名解析”是指：利用通配符* （星号）来做次级域名以实现所有的次级域名均指向同一IP地址。

好处：

1.可以让域名支持无限的子域名(这也是泛域名解析最大的用途)。

2.防止用户错误输入导致的网站不能访问的问题

3.可以让直接输入网址登陆网站的用户输入简洁的网址即可访问网站

泛域名在实际使用中作用是非常广泛的，比如实现无限二级域名功能，提供免费的url转发，在IDC部门实现自动分配免费网址，在大型企业中实现网址分类管理等等，都发挥了巨大的作用。

在腾讯云的域名配置如下：

![image-20230805183845203](https://article.biliimg.com/bfs/article/e73477bdb9f99b1928ef771a32bd08a6bec2602b.png)

## 7.域名解析规则

我们可以在同一个`server_name`中配置多个域名

> 此处所有配置都是指的nginx配置。

**完整匹配**
server中可以配置多个域名，例如：

`server_name  test1.dselegent.icu  test2.dselegent.icu;`

**通配符匹配**
使用通配符的方式如下：

`server_name  *.dselegent.icu;`

需要注意的是完整匹配的优先级大于通配符匹配和正则匹配。

**通配符结束匹配**
使用通配符结束匹配的方式如下：

`server_name  www.dselegent.*;`

**正则匹配**

采用正则的匹配方式如下:

`server_name  ~^[0-9]+\.dselegent\.icu$`

访问:`123456.dselegent.icu`

正则匹配格式，必须以`~`开头，比如：`server_name ~^www\d+\.example\.net$;`。如果开头没有~，则nginx认为是精确匹配。在逻辑上，需要添加^和$锚定符号。注意，正则匹配格式中.为正则元字符，如果需要匹配.，则需要反斜线转义。如果正则匹配中含有{和}则需要双引号引用起来，避免nginx报错，如果没有加双引号，则nginx会报如下错误：`directive "server_name" is not terminated by ";" in ...`。

**匹配顺序**

```css
1. 精确的名字
2. 以*号开头的最长通配符名称，例如 *.example.org
3. 以*号结尾的最长通配符名称，例如 mail.*
4. 第一个匹配的正则表达式（在配置文件中出现的顺序）
```

## 04 【Nginx反向代理和负载均衡】

## 1.反向代理和正向代理

1.1 反向代理

描述:反向代理是指以代理服务器来接受连接请求，然后将请求转发给内部网络上的服务器，并将从服务器上得到的结果返回给请求连接的客户端，此时代理服务器对外就表现为一个反向代理服务器,而且整个过程对于客户端而言是透明的。 

![image-20220823114417662](https://i0.hdslb.com/bfs/album/c960d7a924ce20ef449e4a480f40039a5dc3470a.png)

## 1.2 正向代理

描述:正向代理意思是一个位于客户端和原始服务器(origin server)之间的服务器，为了从原始服务器取得内容，客户端向代理发送一个请求并指定目标(原始服务器)，然后由代理向原始服务器转交请求并将获得的内容返回给客户端。

简单的说类似于采用VPN来访问google: 

![image-20220823114523751](https://i0.hdslb.com/bfs/album/35c72461d0838b70010f3d9c31fe78ee73684540.png)

区别正向代理、反向

都是站在客户端的角度，看代理服务器是帮客户端代理，还是帮服务端代理

## 2. 使用proyx_pass进行代理配置

浏览器访问`虚拟机ip(比如：http://test1.dselegent.icu/)`就会跳转到 http://www.bilibili.com，同时域名没有变化（不支持https）

```bash
    server {
        listen 80;
        server_name test1.dselegent.icu;
        location / 
        {
          proxy_pass http://www.bilibili.com;
        }
      }
```

## 3.负载均衡

描述：负载均衡也是Nginx常用的一个功能。简单而言就是当有2台或以上服务器时，根据规则随机的将请求分发到指定的服务器上处理，负载均衡配置一般都需要同时配置反向代理，通过反向代理跳转到负载均衡。 

而Nginx目前支持自带3种负载均衡策略还有2种常用的第三方策略。

![image-20220824135958921](https://i0.hdslb.com/bfs/album/f4b9b827c7a66b7bd319dc24efd72d5d0346f730.png)

## 4.基于反向代理的负载均衡器

克隆两个centos，ip分别设为192.168.8.102，192.168.8.103（网段要用自己的电脑对应）

修改静态ip
![image-20220824140153742](https://i0.hdslb.com/bfs/album/b074f86a0c33f16da00936356ae2dd314e15b3f3.png)

![image-20220824140209449](https://i0.hdslb.com/bfs/album/30e432cc5e27ece10e1319b24def17438f4f1026.png)

重启网络服务：

![image-20220824140220392](https://i0.hdslb.com/bfs/album/22294ca6230dab49a07ec4cff5b3b39d4ce7e0a8.png)

另一个虚拟机的配置也是一样。配置好虚拟机之后,配置nginx.conf

102的nginx.cfg

```bash
worker_processes  1;


events {
    worker_connections  1024;
}


http {
    include       mime.types;
    default_type  application/octet-stream;

    sendfile        on;

    keepalive_timeout  65;


    server {
        listen       80;
        server_name  localhost;

        location / {
            root   html;
            index  index.html index.htm;
        }

        #error_page  404              /404.html;

        # redirect server error pages to the static page /50x.html
        #
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
}
```

102的nginx在html目录下的index.html文件

```html
<!DOCTYPE html>
<html>
<head>
<title>Welcome to nginx!</title>
<style>
html { color-scheme: light dark; }
body { width: 35em; margin: 0 auto;
font-family: Tahoma, Verdana, Arial, sans-serif; }
</style>
</head>
<body>
<h1>I am from 192.168.8.102</h1>
</body>
</html>
```

103的nginx.cfg

```bash
worker_processes  1;


events {
    worker_connections  1024;
}


http {
    include       mime.types;
    default_type  application/octet-stream;

    sendfile        on;

    keepalive_timeout  65;


    server {
        listen       80;
        server_name  localhost;

        location / {
            root   html;
            index  index.html index.htm;
        }

        #error_page  404              /404.html;

        # redirect server error pages to the static page /50x.html
        #
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
}
```

103的nginx在html目录下的index.html文件

```html
<!DOCTYPE html>
<html>
<head>
<title>Welcome to nginx!</title>
<style>
html { color-scheme: light dark; }
body { width: 35em; margin: 0 auto;
font-family: Tahoma, Verdana, Arial, sans-serif; }
</style>
</head>
<body>
<h1>I am from 192.168.8.103</h1>
</body>
</html>
```

测试：

访问http://192.168.8.102/

![image-20220824140501399](https://i0.hdslb.com/bfs/album/3bc27ac96469708c2cd33362c45f53c8cc8329f1.png)

访问http://192.168.8.103/

![image-20220824140511723](https://i0.hdslb.com/bfs/album/847e3e7f919a7c51622554de72ece6d4f2af705f.png)

将101代理到102

101的nginx.conf

```bash
worker_processes  1; #允许进程数量，建议设置为cpu核心数或者auto自动检测，注意Windows服务器上虽然可以启动多个processes，但是实际只会用其中一个

events {
    #单个进程最大连接数（最大连接数=连接数*进程数）
    #根据硬件调整，和前面工作进程配合起来用，尽量大，但是别把cpu跑到100%就行。
    worker_connections  1024;
}


http {
    #文件扩展名与文件类型映射表(是conf目录下的一个文件)
    include       mime.types;
    #默认文件类型，如果mime.types预先定义的类型没匹配上，默认使用二进制流的方式传输
    default_type  application/octet-stream;

    #sendfile指令指定nginx是否调用sendfile 函数（zero copy 方式）来输出文件，对于普通应用，必须设为on。如果用来进行下载等应用磁盘IO重负载应用，可设置为off，以平衡磁盘与网络IO处理速度。
    sendfile        on;
    
     #长连接超时时间，单位是秒
    keepalive_timeout  65;

 #虚拟主机的配置
    server {
    #监听端口
        listen       80;
        #域名，可以有多个，用空格隔开
        server_name  test80.xzj520520.cn;

	#配置根目录以及默认页面
        location / {
            proxy_pass http://192.168.8.102;
            # root   /www/test80;
            # index  index.html index.htm;
        }

	#出错页面配置
        error_page   500 502 503 504  /50x.html;
        #/50x.html文件所在位置
        location = /50x.html {
            root   html;
        }
        
    }
}

```

测试，访问192.168.8.101

![image-20220824140622198](https://i0.hdslb.com/bfs/album/cf7cd82487140f336cc196885849d86f7c64a57b.png)

配置101的负载均衡（轮询模式）

![image-20220824140640967](https://i0.hdslb.com/bfs/album/5693aef31d3a7ea62affdecc85435a07f7dbfbc4.png)

```bash
...
http {

#定义一组服务器
upstream httpds{
    server 192.168.8.102:80;
    server 192.168.8.103:80;
}
...
 #虚拟主机的配置
    server {
    #监听端口
        listen       80;
        #域名，可以有多个，用空格隔开
        server_name  test80.xzj520520.cn;

	#配置根目录以及默认页面
        location / {
            proxy_pass http://httpds;
        }
        
    }
}
```

测试：

多次访问http://192.168.8.101/发现102和103被交替访问

![image-20220824140744772](https://i0.hdslb.com/bfs/album/2b97db7b7aacff421dbc7684fe8d77481d2ca614.png)

![image-20220824140751527](https://i0.hdslb.com/bfs/album/73c8d4dafe303213d5e90285e8a9ef9c757e6379.png)

## 5.负载均衡策略和调度算法

**负载均衡策略**

- weight：权重

- down : 当前server暂不参与负载均衡
- backup : 预留的备份服务器； 其它所有的非backup机器down或者忙的时候，请求backup机器。  
- max_fails : 请求失败次数限制
- fail_timeout : 经过max_fails后服务暂停时间
- max_conns : 限制最大的连接数 

**负载均衡调度算法**

- 轮询:默认算法按时间顺序逐一分配到不同的后端服务器;
- 加权轮询:Weight值越大，分配到访问几率越高;

**其他负载调度算法（不常用）**

- ip_hash
  根据客户端的ip地址转发同一台服务器，可以保持会话，但是很少用这种方式去保持会话，例如我们当前正在使用wifi访问，当切换成手机信号访问时，会话就不保持了。
- least_conn
  最少连接访问，优先访问连接最少的那一台服务器，这种方式也很少使用，因为连接少，可能是由于该服务器配置较低，刚开始赋予的权重较低。
- url_hash（需要第三方插件）
  根据用户访问的url定向转发请求，不同的url转发到不同的服务器进行处理（定向流量转发）。
- fair（需要第三方插件）
  根据后端服务器响应时间转发请求，这种方式也很少使用，因为容易造成流量倾斜，给某一台服务器压垮。

方式1: 轮询

RR（默认轮询）每个请求按时间顺序逐一分配到不同的后端服务器，如果后端服务器down掉能自动剔除。

```bash
http {

#定义一组服务器
upstream httpds{
    server 192.168.8.102 weight=10;
    server 192.168.8.103 weight=1;
    # server 192.168.8.102 weight=10 down; #down表示不参与负载均衡
    # server 192.168.8.102 weight=10 backup; #backup表示是备用服务器，没有服务器可用的时候使用
}

 #虚拟主机的配置
    server {
    #监听端口
        listen       80;
        #域名，可以有多个，用空格隔开
        server_name  test80.xzj520520.cn;

	#配置根目录以及默认页面
        location / {
            proxy_pass http://httpds;
            # root   /www/test80;
            # index  index.html index.htm;
        }
        
    }
    
}
```

测试：

多次访问http://192.168.8.101/发现102访问的次数多余103访问的次数。

方式2：权重

权重指定轮询几率，weight和访问比率成正比，用于后端服务器性能不均的情况。 例如

```bash
...
http {

#定义一组服务器
upstream httpds{
    server 192.168.8.102:80 weight=1;
    server 192.168.8.103:80 weight=9;  #那么10次一般只会有1次会访问到8081，而有9次会访问到8080
}
...
 #虚拟主机的配置
    server {
    #监听端口
        listen       80;
        #域名，可以有多个，用空格隔开
        server_name  test80.xzj520520.cn;

	#配置根目录以及默认页面
        location / {
            proxy_pass http://httpds;
        }
        
    }
}
```

方式3: ip_hash

ip_hash 会话粘连, 上面的2种方式都有一个问题，那就是下一个请求来的时候请求可能分发到另外一个服务器，当我们的程序不是无状态的时候（采用了session保存数据），这时候就有一个很大的很问题了，比如把登录信息保存到了session中，那么跳转到另外一台服务器的时候就需要重新登录了，所以很多时候我们需要一个客户只访问一个服务器，那么就需要用iphash了，iphash的每个请求按访问ip的hash结果分配，这样每个访客固定访问一个后端服务器，可以解决session的问题。 

```bash
...
http {

#定义一组服务器
upstream httpds{
 	ip_hash;
    server 192.168.8.102:80;
    server 192.168.8.103:80;
}
...
 #虚拟主机的配置
    server {
    #监听端口
        listen       80;
        #域名，可以有多个，用空格隔开
        server_name  test80.xzj520520.cn;

	#配置根目录以及默认页面
        location / {
            proxy_pass http://httpds;
        }
        
    }
}
```

**根据客户端的ip地址转发同一台服务器，可以保持会话，但是很少用这种方式去保持会话，例如我们当前正在使用wifi访问，当切换成手机信号访问时，会话就不保持了。**

方式4：fair

fair（需要第三方插件）按后端服务器 的响应时间来分配请求，响应时间短的优先分配。 

```bash
...
http {

#定义一组服务器
upstream httpds{
 	fail;
    server 192.168.8.102:80;
    server 192.168.8.103:80;
}
...
 #虚拟主机的配置
    server {
    #监听端口
        listen       80;
        #域名，可以有多个，用空格隔开
        server_name  test80.xzj520520.cn;

	#配置根目录以及默认页面
        location / {
            proxy_pass http://httpds;
        }
        
    }
}
```

**根据后端服务器响应时间转发请求，这种方式也很少使用，因为容易造成流量倾斜，给某一台服务器压垮。**

方式5：least_conn

描述: 将请求分配到连接数最少的服务上。 

```bash
...
http {

#定义一组服务器
upstream httpds{
 	least_conn;
    server 192.168.8.102:80;
    server 192.168.8.103:80;
}
...
 #虚拟主机的配置
    server {
    #监听端口
        listen       80;
        #域名，可以有多个，用空格隔开
        server_name  test80.xzj520520.cn;

	#配置根目录以及默认页面
        location / {
            proxy_pass http://httpds;
        }
        
    }
}
```

**最少连接访问，优先访问连接最少的那一台服务器，这种方式也很少使用，因为连接少，可能是由于该服务器配置较低，刚开始赋予的权重较低。**

可以根据实际情况选择使用哪种策略模式,不过fair和url_hash需要安装第三方模块才能使用. 

## 05 【动静分离和URLRewrite】

## 1.动静分离介绍

为了提高网站的响应速度，减轻程序服务器（Tomcat，Jboss等）的负载，对于静态资源，如图片、js、css等文件，可以在反向代理服务器中进行缓存，这样浏览器在请求一个静态资源时，代理服务器就可以直接处理，而不用将请求转发给后端服务器。对于用户请求的动态文件，如servlet、jsp，则转发给Tomcat，Jboss服务器处理，这就是动静分离。即动态文件与静态文件的分离。

![image-20220824142500093](https://i0.hdslb.com/bfs/album/167fbf56a59aca4f13e68def389887eeb0bd8e6e.png)

动静分离可通过location对请求url进行匹配，将网站静态资源（HTML，JavaScript，CSS，img等文件）与后台应用分开部署，提高用户访问静态代码的速度，降低对后台应用访问。通常将静态资源放到nginx中，动态资源转发到tomcat服务器中。

## 2.Nginx动静分离配置

动静分离是让动态网站里的动态网页根据一定规则把不变的资源和经常变的资源区分开来，动静资源做好了拆分以后，我们就可以根据静态资源的特点将其做缓存操作，这就是网站静态化处理的核心思路; 

在102这台服务器中的nginx的html目录中放入这样的资源

![image-20220824153311942](https://i0.hdslb.com/bfs/album/8b18138dc7651795656fb9678a4c39b76de3bf7e.png)

其中路径引入的方式需要以根路径的方式引入

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="/css/index.css" />
    <script src="/js/index.js"></script>
  </head>
  <body>
    <img src="/img/ds.jpg" />
    <p>我是ds</p>
  </body>
</html>
```

访问：http://192.168.8.102是可以正常看到页面的

![image-20220824153541909](https://i0.hdslb.com/bfs/album/ceed5dd68b85950afa563ee33e270700994510aa.png)

我们的101服务器是使用了nginx的，每次访问这些资源都被代理了一次，但其实这些资源是不需要被改变的，这样很浪费性能，所以我们把这些静态资源放在nginx服务器上。

先删除102服务器的静态资源，然后把这些静态资源文件夹移到101的nginx的html目录中

修改101服务器的`nginx.conf`配置文件

````bash
   server {
        listen 80;
        server_name  localhost;
        location / {
            proxy_pass http://192.168.8.101:8080;
        }
        # 所有静态请求都由nginx处理，存放目录为nginx中的html
  					      location ~ .(gif|jpg|jpeg|png|bmp|swf|css|js)$ {
            root html;
        }
    }
````

`location ~ .(gif|jpg|jpeg|png|bmp|swf|css|js)${root html;} `这行的意思是匹配到这些后缀名的文件，就把资源引入的地址指向html目录中，将html文件夹作为这些资源引入的根目录。

- 例1：`/css/index.css`的这个`/`就是相对于html目录中来说的。
- 例2：当我们后缀为gif的时候，Nginx默认会从html中获取到当前请求的动态图文件返回，当然这里的静态文件跟Nginx是同一台服务器，我们也可以在另外一台服务器，然后通过反向代理和负载均衡配置过去就好了，只要搞清楚了最基本的流程，很多配置就很简单了

## 3.location匹配顺序

**常见的Nginx正则表达式**

```bash
^ ：匹配输入字符串的起始位置
$ ：匹配输入字符串的结束位置
* ：匹配前面的字符零次或多次。如“ol*”能匹配“o”及“ol”、“oll”
+ ：匹配前面的字符一次或多次。如“ol+”能匹配“ol”及“oll”、“olll”，但不能匹配“o”
? ：匹配前面的字符零次或一次，例如“do(es)?”能匹配“do”或者“does”，”?”等效于”{0,1}”
. ：匹配除“\n”之外的任何单个字符，若要匹配包括“\n”在内的任意字符，请使用诸如“[.\n]”之类的模式
\ ：将后面接着的字符标记为一个特殊字符或一个原义字符或一个向后引用。如“\n”匹配一个换行符，而“\$”则匹配“$”
\d ：匹配纯数字
{n} ：重复 n 次
{n,} ：重复 n 次或更多次
{n,m} ：重复 n 到 m 次
[] ：定义匹配的字符范围
[c] ：匹配单个字符 c
[a-z] ：匹配 a-z 小写字母的任意一个
[a-zA-Z0-9] ：匹配所有大小写字母或数字
() ：表达式的开始和结束位置
| ：或运算符  //例(js|img|css)
```

**location正则：**

```js
//location大致可以分为三类
精准匹配：location = /{}
一般匹配：location /{}
正则匹配：location ~/{}
//location常用的匹配规则：
= ：进行普通字符精确匹配，也就是完全匹配。
^~ ：表示前缀字符串匹配（不是正则匹配，需要使用字符串），如果匹配成功，则不再匹配其它 location。
~ ：区分大小写的匹配（需要使用正则表达式）。
~* ：不区分大小写的匹配（需要使用正则表达式）。
!~ ：区分大小写的匹配取非（需要使用正则表达式）。
!~* ：不区分大小写的匹配取非（需要使用正则表达式）。
//优先级
首先精确匹配 =
其次前缀匹配 ^~
其次是按文件中顺序的正则匹配 ~或~*
然后匹配不带任何修饰的前缀匹配
最后是交给 / 通用匹配
```

**注意：**

- 精确匹配： `=` ， 后面的表达式中写的是纯字符串
- 字符串匹配： `^~` 和 `无符号匹配` ， 后面的表达式中写的是纯字符串
- 正则匹配： `~` 和 `~*` 和 `!~` 和 `!~*` ， 后面的表达式中写的是正则表达式

**location的说明**

```bash
 (1）location = / {}
=为精确匹配 / ，主机名后面不能带任何字符串，比如访问 / 和 /data，则 / 匹配，/data 不匹配
再比如 location = /abc，则只匹配/abc ，/abc/或 /abcd不匹配。若 location  /abc，则即匹配/abc 、/abcd/ 同时也匹配 /abc/。

（2）location / {}
因为所有的地址都以 / 开头，所以这条规则将匹配到所有请求 比如访问 / 和 /data, 则 / 匹配， /data 也匹配，
但若后面是正则表达式会和最长字符串优先匹配（最长匹配）

（3）location /documents/ {}
匹配任何以 /documents/ 开头的地址，匹配符合以后，还要继续往下搜索其它 location
只有其它 location后面的正则表达式没有匹配到时，才会采用这一条

（4）location /documents/abc {}
匹配任何以 /documents/abc 开头的地址，匹配符合以后，还要继续往下搜索其它 location
只有其它 location后面的正则表达式没有匹配到时，才会采用这一条

（5）location ^~ /images/ {}
匹配任何以 /images/ 开头的地址，匹配符合以后，停止往下搜索正则，采用这一条

（6）location ~* \.(gif|jpg|jpeg)$ {}
匹配所有以 gif、jpg或jpeg 结尾的请求
然而，所有请求 /images/ 下的图片会被 location ^~ /images/ 处理，因为 ^~ 的优先级更高，所以到达不了这一条正则

（7）location /images/abc {}
最长字符匹配到 /images/abc，优先级最低，继续往下搜索其它 location，会发现 ^~ 和 ~ 存在

（8）location ~ /images/abc {}
匹配以/images/abc 开头的，优先级次之，只有去掉 location ^~ /images/ 才会采用这一条

（9）location /images/abc/1.html {}
匹配/images/abc/1.html 文件，如果和正则 ~ /images/abc/1.html 相比，正则优先级更高

优先级总结：
(location =) > (location 完整路径) > (location ^~ 路径) > (location ~,~* 正则顺序) > (location 部分起始路径) > (location /)
```

 **location匹配顺序** 

- 多个正则location直接按书写顺序匹配，成功后就不会继续往后面匹配 
- 普通（非正则）location会一直往下，直到找到匹配度最高的（最大前缀匹配） 
- 当普通location与正则location同时存在，如果正则匹配成功,则不会再执行普通匹配 
- 所有类型location存在时，“=”匹配 > “^~”匹配 > 正则匹配 > 普通（最大前缀匹配）  

实际网站使用中，至少有三个匹配规则定义:

- 第一个必选规则

直接匹配网站根，通过域名访问网站首页比较频繁，使用这个会加速处理，比如说官网。这里是直接转发给后端应用服务器了，也可以是一个静态首页

```js
location = / {
    proxy_pass http://127.0.0.1:8080/; 
}
```

- 第二个必选规则

处理静态文件请求，这是nginx作为http服务器的强项,有两种配置模式，目录匹配或后缀匹配,任选其一或搭配使用

```js
location ^~ /static/ {
    root /www/www/static;
}

location ~* \.(html|gif|jpg|jpeg|png|css|js|ico)$ {
    root /www/www/;
}
```

- 第三个规则

通用规则，用来转发动态请求到后端应用服务器

```js
location /api/ {
    proxy_pass http://127.0.0.1:3000/
}
```

## 4.URLRewrite  

优点：掩藏真实的url以及url中可能暴露的参数，以及隐藏web使用的编程语言，提高安全性便于搜索引擎收录

缺点：降低效率，影响性能。如果项目是内网使用，比如公司内部软件，则没有必要配置。

```tex
rewrite是实现URL重写的关键指令，根据regex(正则表达式)部分内容，重定向到repacement，结尾是flag标记。

rewrite 	<regex> 	<replacement> 	[flag];
关键字 		正则 				替代内容 			flag标记

```

> 关键字：其中关键字error_log不能改变
>
> 正则：perl兼容正则表达式语句进行规则匹配 
>
> 替代内容：将正则匹配的内容替换成replacement 
>
> flag标记：rewrite支持的flag标记 

> rewrite参数的标签段位置： server,location,if 

> flag标记说明： 
>
> last			#本条规则匹配完成后，继续向下匹配新的location URI规则 
>
> break 		#本条规则匹配完成即终止，不再匹配后面的任何规则 
>
> redirect 		#返回302临时重定向，浏览器地址会显示跳转后的URL地址   (防爬虫)
>
> permanent 	#返回301永久重定向，浏览器地址栏会显示跳转后的URL地址  

配置nginx.conf

![image-20220824161112740](https://i0.hdslb.com/bfs/album/9128e33ba1717612604f3017018f9bbb352808b5.png)

这个意思是如果路径是`/index.html?testParms=3`就重写成`/test.html`

![image-20220824161242718](https://i0.hdslb.com/bfs/album/8b69321e6e75e5492045ba8c4e2bf4f1f50b5c19.png)

也可以用正则表达式的形式：

```bash
rewrite ^/[0-9]+.html$ /index.html?testParam=$1 break; 
//$1表示第一个匹配的字符串 
```

这是访问`/index.html?testParam=2`

![image-20220824161403358](https://i0.hdslb.com/bfs/album/8818cd614c9b4158998d2868391b2aa3cc73e631.png)

## 5.负载均衡+URLRewrite

![image-20220824161655068](https://i0.hdslb.com/bfs/album/ab02a910c8c53544dd664c28c4fbf5ba5d26c460.png)



上面的操作都是在101服务器上使用反向代理到102服务器展示出来的，如果直接访问102服务器也能访问到，这种事是不应该的，所以要配置一下。

**以下命令都是在102服务器操作**

1. 开启102的防火墙

```
systemctl start firewalld
```

2. 重载规则

```tex
firewall-cmd --reload
```

3. 添加指定端口和ip访问(添加之后记得重新启动防火墙)

```
firewall-cmd --permanent --add-rich-rule="rule family="ipv4" source address="192.168.8.101" port protocol="tcp" port="8080" accept"
```

4. 移除规则

```tex
firewall-cmd --permanent --remove-rich-rule="rule family="ipv4" source address="192.168.8.101" port protocol="tcp" port="8080" accept"
```

5. 查看已配置规则  

```
firewall-cmd --list-all
```

6. 重启防火墙

```
firewall-cmd --reload
```

这个时候只有一台服务器102，如果102服务器崩了，那么将无法访问，所以要配置负载均衡。

这时也要用防火墙配置103服务器的规则

```bash
...
http {

#定义一组服务器
upstream httpds{
    server 192.168.8.101:8080 weight=8 down;
    server 192.168.8.103:8080 weight=2 backup;
}
...
 #虚拟主机的配置
    server {
    #监听端口
        listen       80;
        #域名，可以有多个，用空格隔开
        server_name  localhost;

	#配置根目录以及默认页面
        location / {
            proxy_pass http://httpds;
        }
        
    }
}
```

测试：

现在直接访问http://192.168.8.102/就访问不了了

访问http://192.168.8.101/可以正常访问

访问http://192.168.8.103/可以正常访问

## 防盗链

## 1.什么是盗链

盗链是指服务提供商自己不提供服务的内容，通过技术手段绕过其它有利益的最终用户界面（如广告），直接在自己的网站上向最终用户提供其它服务提供商的服务内容，骗取最终用户的浏览和点击率。受益者不提供资源或提供很少的资源，而真正的服务提供商却得不到任何的收益。

## 2.nginx防盗链配置

## 2.1 基本使用

为了模拟盗链，在这里让101为服务站点，102为网关服务器，103访问102进行盗链。
`102的nginx.conf`

```bash
http {
    server {
        listen       80;
        server_name  localhost;


        location / {
            proxy_pass http://192.168.8.101:8080;
        }
        
        
        location ^~/images/ {
            root   /www/resources;
        }
       
    }
}
```

`103的nginx.cfg`

```js
http {

    server {
        listen       80;
        server_name  localhost;

        location / {
            proxy_pass http://192.168.8.102;
        }

    }
}
```

访问http://192.168.8.103/：

![image-20220827191924914](https://i0.hdslb.com/bfs/album/a7bca78712af57a76baf4ece0b81e8d6bd6b00c2.png)

如果不想被盗链，可以对网关服务器102做如下配置：

```bash
http {

    server {
        listen       80;
        server_name  localhost;


        location / {
            proxy_pass http://192.168.8.101:8080;
        }
        
        
        
        location ^~/images/ {
            valid_referers 192.168.8.102;  #valid_referers 指令，配置是否允许 referer 头部以及允许哪些 referer 访问。192.168.8.102不是ip而是域名（去掉http:// 前缀）
            if ($invalid_referer) {  # 注意这里if后要加空格
                return 403; ## 返回错误码
            }
            
            root   /www/resources;
        }
        

    }
}
```

![image-20220827192026082](https://i0.hdslb.com/bfs/album/f4ad69b64b372e33d62ed6197f33dc207fb38611.png)

![image-20220827192036001](https://i0.hdslb.com/bfs/album/ccfbe8d80ff645d1a419bfc8093665d66be22fc3.png)

## 2.2 valid_referers解释

可以同时携带多个参数，表示多个 referer 头部都生效。

**参数值**

- none：允许没有 referer 信息的请求访问，即直接通过url访问。
- blocked：请求头Referer字段不为空（即存在Referer），但是值可以为空（值被代理或者防火墙删除了），并且允许refer不以“http://”或“https://”开头，通俗点说就是允许“http://”或"https//"以外的请求。
- server_names：若 referer 中站点域名与 server_name 中本机域名某个匹配，则允许该请求访问
- 其他字符串类型：检测referer与字符串是否匹配，如果匹配则允许访问，可以采用通配符*
- 正则表达式：若 referer 的值匹配上了正则，就允许访问

**invalid_referer 变量**

- 允许访问时变量值为空
- 不允许访问时变量值为 1

```bash
server {
    server_name referer.test.com;
    listen 80;

    error_log logs/myerror.log debug;
    root html;
    location / {
        valid_referers none server_names
                       *.test.com www.test.org.cn/nginx/;
        if ($invalid_referer) {
                return 403; # 返回错误码
        }
        return 200 'valid\n';
    }
}

# none：表示没有 referer 的可以访问
# server_names：表示本机 server_name 也就是 referer.test.com 可以访问
# *.test.com：匹配上了正则的可以访问
# www.test.org.cn/nginx/：该页面发起的请求可以访问

```

## 2.3 配置错误提示页面

**返回错误页面**

在102nginx的html目录中添加403.html

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Error</title>
<style>
html { color-scheme: light dark; }
body { width: 35em; margin: 0 auto;
font-family: Tahoma, Verdana, Arial, sans-serif; }
</style>
</head>
<body>
<h1>An error occurred.</h1>
<p>非法请求.</p>

</body>
</html>
```

`修改nginx.conf`

```bash
http {
    server {
        listen       80;
        server_name  localhost;

        location / {
            proxy_pass http://192.168.8.101:8080;
        }
        
        
        location ^~/images/ {
            valid_referers 192.168.8.102 baidu.com;
            if ($invalid_referer) {
                return 403; # 返回错误码
            }
            
            root   /www/resources;
        }
        

        error_page   403  /403.html;
        location = /403.html {
            root   html;
        }
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }

        
    }

}
```

访问http://192.168.8.103/images/bg.jpg

![image-20220827192454353](https://i0.hdslb.com/bfs/album/3200ee7c34991b018c68c4b245fb391a2b25f42b.png)

## 2.4 返回出错图片

修改网关服务器102

![image-20220827192541169](https://i0.hdslb.com/bfs/album/902857ec2103da71ee574ca2b42ce992fdf8850b.png)

![image-20220827192619218](https://i0.hdslb.com/bfs/album/3b36a4c3af84a7ef5f65a07e994cbde251751eb9.png)

访问192.168.8.103:

![image-20220827192629131](https://i0.hdslb.com/bfs/album/c1c2b5f204687d2f80470aba8ec9385d5afc0815.png)