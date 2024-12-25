## 01 【Sass的安装使用】

## 1.1 CSS预处理技术，及种类介绍

什么是css预处理技术

- CSS 预处理器定义了一种新的语言，其基本思想是，用一种专门的编程语言，为 CSS 增加了一些编程的特性，将 CSS 作为目标生成文件，然后开发者就只要使用这种语言进行编码工作。
- 通俗的说，“CSS 预处理器用一种专门的编程语言，进行 Web 页面样式设计，然后再编译成正常的 CSS 文件，以供项目使用。CSS 预处理器为 CSS 增加一些编程的特性，无需考虑浏览器的兼容性问题”，例如你可以在 CSS 中使用变量、简单的逻辑程序、函数（如变量$main-color）等等在编程语言中的一些基本特性，可以让你的 CSS 更加简洁、适应性更强、可读性更佳，更易于代码的维护等诸多好处。

css预处理技术的种类

- Sass（SCSS）
- LESS
- Stylus
- Turbine
- Swithch CSS
- CSS Cacheer
- DT CSS

**如此之多的 CSS 预处理器，那么“我应该选择哪种 CSS 预处理器？”也相应成了最近网上的一大热门话题，各大技术论坛也是争论不休。**

到目前为止，在众多优秀的 CSS 预处理器语言中就属 `Sass`、`LESS` 和 `Stylus` 最优秀。

## 1.2 什么是sass

Sass(Syntactically Awesome StyleSheets)是一种CSS预处理器(`preprocessor`)， 是一款强化 CSS 的辅助工具。可以高效的编写样式，同时实现变量、嵌套、组合、继承等编程语言功能。

> css是一门非程序式语言，没有变量、函数、scope(作用域)等概念。
>
> - CSS需要书写大量看似没有逻辑的代码，冗余度比较高
> - 不方便维护及扩展，难以复用
> - css没有很好的计算能力
> - 非前端工程师往往会因为缺少CSS编写经验而很难写出组织良好且易于维护的CSS代码

CSS 预处理器定义了一种新的语言，其基本思想是，用一种专门的编程语言，为 CSS 增加了一些编程的特性，将 CSS 作为目标生成文件，然后开发者只要使用这种语言进行CSS的编码工作就可以了。

> “用一种专门的编程语言，进行 Web 页面样式设计，再通过编译器转化为正常的 CSS 文件，以供项目使用。”

## 2.关于scss和sass

sass是最早出现的css预处理语言，有着比less更强大的功能。采用Ruby语言编写。

最初版本采用的是严格缩进的风格（不带大括号( {} )和分号( ; )，这一语法也导致一开始，sass并不太为开发者所接受）。

**从 V3 版本开始放弃了缩进式的风格，并完全兼容普通的css代码，也因此从第三代开始，sass也被称为scss。**

> Sass 3 就是 Scss，是Sassy CSS的简写，它是CSS3语法的超集，也就是说所有有效的CSS/CSS3样式也同样适合于Sass。

对现代编程来说，sass就是scss，也因此，sass现在的扩展名为`.scss`（如果是旧版本的sass，可能扩展名会为`.sass`）。

## 3.安装和命令行编译

cmd打开本地命令控制窗口，输入下面字符串然后回车就装好了。

```shell
npm install -g sass
```

**编译.scss文件为.css文件：**

Sass使用.scss作为文件后缀名，不能直接在< link >标签里使用，需要编译为 .css文件。 **演示：**

1. 建一个html文件，随便写个h1标签：

   ![image-20220823140518434](https://i0.hdslb.com/bfs/album/bacbc180d9a88cd06ac988ab8fab52448a35348b.png)

2. 建一个.scss后缀的文件，如input.scss，写点基本样式sass的语法：
   ![image-20220823140550201](https://i0.hdslb.com/bfs/album/7446e8cfea1963feec70f74c98e15a5570f0a8cd.png)

3. 在html文件所在的路径下打开cmd命令控制符，输入：

   ```shell
   //单文件转换命令
   sass input.scss:output.css
   
   // 或 sass input.scss output.css
   ```

   表示把名字为 input.scss 转换成名字为 ouput.css 的文件。
   回车后，接下来发现就得到了css的文件。

   ![image-20220823140645814](https://i0.hdslb.com/bfs/album/cd57c9686d892e6f30e4f15aa3124c150a3038db.png)

> 使用 : 编译输出时，前后不能有空格，即 `:` 前紧跟输入的scss文件，`:` 后紧跟输出的css文件。

> `:` 冒号形式的命令，常用于编译文件夹（中的所有sass文件）的输入输出。

​    css文件内容如下，可以看出转换好了：
​    ![image-20220823140750386](https://i0.hdslb.com/bfs/album/23a4e7317c5dc935065a7d17de1af039ef1fef0a.png)
​    接下来就是老操作了，在HTML里用 < link >标签把css文件引入就行。

4. 但是不可能说写一句.scss语句就转换一次，太麻烦，所以可以自动转换，当我在.scss里写一句，.css就自动生成一句。在cmd输入以下：

   ```bash
   sass --watch input.scss:ouput.css
   ```

   表示监视变化，当input.scss一变化，output.css就变化

空格和冒号对应生成css的两中模式，如果是一对一模式（一个scss生成一个css），使用空格即可；如果是多对多模式，比如一个文件夹生成到另一个文件夹，同时一次性有多个scss文件生成css文件等。

```bash
## 编译 light.scss 和 dark.scss 到 light.css 和 dark.css.
> sass light.scss:light.css dark.scss:dark.css

sass  --watch  fileFolder:outputFolder/css
```

当名字为`fileFolder`这个文件夹里任意一个.scss后缀的文件变化时，就将其编译到名字`outputFolder/css`这个文件夹里面（会自动生成相应的.css文件）

## 4.Sass文件编译快览

### 4.1 命令行编译配置选项

可以通过 `sass -h` 或 `sass --help` 查看详细配置项。

配置选项可以指定编译后的css的排版、是否生成调试map、开启debug等，最常用的是 `--style` 和 `--sourcemap`。

### 4.2 `--watch`监听文件变化

sass使用`--watch`选项，用于监听scss文件的变化。这样，当scss文件内容有改动时，会自动编译为css。

- 监听单个scss文件

```sh
sass --watch .\firstsass.scss .\firstsass1.css
```

- 监听scss文件夹

```sh
sass --watch .\scssdir\ .\cssdir\

sass --watch scssdir:cssdir
```

可以看到，**使用 `:` 可以指定输出的路径（文件夹），否则css将默认生成在源scss文件所在目录中。**

- 结合 `--style` 监听

```sh
sass --watch app/sass:public/stylesheets --style=compressed
```

> **使用压缩（compressed）的样式（style）输出 css 文件**

### 4.3 `--style`指定css的样式

`--style` 的css格式有两种：`expanded`（默认）、`compressed`。

> 旧版本的Ruby实现中有四种样式，还有`nested`、`compact`。

```sh
// 指定编译格式
sass input.scss:output.css --style=expanded
```

比如，一个scss文件如下：

```scss
.box {
  width: 300px;
  height: 400px;
  &-title {
    height: 30px;
    line-height: 30px;
  }
}
```

下面，可以查看`expanded`、`compressed`编译后的css格式。

1. `expanded` ：默认值，未压缩的展开的css格式

每个选择器和声明单独一行。

执行如下命令编译：

```sh
sass styletest.scss styletest.css --style=expanded

## 或 sass styletest.scss styletest.css
```

expanded编译过后的样式，是标准的没有经过任何压缩，全部字符展开的css格式：

```css
.box {
  width: 300px;
  height: 400px;
}
.box-title {
  height: 30px;
  line-height: 30px;
}
```

1. `compressed` 去除所有的空白字符，全部css内容压缩为一行

**生产环境中推荐的css格式。**

执行如下命令编译，将css结果输出在命令行中：

```sh
sass --style=compressed styletest.scss

.box{width:300px;height:400px}.box-title{height:30px;line-height:30px}
```

## 5.使用VSCode插件编译

### 5.1 基本使用

**live sass compiler是VSCode扩展，可以实时地将SASS / SCSS文件编译/转换为CSS文件。**

- 可以自动添加css兼容性前缀，-webkit-，-moz-，-ms，-o-等。
- 可以自定义css文件解析后的代码样式（expanded 展开，compact，compressed 压缩，nested）。
- 可自定义编译/转换后的文件扩展名（.css或.min.css）。

**1.在vscode插件里搜索live sass compiler安装。**

**2.安装后，新建scss文件，在vscode底部状态栏中点击watch sass，此时状态为 Watching ，即可自动解析sass为css文件。**

![image-20220823173100339](https://i0.hdslb.com/bfs/album/f18b5afe44e8a50d00093d9683a9c6965272617b.png)

### 5.2 自定义设置

在使用live sass compiler插件时，并不是所有的默认设置都如我们所愿，那么，我们来看一下如何自定义设置。

**1.编译/转换后的文件格式、扩展名、保存位置**

- 文件格式
  格式可以是expanded，compact，compressed或nested。默认值为 expanded。
- 扩展名
  扩展名可以是.css或.min.css。默认值为.css。
- 保存位置
  默认的转换后的css文件保存在scss文件的同级目录下，但实际，我们通常需要把所有scss文件保存在scss文件夹，而css文件希望保存在css的文件夹，如图所示：
  ![image-20220823173159840](https://i0.hdslb.com/bfs/album/50de6685454beb2c1ae13f5a12f7a70bc59d2c7d.png)

​        我们在配置中如下设置：

```json
"liveSassCompile.settings.formats": [
  {
    "format": "expanded",
    "extensionName": ".css",
    "savePath": "~/../css/"
  }
]
```

savePath即为导出后的文件保存位置。

**2.去掉编译时出现的css.map文件**
在每个文件编译后，默认设置下，会同时出现一个map格式的文件，有时并不需要该文件，那么我们如何去掉呢？

```json
"liveSassCompile.settings.generateMap": false,
```

默认值为true，我们设置为false即可。

**3.设置css兼容性前缀**
live sass compiler可以在编译时自动添加CSS兼容性前缀（-webkit-，-moz-，-ms，-o-等），如下设置：

```json
"liveSassCompile.settings.autoprefix": [
  "> 1%",
  "last 3 versions"
],
```

其中，

- ">1%"是指 通过全球使用情况统计信息选择出的高于1%使用率的浏览器版本。
- "last 3 versions"是指 每个浏览器的最后3个版本。

这里也可以设置为具体的浏览器，如下：

```json
"liveSassCompile.settings.autoprefix": [
  "ie >= 6",  //ie6以上
  "firefox >= 8",
  "chrome >= 24",
  "Opera>=10"
],
```

**总结**

个人配置：

```json
"liveSassCompile.settings.generateMap": true,
"liveSassCompile.settings.autoprefix": [
  "ie >= 6",  //ie6以上
  "firefox >= 8",
  "chrome >= 24",
  "Opera>=10"
],
"liveSassCompile.settings.excludeList": [
  "**/node_modules/**",
  ".vscode/**"
],
"liveSassCompile.settings.formats": [
  {
    "format": "expanded",
    "extensionName": ".css",
    "savePath": "~/../css/"
  },      "liveSassCompile.settings.showOutputWindow": true
]
```

> ```json
> 压缩生成min.css文件
> "liveSassCompile.settings.formats": [
>  // More Complex
>  {
>      "format": "compressed",
>      "extensionName": ".min.css",
>      "savePath": "~/../css/"
>  } 
> ]
> ```

> 感觉总体作用不大，还是结合webpack等工具，实时更新页面内容时，实时编译scss，而不需要单独使用该工具。

## 6.使用webpack编译

在目前主流的前端项目中，一般是使用 [Webpack](https://www.webpackjs.com/loaders/sass-loader/) 来构建我们的前端项目，并且大多数都跑在 Node 环境下。

行如下命令安装 sass-loader ：

```bash
npm install mini-css-extract-plugin -D
npm install css-loader -D
npm install sass-loader --save-dev
```

`webpack.config.js`

```js
module.exports = {
  ...
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          '[MiniCssExtractPlugin.loader',
          // 将 css 文件整合到 js 文件中
          'css-loader',
          // 编译 sass 文件为 css 文件
          'sass-loader'
        ]
      }
    ]
  },
    plugins: [
    // 提取css成单独文件
    new MiniCssExtractPlugin({
      // 定义输出文件名和目录
      filename: "static/css/[name].css",
    }),
    ]
}
```

## 02 【Sass语法介绍-变量】

sass有两种语法格式Sass(早期的缩进格式：Indented Sass)和SCSS(Sassy CSS)

目前最常用的是SCSS，任何css文件将后缀改为scss，都可以直接使用`Sassy CSS`语法编写。

**所有有效的 CSS 也同样都是有效的 SCSS。**

## Sass语法介绍-变量

## 1.前言

Sass 为 CSS 引入了变量这一功能，在实际项目中使用最普遍的除了 Sass 嵌套 就是 Sass 变量了，你可以把 CSS 的某个**属性值**定义为变量，然后在项目中任何需要它的地方来使用它。本节主要讲解 Sass 变量的主要语法：变量的声明、引用、作用域等，同时还会讲解在实际项目中一般是如何来维护 Sass 变量的。

## 2.什么是 Sass 变量 ?

Sass 简介中提到 Sass是 CSS的扩展语言，变量是 CSS的扩展功能。
举个例子，假如我们项目中很多地方要设置一个字体颜色为红色，那么我们完全可以把这个颜色抽出来作为一个**变量**，然后在需要设置字体颜色的地方引用这个变量。这样有一个好处就是，假如产品大大说要修改所有字体颜色的时候，我们就不需要每处都去修改了，直接更改变量的值就 OK 了，我们用 Sass 代码来直观的感受下：

```scss
$variable: red;

.title {
  color: $variable;
}
h1 {
  color: $variable;
}
```

可以看到上面的代码，我们定义了 $variable 这个变量，然后在多个元素的样式中使用它，那么变量的值都可以是什么呢？这个一定要记住，变量的值可以是：

- 字符串
- 数字
- 颜色值
- 布尔值
- 列表
- Null 值

下面我们将详细的讲解 Sass 变量的语法。

## 3.使用变量

sass使用`$`符号来标识变量。

变量的作用就是，让你在整个样式表中保存并重用一些信息或数据。

比如存储颜色(color)、字体集，或任何你想重用的CSS值。

### 3.1 变量声明

和css属性的声明（`property declaration`）很像！

如，声明值为 `#F90` 的变量 `$highlight-color`，字体集变量：

```scss
$highlight-color: #F90;
$font-stack: Helvetica, sans-serif;

body {
    font: 100% $font-stack;
    color: $highlight-color;
}
```

输出结果为：

```css
body {
    font: 100% Helvetica, sans-serif;
    color: #F90;
}
```

**变量有作用域，当变量定义在css规则块内，则该变量只能在此规则块内使用。**

### 3.2 变量引用

凡是css属性的标准值（比如说1px或者bold）可存在的地方，就可以使用变量。

css生成时，变量会被它们的值所替代。

```scss
$color:#A34554;

.box {
  width: 300px;
  height: 400px;
  &-left{
    width: 30%;
    color: $color;
  }
}
```

生成css为：

```css
.box {
    width: 300px;
    height: 400px;
}
.box-left{
    width: 30%;
    color: #A34554;
}
```

声明变量时，变量的值也可以引用其他变量，如下 `$highlight-border` 变量中使用了 `$highlight-color` 变量：

```scss
$highlight-color: #F90;
$highlight-border: 1px solid $highlight-color;
.selected {
  border: $highlight-border;
}

//编译后

.selected {
  border: 1px solid #F90;
}
```

### 3.3 变量名中的中横线(`hyphen`)和下划线(`underscore`)

sass的变量名可以使用中划线和下划线，用中划线声明的变量可以使用下划线的方式引用，反之亦然。

也就是，变量名中的中横线和下划线没有区别，两者互通。

比如下面的示例，中横线的`$link-color`，可以通过下划线的`$link_color`引用。

```scss
$link-color: blue;
a {
  color: $link_color;
}

//编译后

a {
  color: blue;
}
```

> 相对，使用中横线更普遍些！

## 4.变量的作用域

从 Sass 3.4.x 版本开始，Sass 中开始有作用域的概念。和 javascript 中的变量类似，Sass 的变量也是有作用域这个概念的，也有全局作用域和局部作用域之分，我们举个例子来看下：

```scss
$main-color: red;
h1 {
  $main-color: green; // 局部变量
  color:$main-color;
}
h2 {
  color:$main-color;
}
```

我们看到在第一行代码我们声明了一个全局变量 $main-color ，在 h1 的样式中我们又声明了一个和全局变量同名的 $main-color ，在 h1 样式中声明的这个 $main-color 就是局部变量，在 h1 的样式中会引用局部变量而不是全局变量，最终转换为 CSS 的代码如下：

```css
h1 {
  color: green;
}

h2 {
  color: red;
}
```

### 4.1 !global 标识符

上面我们讲解了局部变量和全局变量，那么如果我想用局部变量去改变全局变量呢？ Sass 允许使用 **!global** 标识符来设置局部变量为全局，以此来改变局部变量的作用范围，我们还是用上面的代码，来改变局部变量的作用域为全局：

```scss
$main-color: red;
h1 {
  $main-color: green!global;
  color:$main-color;
}
h2 {
  color:$main-color;
}
```

我们来看下，上面这段转换为 CSS 是这样的：

```css
h1 {
  color: green;
}

h2 {
  color: green;
}
```

可以看到我们覆盖掉了全局变量 $main-color 的值 red ，不过请你记住，在大型项目中尽量不要使用这种方式去改变全局变量，这可能会影响到其他页面的样式改变！

### 4.2 !default标识符

一般来说我们反复的声明一个重名变量，那么最后一个声明的变量值会覆盖上面所有的，比如像下面这样：

```scss
$main-color: red;
$main-color: green;
h1 {
  color:$main-color;
}
```

那么最后编译的时候会使用最后一次声明的变量值，也就是 green ，我们看下编译后的代码：

```css
h1 {
  color: green;
}
```

这样就有一个问题，在实际的项目开发中，假如需要你来写一段公共的 Sass 代码给其他开发者使用，那么如果你的代码中声明了 $main-color 这个变量，那么其他开发者在自己页面也声明了 $main-color 这个变量，并且他是在导入你的这段代码之前声明的，那么他的就会被覆盖掉，这是不行的！

所以这里你需要使用 **!default** 标识符，顾名思义，就是默认值，如果这个变量被声明并赋值了，那么就使用声明的值，否则就使用默认值。我们还是用上面的例子来看下：

```scss
$main-color: red; // 假如这个是其他开发者自己声明的
$main-color: green!default; // 假如这个是你的代码片段声明的
h1 {
  color:$main-color;
}
```

那么在最后编译的时候会使用 red 这个变量值，如果其他开发者没有声明这个变量，就会使用 green 这个变量值，我们来看下编译后的效果：

```css
h1 {
  color: red;
}
```

上面我们演示了 !default 标识符的作用，这个在你使用 Sass 开发一个独立的模块的时候，或者使用 Sass 开发一个库来供他人使用的时候，!default 标识符石非常有用的！

## 5.实战经验

上面我们已经讲解了 Sass 变量的语法和使用，那在企业的实际项目中是怎么应用 Sass 变量的呢？这里以一个使用 webpack 搭建的前端项目为例，一般我们都会抽离出 1～n 个文件来专门声明 Sass 变量(抽离出几个文件视项目大小而定)，如下图所示：

![image-20220823183201014](https://i0.hdslb.com/bfs/album/bd416afc39899b1f9c4cee4f63433c1e3fe1ee6d.png)

如上图所示，我们一般会在 styles 目录下新建一个 variables.scss 文件来管理声明的全局变量，我们接着来看下在这个文件中是怎么写的：

![image-20220823183220638](https://i0.hdslb.com/bfs/album/7dae9a402ae3b6eed35a652b1e68bd04da921fb8.png)

我们可以看到，在这个文件中不但声明了很多变量，还对其做了注释，这样就很易于后期的管理，尤其是在多人开发的大型项目中，对整个项目的样式提取出一些全局变量是很有必要的！

## 6.小结

 Sass 变量的使用及语法，主要包括：

- 变量的声明
- 变量的引用
- 变量的作用域

我们还是通过下图来回忆一下本节的内容：

![image-20220823183316776](https://i0.hdslb.com/bfs/album/1cafa46bfec00abd4c1dfd2d5c86ac8bf960bad8.png)

在实际的项目中，Sass 变量的使用频率也是非常高的，不亚于 Sass 嵌套，所以一定要好好掌握这一节的内容，变量的应用会让你更加顺手的去管理项目中的样式！

## 03 【Sass语法介绍-嵌套】

## 1.前言

在企业的实际项目开发中，Sass 的嵌套可以说是非常非常有用的，它可以让你的 CSS 代码易于管理和维护，看起来也比较清晰，这也是 Sass 中很基础的一个知识点，首先掌握这个至关重要！在此章节我们将学习 Sass 嵌套中的嵌套规则、属性嵌套、父选择器和占位符选择器。Sass 嵌套式一个很基础也很简单的语法，关键在于要多多练习使用！

## 2.什么是嵌套？

在一般编写 CSS 的时候呢，我们一遍一遍的编写相同的选择器去处理深层级的样式，而 Sass 给你一种轻松的方式，你可以在一个样式规则中直接编写另一个样式规则，而不是重复相同的选择器，Sass 将自动组合内外部的选择器。

通俗点说就是：你可以在父选择器的样式中直接编写子元素的样式，同理你可以在一个子元素的样式中再去编写孙元素的样式，可以一层一层的嵌套着去写样式。

一般来说 Sass 中的嵌套应用于以下几种场景：

- 样式的嵌套
- 父选择器
- 占位符选择器
- 属性嵌套

## 3.样式的嵌套

### 3.1 基本使用

**父选择器里可以嵌套子选择器**

如：有以下标签

```html
 <div>
        <ul>
            <li></li>
        </ul>     
    </div>
```

可以直接这样写：

```scss
div{
    height: 100px;
    ul{
        height: 80px;
        li{
           height: 50px;
        }
    }
}
```

相当于：

```scss
div {
  height: 100px;
}
div ul {
  height: 80px;
}
div ul li {
  height: 50px;
}
```

scss嵌套打开(解析)的规则是：**从外层到内层，将嵌套规则块打开，父级的选择器放在子级选择的前面组成一个新的选择器，然后再循环打开内部的嵌套块处理。**

写起来是不是方便很多，但使用嵌套的时候同时需要注意：

嵌套规则很有用很方便，但是你很难想象它实际会生成多少 CSS 语句，嵌套的越深，那么编译为 CSS 的语句就越多，同时消耗的资源也会越多，所以开发者尽量不要嵌套特别深的层级！

### 3.2 嵌套选择器列表 (Selector Lists)

css中，使用`,`分割的群组选择器可以同时应用样式在多个选择器上，如：

```css
h1, h2 {
  margin: 0;
}
```

但是，如果想对一个特定的容器元素内的多个元素，使用群组选择器时，就会有很多重复性工作。

```css
.container h1, .container h2, .container h3 { margin-bottom: .8em }
```

而，sass的嵌套特性，在解开一个内嵌的群组选择器时，会把每一个内嵌选择器正确的结合起来：

```scss
.container{
  h1,h2,h3{
    margin-bottom:.8em;
  }
}
```

sass会组合成 `.container h1`、 `.container h2`、`.container h3` 三者的群组选择器：`.container h1, .container h2, .container h3{ xxx }`。

同样，群组选择器内的嵌套也会以这种方式解析：

```scss
nav, aside {
  a {color: blue}
}

// nav a, aside a {color: blue}
```

### 3.3 嵌套组合符选择器 (Selector Combinators)

这三种选择器必须和其他选择器配合使用。

```css
/* 子组合选择器> */
article > section { border: 1px solid #ccc }

/* 相邻组合选择器+  选择 元素后紧跟的指定元素 */
header + p { font-size: 1.1em }

/* 同层全体组合选择器~，选择所有跟在article后的同层article元素 */
article ~ article { border-top: 1px dashed #ccc }
```

在sass中使用时，可以通过嵌套直接生成正确的结果（位于外层选择器的后面，或内层选择器的前面均可！），而不需要使用`&`。

```scss
article {
  /* 放在 里层选择器前边 */
  ~ article { border-top: 1px dashed #ccc }
  > section { background: #eee }
  /* 放在 外层选择器后边 */
  dl > {
    dt { color: #333 }
    dd { color: #555 }
  }
  nav + & { margin-top: 0 }
}
```

解开后的css为：

```css
article ~ article { border-top: 1px dashed #ccc }
article > footer { background: #eee }
article dl > dt { color: #333 }
article dl > dd { color: #555 }
nav + article { margin-top: 0 }
```

> 最后一句，`nav + &` **使用父选择器&后，原本默认的嵌套规则不再适用，而是直接应用 & 组合的结果**。

## 4.父选择器 (Parent Selector)

### 4.1 基本使用

父选择器是 Sass 中一种特殊的选择器，用于嵌套选择器中，用来引用外部的选择器；通俗的讲就是，当你使用嵌套的时候，可能你会需要使用到嵌套外层的父选择器，比如为一个元素 **添加伪类** (hover、active、before、after) 的时候，可以用 **&** 代表嵌套规则外层的父选择器，我们举个例子来更直观的感受下：

```scss
a {
  &:hover {
    color:red;
  }
  &:active {
    color:blue;
  }
  &:before {
    content:'';
  }
  &:after {
    content:'';
  }
  span {
    &:hover {
      color:green;
    }
  }
}
```

在上面的 Sass 代码中我们编写了几个伪类，在编译的时候 & 将会被替换为嵌套外层的父选择器，有多层嵌套的话将会把父选择器一级一级的传递下去，最终转换为如下的 CSS 代码：

```css
a:hover {
  color: red;
}
a:active {
  color: blue;
}
a:before {
  content: "";
}
a:after {
  content: "";
}
a span:hover {
  color: green;
}
```

### 4.2 添加后缀 (Adding Suffixes)

可以使用 & 向外部选择器添加后缀，举个例子看下：

```scss
.box {
  width:100px;
  &-head {
    width:100%;
    &-title {
      color:red;
    }
  }
  &-body {
    width:100%;
  }
  &-footer {
    width:100%;
  }
}
```

上面这个例子将会转换为如下的 CSS 代码：

```css
.box {
  width: 100px;
}
.box-head {
  width: 100%;
}
.box-head-title {
  color: red;
}
.box-body {
  width: 100%;
}
.box-footer {
  width: 100%;
}
```

## 5.占位符选择器 (Placeholder Selectors)

在 Sass 中这是一种特殊的选择器，称为 "占位符"；它以 % 开头，必须通过 @extend 指令调用，如果单独使用的话是不会编译到 CSS 中的，后面会讲到 @extend 指令，这里我们先举个简单的例子感受一下：

```css
%placeholder {
  width:100px;
  height:100px;
  color:red;
  &:hover {
    color:blue;
  }
}

.btn {
  @extend %placeholder;
  font-size: 18px;
}

.btn2 {
  @extend %placeholder;
  font-size: 16px;
}
```

请记住，占位符必须**通过 @extend 指令调用**才会转换为如下的 CSS 代码：

```css
.btn2, .btn {
  width: 100px;
  height: 100px;
  color: red;
}
.btn2:hover, .btn:hover {
  color: blue;
}

.btn {
  font-size: 18px;
}

.btn2 {
  font-size: 16px;
}
```

## 6.属性嵌套

当我们在写 CSS 样式的时候，有些 CSS 属性具有相同的**命名空间 (namespace)**，比如定义字体样式的属性： font-size ; font-weight ; font-family ; 它们具有相同的命名空间 font 。再比如定义边框样式的属性：border-radius ; border-color ; 它们具有相同的命名空间 border 。当然还有很多其他这种的属性，为了方便管理和避免重复输入，Sass 允许将属性嵌套在命名空间中，同时命名空间也可以具有自己的属性值，我们举例看一下：

> **把属性名从中划线-的地方断开，在该属性后边添加一个冒号:，紧跟一个{ }块，把子属性部分写在这个{ }块中**。这样就可以实现属性的嵌套。

```scss
.box {
  border: {
    radius: 5px;
    color:red;
  }
  font: {
   family:'YaHei';
   size:18px;
   weight:600;
  }
  margin: auto {
    bottom: 10px;
    top: 10px;
  };
}
```

上面这种写法将会被转换为如下的 CSS 代码：

```css
.box {
  border-radius: 5px;
  border-color: red;
  font-family: "YaHei";
  font-size: 18px;
  font-weight: 600;
  margin: auto;
  margin-bottom: 10px;
  margin-top: 10px;
}
```

## 7.小结

本节内容我们主要讲了 Sass 中的嵌套规则，Sass 的嵌套是最基本也是最常用的功能，主要包括如下几个重点：

- 样式的嵌套
  - 基本的样式嵌套
  - 嵌套选择器列表 (Selector Lists)
  - 嵌套组合符选择器 (Selector Combinators)
- 父选择器
  - 添加后缀 (Adding Suffixes)
- 占位符选择器
- 属性嵌套

你来根据下面这张图来复习一下本节的内容：

![image-20220823190110782](https://i0.hdslb.com/bfs/album/55f989eb4bd4508c846a4c1e446c3f8e549631ee.png)

学会了 Sass 中的嵌套规则，快使用这种方式来改造一下你的 CSS 代码吧～

## 04 【Sass语法介绍-运算】

## 1.前言

运算是一种通过已知量可能的组合，获得新的量的行为。Sass 中也为我们提供了各种各样的运算，以便我们更好的处理样式代码。本节我们将学习 Sass 中的数字运算、关系运算、除法运算、颜色运算、字符串运算等等…

## 2.什么是 Sass 运算？

运算从我们小时候就开始学习了，那在 Sass 中的运算是什么呢？
在我们写样式的时候，很多场景我们是需要用到计算的，而一般我们都是通过 javascript 来计算，CSS3 中也提供了用于运算的函数 calc() ，可能在工作中你使用过这个函数用来计算长度值，能用到的地方也非常有限。而在 Sass 中，扩展出了很多计算方法，使得你不止是可以计算长度值，还能做一些关系运算甚至颜色值的运算等等。这使我们可以把运算应用于更多的场景，来解决更复杂的问题，**运算**也是 Sass 的基本特性之一，下面我们一起来学习它～

这部分我们将详细讲解 Sass 运算中的：

- 数字运算
- 圆括号
- 除法运算
- 关系运算
- 颜色运算
- 字符串运算
- 布尔运算

## 3.数字运算

在 Sass 中我们可以对数字类型的值进行加减乘除、取整的运算。在使用运算的过程中，一定要注意**不能使用不兼容的单位！**（在除法运算中除外），什么意思呢？就是说两个数字相加，你不能一个数字单位是 px 另一个数字单位是 em 。还有一点需要注意的是，如果你使用乘法运算，你只需要为其中的一个数值写上单位就好。数值的运算包括加 (+)、减 (-)、乘 (*)、除 (/)、取模 (%)，乘法只需要有一个数值带单位即可，还有就是除法稍有特殊，后面会单独讲解，下面我来写一段代码看一下 Sass 的数字运算：

```scss
p {
  width: 10px + 20px; // 加法运算 (不能使用不兼容的单位)
  height: 500px +50; // 加法运算无单位的数字可以与有单位的一起使用
  max-width: 800px - 100px; // 减法
  max-height: 400px * 2; // 乘法，一个数值带单位即可
  font-size: 30px % 4; // 模运算
}
```

上面这段代码转换成 CSS 为：

```css
p {
  width: 30px;
  height: 550px;
  max-width: 700px;
  max-height: 800px;
  font-size: 2px;
}
```

上面我们对 Sass 数值运算的加减乘和模运算做了演示，在 Sass 的数字运算中还有一个需要特别注意的：**减法运算符两边需要加空格或者都不加空格**，也就是说运算符的两边是**对称**的；为什么要这样呢？因为减法运算符 - 不仅仅表示减法，对于负数或者一元否定则只需要在其前面加空格就好，也就是说这个标识符还可以表示负数和一元否定；我们举个例子来看下：

```scss
p {
  width: 10px - 5px; // 前后都有空格
  width: 10px-5px; // 前后都没有空格
  width:10px -5px; // 只有前面有空格
}
```

上面这段 Sass 代码将会被编译成如下的 CSS :

```css
p {
  width: 5px;
  width: 5px;
  width: 10px -5px;
}
```

我们可以看到上面的代码，如果你只在 - 标识符前面加了空格，其两边不对称是不会对数值进行运算的，所以这个在你写代码的过程中一定要注意！

## 4.除法运算

在讲除法运算之前，一定要先讲一下这个圆括号 () ，圆括号和数学运算中一样，可以来控制运算顺序，这个我们从小就学过，在 Sass 运算中你同样可以使用它来控制运算顺序。

另外就是如果你直使用除法运算符， Sass 会把这当成一个分隔符来处理，但如果你是写在**圆括号内**就可以被当作除法操作处理了，这也是圆括号在 Sass 中的另外一个作用！

在 CSS 中，你要知道 **/ 这个标识符并不是代表除法**的，一些 CSS 的属性值是支持使用 / 来分隔的，所以在 Sass 中直接使用 / 也是会当成分隔符来处理。但是呢，在以下情况下，Sass 将会把 / 视为除法运算：

- 运算符前后的值存储在变量中或由函数返回
- 运算符和前后的值被圆括号所包裹
- 值是另外一个表达式的一部分

下面我们来举例看一下：

```scss
$one: 20px / 2;
$two: 10px;
p {
  width: 200px + 100px / 10; // 值是另外一个运算表达式的一部分
  font-size: $one; // 前后的值存储在变量中或由函数返回
  border-width: $two / 5; // 前后的值存储在变量中或由函数返回
  height: (800px / 2); // 被圆括号所包裹
  max-width: 800px / 2; // 会被当作分隔符来处理，而不是除法运算
}
```

上面这段 Sass 代码我对使用 / 的情况进行了注释，那么它转换为 CSS 代码是：

```css
p {
  width: 210px;
  font-size: 10px;
  border-width: 2px;
  height: 400px;
  max-width: 800px/2;
}
```

上面我们看到了 Sass 除法运算的使用，还有一种情况是：假如我在两个变量之间使用 / 标识符，而且我又不想对这两个变量进行除法运算，我只是想对这两个变量的值进行分隔而已，那该怎么办呢？那我们需要使用**插值** #{} 来将两个变量包裹住即可，关于插值以后的章节会有讲解，这里我们先看一下如何做：

```scss
$one: 20px;
$two: 10;
p {
  width: $one / $two; // 没有使用插值，会对变量值进行除法运算
  height: #{$one} / #{$two}; // 使用插值，不会进行除法运算
}
```

上面这段使用插值的代码将会转换为如下的 CSS 代码：

```css
p {
  width: 2px;
  height: 20px/10;
}
```

好了，除法运算讲完了，通过上面的讲解，是不是感觉 Sass 中的除法运算和你脑海中的还是有差别的，还有一个值得注意的是，如果你使用除法运算前后的值都带有相同的单位，那么最后的结果是一个不带单位的数值。在以后你使用除法运算的时候一定要知道在 Sass 中 **/ 不仅仅代表除法运算**，你要用正确的方式来使用它！

## 5.关系运算

在 Sass 中关系运算来比较数字与数字间的大小，和数字运算一样，关系运算也是不能使用不兼容的单位。关系运算的返回值是布尔值（ true 或 false ），下面我们举个例子看下：

```scss
p {
  width: 10px > 5px; // 大于
  width: 10 < 5px; // 小于
  width: 10 >= 5; // 大于等于
  width: 5 <= 5; // 小于等于
  width: 5 == 5; // 等于
}
```

在上面这个例子中，width 属性的值是没有布尔类型的，我这里这么举例子是为了让大家可以更直观的感受，一般关系运算不会直接应用于样式表中，在 Sass 的函数中应用的比较多。那么上面这段代码转换成 CSS 如下：

```css
p {
  width: true;
  width: false;
  width: true;
  width: true;
  width: true;
}
```

到这里你应该了解 Sass 中的关系运算了，切记我这里的代码举例只是为了让大家直观的感受，实际情况下并不会这么写。另外在 Sass 中使用相等运算符去做比较的时候，对于数字类型，数字具有相同的值和相同的单位，或者在单位之间转换时它们的值相等，则它们是相等的；对于字符串类型，具有相同内容的未加引号和带引号的字符串被认为是相等的；对于颜色类型，具有相同的红色、绿色、蓝色和alpha值，则颜色是相等的；

## 6.颜色运算

颜色要怎么运算呢？下面我们举个例子看一下：

```scss
body {
  color: #020304 + #050203;
}
```

在进行颜色值计算的时候是分段计算的，也就是 02 + 05 、03 + 02 、04 + 03，我们知道十六进制颜色值是分为三组的（两个数字一组），分别代表红、绿、蓝，所以在做运算的时候也是按照这个来运算的，那么上面这段代码转换成 CSS 为：

```css
body {
  color: #070507;
}
```

上面我们讲了颜色运算，但是 Sass 官方给出了明确的说明：**不推荐使用颜色运算，而使用颜色函数**。什么原因呢？因为 Sass 颜色运算所产生出来的色值可能和你感知的并不一致，所以不推荐使用。如果你使用了的话， Sass 也是支持的，但是会给出警告，强烈建议用户避免使用颜色运算！所以我们的教程里只是做了个演示，你可以了解下，但在**实际开发中不推荐使用颜色运算，可以使用颜色函数来实现你的需求！**

## 7.字符串运算

在 Sass 中还允许对字符串进行运算，那对于字符串的运算都有哪些呢？我们先文字描述下：

- 字符串1 + 字符串2：用于连接字符串，结果会返回包含两个字符串的新字符串，如果这其中一个字符串带引号，那么结果也会带引号，否则就不带引号（带引号的字符串要位于 + 号左侧）；
- 字符串1 / 字符串2：返回一个字符串，这里包含字符串 1 和 字符串 2 ，会用 / 分隔；
- 字符串1 - 字符串2：返回一个字符串，这里包含字符串 1 和 字符串 2 ，会用 - 分隔。

下面我们使用代码来举例看下：

```scss
p {
  color: r + 'ed'; // 带引号的在加号右侧，返回一个不带引号的字符串
  color: 'r' + ed; // 带引号的在加号左侧，返回一个带引号的字符串
  color:r + ed; // 返回一个不带引号的字符串
  color: r/ed; // 返回一个使用 / 分隔的字符串
  color: r-ed; // 返回一个使用 - 分隔的字符串
}
```

上面这段代码会转换为如下的 CSS 代码：

```css
p {
  color: red;
  color: "red";
  color: red;
  color: r/ed;
  color: r-ed;
}
```

同样此处举的例子只是为了方便大家感受，实际应用时可能并不会写这么多 color 属性，字符串运算可以让你很方便的拼接一些字符串来使用。

## 8.布尔运算

可能与其他的语言不太相同，Sass 中的布尔运算使用的**不是运算符而是单词**，所以 Sass 中的布尔运算是 not 、and 和 or，not 的意思是取反，and 的意思是两个都为真则返回真反之则返回假，or 的意思是其中一个为真则返回真。看到这你可能懂了，这不就是我们常说的逻辑非、逻辑与和逻辑或嘛，下面我们举个例子来看下：

```scss
{
  a: true and true;
  b: true or false; 
  c: true and false;
  d: not false;
}
```

那么上面这段代码在 Sass 中会转换为：

```scss
{
  a: true;
  b: true;
  c: false;
  d: true;
}
```

布尔运算在实际写样式的时候基本是不会用到的，大家也不会直接在样式中应用，一般布尔运算会应用在 Sass 函数中。

## 9.实战经验

上面讲了这么多，现在该说到实战了。在实际的项目开发中，可能最最常用的就是加减乘除的运算了，有时可能会用到字符串运算。在你写 CSS 的时候，相信你一定知道 rem 布局，这个简直太常用了。我们在做 rem 布局的时候经常会设置一个根元素的字体大小，然后其余所有的像素可能都根据这个去计算，所以为了便于维护，我把这个根元素的大小抽离出来作为一个变量，然后在每个元素的样式中对这个变量进行运算就可以了，同时呢，我们还可以在动画中运用一些运算，我们一起来看下：

```scss
$root: 28;

html {
  font-size: $root+px;
}
p {
  width: (460rem / $root);
  height: (320rem / $root);
}

@keyframes sacle {
  0% {
    width: (800px - $root);
  }
  50% {
    width: 800px - $root * 2;
  }
  100% {
    width: (800px / $root);
  }
}
```

上面这段代码我们动态的计算了 rem 还有动画中的一些需要的运算。而且这样做的好处是我们可以随时按需更改变量而不需要重新把没处样式都再手动进行更改，这样就让项目的代码更具有扩展性并且更易于维护。它将会被转换为如下的 CSS 代码：

```css
html {
  font-size: 28px;
}

p {
  width: 16.4285714286rem;
  height: 11.4285714286rem;
}

@keyframes sacle {
  0% {
    width: 772px;
  }
  50% {
    width: 744px;
  }
  100% {
    width: 28.5714285714px;
  }
}
```

在我们的项目中，我们会把 $root 这个变量抽出来到专门维护变量的文件中，然后供项目中所有的页面做运算使用。

## 10.小结

本节我们讲解了 Sass 中的运算以及运算的应用，我们回忆一下都有哪些运算：

![image-20220823191110579](https://i0.hdslb.com/bfs/album/2236be21044d373d08033c892a9e88dbe2dbd6ed.png)

在编写样式的时候加减乘除运算可能会应用的比较多，而字符串运算、布尔值运算、关系运算在 Sass 函数中应用比较多，后面的章节我们会讲解 Sass 函数，而颜色运算官方已经不推荐大家使用了，取而代之的是颜色函数，所以这里我们也尽量不要使用颜色运算了。

在 CSS 中的某些需要你自己计算的值你可以尝试使用 Sass 运算来提升你的开发效率，而且像一些经常使用到的运算完全可以抽离出来统一维护，这样项目会更加易于维护，管理起来也更清晰！Sass 的运算我个人认为是一个能特别提升开发 CSS 效率的扩展功能。

## 05 【Sass语法介绍-插值】

## 1.前言

在很多编程器语言中都有插值这个概念，在 Sass 样式表的任何地方几乎都可以使用插值，你可以将这些包裹在 #{} 中来使用，所以记住在 Sass 中使用插值的方式是 **#{}** ，本节我们一起来看一下插值在 Sass 中的使用场景以及它的语法

## 2.什么是插值？

插值也就是可以在**特定的区域**插入一段表达式或者插入一个变量，以此来实现内容动态变换的需求。

> 类似 es6 中的插值表达，插值几乎可以用在任何地方。
>
> Sass的插值写法为：`#{$variable_name}`。

应用于以下的一些场景：

- 在选择器中使用
- 在属性名中使用
- 在属性值中使用
- 在注释中使用

这里我们暂且详细讲解这五种使用场景，在 Sass 指令和在 Sass 函数中也是可以使用的，不过我们会在其对应的章节再去做讲解。下面我们先看下这四种使用场景。

## 3.在选择器中使用

我们一般在写页面的时候会为 DOM 元素定义一些 class 或 id ，当我们为其写样式的时候会用不同的选择器，那么在选择器中我们可以湿用插值来拼接一些类名等等，我们举个例子来看下：

```scss
$name: item;
.ul-#{$name} { // 使用插值
  width: 200px;
  .li-#{$name} { // 使用插值
    width: 100%;
  }
}
.box-#{$name} { // 使用插值
  height:100px;
  .#{$name} { // 使用插值
    height:100%;
  }
}
```

可以看到上面的代码，我制定了一个 DOM 层级结构，这种结构也是很常见的，可能很多子元素的类名我们都带有 item ，那么我们就可以把它提取为一个变量然后通过在选择器中应用插值来拼接，这样就很方便我们维护，我们想改子元素类名的时候就不需要逐一的去更改了。上面这段 Sasd 代码转换为 CSS 如下：

```css
.ul-item {
  width: 200px;
}
.ul-item .li-item {
  width: 100%;
}

.box-item {
  height: 100px;
}
.box-item .item {
  height: 100%;
}
```

## 4.在属性名中使用

除了在选择器中使用，在 Sass 属性名上也是可以使用插值的，也就是说你在写 CSS 属性名的时候你也是可以使用插值来拼接的，我们举个例子来看下：

```scss
$name: color;
$position: top;
body {
  background-#{$name}: red;
  border-#{$name}: blue;
  padding-#{$position}: 5px;
  margin-#{$position}: 10px;
  #{$position}: 20px;
}
```

可以看到上面的代码中我对 CSS 的属性名使用了插值，可以用这种方式来拼接属性名，不过在实际项目中不是很常用，一般都是在指令里这么运用，就像在前面语法示例中举的例子一样。上面这段代码转换成 CSS 为：

```css
body {
  background-color: red;
  border-color: blue;
  padding-top: 5px;
  margin-top: 10px;
  top: 20px;
}
```

## 5.在属性值中使用

在属性值中使用插值应该算是比较常用的，插值使你在属性值中不仅可以插入值，还可以插入表达式来计算。除此之外我们在前面的运算章节中，不知道你是否还记得，我们对两个变量使用 / 标识符的时候，如果你不想对这两个变量进行除法运算而是进行分隔，那么就可以**使用插值避免运算**。

可以说插值在属性值中的应用很广泛也很实用，我们来举例看下：

```scss
$one: 20px;
$two: 2;
$family: "UaTy";
div {
  margin: $one / $two; // 除法运算
  margin: #{$one} / #{$two}; // 分隔
  font-family: "MyFo #{$family}"; // 带引号的字符串会转换为不带引号
  width: calc(100% - $one * 2 *$two); // calc函数中内容会被当作字符串处理
  width: calc(100% - #{$one * 2 *$two}); // calc函数中插值的内容会进行运算
}
```

上面的代码中我对每一行都进行了标注，你要仔细看下，在属性值中你可以用这些方式来使用插值，上面的代码将会被转换为如下的 CSS 代码：

```css
div {
  margin: 10px;
  margin: 20px/2;
  font-family: "MyFo UaTy";
  background-image: url(http://xxx.xxx.xxx/a.jpg);
  width: calc(100% - $one * 2 *$two);
  width: calc(100% - 80px);
}
```

在属性值中应用插值的场景还蛮多的，你可以这么来使用以提高你的开发效率～

## 6.在注释中使用

在 Sass 中的注释里也是可以使用插值的，而且如果插值中的内容是一段表达式，将会返回表达式的结果，举个例子来看下：

```scss
/* 在注释中使用插值:
 * 2 + 2 = #{2 + 2} */
/* #{9 + 8 * 2} */
```

我们可以在注释中可以这么使用插值，具体什么时候需要使用看你的需求，你需要知道插值的这种使用方式，上面的代码将会被转换为如下的 CSS 代码：

```css
/* 在注释中使用插值:
 * 2 + 2 = 4 */
/* 25 */
```

## 7.实战经验

在我的实际项目中，在函数和指令中使用插值比较多，在后面函数和指令的章节你会看到插值的更多运用，这里我列出在属性值以及选择器中的使用。在我项目中专门维护变量的文件中，定义了如下的几个变量：

```scss
$primary-dom-name: "box"; // 主要父级元素类名
$primary-child-name: "item"; // 主要子元素类名
$public-top: 10px;
$public-bottom: 10px;
$public-margin: 12px;
$public-padding: 14px;
```

在我项目中的导航样式中我使用了上面的这些变量，代码如下：

```scss
.menu-#{$primary-dom-name} {
  width: 200px;
  height: calc(100% - #{40px - $public-bottom});
  background: #cccccc;
  overflow-x:hidden;
  overflow-y: auto;
  padding: $public-padding;
  .li-#{$primary-child-name} {
    width:100%;
    height: 40px;
    margin-bottom: $public-margin;
    text-align:center;
    line-height:40px;
    color: blue;
    .txt-#{$primary-dom-name} {
      border-bottom: 2px solid #999999;
    }
    &:hover {
      background: #999999;
    }
  }
  .logo-#{$primary-dom-name} {
    width: 50px;
  }
}
```

可以看到，当有一天我们因为业务或者什么其他的需要，我们需要**更换类名或者调整间距**的时候，我们直接更改变量值就 ok 了，这样维护起来方便的多！不过一般在公司的项目中，这种公共的样式代码维护一般是由架构组或者专门的人来维护的，如果你不负责维护这些，你一定不要轻易去改动这些代码！

## 8.小结

本节内容我们讲解了 Sass 中的插值以及它的使用场景，一般我们会在如下的场景使用：

- 在函数和指令中使用
- 在选择器中使用
- 在属性名中使用
- 在属性值中使用
- 在注释中使用

我们通过下图来更深地回忆下本节插值的使用场景：

![image-20220823192137071](https://i0.hdslb.com/bfs/album/d6890af7337563009618bc694bf160e233eb9c7a.png)

总体来说插值在 Sass 中用的还是比较多的，使用也比较简单不是那么复杂，后面在函数或指令中、在你项目的 Sass 中看见 **#{}** 要知道这是 Sass 的插值！

## 06 【Sass语法介绍-函数】

> 这篇文章只更新了颜色函数，由于Sass使用时间过短，其它函数暂时不太会用

## 1.前言

 Sass 中的函数，这在 Sass 中是比较强大的一个功能，同时使用场景和语法也比较多，所以本节内容篇幅较长，但你一定要好好学习， Sass 函数很重要！在 Sass 中函数中几乎可以用到前面你学的所有章节的内容，所以说函数包括万象同时功能也非常强大，本节我们将详细讲解 Sass 中各种函数的功能和用法。

## 2.什么是函数？

函数是一段可以被另外的程序或代码调用的“子程序”，一个函数由称为函数体的一系列代码语句组成，并且函数也可以接收值，在大多数语言中函数都是这样的，Sass 中的函数也是一样。

## 3.Sass 函数简介

Sass 为我们提供了很多内置模块，其中就包含了很多函数（包括一些指令），我们可以通过 @use 去加载它们，然后我们就可以调用了，当然还有一些函数可以直接在 CSS 语句中调用，在 Sass 中常用的函数有：

- 字符串函数
- 数字函数
- 列表函数
- Introspection函数
- 条件函数
- Map 函数
- 颜色函数

上面这些函数为我们提供了强大而丰富的功能来更高效地编写样式，下面我们来详细讲解 Sass 函数。

## 4.颜色函数

Sass 中提供了非常非常多的颜色函数用来处理颜色值，它们很多需要你具有专业的调色及配色知识才能发挥出作用，所以本节我们不讲的那么复杂，本节内容中我们只讲几种常见的、比较简单的颜色函数，其他特别复杂的用于调色的函数在以后你可以再慢慢研究。

### 4.1 用于获取通道色值的函数

Sass 提供了可以获取一个色值中红色通道、绿色通道和蓝色通道色值的函数，它们分别是 red($color) 、green($color) 和 blue($color)。你可能还不太了解这三种通道是什么，不要紧，只要知道这三种函数和它的使用就可以。我们举例看下：

```scss
blue(#BA55D3)  //=> 211
red(#BA55D3)  //=> 186
green(#BA55D3)  //=> 85
```

### 4.2 saturate($color, $amount)

saturate($color, $amount) 函数用于调整 $color 的饱和度，第 1 个参数 $color 是一个颜色值，第 2 个参数是 0% ～ 100% 之间的百分数，其返回值也是一个颜色值。

```scss
saturate(#BA55D3, 20%)  //=> #c740e8
```

### 4.3 scale-color(…)

这是一个非常强大的颜色函数，它**接收很多个参数**，可以**调整一个色值的很多属性**，包括这个颜色的红、绿、蓝通道，以及亮度等等，我们只能举例来直观的看下：

```scss
scale-color(#BA55D3, $red: 15%)  //=> #c455d3  调整红色通道
scale-color(#BA55D3, $blue: 15%)  //=> #ba55da  调整蓝色通道
scale-color(#BA55D3, $lightness: -10%, $saturation: 10%)  //=> #b338d2 调整亮度和饱和度
scale-color(#BA55D3, $alpha: -30%)  //=> rgba(186, 85, 211, 0.7)  调整不透明度
```

通过上面的例子可以看到颜色函数提供了非常强大的用于调色的函数，驾驭它的前提是你要有非常丰富的调色知识以及一定的美术基础。在实际的项目中我们非常少的用到颜色函数，因为一般都是由公司的 UI 设计师来进行调色，所以作为入门教程，你只需要了解 Sass 中的颜色函数就好。

## 5. 小结

本节内容我们讲了 Sass 提供的各种各样的函数，基本覆盖到了比较常用的、常见的函数，它们分别是：

- 字符串函数
- 数字函数
- 列表函数
- Introspection函数
- 条件函数
- Map 函数
- 颜色函数

## 07 【Sass语法介绍-控制指令】

## 1.前言

Sass 为我们提供了很多控制指令，使得我们可以更高效的来控制样式的输出，或者在函数中进行逻辑控制。本节内容我们就来讲解什么是 Sass 控制指令？它能用来做什么？它将使你更方便的编写 Sass 。

## 2.什么是 Sass 控制指令

控制指令，故名思义它是通过条件来控制某些逻辑的，提到条件你首先肯定想到了 if ，没错这是 Sass 控制指令的一种，除了这个还有循环，所以 Sass 一共为我们提供了 4 种控制指令，它们分别是：

- @if 指令
- @each 指令
- @for 指令
- @while 指令

如果你熟悉其他的编程语言或者你熟悉 javascript ，看见上面这四种是不是很熟悉，它们在 Sass 中也是用来做条件判断和循环的，下面我们就看一下它们如何在 Sass 中应用。

## 3.@if 指令

### 3.1 基本使用

@if 指令是在 @if 后跟一个表达式，然后再接 {} ，如果表达式为 true 则执行 {} 里的代码逻辑，写为 @if { … } ，我们来举例看下：

```scss
@mixin avatar($size, $circle: false) {
  height: $size;

  @if $circle {
    width: $size / 2;
  }
}

.square { @include avatar(100px, $circle: true); }
```

上面我们在 @mixin 中使用了 @if 指令，**如果 @if 后面的表达式或变量为 true ，它将执行 {} 里的代码**。上面的代码在 .square 的样式中使用了 @mixin ，它将会生成如下的 CSS 代码：

```css
.square {
  height: 100px;
  width: 50px;
}
```

从上面两段代码的对比中我们看到，我们为 @mixin 传入了 $size 并且 @if 后面的变量为 true，所以它执行了 width: $size / 2 生成的 CSS 就是 width: 50px ，在这里你要重点关注 @if 指令的用法，关于 @mixin 在后面的章节我们会详细讲到，这里你可以先认识下就好。

### 3.2 @else 和 @else if 指令

如果你了解任何的编程语言，那么你一定知道有 if 就会有 else 和 else if ，**如果 @if 后面的表达式为 false ，就会判断 @else if 后面的表达式，如果还是 false 则会继续往后走，如果所有表达式都为 false 则最终会执行 @else 后面的 {} 中的代码逻辑**。

当然 @else if 和 @else是在你需要多条逻辑判断的时候写的，也可以不写，就像上面的代码一样。说了这么多可能你不是很理解，一码胜千言，我们直接将上面的代码段改造下，实际体会一下：

```scss
@mixin avatar($size, $circle: 1) {
  height: $size;

  @if $circle == 1 {
    width: $size / 2;
  } @else if $circle == 2 {
    width: $size / 5;
  } @else {
    width: $size;
  }
}


.a { @include avatar(100px); }
.b { @include avatar(100px, $circle: 2); }
.c { @include avatar(100px, $circle: 3); }
```

上面的代码中我有 3 条判断逻辑对应不同的代码块，然后我在 .a .b .c 中分别调用 @mixin 并传入不同的参数，转换后的 CSS 代码如下：

```css
.a {
  height: 100px;
  width: 50px;
}

.b {
  height: 100px;
  width: 20px;
}

.c {
  height: 100px;
  width: 100px;
}
```

通过上面的讲解可以看到 @if 指令还是非常实用的，在你写函数的时候很多地方会用到，所以这块要好好记住。

## 4.@each 指令

@each 指令一般用来循环一个列表或 Map ，它的写法是这样的 @each in { … } ，这其中 expression 表达式返回一个列表或者直接就是一个列表，variable 是列表中的每一项，{} 中是每次循环都会执行的代码，我们举例来看下:

```scss
$borders: 2px, 3px, 5px;

@each $bor in $borders {
  .border-#{$bor} {
    border:$bor solid;
  }
}
```

上面的代码中我们通过 @each 循环一个 $borders 列表，来生成不同的 class 的 border 样式，上面这段代码转换为 CSS 如下：

```css
.border-2px {
  border: 2px solid;
}

.border-3px {
  border: 3px solid;
}

.border-5px {
  border: 5px solid;
}
```

可以看到上面的写法是不是很方便，这样就直接生成了不用的类名并且对应不同的样式，在 Sass 编程中 @each 也是很常用的指令，所以这个你是一定要会用的，尤其是在写函数的时候！

## 5.@for 指令

@for 指令很有意思，它可以**设定一个范围然后在这个范围内循环**，比如说在 1 ～ 5 这个范围内，或者在 3 ~ 6 这个范围内等等。

它有两种写法 @for from to { … } 或者 @for from through { … }，这两种写法中variable 都是每次循环时候的数值，start 都表示开始的边界，end 都表示结束的边界；

这两种写法不同的是 **through 包含 start 与 en** ，而 **to 包含 start 但不包含 end**。文字描述难免有些抽象，我们直接举例看下：

```scss
$base-color: #036;

// 范围是 1 ~ 3
@for $i from 1 through 3 {
  ul:nth-child(3n + #{$i}) {
    background-color: lighten($base-color, $i * 5%);
  }
}
// 范围是 4 ~ 6
@for $i from 4 through 6 {
  ul:nth-child(3n + #{$i}) {
    background-color: lighten($base-color, $i * 5%);
  }
}
```

上面的代码我们用的是 **through** 写法，分别写了 1 ~ 3 范围的循环和 4 ~ 6范围的循环，也就是说循环体中的代码块会分别被计算 3 次，它最终会转换为如下的 CSS 代码：

```css
// 1 ~ 3 范围生成的
ul:nth-child(3n+1) {
  background-color: #004080;
}

ul:nth-child(3n+2) {
  background-color: #004d99;
}

ul:nth-child(3n+3) {
  background-color: #0059b3;
}
// 4 ~ 6 范围生成的
ul:nth-child(3n+4) {
  background-color: #0066cc;
}

ul:nth-child(3n+5) {
  background-color: #0073e6;
}

ul:nth-child(3n+6) {
  background-color: #0080ff;
}
```

看到转换后的 CSS 是不是感觉使用 @for 指令写起来简直飞快，下面我们在使用 **to** 写法来举个例子看下：

```scss
$base-color: #036;

@for $i from 1 to 3 {
  ul:nth-child(3n + #{$i}) {
    background-color: lighten($base-color, $i * 5%);
  }
}
```

上面使用 **to** 写法的代码将会转换为如下的 CSS 代码：

```css
ul:nth-child(3n+1) {
  background-color: #004080;
}

ul:nth-child(3n+2) {
  background-color: #004d99;
}
```

好了，通过上面的代码可以看出使用 to 写法是不包含 end 边界的。从上面我们举的两个例子不难看出，@for 指令可以极大的简化我们编写冗余繁琐的 CSS ，你自己需要多尝试这个指令来实际感受下。

## 6.@while 指令

@while 指令很像 javascript 中的 while 循环，在 Sass 中 @while 指令的写法是 @while { … } ，当表达式 expression 结果为 true 时就执行 {} 里的代码，直到表达式 expression 结果为 false 。我们举例来看下：

```scss
$num: 4;
@while $num >= 1 {
  .box-#{$num} {
    font-weight: 100 * $num;
  }
  $num: $num - 1;
}
```

从上面的代码可以看出我设定了一个变量 $num 为 4 ，然后每次循环将这个变量 -1 ，知道 $num < 1 的时候会停止循环，也就是说会循环 4 次，我们看下下面转换为 CSS 的代码：

```css
.box-4 {
  font-weight: 400;
}

.box-3 {
  font-weight: 300;
}

.box-2 {
  font-weight: 200;
}

.box-1 {
  font-weight: 100;
}
```

@while 指令可以让你很方便的控制循环次数，在实际应用中也是非常有用的！

## 7.实战经验

在实际项目中应用 Sass 控制指令的地方还是蛮多的，这里我说一个在我的项目中的应用。我的项目中有个需求是将视口分为 12 等份，然后根据不同的 class 类名来为其宽度设置不同的百分比，这很像其他 UI 库中的栅格系统，我们是这样在项目中实现的：

```scss
@for $i from 0 through 12 {
  .width-#{$i} {
    width: (1 / 12 * $i) * 100%;
  }
}
```

上面这几行代码就实现了我的需求，我需要有 .width-0 到 .width-12 的选择器，同时它们的样式分别是对应的百分比，我直接做了一个从 0 到 12 的循环，然后在其循环体中动态生成 class 和样式，它转换为 CSS 代码如下：

```css
.width-0 {
  width: 0%;
}

.width-1 {
  width: 8.3333333333%;
}

.width-2 {
  width: 16.6666666667%;
}

.width-3 {
  width: 25%;
}

.width-4 {
  width: 33.3333333333%;
}

.width-5 {
  width: 41.6666666667%;
}

.width-6 {
  width: 50%;
}

.width-7 {
  width: 58.3333333333%;
}

.width-8 {
  width: 66.6666666667%;
}

.width-9 {
  width: 75%;
}

.width-10 {
  width: 83.3333333333%;
}

.width-11 {
  width: 91.6666666667%;
}

.width-12 {
  width: 100%;
}
```

从上面这个示例中是不是可以看出使用控制指令来实现一些需求很方便，这样可以省去你编写大量 CSS 代码的工作，而且计算宽度也仅仅需要设置好公式即可，在我们的项目中有很多类似的用法，至于 @if 指令一般会在函数中做判断来使用。

## 8.小结

本节内容我们讲解了 Sass 控制指令，它是非常常用的，在 Sass 中有四种控制指令，它们分别是：

- @if 指令
- @each 指令
- @for 指令
- @while 指令

趁热打铁，快来回忆一下这几个指令都是干嘛的：

![image-20220824230811481](https://i0.hdslb.com/bfs/album/ab11f4161886f8473f13b11d13628494a01a6e13.png)

记住它们并多加练习，控制指令是非常好用的，它可以让你避免编写过多冗余的 CSS 代码，在项目中也很方便维护。控制指令是在 Sass 进阶中必不可少的知识！

## 08 【Sass语法介绍-混合指令】

## 1.前言

混合指令在 Sass 中也是一个比较常用的指令，在前面我们讲解的内容中有编写过混合指令 @mixin ，本节我们将详细讲解混合指令 @mixin 的语法包括定义混合指令和引用混合指令等等，混合指令同样非常好用，我们一起来学习它吧。

## 2.什么是 Sass 混合指令

混合指令的出现使你可以定义在样式表中重复使用的样式，这可以使你免去编写过多重复的样式，而且在混合指令 @mixin 中你也可以做一些逻辑处理。混合指令是一个很好用的指令，它将帮你更合理的维护样式代码，学会这种方式写起样式来也很便利，下面我们开始详细的讲解它。

## 3.语法详情

混合指令的写法是 @mixin name { … } 或者 @mixin name(<arguments…>) { … }，第一种写法是不传参的指令，第二种写法是传参的指令，我们先来举个简单的例子看下混合指令的样子：

```scss
@mixin border {
  border: {
    width: 1px;
    color: #cccccc;
    style: solid;
  }
}
```

上面我写的这个混合指令是一个不需要传参的，那么它怎么用呢？转换为 CSS 后是什么呢？下面我们从混合指令的定义开始逐一讲解。

## 4.定义和引用混合指令

混合指令的定义是**在 @mixin 后跟指令名字和 {}** ，在 {} 中你可以写一些样式，同时也可以用一些函数或者前面章节讲的控制指令，现在我们定义一个不接收参数的混合指令和一个接收参数的混合指令：

```scss
// 不接收参数的混合指令
@mixin border {
  border: {
    width: 1px;
    color: #cccccc;
    style: solid;
  }
}
// 接收参数的混合指令
@mixin font($size: 12px, $weight: 100) {
  font: {
    family: "Myfont";
    weight: $weight;
    size: $size;
  }
}
.box {
  // 引用混合指令
  @include border;
}
.item {
  // 引用混合指令并传参
  @include font(20px, 500);
}
```

上面的代码中我们分别定义了两个简单的混合指令，然后在 .box 和 .item 的样式中**通过 @include 引用混合指令**，在 @include 后直接跟混合指令的名称就可以引用了，传参如上面代码所示，那么上面这段代码将会转换为如下的 CSS 代码：

```css
.box {
  border-width: 1px;
  border-color: #cccccc;
  border-style: solid;
}

.item {
  font-family: "Myfont";
  font-weight: 500;
  font-size: 20px;
}
```

看到转换后的 CSS 代码是不是感觉混合指令很强大，我们把指令写好后，可以在任何需要它的地方来使用，而且我们只需要传参就可以生成各种各样的样式代码。还有一点需要注意的是，在 Sass 中，@minxin 后面的名字将连字符和下划线视为是相同的！

## 5.混合指令的参数

在上面的代码中我们已经知道了混合指令是可以传参数的，参数是在指令名后面由括号括起来的变量名列表，混合指令每次调用都可以操作这些传入的参数。

这些参数只要**声明了就必须传入**，如果你想让某个参数成为**可选的**，你需要**为这个参数赋一个默认值**，赋默认值的方法就像变量声明赋值一样，直接在变量名后面加冒号然后跟默认值。我们举例看下：

```scss
// 没有赋默认值的参数
@mixin font-one($size, $weight) {
  font: {
    family: "Myfont";
    weight: $weight;
    size: $size;
  }
}
// 赋默认值的参数
@mixin font($size: 12px, $weight: 100) {
  font: {
    family: "Myfont";
    weight: $weight;
    size: $size;
  }
}
```

从上面的代码中可以看出是否赋默认值的区别，默认值还可以引用前面的参数。除了默认值，在传入参数的时候我们还可以**按名称传入参数**，什么意思呢，我们直接举例看下：

```scss
@mixin font($size: 12px, $weight: 100) {
  font: {
    family: "Myfont";
    weight: $weight;
    size: $size;
  }
}
.item {
  // 按名称传入参数
  @include font-one(20px, $weight: 800);
}
```

上面这段代码将会转换为如下的 CSS 代码：

```css
.item {
  font-family: "Myfont";
  font-weight: 800;
  font-size: 20px;
}
```

按名称传入参数使我们可以更好的控制混合指令接收的参数，但这个方法还是尽量少用，因为参数名有时在多人开发的时候可能不是一成不变的！

有时候 @mixin 接收的参数个数你可能不不清楚有多少个，那么你可以**将最后一个参数以 … 结尾**，那么所有额外的参数都将传给该参数，然后在 @mixin 里来获取所有参数，我们举个例子直观的感受下：

```scss
@mixin fonts($s, $familys...) {
  font:{
    size: $s;
    family: $familys;
  }
}
.p {
  @include fonts(12px, "one", "two", "three")
}
```

上面这段代码转换为 CSS 代码如下：

```css
.p {
  font-size: 12px;
  font-family: "one", "two", "three";
}
```

除此之外，@mixin 还可以通过参数列表接收任意参数，然后通过 meta.keywords() 这个函数来使用传入的这些参数，我们下面举例看下：

```scss
@mixin args($args...) {

  @each $key, $val in keywords($args) {
    font: $key $val;
  }
}

.p {
  @include args($one: 1, $two: 2, $three: 3)
}
```

上面这个例子是为了让你更直观的看到这种传参方式，实际样式中不会这么写，上面这段代码我们通过循环 keywords() 函数返回的值来使用传入的参数，它将会被转化成如下的 CSS 代码：

```css
.p {
  font: one 1;
  font: two 2;
  font: three 3;
}
```

混合指令在传参这块还是有挺多方式的，你可以根据实际的需求来自行选择上面的传参方式，这使得我们用起它来很灵活。

## 6.实战经验

我们的项目是一个 Vue 单页应用，在我们的实际项目中有专门的 mixin.scss 文件来管理全局的 @mixin 指令，这里我从中截取出一部分来展示下：

```scss
@mixin border ($width: 1px, $color: #cccccc, $style: solid) {
  border: {
    width: $width;
    color: $color;
    style: $style;
  }
}
@mixin font($size: 12px, $weight: 100, $familys...) {
  $family: "Times";
  @if length($familys) > 0 {
    $family: $familys;
  }
  font: {
    size:$size;
    weight: $weight;
    family: $family;
  }
}

@mixin btn($type: "main") {
  border-radius: 4px;
  @if $type == "small" {
    width: 60px;
    height: 20px;
    background-color: #e5e5e5;
    color: #ffffff;
    &:hover {
      background-color: #4AA1FF;
    }
  } @else if $type == "disable" {
    width: 80px;
    height: 30px;
    background-color: #CCCCCC;
    color: #ffffff;
  } @else {
    width: 80px;
    height: 30px;
    background-color: #e5e5e5;
    color: #ffffff;
    &:hover {
      background-color: #4AA1FF;
    }
  }
}
```

从上面的代码可以看出，我定义的全局的 @mixin 有关于 border 样式的，有关于 font 样式的，还有一个我们自己封装的 button 样式，这样在项目的任何需要写这些样式的地方直接应用这些指令就可以了，而不需要编写大量的 CSS 样式，下面我截取一部分在某些页面中使用这些指令的代码：

```scss
// 使用 border 混合指令
.normal-border {
  @include border;
}
.error-border {
  @include border(2px, red, solid);
}
// 使用 font 混合指令
.main {
  @include font(24px);
  .item {
    @include font(16px, 600, "serif", "Roman", "Times");
  }
}
//  使用 button 混合指令
.btn {
  &-main {
    @include btn(); 
  }
  &-disable{
    @include btn("disable");
  }
  &-small{
    @include btn("small");
  }
}
```

上面的代码转换为 CSS 会非常的长，这里我就不贴出转换后的 CSS 代码了。

你可以仔细看下这些代码，看看是怎么封装和使用的，在公司的实际项目中，如果使用了 Sass ，你一定会看到类似的这些封装，当然你可能也会自己封装这些；你可以对照这上面两段定义混合指令和使用混合指令的代码来复习本节的内容，然后自己尝试这将它转换为 CSS 以便更好的理解！

## 7.小结

本节内容我们讲了 Sass 混合指令，这也是一个好用且常用的指令。你要牢牢记住如何**定义混合指令**，如何**引用混合指令**以及如何**处理混合指令的参数**！我们用一张图来演示下：

![image-20220824232439812](https://i0.hdslb.com/bfs/album/b78fed50aac5772593e3d85f1f28d44a3e96784b.png)

一般开始频繁使用指令的时候就说明你已经开始进入 Sass 的进阶水平了，你可以用混合指令为自己或者为其他人封装一些通用的样式，不但可以让自己开发样式高效，还可以减少其他人的工作量，所以学会 Sass 指令很重要！

## 09 【Sass语法介绍-函数指令】

## 1.前言

在之前的章节我们学习过 Sass 提供的各种各样的函数，那么如果我们需要自定定义函数来使用就需要用到**函数指令 @function**了。本节内容我们来学习 Sass 函数指令的语法和使用，在 Sass 中自定义函数是必须要掌握的！

## 2.什么是 Sass 函数指令

函数指令也叫自定义函数让你可以容易的处理各种逻辑和定义复杂的操作，而且你可以在任何需要的地方复用函数，这使得我们可以抽离出来一些常见的公式或者逻辑，我们先来看下它长什么样，代码如下：

```scss
// 定义函数
@function a() {
  @return "a"
}
// 使用函数
.p {
  font: a();
}
```

回忆一下，上面的代码在之前的章节中也出现过，这就是函数指令，定义好一个函数后我们就可以使用了，下面我们开始详细讲解函数指令。

函数指令是**通过 @function 来定义**，它的写法是 @function name（arguments…）{}，@function 后面跟函数名，然后是一个 () ，() 里面是这个函数接收的参数，可以接收也可以不接收，最后是 {} 中放的是你的逻辑代码。函数名**将连字符和下划线视为相同**，也就是说 a_b 和 a-b 是同一个函数。我们举例看下：

```scss
@function fun-name() {
      // 在这里编写逻辑代码
}
```

## 3.函数的参数

函数指令的参数和之前我们讲的混合指令的参数很像，函数如果接收参数那么使用的时候就**必须传入这些参数**，但是你**可以定义默认值使参数成为可选的**，我们举例来看下：

```scss
// 有默认值的参数
@function a($arg: 1) {
  @return $arg;
}
// 无默认值的参数
@function b($arg) {
  @return $arg;
}
.p {
  font: a();
  font: b(4);
}
```

上面的代码转换为 CSS 如下：

```css
.p {
  font: 1;
  font: 4;
}
```

要注意的是，为参数设置的默认值，也可以引用前面的参数或者是任何表达式。

## 4.接收任意数量的参数

和前面章节讲的 @mixin 类似，函数指令也**可以接收任意数量的参数**，同样是将最后一个参数以 … 结尾，我们来举例看下：

```scss
@function fonts($familys...) {
  @return  $familys;
}
.p {
  font: fonts("one", "two", "three")
}
```

上面这段代码转换为 CSS 如下：

```css
.p {
  font: "one", "two", "three";
}
```

同样的函数的参数也可以接收任意的参数列表，就像之前在混合指令章节讲的一样，可以用过 meta.keywords() 来获取和使用这些参数，不过这个我们一般不是很常用。

## 5.@return

在前面的代码中，可以看到很多次我们在函数指令中使用了 @return。@return 指令表示作为函数调用结果的值，说的简单点就是这个函数的返回值，这和在 javascript 的函数中使用 return 很类似。

在 Sass 中 **@return 指令只能在 @function** 中使用，并且**每个 @function 都必须以 @return 结尾！** 在 @function 的逻辑代码中，如遇到 @return 会立即结束函数并返回其结果，这在一些 @if 判断的情况下很有用。我们举例看下：

```scss
@function a($str: "a") {
  @if $str == "a" {
    @return 10px;
  } @else if $str == "b" {
    @return 20px;
  } @else if $str == "c" {
    @return 30px;
  } @else {
    @return 40px;
  }
}

p {
  padding: a();
  width: a("f");
  height: a("c");
  margin: a("b");
}
```

从上面的代码中我们可以可看到，在函数 a 中，我们根据不同的参数返回不同的结果，然后在 p 的样式中通过传入不同的参数来获取不同的结果。上面这段代码会转换为如下的 CSS 代码：

```css
p {
  padding: 10px;
  width: 40px;
  height: 30px;
  margin: 20px;
}
```

## 6.实战经验

在实际的项目中使用函数指令是必不可少的，我们会定义很多函数来帮助我们解决逻辑问题，一般我们会独立抽出来一个 function.scss 文件来管理整个项目中的函数指令，一般这些函数都是根据你的项目特性以及样式需要封装出来的。

由于函数一般是和你的业务强相关的，一般就是为自己的项目定义一些工具和方法，这里我就不贴出代码示例了。在实际的应用中，这个函数指令就是需要你“随机应变”，按需封装和使用！

## 7.小结

本节内容我们讲了 Sass 函数指令 @function ，还有函数指令的用法和参数。我们可以使用函数来编写各种各样我们自己的函数。函数指令和前面的混合指令很类似，我们通过下图来回一下函数指令的用法：

![image-20220825225712402](https://i0.hdslb.com/bfs/album/ab773841b5921e39b687a9c007eea2c52641e31b.png)

除此之外 Sass 提供了大量的内置函数，这些我们在前面的章节 Sass 函数中都做了讲解，你可以借用这些函数再配合你自己定义的函数指令，来实现各种复杂的逻辑和强大的效果。

## 10 【Sass语法介绍-继承】

## 1.前言

在我们编写样式的时候，很多情况下我们几个不同的类会有相同的样式代码，同时这几个类又有其自己的样式代码，这使我们就可以通过 Sass 提供的**继承** @extend 来实现。本节内容我们将讲解 Sass 继承的语法以及继承的多重延伸等等，在 Sass 中继承也是非常好用的功能之一，所以你要重点熟悉 @extend 的用法，下面我们一起来学习它。

## 2.什么是 Sass 继承

继承，我们也叫做代码重用，在 Sass 中支持对样式进行继承。

首先我们看一段代码，看看在 Sass 中的继承是长什么样子的：

```scss
.a {
  width: 10px;
}

.b {
  @extend .a;
  height: 10px;
  color: red;
}
```

从上面的代码中可以看见，我在 .b 的样式中使用 @extend 继承了 .a 的样式，那么这段代码转换为 CSS 如下：

```css
.a, .b {
  width: 10px;
}

.b {
  height: 10px;
  color: red;
}
```

上面的代码中我们看到了 Sass 中继承的样子，它的写法是 @extend selector 也就是**在 @extend 后面跟一个选择器**，表示**继承这个选择器的样式**，下面我们详细讲解下它的语法。

@extend 会包含包含扩展的样式规则，同时在 Sass 中它会**确保复杂的选择器是交错的**，这样无论你的 DOM 元素是如何嵌套的它都能保证正常工作。它还可以**根据实际情况将选择器组合在一起**，可以**更智能的处理选择器以及包含伪类的选择器**。我们举个稍复杂点的例子来看下：

```scss
.a {
  width: 100px;
  height: 200px;
  background-color: orange;
  &:hover {
    background-color: green;
  }
  .link {
    width: 50%;
    height: 50%;
    color: red;
    &:active {
      color: blue;
    }
    i {
      font-size: 18px;
      font-weight: 600;
    }
  }
}

.b {
  @extend .a;
  width: 400px;
  height: 200px;
}
```

我们仔细解读上面的代码，我为 .a 写了一大堆的样式，包括它的子元素以及它的伪类；而 .b 下面有同样的子元素，同样的伪类别，只是宽高不同，那么我直接在 .b 中继承 .a 的样式，它会转换为什么样子的代码呢？它转换为 CSS 的代码如下：

```css
.a, .b {
  width: 100px;
  height: 200px;
  background-color: orange;
}
.a:hover, .b:hover {
  background-color: green;
}
.a .link, .b .link {
  width: 50%;
  height: 50%;
  color: red;
}
.a .link:active, .b .link:active {
  color: blue;
}
.a .link i, .b .link i {
  font-size: 18px;
  font-weight: 600;
}

.b {
  width: 400px;
  height: 200px;
}
```

从上面转换成 CSS 的代码我们可以看出，引用相同样式的部分都以逗号做了分隔，在 CSS 中使用逗号的含义你应该很了解，继承 @extend 就可以为你自动创建这些组合，提取相同的样式，所以如果有选择器使用了相同的样式，请使用继承的方式来实现！

## 3.占位符选择器

在 Sass 中有一种特殊的选择器叫占位符选择器，它的写法像我们写的 id 或 class 选择器一样，只不过**占位符选择器是以 % 开头的**。在 Sass 中你单独使用这种选择器是不会转换为 CSS 的，只能是**通过 @extend 来使用**。

比如说有时候你想编写一个可扩展的样式，然后在各处继承它，你就可以使用占位符选择器，我们结合实际的例子来看下：

```scss
%placeholder {
  box-sizing: border-box;
  border-top: 1px #666666 solid;
  width: 100%;

  &:hover { border: 2px #999999 solid; }
  &:active {color: blue;}
}

.buttons {
  @extend %placeholder;
  color: #4285f4;
}
.btn {
  @extend %placeholder;
}
```

从上面的代码中看到，我通过占位符选择器 %placeholder 定义了一堆样式，然后在其他的样式表中继承它，这个告诉你一个简单的理解方式，占位符选择器你就理解为一个虚拟的选择器，这个名是不会编译到 CSS 中的，最终编译出的选择器名是根据你使用继承的选择器名来定的。上面这段代码会转化为如下的 CSS 代码：

```css
.btn, .buttons {
  box-sizing: border-box;
  border-top: 1px #666666 solid;
  width: 100%;
}
.btn:hover, .buttons:hover {
  border: 2px solid;
}
.btn:active, .buttons:active {
  color: blue;
}

.buttons {
  color: #4285f4;
}
```

从上面的代码中可以看到，编译成 CSS 后 %placeholder 这个选择器不见了，但它的样式被继承了，这就是**占位符选择器结合继承 @extend 的用法**。

## 4.在 @media 中使用 @extend

如果你需要在 @media 中使用继承，一定要注意使用方式！如果你**在外部定义样式**，然后**在 @media 内部继承外部的样式**，Sass 是**会报错**的。我们首先举个**错误的例子**看下：

```scss
.error {
  border: 1px red solid;
  background-color: red;
}

@media screen and (max-width: 600px) {
  .btn-error {
    @extend .error;
  }
}
```

如上面的代码所示，这样的写法在 Sass 中是会报错的，也不会编译成功。 Sass 规定继承只能在给定的媒体上下文中使用，所以**正确的写法**如下：

```scss
@media screen and (max-width: 600px) {
  .error {
    border: 1px red solid;
    background-color: red;
  }
  .btn-error {
    @extend .error;
  }
}
```

上面这个正确的写法将会被编译为如下的 CSS 代码：

```css
@media screen and (max-width: 600px) {
  .error, .btn-error {
    border: 1px red solid;
    background-color: red;
  }
}
```

> 在 @media 中使用继承，一定要注意写法！

## 5.实战经验

在实际的项目中，继承是非常好用的一个功能，不过这个就需要你自己根据需求来判断是否使用，因地制宜，而且尽量把公共的样式提取到一个单独的文件来维护。

还有一个需要注意的是除了继承 @mixin 也是可以封装和复用样式的，那么什么时候使用 @mixin 什么时候使用 @extend 呢？假如你需要使用参数来配置样式的时候，也就是**需要传参数**的时候毫无疑问**使用 @mixin** 。但如果你只是需要复用一部分样式那么还是使用继承会更方便些。

## 6.小结

![image-20220825230233770](https://i0.hdslb.com/bfs/album/cfde0cfe18268eff4c308f08af6ee83d2823bab1.png)

本节内容我们讲解了 Sass 中的继承 @extend 。我们可以使用继承很方便的**复用样式代码**，同时我们也可以使用**占位选择器**配合 @extend 来扩展和复用样式代码，还有一定要**注意在 @media 中使用继承的方式**。记住 Sass 中的 @extend ，它可以让你的样式代码写起来更高效！

## 11【Sass语法介绍-导入】

## 1.前言

在 CSS 中我们可以通过 @import 来导入一个样式文件，Sass 扩展了 CSS 的 @import 规则，使得可以导入 CSS 后缀的样式文件和 Scss 后缀的样式文件，并且提供了对 mixin 、函数和变量的访问。

与 CSS 的 @import 不同的是， CSS 使用 @import 导入文件是在页面渲染的时候发起多个 http 请求来获取文件内容，而 Sass 的导入 @import 是在编译时获取文件内容导入的。

## 2.语法详情

Sass 的导入和 CSS 中的导入语法类似，只不过在 Sass 中**可以导入用逗号分隔的多个文件**， 我们举个例子看下：

```scss
@import 'a.scss', 'b.scss';
```

上面的代码意思是导入 a.scss 和 b.scss 文件，那么导入后 a 和 b 中的任何mixin 、函数和变量都是可以使用的。

我们知道在 CSS 中也有 @import 语句，在以下几种情况 Sass 会认为 @import 是 CSS 语句：

- 使用 url()
- 文件的扩展名是 .css
- @import 包含 media queries
- 文件名以 http:// 开头

在使用的时候要注意上面的几种情况，如果导入的扩展名是 .scss 或 .sass 那么肯定用的是 Sass 提供的 @import 。如果**导入文件没有指定文件扩展名，那么 Sass 会尝试寻找文件名相同的扩展名为 .sass 或 .scss 的文件**。

## 3.加载路径

Sass 允许我们自行提供文件的加载路径，在我们导入文件的时候，Sass 总是会相对于当前文件进行解析，如果没有加载到则会使用**加载路径**。假如我们将加载路径设置为 node_modules/public/sass ，那么我们使用如下的导入方式：

```scss
@import 'a';
```

假如当前目录下没有 a.scss 文件，那么 Sass 就会去加载 node_modules/public/sass/a.scss ，这就是使用了加载路径，不过这种方式我们在项目中**极少应用**，你只需要了解即可。

## 4.部分导入

什么是部分导入呢？ 我的理解是**局部的使用导入**，也就是说可以**仅导入 Sass 或 Scss 文件，而不将它们编译为 CSS，** 那么应该怎么做呢？假如我要导入一个 my.scss 文件，我不希望将它编译为 CSS ，那么需要**使用下划线开头的文件名**，也就是说需要改名为 _my.scss ，然后使用如下导入代码：

```scss
@import 'my';
```

上面的代码导入的就是 _my.scss 文件，并且不会将它编译为 CSS 。另外需要注意的是：**不可以同时存在带有下划线和不带下划线的同名文件！**

## 5.索引文件

在 Sass 中什么是索引文件呢？_index.scss 文件，那它有什么用呢？假如我有一个 my 目录，这个目录下有两个文件，一个是 a.scss 一个是 _index.scss ，那么我使用如下文件导入代码：

```scss
@import 'my'；
```

那么上面的代码导入的就是 _index.scss 文件，也就是说 _index.scss 是这个目录下的**默认文件**，这就想你在写 vue 或者 html 中目录下的 index 文件类似。

## 6.使用 @use 替代 @import

Sass 官方团队不鼓励使用 @import 导入，并且在未来几年将逐步淘汰它，并最终将 @import 从 Sass 中完全删除。所以使用 @use 是官方团队更推荐的方式，下面我们开始讲解使用 @use 导入。

@use 与 @import 的语法基本相同，我们先看一个简单的使用 @use 导入的例子：

```scss
@use 'my/a.scss';
@use 'my/b';
```

从上面的代码中可以看到其使用方式与 @import 是相同的，那么为什么还要替换掉 @import 呢？ 主要是以下几个原因你需要了解下：

- @import 会使得所有变量、mixin 和函数都可以全局访问，这使开发者很难去维护这些定义的东西。
- 因为所有的都是全局的，那么 Sass 必须为所有的成员添加前缀，以避免命名冲突。
- @extend 也是全局的，这样将很难预测哪些样式将被扩展。
- 每次使用 @import 时，每个样式表都会被执行，这会增加编译时间
- 无法定义下游样式表无法访问的私有成员。

基于上述的这些原因，Sass 官方团队将会逐渐淘汰 @import，可以使用 @use 替代，语法是相同的，所以我们在 **v4.x.x 及以上的版本**中尽量使用 @use 来导入。

## 7.实战经验

其实在实际的项目中我们一般就是用 @import 来简单的导入文件，更多的时候是用它来方便整个项目中的 Sass 样式管理，如下图所示：

![image-20220825230946960](https://i0.hdslb.com/bfs/album/914fa27c933c7268f301b1ac3ea60c37273ca975.png)

图中所演示的是我的项目中的一个使用方式。每个项目的样式管理方式都不同，你的公司中的项目中肯定也会使用 @import 或 @use 来管理样式文件，不过目前应该是使用 @import 的居多，这个功能其实很简单也没有太多的说法，在你的项目中需要你灵活的使用它，当然，慢慢的使用 @use 去替换掉它也是非常重要的！

## 8.小结

![image-20220825232019448](https://i0.hdslb.com/bfs/album/01981baf9dad809208f4ecee5c182e8840b80e39.png)

本节内容我们讲解了 Sass 中的导入 @import，这在 CSS 中也是有这个功能的，这个功能我们可以理解就是导入文件中的内容的，一般在项目中我们也是用它来操作文件而已。

还有需要注意的是，Sass 官方推荐使用 @use 来替代 @import 使用，所以我们在导入的时候尽量使用 @use，如果你的项目中已经大量的使用了 @import （这是目前很常见的现状），可以找个时机替换掉，不过一定要确保 Sass 的**版本是 v4.x.x 及以上！**