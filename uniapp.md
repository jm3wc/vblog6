## 快速入门

## 什么是uni-app

**uni-app** 是一个使用 Vue.js 开发所有前端应用的框架，开发者编写一套代码，可发布到iOS、Android、Web（响应式）、以及各种小程序（微信/支付宝/百度/头条/QQ/快手/钉钉/淘宝）、快应用等多个平台。

###  UniApp官网

**[官网：https://uniapp.dcloud.net.cn/](https://uniapp.dcloud.net.cn/)**

## 开发环境

HBuilderX：[官方IDE下载地址](https://www.dcloud.io/hbuilderx.html) HBuilderX是通用的前端开发工具，但为uni-app做了特别强化。

## 创建uni-app

###### 通过vue-cli命令创建

1、环境安装

```html
npm install -g @vue/cli
```

2、创建uni-app

使用正式版（对应HBuilderX最新正式版）

```html
vue create -p dcloudio/uni-preset-vue my-project
```

3、选择模板，选择默认模板

![Image text](http://web.wdwangke.com/mdphoto/frontend/WeChat/uniapp/8.png)

## 运行uni-app

1、浏览器运行：进入hello-uniapp项目，点击工具栏的运行 -> 运行到浏览器 -> 选择浏览器，即可在浏览器里面体验uni-app 的 H5 版。

![Image text](http://web.wdwangke.com/mdphoto/frontend/WeChat/uniapp/3.png)

2、真机运行：连接手机，开启USB调试，进入hello-uniapp项目，点击工具栏的运行 -> 真机运行 -> 选择运行的设备，即可在该设备里面体验uni-app。

![Image text](http://web.wdwangke.com/mdphoto/frontend/WeChat/uniapp/4.png)

3、在微信开发者工具里运行：进入hello-uniapp项目，点击工具栏的运行 -> 运行到小程序模拟器 -> 微信开发者工具，即可在微信开发者工具里面体验uni-app。

![Image text](http://web.wdwangke.com/mdphoto/frontend/WeChat/uniapp/5.png)

##### 注意第一次使用，需要先配置小程序ide的相关路径，才能运行成功如下图所示

![Image text](http://web.wdwangke.com/mdphoto/frontend/WeChat/uniapp/6.png)

##### 微信开发者工具设置需要开启服务端口，如下图

![Image text](http://web.wdwangke.com/mdphoto/frontend/WeChat/uniapp/7.png)

## 目录结构

![Image text](http://web.wdwangke.com/mdphoto/frontend/WeChat/uniapp/9.png)

```html
node_modules node依赖工具包目录
src    源码目录

┌─uniCloud              云空间目录，阿里云为uniCloud-aliyun,腾讯云为uniCloud-tcb（详见uniCloud）
│─components            符合vue组件规范的uni-app组件目录
│  └─comp-a.vue         可复用的a组件
├─hybrid                App端存放本地html文件的目录，详见
├─platforms             存放各平台专用页面的目录，详见
├─pages                 业务页面文件存放的目录
│  ├─index
│  │  └─index.vue       index页面
│  └─list
│     └─list.vue        list页面
├─static                存放应用引用的本地静态资源（如图片、视频等）的目录，注意：静态资源只能存放于此
├─uni_modules           存放[uni_module](/uni_modules)规范的插件。
├─wxcomponents          存放小程序组件的目录，详见
├─main.js               Vue初始化入口文件
├─App.vue               应用配置，用来配置App全局样式以及监听 应用生命周期
├─manifest.json         配置应用名称、appid、logo、版本等打包信息，详见
└─pages.json            配置页面路由、导航条、选项卡等页面类信息，详见
```



## 项目发行小程序和打包生成APP

```html
    找到pages文件夹编辑index页面
    第一个运行到在微信开发者工具里运行，查看是否正常

    第二个原生APP云打包生成后缀为.apk手机安装文件
```

##### 小程序打包页面

![Image text](http://web.wdwangke.com/mdphoto/frontend/WeChat/uniapp/15.png)

##### 小程序打包之后生成的二维码

![Image text](http://web.wdwangke.com/mdphoto/frontend/WeChat/uniapp/11.png)

##### 小程序运行的页面

![Image text](http://web.wdwangke.com/mdphoto/frontend/WeChat/uniapp/10.png)

##### APP打包页面

![Image text](http://web.wdwangke.com/mdphoto/frontend/WeChat/uniapp/13.png)

##### APP打包成功之后生成下载.apk安装文件链接

![Image text](http://web.wdwangke.com/mdphoto/frontend/WeChat/uniapp/14.png)

##### 手机端APP运行的页面

![Image text](http://web.wdwangke.com/mdphoto/frontend/WeChat/uniapp/12.jpg)



## 生命周期和语法

1. 应用生命周期 : 仅可在App.vue中监听，在其它页面监听无效
2. 页面生命周期 : 监听当前页面
3. 组件生命周期 : 组件支持的生命周期，与vue标准组件的生命周期相同。这里没有页面级的onLoad等生命周期



#### 应用生命周期

|  函数名  |                     说明                     |
| :------: | :------------------------------------------: |
| onLaunch | 当uni-app 初始化完成时触发（全局只触发一次） |
|  onShow  |    当 uni-app 启动，或从后台进入前台显示     |
|  onHide  |          当 uni-app 从前台进入后台           |

```html
<script>
    export default {
        onLaunch: function() {
            console.log('App Launch')
        },
        onShow: function() {
            console.log('App Show')
        },
        onHide: function() {
            console.log('App Hide')
        }
    }
</script>
```



#### 页面生命周期

|      函数名       |                             说明                             |
| :---------------: | :----------------------------------------------------------: |
|      onLoad       | 监听页面加载，其参数为上个页面传递的数据，参数类型为 Object（用于页面传参 |
|      onShow       | 监听页面显示。页面每次出现在屏幕上都触发，包括从下级页面点返回露出当前页面 |
|      onReady      | 监听页面初次渲染完成。注意如果渲染速度快，会在页面进入动画完成前触发 |
|     onUnload      |                         监听页面卸载                         |
|      onHide       |                         监听页面隐藏                         |
| onPullDownRefresh |              监听用户下拉动作，一般用于下拉刷新              |
|   onPageScroll    |           监听页面滚动，参数为Object,nvue暂不支持            |

```html
<script>
    export default{
        onLoad() {
            console.log('App Launch')
            // 开始下拉刷新，调用后触发下拉刷新动画，效果与用户手动下拉刷新一致。
            uni.startPullDownRefresh();
        },
        onShow() {
            console.log('App Show')
        },
        onHide() {
            console.log('App Hide')
        },
        onReady() {
            console.log('App onReady')
        },
        onUnload() {
            console.log('App onUnload') 
        },
        onPullDownRefresh() {
            this.$nextTick(()=>{
                // 停止当前页面下拉刷新
                uni.stopPullDownRefresh();
            })
        },
        onPageScroll : function(e) { 
            //nvue暂不支持滚动监听，可用bindingx代替
            console.log("滚动距离为：" + e.scrollTop);
        }

    }
</script>
```



#### 组件生命周期

|    函数名     |                             说明                             |
| :-----------: | :----------------------------------------------------------: |
| beforeCreate  |                    在实例初始化之后被调用                    |
|    created    |                  在实例创建完成后被立即调用                  |
|  beforeMount  |                     在挂载开始之前被调用                     |
|    mounted    | 挂载到实例上去之后调用。详见 注意：此处并不能确定子组件被全部挂载，如果需要子组件完全挂载之后在执行操作可以使用$nextTickVue |
| beforeDestroy |         实例销毁之前调用。在这一步，实例仍然完全可用         |
| beforeDestroy | Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。 |



## 语法

1、页面文件遵循 Vue 单文件组件 (SFC) 规范
2、组件标签靠近小程序规范，详见uni-app 组件规范，注意：所有组件与属性名都是小写，单词之间以连字符-连接
3、接口能力（JS API）靠近微信小程序规范，但需将前缀 wx 替换为 uni
4、数据绑定及事件处理同 Vue.js 规范，同时补充了App及页面的生命周期
5、条件编译，跨端兼容

```html
1、Vue 单文件组件 (SFC) 规范，每个vue文件的根节点必须为 
<template>，且这个 <template> 下只能且必须有一个根 <view> 组件
<template>
  <view class="example">{{ msg }}</view>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Hello world!'
    }
  }
}
</script>

<style>
.example {
  color: red;
}
</style>

2、uni-app 组件规范
<component-name property1="value" property2="value">
    content
</component-name>

3、uni-app接口规范
<!-- 默认方式 -->
uni.request({
    url: 'https://www.example.com/request',
    success: (res) => {
        console.log(res.data);
    }
});

<!-- Promise -->
uni.request({
        url: 'https://www.example.com/request'
    })
    .then(data => {//data为一个数组，数组第一项为错误信息，第二项为返回数据
        var [error, res]  = data;
        console.log(res.data);
    })

<!-- Await -->
async function request () {
    var [error, res] = await uni.request({
        url: 'https://www.example.com/request'
    });
    console.log(res.data);
}
```

##### 条件编译

![Image text](http://web.wdwangke.com/mdphoto/frontend/WeChat/uniapp/18.png)

##### APP-PLUS条件编译

![Image text](http://web.wdwangke.com/mdphoto/frontend/WeChat/uniapp/16.png)

##### MP-WEIXIN条件编译

![Image text](http://web.wdwangke.com/mdphoto/frontend/WeChat/uniapp/17.png)

## 项目搭建

### 基于UniApp的UI框架

- **[https://thorui.cn/open in new window](https://thorui.cn/)**
- **[https://www.graceui.com/open in new window](https://www.graceui.com/)**
- **[https://www.uvui.cn/open in new window](https://www.uvui.cn/) - 基于uViewUI的加强版本**

## uview

## 一、准备工作

> uView官网：https://www.uviewui.com/components/npmSetting.html
>
> 1、uView依赖SCSS，您必须要安装此插件，否则无法正常运行。

```javascript
// 安装sass

npm i sass -D

// 安装sass-loader，注意需要版本10，否则可能会导致vue与sass的兼容问题而报错

npm i sass-loader@10 -D
```

> 2、安装uview-ui

```javascript
npm install uview-ui@2.0.36
```

## 二、配置工作

> 1、在项目src目录中的main.js中，引入并使用uView的JS库，注意这两行要放在import Vue之后。

```javascript
// main.js
import uView from "uview-ui";
Vue.use(uView);
```

> 2、在项目src目录的uni.scss中引入此文件。

```javascript
/* uni.scss */
@import 'uview-ui/theme.scss';
```

> 3、在App.vue中首行的位置引入，注意给style标签加入lang="scss"属性

```javascript
<style lang="scss">
    @import "uview-ui/index.scss";
</style>
```

> 4、配置easycom组件模式，此配置需要在项目根目录的pages.json中进行。

```javascript
// pages.json
{
    "easycom": {
        "^u-(.*)": "uview-ui/components/u-$1/u-$1.vue"
    },

    // 此为本身已有的内容
    "pages": [
        // ......
    ]
}
```

> 5、如果您是vue-cli模式的项目，还需要在项目根目录的vue.config.js文件中进行如下配置：

```javascript
// vue.config.js，如没有此文件则手动创建
module.exports = {
    transpileDependencies: ['uview-ui']
}
```

## 三、页面引用

> 通过npm和下载方式的配置之后，在某个页面可以直接使用组件，无需通过import引入组件。

```html
<template>
    <view>
        <u-cell-group>
        <u-cell icon="setting-fill" title="个人设置"></u-cell>
        <u-cell icon="integral-fill" title="会员等级" value="新版本"></u-cell>
    </u-cell-group>
    </view>
</template>
```

## axios

> 1、先创建一个 services 文件夹，创建 request.js 文件;

## 一、创建文件 request.js

> ```
> *    request.js
> ```

```javascript
// 此vm参数为页面的实例，可以通过它引用vuex中的变量
module.exports = (vm) => {
  // 初始化请求配置
  uni.$u.http.setConfig((config) => {
    /* config 为默认全局配置*/
    //域名前缀

    //#ifdef H5
    config.baseURL = "/api";
    //#endif

    //#ifdef MP-WEIXIN || APP-PLUS
    config.baseURL = "http://tp6.lyqing.cn/api";
    //#endif

    //请求头
    config.header = {
      "X-Requested-With": "XMLHttpRequest",
    };

    return config;
  });

  // 请求拦截
  uni.$u.http.interceptors.request.use(
    (config) => {
      // 可使用async await 做异步操作
      // 初始化请求拦截器时，会执行此方法，此时data为undefined，赋予默认{}
      config.data = config.data || {};
      // 根据custom参数中配置的是否需要token，添加对应的请求头
      // if(config?.custom?.auth) {
      //     // 可以在此通过vm引用vuex中的变量，具体值在vm.$store.state中
      //     config.header.token = vm.$store.state.userInfo.token
      // }
      return config;
    },
    (config) => {
      // 可使用async await 做异步操作
      return Promise.reject(config);
    }
  );

  // 响应拦截
  uni.$u.http.interceptors.response.use(
    (response) => {
      /* 对响应成功做点什么 可使用async await 做异步操作*/
      const data = response.data;

      // 自定义参数
      // const custom = response.config?.custom
      // if (data.code !== 200) {
      //     // 如果没有显式定义custom的toast参数为false的话，默认对报错进行toast弹出提示
      //     if (custom.toast !== false) {
      //         uni.$u.toast(data.message)
      //     }

      //     // 如果需要catch返回，则进行reject
      //     if (custom?.catch) {
      //         return Promise.reject(data)
      //     } else {
      //         // 否则返回一个pending中的promise，请求不会进入catch中
      //         return new Promise(() => { })
      //     }
      // }
      return data === undefined ? {} : data;
    },
    (response) => {
      // 对响应错误做点什么 （statusCode !== 200）
      return Promise.reject(response);
    }
  );
};
```

## 二、总入口文件夹 api，创建 index.js 文件

> ```
> *    index.js
> ```

```javascript
//默认引入模块
const files = require.context("./", true, /index.js$/);
const modules = {};

files.keys().forEach((key) => {
  if (key === "./index.js") return;

  const item = files(key).default;

  var mod = {};

  //替换路径
  var name = key.replace(/\.\/(.*)\/index.js/, "$1");

  mod[name] = item;

  Object.assign(modules, mod);
});

const install = (Vue, vm) => {
  //加载模块
  modules;

  //循环组合接口API
  let api = {};

  for (let ModeName in modules) {
    if (JSON.stringify(modules[ModeName]) == "{}") {
      continue;
    }

    for (let ApiName in modules[ModeName]) {
      let config = modules[ModeName][ApiName];
      config.name = ApiName;

      if (!config.name || !config.url) {
        continue;
      }

      if (!api[ModeName]) {
        api[ModeName] = {};
      }

      switch (config.method.toUpperCase()) {
        case "GET":
          api[ModeName][config.name] = (data = {}) => {
            return uni.$u.http.get(config.url, { params: data });
          };
          break;
        case "POST":
          api[ModeName][config.name] = (data = {}) => {
            return uni.$u.http.post(config.url, data);
          };
          break;
        case "UPLOAD":
          api[ModeName][config.name] = (data = {}) => {
            if (data.filePath) {
              return uni.$u.http.upload(config.url, data);
            } else {
              return uni.$u.http.post(config.url, data);
            }
          };
          break;
      }
    }
  }

  vm.$u.api = api;
};

export default {
  install,
};
```

## 三、每个独立接口模块下面的 index.js

> ```
> *    src/api/user/index.js
> ```

```javascript
const files = require.context(".", false, /\.js$/);
const list = {};

files.keys().forEach((key) => {
  if (key === "./index.js") return;
  const item = files(key).default;
  Object.assign(list, item);
});

export default list;
```

## 四、其他的接口文件

> ```
> *    src/api/user/base.js
> ```

```javascript
export default {
  login: {
    url: "user/auth/login",
    method: "POST",
  },
  bind: {
    url: "user/auth/bind",
    method: "POST",
  },
  profile: {
    url: "user/auth/profile",
    method: "UPLOAD",
  },
};
```

## 五、在 main.js 里面引入

```js
// 引入请求封装，将app参数传递到配置中
require("services/request.js")(app);

//引入接口
import api from "@/api/index.js";
Vue.use(api, app);
```

## 六、H5 页面配置处理跨域问题

> ```
> *    vue.config.js
> ```

```js
module.exports = {
  transpileDependencies: ["uview-ui"],
  // 以下为接口代理设
  devServer: {
    proxy: {
      "/stock": {
        // target: 'http://www.fastpro.com', // 本地
        target: "https://thinkphpfastpros.lyqing.cn", // 线上
        // 如果接口跨域，需要进行这个参数配置
        changeOrigin: true,
        pathRewrite: {
          "^stock": "",
        },
      },
    },
  },
};
```

## 七、页面调用

```html
<script>
        async addressInex(){
      let result = await this.$u.api.user.bind(this.bind)
      if(result.code == 1)
      {
          uni.setStorageSync('LoginUser', result.data);
          this.$refs.uToast.show({
              type: 'success',
              message: result.msg
          })
          uni.switchTab({
              url: '/pages/user/index'
          });
      } else {
          this.$refs.uToast.show({
              type: 'error',
              message: result.msg
          })
      }

  }
</script>
```

## 路由守卫

> - services/auth.js

```javascript
const install = (Vue, vm) => {

    //创建一个方法 用来判断是否登录
        let check = () => {
            var LoginUser = uni.getStorageSync('LoginUser')
            if(!LoginUser || JSON.stringify(LoginUser) == '{}')
            {
                uni.showToast({
                    title: '请先登陆',
                    duration: 3000,
                    success: function (res) {
                        uni.switchTab({
                            url: '/pages/user/index'
                        });
                    }
                });
                return false;
            }
            return false;
        }
        //给vue设置服务的名称
        vm.$u.auth = {
          check
        }
}

export default {
    install
}
```

#### 五、在main.js里面引入

```js
// 校验登陆
import auth from '@/services/auth'
Vue.use(auth, app)
```

## UniApp路由插件

> [https://www.hhyang.cn/open in new window](https://www.hhyang.cn/) 基于UniApp的路由插件，付费软件

### 轮播图插件

> [https://swiper.zebraui.com/open in new window](https://swiper.zebraui.com/) 挺好用基于swiper可以调用swiper配置

### 图表插件

> [https://www.ucharts.cn/open in new window](https://www.ucharts.cn/) 项目仓库中有配置 需要下载组件文件 请预览 我封装的项目仓库

### 城市地区插件

> [https://ext.dcloud.net.cn/plugin?id=1472open in new window](https://ext.dcloud.net.cn/plugin?id=1472) 项目仓库中有配置 需要下载组件文件 请预览 我封装的项目仓库

```javascript
<template>
	<view>
		<view>https://ext.dcloud.net.cn/plugin?id=1472</view>
		<view>这个是插件的地址</view>
		<pick-regions :defaultRegion="defaultRegionCode" @getRegion="handleGetRegion">
            <h2>点击选择省市区</h2>
        </pick-regions>
        <h3>{{regionName}}</h3>
	</view>
</template>

<script>
   //需要引入城市地区组件
   import pickRegions from '@/components/pick-regions/pick-regions.vue'
	export default {
        components:{ pickRegions },
        data(){
            return {
                region:[],
                defaultRegion:['广东省','广州市','番禺区'],
                defaultRegionCode:'440113'
            }
        },
        computed:{
            regionName(){
                // 转为字符串
                return this.region.map(item=>item.name).join(' ')
            }
        },
        methods:{
            // 获取选择的地区
            handleGetRegion(region){
                this.region = region
            }
        }
	}
</script>
```