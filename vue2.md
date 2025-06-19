## vue2

## 基本介绍

### 手册链接

- Vuejs官网：http://vuejs.org/
- Vuejs中文网：http://cn.vuejs.org/
- Vite中文网：https://vitejs.cn/
- Vue-CLI：https://cli.vuejs.org/zh/
- Vue-Router：https://router.vuejs.org/zh/
- Vuex：https://vuex.vuejs.org/zh/

### MVC

```
视图（View）：用户界面
控制器（Controller）：业务逻辑
模型（Model）：数据保存
```

![Image text](http://web.wdwangke.com/mdphoto/frontend/Vue/mvc.png)

### MVVM

```
MVVM分为三个部分：分别是
    M（Model，模型层 ）
    V（View，视图层）
    VM（ViewModel，V与M连接的桥梁，也可以看作为控制器）

1、 M：模型层，主要负责业务数据相关；
2、 V：视图层，顾名思义，负责视图相关，细分下来就是html+css层；
3、 VM：V与M沟通的桥梁，负责监听M或者V的修改，是实现MVVM双向绑定的要点；

MVVM支持双向绑定，意思就是当M层数据进行修改时，VM层会监测到变化，并且通知V层进行相应的修改，
反之修改V层则会通知M层数据进行修改，以此也实现了视图与模型层的相互解耦；
```

![Image text](http://web.wdwangke.com/mdphoto/frontend/Vue/mvvm.png)

## 常用指令

## v-model

```html
<input type="text" v-model="username" />
双向绑定：{{username}}
```

## v-if

```html
<div v-if="os == 'windows'">windows系统</div>
<div v-else-if="os == 'linux'">linux系统</div>
<div v-else-if="os == 'mac'">苹果系统</div>
<div v-else>其他系统</div>
```

## v-show

```html
<div v-show="IsShow">根据IsShow这个变量来判断显示还是隐藏</div>
```

## v-for

```html
<table width="500px" border="1px">
    <tr>
        <td>姓名</td>
        <td>性别</td>
        <td>年龄</td>
    </tr>
    <tr v-for="(item, index) in userlist" :key="index">
        <td>{{item.nickname}}</td>
        <td>{{item.sex}}</td>
        <td>{{item.age}}</td>
    </tr>
</table>


数据结构
userlist:[
    {
        nickname:'张三',
        sex:'男',
        age:15
    },
    {
        nickname:'李四',
        sex:'女',
        age:17
    },
    {
        nickname:'王五',
        sex:'男',
        age:19
    }
],
```

## v-html

```html
{{output}}
<div v-html="output"></div>
<div v-text="output"></div>

数据结构
output:"<u>只是一个段落</u>"
```

## v-pre

> 不需要编译直接输出

```html
<span v-pre>{{this will not be compiled}}</span>
```

## v-bind

> 绑定元素属性

```html
<div v-bind:title="title">绑定元素属性</div>
<div :title="title">简写方式</div>

数据结构
title:'绑定元素属性'
```

## v-on

> 绑定事件

```html
<button v-on:click="ClickMe">绑定事件</button>
<button @click="ClickMe">绑定事件-简写方式</button>

方法结构：
ClickMe()
{
    alert('触发事件')
}
```

## 常用属性

### 页面结构

```html
<body>
    <div id="app">
        <input type="text" v-model="username" />
        {{username}}

        <button @click="ClickMe">绑定事件-简写方式</button>

        <h1>计算属性</h1>
        {{count}}

        <h1>过滤器</h1>
        {{price | number_format(2, ".", ",")}}

        <h1>ref用法</h1>
        <div ref="test">ref用法说明</div>
    </div>
</body>
```

### 数据结构

```js
var app = new Vue({
    //绑定的根元素
    el:'#app',
    //数据结构
    data:{
        username:'',
        price:1000000,
    },
    //生命周期函数
    mounted()
    {
        // vue给我们提供一个操作dom的属性ref。绑定在dom元素上时，用起来与id差不多，通过this.$refs来调用
        console.log(this.$refs.test)
    },
    //计算属性 计算属性与数据结构同级，都是用来表示数据，但是计算属性可以加上逻辑处理
    computed:{
        count()
        {  
            //保留小数点后两位
            var num = 5.56789
            var res = num.toFixed(2)
            return res
        }
    },
    //方法
    methods:{
        ClickMe()
        {
            alert('触发事件')
        }
    },
    //侦听器 可以监控数据变化前后的值
    watch:{
        username(newval, oldval)
        {
            console.log(`新的值：${newval} --- 旧的值：${oldval}`)
        }
    },
    //过滤器 可以对我们输出的数据结构进行筛选和过滤
    filters:{
        //金额格式化
        number_format(number, decimals, dec_point, thousands_sep)
        {
            /*
            * 参数说明：
            * number：要格式化的数字
            * decimals：保留几位小数
            * dec_point：小数点符号
            * thousands_sep：千分位符号
            * */
            number = (number + '').replace(/[^0-9+-Ee.]/g, '');
            var n = !isFinite(+number) ? 0 : +number,

                prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
                sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
                dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
                s = '',
                toFixedFix = function (n, prec) {
                    var k = Math.pow(10, prec);
                    return '' + Math.floor(n * k) / k;
                };
            s = (prec ? toFixedFix(n, prec) : '' + Math.floor(n)).split('.');
            var re = /(-?\d+)(\d{3})/;
            console.log(s)
            while (re.test(s[0])) {
                s[0] = s[0].replace(re, "$1" + sep + "$2");
            }

            if ((s[1] || '').length < prec) {
                s[1] = s[1] || '';
                s[1] += new Array(prec - s[1].length + 1).join('0');
            }
            return s.join(dec);
        }
    }
})
```

## 生命周期

![Image text](http://web.wdwangke.com/mdphoto/frontend/Vue/life1.png)



![Image text](http://web.wdwangke.com/mdphoto/frontend/Vue/life2.png)

## 页面结构

```html
<div id="app">
    <input type="text" v-model="message" />
    {{message}}
</div>
```

## 数据结构

```js
var app = new Vue({
        el: '#app',
        data: {
            message : "hello world"
        },
        beforeCreate() 
        {
            console.group('beforeCreate 创建前状态===============》');
            console.log("%c%s", "color:red" , "el     : " + this.$el); //undefined
            console.log("%c%s", "color:red","data   : " + this.$data); //undefined 
            console.log("%c%s", "color:red","message: " + this.message)  
        },
        created() 
        {
            console.group('created 创建完毕状态===============》');
            console.log("%c%s", "color:red","el     : " + this.$el); //undefined
            console.log("%c%s", "color:red","data   : " + this.$data); //已被初始化 
            console.log("%c%s", "color:red","message: " + this.message); //已被初始化
        },
        beforeMount() 
        {
            console.group('beforeMount 挂载前状态===============》');
            console.log("%c%s", "color:red","el     : " + (this.$el)); //已被初始化
            console.log(this.$el);
            console.log("%c%s", "color:red","data   : " + this.$data); //已被初始化  
            console.log("%c%s", "color:red","message: " + this.message); //已被初始化  
        },
        mounted() 
        {
            console.group('mounted 挂载结束状态===============》');
            console.log("%c%s", "color:red","el     : " + this.$el); //已被初始化
            console.log(this.$el);    
            console.log("%c%s", "color:red","data   : " + this.$data); //已被初始化
            console.log("%c%s", "color:red","message: " + this.message); //已被初始化 
        },
        beforeUpdate() 
        {
            console.group('beforeUpdate 更新前状态===============》');
            console.log("%c%s", "color:red","el     : " + this.$el);
            console.log(this.$el);   
            console.log("%c%s", "color:red","data   : " + this.$data); 
            console.log("%c%s", "color:red","message: " + this.message); 
        },
        updated() 
        {
            console.group('updated 更新完成状态===============》');
            console.log("%c%s", "color:red","el     : " + this.$el);
            console.log(this.$el); 
            console.log("%c%s", "color:red","data   : " + this.$data); 
            console.log("%c%s", "color:red","message: " + this.message); 
        },
        beforeDestroy() 
        {
            console.group('beforeDestroy 销毁前状态===============》');
            console.log("%c%s", "color:red","el     : " + this.$el);
            console.log(this.$el);    
            console.log("%c%s", "color:red","data   : " + this.$data); 
            console.log("%c%s", "color:red","message: " + this.message); 
        },
        destroyed() 
        {
            console.group('destroyed 销毁完成状态===============》');
            console.log("%c%s", "color:red","el     : " + this.$el);
            console.log(this.$el);  
            console.log("%c%s", "color:red","data   : " + this.$data); 
            console.log("%c%s", "color:red","message: " + this.message)
        }
    })
```

## 组件

## 定义组件

### 页面结构

```html
<div id="app">
    <test></test>

    <demo></demo>

    <hello-world></hello-world>
</div>
```

### 逻辑结构

```js
//在外部定义组件
Vue.component('demo', {
    template: '<h1>这是在外部定义的自定义组件</h1>'
})

//驼峰写法的组件
Vue.component('HelloWorld', {
    template:'<h1>驼峰写法的组件</h1>'
})

var app = new Vue({
    el: '#app',
    //内部自定义组件
    components: {
        test:{
            template: '<h1>这是一个自定义组件</h1>'
        }
    }
})
```

## 组件的基本结构

### 页面结构

```html
<div id="app">
    <demo></demo>
</div>

<template id="demo">
    <div>
        <p>data-数据：{{nickname}}</p>
        <p>computed-计算属性：{{price}}</p>
        <button @click="ClickMe">组件的绑定事件</button>
    </div>
</template>
```

### 逻辑结构

```js
var app = new Vue({
    el: '#app',
    components:{
        demo:{
            template:'#demo',
            //组件的数据
            data()
            {
                return {
                    nickname: '张三'
                }
            },
            //组件的计算属性
            computed:{
                price()
                {
                    return "￥100,0000.00"  
                }
            },
            //组件的方法
            methods:{
                ClickMe()
                {
                    alert('组件的事件方法')
                }
            }
        }
    }
})
```

## 父子组件通信

### 页面结构

```html
<div id="app">
    <h1>父给子 - 用属性(props)</h1>
    <h1>子给父 - 用事件(event)</h1>
    <demo :msg="msg" @father="GetData"></demo>
</div>

<template id="demo">
    <div>
        <p>获取父组件给过来的数据：{{msg}}</p>
        <button @click="ClickMe">传送数据</button>
    </div>
</template>
```

### 逻辑结构

```js
var app = new Vue({
    el: '#app',
    data: {
        msg:'hello father'
    },
    methods: {
        GetData(data)
        {
            console.log(`子组件给过来的数据：${data}`)
        }
    },
    components:{
        demo:{
            template: '#demo',
            props: ['msg'], //定义属性
            data()
            {
                return {
                    son:'hello son'
                }
            },
            methods: {
                ClickMe()
                {
                    this.$emit('father', this.son)
                }
            }
        }
    }
})
```

## 组件传参

### 常见问题

```html
vue组件props没有起作用的原因：并不会在开发版本中运行，只有生产版本会直接删除警告，
引入一个非压缩的版本就可以解决
```

### 页面结构

```html
<div id="app">
    <demo :prop-c="propC"></demo>
</div>

<template id="demo">
    <div>
        <h1>props验证</h1>
        {{propC}}
    </div>
</template>
```

### 逻辑结构

```js
var app = new Vue({
    el: '#app',
    data:{
        propC:'123',
    },
    components:{
        demo:{
            template: '#demo',
            props:{
                // 基础类型检测, null意味着任何类型都行
                propA: Null,

                // 多种类型
                propB: [String, Number],

                // 必传且是String
                propC: {
                    type: String,
                    required: true
                },

                // 数字有默认值
                propD: {
                    type: Number,
                    default: 101
                },

                // 数组、默认值是一个工厂函数返回对象
                propE: {
                    type: Object,
                    default: function() {
                        console.log("propE default invoked.");
                        return { message: "I am from propE."};
                    }
                },

                // 自定义验证函数
                propF: {
                    isValid: function(value) 
                    {
                        return value > 100;
                    }
                }
            },
        }
    }
})
```

## 插槽

### 页面结构

```html
<div id="app">
    <test></test>

    <test>
        <h1>覆盖插槽</h1>
    </test>

    <test1>
        <h1 slot="head">覆盖具名插槽head</h1>
        <h1 slot="foot">覆盖具名插槽foot</h1>
    </test1>
</div>


<template id="test">
    <div>
        <slot>公共无名插槽</slot>
    </div>
</template>

<template id="test1">
    <div>
        <slot name="head"><h1>这个是有名head插槽</h1></slot>
        <slot name="foot"><h1>这个是有名foot插槽</h1></slot> 
   </div>
</template>
```

### 逻辑结构

```js
new Vue({
    el: '#app',
    components:{
        test:{
            template:"#test"
        },
        test1:{
            template:"#test1"
        },
    }
})
```

## 路由

## 路由构建

### 页面结构

```html
<body>
    <div id="app">
        <h1>路由操作</h1>

        <!-- 路由渲染组件 -->
        <router-view></router-view>

        <br />

        <!-- 路由跳转组件 -->
        <router-link to="/list1">跳转列表1路由</router-link>
        <router-link to="/list2">跳转列表2路由</router-link>
    </div>
</body>

<script src="./vue.min.js"></script>
<!--要引入路由组件-->
<script src="./vue-router.js"></script>
```

### 逻辑结构

```js
//路由组件
const List1 = { template: '<div>列表1</div>' }
const List2 = { template: '<div>列表2</div>' }

//定义路由列表
const routes = [
    { path: '/list1', component: List1 },
    { path: '/list2', component: List2 },
]

//创建路由对象
const router = new VueRouter({
    routes
})

//在全局中加载路由
var app = new Vue({
    el:'#app',
    router
})
```

## 动态传参

### 页面结构

```html
<body>
    <div id="app">
        <h1>路由操作</h1>

        <p>
            接收 query 参数的时候 需要使用 path属性<br />
            接收 params 参数的时候 需要使用 name属性<br />
        </p>

        <!-- 路由渲染组件 -->
        <router-view></router-view>

        <br />

        <!-- 路由跳转组件 -->
        <router-link to="/list">跳转到列表路由(无参数)</router-link>
        <router-link :to="{path:'/list', query:{keyword:123}}">跳转到列表路由(有参数)</router-link>
        <router-link :to="{name:'info', params:{id:100}}">跳转到详细页面路由</router-link>
    </div>
</body>

<script src="./vue.min.js"></script>
<!--要引入路由组件-->
<script src="./vue-router.js"></script>
```

### 逻辑结构

```js
//路由组件
const List = { 
    template: `
        <div>
            列表页面
            接收query参数 {{$route.query}}
        </div>
    `
}

const Info = { 
    template: `
        <div>
            详细界面
            接收params参数 {{$route.params}}
        </div>
    `
}

//定义路由列表
const routes = [
    { path: '/list', component: List },
    { path: '/info/:id', component: Info, name: 'info' },
]

//创建路由对象
const router = new VueRouter({
    routes
})

//在全局中加载路由
var app = new Vue({
    el:'#app',
    router
})
```

## 路由嵌套

### 页面结构

```html
<body>
    <div id="app">
        <!-- 路由渲染组件 -->
        <router-view></router-view>

        <!-- 跳转路由 -->
        <router-link to="/user">会员中心</router-link>
        <router-link to="/user/address">会员中心下面的收货地址</router-link>

        <br />
    </div>
</body>

<script src="./vue.min.js"></script>
<!--要引入路由组件-->
<script src="./vue-router.js"></script>
```

### 逻辑结构

```js
const User = {
    template:`
        <div>
            <h1>会员中心页面</h1>
            <router-view></router-view>
        </div>
    `
}

const Address = {
    template: `<h1>子路由收货地址页面</h1>`
}

//创建路由对象
const router = new VueRouter({
    routes: [
        {
            path: '/user',
            component: User,
            children: [
                {
                    path:'address',
                    component:Address
                }
            ]
        }
    ]
})

//在全局中加载路由
var app = new Vue({
    el:'#app',
    router
})
```

## 操作方法

### 页面结构

```html
<body>
    <div id="app">
        <h1>操作方法</h1>

        <!-- 路由渲染组件 -->
        <router-view></router-view>

        <br />

        <button @click="demo1">按钮跳转首页</button>
        <button @click="demo2">按钮跳转会员中心</button>
        <button @click="demo3">刷新界面</button>
    </div>
</body>

<script src="./vue.min.js"></script>
<!--要引入路由组件-->
<script src="./vue-router.js"></script>
```

### 逻辑结构

```js
const Home = {
    template: `<h1>首页</h1>`
}

const User = {
    template: `<h1>会员中心</h1>`
}

//创建路由对象
const router = new VueRouter({
    routes: [
        {
            path: '/',
            component: Home,
        },
        {
            path: '/user',
            component: User,
        },
    ]
})

//在全局中加载路由
var app = new Vue({
    el:'#app',
    router,
    methods:{
        demo1()
        {
            this.$router.push('/')
        },
        demo2()
        {
            //普通跳转
            // this.$router.push('/user')

            //带params参数跳转
            // this.$router.push({name: '/user', params:{id:'参数值'}})

            //带query参数跳转
            this.$router.push({path: '/user', query:{keyword:'参数值'}})
        },
        demo3()
        {
            //刷新当前界面
            this.$router.go(0)

            //后退
            // this.$router.go(-1)

            // 前进
            // this.$router.go(1)
        }
    }
})
```

## 路由守卫

### 页面结构

```html
<body>
    <div id="app">
        <h1>路由守卫</h1>

        <!-- 路由渲染组件 -->
        <router-view></router-view>

        <br />

        <router-link to="/">跳转首页</router-link>
        <router-link to="/user">跳转会员中心</router-link>
        <router-link to="/product">跳转产品页</router-link>
    </div>
</body>

<script src="./vue.min.js"></script>
<!--要引入路由组件-->
<script src="./vue-router.js"></script>
```

### 逻辑结构

```js
const Home = {
    template: `<h1>首页</h1>`
}

const User = {
    template: `<h1>会员中心</h1>`
}

const Product = {
    template: `<h1>产品中心</h1>`
}

const Login = {
    template: `<h1>登录界面</h1>`
}

//创建路由对象
const router = new VueRouter({
    routes: [
        {
            path: '/',
            component: Home,
        },
        {
            path: '/user',
            component: User,
            //给这个路由添加自定义信息
            meta: {
                IsLogin: true
            }
        },
        {
            path: '/product',
            component: Product,
        },
        {
            path: '/login',
            component: Login,
        },
    ]
})

//全局前置路由守卫
router.beforeEach((to, from, next) => {
    //to 这个参数代表 去到哪个路由
    //from 这个参数代表 从哪里来
    //next 这个参数代表 是否可以去到下一步
    //我们可以根据to当中是否有meta信息来判断当前的路由是否需要登录
    //这个就是我们常见的判断是否有登录
    var IsLogin = to.meta.IsLogin ? to.meta.IsLogin : false
    //如果IsLogin=true 就说明是需要登录的，否则就不需要登录
    if(IsLogin)
    {
        // 需要登录去到登录界面
        next('/login')
    }else
    {
        //不需要登录直接去到下一步
        next()
    }
})

//全局后置路由守卫
router.afterEach((to, from) => {
    // 你也可以注册全局后置钩子，然而和守卫不同的是，这些钩子不会接受 next 函数也不会改变导航本身
    // console.log('全局后置路由守卫')
})

//在全局中加载路由
var app = new Vue({
    el:'#app',
    router,
})
```

### 组件内的守卫

```js
<template>
  <div>
    <h1>列表页面</h1>
  </div>
</template>
<script>
export default {
  beforeRouteEnter(to, from, next) {
    //进入路由前
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
    next(vm => {
        // 通过 `vm` 访问组件实例
        console.log(vm)
    })
    next()
  },
  beforeRouteUpdate(to, from, next) {
    //更新路由前
    // 在当前路由改变，但是该组件被复用时调用
    console.log("组件更新时触发");
    next()
  },
  beforeRouteLeave(to, from, next) {
    // 可以访问组件实例 `this`
    console.log("导航离开该组件的对应路由时调用");
    next()
  },
};
</script>
```

### 脚手架中使用方式

```js
const app = createApp(App)
    .use(router)  //挂载路由
    .use(Vant)   //挂载UI组件
    .use(api)  //挂载接口   === install
    .use(VueCookies)
    .mount('#app')


//添加路由守卫做判断是否有无登录
router.beforeEach(async (to, from, next) => {
    if(to.meta.auth)
    {
        //需要登录

        //判断是否有无cookie 
        var LoginUser = app.$cookies.get('LoginUser')

        //没有登录就跳转到登录界面
        if(!LoginUser)
        {
            next('/user/base/login')
            return
        }

        //获取id
        var userid = LoginUser.id ? LoginUser.id : 0;

        //接口请求
        var result = await api.check({userid:userid})

        if(result.code == 0)
        {
            //验证失败
            app.$cookies.remove('LoginUser')

            //跳转了
            next('/user/base/login')
            return
        }else
        {
            //验证成功
            //覆盖cookie
            app.$cookies.set('LoginUser', result.data)

            //让他去到该去的路由
            next()
        }
    }else
    {
        //不需要登录,直接跳转路由
        next()
    }
})
```

## 路由模式

```
Hash: 使用URL的hash值来作为路由。支持所有浏览器 这种为默认模式 URL中带有#的

History: 当你使用 history 模式时，URL 就像正常链接，例如 http://yoursite.com/user/id，也好看！

Abstract： 支持所有javascript运行模式。如果发现没有浏览器的API，路由会自动强制进入这个模式
```

### linkActiveClass

```
linkActiveClass 该配置为激活状态时动态添加的class名称
```

### 页面结构

```html
<body>
    <div id="app">
        <h1>路由守卫</h1>

        <!-- 路由渲染组件 -->
        <router-view></router-view>

        <br />

        <router-link to="/">跳转首页</router-link>
        <router-link to="/user">跳转会员中心</router-link>
        <router-link to="/product">跳转产品页</router-link>
    </div>
</body>

<script src="./vue.min.js"></script>
<!--要引入路由组件-->
<script src="./vue-router.js"></script>
```

### 逻辑结构

```js
const Home = {
    template: `<h1>首页</h1>`
}

const User = {
    template: `<h1>会员中心</h1>`
}

const Product = {
    template: `<h1>产品中心</h1>`
}

//创建路由对象
const router = new VueRouter({
    mode: 'hash', //默认模式
    linkActiveClass:'active', //路由跳转时动态添加样式
    routes: [
        {
            path: '/',
            component: Home,
        },
        {
            path: '/user',
            component: User,
        },
        {
            path: '/product',
            component: Product,
        },
    ]
})

//在全局中加载路由
var app = new Vue({
    el:'#app',
    router,
})
```

## 文档链接

- [Vue学习笔记（尚硅谷天禹老师）](https://blog.csdn.net/qq_55593227/article/details/119717498?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522168471844316800222823363%2522%252C%2522scm%2522%253A%252220140713.130102334..%2522%257D&request_id=168471844316800222823363&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~top_positive~default-2-119717498-null-null.142^v87^koosearch_v1,239^v2^insert_chatgpt&utm_term=vue&spm=1018.2226.3001.4187)

