## canvas基本用法[](https://topmost.gitee.io/dist/canvas.html#canvas基本用法)

canvas标签是html5中的新标签。而canvas对象表示一个html画布元素，它支持脚本客户端绘图操作。

接下来，我们就canvas的基本用法做下简单的介绍。

## 定义canvas元素[](https://topmost.gitee.io/dist/canvas.html#定义canvas元素)

![canvas](http://www.aseoe.com/special/webstart/canvas/images/canvas-base1.jpg)

canvas只有两个属性（当然不包括id属性，id属性是任何html元素都有的），即width和height。这两个属性都是可选的。默认值是宽300px，高150px。在这边，有一点需要注意，虽然可以通过css来调整canvas的大小，但渲染图像会缩放来适应布局，如果发现渲染结果看上去变形了，那可以显示的指定canvas的width属性和height属性。像上面那样。

canvas元素可以像普通图片那样为其指定样式，这些样式不会对canvas实际生产的图片产生什么影响。如果不指定样式，canvas默认是全透明的。

## 替用内容[](https://topmost.gitee.io/dist/canvas.html#替用内容)

由于canvas标签是html5中的新标签，并不是所有浏览器都支持。所以通常我们需要为那些不支持canvas的浏览器提供替用的显示内容。

我们只需要直接在canvas标签中插入内容即可。不支持该标签的浏览器会自动忽略而直接渲染替用内容；而支持的浏览器则会正常的渲染canvas。

例如，我们可以把一些文字或图片填入canvas内，作为替用内容：

![canvas](http://www.aseoe.com/special/webstart/canvas/images/canvas-base2.jpg)

注意：结束标签是必须的。在safari里，canvas的实现跟img很相似，它没有结束标签。然而，为了使其能更广泛的适用，我们必须给它加上结束标签。safari会自动忽略结束标签。

## 渲染上下文[](https://topmost.gitee.io/dist/canvas.html#渲染上下文)

canvas初始化是空白的，要在上面用脚本画图首先需要其渲染上下文，可以通过canvas对象的getContext方法来获取，同时得到的还有一些画图用的函数。getContext方法接受一个用于描述其类型的值作为参数。返回一个用于在画布上绘图的环境。其语法是这样的：



```
canvas.getContext(contextID)
```

参数contextID指定了想要在画布上绘制的类型。当前唯一的合法值是‘2d’，它指定了二维绘图。并且导致这个方法返回一个环境对象。



```
var canvas = document.getElementById('tutorial');
var ctx = canvas.getContext('2d');
```

上面通过getElementById方法取得canvas对象的DOM节点。然后通过气getContext方法取得其画图操作上下文。

## 检查浏览器的支持[](https://topmost.gitee.io/dist/canvas.html#检查浏览器的支持)

除了在那些不支持canvas的浏览器上显示替用内容，还可以通过脚本的方式来检查浏览器是否支持canvas。方法很简单，判断getContext是否存在即可。



```
var canvas = document.getElementById('tutorial');
if (canvas.getContext){
  var ctx = canvas.getContext('2d');
  // drawing code here
} else {
  // canvas-unsupported code here
}
```

说了这么多，一起来看一个简单的例子吧：

![canvas](http://www.aseoe.com/special/webstart/canvas/images/canvas.jpg)![img](http://www.aseoe.com/special/webstart/canvas/images/canvas01.jpg)



```
function draw() {
      var canvas = document.getElementById("canvas");
      if (canvas.getContext) {
        var ctx = canvas.getContext("2d");
        ctx.fillStyle = "rgb(200,0,0)";
        ctx.fillRect (10, 10, 55, 50);
        ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
        ctx.fillRect (30, 30, 55, 50);
      }
    }
```

上面的例子在画布上画了两个正方形，一个红色，一个透明度为50%的蓝色。

## canvas绘制图形[](https://topmost.gitee.io/dist/canvas.html#canvas绘制图形)

在正式开始讲如何利用canvas绘制图形前，先介绍下canvas的网格。

在上面的例子中，最后一个例子里绘制了两个正方形，拿其中的红色正方形来讲。运行代码后，会发现它离左上角有一定的距离。这个距离是由传进的参数来决定的，是(10,10)。这表示这个正方形的原点的坐标。在canvas网格中，原点定在左上角的位置（坐标(0,0)）。所有canvas里所绘制的图形的位置都是相对这个原点的。看下图，这个蓝色的方块的位置就是距离左边x像素，距离上边y像素，即它的坐标是(x,y)。实际上，是(x-0,y-0)，由于canvas定原点坐标为(0,0)所以便是(x,y)。

![canvas_default_grid](http://www.aseoe.com/special/webstart/canvas/images/canvas_default_grid.png)（素材来源：Canvas Tutorial 中文, Mozilla ）

## 绘制矩形[](https://topmost.gitee.io/dist/canvas.html#绘制矩形)

有三个函数可以用于绘制矩形，分别是：



```
fillRect(x,y,width,height) //填充一个矩形
strokeRect(x,y,width,height) //绘制一个矩形的边框（但不填充矩形的内部）
clearRect(x,y,width,height) //擦出了指定的矩形，并且用一个透明的颜色填充
```

以上三个函数都有四个参数，其中x,y表示矩形左上角的坐标，即相对于原点的位置；width,height指定了矩形的宽高。

其中，fillRect()方法用fillStyle属性所指定的颜色、渐变和模式来填充指定的矩形；strokeRect()方法所绘制的矩形边框，线条的颜色和线条宽度由strokeStyle和lineWidth属性指定。矩形边角的形状由lineJoin属性指定。

绘制矩形示例：

![rectangle](http://www.aseoe.com/special/webstart/canvas/images/test-rectangle.jpg)![img](http://www.aseoe.com/special/webstart/canvas/images/canvas02.jpg)



```
function draw(){
     var canvas=document.getElementById('testRectangle');
	 if(canvas.getContext){
	    var ctx=canvas.getContext('2d');
		ctx.fillRect(25,25,100,100);
		ctx.clearRect(45,45,60,60);
		ctx.strokeRect(50,50,50,50);
	 }
  }
```

这个例子，fillRect()方法绘制了一个100X100的黑色矩形（没有使用fillStyle设置填充色的话，默认的都是黑色的背景），它左上角的坐标为(25,25)；接着，clearRect()方法在原先的基础上，清除了一个60×60的矩形，它左上角的坐标是(45,45)；最后，利用strokeRect()方法，绘制了一个50×50大小的矩形边框，它左上角的坐标为(50,50)。

## 绘制路径[](https://topmost.gitee.io/dist/canvas.html#绘制路径)

与绘制路径相关的函数有：



```
beginPath()
closePath()
stroke()
fill()
```

beginPath()丢弃任何当前定义的路径并且开始一条新的路径。它把当前的点设置为(0,0)。当一个画布的环境第一次创建时，beginPath()方法会被显示地调用。

closePath()创建从当前点到开始点的路径。

stroke()方法绘制当前路径的边框。它意味着画轮廓，但是线条的可视化取决于strokeStyle、lineWidth、lineJoin、lineCap和miterLimit等属性。

fill()方法用于填充路径，默认是黑色。fill()方法使用fillStyle属性所指定的颜色、渐变和模式来填充当前路径。当调用该方法时，开放的路径会自动闭合。

绘制路径需要经过下面四个步骤：

第一步：用beginPath创建一条路径。

第二步：实际绘制路径的部分。

第三步：调用closePath方法关闭路径。如果图形已闭合或者它只是一个点，那么这个方法将什么也不会做。这一步不是必须的

第四步：调用stroke或fill方法，绘制边框或者填充路径。

绘制路径示例：

![path](http://www.aseoe.com/special/webstart/canvas/images/test-path.jpg)![img](http://www.aseoe.com/special/webstart/canvas/images/canvas03.jpg)



```
function draw(){
	  var canvas=document.getElementById('testPath');
	  if(canvas.getContext){
	     var cxt=canvas.getContext('2d');
		 cxt.beginPath();
		 cxt.moveTo(75,50);
		 cxt.lineTo(100,75);
		 cxt.lineTo(100,25);
		 cxt.fill();
	  }
	}
```

上面这个例子，绘制了一个三角形。首先，利用beginPath()方法创建一条路径；moveTo()方法将点移动到坐标(75,50)（moveTo()方法接下来就会讲到）；lineTo()方法画了两条直线；最后调用fill()方法填充路径，调用了这个方法后，路径就自然闭合了，所以不必再调用closePath()方法来闭合路径。

## moveTo()方法[](https://topmost.gitee.io/dist/canvas.html#moveto-方法)

上面的例子有用到moveTo()这个方法，这边就来说说moveTo()方法。语法如下：



```
moveTo(x,y)
```

moveTo()方法用于定位绘画的位置，即将点移动到参数x,y所指定的坐标位置。

canvas初始化或者调用了beginPath()方法时，绘画开始的位置即原点(0,0)，使用moveTo()方法，我们可以将起始位置移动到任何我们想要的地方。

moveTo()的使用实例：

![moveTo](http://www.aseoe.com/special/webstart/canvas/images/test-moveto.jpg)![img](http://www.aseoe.com/special/webstart/canvas/images/canvas04.jpg)



```
function draw(){
	 var canvas=document.getElementById('test_moveTo');
	 if(canvas.getContext){
	    var cxt=canvas.getContext('2d');
		cxt.beginPath();
		cxt.arc(75,75,50,0,Math.PI*2,true);
		cxt.moveTo(100,75);
		cxt.arc(75,75,35,0,Math.PI,false);
		cxt.moveTo(65,65);
		cxt.arc(60,65,5,0,Math.PI*2,true);
		cxt.moveTo(95,65);
		cxt.arc(90,65,5,0,Math.PI*2,true);
		cxt.stroke();
	 }
   }
```

## 绘制各种线条[](https://topmost.gitee.io/dist/canvas.html#绘制各种线条)

用lineTo()方法来画直线。

lineTo()方法接受终点的坐标(x,y)作为参数。起始坐标取决于前一路径的终点坐标。当然，起始坐标也可以通过前面介绍的moveTo()方法来设置。

绘制线条示例：

![lineTo](http://www.aseoe.com/special/webstart/canvas/images/test-lineto.png)![img](http://www.aseoe.com/special/webstart/canvas/images/canvas05.jpg)



```
function draw(){
	 var canvas=document.getElementById('test_lineTo');
	 if(canvas.getContext){
	    var cxt=canvas.getContext('2d');
		cxt.beginPath();
		cxt.moveTo(25,25);
		cxt.lineTo(105,25);
		cxt.lineTo(25,105);
		cxt.fill(); //fill填充路径，会自动闭合路径。
		cxt.beginPath();
		cxt.moveTo(125,125);
		cxt.lineTo(125,45);
		cxt.lineTo(45,125);
		cxt.closePath();
		cxt.stroke(); //stroke不会闭合路径，所以再描边先要先闭合路径
	 }
   }
```

上面的例子利用lineTo()方法绘制了两个三角形。从这个例子也可以看出fill和stroke的区别。

## 绘制弧线[](https://topmost.gitee.io/dist/canvas.html#绘制弧线)

用arc方法来绘制弧线或圆。



```
arc(x, y, radius, startAngle, endAngle, anticlockwise)
```

该方法接受五个参数。其中，x,y是圆心坐标；radius是圆的半径；startAngle和endAngle分别是起末弧度（以x轴为基准）；anticlockwise为true表示逆时针，反之为顺时针。

这边有一点是需要注意的，就是arc方法里的角度是以弧度为计算单位的，不是度。这么说吧，通常我们说的180度，就等价于PI。两者的计算公式是这样的：radians=(Math.PI/180)*degrees.(其中，radians代表弧度，degrees代表度)

绘制圆弧示例：

![arc](http://www.aseoe.com/special/webstart/canvas/images/test-arc.jpg)![img](http://www.aseoe.com/special/webstart/canvas/images/canvas06.jpg)



```
function draw(){
     var canvas=document.getElementById('test_arc');
	 if(canvas.getContext){
	    var ctx=canvas.getContext('2d');
		for(var i=0; i<4; i++){       //输出4行4列的矩阵
		   for(var j=0; j<4; j++){
		      ctx.beginPath();
			  var x=25+j*50;     //圆心x坐标
			  var y=25+i*50;     //圆心y坐标
			  var radius=20;     //半径
			  var startAngle=0;  //起始弧度
			  var endAngle=Math.PI/2+(Math.PI*j)/2;  //结束弧度
			  var anticlockwise=i%2==0?false:true; //奇数行顺时针；偶数行逆时针。
			  ctx.arc(x,y,radius,startAngle,endAngle,anticlockwise);  //循环绘制圆/圆弧
			  if(i>1){
			     ctx.fill();   //3,4行填充图案
			  }else{
			     ctx.stroke(); //1,2行仅勾勒路径
			  }
		   }
		}
	 }
  }
```

上面这个例子，用双层循环输出了4*4的圆弧矩阵。

## 贝塞尔和二次方曲线[](https://topmost.gitee.io/dist/canvas.html#贝塞尔和二次方曲线)

最后，要说的是贝赛尔曲线，它可以是二次和三次的形式，一般用于绘制复杂而有规律的形状。

**二次贝赛尔曲线：**



```
quadraticCurveTo(cpx, cpy, x, y)
```

其中，cpx指控制点的x坐标；cpy指控制点的y坐标；x指结束点的x坐标；y指结束点的y坐标。

![quadraticCurveTo](http://www.aseoe.com/special/webstart/canvas/images/sm-bse.jpg)

由上面的参数可以看出，二次贝赛尔曲线需要两个点：第一个点用于二次贝赛尔计算中的控制点，第二个点是曲线的结束点。曲线的开始点是当前路径中最后一个点。如果路径不存在，可使用beginPath()和moveTo()方法来定义。

一个简单的二次贝赛尔曲线实例：

![quadraticCurveTo](http://www.aseoe.com/special/webstart/canvas/images/test-quadraticCurveTo.jpg)![img](http://www.aseoe.com/special/webstart/canvas/images/canvas07.jpg)



```
function draw(){
     var canvas=document.getElementById('test_quadraticCurveTo');
	 if(canvas.getContext){
	    var ctx=canvas.getContext('2d');
		ctx.beginPath();
		ctx.moveTo(75,25);
		ctx.quadraticCurveTo(25,25,25,62);
		ctx.quadraticCurveTo(25,100,50,100);
		ctx.quadraticCurveTo(50,120,30,125);
		ctx.quadraticCurveTo(60,120,65,100);
		ctx.quadraticCurveTo(125,100,125,62);
		ctx.quadraticCurveTo(125,25,75,25);
		ctx.stroke();
	 }
  }
```

**三次贝赛尔曲线：**



```
bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)
```

其中，cp1x为第一个控制点的x坐标；cp1y为第一个控制点的y坐标；cp2x为第二个控制点的x坐标；cp2y为第二个控制点的y坐标；x为结束点的x坐标；y为结束点的y坐标。

![bezierCurveTo](http://www.aseoe.com/special/webstart/canvas/images/sm-bse2.jpg)

由上面可以看出，三次贝赛尔曲线需要三个点。前两个点用于三次贝赛尔计算中的控制点，第三个点是曲线结束的控制点。同上，曲线的开始点是当前路径中最后一个点。如果路径不存在，可使用beginPath()和moveTo()方法来定义。

使用二次方和三次方的贝塞尔曲线是相当有挑战的，因为不像在矢量绘图软件 Adobe Illustrator 里那样有即时的视觉反馈。因为用它来画复杂图形是比较麻烦的。但如果你有时间，并且最重要是有耐心，再复杂的图形都可以绘制出来的。下面我们来画一个简单而又规律的图形。

一个简单的三次贝赛尔曲线实例：

![bazierCurveTo](http://www.aseoe.com/special/webstart/canvas/images/test-bazierCurveTo.jpg)![img](http://www.aseoe.com/special/webstart/canvas/images/canvas08.jpg)



```
function draw(){
     var canvas=document.getElementById('test_quadraticCurveTo');
	 if(canvas.getContext){
	    var ctx=canvas.getContext('2d');
		ctx.beginPath();
		ctx.moveTo(75,40);
		ctx.bezierCurveTo(75,37,70,25,50,25);
		ctx.bezierCurveTo(20,25,20,62.5,20,62);
		ctx.bezierCurveTo(20,80,40,102,75,120);
		ctx.bezierCurveTo(110,102,130,80,130,62);
		ctx.bezierCurveTo(130,62.5,130,25,100,25);
		ctx.bezierCurveTo(85,25,75,37,75,40);
		ctx.fill();
	 }
  }
```

## canvas应用图像[](https://topmost.gitee.io/dist/canvas.html#canvas应用图像)

canvas有个有趣的功能，就是引入图像，它可以用于图片合成或制作背景。目前仅可以在图像中加入文字。

## 引入图像[](https://topmost.gitee.io/dist/canvas.html#引入图像)

引入图像需要两步：

第一是图片来源，不是简单的url路径，但可以是一个javascript的image对象引用，又或者其他的canvas元素。

然后用drawImage方法将图像插入到canvas中。

先来看第一步，有四个可选方法：

**1.引用页面内的图片**

我们可以通过使用document.images集合、document.getElementsByTagName方法或document.getElementById方法来获取页面内的图片。

**2.使用其他canvas元素**

和引用页面内的图片一样，也可以用document.getElementsByTagName方法或document.getElementById方法来获取页面内其他的canvas元素。但是，这边被引用的canvas元素必须是已经准备好的canvas。

**3.由零开始创建图像**

这就需要用javascript创建一个新的image对象。这个方法的缺点是，脚本会因为等待图片加载而暂停。可以使用onload事件，等图片加载完再执行相应的代码。

可以使用下面的方法来创建图片：



```
var img = new Image();   // Create new Image object
img.onload = function(){
  // execute drawImage statements here
}
img.src = 'myImage.png'; // Set source path
```

**4.通过data:url方式来嵌入图像**

还可以通过data:url方式来引入图像。

data urls允许用一串base64编码的字符串方法来定义一个图像。其优点是图片内容即时可用，无须再到服务器兜一圈；缺点是图像没办法缓存，图片大的话内嵌的url数据会相当长。

## drawImage[](https://topmost.gitee.io/dist/canvas.html#drawimage)

一旦获得了图像对象，就可以使用drawImage方法将它渲染到canvas里。

drawImage方法有三种状态，下面为最简单的一种。



```
drawImage(img,x,y);
```

其中，img规定要使用的图像、画布或视频；x指在画布上放置图像的x坐标位置；y指在画布上放置的图像的y坐标位置。

来看个简单的例子，在页面画布中引入一个图片。

![img](http://www.aseoe.com/special/webstart/canvas/images/test-bazierCurveTo.jpg)



```
function draw(){
     var canvas=document.getElementById('test_drawImage');
	 if(canvas.getContext){
	    var ctx=canvas.getContext('2d');
		var img=new Image();
		img.onload=function(){
		   ctx.drawImage(img,25,25);
		}
		img.src='test-bazierCurveTo.jpg';
	 }
  }
```

## 缩放图片[](https://topmost.gitee.io/dist/canvas.html#缩放图片)

在上面的基础上，drawImage方法添加两个参数，用于控制图像在canvas中的缩放。



```
drawImage(img,x,y,width,height);
```

img,x,y三个参数和上面一致，新增的两个参数分别表示：width，在canvas中图片要显示的宽度；height，在canvas中图片要显示的高度。

来看一个drawImage缩放图片的例子：

![img](http://www.aseoe.com/special/webstart/canvas/images/test-bazierCurveTo.jpg)![img](http://www.aseoe.com/special/webstart/canvas/images/test-drawImage2.jpg)



```
function draw(){
     var canvas=document.getElementById('test_drawImage');
	 if(canvas.getContext){
	    var ctx=canvas.getContext('2d');
		var img=new Image();
		img.onload=function(){
		   ctx.drawImage(img,60,60,80,80);
		}
		img.src='test-bazierCurveTo.jpg';
	 }
  }
```

上面左边的图片是原图，右边的图片是经过缩小后显示画布上显示的图片。

## 剪切图片[](https://topmost.gitee.io/dist/canvas.html#剪切图片)

drawImage的最后一种状态可用于剪切图片，其语法如下：



```
drawImage(img,sx,sy,swidth,sheight,x,y,width,height);
```

它一共有九个参数，分别为：img，源图片对象；sx，开始剪切的x坐标位置；sy，开始剪切的y坐标位置；swidth，要剪切的宽度；sheight，要剪切的高度；x，剪切后在画布显示的x坐标位置；y，剪切后，在画布上显示的y坐标的位置；width，剪切后要显示的图片的宽度；height，剪切后要显示的图片的高度。

由上面可以看出，sx,sy,swidht,sheight四个参数控制了切片开始的位置及大小；x,y,width,height四个参数控制了剪切后的图片要显示的位置及大小（剪切后图片的放到或缩小或保持切片大小显示）。

来看一个drawImage剪切图片的例子：

![img](http://www.aseoe.com/special/webstart/canvas/images/test-bazierCurveTo.jpg)![img](http://www.aseoe.com/special/webstart/canvas/images/test-drawImage3.jpg)



```
function draw(){
     var canvas=document.getElementById('test_drawImage');
	 if(canvas.getContext){
	    var ctx=canvas.getContext('2d');
		var img=new Image();
		img.onload=function(){
		   ctx.drawImage(img,0,0,73,140,30,30,70,140);
		}
		img.src='test-bazierCurveTo.jpg';
	 }
  }
```

上面左边的图片是原图，右边的图片是经过剪切后显示画布上显示的图片。

## canvas运用样式与颜色[](https://topmost.gitee.io/dist/canvas.html#canvas运用样式与颜色)

在canvas绘制图形中介绍了fill和stroke方法用于填充和勾勒图形。下面总结canvas全部样式与颜色的可选项，用以绘制更吸引人的内容。

## 色彩[](https://topmost.gitee.io/dist/canvas.html#色彩)

在前面介绍的canvas的相关知识中，只有用来绘制内容的方法。如果像要给绘制的内容上色，则要用到fillStyle和strokeStyle。语法如下：



```
fillStyle=color;
strokeStyle=color;
```

fillStyle用于设置填充的颜色，而strokeStyle用于设置图像轮廓的颜色。color可以是表示css颜色值的字符串、渐变对象或者图案对象。默认情况下，线条颜色和填充颜色都是黑色的。

fillStyle示例：

![fillstyle](http://www.aseoe.com/special/webstart/canvas/images/fillstyle.jpg)



```
function draw(){
     var canvas=document.getElementById('test_fillStyle');
	 if(canvas.getContext){
	    var ctx=canvas.getContext('2d');
		for(var i=0; i<6; i++){
		   for(var j=0; j<6; j++){
		      ctx.fillStyle='rgb('+Math.floor(255-42.5*i)+','+Math.floor(255-42.5*j)+',0)';
			  ctx.fillRect(25+j*25,25+i*25,25,25);
		   }
		}
	 }
  }
```

上面fillStyle的例子，用了双层循环来绘制并填充了6*6的方格矩阵。根据变量i和j控制每个方格绘制的位置以及填充的颜色。

strokeStyle示例：

![strokestyle](http://www.aseoe.com/special/webstart/canvas/images/strokestyle.jpg)



```
function draw(){
     var canvas=document.getElementById('test_strokeStyle');
	 if(canvas.getContext){
	    var ctx=canvas.getContext('2d');
		for(var i=0; i<6; i++){
		   for(var j=0; j<6; j++){
		      ctx.strokeStyle='rgb(0,'+Math.floor(255-42.5*i)+','+Math.floor(255-42.5*j)+')';
			  ctx.beginPath();
			  ctx.arc(40+j*25,40+i*25,10,0,Math.PI*2,true);
			  ctx.stroke();
		   }
		}
	 }
  }
```

上面strokeStyle的例子，用了双层循环来绘制并填充了6*6的圆圈矩阵。根据变量i和j控制每个圆圈绘制的位置以及描边的颜色。

## 透明度[](https://topmost.gitee.io/dist/canvas.html#透明度)

除了可以绘制实色的图形外，还可以绘制半透明的图形。通过设置globalAlpha属性或者使用一个半透明颜色来作为轮廓或者填充的样式。

**1.globalAlpha**



```
globalAlpha = transparency value
```

这个属性会影响canvas里所有在设置透明度后绘制的图形的透明度。它的取值区间是[0.0,1.0]。其中，0.0表示完全透明，1.0表示完全不透明。默认值是1.0。

globalAlpha属性在需要绘制大量拥有相同透明度的图形时相当高效。

globalAlpha实例：

![globalAlpha](http://www.aseoe.com/special/webstart/canvas/images/globalAlpha.jpg)



```
function draw(){
     var canvas=document.getElementById('test_globalAlpha');
	 if(canvas.getContext){
	    var ctx=canvas.getContext('2d');
		ctx.fillStyle='red';
		ctx.fillRect(20,20,75,50);
		ctx.globalAlpha=0.2;
		ctx.fillStyle='blue';
		ctx.fillRect(50,50,75,50);
		ctx.fillStyle='green';
		ctx.fillRect(80,80,75,50);
	 }
  }
```

上面这个例子，红色的矩形是完全不透明的，因为在它之前并没有设置透明度。在红色矩形绘制完成后，设置了都明度为0.2，从而之后绘制的蓝色矩形和绿色矩形的透明度都受影响了。

**2.rgba**

由于strokeStyle和fillStyle都接受符合css3规范的颜色值，所以还可以使用另一种设置透明度的方法，那就是rgba()方法，它的灵活性更大。

rgba()示例：

![rgba](http://www.aseoe.com/special/webstart/canvas/images/rgba.jpg)



```
function draw(){
     var canvas=document.getElementById('test_rgba');
	 if(canvas.getContext){
	    var ctx=canvas.getContext('2d');
		//绘制四个宽高为150*37.5的矩形，颜色分别为：黄、绿、蓝、红
		ctx.fillStyle='rgb(255,221,0)';
		ctx.fillRect(10,0,150,37.5);
		ctx.fillStyle='rgb(102,204,0)';
		ctx.fillRect(10,37.5,150,37.5);
		ctx.fillStyle='rgb(0,153,255)';
		ctx.fillRect(10,75,150,37.5);
		ctx.fillStyle='rgb(255,51,0)';
		ctx.fillRect(10,112.5,150,37.5);
		//绘制上面大矩形内部的白色小矩形
		for(var i=0;i<10;i++){
		   ctx.fillStyle='rgba(255,255,255,'+(i+1)/10+')';
		   for(var j=0;j<4;j++){
		      ctx.fillRect(15+i*14,5+j*37.5,14,27.5);
		   }
		}
	 }
  }
```

上面的例子，先竖向绘制了四个大小一致、颜色分别为黄、绿、蓝、红的背景矩形。然后根据变量i和j在四个矩形内部分别以一定步长来绘制背景色为白色透明度不一的白色小矩形。

## 线型[](https://topmost.gitee.io/dist/canvas.html#线型)

canvas可以通过一定属性来设置线的样式。



```
lineWidth = value
lineCap = type
lineJoin = type
miterLimit = value
```

**1.lineWidth属性**

lineWidth用于设置当前绘制的线的粗细。属性值必须为正数。默认值为1.0。

注意，这里的线宽是指给定路径的中心到两边的粗细。换句话说就是：在路径的两边各绘制线宽的一半。

来看一个例子：

![lineWidth](http://www.aseoe.com/special/webstart/canvas/images/lineWidth1-1.jpg)



```
function draw(){
     var canvas=document.getElementById('test_lineWidth1');
	 if(canvas.getContext){
	    var ctx=canvas.getContext('2d');
		ctx.lineWidth=10;
		ctx.strokeRect(20,20,80,100);
	 }
  }
```

![img](http://www.aseoe.com/special/webstart/canvas/images/canvas09.jpg)

由上面的例子可以看出，线宽是由起始位置向两边扩展的。

**2.lineCap属性**

属性lineGap设置或返回了线条末端线帽的样式。

它有三个可选值，分别为：butt，这个值是默认的，表示向线条的每个末端添加平直的边缘；round，表示向线条的每个末端添加圆形线帽；square，表示向线条的每个末端添加正方形的线帽。

lineCap示例：

![lineCap](http://www.aseoe.com/special/webstart/canvas/images/lineCap.jpg)



```
function draw(){
     var canvas=document.getElementById('test_lineGap');
	 if(canvas.getContext){
	    var ctx=canvas.getContext('2d');
		var lineCap=['butt','round','square'];
		//绘制上下两条水平参考线
		ctx.strokeStyle='#09f';
		ctx.beginPath();
		ctx.moveTo(10,10);
		ctx.lineTo(140,10);
		ctx.moveTo(10,140);
		ctx.lineTo(140,140);
		ctx.stroke();
		//画线条
		ctx.strokeStyle='black';
		for(var i=0; i<lineCap.length; i++){
		   ctx.lineWidth=15;
		   ctx.lineCap=lineCap[i];
		   ctx.beginPath();
		   ctx.moveTo(25+i*50,10);
		   ctx.lineTo(25+i*50,140);
		   ctx.stroke();
		}
	 }
  }
```

上面的例子从左到右绘制了三条竖线，它们的起点和终点都落在了蓝色辅助线上，lineCap属性分别为butt，round，square。第一条竖线，lineCap属性是默认的butt，它的端点是与辅助线齐平的；第二条竖线的lineCap属性为round，在端点处加了半径为一般线宽的半圆；第三条竖线的lineCap属性设置为square，在端点处加了等宽且高度为一半线宽的方块。

**3.lineJoin属性**

当一个路径包含了线段或曲线相交的交点时，lineJoin属性说明如何绘制这些交点。只有当绘制具有等宽线条的时候，这一属性的效果才能表现出来。

它的可选值有三个，分别是：round、bevel和miter。默认值是miter。

lineJoin示例：

![img](http://www.aseoe.com/special/webstart/canvas/images/canvas16.jpg)



```
function draw(){
     var canvas=document.getElementById('test_lineJoin');
	 if(canvas.getContext){
	    var ctx=canvas.getContext('2d');
		var lineJoin=['round','bevel','miter'];
		ctx.lineWidth=10;
		for(var i=0; i<lineJoin.length; i++){
		   ctx.lineJoin=lineJoin[i];
		   ctx.beginPath();
		   ctx.moveTo(-5,5+i*40);
		   ctx.lineTo(35,45+i*40);
		   ctx.lineTo(75,5+i*40);
		   ctx.lineTo(115,45+i*40);
		   ctx.lineTo(155,5+i*40);
		   ctx.stroke();
		}
	 }
  }
```

上面的例子，第一条折线的lineJoin属性值为round，可以看出在相交处边角被磨圆了，圆的半径等于线宽；第二条折线的lineJoin属性值为bevel，定点的外边缘和一个填充的三角形相交；第三条折线的lineJoin属性为默认的miter，两条线段的外边缘一直扩展到他们相交。当两条线段以一个锐角相交，斜角连接可能变得很长。miterLimit 属性为一个斜面的长度设置了上限。超过这一限制，斜面就变成斜角了。

**4.miterLimit属性**

miterLimit 属性设置或返回最大斜接长度。

斜接长度指的是在两条线交汇处内角和外角之间的距离。

![miterlimit](http://www.aseoe.com/special/webstart/canvas/images/miterlimit.gif)

注意：只有当 lineJoin 属性为 “miter” 时，miterLimit 才有效。

边角的角度越小，斜接长度就会越大。为了避免斜接长度过长，我们可以使用 miterLimit 属性。

如果斜接长度超过 miterLimit 的值，边角会以 lineJoin 的 “bevel” 类型来显示（图解 3）：

![miterlimit_bevel](http://www.aseoe.com/special/webstart/canvas/images/miterlimit_bevel.gif)



```
语法：miterLimit=number;
```

内容层的展现是最主要的，无论背景层和贴图层有多少花哨，在设计师设计过程中，内容层对用户的展示是最优先的。

## 渐变[](https://topmost.gitee.io/dist/canvas.html#渐变)

我们可以使用径向渐变或者线性渐变来填充或描边所绘制的图形。

**1.线性渐变**



```
createLinearGradient(xStart, yStart, xEnd, yEnd)
```

线性渐变有四个参数，其中xStart,yStart为渐变起始点的坐标；xEnd,yEnd为渐变结束点的坐标。

这个方法创建并返回了一个新的canvasGradient对象，它在指定的起始点和结束点之间线性的内插颜色值。

**2.径向渐变**



```
createRadialGradient(xStart, yStart, radiusStart, xEnd, yEnd, radiusEnd)
```

径向渐变有六个参数，其中xStart,yStart为开始圆的圆心坐标；radiusStart为开始圆的半径；xEnd, yEnd为结束圆的圆心坐标；radiusEnd为结束圆的半径。

这个方法创建并返回一个新的CanvasGradient对象，该对象在两个指定的圆周直接放射性的插值颜色。

注意，以上两个方法都没有为渐变指定任何颜色。使用返回对象的addColorStop()来设置颜色。要使用一个渐变来勾勒线条或填充区域，只需要把CanvasGradient对象赋给strokeStyle属性或fillStyle属性即可。

**3.addColorStop()方法**

上面提到了，addColorStop()方法在渐变中的抹一点添加一个颜色变化。语法格式如下：



```
addColorStop(offset,color)
```

offset是一个范围在0.0到1.0之间的浮点值，表示渐变开始点和结束点直接的一部分。offset值为0对应开始点，offset值为1对应结束点。

color以一个css颜色字符串的方式，表示在指定offset显示的颜色。

createLinearGradient示例：

![createlinergradient](http://www.aseoe.com/special/webstart/canvas/images/createlinergradient.jpg)



```
function draw(){
     var canvas=document.getElementById('test_createLinearGradient');
	 if(canvas.getContext){
	    var ctx=canvas.getContext('2d');
		var linergradient=ctx.createLinearGradient(0,0,0,150);
		linergradient.addColorStop(0,'#00abeb'); //起始点颜色值
		linergradient.addColorStop(0.5,'#fff'); //中间位置颜色值
		linergradient.addColorStop(0.5,'#26c000'); //中间位置颜色值
		linergradient.addColorStop(1,'#fff'); //结束点颜色值
		ctx.fillStyle=linergradient; //填充颜色
		ctx.fillRect(35,10,130,130);
	 }
  }
```

上面这个例子，绘制了一个130*130的正方形，并且用线性渐变填充了颜色。设置了四个点的颜色值，形成了从蓝到白又从绿到白的渐变色。

createRadialGradient示例：

![createradialgradient](http://www.aseoe.com/special/webstart/canvas/images/createradialgradient.jpg)



```
function draw(){
     var canvas=document.getElementById('test_createRadialGradient');
	 if(canvas.getContext){
	    var ctx=canvas.getContext('2d');
		var radialgradient=ctx.createRadialGradient(45,45,10,52,50,30);
		radialgradient.addColorStop(0,'#a7d30c');
		radialgradient.addColorStop(0.9,'#019f62');
		radialgradient.addColorStop(1,'rgba(1,159,98,0)');
		ctx.fillStyle=radialgradient;
		ctx.fillRect(0,0,150,150);
	 }
  }
```

上面的例子中，在一个150*150方形上，填充了一个径向渐变。

## 图案[](https://topmost.gitee.io/dist/canvas.html#图案)

createPattern() 方法为贴图图像创建一个模式。其语法格式如下：



```
createPattern(image, repetitionStyle)
```

该方法接受两个参数，其中image为需要的图像。这个参数通常是一个Image对象，也可以使用一个canvas元素。repetitionStyle说明如何使用贴图。这个参数有四个取值，分别为：repeat，表示在各个方向上都对图像贴图；repeat-x，只在x方向上贴图；repeat-y，只在y方向上贴图；no-repeat，不贴图，只使用它一次。

creatPattern()方法创建并返回一个CanvasPattern对象，该对象表示一个贴图图像所定义的模式。要使用一个模式来勾勒线条或填充区域，可以把一个CanvasPattern对象用作strokeStyle属性或fillStyle属性。

注意，与drawImage不同，createPattern需要确认image对象已经加载完全，否则图案可能效果不对。

Firefox 目前只支持属性值repeat 。如果赋其它值，什么效果都没有的。

createPattern示例：

![createPattern](http://www.aseoe.com/special/webstart/canvas/images/createPattern.jpg)



```
function draw(){
     var canvas=document.getElementById('test_createPattern');
	 if(canvas.getContext){
	    var ctx=canvas.getContext('2d');
		var img=new Image();
		img.src='http://cat7.cn/wp-content/pic/2014/0210/createlinergradient.jpg';
		img.onload=function(){
		   var pattern=ctx.createPattern(img,'repeat');
		   ctx.fillStyle=pattern;
		   ctx.fillRect(0,0,200,200);
		}
	 }
  }
```

这个例子创建了一个200*200的方形，并用名为createlinergradient的图片完全填充了方形。

## 阴影[](https://topmost.gitee.io/dist/canvas.html#阴影)

canvas中与阴影相关的属性有四个，如下：



```
shadowOffsetX = float
shadowOffsetY = float
shadowBlur = float
shadowColor = color
```

shadowOffsetX和shadowOffsetY用来设定阴影在x和y轴的延伸距离。负值表示阴影会往上或左延伸，正值则表示会往下或右延伸。默认值都是0。

shadowBlur用于设定阴影的模糊程度，默认值为0。

shadowColor用于设定阴影颜色，值可以是标准的css颜色值，默认是全透明的黑色。

文字阴影示例：

![shadow](http://www.aseoe.com/special/webstart/canvas/images/shadow.jpg)



```
function draw(){
     var canvas=document.getElementById('test_shadow');
	 if(canvas.getContext){
	    var ctx=canvas.getContext('2d');
		ctx.shadowOffsetX=2;
		ctx.shadowOffsetY=2;
		ctx.shadowBlur=2;
		ctx.shadowColor="rgba(0,0,0,0.5)";
		ctx.font="20px Arial"; //设置字体
		ctx.fillStyle="black";
		ctx.fillText('Sample String',5,30); //第一个参数为输出的文本，第二三个参数为在画布上的位置坐标
	 }
  }
```

上面的例子给文字’Sample String’设置了阴影。

## canvas变型[](https://topmost.gitee.io/dist/canvas.html#canvas变型)

在了解变形之前，先介绍一下两个在开始绘制复杂图形就必不可少的方法。



```
save()
restore()
```

save()和 restore()方法是用来保存和恢复canvas状态的，都没有参数。

Canvas状态是以堆(stack)的方式保存的，每一次调用save()方法，当前的状态就会被推入堆中保存起来。这种状态包括：

- 当前应用的变形（即移动，旋转和缩放，见下）
- strokeStyle, fillStyle, globalAlpha, lineWidth, lineCap, lineJoin, miterLimit, shadowOffsetX, shadowOffsetY, shadowBlur, shadowColor, globalCompositeOperation 的值
- 当前的裁切路径（clipping path）

可以调用任意多次save()方法。

每一次调用restore()方法，上一个保存的状态就从堆中弹出，所有设定都恢复。

看一个save()和restore()方法的例子：

![save-restore](http://www.aseoe.com/special/webstart/canvas/images/save-restore.jpg)



```
                            function draw(){
                                 var canvas=document.getElementById('test_save_restore');
                                 
                                 if(canvas.getContext){
                                    var ctx=canvas.getContext('2d');
                                    
                                    ctx.fillRect(15,15,150,150); //先绘制一个150*150的正方形，默认填充黑色
                                    ctx.save(); //保存当前状态
                                    
                                    ctx.fillStyle='#09f';  //设置填充色为蓝
                                    ctx.fillRect(30,30,120,120);  //绘制一个起始点坐标为(12,12)的120*120的正方形。它的背景色就是之前设置的蓝色。
                                    
                                    ctx.save(); //保存当前状态
                                    
                                    ctx.fillStyle='#fff'; //设置填充色为白色
                                    ctx.globalAlpha=0.5; //透明度设置为0.5
                                    ctx.fillRect(45,45,90,90); //绘制正方形
                                    
                                    ctx.restore(); //恢复栈中的第一个状态值，即最后一个保存的状态，为设置填充色为蓝色
                                    ctx.fillRect(60,60,60,60); //绘制60*60的蓝色正方形
                                    
                                    ctx.restore(); //恢复栈中的第二个值，在本例中即第一个保存的状态，填充色默认为黑色
                                    ctx.fillRect(75,75,30,30); //绘制一个30*30的黑色正方形
                                    
                                 }
                              }
```

这个例子第一步是绘制了一个起始位置坐标为(15,15)，大小为150*150的正方形。它没有设置填充色，默认填充了黑色。第二步调用了save()方法。该方法记录了这是的状态，即fillStyle的值，即为默认的黑色。第三步设置fillStyle值为'#09f'，以此为填充色绘制了一个起始位置坐标为(30,30)，大小为120*120的正方形。第四步又调用了一次save()方法，此时的状态也将被推入状态栈中，即保存了填充色'#09f'。第五步绘制了一个起始坐标为(45,45)、背景色为白色、透明度为0.5、大小为90*90的正方形。第六步调用restore()方法，恢复最后一次保存的状态，绘制了一个蓝色正方形，它的起始位置为(60,60)，大小为60*60。最后又调用了一次restore()方法，恢复第一次保存的状态，绘制了一个黑色正方形，它的起始位置为(75,75)，大小为30*30.

## 移动[](https://topmost.gitee.io/dist/canvas.html#移动)

在canvas中用于移动的方法是translate()方法，该方法用来移动canvas和它的原点到一个不同的位置。



```
translate(x,y);
```

该方法有两个参数，分别x方向和y方向的偏移量。

看一个translate()方法的例子：

![translate](http://www.aseoe.com/special/webstart/canvas/images/translate.jpg)![img](http://www.aseoe.com/special/webstart/canvas/images/canvas10.jpg)



```
                            function draw(){
                                 var canvas=document.getElementById('test_translate');
                                 
                                 if(canvas.getContext){
                                    var ctx=canvas.getContext('2d');
                                    ctx.fillRect(10,10,100,50);
                                    ctx.translate(70,70);
                                    ctx.fillRect(10,10,100,50);
                                 }
                              }
```

上面的例子先是绘制了一个100*50的矩形，它的原点位置是(10,10)。然后用translate()方法将其原点移至(70,70)。接着又绘制了一个100*50的矩形，它距离原点的位置是(10,10)，所以，第二个矩形开始绘制的位置就应该是(80,80)；

## 旋转[](https://topmost.gitee.io/dist/canvas.html#旋转)

rotate()方法用以实现以原点为中心的旋转。



```
rotate(angle);
```

该方法只接受一个参数，表示要旋转的角度，以**弧度**为单位。**如果传入的参数是正数，则表示顺时针旋转；如果是负数，则表示逆时针旋转。**

默认情况下，旋转的中心始终是原点(0,0)，如果想改变旋转的中心，则必须使用translate()将原点移动到指定的位置，再进行旋转。

来看一个rotate()方法的例子：

![img](http://www.aseoe.com/special/webstart/canvas/images/canvas13.jpg)



```
                            function draw(){
                                 var canvas=document.getElementById('test_rotate');
                                 
                                 if(canvas.getContext){
                                    var ctx=canvas.getContext('2d');
                                    ctx.fillRect(150,50,50,50);
                                    ctx.rotate(Math.PI/6);
                                    ctx.fillRect(150,50,50,50);
                                 }
                              }
```

这个例子，在画布没旋转之前，先绘制了一个距离原点位置为(150,50)、大小为50*50的正方形。然后旋转画布30°即Matb.PI/6，再绘制一个一样的正方形。从上图中可以看到两者的区别。注意，这里的原点是(0,0)。

## 缩放[](https://topmost.gitee.io/dist/canvas.html#缩放)

scale()方法用于实现画布的缩放。



```
scale(x,y);
```

该方法接受两个参数，分别表示x方向和y方向缩放的比例。它们必须都是正值。值小于1，表示缩小；值大于1，表示放大；值等于1时，表示没有缩放。

来看一个scale()方法的例子：

![img](http://www.aseoe.com/special/webstart/canvas/images/canvas11.jpg)![img](http://www.aseoe.com/special/webstart/canvas/images/canvas12.jpg)



```
                            function draw(){
                                 var canvas=document.getElementById('test_scale');
                                 
                                 if(canvas.getContext){
                                    var ctx=canvas.getContext('2d');
                                    ctx.fillRect(10,10,50,50);
                                    ctx.scale(0.5,1.5);
                                    ctx.fillRect(150,10,50,50);
                                 }
                              }
```

上面的例子显示绘制了一个距离原点(10,10)、大小50*50的正方形。然后进行缩放操作，将x方向缩小，y方向放大。然后再在离原点(75,15)(这里坐标已经做了缩放，150*0.5=75,10*1.5=15)的位置绘制一个25*75(50*0.5=25,50*1.5=75)的矩形。二者进行对比，就可以看出scale()是怎样变化的了。

## 变形[](https://topmost.gitee.io/dist/canvas.html#变形)

最后一个方法是变形。



```
transform(m11,m12,m21,m22,dx,dy);
```

画布上每个对象都有一个当前的变换矩阵。

调用transform()方法必须将当前的变换矩阵乘以传入的变换矩阵，对上面介绍的参数而言，传入的变形矩阵是这样的：

![img](http://www.aseoe.com/special/webstart/canvas/images/juzheng.jpg)

其中，m11表示水平缩放绘制；m12表示水平倾斜绘制；m21表示垂直倾斜绘制；m22表示垂直缩放绘制；dx表示水平移动绘制；dy表示垂直移动绘制。

换句话说，transform允许缩放、移动、旋转、倾斜当前环境。其实transform就是这几种的组合变换。当然，我们可以把这transform拆分上述三种变换，对应的矩阵计算公式如下：

![img](http://www.aseoe.com/special/webstart/canvas/images/juzheng_all.jpg)

还有一点需要注意，改变换只会影响调用transform()方法之后所绘制的图形。

来看一个例子：

![transform](http://www.aseoe.com/special/webstart/canvas/images/transform.jpg)



```
                            function draw(){
                                 var canvas=document.getElementById('test_transform');
                                 
                                 if(canvas.getContext){
                                    var ctx=canvas.getContext('2d');
                                    ctx.fillStyle="yellow";
                                    ctx.fillRect(100,100,250,100);
                                    
                                    ctx.transform(1,0.2,-0.2,1,30,10);
                                    ctx.fillStyle="red";
                                    ctx.fillRect(100,100,250,100);
                                    
                                    ctx.transform(1,0.2,-0.2,1,30,10);
                                    ctx.fillStyle="blue";
                                    ctx.fillRect(100,100,250,100);
                                    
                                 }
                              }
```

针对上面的这个例子，我们来分析一下图形的绘制过程。首先，画布上绘制了一个250*100的黄色矩形。然后为下一个同样大小同样位置的红色矩形做了变形。我们根据transform()各参数可以得出以下矩阵：

![img](http://www.aseoe.com/special/webstart/canvas/images/juzheng2.jpg)

然后对应各参数的含义，我们可以得知，红色矩形没有进行缩放，但是进行了旋转和移动。那么我们将这两个过程分成两步来分析，便于理解。我们将上面得到的矩阵中的dx和dy的值置0，即把30和10变成0就得到了下面矩阵：

![img](http://www.aseoe.com/special/webstart/canvas/images/juzheng3.jpg)

那么我们怎么计算图形旋转的角度呢？上面的矩阵其实和下面的矩阵是对应的：

![img](http://www.aseoe.com/special/webstart/canvas/images/juzheng4.jpg)

根据上面的矩阵对应关系，很容易算出旋转的角度大约为10度。如下图所示：

![img](http://www.aseoe.com/special/webstart/canvas/images/canvas15.jpg)

接着我们把原来的矩阵变为下面这个矩阵：

![img](http://www.aseoe.com/special/webstart/canvas/images/juzheng6.jpg)

根据上面的矩阵我们可以计算移动的坐标值,红色矩形左上定点移动后的坐标为：x'=100+30=130,y'=100+10=110，那么移动的距离就是很像右移了30px，纵向下移了10px。所以其实就是矩阵中的那两个值，即：30和10。

然后，蓝色矩形的绘制过程同上，但是它是在红色矩形变形的基础上再进行变形的。最终得到的图案就是下图：

![img](http://www.aseoe.com/special/webstart/canvas/images/canvas14.jpg)

! 注意：每次调用transform()时，都会再前一个变换的基础上再构建。