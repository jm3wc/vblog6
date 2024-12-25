# 安装Git图形界面

## Windows 平台上安装

在 Windows 平台上安装 Git 同样轻松，有个叫做 msysGit 的项目提供了安装包，可以到 GitHub 的页面上下载 exe 安装文件并运行：

安装包下载地址：https://gitforwindows.org/

官网慢，可以用国内的镜像：https://npm.taobao.org/mirrors/git-for-windows/。

完成安装之后，就可以使用命令行的 git 工具（已经自带了 ssh 客户端）了，另外还有一个图形界面的 Git 项目管理工具。

在开始菜单里找到"Git"->"Git Bash"，会弹出 Git 命令窗口，你可以在该窗口进行 Git 操作。

 

 

 

## Mac 平台上安装

在 Mac 平台上安装 Git 最容易的当属使用图形化的 Git 安装工具，下载地址为：

http://sourceforge.net/projects/git-osx-installer/

# Git基本命令

## Git 基本操作

> Git 的工作就是创建和保存你项目的快照及与之后的快照进行对比。 本章将对有关创建与提交你的项目快照的命令作介绍。
>
> Git 常用的是以下 6 个命令：git clone、git push、git add 、git commit、git checkout、git pull，后面我们会详细介绍。

![Image text](https://topmost.gitee.io/book/mdphoto/base/git/git1.jpg)

说明：

- workspace：工作区
- staging area：暂存区/缓存区
- local repository：或本地仓库
- remote repository：远程仓库

一个简单的操作步骤：

```
$ git init    
$ git add .    
$ git commit
```

- git init - 初始化仓库。
- git add . - 添加文件到暂存区。
- git commit - 将暂存区内容添加到仓库中。

```
git init - 初始化仓库
git add . - 添加文件到暂存区。
git commit -m '项目名称' （提交到本地仓库）
git remote add origin 码云项目地址 （连接远程仓库）
git push -u origin master 把本地仓库推送到远程仓库
```

## 创建仓库命令

|   命令    |                  说明                  |
| :-------: | :------------------------------------: |
| git init  |               初始化仓库               |
| git clone | 拷贝一份远程仓库，也就是下载一个项目。 |

## 提交与修改

> Git 的工作就是创建和保存你的项目的快照及与之后的快照进行对比。

下表列出了有关创建与提交你的项目的快照的命令：

|    命令    |                   说明                   |
| :--------: | :--------------------------------------: |
|  git add   |              添加文件到仓库              |
| git status |  查看仓库当前的状态，显示有变更的文件。  |
|  git diff  | 比较文件的不同，即暂存区和工作区的差异。 |
| git commit |          提交暂存区到本地仓库。          |
| git reset  |                回退版本。                |
|   git rm   |             删除工作区文件。             |
|   git mv   |         移动或重命名工作区文件。         |

## 提交日志

|   命令    |                 说明                 |
| :-------: | :----------------------------------: |
|  git log  |           查看历史提交记录           |
| git blame | 以列表形式查看指定文件的历史修改记录 |

## 远程操作

|    命令    |        说明        |
| :--------: | :----------------: |
| git remote |    远程仓库操作    |
| git fetch  |  从远程获取代码库  |
|  git pull  | 下载远程代码并合并 |
|  git push  | 上传远程代码并合并 |

# 常用命令

![Image text](https://topmost.gitee.io/book/mdphoto/base/git/git.png)

### 工作流程

![git](https://www.quickask.net/dist/assets/images/php/git/git.jpg)

```
Working Directory：本地工作目录（工作区）

Stage(Index)：暂存区

Repository：仓库，仓库又分本地仓库和远程仓库

Remote：远程仓库
```

### 全局身份设置

```
git config --global user.name "Your Name"
git config --global user.email "Your Email"
```

### 设置换行符选项

```
git config --global core.autocrlf false
git config --global core.safecrlf false
```

### 查看全局配置

```
git config --global --list

系统全局git配置文件：.gitconfig
一般该文件会放到计算机的家目录，MAC为例的话：/用户/用户名/.gitconfig
```

# 本地操作

### 克隆已创建的仓库

```
git clone http://www.demo.com/repo.git
```

### 克隆已创建的仓库(带账号密码)

```
git clone http://邮箱(或用户名):密码@仓库

注意： 邮箱中的 @ 要使用 %40 代替，仓库 URL 不需要 http://

git clone http://邮箱地址%40qq.com:密码@gitee.com/xxxxx/demo.git(这个是仓库地址)
```

### 创建一个新的本地仓库

```
git init
```

### 显示已修改的文件

```
git status
```

### 显示与上次提交版本文件的不同

```
git diff
```

### 当前所有修改添加到暂存区

```
git add
```

### 提交本地的所有修改

```
git commit -a

添加备注方式提交
git commit -m '备注写这里'
```

### 从当前目录的所有文件中查找文本内容

```
git grep "Hello"
```

### 在某一版本中搜索文本

```
git grep "Hello" v2.5
```

# 提交历史

### 从最新提交开始，显示所有的提交记录（显示hash， 作者信息，提交的标题和时间）

```
git log
```

### 显示所有提交（仅显示提交的hash和message）

```
git log --oneline
```

### 显示某个用户的所有提交

```
git log --author="username"
```

### 显示某个文件的所有修改

```
git log -p <file>
```

### 谁，在什么时间，修改了文件的什么内容

```
git blame <file>
```

# 版本回滚

### HEAD说明

```
HEAD 表示当前版本

HEAD^ 上一个版本

HEAD^^ 上上一个版本

HEAD^^^ 上上上一个版本

以此类推...


可以使用 ～数字表示---------------------------------


HEAD~0 表示当前版本

HEAD~1 上一个版本

HEAD~2 上上一个版本

HEAD~3 上上上一个版本

以此类推...
```

### reset(回退提交commit)

```
--mixed 为默认参数，回退提交，只保留工作区
--soft参数，回退提交，保留暂存区(add)和工作区，让仓库恢复到执行(git commit)之前的状态
--hard参数，回退提交，全部区域回退，一点不保留(版本库/暂存区/工作区)
```

> mixed 为默认参数，回退提交，只保留工作区

```
回退 所有文件 到上一个版本
git reset HEAD^  

回退 指定文件 到上一个版本
git reset HEAD^ demo.html

回退到 指定版本
git reset 提交id<commit>
```

> soft参数，回退提交，保留暂存区(add)和工作区，让仓库恢复到执行(git commit)之前的状态

```
git reset --soft HEAD^

执行完查看一下状态,可以看一下保留状态是否在暂存区
git status
```

> hard参数，回退提交，全部区域回退，一点不保留(版本库/暂存区/工作区)

```
git reset --hard HEAD^

注意：谨慎使用 –-hard 参数，它会删除回退点之前的所有信息
```

### restore(回退暂存区add)

> 暂存区(add) 回退 工作区

```
回退 所有文件 从 暂存区到工作区
git restore --staged .

回退 指定文件 从 暂存区到工作区
git restore --staged index.html
```

> 将工作区的文件修改撤销(内容撤销) restore/checkout 都可以

```
撤销 所有文件 的内容修改
git restore .

撤销 指定文件 的内容修改
git restore index.html

-------------------------

撤销 所有文件 的内容修改
git checkout .

撤销 指定文件 的内容修改
git checkout index.html
```

# 分支与标签

### 列出所有的分支

```
git branch
```

### 基于当前分支创建新分支

```
git branch <new-branch>
```

### 切换分支

```
git checkout <branch>
```

### 基于远程分支创建新的可追溯的分支

```
git branch --track <new-branch> <remote-branch>
```

### 删除本地分支

```
git branch -d <branch>
```

### 给当前版本打标签

```
git tag <tag-name>
```

### 删除标签

```
git tag -d <tag-name>
```

# rebase/merge/分支合并

### 原文转载

[https://www.jianshu.com/p/f23f72251abcopen in new window](https://www.jianshu.com/p/f23f72251abc)

### git rebase 和 git merge 的区别

> 共同点

```
两条命令主要的用途：合并分支
```

> 区别点

```
merge
特点：自动创建一个新的commit
如果合并的时候遇到冲突，仅需要修改后重新commit
优点：记录了真实的commit情况，包括每个分支的详情
缺点：每次merge会自动产生一个merge commit

rebase
特点：会合并之前的commit历史
优点：得到更简洁的项目历史，去掉了merge commit
缺点：如果合并出现代码问题不容易定位，因为re-write了history

合并时如果出现冲突需要按照如下步骤解决
1、修改冲突部分
2、git add
3、git rebase --continue
4、如果第三步无效可以执行 git rebase --skip
```

### 使用习惯

```
如果你想要一个干净的，没有merge commit的线性历史树，那么你应该选择git rebase
如果你想保留完整的历史记录，并且想要避免重写commit history的风险，你应该选择使用git merge
```

### 正常的时间线

![normal](https://www.quickask.net/dist/assets/images/php/git/git_normal.png)

### merge操作

```
git checkout feature    切换分支
git merge master        合并分支
```

![merge](https://www.quickask.net/dist/assets/images/php/git/git_merge.png)

### rebase操作

```
git checkout feature
git rebase master
```

 

![rebase](https://www.quickask.net/dist/assets/images/php/git/git_rebase.png)

# 更新与发布

### 远程仓库

```
查看远程版本库信息
git remote -v

添加远程版本库
git remote add <remote> <url>

删除远程版本库
git remote rm <remote>
```

### 远程操作需要重启安全认证

```
git config --global http.sslVerify true
```

### 更新操作

```
注意：fatal: refusing to merge unrelated histories

上述的错误是说，拉取/推送的仓库，与本地仓库没有任何关系，我们可以添加参数，强制拉取/推送
git push origin master --allow-unrelated-histories
```

> fetch 下载操作(不合并本地仓库)

```
从远程主机的master分支拉取最新内容下来，但不合并到HEAD中(下载)
git fetch origin master

将拉取下来的最新内容合并到当前所在的分支中
git merge FETCH_HEAD


注意：fatal: refusing to merge unrelated histories 报错就强制拉取
git merge FETCH_HEAD --allow-unrelated-histories
```

> pull 拉取操作(合并本地仓库)

```
普通拉取
git pull origin master

强制拉取
git pull origin master --allow-unrelated-histories
```

### 推送操作

```
普通推送
git push origin master

强制推送
git push origin master --allow-unrelated-histories
```

### 发布标签

```
git push --tags
```

### git stash

```
情景1：我在本地修改好后，发现远程分支已经被改动了，此时我本地也被改动了就造成了冲突，无法 push 或者 pull
此时，就可以用 git stash 来处理

// 把本地的改动暂存起来
git stash 

// 拉取远程分支（此时本地分支会回滚到上次commit的情况，你的改动都存在stash中）
git pull  

// 将stash中改动重新加回本地分支，就可以继续修改了，当然，如果改好了就是add,commit,push
git stash pop
情景2：例如忘记切换，将代码写错了分支，直接在 master 分支上做改动，这里假设我的分支是 test 分支

// 把本地当前改动暂存起来，此时master分支就恢复到了上次拉取时的状态
git stash

// 切换到需要改动的分支
git checkout test

// 将改动pop到自己当前的分支
git stash pop

顾名思义，stash 就是一个栈，平时我们把需要暂存的文件存到栈中，把代码恢复到上次拉取的状态以进行操作。
```

# gitignore忽略文件

### Git的忽略文件的语法规则

> **.gitignore**

```
# 这是注释行，将被忽略
*.a       # 忽略所有以.a为扩展名的文件    
!lib.a    # 但是名为lib.a的文件或目录不要忽略，即使前面设置了对*.a的忽略
/TODO     # 只忽略此目录下的TODO文件，子目录中的TODO文件不忽略
build/    # 忽略所有build目录下的文件，但如果是名为build的文件则不忽略
doc/*.txt # 忽略文件如doc/notes.txt，但是文件如doc/server/arch.txt不忽略
```

### 设置好之后，有个关键的步骤一定要清楚缓存提交生效！！！

```
git rm -r --cached .
git add .
git commit -m 'update .gitignore'
```

### Git通过命令忽略指定文件

```
忽略指定文件
git update-index --assume-unchanged ./test.txt

取消忽略指定文件
git update-index --no-assume-unchanged ./test.txt
```

# Git配置Hook钩子自动更新

### 准备工作

```
1、在服务器上提前设置好公钥，步骤请去gitee官网查看
2、在服务器的web目录下先提前克隆仓库代码下来
3、并设置权限和用户组
    sudo chmod -R 777 /home/wwwroot/demo
    sudo chown -R www:www /home/wwwroot/demo
    
4、经常有人会忽略.git目录也是需要设置权限和所有组的
    cd demo
    sudo chmod -R 777 .git/
    sudo chown -R www:www .git/
```

### 钩子文件

> 在web站点根目录,新建文件夹`/hook/deploy.php`

```
<?php

/**
 * 自动更新钩子
 **/

//需要修改为自己服务器上项目的路径的
$local = '/home/wwwroot/demo.com';

//webhooks中设置的密码
$password = 'demo';

//获取请求参数
$request = file_get_contents('php://input');

if(empty($request)) 
{
    die('request is empty');
}

//验证密码是否正确
$data = json_decode($request, true);

if($data['password'] != $password) 
{
    die('password is error');
}

//自己git仓库地址，加上用户名(可以用空间地址,因为用户名一般是邮箱,但是邮箱@符号会被解析)密码防止没有权限
//$remote = 'https://用户名:密码@gitee.com/xxxxxxx/xxxx.git';
$remote = 'https://用户名:密码@gitee.com/xxxxxxx/demo.git';

exec("cd {$local} && git pull {$remote} 2>&1; chmod -R 777 {$local}; chown -R www:www {$local};", $output);

if(!empty($output) && is_array($output))
{
    $msg = "error: Your local changes to the following files would be overwritten by merge";

    $merge = stripos($output[2], $msg);

    if($merge !== FALSE)
    {
        shell_exec("cd {$local} && git reset --hard;");
        
        exec("cd {$local} && git pull {$remote} 2>&1; chmod -R 777 {$local}; chown -R www:www {$local};", $result);

        echo $output[2];
    }else
    {
        echo $output[2];
    }
}

/*
 * 以下代码可删除
 * pull遇到错误 error: Your local changes to the following files would be overwritten by merge:
 * 执行：git reset --hard 即可
 * exec 函数要开启  一般默认是禁用的  需要修改 php.ini disable_functions 保存 成功 php-fpm
 * lnmp 重启fpm  /etc/init.d/php-fpm restart
 */
```

### 码云部署配置

![ajax3](https://www.quickask.net/dist/assets/images/php/git/hook.png)

# git/pull/push免输入密码设置

**1、先cd到根目录，执行git config --global credential.helper store命令**

```
git config --global credential.helper store
```

**2、执行之后会在.gitconfig文件中多加红色字体项**

```
[user]
        name = xxx
        email = xxxx@xxxx.com
[credential]
        helper = store
```

**3、之后cd到项目目录，执行git pull命令，会提示输入账号密码。输完这一次以后就不再需要，并且会在根目录生成一个.git-credentials文件**

```
git pull

Username for 'https://git.oschina.net': xxxx@xxxx.com
Password for 'https://xxxx@xxxx.com@git.oschina.net':
cat .git-credentials

https://Username:Password@git.oschina.net
```

**4、之后pull/push代码都不再需要输入账号密码了~**

# Git-Flow分支管理

### 转载支持原创

- [https://www.jianshu.com/p/36292d36e41dopen in new window](https://www.jianshu.com/p/36292d36e41d)
- [https://timegoesby.top/Git-Flow/open in new window](https://timegoesby.top/Git-Flow/)
- [https://juejin.cn/post/6981033629837164581#heading-12open in new window](https://juejin.cn/post/6981033629837164581#heading-12)

![flow](https://www.quickask.net/dist/assets/images/php/git/flow.png)

### 常用分支

#### Production分支

```
也就是我们经常使用的Master分支，这个分支是生产环境的代码。
这个分支只能从其他分支合并，不能在这个分支直接修改。

Master
```

#### Develop分支

```
这个分支是我们是我们的主开发分支，主要合并其他分支，比如Feature分支
Develop -> Master
```

#### Feature分支

```
这个分支主要是用来开发一个新的功能，一旦开发完成，我们将会合并回Develop分支
Feature -> Develop -> Master
```

#### Release分支

```
当你需要发布一个新Release的时候，我们基于Develop分支创建一个Release分支，
完成Release后，会合并到Master和Develop分支

Develop == Release
Release -> Master
Release -> Develop
```

#### Hotfix分支

```
当我们在Production发现新的Bug时候，我们需要创建一个Hotfix, 完成Hotfix后，我们合并回Master和Develop分支
所以Hotfix的改动会进入下一个Release

Hotfix -> Master
Hotfix -> Develop
```

### 如何使用这些分支

#### Master/Devlop分支

```
所有在Master分支上的Commit应该打上Tag，一般情况下Master不存在Commit，Devlop分支基于Master分支创建
```

![flow](https://www.quickask.net/dist/assets/images/php/git/devlop.png)

#### Feature分支

```
Feature分支做完后，必须合并回Develop分支, 合并完分支后一般会删点这个Feature分支，毕竟保留下来意义也不大
```

![flow](https://www.quickask.net/dist/assets/images/php/git/feature.png)

#### Release分支

```
Release分支基于Develop分支创建，创建Release分支之后，我们可以在这个Release分支上测试，修改Bug等。
发布Release分支时，合并Release到Master和Develop分支上
同时在Master分支上打个Tag记住Release版本号，然后就可以删除Release分支了
```

![flow](https://www.quickask.net/dist/assets/images/php/git/release.png)

#### Hotfix分支

```
hotfix分支基于Master分支创建，开发完后需要合并回Master和Develop分支，同时在Master上打一个tag
```

![flow](https://www.quickask.net/dist/assets/images/php/git/hotfix.png)

### 安装git-flow

```
Windows (Cygwin): 安装 git-flow, 你需要 wget 和 util-linux
wget -q -O - --no-check-certificate https://github.com/nvie/gitflow/raw/develop/contrib/gitflow-installer.sh | bash

Linux
apt-get install git-flow

mac Homebrew
brew install git-flow-avh
```

### 初始化

```
进入项目文件夹(.git所在到文件夹)下，输入如下命令
git flow init

接下来设置每个分支的名字，一般不需要更改，按默认的全程回车就好

创建完之后可以查看一下当前的分支
git branch
```

### 开发新功能(feature分支)

需求：新建一个 demo.html 并添加内容

```
git flow feature start 分支名
git flow feature finish 分支名

在feature下面创建demo分支 做新功能
git flow feature start demo

查看状态，看一下是否有切换分支
git status

然后新建demo.html文件,添加并提交
git add .
git commit -m "create demo.html"


完成feature下面的demo分支 完成新功能
git flow feature finish demo

这个命令会将该feature下的demo分支合并到develop，并自动删除demo分支
```

### 发布(release分支)

需求：新建一个 release.html 并添加内容

```
git flow release start 版本号
git flow release finish 版本号

当在某个阶段，我们的feature都已经完善，并且通过了测试，我们可以将该develop分支进行发布（release）
git flow release start 1.0

查看状态，看一下是否有切换分支
git status

然后新建release.html文件,添加并提交
git add .
git commit -m "create release.html"


发布新版本
git flow release finish 1.0

该命令会触发如下几个操作
    Git-Flow从远程仓库fetch数据以确保本地的数据是最新的
    内容被合并到 master 和 develop 
    发布分支被删除，回到develop
```

### 更新远程分支

```
git push origin master
git push origin develop
git push --tags
```

### 修复bug(Hotfix分支)

git flow基于master分支，用于紧急修复，修改完成后合并到master，develop分支

需求：新建一个 bug.html 并添加内容

```
git flow hotfix start 分支名
git flow hotfix finish 分支名

创建修补分支
git flow hotfix start bug

查看状态，看一下是否有切换分支
git status

然后新建bug.html文件,添加并提交
git add .
git commit -m "create bug.html"


完成修复程序
git flow hotfix finish bug

该命令和完成发布非常相似，会进行如下操作：
    该修改会同时合并到develop和master（以确保错误不会再次进入下一个版本）
    分支被删除，并在此进入develop
```

# Git资源加速

### 查看全局配置

```
git config --global --list

系统全局git配置文件：.gitconfig
一般该文件会放到计算机的家目录，MAC为例的话：/用户/用户名/.gitconfig
```

### 设置Git仓库的速度(针对克隆、拉取)

```
git项目时，有时速度比较慢，可以设置--depth=1，只要最后一个版本的代码，而不要.git目录中的东西
git clone --depth=1 https://github.com/demo/demo.git
```

### 设置Git克隆代码的下载量(缓冲区大小)

```
可以根据你需要下载的文件大小，将postBuffer值配置成合适的大小
git config --global http.postBuffer 524288000

这样已经配置好了，如果你不确定，可以根据以下命令查看postBuffer
git config --list
```

### 设置Git克隆最低速度时间，当网络比较慢的情况下试用

```
git config --global http.lowSpeedLimit 0
git config --global http.lowSpeedTime 999999
```

### GitHub镜像加速器地址一览

- fastgit.org：[https://doc.fastgit.org/open in new window](https://doc.fastgit.org/)
- gitclone.com：[https://gitclone.com/open in new window](https://gitclone.com/)
- GitHub 文件加速：[https://mirror.ghproxy.com/open in new window](https://mirror.ghproxy.com/)
- Github 仓库加速：[https://github.zhlh6.cn/open in new window](https://github.zhlh6.cn/)
- Github 仓库加速：[http://toolwa.com/github/open in new window](http://toolwa.com/github/)

### GitHub镜像加速器

直接修改 git 的配置，使用[FastGitopen in new window](https://doc.fastgit.org/) 替换所有指向 GitHub 的链接，参考官网的使用配置

```
git config --global url."https://hub.fastgit.xyz/".insteadOf "https://github.com/"

git config protocol.https.allow always
```

### 取消GitHub镜像加速器

```
取消代理
git config --global --unset url."https://hub.fastgit.xyz/".insteadOf "https://github.com/"

直接找到全局的.gitconfig，去掉下面的配置就可以了
[url "https://hub.fastgit.xyz/"]
    insteadOf = https://github.com/
```

# Git添加第三方秘钥

### 创建秘钥文件

```
ssh-keygen -t rsa -C "你的邮箱"

或者通过下面的命令可以给秘钥起不同的名字

ssh-keygen -t gitee -C "你的邮箱"
ssh-keygen -t github -C "你的邮箱"
填写好自己的邮箱后，然后一路回车。成功执行后，会生成秘钥文件，路径为：用户主目录
~/.ssh/id_rsa   私钥文件
~/.ssh/id_rsa.pub 公钥文件
```

### 登录github/gitee平台上传自己的秘钥(配置服务端)

![gitee-ssh-key](https://www.quickask.net/dist/assets/images/php/git/gitee-ssh-key.png)![gitee-ssh-key](https://www.quickask.net/dist/assets/images/php/git/github-key.png)

### 让本机电脑识别秘钥

```
ssh-add "你的 id-rsa 文件地址"
```

### 添加后秘钥后验证是否关联平台成功-需要联网(gitee/github)

```
验证github平台是否
ssh -T git@github.com
Hi xxxxx! You've successfully authenticated, but GitHub does not provide shell access.


ssh -T git@gitee.com
Hi xxxxx! You've successfully authenticated, but GitHub does not provide shell access.
```

### Github平台将密码换成了token

```
git push origin master

remote: Support for password authentication was removed on August 13, 2021.
Please use a personal access token instead.
github平台认为，用户在更新(pull) 或者是 推送(push) 代码的时候 使用 用户密码是一种不安全的方式，
然后特意将验证机制改为了token秘钥方式来验证
我们看一下如何生成 token


github登录 -> 右上角菜单 -> settings -> Developer settings -> Personal access tokens

然后选择 Generate new token 生成新token

最后生成的 token 要自己保存好，因为他只显示一次

最后就可以在 pull /  push 操作的时候用 token 代替密码了
```

![github-key](https://www.quickask.net/dist/assets/images/php/git/github-token.png)

# Git第三方多秘钥管理

### 前提条件-请看上一章节

> - 已经在`gihub`上面添加好`SSH-KEY`验证了

### git pull的时候，报错信息

**解决[git@github.com.Permission](mailto:git@github.com.Permission) denied (publickey)**

![gitpull](https://www.quickask.net/dist/assets/images/php/git/gitpull.png)

### 先验证一下Key是否有效

```
sudo ssh -T git@github.com
```

### 如果是下面的结果说明验证失败

```
No more authentication methods to try.  
Permission denied (publickey).
```

### 然后执行命令

```
sudo ssh-agent -s
```

### 接着在执行

```
sudo ssh-add ~/.ssh/id_rsa

这条命令需要注意一下，请确保自己要添加的KEY 是不是这个文件,以我的为例，因为我有：
gitee的KEY 和 github的KEY，先去看看目录里面有的key文件

cd ~/.ssh/

id_rsa
id_rsa.pub
github_rsa
github_rsa.pub

因为 我要添加的是github的KEY文件 所以我执行的命令是：

sudo ssh-add ~/.ssh/github_rsa
```

### 是否添加KEY成功

```
Identity added: ...这是ssh key文件路径的信息
```

### 最后再验证一下KEY

```
sudo ssh -T git@github.com
$ ssh -T git@github.com
Hi xxxxx! You've successfully authenticated, but GitHub does not provide shell access.
```

### Git配置多个SSH-KEY

> - 在 `~/.ssh/` 目录下新建一个`config`文件，添加如下内容（其中`Host`和`HostName`填写`git`服务器的域名，`IdentityFile`指定私钥的路径）

```
# gitee
Host gitee.com
HostName gitee.com
PreferredAuthentications publickey
IdentityFile ~/.ssh/id_rsa


# github
Host github.com
HostName github.com
PreferredAuthentications publickey
IdentityFile ~/.ssh/github_rsa
```

### Bad owner or permissions on .ssh/config的解决

> - 这个时候，只需要在`.ssh`目录，执行以下命令行：

```
sudo chmod 600 config
```