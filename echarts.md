## 1.Echarts-介绍

常见的数据可视化库：

- D3.js   目前 Web 端评价最高的 Javascript 可视化工具库(入手难)  
- ECharts.js   百度出品的一个开源 Javascript 数据可视化库   
- Highcharts.js  国外的前端数据可视化库，非商用免费，被许多国外大公司所使用  
- AntV  蚂蚁金服全新一代数据可视化解决方案  等等
- Highcharts 和 Echarts 就像是 Office 和 WPS 的关系

> ECharts，一个使用 JavaScript 实现的开源可视化库，可以流畅的运行在 PC 和移动设备上，兼容当前绝大部分浏览器（IE8/9/10/11，Chrome，Firefox，Safari等），底层依赖矢量图形库 [ZRender](https://github.com/ecomfe/zrender)，提供直观，交互丰富，可高度个性化定制的数据可视化图表。

大白话：

- 是一个JS插件
- 性能好可流畅运行PC与移动设备
- 兼容主流浏览器
- 提供很多常用图表，且可**定制**。
  - [折线图](https://www.echartsjs.com/zh/option.html#series-line)、[柱状图](https://www.echartsjs.com/zh/option.html#series-bar)、[散点图](https://www.echartsjs.com/zh/option.html#series-scatter)、[饼图](https://www.echartsjs.com/zh/option.html#series-pie)、[K线图](https://www.echartsjs.com/zh/option.html#series-candlestick)

官网地址：<https://www.echartsjs.com/zh/index.html>

ECharts 包含了以下特性：

- **丰富的可视化类型**: 提供了常规的折线图、柱状图、散点图、饼图、K线图，用于统计的盒形图，用于地理数据可视化的地图、热力图、线图，用于关系数据可视化的关系图、treemap、旭日图，多维数据可视化的平行坐标，还有用于 BI 的漏斗图，仪表盘，并且支持图与图之间的混搭。
- **多种数据格式无需转换直接使用**: 内置的 dataset 属性（4.0+）支持直接传入包括二维表，key-value 等多种格式的数据源，此外还支持输入 TypedArray 格式的数据。
- **千万数据的前端展现**: 通过增量渲染技术（4.0+），配合各种细致的优化，ECharts 能够展现千万级的数据量。
- **移动端优化**: 针对移动端交互做了细致的优化，例如移动端小屏上适于用手指在坐标系中进行缩放、平移。 PC 端也可以用鼠标在图中进行缩放（用鼠标滚轮）、平移等。
- **多渲染方案，跨平台使用**: 支持以 Canvas、SVG（4.0+）、VML 的形式渲染图表。
- **深度的交互式数据探索**: 提供了 图例、视觉映射、数据区域缩放、tooltip、数据刷选等开箱即用的交互组件，可以对数据进行多维度数据筛取、视图缩放、展示细节等交互操作。
- **多维数据的支持以及丰富的视觉编码手段**: 对于传统的散点图等，传入的数据也可以是多个维度的。
- **动态数据**: 数据的改变驱动图表展现的改变。
- **绚丽的特效**: 针对线数据，点数据等地理数据的可视化提供了吸引眼球的特效。
- **通过 GL 实现更多更强大绚丽的三维可视化**: 在 VR，大屏场景里实现三维的可视化效果。
- **无障碍访问（4.0+）**: 支持自动根据图表配置项智能生成描述，使得盲人可以在朗读设备的帮助下了解图表内容，让图表可以被更多人群访问！

## 2.使用步骤

> 1.引入echarts 插件文件到html页面中
>
> 2.准备一个有宽、高的DOM容器
>
> 3.初始化echarts实例对象
>
> 4.指定配置项和数据(option)
>
> 5.将配置项设置给echarts实例对象

- 1.引入echarts.min.js 插件、flexible.js、jquery.js、文件到html页面中
  下载： ：[下载 - Apache ECharts](https://echarts.apache.org/zh/download.html)

  ```html
  <script src="js/echarts.min.js"></script>
  ```

- 2.准备一个有宽、高的DOM容器

  ```html
  <div id="main" style="width: 600px;height:400px;"></div>
  ```

- 3.初始化echarts实例对象

  ```js
  var myChart = echarts.init(document.getElementById('main'));
  ```

- 4.指定配置项和数据(option)

  ```js
  var option = {
      xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
          type: 'value'
      },
      series: [{
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line'
      }]
  };
  ```

- 5.将配置项设置给echarts实例对象

  ```js
  myChart.setOption(option);
  ```

整体的代码如下：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <!-- 引入echarts.js文件 -->
    <script src="./lib/echarts.min.js"></script>  
    <script>
        onload=()=>{
            // 初始化echarts实例对象 其中init函数参数为dom元素，决定图标最终展示的位置
            var myECharts = echarts.init(document.querySelector('#root'));
            // 准备配置项！
            var option ={
                xAxis:{   //直角坐标系中的x轴
                    type:'category',  //类目轴
                    data:['兰博基尼','劳斯莱斯','梅赛德斯']  //具体的类目
                },
                yAxis:{  //直角坐标系中的y轴
                    type:'value'  //数值轴 从series中取得数据
                },
                series:[  //系列列表，每个系列通过type决定自己的图表类型
                    {
                        name:'价格',   
                        type:'bar',  //图表类型
                        data:[50000000,52000000,49000000]
                    }
                ]
            }
            // 将配置项设置给echarts实例对象
            myECharts.setOption(option);
        }
    </script>
</head>
<body>
    <!-- 准备一个图表容器盒子 -->
    <div id="root" style="width: 700px; height: 500px;"></div>
</body>
</html>

```

## 3.三种引入方式

3.1使用script标签引入

我们可以在直接下载 echarts.min.js 并用 `<script>` 标签引入。

[echarts.min.js(4.7.0)](https://cdn.staticfile.org/echarts/4.7.0/echarts.min.js)

另外，开发环境下可以使用源代码版本 echarts.js 并用 `<script>` 标签引入，源码版本包含了常见的错误提示和警告。

[echarts.js(4.7.0)](https://cdn.staticfile.org/echarts/4.7.0/echarts.js)

我们也可以在 ECharts 的官网上直接下载更多丰富的版本，包含了不同主题跟语言，下载地址：https://echarts.apache.org/zh/download.html。

这些构建好的 echarts 提供了下面这几种定制：

- 完全版：`echarts/dist/echarts.js`，体积最大，包含所有的图表和组件，所包含内容参见：`echarts/echarts.all.js`。
- 常用版：`echarts/dist/echarts.common.js`，体积适中，包含常见的图表和组件，所包含内容参见：`echarts/echarts.common.js`。
- 精简版：`echarts/dist/echarts.simple.js`，体积较小，仅包含最常用的图表和组件，所包含内容参见：`echarts/echarts.simple.js`。

![image-20220728190830134](https://i0.hdslb.com/bfs/album/96ee88b4af60d447475e0df7bd6ef7c81fcab45a.png)

![image-20220728190941509](https://i0.hdslb.com/bfs/album/15080083e000c5412f5a96c395f7554c66cb4e83.png)

**使用例子如下：**

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>第一个 ECharts 实例</title>
    <!-- 引入 echarts.js 文件-->
 
    <!-- 方式一：通过<script>引入 -->
    <script src="../EChart/echarts.js"></script>
</head>
 
<body>
    <div id="chart" style="width: 500px;height:500px;"></div>
    <script type="text/javascript">
        var Chart = echarts.init(document.getElementById('chart'));
        var option = {
            title: {
                text: 'My Chart Example'
            },
            legend: {
                data: ['销量']
            },
            xAxis: {
                data: ["语文", "数学", "英语", "生物", "地理", "化学"]
            },
            yAxis: {},
            series: [{
                name: '科目',
                type: 'bar',
                data: [90, 80, 100, 70, 88, 93]
            }]
        };
 
        Chart.setOption(option);
    </script>
</body>
</html>
```

## 3.2使用CDN方法

以下推荐国外比较稳定的两个 CDN，国内还没发现哪一家比较好，目前还是建议下载到本地。

- **Staticfile CDN（国内）** : https://cdn.staticfile.org/echarts/4.3.0/echarts.min.js
- **jsDelivr**：https://cdn.jsdelivr.net/npm/echarts@4.3.0/dist/echarts.min.js。
- **cdnjs** : https://cdnjs.cloudflare.com/ajax/libs/echarts/4.3.0/echarts.min.js

**具体例子如下：**

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>第一个 ECharts 实例</title>
    <!-- 引入 echarts.js 文件-->
 
    <!-- 方式二 -->
    <script src=" https://cdn.staticfile.org/echarts/4.3.0/echarts.min.js"></script>
    <!-- 或者 方式三  -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/echarts/4.3.0/echarts.min.js"></script>
 
</head>
 
<body>
    <div id="chart" style="width: 500px;height:500px;"></div>
    <script type="text/javascript">
        var Chart = echarts.init(document.getElementById('chart'));
        var option = {
            title: {
                text: 'My Chart Example'
            },
            legend: {
                data: ['销量']
            },
            xAxis: {
                data: ["语文", "数学", "英语", "生物", "地理", "化学"]
            },
            yAxis: {},
            series: [{
                name: '科目',
                type: 'bar',
                data: [90, 80, 100, 70, 88, 93]
            }]
        };
 
        Chart.setOption(option);
    </script>
</body>
 
</html>
```

## 3.3npm方法

  第三种是通过`NPM`方式实现。

  需要注意的是，用NPM安装EChart，NPM的版本必须大于3.0。

 1.查看npm版本：npm 

 2.升级或安装cnpm：npm install cnpm -g

 3.升级npm：cnpm install npm -g

 4.通过cnpm获取echarts：cnpm install echarts --save

安装完成后 ECharts 和 zrender 会放在 node_modules 目录下。

![image-20220728191337397](https://i0.hdslb.com/bfs/album/7ffb680dff4547ab3d5a58d68281f868592e985c.png)

   然后，我们可以直接在项目代码中使用 require('echarts') 来使用。

**例子如下：**

```html
    <script type="text/javascript">
        var charts = require('echarts');
         var Chart = charts.init(document.getElementById('chart'));
        var option = {
            title: {
                text: 'My Chart Example'
            },
            legend: {
                data: ['销量']
            },
            xAxis: {
                data: ["语文", "数学", "英语", "生物", "地理", "化学"]
            },
            yAxis: {},
            series: [{
                name: '科目',
                type: 'bar',
                data: [90, 80, 100, 70, 88, 93]
            }]
        };
 
        Chart.setOption(option);
    </script>
```

## 4.基础配置

**可查询官方手册：**[Documentation - Apache ECharts](https://echarts.apache.org/zh/option.html#title)

这是要求同学们知道以下配置每个模块的主要作用干什么的就可以了

> 需要了解的主要配置：`series` `xAxis` `yAxis` `grid` `tooltip` `title` `legend` `color` 

- series

  - 系列列表。每个系列通过 `type` 决定自己的图表类型
  - 大白话：图标数据，指定什么类型的图标，可以多个图表重叠。

- xAxis：直角坐标系 grid 中的 x 轴

  - boundaryGap: 坐标轴两边留白策略 true，这时候刻度只是作为分隔线，标签和数据点都会在两个刻度之间的带(band)中间。

- yAxis：直角坐标系 grid 中的 y 轴

- grid：直角坐标系内绘图网格。 

- title：标题组件

- tooltip：提示框组件

- legend：图例组件

- color：调色盘颜色列表

- stack：数据堆叠，同个类目轴上系列配置相同的stack值后 后一个系列的值会在前一个系列的值上相加。


## 4.1title标题

title：标题

- 文字样式 textStyle
- 标题边框
  - borderWidth
  - borderColor
  - borderRadius
- 标题位置
  - top
  - bottom
  - left
  - right

```js
title:{  //标题
    text:'汽车价格柱状图',  //标题文字
    textStyle:{  //文字样式
    	color:'#4DBCFF'
    },
    borderWidth:1,  //标题边框宽度
    borderColor:'#302C3A', //边框颜色
    borderRadius:5,  //边框圆角
    left:30  //标题位置偏移
},
```

## 4.2tooltip提示

tooltip：提示

- 触发类型：trigger
  - item
  - axis
- 触发时机：triggerOn
  - mousemove
  - click
- 格式化：formatter
  - 模板字符串
  - 回调函数

```js
tooltip: {  //提示
    trigger: 'item',  //触发类型  item/axis
    triggerOn: 'click',  //触发时机  mousemove/click
    formatter(arg) {
        // console.log(arg)
        return arg.name + '的价格：' + arg.data
    }  //格式化
},
```

## 4.3toolbox工具按钮

toolbox：工具按钮

- saveAsImage：导出图片
- dataView：数据视图
- restore：重置
- dataZoom：区域缩放
- magicType：切换图表类型

```js
toolbox:{  //工具
    feature:{  
        saveAsImage:{},  //导出图片
        dataView:{},  //数据视图
        restore:{},  //重置
        dataZoom:{},  //区域缩放
        magicType:{  //切换图表类型
            type:['bar','line']  //line:折线图
        }
    }
},
```

## 4.4legend图例筛选

legend：图例筛选

```js
legend:{
	data:['价格','人气']
},

//与系列配合
series: [  //系列列表，每个系列通过type决定自己的图表类型
    {
        name: '价格',
        type: 'bar',  //图表类型（柱状图）
        data: [50000000, 52000000, 49000000, 25000000, 36000000]
    },
    {
        name: '人气',
        type: 'bar',  //图表类型（柱状图）
        data: [50052118, 42358004, 49447899, 95880012, 36000000]
    }
]
```

## 注释：以下为直角坐标系中的常用配置

## 4.5grid网格 

网格 grid

```js
grid:{
    show:true,
    borderWidth:5,
    borderColor:'skyblue',
    width:500,
    height:350,
    top:50,
    left:100,
},
```

## 4.6axis坐标轴 

坐标轴 axis

- 分为 xAxis（x轴），yAxis（y轴）
- 轴类型 type
  - value：数值轴，自动会从目标数据中读取数据
  - category：类目轴，该类型必须通过data设置类目数据
- 显示位置 position
  - xAxis：可以取值为top或者bottom
  - yAxis：可以取值为left或者right

## 4.7dataZoom区域缩放 

区域缩放 dataZoom

- 用于区域缩放，对数据范围过滤，x轴y轴等候可以拥有
- dataZoom是一个数组，可以配置多个缩放区域
- 类型 type
  - slider：滑块
  - inside：内置，通过鼠标滚轮
- 指明作用轴
  - xAxisIndex
  - yAxisIndex
- 指明初始缩放情况
  - start：起始百分比
  - end：终止百分比

## 4.8series中的type类型

**系列列表**

每个系列通过 type 决定自己的图表类型:

```js
series: [{
    name: '销量',  // 系列名称
    type: 'bar',  // 系列图表类型
    data: [5, 20, 36, 10, 10, 20]  // 系列中的数据内容
}]
```

每个系列通过 type 决定自己的图表类型：

- **type: 'bar'**：柱状/条形图
- **type: 'line'**：折线/面积图
- **type: 'pie'**：饼图
- **type: 'scatter'**：散点（气泡）图
- **type: 'effectScatter'**：带有涟漪特效动画的散点（气泡）
- **type: 'radar'**：雷达图
- **type: 'tree'**：树型图
- **type: 'treemap'**：树型图
- **type: 'sunburst'**：旭日图
- **type: 'boxplot'**：箱形图
- **type: 'candlestick'**：K线图
- **type: 'heatmap'**：热力图
- **type: 'map'**：地图
- **type: 'parallel'**：平行坐标系的系列
- **type: 'lines'**：线图
- **type: 'graph'**：关系图
- **type: 'sankey'**：桑基图
- **type: 'funnel'**：漏斗图
- **type: 'gauge'**：仪表盘
- **type: 'pictorialBar'**：象形柱图
- **type: 'themeRiver'**：主题河流
- **type: 'custom'**：自定义系列

## 4.9小结

**常见类型**

| 类型           | 配置                                                         |
| -------------- | ------------------------------------------------------------ |
| 柱状图 bar     | seriess[].type、xAxis、yAxis、markPoint、markLine、label、barWidth |
| 折线图 line    | seriess[].type、xAxis、yAxis、markPoint、markLine、markArea、smooth、lineStyle、areaStyle、boundaryGap、scale |
| 散点图 scatter | seriess[].type、xAxis、yAxis、symbolSize、itemStyle、showEffectOn、rippleEffect、scale |
| 饼图 pie       | seriess[].type、label、radius、roseType、selectedMode、selectedOffset |
| 地图 map       | seriess[].type、geo、map、roam、zoom、center、label、GeoIndex、visualMap、coordinateSystem |
| 雷达图 radar   | seriess[].type、radar、indicator、label、areaStyle、shape    |
| 仪表盘 gauge   | seriess[].type、max、min、itemStyle                          |

**常见配置项**

| 配置项   | 具体配置项                                                   |
| :------- | ------------------------------------------------------------ |
| grid     | show、borderWidth、borderColor、left、top、right、bottom、width、height |
| axis     | type、data、position                                         |
| dataZoom | type、xAxisIndex、yAxisIndex、start、end                     |

**这三个只适合直角坐标系（柱状图** bar**、折线图** line**、散点图** scatter**）**

| 配置项      | 具体配置项                                                   |
| ----------- | ------------------------------------------------------------ |
| **title**   | textStyle、borderWidth、borderColor、borderRadius、left、top、right、bottom |
| **tooltip** | trigger、triggerOn、formatter                                |
| **toolbox** | feature、saveAsImage、dataView、restore、dataZoom、magicType |
| **legend**  | data                                                         |

**使用场景**

- **柱状图**：柱状图描述的是分类数据，呈现的是每一一个分类中有多少
- **折线图**：折线图常用来分析数据随时间的变化趋势
- **散点图**：散点图可以帮助我们推断出不同维度数据之间的相关性
- **饼图**：饼图可以很好地帮助用户快速了解不同分类的数据的占比情况
- **地图**：地图主要可以帮助我们从宏观的角度快速看出不同地理位置上数据的差异
- **雷达图**：雷达图可以用来分析多个维度的数据与标准数据的对比情况。
- **仪表盘**：仪表盘可以更直观的表现出某个指标的进度或实际情况

## 4.10案例

```html
<!DOCTYPE html>
<html>
 
<head>
    <meta charset="utf-8">
    <title>第一个 ECharts 实例</title>
    <!--步骤一： 引入 echarts.js 文件-->
    <script src="../EChart/echarts.js"></script>
</head>
 
<body>
    <!-- 步骤二：定义一个容器，用于绘制图表 -->
    <div id="chart" style="width: 500px;height:500px;"></div>
 
    <!-- 步骤三：配置图表相关属性 -->
    <script type="text/javascript">
        var Chart = echarts.init(document.getElementById('chart'));//获取ID为chart的组件，再这里绘制图表
        //option 中的都是图表的相关属性
        var option = {
            //1.图表额标题
            title: {
                text: 'My Chart Example'
            },
            //2.图表的图例
            legend: {
                //这一种是可以自己设置图例样式
                // data: [{
                //     name: '科目',
                //     // 强制设置图形为圆。
                //     icon: 'circle',
                //     // 设置文本为红色
                //     textStyle: {
                //         color: 'red'
                //     }
                // }]
                x: '75%', //设置图例X轴位置
                y: '10px',//设置Y轴位置
                orient: 'Vertical', //图例列表的布局朝向。
                data: ['科目']   //这一种是简单模式
            },
            //3.提示信息（鼠标放到图表上时会显示提示信息）
            tooltip: {
                show: true
            },
            //4.要再X轴显示的项
            xAxis: {
                data: ["语文", "数学", "英语", "生物", "地理", "化学"]
            },
            //5.要再y轴显示的项
            yAxis: {},
            //6.设置系列列表
            series: [{
                name: '科目', //系列名称
                type: 'bar',//这个系例图表的类型
                color: ['MediumPurple'],//设置颜色，这个属于调色盘，放到系列中，只针对本系列设置颜色，如果放到option下，就是对所有的系列进行这个调色盘设置。
                data: [90, 80, 100, 70, 88, 93]  //系列中的数据
            }]
        };
 
        //7.设置刚指定的配置项和数据显示图表
        Chart.setOption(option);
    </script>
</body>
 
</html>
```

**上面代码效果如图显示：** 

![image-20220728192900995](https://i0.hdslb.com/bfs/album/882c8684fbe71c2e73e20f41a8360a7a7fee5746.png)



## 5.echarts 各个配置项详细说明总结

```js
theme = {
    // 全图默认背景
    // backgroundColor: 'rgba(0,0,0,0)',

    // 默认色板
    color: ['#ff7f50','#87cefa','#da70d6','#32cd32','#6495ed',
            '#ff69b4','#ba55d3','#cd5c5c','#ffa500','#40e0d0',
            '#1e90ff','#ff6347','#7b68ee','#00fa9a','#ffd700',
            '#6699FF','#ff6666','#3cb371','#b8860b','#30e0e0'],

    // 图表标题
    title: {
        x: 'left',                 // 水平安放位置，默认为左对齐，可选为：
                                   // 'center' ¦ 'left' ¦ 'right'
                                   // ¦ {number}（x坐标，单位px）
        y: 'top',                  // 垂直安放位置，默认为全图顶端，可选为：
                                   // 'top' ¦ 'bottom' ¦ 'center'
                                   // ¦ {number}（y坐标，单位px）
        //textAlign: null          // 水平对齐方式，默认根据x设置自动调整
        backgroundColor: 'rgba(0,0,0,0)',
        borderColor: '#ccc',       // 标题边框颜色
        borderWidth: 0,            // 标题边框线宽，单位px，默认为0（无边框）
        padding: 5,                // 标题内边距，单位px，默认各方向内边距为5，
                                   // 接受数组分别设定上右下左边距，同css
        itemGap: 10,               // 主副标题纵向间隔，单位px，默认为10，
        textStyle: {
            fontSize: 18,
            fontWeight: 'bolder',
            color: '#333'          // 主标题文字颜色
        },
        subtextStyle: {
            color: '#aaa'          // 副标题文字颜色
        }
    },

    // 图例
    legend: {
        orient: 'horizontal',      // 布局方式，默认为水平布局，可选为：
                                   // 'horizontal' ¦ 'vertical'
        x: 'center',               // 水平安放位置，默认为全图居中，可选为：
                                   // 'center' ¦ 'left' ¦ 'right'
                                   // ¦ {number}（x坐标，单位px）
        y: 'top',                  // 垂直安放位置，默认为全图顶端，可选为：
                                   // 'top' ¦ 'bottom' ¦ 'center'
                                   // ¦ {number}（y坐标，单位px）
        backgroundColor: 'rgba(0,0,0,0)',
        borderColor: '#ccc',       // 图例边框颜色
        borderWidth: 0,            // 图例边框线宽，单位px，默认为0（无边框）
        padding: 5,                // 图例内边距，单位px，默认各方向内边距为5，
                                   // 接受数组分别设定上右下左边距，同css
        itemGap: 10,               // 各个item之间的间隔，单位px，默认为10，
                                   // 横向布局时为水平间隔，纵向布局时为纵向间隔
        itemWidth: 20,             // 图例图形宽度
        itemHeight: 14,            // 图例图形高度
        textStyle: {
            color: '#333'          // 图例文字颜色
        }
    },

    // 值域
    dataRange: {
        orient: 'vertical',        // 布局方式，默认为垂直布局，可选为：
                                   // 'horizontal' ¦ 'vertical'
        x: 'left',                 // 水平安放位置，默认为全图左对齐，可选为：
                                   // 'center' ¦ 'left' ¦ 'right'
                                   // ¦ {number}（x坐标，单位px）
        y: 'bottom',               // 垂直安放位置，默认为全图底部，可选为：
                                   // 'top' ¦ 'bottom' ¦ 'center'
                                   // ¦ {number}（y坐标，单位px）
        backgroundColor: 'rgba(0,0,0,0)',
        borderColor: '#ccc',       // 值域边框颜色
        borderWidth: 0,            // 值域边框线宽，单位px，默认为0（无边框）
        padding: 5,                // 值域内边距，单位px，默认各方向内边距为5，
                                   // 接受数组分别设定上右下左边距，同css
        itemGap: 10,               // 各个item之间的间隔，单位px，默认为10，
                                   // 横向布局时为水平间隔，纵向布局时为纵向间隔
        itemWidth: 20,             // 值域图形宽度，线性渐变水平布局宽度为该值 * 10
        itemHeight: 14,            // 值域图形高度，线性渐变垂直布局高度为该值 * 10
        splitNumber: 5,            // 分割段数，默认为5，为0时为线性渐变
        color:['#1e90ff','#f0ffff'],//颜色 
        //text:['高','低'],         // 文本，默认为数值文本
        textStyle: {
            color: '#333'          // 值域文字颜色
        }
    },

    toolbox: {
        orient: 'horizontal',      // 布局方式，默认为水平布局，可选为：
                                   // 'horizontal' ¦ 'vertical'
        x: 'right',                // 水平安放位置，默认为全图右对齐，可选为：
                                   // 'center' ¦ 'left' ¦ 'right'
                                   // ¦ {number}（x坐标，单位px）
        y: 'top',                  // 垂直安放位置，默认为全图顶端，可选为：
                                   // 'top' ¦ 'bottom' ¦ 'center'
                                   // ¦ {number}（y坐标，单位px）
        color : ['#1e90ff','#22bb22','#4b0082','#d2691e'],
        backgroundColor: 'rgba(0,0,0,0)', // 工具箱背景颜色
        borderColor: '#ccc',       // 工具箱边框颜色
        borderWidth: 0,            // 工具箱边框线宽，单位px，默认为0（无边框）
        padding: 5,                // 工具箱内边距，单位px，默认各方向内边距为5，
                                   // 接受数组分别设定上右下左边距，同css
        itemGap: 10,               // 各个item之间的间隔，单位px，默认为10，
                                   // 横向布局时为水平间隔，纵向布局时为纵向间隔
        itemSize: 16,              // 工具箱图形宽度
        featureImageIcon : {},     // 自定义图片icon
        featureTitle : {
            mark : '辅助线开关',
            markUndo : '删除辅助线',
            markClear : '清空辅助线',
            dataZoom : '区域缩放',
            dataZoomReset : '区域缩放后退',
            dataView : '数据视图',
            lineChart : '折线图切换',
            barChart : '柱形图切换',
            restore : '还原',
            saveAsImage : '保存为图片'
        }
    },

    // 提示框
    tooltip: {
        trigger: 'item',           // 触发类型，默认数据触发，见下图，可选为：'item' ¦ 'axis'
        showDelay: 20,             // 显示延迟，添加显示延迟可以避免频繁切换，单位ms
        hideDelay: 100,            // 隐藏延迟，单位ms
        transitionDuration : 0.4,  // 动画变换时间，单位s
        backgroundColor: 'rgba(0,0,0,0.7)',     // 提示背景颜色，默认为透明度为0.7的黑色
        borderColor: '#333',       // 提示边框颜色
        borderRadius: 4,           // 提示边框圆角，单位px，默认为4
        borderWidth: 0,            // 提示边框线宽，单位px，默认为0（无边框）
        padding: 5,                // 提示内边距，单位px，默认各方向内边距为5，
                                   // 接受数组分别设定上右下左边距，同css
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'line',         // 默认为直线，可选为：'line' | 'shadow'
            lineStyle : {          // 直线指示器样式设置
                color: '#48b',
                width: 2,
                type: 'solid'
            },
            shadowStyle : {                       // 阴影指示器样式设置
                width: 'auto',                   // 阴影大小
                color: 'rgba(150,150,150,0.3)'  // 阴影颜色
            }
        },
        textStyle: {
            color: '#fff'
        }
    },

    // 区域缩放控制器
    dataZoom: {
        orient: 'horizontal',      // 布局方式，默认为水平布局，可选为：
                                   // 'horizontal' ¦ 'vertical'
        // x: {number},            // 水平安放位置，默认为根据grid参数适配，可选为：
                                   // {number}（x坐标，单位px）
        // y: {number},            // 垂直安放位置，默认为根据grid参数适配，可选为：
                                   // {number}（y坐标，单位px）
        // width: {number},        // 指定宽度，横向布局时默认为根据grid参数适配
        // height: {number},       // 指定高度，纵向布局时默认为根据grid参数适配
        backgroundColor: 'rgba(0,0,0,0)',       // 背景颜色
        dataBackgroundColor: '#eee',            // 数据背景颜色
        fillerColor: 'rgba(144,197,237,0.2)',   // 填充颜色
        handleColor: 'rgba(70,130,180,0.8)'     // 手柄颜色
    },

    // 网格
    grid: {
        x: 80,
        y: 60,
        x2: 80,
        y2: 60,
        // width: {totalWidth} - x - x2,
        // height: {totalHeight} - y - y2,
        backgroundColor: 'rgba(0,0,0,0)',
        borderWidth: 1,
        borderColor: '#ccc'
    },

    // 类目轴
    categoryAxis: {
        position: 'bottom',    // 位置
        nameLocation: 'end',   // 坐标轴名字位置，支持'start' | 'end'
        boundaryGap: true,     // 类目起始和结束两端空白策略
        axisLine: {            // 坐标轴线
            show: true,        // 默认显示，属性show控制显示与否
            lineStyle: {       // 属性lineStyle控制线条样式
                color: '#48b',
                width: 2,
                type: 'solid'
            }
        },
        axisTick: {            // 坐标轴小标记
            show: true,       // 属性show控制显示与否，默认不显示
            interval: 'auto',
            // onGap: null,
            inside : false,    // 控制小标记是否在grid里 
            length :5,         // 属性length控制线长
            lineStyle: {       // 属性lineStyle控制线条样式
                color: '#333',
                width: 1
            }
        },
        axisLabel: {           // 坐标轴文本标签，详见axis.axisLabel
            show: true,
            interval: 'auto',
            rotate: 0,
            margin: 8,
            // formatter: null,
            textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                color: '#333'
            }
        },
        splitLine: {           // 分隔线
            show: true,        // 默认显示，属性show控制显示与否
            // onGap: null,
            lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                color: ['#ccc'],
                width: 1,
                type: 'solid'
            }
        },
        splitArea: {           // 分隔区域
            show: false,       // 默认不显示，属性show控制显示与否
            // onGap: null,
            areaStyle: {       // 属性areaStyle（详见areaStyle）控制区域样式
                color: ['rgba(250,250,250,0.3)','rgba(200,200,200,0.3)']
            }
        }
    },

    // 数值型坐标轴默认参数
    valueAxis: {
        position: 'left',      // 位置
        nameLocation: 'end',   // 坐标轴名字位置，支持'start' | 'end'
        nameTextStyle: {},     // 坐标轴文字样式，默认取全局样式
        boundaryGap: [0, 0],   // 数值起始和结束两端空白策略
        splitNumber: 5,        // 分割段数，默认为5
        axisLine: {            // 坐标轴线
            show: true,        // 默认显示，属性show控制显示与否
            lineStyle: {       // 属性lineStyle控制线条样式
                color: '#48b',
                width: 2,
                type: 'solid'
            }
        },
        axisTick: {            // 坐标轴小标记
            show: false,       // 属性show控制显示与否，默认不显示
            inside : false,    // 控制小标记是否在grid里 
            length :5,         // 属性length控制线长
            lineStyle: {       // 属性lineStyle控制线条样式
                color: '#333',
                width: 1
            }
        },
        axisLabel: {           // 坐标轴文本标签，详见axis.axisLabel
            show: true,
            rotate: 0,
            margin: 8,
            // formatter: null,
            textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                color: '#333'
            }
        },
        splitLine: {           // 分隔线
            show: true,        // 默认显示，属性show控制显示与否
            lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                color: ['#ccc'],
                width: 1,
                type: 'solid'
            }
        },
        splitArea: {           // 分隔区域
            show: false,       // 默认不显示，属性show控制显示与否
            areaStyle: {       // 属性areaStyle（详见areaStyle）控制区域样式
                color: ['rgba(250,250,250,0.3)','rgba(200,200,200,0.3)']
            }
        }
    },

    polar : {
        center : ['50%', '50%'],    // 默认全局居中
        radius : '75%',
        startAngle : 90,
        splitNumber : 5,
        name : {
            show: true,
            textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                color: '#333'
            }
        },
        axisLine: {            // 坐标轴线
            show: true,        // 默认显示，属性show控制显示与否
            lineStyle: {       // 属性lineStyle控制线条样式
                color: '#ccc',
                width: 1,
                type: 'solid'
            }
        },
        axisLabel: {           // 坐标轴文本标签，详见axis.axisLabel
            show: false,
            textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                color: '#333'
            }
        },
        splitArea : {
            show : true,
            areaStyle : {
                color: ['rgba(250,250,250,0.3)','rgba(200,200,200,0.3)']
            }
        },
        splitLine : {
            show : true,
            lineStyle : {
                width : 1,
                color : '#ccc'
            }
        }
    },

    // 柱形图默认参数
    bar: {
        barMinHeight: 0,          // 最小高度改为0
        // barWidth: null,        // 默认自适应
        barGap: '30%',            // 柱间距离，默认为柱形宽度的30%，可设固定值
        barCategoryGap : '20%',   // 类目间柱形距离，默认为类目间距的20%，可设固定值
        itemStyle: {
            normal: {
                // color: '各异',
                barBorderColor: '#fff',       // 柱条边线
                barBorderRadius: 0,           // 柱条边线圆角，单位px，默认为0
                barBorderWidth: 1,            // 柱条边线线宽，单位px，默认为1
                label: {
                    show: false
                    // position: 默认自适应，水平布局为'top'，垂直布局为'right'，可选为
                    //           'inside'|'left'|'right'|'top'|'bottom'
                    // textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE
                }
            },
            emphasis: {
                // color: '各异',
                barBorderColor: 'rgba(0,0,0,0)',   // 柱条边线
                barBorderRadius: 0,                // 柱条边线圆角，单位px，默认为0
                barBorderWidth: 1,                 // 柱条边线线宽，单位px，默认为1
                label: {
                    show: false
                    // position: 默认自适应，水平布局为'top'，垂直布局为'right'，可选为
                    //           'inside'|'left'|'right'|'top'|'bottom'
                    // textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE
                }
            }
        }
    },

    // 折线图默认参数
    line: {
        itemStyle: {
            normal: {
                // color: 各异,
                label: {
                    show: false
                    // position: 默认自适应，水平布局为'top'，垂直布局为'right'，可选为
                    //           'inside'|'left'|'right'|'top'|'bottom'
                    // textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE
                },
                lineStyle: {
                    width: 2,
                    type: 'solid',
                    shadowColor : 'rgba(0,0,0,0)', //默认透明
                    shadowBlur: 5,
                    shadowOffsetX: 3,
                    shadowOffsetY: 3
                }
            },
            emphasis: {
                // color: 各异,
                label: {
                    show: false
                    // position: 默认自适应，水平布局为'top'，垂直布局为'right'，可选为
                    //           'inside'|'left'|'right'|'top'|'bottom'
                    // textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE
                }
            }
        },
        //smooth : false,
        //symbol: null,         // 拐点图形类型
        symbolSize: 2,          // 拐点图形大小
        //symbolRotate : null,  // 拐点图形旋转控制
        showAllSymbol: false    // 标志图形默认只有主轴显示（随主轴标签间隔隐藏策略）
    },

    // K线图默认参数
    k: {
        // barWidth : null          // 默认自适应
        // barMaxWidth : null       // 默认自适应 
        itemStyle: {
            normal: {
                color: '#fff',          // 阳线填充颜色
                color0: '#00aa11',      // 阴线填充颜色
                lineStyle: {
                    width: 1,
                    color: '#ff3200',   // 阳线边框颜色
                    color0: '#00aa11'   // 阴线边框颜色
                }
            },
            emphasis: {
                // color: 各异,
                // color0: 各异
            }
        }
    },

    // 散点图默认参数
    scatter: {
        //symbol: null,      // 图形类型
        symbolSize: 4,       // 图形大小，半宽（半径）参数，当图形为方向或菱形则总宽度为symbolSize * 2
        //symbolRotate : null,  // 图形旋转控制
        large: false,        // 大规模散点图
        largeThreshold: 2000,// 大规模阀值，large为true且数据量>largeThreshold才启用大规模模式
        itemStyle: {
            normal: {
                // color: 各异,
                label: {
                    show: false
                    // position: 默认自适应，水平布局为'top'，垂直布局为'right'，可选为
                    //           'inside'|'left'|'right'|'top'|'bottom'
                    // textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE
                }
            },
            emphasis: {
                // color: '各异'
                label: {
                    show: false
                    // position: 默认自适应，水平布局为'top'，垂直布局为'right'，可选为
                    //           'inside'|'left'|'right'|'top'|'bottom'
                    // textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE
                }
            }
        }
    },

    // 雷达图默认参数
    radar : {
        itemStyle: {
            normal: {
                // color: 各异,
                label: {
                    show: false
                },
                lineStyle: {
                    width: 2,
                    type: 'solid'
                }
            },
            emphasis: {
                // color: 各异,
                label: {
                    show: false
                }
            }
        },
        //symbol: null,         // 拐点图形类型
        symbolSize: 2           // 可计算特性参数，空数据拖拽提示图形大小
        //symbolRotate : null,  // 图形旋转控制
    },

    // 饼图默认参数
    pie: {
        center : ['50%', '50%'],    // 默认全局居中
        radius : [0, '75%'],
        clockWise : false,          // 默认逆时针
        startAngle: 90,
        minAngle: 0,                // 最小角度改为0
        selectedOffset: 10,         // 选中是扇区偏移量
        itemStyle: {
            normal: {
                // color: 各异,
                borderColor: '#fff',
                borderWidth: 1,
                label: {
                    show: true,
                    position: 'outer'
                    // textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE
                },
                labelLine: {
                    show: true,
                    length: 20,
                    lineStyle: {
                        // color: 各异,
                        width: 1,
                        type: 'solid'
                    }
                }
            },
            emphasis: {
                // color: 各异,
                borderColor: 'rgba(0,0,0,0)',
                borderWidth: 1,
                label: {
                    show: false
                    // position: 'outer'
                    // textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE
                },
                labelLine: {
                    show: false,
                    length: 20,
                    lineStyle: {
                        // color: 各异,
                        width: 1,
                        type: 'solid'
                    }
                }
            }
        }
    },

    map: {
        mapType: 'china',   // 各省的mapType暂时都用中文
        mapLocation: {
            x : 'center',
            y : 'center'
            // width    // 自适应
            // height   // 自适应
        },
        showLegendSymbol : true,       // 显示图例颜色标识（系列标识的小圆点），存在legend时生效
        itemStyle: {
            normal: {
                // color: 各异,
                borderColor: '#fff',
                borderWidth: 1,
                areaStyle: {
                    color: '#ccc'//rgba(135,206,250,0.8)
                },
                label: {
                    show: false,
                    textStyle: {
                        color: 'rgba(139,69,19,1)'
                    }
                }
            },
            emphasis: {                 // 也是选中样式
                // color: 各异,
                borderColor: 'rgba(0,0,0,0)',
                borderWidth: 1,
                areaStyle: {
                    color: 'rgba(255,215,0,0.8)'
                },
                label: {
                    show: false,
                    textStyle: {
                        color: 'rgba(139,69,19,1)'
                    }
                }
            }
        }
    },

    force : {
        // 数据map到圆的半径的最小值和最大值
        minRadius : 10,
        maxRadius : 20,
        density : 1.0,
        attractiveness : 1.0,
        // 初始化的随机大小位置
        initSize : 300,
        // 向心力因子，越大向心力越大
        centripetal : 1,
        // 冷却因子
        coolDown : 0.99,
        // 分类里如果有样式会覆盖节点默认样式
        itemStyle: {
            normal: {
                // color: 各异,
                label: {
                    show: false
                    // textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE
                },
                nodeStyle : {
                    brushType : 'both',
                    color : '#f08c2e',
                    strokeColor : '#5182ab'
                },
                linkStyle : {
                    strokeColor : '#5182ab'
                }
            },
            emphasis: {
                // color: 各异,
                label: {
                    show: false
                    // textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE
                },
                nodeStyle : {},
                linkStyle : {}
            }
        }
    },

    chord : {
        radius : ['65%', '75%'],
        center : ['50%', '50%'],
        padding : 2,
        sort : 'none', // can be 'none', 'ascending', 'descending'
        sortSub : 'none', // can be 'none', 'ascending', 'descending'
        startAngle : 90,
        clockWise : false,
        showScale : false,
        showScaleText : false,
        itemStyle : {
            normal : {
                label : {
                    show : true
                    // textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE
                },
                lineStyle : {
                    width : 0,
                    color : '#000'
                },
                chordStyle : {
                    lineStyle : {
                        width : 1,
                        color : '#666'
                    }
                }
            },
            emphasis : {
                lineStyle : {
                    width : 0,
                    color : '#000'
                },
                chordStyle : {
                    lineStyle : {
                        width : 2,
                        color : '#333'
                    }
                }
            }
        }
    },

    island: {
        r: 15,
        calculateStep: 0.1  // 滚轮可计算步长 0.1 = 10%
    },

    markPoint : {
        symbol: 'pin',         // 标注类型
        symbolSize: 10,        // 标注大小，半宽（半径）参数，当图形为方向或菱形则总宽度为symbolSize * 2
        //symbolRotate : null, // 标注旋转控制
        itemStyle: {
            normal: {
                // color: 各异，
                // borderColor: 各异,     // 标注边线颜色，优先于color 
                borderWidth: 2,            // 标注边线线宽，单位px，默认为1
                label: {
                    show: true,
                    position: 'inside' // 可选为'left'|'right'|'top'|'bottom'
                    // textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE
                }
            },
            emphasis: {
                // color: 各异
                label: {
                    show: true
                    // position: 'inside'  // 'left'|'right'|'top'|'bottom'
                    // textStyle: null     // 默认使用全局文本样式，详见TEXTSTYLE
                }
            }
        }
    },

    markLine : {
        // 标线起始和结束的symbol介绍类型，如果都一样，可以直接传string
        symbol: ['circle', 'arrow'],  
        // 标线起始和结束的symbol大小，半宽（半径）参数，当图形为方向或菱形则总宽度为symbolSize * 2
        symbolSize: [2, 4],
        // 标线起始和结束的symbol旋转控制
        //symbolRotate : null,
        itemStyle: {
            normal: {
                // color: 各异,           // 标线主色，线色，symbol主色
                // borderColor: 随color,     // 标线symbol边框颜色，优先于color 
                borderWidth: 2,          // 标线symbol边框线宽，单位px，默认为2
                label: {
                    show: false,
                    // 可选为 'start'|'end'|'left'|'right'|'top'|'bottom'
                    position: 'inside',  
                    textStyle: {         // 默认使用全局文本样式，详见TEXTSTYLE
                        color: '#333'
                    }
                },
                lineStyle: {
                    // color: 随borderColor, // 主色，线色，优先级高于borderColor和color
                    // width: 随borderWidth, // 优先于borderWidth
                    type: 'solid',
                    shadowColor : 'rgba(0,0,0,0)', //默认透明
                    shadowBlur: 5,
                    shadowOffsetX: 3,
                    shadowOffsetY: 3
                }
            },
            emphasis: {
                // color: 各异
                label: {
                    show: false
                    // position: 'inside' // 'left'|'right'|'top'|'bottom'
                    // textStyle: null    // 默认使用全局文本样式，详见TEXTSTYLE
                },
                lineStyle : {}
            }
        }
    },

    textStyle: {
        decoration: 'none',
        fontFamily: 'Arial, Verdana, sans-serif',
        fontFamily2: '微软雅黑',    // IE8- 字体模糊并且不支持不同字体混排，额外指定一份
        fontSize: 12,
        fontStyle: 'normal',
        fontWeight: 'normal'
    },

    // 默认标志图形类型列表
    symbolList : [
      'circle', 'rectangle', 'triangle', 'diamond',
      'emptyCircle', 'emptyRectangle', 'emptyTriangle', 'emptyDiamond'
    ],
    loadingText : 'Loading...',
    // 可计算特性配置，孤岛，提示颜色
    calculable: false,              // 默认关闭可计算特性
    calculableColor: 'rgba(255,165,0,0.6)',       // 拖拽提示边框颜色
    calculableHolderColor: '#ccc', // 可计算占位提示颜色
    nameConnector: ' & ',
    valueConnector: ' : ',
    animation: true,
    animationThreshold: 2500,       // 动画元素阀值，产生的图形原素超过2500不出动画
    addDataAnimation: true,         // 动态数据接口是否开启动画效果
    animationDuration: 2000,
    animationEasing: 'ExponentialOut'    //BounceOut
}
```

## 6.柱状图

- 常见效果

  - 标记

    - markPoint：标记点（最大值，最小值）
    - markLine：标记线（平均值）

  - 显示

    - label：数值显示
    - barWidth：柱宽度
    - 调换x轴y轴实现横向柱状图

## 6.1柱状图图表（两大步骤）

- 官网找到类似实例， 适当分析，并且引入到HTML页面中
- 根据需求定制图表

## 6.2找官网实例

引入到html页面中

~~~javascript
// 柱状图1模块
(function() {
  // 实例化对象
  let myChart = echarts.init(document.querySelector(".bar .chart"));
  // 指定配置和数据
  let option = {
    color: ["#3398DB"],
    tooltip: {
      trigger: "axis",
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true
    },
    xAxis: [
      {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        axisTick: {
          alignWithLabel: true
        }
      }
    ],
    yAxis: [
      {
        type: "value"
      }
    ],
    series: [
      {
        name: "直接访问",
        type: "bar",
        barWidth: "60%",
        data: [10, 52, 200, 334, 390, 330, 220]
      }
    ]
  };

  // 把配置给实例对象
  myChart.setOption(option);
})();
~~~

## 6.3根据需求定制

根据需求定制

- 修改图表柱形颜色  #2f89cf


   - 修改图表大小  top 为 10px   bottom 为  4%    grid决定我们的柱状图的大小

   ~~~JavaScript
   // color设置我们线条的颜色 注意后面是个数组
      color: ['#2f89cf'],
  // 网格配置  grid可以控制线形图 柱状图 图表离上下左右边的距离
      grid: {
        left: '0%',
        top: '10px',
        right: '0%',
        bottom: '4%',
        // 是否显示刻度标签 如果是true 就显示 否则反之
        containLabel: true,
      },
   ~~~

   - X轴相关设置  xAxis
     - 文本颜色设置为   rgba(255,255,255,.6)   字体大小为 12px
     - X轴线的样式 不显示

   ~~~JavaScript
   // 设置x轴标签文字样式
  // x轴的文字颜色和大小
        axisLabel: {
          color: "rgba(255,255,255,.6)",
          fontSize: "12"
        },
      //  坐标轴轴线相关设置。
      axisLine: {
        // 是否显示坐标轴轴线。
        show: false,
        // 如果想要设置单独的线条样式
        lineStyle: {
          color: 'rgba(255,255,255,.1)',
          width: 1,
          type: 'solid',
        },
      },
   ~~~

   - Y 轴相关定制
     - 文本颜色设置为   rgba(255,255,255,.6)   字体大小为 12px
     - Y 轴线条样式 更改为  1像素的  rgba(255,255,255,.1) 边框
     - 分隔线的颜色修饰为  1像素的  rgba(255,255,255,.1)   

   ~~~JavaScript
        // 修改刻度标签 相关样式
        axisLabel: {
          color: 'rgba(255,255,255,.6) ',
          fontSize: 12,
        },
        // y轴坐标轴的线条改为了 2像素
        axisLine: {
          lineStyle: {
            color: 'rgba(255,255,255,.1)',
            width: 2,
          },
        },
        // y轴分割线的颜色
        splitLine: {
          lineStyle: {
            color: 'rgba(255,255,255,.1)',
          },
        },
   ~~~

   - 修改柱形为圆角以及柱子宽度  series 里面设置

   ~~~JavaScript
// 线的数据
series: [
      {
        // 移入提示文字
        name: '直接访问',
        type: 'bar',
        // 柱子的宽度
        barWidth: '35%',
        // 数据
        data: [200, 300, 300, 900, 1500, 1200, 600],
        itemStyle: {
          // 修改柱子圆角
          barBorderRadius: 5,
        },
      },
    ],
   ~~~

   - 更换对应数据

   ~~~JavaScript
// x轴中更换data数据
 data: [ "旅游行业","教育培训", "游戏行业", "医疗行业", "电商行业", "社交行业", "金融行业" ],
// series 更换数据
 data: [200, 300, 300, 900, 1500, 1200, 600]
   ~~~

- 让图表跟随屏幕自适应

~~~javascript
  window.addEventListener("resize", function() {
    myChart.resize();
  });
~~~

**完整代码**

```js
// 柱形图1
(function () {
  // 实例化对象
  const barEchart = echarts.init(document.querySelector('.bar>.chart'));
  // 指定配置和数据
  const barOptions = {
    // color设置我们线条的颜色 注意后面是个数组
    color: ['#2f89cf'],
    // 图表的提示框组件
    tooltip: {
      // 触发方式
      trigger: 'axis',
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
      },
    },
    // 网格配置  grid可以控制线形图 柱状图 图表离上下左右边的距离
    grid: {
      left: '0%',
      top: '10px',
      right: '0%',
      bottom: '4%',
      // 是否显示刻度标签 如果是true 就显示 否则反之
      containLabel: true,
    },
    // 设置x轴的相关配置
    xAxis: {
      // 坐标轴类型 类目轴，适用于离散的类目数据
      type: 'category',
      /*
      类目数据，在类目轴（type: 'category'）中有效。
      如果没有设置 type，但是设置了 axis.data，则认为 type 是 'category'。
      */
      data: ['旅游行业', '教育培训', '游戏行业', '医疗行业', '电商行业', '社交行业', '金融行业'],
      // 是否让我们的线条和坐标轴有缝隙
      boundaryGap: true,
      // 坐标轴刻度相关设置。
      axisTick: {
        // 类目轴中在 boundaryGap 为 true 的时候有效，可以保证刻度线和标签对齐。
        alignWithLabel: true,
      },
      // 修改刻度标签 相关样式
      axisLabel: {
        color: 'rgba(255,255,255,.6) ',
        fontSize: '10',
      },
      //  坐标轴轴线相关设置。
      axisLine: {
        // 是否显示坐标轴轴线。
        show: false,
        // 如果想要设置单独的线条样式
        lineStyle: {
          color: 'rgba(255,255,255,.1)',
          width: 1,
          type: 'solid',
        },
      },
    },
    yAxis: [
      {
        type: 'value',
        // 修改刻度标签 相关样式
        axisLabel: {
          color: 'rgba(255,255,255,.6) ',
          fontSize: 12,
        },
        // y轴坐标轴的线条改为了 2像素
        axisLine: {
          lineStyle: {
            color: 'rgba(255,255,255,.1)',
            width: 2,
          },
        },
        // y轴分割线的颜色
        splitLine: {
          lineStyle: {
            color: 'rgba(255,255,255,.1)',
          },
        },
      },
    ],
    series: [
      {
        // 移入提示文字
        name: '直接访问',
        type: 'bar',
        // 柱子的宽度
        barWidth: '35%',
        // 数据
        data: [200, 300, 300, 900, 1500, 1200, 600],
        itemStyle: {
          // 修改柱子圆角
          barBorderRadius: 5,
        },
      },
    ],
  };
  // 把配置给实例对象
  barEchart.setOption(barOptions);
  window.addEventListener('resize', _ => barEchart.resize());
})();
```

<img src="https://i0.hdslb.com/bfs/album/dd0317b888c72464d8d9168792f0f1591d6e31b3.png" alt="image-20220728230034650"  />

## 6.4柱状图2定制

- 官网找到类似实例， 适当分析，并且引入到HTML页面中
- 根据需求定制图表

需求1： 修改图形大小 grid

~~~javascript
  // 图标位置
    grid: {
      top: "10%",
      left: "22%",
      bottom: "10%"
    },
~~~

需求2： 不显示x轴 

~~~javascript
   xAxis: {
      show: false
    },
~~~

需求3： y轴相关定制

- 不显示y轴线和相关刻度

~~~javascript
//不显示y轴线条
axisLine: {
    show: false
        },
// 不显示刻度
axisTick: {
   show: false
},
~~~

- y轴文字的颜色设置为白色

~~~javascript
   axisLabel: {
          color: "#fff"
   },
~~~

需求4： 修改第一组柱子相关样式（条状）

~~~javascript
name: "条",
// 柱子之间的距离
barCategoryGap: 50,
//柱子的宽度
barWidth: 10,
// 柱子设为圆角
itemStyle: {
    normal: {
      barBorderRadius: 20,       
    }
},
~~~

- 设置第一组柱子内百分比显示数据

~~~javascript
// 图形上的文本标签
label: {
    normal: {
         show: true,
         // 图形内显示
         position: "inside",
         // 文字的显示格式
         formatter: "{c}%"
     }
},
~~~

- 设置第一组柱子不同颜色

~~~javascript
// 声明颜色数组
var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];
// 2. 给 itemStyle  里面的color 属性设置一个 返回值函数
  itemStyle: {
          normal: {
            barBorderRadius: 20,  
            // params 传进来的是柱子对象
            console.log(params);
            // dataIndex 是当前柱子的索引号
            return myColor[params.dataIndex];
          }
         
},
~~~

需求5： 修改第二组柱子的相关配置（框状）

~~~javascript
  	    name: "框",
        type: "bar",
        barCategoryGap: 50,
        barWidth: 15,
        itemStyle: {
            color: "none",
            borderColor: "#00c1de",
            borderWidth: 3,
            barBorderRadius: 15
        },
        data: [19325, 23438, 31000, 121594, 134141, 681807]
      }
~~~

需求6： 给y轴添加第二组数据

~~~javascript
yAxis: [
      {
      type: "category",
      data: ["印尼", "美国", "印度", "中国", "世界人口(万)"],
      // 不显示y轴的线
      axisLine: {
        show: false
      },
      // 不显示刻度
      axisTick: {
        show: false
      },
      // 把刻度标签里面的文字颜色设置为白色
      axisLabel: {
        color: "#fff"
      }
    },
      {
        show: true,
        data: [702, 350, 610, 793, 664],
           // 不显示y轴的线
      axisLine: {
        show: false
      },
      // 不显示刻度
      axisTick: {
        show: false
      },
        axisLabel: {
          textStyle: {
            fontSize: 12,
            color: "#fff"
          }
        }
      }
    ],
~~~

需求7： 设置两组柱子层叠以及更换数据

~~~javascript
// 给series  第一个对象里面的 添加 
// 控制当前数据使用哪一个y轴
// 左边的y坐标轴的索引是0
// 右边边的y坐标轴的索引是1
yAxisIndex: 0,
// 给series  第二个对象里面的 添加 
yAxisIndex: 1,
// series 第一个对象里面的data
data: [70, 34, 60, 78, 69],
// series 第二个对象里面的data
data: [100, 100, 100, 100, 100],
// y轴更换第一个对象更换data数据
data: ["HTML5", "CSS3", "javascript", "VUE", "NODE"],
// y轴更换第二个对象更换data数据
data:[702, 350, 610, 793, 664],
~~~

**完整代码**

```js
var myColor = ['#1089E7', '#F57474', '#56D0E3', '#F8B448', '#8B78F6'];
  // 1. 实例化对象
  var myChart = echarts.init(document.querySelector('.bar2 .chart'));
  // 2. 指定配置和数据
  var option = {
    grid: {
      top: '10%',
      left: '22%',
      bottom: '10%',
      // containLabel: true,
    },
    // 不显示x轴的相关信息
    xAxis: {
      show: false,
    },
    yAxis: [
      {
        type: 'category',
        // 数据反转
        inverse: true,
        data: ['HTML5', 'CSS3', 'javascript', 'VUE', 'NODE'],
        // 不显示y轴的线
        axisLine: {
          show: false,
        },
        // 不显示刻度
        axisTick: {
          show: false,
        },
        // 把刻度标签里面的文字颜色设置为白色
        axisLabel: {
          color: '#fff',
        },
      },
      {
        data: [702, 350, 610, 793, 664],
        inverse: true,
        // 不显示y轴的线
        axisLine: {
          show: false,
        },
        // 不显示刻度
        axisTick: {
          show: false,
        },
        // 把刻度标签里面的文字颜色设置为白色
        axisLabel: {
          color: '#fff',
        },
      },
    ],
    series: [
      {
        name: '条',
        type: 'bar',
        data: [70, 34, 60, 78, 69],
        // yAxisIndex: 0,
        // 修改第一组柱子的圆角
        itemStyle: {
          barBorderRadius: 20,
          // 此时的color 可以修改柱子的颜色
          color: params => myColor[params.dataIndex],
          // params 传进来的是柱子对象
          // console.log(params);
          // dataIndex 是当前柱子的索引号
        },
        // 柱子之间的距离
        barCategoryGap: 50,
        //柱子的宽度
        barWidth: 10,
        // 显示柱子内的文字
        label: {
          show: true,
          position: 'inside',
          // {c} 会自动的解析为 数据  data里面的数据
          formatter: '{c}%',
        },
      },
      {
        name: '框',
        type: 'bar',
        barCategoryGap: 50,
        barWidth: 15,
        yAxisIndex: 1,
        data: [100, 100, 100, 100, 100],
        itemStyle: {
          color: 'none',
          borderColor: '#00c1de',
          borderWidth: 3,
          barBorderRadius: 15,
        },
      },
    ],
  };

  // 3. 把配置给实例对象
  myChart.setOption(option);
  // 4. 让图表跟随屏幕自动的去适应
  window.addEventListener('resize', function () {
    myChart.resize();
  });
```

![image-20220729153320110](https://i0.hdslb.com/bfs/album/8d39c7b47fb60ff7defb9225183f2313cf5a1c8e.png)

## 7.折线图

## 7.1常见效果

常见效果

- 标记
  - markPoint：标记点（最大值，最小值）
  - markLine：标记线（平均值）
  - markArea：标注区间
- 线条控制
  - smooth：平滑
  - lineStyle：线条样式
- 填充风格
  - areaStyle：填充区域风格
- 紧挨边缘
  - boundaryGap (配置在xAxis中)
- 缩放：脱离0值比例
  - scale
- 堆叠图（当有多个系列使图表显得杂乱无章时使用）
  - atack
- 显示
  - label：数值显示

## 7.2折线图1 人员变化模块制作

- 官网找到类似实例， 适当分析，并且引入到HTML页面中
- 根据需求定制图表

需求1： 修改折线图大小，显示边框设置颜色：#012f4a，并且显示刻度标签。

```
     // 设置网格样式
     grid: { 
       top: '20%',
       left: '3%',
       right: '4%',
       bottom: '3%',
       show: true,// 显示边框
       borderColor: '#012f4a',// 边框颜色
       containLabel: true // 包含刻度文字在内
     },
```

需求2： 修改图例组件中的文字颜色 #4c9bfd， 距离右侧 right 为 10%

```
  // 图例组件
     legend: {
       textStyle: {
         color: '#4c9bfd' // 图例文字颜色
       },
       right: '10%' // 距离右边10%
     },
```

需求3： x轴相关配置

- 刻度去除
- x轴刻度标签字体颜色：#4c9bfd
- 剔除x坐标轴线颜色（将来使用Y轴分割线)
- 轴两端是不需要内间距 boundaryGap

```
     xAxis: {
       type: 'category',
       data: ["周一", "周二"],
       axisTick: {
          show: false // 去除刻度线
        },
        axisLabel: {
          color: '#4c9bfd' // 文本颜色
        },
        axisLine: {
          show: false // 去除轴线
        },
        boundaryGap: false  // 去除轴内间距
     },
```

需求4： y轴的定制

- 刻度去除
- 字体颜色：#4c9bfd
- 分割线颜色：#012f4a

```
     yAxis: {
       type: 'value',
       axisTick: {
         show: false  // 去除刻度
       },
       axisLabel: {
         color: '#4c9bfd' // 文字颜色
       },
       splitLine: {
         lineStyle: {
           color: '#012f4a' // 分割线颜色
         }
       }
     },
```

需求5： 两条线形图定制

- 颜色分别：#00f2f1  #ed3f35
- 把折线修饰为圆滑 series 数据中添加 smooth 为 true

```
     color: ['#00f2f1', '#ed3f35'],
     series: [{
       name:'新增粉丝',
       data: [820, 932, 901, 934, 1290, 1330, 1320],
       type: 'line',
       // 折线修饰为圆滑
       smooth: true,
       },{
       name:'新增游客',
       data: [100, 331, 200, 123, 233, 543, 400],
       type: 'line',
       smooth: true,
     }]
```

需求6： 配置数据

```
 // x轴的文字
 xAxis: {
   type: 'category',
   data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
 // 图标数据
     series: [{
       name:'新增粉丝',
       data:  [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
       type: 'line',
       smooth: true
     },{
       name:'新增游客',
       data: [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79],     
       type: 'line',
       smooth: true
       }
     }]
```

需求7： 新增需求  点击 2020年   2021年 数据发生变化

以下是后台送过来数据（ajax请求过来的）

```
  var yearData = [
       {
         year: '2020',  // 年份
         data: [  // 两个数组是因为有两条线
              [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
              [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
           ]
       },
       {
         year: '2021',  // 年份
         data: [  // 两个数组是因为有两条线
              [123, 175, 112, 197, 121, 67, 98, 21, 43, 64, 76, 38],
             [143, 131, 165, 123, 178, 21, 82, 64, 43, 60, 19, 34]
           ]
       }
      ];
```

- tab栏切换事件
- 点击2020按钮   需要把 series 第一个对象里面的data  换成  2020年对象里面data[0] 
- 点击2020按钮   需要把 series 第二个对象里面的data  换成  2020年对象里面data[1] 
- 2021 按钮同样道理

完整代码：

```js
// 折线图1
(function () {
  const myChart = echarts.init(document.querySelector('.line1>.chart'));
  const yearData = [
    {
      year: '2020', // 年份
      data: [
        // 两个数组是因为有两条线
        [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
        [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79],
      ],
    },
    {
      year: '2021', // 年份
      data: [
        // 两个数组是因为有两条线
        [123, 175, 112, 197, 121, 67, 98, 21, 43, 64, 76, 38],
        [143, 131, 165, 123, 178, 21, 82, 64, 43, 60, 19, 34],
      ],
    },
  ];
  const myOptions = {
    // 通过这个color修改两条线的颜色
    color: ['#00f2f1', '#ed3f35'],
    tooltip: {
      trigger: 'axis',
    },
    legend: {
      // 如果series 对象有name 值，则 legend可以不用写data
      // 修改图例组件 文字颜色
      textStyle: {
        color: '#4c9bfd',
      },
      // 这个10% 必须加引号
      right: '10%',
    },
    grid: {
      top: '20%',
      left: '3%',
      right: '4%',
      bottom: '3%',
      show: true, // 显示边框
      borderColor: '#012f4a', // 边框颜色
      containLabel: true, // 包含刻度文字在内
    },

    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
      axisTick: {
        show: false, // 去除刻度线
      },
      axisLabel: {
        color: '#4c9bfd', // 文本颜色
      },
      axisLine: {
        show: false, // 去除轴线
      },
    },
    yAxis: {
      type: 'value',
      axisTick: {
        show: false, // 去除刻度线
      },
      axisLabel: {
        color: '#4c9bfd', // 文本颜色
      },
      axisLine: {
        show: false, // 去除轴线
      },
      splitLine: {
        lineStyle: {
          color: '#012f4a', // 分割线颜色
        },
      },
    },
    series: [
      {
        name: '新增粉丝',
        data: yearData[0].data[0],
        type: 'line',
        smooth: true,
      },
      {
        name: '新增游客',
        data: yearData[1].data[0],
        type: 'line',
        smooth: true,
      },
    ],
  };
  myChart.setOption(myOptions);
  document.querySelector('.line1').addEventListener('click', e => {
    const a = e.target;
    if (a.tagName !== 'A') return;
    document.querySelector('.line1 a.active').classList.remove('active');
    e.target.classList.add('active');
    myOptions.series[0].data = yearData[0].data[e.target.dataset.id];
    myOptions.series[1].data = yearData[1].data[e.target.dataset.id];
    myChart.setOption(myOptions);
  });
  window.addEventListener('resize', _ => myChart.resize());
})();
```

![image-20220729161855377](https://i0.hdslb.com/bfs/album/7f7eaf66a989fac6812cabf1ca0e96876a5e3051.png)

## 7.3折线图2 播放量模块制作

- 官网找到类似实例， 适当分析，并且引入到HTML页面中
- 根据需求定制图表

需求1： 更换图例组件文字颜色 rgba(255,255,255,.5)  文字大小为12

~~~javascript
 legend: {
      top: "0%",
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: "12"
      }
},
~~~

需求2： 修改图表大小

~~~javascript
grid: {
      left: "10",
      top: "30",
      right: "10",
      bottom: "10",
      containLabel: true
    },
~~~

需求3： 修改x轴相关配置

- 修改文本颜色为rgba(255,255,255,.6)  文字大小为 12
- x轴线的颜色为   rgba(255,255,255,.2)

~~~javascript
     // 文本颜色为rgba(255,255,255,.6)  文字大小为 12
     axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: 12
          }
        },
         // x轴线的颜色为   rgba(255,255,255,.2)
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.2)"
          }
        },
~~~

需求4： 修改y轴的相关配置

~~~javascript
        axisTick: { show: false },
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        },
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: 12
          }
        },
	   // 修改分割线的颜色
        splitLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        }
      
~~~

需求5： 修改两个线模块配置(注意在series 里面定制)

~~~javascript
       //第一条 线是圆滑
       smooth: true,
        // 单独修改线的样式
        lineStyle: {
            color: "#0184d5",
            width: 2 
        },
         // 填充区域
        areaStyle: {
              // 渐变色，只需要复制即可
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: "rgba(1, 132, 213, 0.4)"   // 渐变色的起始颜色
                },
                {
                  offset: 0.8,
                  color: "rgba(1, 132, 213, 0.1)"   // 渐变线的结束颜色
                }
              ],
              false
            ),
            shadowColor: "rgba(0, 0, 0, 0.1)"
        },
        // 设置拐点 小圆点
        symbol: "circle",
        // 拐点大小
        symbolSize: 8,
        // 设置拐点颜色以及边框
       itemStyle: {
            color: "#0184d5",
            borderColor: "rgba(221, 220, 107, .1)",
            borderWidth: 12
        },
        // 开始不显示拐点， 鼠标经过显示
        showSymbol: false,
~~~

~~~javascript
       name: "转发量",
        type: "line",
        smooth: true,
        lineStyle: {
          normal: {
            color: "#00d887",
            width: 2
          }
         },
         areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: "rgba(0, 216, 135, 0.4)"
                },
                {
                  offset: 0.8,
                  color: "rgba(0, 216, 135, 0.1)"
                }
              ],
              false
            ),
            shadowColor: "rgba(0, 0, 0, 0.1)"
          }
        },
        // 设置拐点 小圆点
        symbol: "circle",
        // 拐点大小
        symbolSize: 5,
        // 设置拐点颜色以及边框
         itemStyle: {
            color: "#00d887",
            borderColor: "rgba(221, 220, 107, .1)",
            borderWidth: 12
        },
        // 开始不显示拐点， 鼠标经过显示
        showSymbol: false,
~~~

需求6： 更换数据

~~~javascript
// x轴更换数据
data: [ "01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","26","28","29","30"],
// series  第一个对象data数据
 data: [ 30, 40, 30, 40,30, 40, 30,60,20, 40, 30, 40, 30, 40,30, 40, 30,60,20, 40, 30, 40, 30, 40,30, 40, 20,60,50, 40],
// series  第二个对象data数据
 data: [ 130, 10, 20, 40,30, 40, 80,60,20, 40, 90, 40,20, 140,30, 40, 130,20,20, 40, 80, 70, 30, 40,30, 120, 20,99,50, 20],

~~~

**完整代码**

```js
// 折线图2 模块制作
(function() {
  var myChart = echarts.init(document.querySelector(".line2 .chart"));
  var option = {
    tooltip: {
      trigger: "axis"
    },
    legend: {
      top: "0%",
      data: ["邮件营销", "联盟广告", "视频广告", "直接访问", "搜索引擎"],
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: "12"
      }
    },

    grid: {
      left: "10",
      top: "30",
      right: "10",
      bottom: "10",
      containLabel: true
    },
    xAxis: [
      {
        type: "category",
        boundaryGap: false,
        // x轴更换数据
        data: [
          "01",
          "02",
          "03",
          "04",
          "05",
          "06",
          "07",
          "08",
          "09",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15",
          "16",
          "17",
          "18",
          "19",
          "20",
          "21",
          "22",
          "23",
          "24",
          "25",
          "26",
          "26",
          "28",
          "29",
          "30"
        ],
        // 文本颜色为rgba(255,255,255,.6)  文字大小为 12
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: 12
          }
        },
        // x轴线的颜色为   rgba(255,255,255,.2)
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.2)"
          }
        }
      }
    ],
    yAxis: [
      {
        type: "value",
        axisTick: { show: false },
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        },
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: 12
          }
        },
        // 修改分割线的颜色
        splitLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        }
      }
    ],
    series: [
      {
        name: "邮件营销",
        type: "line",
        smooth: true,
        // 单独修改当前线条的样式
        lineStyle: {
          color: "#0184d5",
          width: "2"
        },
        // 填充颜色设置
        areaStyle: {
          color: new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [
              {
                offset: 0,
                color: "rgba(1, 132, 213, 0.4)" // 渐变色的起始颜色
              },
              {
                offset: 0.8,
                color: "rgba(1, 132, 213, 0.1)" // 渐变线的结束颜色
              }
            ],
            false
          ),
          shadowColor: "rgba(0, 0, 0, 0.1)"
        },
        // 设置拐点
        symbol: "circle",
        // 拐点大小
        symbolSize: 8,
        // 开始不显示拐点， 鼠标经过显示
        showSymbol: false,
        // 设置拐点颜色以及边框
        itemStyle: {
          color: "#0184d5",
          borderColor: "rgba(221, 220, 107, .1)",
          borderWidth: 12
        },
        data: [
          30,
          40,
          30,
          40,
          30,
          40,
          30,
          60,
          20,
          40,
          30,
          40,
          30,
          40,
          30,
          40,
          30,
          60,
          20,
          40,
          30,
          40,
          30,
          40,
          30,
          40,
          20,
          60,
          50,
          40
        ]
      },
      {
        name: "联盟广告",
        type: "line",
        smooth: true,
        lineStyle: {
          normal: {
            color: "#00d887",
            width: 2
          }
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: "rgba(0, 216, 135, 0.4)"
                },
                {
                  offset: 0.8,
                  color: "rgba(0, 216, 135, 0.1)"
                }
              ],
              false
            ),
            shadowColor: "rgba(0, 0, 0, 0.1)"
          }
        },
        // 设置拐点 小圆点
        symbol: "circle",
        // 拐点大小
        symbolSize: 5,
        // 设置拐点颜色以及边框
        itemStyle: {
          color: "#00d887",
          borderColor: "rgba(221, 220, 107, .1)",
          borderWidth: 12
        },
        // 开始不显示拐点， 鼠标经过显示
        showSymbol: false,
        data: [
          130,
          10,
          20,
          40,
          30,
          40,
          80,
          60,
          20,
          40,
          90,
          40,
          20,
          140,
          30,
          40,
          130,
          20,
          20,
          40,
          80,
          70,
          30,
          40,
          30,
          120,
          20,
          99,
          50,
          20
        ]
      }
    ]
  };
  myChart.setOption(option);
  // 4. 让图表跟随屏幕自动的去适应
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();
```

![屏幕截图 2022-07-30 183240](https://i0.hdslb.com/bfs/album/11768b2dc68d0af0a2eb70b4206f4bfae027925c.png)

## 8.饼图

## 8.1常见效果

- 显示数值
  - label
    - show
    - formatter （回调函数）
- 圆环
  - radius：饼半径，设置两个半径即圆环radius:[‘30%’,‘80%’]
- 南丁格尔图 （饼图的每一个区域的半径不一样，随着数值变化）
  - roseType:‘radius’
- 选中效果
  - selectedMode：设置选中效果 single/multiple
  - selectedOffset：设置选中偏移量

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="./node_modules/echarts/dist/echarts.min.js"></script>
    <script>
        onload =function(){
            // 初始化echarts实例对象 其中init函数参数为dom元素，决定图标最终展示的位置
            var myECharts = echarts.init(document.querySelector('#root'));
            // 准备数据
            var domeData=[
                {name:'吃喝',value:700},
                {name:'学习',value:9000},
                {name:'出行',value:2000},
                {name:'服饰',value:1825},
                {name:'玩乐',value:654},
                {name:'其他',value:269}
            ]
            // 准备配置项！
            var option = {
                series:[
                    {
                        type:'pie',  //饼图
                        data:domeData,
                        label:{
                            show:true,
                            formatter(arg){
                                // console.log(arg)
                                return `${arg.name}-${arg.value}-${arg.percent}%`
                            }
                        },
                        // radius:100, 
                        // radius:'50%', //百分比参照的是高度及宽度较小的一个的一半的百分比
                        // radius:['30%','80%'], //设置为数组，第0个元素表示内圆半径，第1个表示外圆半径
                        roseType:'radius',
                        selectedMode:'single',  //设置选中效果 single/multiple
                        selectedOffset:15  //设置选中偏移量
                    }
                ]
            }
            // 将配置项设置给echarts实例对象
            myECharts.setOption(option)
        }
    </script>
</head>

<body>
    <!-- 准备一个图表容器盒子 -->
    <div id="root" style="width: 700px; height: 700px;"></div>
</body>

</html>
```

8.1

## 8.2饼形图 1年龄分布模块制作

- 官网找到类似实例， 适当分析，并且引入到HTML页面中
- 根据需求定制图表

定制图表需求1： 

- 修改图例组件在底部并且居中显示。 
- 每个小图标的宽度和高度修改为 10px   
- 文字大小为12 颜色  rgba(255,255,255,.5)

~~~javascript
 legend: {
      // 距离底部为0%
      bottom: "0%",
      // 小图标的宽度和高度
      itemWidth: 10,
      itemHeight: 10,
      data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎'],
      // 修改图例组件的文字为 12px
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: "12"
      }
 },
~~~

定制需求2：

- 修改水平居中 垂直居中
- 修改内圆半径和外圆半径为    ["40%", "60%"]   pink老师友情提示，带有直角坐标系的比如折线图柱状图是 grid修改图形大小，而我们饼形图是通过 radius 修改大小

~~~javascript
series: [
      {
        name: "年龄分布",
        type: "pie",
        // 设置饼形图在容器中的位置
        center: ["50%", "50%"],
        //  修改内圆半径和外圆半径为  百分比是相对于容器宽度来说的
        radius: ["40%", "60%"],
        // 不显示标签文字
        label: { show: false },
        // 不显示连接线
        labelLine: { show: false },
      }
    ]
~~~

定制需求3：更换数据

~~~javascript
// legend 中的data  可省略
data: ["0岁以下", "20-29岁", "30-39岁", "40-49岁", "50岁以上"],
//  series 中的数据
 data: [
          { value: 1, name: "0岁以下" },
          { value: 4, name: "20-29岁" },
          { value: 2, name: "30-39岁" },
          { value: 2, name: "40-49岁" },
          { value: 1, name: "50岁以上" }
 ] ,
~~~

定制需求4： 更换颜色

~~~javascript
color: [
          "#065aab",
          "#066eab",
          "#0682ab",
          "#0696ab",
          "#06a0ab",
        ],
~~~

~~~javascript
 // 4. 让图表跟随屏幕自动的去适应
  window.addEventListener("resize", function() {
    myChart.resize();
  });
~~~

**完整代码**

```js
// 饼形图1
(function() {
  // 1. 实例化对象
  var myChart = echarts.init(document.querySelector(".pie .chart"));
  // 2.指定配置
  var option = {
    color: ["#065aab", "#066eab", "#0682ab", "#0696ab", "#06a0ab"],
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b}: {c} ({d}%)"
    },

    legend: {
      bottom: "0%",
      // 修改小图标的大小
      itemWidth: 10,
      itemHeight: 10,
      // 修改图例组件的文字为 12px
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: "12"
      }
    },
    series: [
      {
        name: "年龄分布",
        type: "pie",
        // 这个radius可以修改饼形图的大小
        // radius 第一个值是内圆的半径 第二个值是外圆的半径
        radius: ["40%", "60%"],
        // 饼图的位置
        center: ["50%", "45%"],
        avoidLabelOverlap: false,
        // 图形边上的文字
        label: {
          show: false,
          position: "center"
        },
        // 链接文字和图形的线是否显示
        labelLine: {
          show: false
        },
        data: [
          { value: 1, name: "0岁以下" },
          { value: 4, name: "20-29岁" },
          { value: 2, name: "30-39岁" },
          { value: 2, name: "40-49岁" },
          { value: 1, name: "50岁以上" }
        ]
      }
    ]
  };

  // 3. 把配置给实例对象
  myChart.setOption(option);
  // 4. 让图表跟随屏幕自动的去适应
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();
```

![屏幕截图 2022-07-30 183259](https://i0.hdslb.com/bfs/album/ea0b97d8dce547f1be7fcf0e5a66dc3be3cc04d3.png)

## 8.3饼形图2 地区分布模块制作（南丁格尔玫瑰图）

- 官网找到类似实例， 适当分析，并且引入到HTML页面中
- 根据需求定制图表

第二步：按照需求定制

- 需求1：颜色设置

```js
color: ['#006cff', '#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff'],
```

- 需求2：修改饼形图大小 ( series对象)

```javascript
radius: ['10%', '70%'],
```

- 需求3： 把饼形图的显示模式改为 半径模式

```javascript
 roseType: "radius",
```

- 需求4：数据使用更换（series对象 里面 data对象）

```js
          { value: 20, name: '云南' },
          { value: 26, name: '北京' },
          { value: 24, name: '山东' },
          { value: 25, name: '河北' },
          { value: 20, name: '江苏' },
          { value: 25, name: '浙江' },
          { value: 30, name: '四川' },
          { value: 42, name: '湖北' }
```

- 需求5：字体略小些  10 px ( series对象里面设置 )

  饼图图形上的文本标签可以控制饼形图的文字的一些样式。   label 对象设置

```javascript
series: [
      {
        name: "面积模式",
        type: "pie",
        radius: [30, 110],
        center: ["50%", "50%"],
        roseType: "radius",
        // 文本标签控制饼形图文字的相关样式， 注意它是一个对象
        label: {
          fontSize: 10
        },
      }
    ]
  };
```

- 需求6：防止缩放的时候，引导线过长。引导线略短些   (series对象里面的  labelLine  对象设置  ) 
  - 连接图表 6 px
  - 连接文字 8 px

```js
        // 文字调整
        label:{
          fontSize: 10
        },
        // 引导线调整
        labelLine: {
          // 连接扇形图线长
          length: 6,
          // 连接文字线长
          length2: 8
        }
     }
    ],

```

- 需求6：浏览器缩放的时候，图表跟着自动适配。

```javascript
// 监听浏览器缩放，图表对象调用缩放resize函数
window.addEventListener("resize", function() {
    myChart.resize();
  });
```

**完整代码**

```js
// 饼形图2 地区分布模块
(function() {
  var myChart = echarts.init(document.querySelector(".pie2 .chart"));
  var option = {
    color: [
      "#006cff",
      "#60cda0",
      "#ed8884",
      "#ff9f7f",
      "#0096ff",
      "#9fe6b8",
      "#32c5e9",
      "#1d9dff"
    ],
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
      bottom: "0%",
      itemWidth: 10,
      itemHeight: 10,
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: "12"
      }
    },
    series: [
      {
        name: "地区分布",
        type: "pie",
        radius: ["10%", "70%"],
        center: ["50%", "50%"],
        roseType: "radius",
        // 图形的文字标签
        label: {
          fontSize: 10
        },
        // 链接图形和文字的线条
        labelLine: {
          // length 链接图形的线条
          length: 6,
          // length2 链接文字的线条
          length2: 8
        },
        data: [
          { value: 20, name: "云南" },
          { value: 26, name: "北京" },
          { value: 24, name: "山东" },
          { value: 25, name: "河北" },
          { value: 20, name: "江苏" },
          { value: 25, name: "浙江" },
          { value: 30, name: "四川" },
          { value: 42, name: "湖北" }
        ]
      }
    ]
  };
  myChart.setOption(option);
  // 监听浏览器缩放，图表对象调用缩放resize函数
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();
```

![屏幕截图 2022-07-30 183313](https://i0.hdslb.com/bfs/album/ad471d6c5ffb3a68f7cc33f43336bae3c28fe199.png)