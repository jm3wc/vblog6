## 快速入门

## Mysql

```
Mysql 是一种关系型数据库系统; 它的安全性和稳定性已足以满足许多应用程序的要求，
而且有着非常高的性价比这不仅是因为MySQL本身是免费的.
还因为它对硬件性能要求不那么苛刻这些优点使MySQL成为数据库领域里事实上的标准之一.
与其他的开源数据库系统相比，MySQL不仅在性能指标方面高出一截，在使用范围方面也远远领先于其他竞争对手
```

## Mysql有什么作用？

```
MySQL是 开放源码的关系型数据库管理系统。       
对数据库进行统一的管理和控制，使用户能方便定义和操纵数据.

管理工具

mysql.exe phpMyAdmin  MySQLDumper  Navicat  MySQL GUI Tools mysqlworkbench
```

## 什么是关系型数据库

```
数据被存放在一些结构化的数据表中，而数据表之间形成内在的交叉关系。
存在于数据表之间的这种关系使数据库又被称为关系型数据库
```

## 关系型数据库系统

```
MySQL、Oracle、Microsoft SQL Server 和IBM DB2都是关系型数据库系统(database system)。
除了管理数据，一个这样的系统还包括用来管理各种关系数据库的程序。
一个合格的关系数据库系统不仅要确保各种数据的存储情况安全可靠.
还必须能够处理对现有数据进行查询、分析和排序以及对新数据进行保存等诸多命令。
```

## 什么是数据库

```
数据库(database)是按照数据结构来组织、存储和管理数据的仓库，也是说数据库是一个由一批数据构成的有序集合，
这个集合通常被保存为一个或多个彼此相关的数据表。

也可以说数据库是一个以某种有组织的方式存储的数据集合。理解数据库的一种最简单的办法是将其想象为一个文件柜。
此文件柜是一个存放数据的物理位置，不管数据是什么以及如何组织的。
```

## 表

```
将资料放入自己的文件柜时，并不是随便将它们扔进某个抽屉就完事了，
而是在文件柜中创建文件，然后将相关的资料放入特定的文件中。
在数据库领域中，这种文件称为表。表是一种结构化的文件，可用来存储某种特定类型的数据。
表可以保存顾客清单、产品目录，或者其他信息清单。
这里关键的一点在于，数据库中的每个表都有一个名字，用来标识自己。此名字是唯一的。
```

## 列和数据类型

```
表由列组成。列中存储着表中某部分的信息。
理解列的最好办法是将数据库表想象为一个网格。网格中每一列存储着一条特定的信息。

数据库中每个列都有相应的数据类型。数据类型定义列可以存储的数据种类。
例如，如果列中存储的为数字（或许是订单中的物品数），则相应的数据类型应该为数值类型。
如果列中存储的是日期、文本、注释、金额等，则应该用恰当的数据类型规定出来。
```

## 行

```
表中的数据是按行存储的，所保存的每个记录存储在自己的行内。
如果将表想象为网格，网格中垂直的列为表列，水平行为表行。
例如，顾客表可以每行存储一个顾客。表中的行数为记录的总数。
```

## 主键

```
表中每一行都应该有可以唯一标识自己的一列（或一组列）。
一个顾客表可以使用顾客ID列，而订单表可以使用订单ID

注意
    任意两行都不具有相同的主键值；
    每个行都必须具有一个主键值（主键列不允许NULL值）
    不更新主键列中的值
    不重用主键列的值
```

## 外键

```
如果公共关键字在一个关系中是主关键字，那么这个公共关键字被称为另一个关系的外键。           
由此可见，外键表示了两个关系之间的联系。以另一个关系的外键作主关键字的表被称为主表，          
具有此外键的表被称为主表的从表。           
外键的作用是引用另一个数据表的某条记录; 使两张表形成关联
```

## 实体属性

```
实体：客观存在并可相互区别的事物称为实体。实体可以是具体的人、事、物，也可以是抽象的概念或联系.
属性：实体所具有的某一特性称为属性。一个实体可以由若干个属性来描述。
```

## 数据表的关系

```
1:1                        
    第一个数据表里的一条数据记录对应着第二个数据表里的一条数据记录，
    同时第二个数据表里的每一条数据记录也分别对应着第一个数据表里的一条数据记录          
1:n            
    第一个数据表里的一条数据记录对应着第二个数据表的多条记录         
n:m         
    第一个数据表里的一条记录对应着第二个数据表里的多条记录，
    同时第二个数据表里的一条记录也可以对应着第一个数据表的多条记录。
```

## 数据库的构建

## 模型文件以及SQL文件下载

[**company文件**](http://web.wdwangke.com/mdwork/backend/mysql/company.zip)

## 创建一个数据库需要准备什么

## 1.数据库设计要求

```
1.一个好的数据库设计方案应该满足以下几项要求：
    数据表里没有重复冗余的数据;
    数据表里没有 等重复的数据列;
    数据表的空间占用总量越小越好; order1, order2, order3
    使用频率高的查询都能以简单高效的方式执行。

2.命名要求
    MySQL对数据列的名字不区分大小写，但对数据库和数据表的名字区分大小写;
    数据库、数据表和数据列名字的长度最多不能超过64个字符;
    在名字里要避免使用特殊字符;
    数据表和数据列的名字应该有意义;
```

## 2.设计数据库，以公司通信录来设计数据库，数据表

```
1，挑实体 
2，拉关系
3，建库，建表、把实体变成表，把属性变成字段
4，1:n  把 1 这边的主键 放到 n 这边做外键
5，m:n 把两边的主键放到一个新的关系表 里 做外键
```

## 3.实体和实体属性

```
person 员工表

id            员工id
name        员工名字
avatar        员工头像
mobile        手机号
sex            性别(1：男 2：女)
email        邮箱
address        地址
depid        部门id(外键)
jobid        职位id(外键)
createtime    入职时间

department 部门表

id            部门id
name        部门名称

job  职位表

id        职位id
name    职位名称
depid    部门id(外键)

admin 管理员表

id            管理员id
username    管理员名称
password    密码
avatar        头像
salt        密码盐
```

## 4.拉关系

```
员工与部门的关系

员工    部门  1:1
部门    员工  1:n

员工与职位的关系

员工    职位  1:1
职位    员工  1:n

职位与部门的关系

职位    部门  1:1
部门    职位  1:n
```

##### 下面用Navicat来建库，建表

**1.用Navicat创建一个数据库，把鼠标的箭头指向本地数据库再点击鼠标右键选择新建数据库,名为company**

 ![img](http://web.wdwangke.com/mdphoto/backend/backend/mysql/Navicat.png)

**2.新建模型图**

![img](http://web.wdwangke.com/mdphoto/backend/backend/mysql/Navicat01.png)

**3.新建表**

![img](http://web.wdwangke.com/mdphoto/backend/backend/mysql/Navicat02.png)

**4.新建字段**

·![img](http://web.wdwangke.com/mdphoto/backend/backend/mysql/Navicat03.png)

**5.新建索引**

·![img](http://web.wdwangke.com/mdphoto/backend/backend/mysql/Navicat04.png)

**6.新建外键**

·![img](http://web.wdwangke.com/mdphoto/backend/backend/mysql/Navicat05.png)

**7.选项**

·![img](http://web.wdwangke.com/mdphoto/backend/backend/mysql/Navicat06.png)

**8.模型图**

 ![img](http://web.wdwangke.com/mdphoto/backend/backend/mysql/Navicat07.png)

**9.建完模型后点击文件—>导出SQL**

 ![img](http://web.wdwangke.com/mdphoto/backend/backend/mysql/Navicat08.png)

------

**10.选择company数据库右键点击运行SQL文件**

 ![img](http://web.wdwangke.com/mdphoto/backend/backend/mysql/Navicat09.png)

## 数据库的结构

## 表引擎

```
MySQL的强大之处在于它的插件式存储引擎，我们可以基于表的特点使用不同的存储引擎，从而达到最好的性能。

mysql在创建表的时候，可以指定对应的引擎。

在mysql命令中使用：show engines;可以查看到当前服务器支持的所有引擎。

使用哪一种引擎需要灵活选择，一个数据库中多个表可以使用不同引擎以满足各种性能和实际需求，
使用合适的存储引擎，将会提高整个数据库的性能

我们介绍几种表引擎
```

## MyISAM

```
MyISAM 存储引擎独立于操作系统，也就是可以在windows上使用，也可以比较简单的将数据转移到linux操作系统上去。
这种存储引擎在创建表的时候，会创建三个文件，一个是.frm文件用于存储表的定义，
一个是.MYD文件用于存储表的数据，另一个是.MYI文件，存储的是索引。
操作系统对大文件的操作是比较慢的，这样将表分为三个文件，
那么.MYD这个文件单独来存放数据自然可以优化数据库的查询等操作。

1.不支持事务，但是并不代表着有事务操作的项目不能用MyISAM存储引擎，
  可以在service层进行根据自己的业务需求进行相应的控制。
2.不支持外键。
3.查询速度很快，如果数据库insert和update的操作比较多的话比较适用。
4.对表进行加锁。
```

## InnoDB

```
可以把InnoDB看做是MyISAM的一种更新换代产品，它增加了以下几种新功能:

事务：InnoDB数据表里的数据库操作可以被执行为一个事务，
这将允许把几条有着内在逻辑关系的SQL命令当做一个整体来执行。
如果在执行时发行错误，所有的命令都将失效，就好像从未执行过这些命令;

数据行级锁定机制：在执行一个事务的时候，InnoDB数据表的驱动程序使用的是
它自已内建的数据行级锁定机制（不是MySQL提供的数据表级锁定机制）。
也就是说，在事务的过程中数据表是不会被锁定的，
其他用户仍可以访问它，被锁定的只是正在接受事务处理的数据记录;

外键约束条件：如果在数据表之间定义了关系，InnoDB驱动程序将自动保证数据表的引用
一致性在执行过DELETE命令之后也能保持。
也就是说，不可能出现数据表A里的一条记录引用了数据表B里一条不复存在的记录的问题。
用数据库的术语来讲，这一功能叫做”外键约束条件“;

崩溃恢复：在发生崩溃后，InnoDB数据表能够迅速地自动恢复到一个稳定可用的状态
        （前提是计算机文件系统没有被破坏）;
```

## **Memory**

```
将数据存在内存，为了提高数据的访问速度，每一个表实际上和一个磁盘文件关联。文件是frm。

（1）支持的数据类型有限制，比如：不支持TEXT和BLOB类型，对于字符串类型的数据，
    只支持固定长度的行，VARCHAR会被自动存储为CHAR类型；

（2）支持的锁粒度为表级锁。所以，在访问量比较大时，表级锁会成为MEMORY存储引擎的瓶颈；

（3）由于数据是存放在内存中，一旦服务器出现故障，数据都会丢失；

（4）查询的时候，如果有用到临时表，而且临时表中有BLOB，TEXT类型的字段，
    那么这个临时表就会转化为MyISAM类型的表，性能会急剧降低；

（5）默认使用hash索引。

（6）如果一个内部表很大，会转化为磁盘表。
```

## 字段

```
我们把表中的每一行叫做一个“记录”，每一个记录包含这行中的所有信息，
就像在通讯录数据库中某个人全部的信息，但记录在数据库中并没有专门的记录名，
常常用它所在的行数表示这是第几个记录。字段是比记录更小的单位，字段集合组成记录，
每个字段描述文献的某一特征，即数据项，并有唯一的供计算机识别的字段标识符。
```

## 字段的数据类型

```
MySQL中存的是数据。只要是数据，我们就会规定数据的类型。在表的字段中规定了使用的是某个数据类型。
那么，在插入的数据中就要使用对应的数据类型。并且，遵守数据类型的长度要求。

在MySQL里面我们将数据类型分为了以下一些类型：
1、数值类型（整型、浮点）
2、字符串类型
3、日期时间类型
4、复合类型
5、空间类型（非科学性工作基本不用，不做讲解）
```

## 整型

| MySQL数据类型 | 所占字节 | 值范围                     |
| :------------ | :------- | :------------------------- |
| tinyint       | 1字节    | -128~127                   |
| smallint      | 2字节    | -32768~32767               |
| mediumint     | 3字节    | -8388608~8388607           |
| int           | 4字节    | 范围-2147483648~2147483647 |
| bigint        | 8字节    | ±9.22*10的18次方           |

```
整型的长度不同，在实际使用过程也就不同。
MySQL 以一个可选的显示宽度指示器的形式对 SQL 标准进行扩展，这样当从数据库检索一个值时，
可以把这个值加长到指定的长度。例如，指定一个字段的类型为 INT(6)，
就可以保证所包含数字少于 6 个的值从数据库中检索出来时能够自动地用空格填充。
需要注意的是，使用一个宽度指示器不会影响字段的大小和它可以存储的值的范围。

注意：

1、同样人类年龄也是，在创建表字段时可用用无符号的整型。因为人类的年龄还没有负数

2、在实际使用过程中。我们业务中最大需要存储多大的数值。我们创建表时，就选择什么样的类型来存储这样的值。
```

## 浮点类型

| MySQL数据类型 | 所占字节 | 值范围                         |
| :------------ | :------- | :----------------------------- |
| float(m, d)   | 4字节    | 单精度浮点型，m总个数，d小数位 |
| double(m, d)  | 8字节    | 双精度浮点型，m总个数，d小数位 |
| decimal(m, d) |          | decimal是存储为字符串的浮点数  |

```
注意：

1.浮点是非精确值，会存在不太准确的情况

2.而decimal叫做定点数。在MySQL内部，本质上是用字符串存储的。

实际使用过程中如果存在金额、钱精度要求比较高的浮点数存储，建议使用decimal（定点数）这个类型。
```

## 字符类型

| MySQL数据类型 | 所占字节                        | 值范围                          |
| :------------ | :------------------------------ | :------------------------------ |
| CHAR          | 0-255字节                       | 定长字符串                      |
| VARCHAR       | 0-255字节                       | 变长字符串                      |
| TINYBLOB      | 0-255字节                       | 不超过255个字符的二进制字符串   |
| TINYTEXT      | 0-255字节                       | 短文本字符串                    |
| BLOB          | 0-65535字节                     | 二进制形式的长文本数据          |
| TEXT          | 0-65535字节                     | 长文本数据                      |
| MEDIUMBLOB    | 0-16 777 215字节                | 二进制形式的中等长度文本数据    |
| MEDIUMTEXT    | 0-16 777 215字节                | 中等长度文本数据                |
| LOGNGBLOB     | 0-4 294 967 295字节             | 二进制形式的极大文本数据        |
| LONGTEXT      | 0-4 294 967 295字节             | 极大文本数据                    |
| VARBINARY(M)  | 允许长度0-M个字节的定长字节符串 | 值的长度+1个字节                |
| BINARY(M)     | M                               | 允许长度0-M个字节的定长字节符串 |

**CHAR**

```
类型用于定长字符串，并且必须在圆括号内用一个大小修饰符来定义。
这个大小修饰符的范围从 0-255。比指定长度大的值将被截短，
而比指定长度小的值将会用空格作填补。
```

**VARCHAR**

```
把这个大小视为值的大小，在长度不足的情况下就用空格补足。
而 VARCHAR 类型把它视为最大值并且只使用存储字符串实际需要的长度
类型不会被空格填补，但长于指示器的值仍然会被截短。
因为 VARCHAR 类型可以根据实际内容动态改变存储值的长度，
所以在不能确定字段需要多少字符时使用 VARCHAR 类型可以大大地节约磁盘空间、提高存储效率。
4.0版本以下，varchar(20)，指的是20字节，如果存放UTF8汉字时，只能存6个（每个汉字3字节）
5.0版本以上，varchar(20)，指的是20字符，无论存放的是数字、字母还是UTF8汉字（每个汉字3字节），
都可以存放20个，最大大小是65532字节
```

**text类型与blob类型**

```
对于字段长度要求超过 255 个的情况下，MySQL 提供了 TEXT 和 BLOB 两种类型。
根据存储数据的大小，它们都有不同的子类型。这些大型的数据用于存储文本块或图像、
声音文件等二进制数据类型。
TEXT 和 BLOB 类型在分类和比较上存在区别。
BLOB 类型区分大小写，而 TEXT 不区分大小写。大小修饰符不用于各种 BLOB 和 TEXT 子类型。
```

## 时间类型

| MySQL数据类型 | 所占字节 | 值范围                              |
| :------------ | :------- | :---------------------------------- |
| date          | 3字节    | 日期，格式：2014-09-18              |
| time          | 3字节    | 时间，格式：08:42:30                |
| datetime      | 8字节    | 日期时间，格式：2014-09-18 08:42:30 |
| timestamp     | 4字节    | 自动存储记录修改的时间              |
| year          | 1字节    | 年份                                |

```
注意：
1、时间类型在web系统中用的比较少，很多时候很多人喜欢使用int来存储时间。
   插入时插入的是unix时间戳，因为这种方式更方便计算。在前端业务中用date类型的函数，
   再将unix时间戳转成人们可识别的时间。

2、上面的类型你可以根据实际情况实际进行选择

3、有些人为了在数据库管理中方便查看，也有人使用datetime类型来存储时间。
```

## 复合类型

| MySQL数据类型 | 所占字节 | 值范围                                      |
| :------------ | :------- | :------------------------------------------ |
| set           | 集合类型 | set(“member”, “member2″, … “member64″)      |
| enum          | 枚举类型 | enum(“member1″, “member2″, … “member65535″) |

一个 ENUM 类型只允许从一个集合中取得一个值；而 SET 类型允许从一个集合中取得任意多个值

## ENUM 类型

```
ENUM 类型因为只允许在集合中取得一个值，有点类似于单选项。
在处理相互排拆的数据时容易让人理解，比如人类的性别。
ENUM 类型字段可以从集合中取得一个值或使用null值，
除此之外的输入将会使 MySQL 在这个字段中插入一个空字符串。
另外如果插入值的大小写与集合中值的大小写不匹配，
MySQL会自动使用插入值的大小写转换成与集合中大小写一致的值。

ENUM 类型在系统内部可以存储为数字，并且从1开始用数字做索引。
一个 ENUM 类型最多可以包含 65536 个元素，其中一个元素被 MySQL 保留，
用来存储错误信息，这个错误值用索引 0 或者一个空字符串表示。

MySQL 认为 ENUM 类型集合中出现的值是合法输入，除此之外其它任何输入都将失败。
这说明通过搜索包含空字符串或对应数字索引为 0 的行就可以很容易地找到错误记录的位置。
```

## SET 类型

```
SET 类型与 ENUM 类型相似但不相同。SET类型可以从预定义的集合中取得任意数量的值。
并且与 ENUM 类型相同的是任何试图在 SET 类型字段中插入非预定义的值都会使MySQL插入一个空字符串。
如果插入一个即有合法的元素又有非法的元素的记录，MySQL 将会保留合法的元素，除去非法的元素。

一个 SET 类型最多可以包含 64 个元素。在 SET 元素中值被存储为一个分离的“位”序列，
这些“位”表示与它相对应的元素。
“位”是创建有序元素集合的一种简单而有效的方式。
并且它还去除了重复的元素，所以SET类型中不可能包含两个相同的元素。
希望从 SET 类型字段中找出非法的记录只需查找包含空字符串或二进制值为 0 的行。
```

## 字段其他属性设置

#### UNSIGNED

```
UNSIGNED（无符号）
主要用于整型和浮点类型，使用无符号。即，没有前面面的-（负号）。
```

#### ZEROFILL

```
如果宽度小于设定的宽度，则自动填充0，要注意的是，这只是最后显示的结果，
在MYSQL中 实际存储的还是1.
```

#### default

```
可以使用DEFAULT为字段设定一个默认值，
当插入记录时，当忘记传该字段的值时，MySQL 会自动为您设置上该字段的默认值
default属性确保在没有任何值可用的情况下，赋予某个常量值，这个值必须是常量，
因为MySQL不允许插入函数或表达式值。
此外，此属性无法用于BLOB或TEXT列。如果已经为此列指定了NULL属性，没有指定默认值时默认值将为NULL，
否则默认值将依赖于字段的数据类型。
```

#### not null

```
如果某一个字段设置not null，只能插入空值，不能插入null，
因为null并不是空值，而是要占用空间。
建议在重要情况下始终使用not null属性，因为它提供了一个基本验证，
确保已经向查询传递了所有必要的值。
```

#### null

```
为列指定null属性时，该列可以保持为空，而不论行中其它列是否已经被填充。
记住，null精确的说法是“无”，而不是空字符串或0。
```

## 索引

## 什么是索引

```
索引是对数据库表中一列或多列的值进行排序的一种结构，使用索引可快速访问数据库表中的特定信息。

举例说明索引：如果把数据库中的某一张看成一本书，那么索引就像是书的目录，
可以通过目录快速查找书中指定内容的位置，对于数据库表来说，可以通过索引快速查找表中的数据。
```

## 索引的优缺点

```
优：
    1.建立索引的列可以保证行的唯一性，生成唯一的rowId

    2.建立索引可以有效缩短数据的检索时间

    3.建立索引可以加快表与表之间的连接

    4.为用来排序或者是分组的字段添加索引可以加快分组和排序顺序
缺：
    1.创建索引和维护索引需要时间成本，这个成本随着数据量的增加而加大

    2.创建索引和维护索引需要空间成本，每一条索引都要占据数据库的物理存储空间，
      数据量越大，占用空间也越大（数据表占据的是数据库的数据空间）

    3.引也不易过多，索引越多写入，修改的速度越慢，会降低表的增删改的效率，
      因为每次增删改索引需要进行动态维护，导致时间变长
```

## MySQL的索引类型

| 索引类型 | 功能说明                                                     |
| :------- | :----------------------------------------------------------- |
| 普通索引 | 最基本的索引，它没有任何限制                                 |
| 唯一索引 | 某一行企用了唯一索引则不准许这一列的行数据中有重复的值。针对这一列的每一行数据都要求是唯一的 |
| 主键索引 | 它是一种特殊的唯一索引，不允许有空值。一般是在建表的时候同时创建主键索引，常用于用户ID。类似于书中的页码 |
| 全文索引 | 对于需要全局搜索的数据，进行全文索引                         |

## 普通索引

| 类型     | 详细说明                               |
| :------- | :------------------------------------- |
| 基本语法 | alter table 表 add index(字段)         |
| 示例     | ALTER TABLE money ADD INDEX(username); |
| 示例解释 | 为money表的username字段增加索引        |

## 唯一索引

| 类型     | 详细说明                             |
| :------- | :----------------------------------- |
| 基本语法 | alter table 表 add UNIQUE(字段)      |
| 示例     | ALTER TABLE money ADD UNIQUE(email); |
| 示例解释 | 为money表的email字段增加唯一索引     |

## 全文索引

| 类型     | 详细说明                                 |
| :------- | :--------------------------------------- |
| 基本语法 | alter table 表 add FULLTEXT(字段)        |
| 示例     | ALTER TABLE money ADD FULLTEXT(content); |
| 示例解释 | 为money表的content字段增加唯一索引       |

## 主键索引

| 类型     | 详细说明                               |
| :------- | :------------------------------------- |
| 基本语法 | alter table 表 add PRIMARY KEY(字段)   |
| 示例     | ALTER TABLE money ADD PRIMARY KEY(id); |
| 示例解释 | 为money表的id字段增加主键索引          |

## 创建表时也可以声明索引

**创建表时可在创建表语句后加上对应的类型即可声明索引：**

```
PRIMARY KEY(字段)
INDEX [索引名] (字段)
FULLTEXT [索引名] (字段)
UNIQUE[索引名] (字段)
```

**整体示例如下：**

```
CREATE TABLE test (
    id INT NOT NULL ,
    username VARCHAR(20) NOT NULL ,
    password INT NOT NULL ,
    content INT NOT NULL ,
    PRIMARY KEY (id),
    INDEX pw (password),
    UNIQUE (username),
    FULLTEXT (content)
) ENGINE = InnoDB;
```

## 英文字符集

| 字符集  | 说明                      | 字节长度   |
| :------ | :------------------------ | :--------- |
| ASCII   | 美国标准信息交换代码      | 单字节     |
| GBK     | 汉字内码扩展规范          | 双字节     |
| unicode | 万国码                    | 4字节      |
| UTF-8   | Unicode的可变长度字符编码 | 1到6个字节 |

## SQL语句

```
需要在数据库上执行的大部分工作都由 SQL 语句完成。

注意：一定要记住，SQL 对大小写不敏感！

分号是在数据库系统中分隔每条 SQL 语句的标准方法。

SQL (结构化查询语言)是用于执行查询的语法。但是 SQL 语言也包含用于更新、插入和删除记录的语法。
```

## 数据定义语言(DML)

**这里我们用company数据库进行对数据的操作**

**INSERT INTO(插入语句)**

```
单条数据插入
    INSERT INTO `表名`(`字段1`,`字段2`)VALUES('值1'，'值2');

多条数据插入
    INSERT INTO `表名`(`字段1`,`字段2`)VALUES('值1'，‘值2’),('值1','值2');

例：
/*在部门表插入数据*/
    INSERT INTO `pre_department`(`name`)VALUES('技术部');
```

**UPDATE(更新语句)**

```
更新一个表的数据
    UPDATE 表名 SET `字段1`=值1,`字段2`=值2,`字段n`=值n WHERE 条件；

例：
/*把技术部更新为行政部*/
    UPDATE `pre_department` SET `name`='行政部' WHERE `id` = 1;
```

**DELETE(删除语句)**

```
删除一条数据
    DELETE FROM `表` WHERE 条件;
删除多条数据
    DELETE FROM `表` WHERE `id` IN ('值1','值2');

例：
    DELETE FROM `pre_department` WHERE `id` IN ('1','2');
```

**SELECT(查询语句)**

```
表示查询全部字段
    SELECT * FROM `表`;

要查哪个字段就直接写字段
    SELECT 字段1,字段2 FROM 表;

根据where后面的条件查询内容
    SELECT * FROM `表` WHERE 条件;

查询的条件是id=5并且depid=3的数据
    SELECT * FROM `表` WHERE `id`=5 and `depid`=3;

查询的条件是id=5或者是id=8的数据
    SELECT * FROM `表` WHERE `id`=5 or `id`=8;

查询 5 - 10之间的数据
    SELECT * FROM `表` WHERE `id` BETWEEN 5 AND 10;
    SELECT * FROM `表` WHERE `id` >= 5 AND `id` <= 10;

查询的条件是id=1，或者id=3，或者id=6的数据    
    SELECT * FROM `表` WHERE `id` IN (1,3,6);

查询的条件是id不等于1,3,6的数据
    SELECT * FROM `表` WHERE `id` NOT IN (1,3,6);

只查询5条
    SELECT * FROM `表` LIMIT 5;

从第4条数据开始，只查询5条
    SELECT * FROM `表` LIMIT 3,5;

排序（升序：asc，降序：desc）
    SELECT * FROM `表` ORDER BY `id` ASC;

根据title分组（把相同的title数据分到一组）
    SELECT * FROM `表` GROUP BY title;

模糊查询name这个字段里面数据有 '你是'
    SELECT * FROM `表` WHERE `name` like '%你是%';
```

## **连表查询**

**LEFT JOIN(左连表)**

```
以左边的表为基准，先把左边的表查出来，再查右边的表，若右边的表没对应的数据显示的就为NULL。

left join是以A表的记录为基础的,A可以看成左表,B可以看成右表,left join是以左表为准的.
换句话说,左表(A)的记录将会全部表示出来,而右表(B)只会显示符合搜索条件的记录(例子中为: A.ID = B.bID).
B表记录不足的地方均为NULL.

例：
    SELECT d.name,j.name FROM `pre_department` as d LEFT JOIN `pre_job` as j on d.id = j.depid;
```

**RIGHT JOIN(右连表)**

```
以右边的表为基准，先把右边的表查出来，再查左边的表，若左边的表没对应的数据显示的就为NULL

仔细观察一下,就会发现right join和left join的结果刚好相反,这次是以右表(B)为基础的,
A表不足的地方用NULL填充。

例：
    SELECT j.name,d.name FROM `pre_job` as j RIGHT JOIN `pre_department` as d on j.depid = d.id;
```

**INNER JOIN(内连表)**

```
以两个表中有至少一个匹配，否则不显示
这说明inner join并不以谁为基础,它只显示符合条件的记录。

    SELECT d.name,j.name FROM `pre_department` as d INNER JOIN `pre_job` as j ON d.id = j.depid;
```

## SQL运算符

**算术运算符**

| 符号 | 说明              |
| :--- | :---------------- |
| +    | 加法运算          |
| -    | 减法运算          |
| *    | 乘法运算          |
| /    | 除法运算,返回商   |
| %    | 求余运算,返回余数 |

**比较运算符**

| 符号  | 说明     |
| :---- | :------- |
| >     | 大于     |
| <     | 小于     |
| >=    | 大于等于 |
| <=    | 小于等于 |
| !=,<> | 不等于   |
| =     | 等于     |

**逻辑运算符**

| 符号           | 说明   |
| :------------- | :----- |
| NOT或者!       | 逻辑非 |
| AND或者&&      | 逻辑与 |
| OR或者两条竖线 | 逻辑或 |

```
>= 查询 id大于等于9
    SELECT * FROM `pre_department` WHERE id>=9;

not 查询 ID 除 3 和 10 之外的所有值
    SELECT * FROM `pre_department` WHERE id NOT IN ('3','10');

and 查询 id为9和名称为技术部
    SELECT * FROM `pre_department` WHERE id = 9  AND NAME = '技术部';

or 查询 id为9或者id为1
    SELECT * FROM `pre_department` WHERE id = 9 OR id = 1;
```

## SQL函数

## SQL 合计函数

```
Aggregate 函数的操作面向一系列的值，并返回一个单一的值
```

| 函数          | 描述                             |
| :------------ | :------------------------------- |
| AVG(column)   | 返回某列的平均值                 |
| COUNT(column) | 返回某列的行数（不包括 NULL 值） |
| COUNT(*)      | 返回被选行数                     |
| MAX(column)   | 返回某列的最高值                 |
| MIN(column)   | 返回某列的最低值                 |
| SUM(column)   | 返回某列的总和                   |

```
AVG
    SELECT AVG(column) FROM `表名`;

COUNT 
    SELECT COUNT(column) FROM `表名`;

MAX
    SELECT MAX(column) FROM `表名`;

MIN
    SELECT MIN(column) FROM `表名`;

SUM
    SELECT SUM(column) FROM `表名`;
```

## SQL命令行

**除了用Navicat和phpmyadmin对数据库进行增删改查，还可以用命令行**

**可以使用windows自带的cmd或者cmder其中一个，首先打开我们的命令行**

```
连接MySQL服务
    mysql -h localhost -u root -p dbName
    -u指的是用户名 -p 指的是密码 -h 指的是主机地址 dbName指的是数据库名

查看数据库列表
    show databases;

创建数据库并且设置编码
    create database 数据库名 charset utf8;

删除数据库
    drop database 数据库名;

选择使用数据库
    use 数据库名;

查看某个数据库里的数据表列表
    show tables;

查看数据库的创建sql
    show create database 数据库名;

查看表的创建sql
    show create table 表名;

查看当前数据库
    select database();

查看当前MySQL的版本
    select version();

删除一张表里所有的数据
    truncate table1;

删除一张表;
    drop table 表名;

修改表名
    alter table test rename to test2;

修改表编码
    ALTER TABLE `table` DEFAULT CHARACTER SET utf8;  

查看存储引擎
    show engines;

查看某个数据库里的所有表
    show tables from 数据库名;

导出数据库
    mysqldump -u 用户名 -p 数据库名 > 存放位置/导出的文件名
    mysqldump -u root -p company > e:\demo.sql

导出数据表
    mysqldump -u 用户名 -p 数据库名 表名> 存放位置/导出的文件名
    mysqldump -u root -p demo user> e:\demo.sql

导入数据表
第一种
       mysql -u 用户名 -p 数据库名 < 存放位置
    mysql -u root -p demo < e:\demo.sql

第二种
    mysql -u root -p
    mysql>show databases;
    mysql>use demo;
    mysql>source e:\demo.sql

清空表语句     
    delete和truncate是一样的，但它们有一点不同，那就是DELETE可以返回被删除的记录数，
    而TRUNCATE TABLE返回的是0。

    基本语法：TRUNCATE TABLE 表名;

    示例：TRUNCATE TABLE user;

    示例说明：清空表的数据，并且让自增的id从1开始自增
```

## PHPMySQL操作

**前面已经说了通过Navicat对数据库的进行增删改查，下面用公司通信录的数据库(company)进行讲解**

## 模型文件以及SQL文件下载

[**company文件**](http://web.wdwangke.com/mdwork/backend/mysql/company.zip)

## 常用函数

| 函数名               | 说明                                                         |
| :------------------- | :----------------------------------------------------------- |
| mysqli_connect       | 链接数据库                                                   |
| mysqli_connect_errno | 链接时提示错误码                                             |
| mysqli_connect_error | 链接时提示错误信息                                           |
| mysqli_select_db     | 选择数据库                                                   |
| mysqli_set_charset   | 设置编码                                                     |
| mysqli_query         | 执行Sql语句                                                  |
| mysqli_num_rows      | 获取返回结果行数                                             |
| mysqli_fetch_all     | 获取返回所有数据的关联数组，第二个参数是规定返回的数组类型，关联数组：MYSQLI_ASSOC 索引数组：MYSQLI_NUM 所有数组类型：MYSQLI_BOTH |
| mysqli_fetch_assoc   | 获取返回的结果集里的一组关联数组                             |
| mysqli_insert_id     | 返回最后一个查询中自动生成的 ID（通过 AUTO_INCREMENT 生成）  |
| mysqli_error         | 返回执行失败的错误信息                                       |
| mysqli_affected_rows | 返回最后执行SQL语句所影响的记录行数                          |

## 链接数据库

```
<?php

header("Content-Type:text/html;charset=utf-8");

/* 
    链接数据库
        host        主机地址
        username    用户名
        password    密码
*/
$conn = @mysqli_connect('localhost','root','root');

//链接数据库失败
if(!$conn){
    echo '错误码：' . mysqli_connect_errno() . '<br>';
    echo '错误信息：' . mysqli_connect_error();
    exit;
}

$select = mysqli_select_db($conn,'company');

if(!$select){
    echo '选择数据库失败';
    exit;
}

// 设置编码
mysqli_set_charset($conn,'utf8');
```

## 查询所有数据

```
// sql语句

$sql = "SELECT * FROM `pre_admin`";

$res = mysqli_query($conn,$sql);

$data = [];

if($res && mysqli_num_rows($res) > 0){

  $data = mysqli_fetch_all($res,MYSQLI_ASSOC);

}

var_dump($data);
```

## 查询单条数据

```
$sql = "SELECT * FROM `pre_admin` WHERE `id` = '1'";

$res = mysqli_query($conn,$sql);

$data = [];

if($res && mysqli_num_rows($res) > 0){
    $data = mysqli_fetch_assoc($res);
}

var_dump($data);
```

## 插入一条新的数据

```
$username = 'admin';
$salt = '6xChSuJQag';
$pwd = md5('123456'.$salt);
$avatar = '2021082310582038867120.jpg';

$sql = "INSERT INTO `pre_admin`(`username`,`password`,`avatar`,`salt`)VALUES("$username","$pwd",)";

$res = mysqli_query($conn,$sql);

if($res){
    echo mysqli_insert_id($conn);
}else {
    echo "SQL语句执行失败：" . $sql . '<br />';
    echo "错误信息：".mysqli_error($conn);
    exit;
}
```

## 更新一条数据

```
$username = 'demo';

$sql = "UPDATE `pre_admin` SET `username` = '$username' WHERE `id` = '1'";

$res = mysqli_query($conn,$sql);

if($res){
    echo mysqli_affected_rows($conn);
}else{
    echo 'SQL语句执行失败：' . $sql .'<br />';
    echo '错误信息：' . mysqli_error($conn);
    exit;
}
```

## 删除一条数据

```
// 按条件删除
$id = 1;

$sql = "DELETE FROM `pre_admin` WHERE `id` = '$id'";

$res = mysqli_query($conn,$sql);

if($res){
    echo mysqli_affected_rows($conn);
}else {
    echo 'SQL语句执行错误：' . $sql;
    echo '错误信息：' . mysqli_error($conn);
    exit;
}
```

## 封装MySQL函数

下面对增删改查几个数据库操作进行封装，

因为在前面用PHP对mysql进行增删改查会发现代码很多重复的，

所以要把那几个常用的封装成函数

## **function.php**

```
//声明编码
header("Content-Type:text/html;charset=utf-8");


//单条查询
function find($sql = null)
{
    //引入全局变量
    global $conn;
    $res = mysqli_query($conn, $sql);
    if(!$res)
    {
        echo "SQL语句执行失败：".$sql;
        exit;
    }

    //返回数据
    return mysqli_fetch_assoc($res);
}

//多条查询
function all($sql = null)
{
    //引入全局变量
    global $conn;
    $res = mysqli_query($conn, $sql);
    if(!$res)
    {
        echo "SQL语句执行失败：".$sql;
        exit;
    }

    // 多条数据就是要循环
    $list = [];

    while($data = mysqli_fetch_assoc($res))
    {
        $list[] = $data;
    }

    //返回数据
    return $list;
}


// 插入函数
function add($table, $data)
{
    // INSERT INTO 表名(`字段1`,`字段2`,`字段3`)VALUES('值1','值2','值3')
    global $conn;
    global $pre_;

    //给表名拼接上表前缀
    $table = $pre_.$table;

    //将数组里面的索引全部提取出来变成一个新数组
    $keys = array_keys($data);

    //数组变成字符串
    $fields = "`".implode("`,`", $keys)."`";

    $values = "'".implode("','", $data)."'";

    $sql = "INSERT INTO $table($fields)VALUES($values)";

    //执行语句
    $res = mysqli_query($conn, $sql);

    if(!$res)
    {
        echo "SQL语句执行失败：".$sql;
        exit;
    }

    //返回插入ID
    return mysqli_insert_id($conn);
}

//更新
function update($table, $data, $where = 1)
{
    //UPDATE 表名 SET `字段1` = '值1', `字段2` = '值2' WHERE 条件
    global $conn;
    global $pre_;

    //拼接表名
    $table = $pre_.$table;

    //直接组装
    $str = "";

    foreach($data as $key=>$item)
    {
        $str .= "`$key` = '$item',";
    }

    $str = trim($str, ",");

    //组装sql语句
    $sql = "UPDATE $table SET $str WHERE $where";

    //执行sql
    $res = mysqli_query($conn, $sql);

    if(!$res)
    {
        echo "SQL语句执行失败：".$sql;
        exit;
    }

    //返回影响行数
    return mysqli_affected_rows($conn);
}


//删除
function del($table, $where = 1)
{
    //DELETE FROM 表名 WHERE where
    global $conn;
    global $pre_;

    $table = $pre_.$table;

    $sql = "DELETE FROM $table WHERE $where";

    //执行sql
    $res = mysqli_query($conn, $sql);

    if(!$res)
    {
        echo "SQL语句执行失败：".$sql;
        exit;
    }

    //返回影响行数
    return mysqli_affected_rows($conn);
}
```

#### config.php

```
<?php
    header("Content-Type:text/html;charset=utf-8");
    /* 
    连接数据库
        host        主机地址
        username    用户名
        password    密码
        dbname      默认使用数据库
        port        连接到 MySQL 服务器的端口
        socket      socket 或要使用的已命名 pipe
    */
    $conn=mysqli_connect('localhost','root','root');
    if(!$conn){//如果连接数据库失败
        echo "错误码：". mysqli_connect_errno();
        echo "错误：". mysqli_connect_error();
        exit;
    }

    //选择数据库
    mysqli_select_db($conn, "company");
    //设置默认客户端字符集
    mysqli_set_charset($conn,"utf8");
    // 引入function函数库
    include_once('function.php');



?>
```

**test.php**

```
<?php
    include_once('config.php');
    //新增数据
    $data=array(
        'name'=>'市场部'
    );
    $res = add('pre_department',$data);
    if($res){
        echo '成功';
    }else{
        echo '失败';
    }

    //修改数据 假如修改市场部的名称 在这里id为28，以你的数据为准
    $savedata=array(
        'name'=>'市场二部'
    );
    $res = update('pre_department',$savedata,'id=28');
    if($res){
        echo '成功';
    }else{
        echo '失败';
    }
    //查询全部数据
    $sql = "select * from `pre_department`";
    $data = all($sql);
    var_dump($data);

    //查询单条数据
    $sql = "select * from `pre_department` where id=28";
    $data = find($sql);
    var_dump($data);
?>
```