## vue3

## 手册链接

| 描述         | 地址                                                         |
| :----------- | :----------------------------------------------------------- |
| Vuejs官网    | [http://vuejs.org/open in new window](http://vuejs.org/)     |
| Vuejs中文网  | [http://cn.vuejs.org/open in new window](http://cn.vuejs.org/) |
| Vite中文网   | [https://vitejs.cn/open in new window](https://vitejs.cn/)   |
| Vue-CLI      | [https://cli.vuejs.org/zh/open in new window](https://cli.vuejs.org/zh/) |
| Vue-Router   | [https://router.vuejs.org/zh/open in new window](https://router.vuejs.org/zh/) |
| Vuex         | [https://vuex.vuejs.org/zh/open in new window](https://vuex.vuejs.org/zh/) |
| Pinia        | [https://pinia.web3doc.top/open in new window](https://pinia.web3doc.top/) |
| NuxtJS中文网 | [https://nuxt.com.cn/open in new window](https://nuxt.com.cn/) |
| VantUI       | https://vant-ui.github.io/                                   |

## 全局安装脚手架

> - Yarn安装

```
yarn global add @vue/cli
```

> - NPM安装

```
npm install -g @vue/cli
```

## 查看安装是否成功

```
vue --version
```

## 创建项目

> 利用Vite构建工具来创建项目

```
# npm 6.x
npm init vite@latest <project-name> --template vue

# npm 7+，需要加上额外的双短横线
npm init vite@latest <project-name> -- --template vue

cd <project-name>

npm install

npm run dev
```

> Yarn安装

```
yarn create vite <project-name> --template vue
cd <project-name>
yarn
yarn dev
```

## 目录结构

```
/project
    .gitignore                git仓库忽略文件
    index.html                页面入口文件
    package.json                安装包依赖文件
    vite.config.js            vite配置文件
    node_modules/                依赖包
    public/                    公共访问目录
    dist/                        打包目录
    src/                        开发逻辑目录


/src
    App.vue                    项目入口文件
    main.js                    项目的核心文件
    assets/                    放置一些图片，如logo等
    components/                组件目录
```

## setup

```html
1、setup 是 Vue3 中新增的钩子，它是我们在编写组件时的一个入口API
2、setup执行是在创建实例之前就是beforeCreate执行，所以setup函数中的this还不是组件的实例，
而是undefined，setup是同步的。并且，我们只能同步使用setup函数，不能用async将其设为异步。
3、setup 函数接收两个参数 props 和 context， 语法为：setup(props,context){}
```

## 基本使用

```js
<template>
  <input type="text" v-model="name" /><br />
  {{name}}
</template>
<script>
import { ref } from 'vue'
export default {
    setup(){
        let name = ref('hello world')
        return {
            name
        }
    }
}
</script>
```

## props

> props 里面包含父组件传递给子组件的所有数据。在子组件中使用 props 进行接收 props 是响应式的， 当传入新的 props 时，会及时被更新 由于是响应式的， 所以不可以使用 ES6 解构，解构会消除它的响应式

## context

> context 里面包含 attrs, slots, emit 等数据方法 attrs：获取组件上的属性 slots：获取 slot 插槽的节点 emit ：emit 方法（子组件向父组件传递数据）

```js
<script>
export default {
  setup(props, context) {
    //获取传递的属性
    console.log(props)

    // 透传 Attributes（非响应式的对象，等价于 $attrs）
    console.log(context.attrs)

    // 插槽（非响应式的对象，等价于 $slots）
    console.log(context.slots)

    // 触发事件（函数，等价于 $emit）
    console.log(context.emit)
  }
}
</script>
```

## 响应式数据

> 1、 reactive() 接收一个普通对象然后返回该普通对象的响应式代理。
>
> 2、 ref 接受一个参数值并返回一个响应式且可改变的 ref 对象。ref 对象拥有一个指向内部值的单一属性 .value。
>
> 3、readonly ()接受一个对象 (不论是响应式还是普通的) 或是一个 ref，返回一个原值的只读代理。
>
> 4、toRef() 从复杂类型中抽离单个 响应式属性出来
>
> 5、toRefs() 将一个响应式对象转换为一个普通对象，这个普通对象的每个属性都是指向源对象相应属性的 ref。每个单独的 ref 都是使用 toRef() 创建的。

```js
<template>
    <h1>ref - {{count}}</h1>
    <h1>reactive - {{obj.name}}</h1>
    <h1>toRef  - {{fooRef}}</h1>
    <h1>toRefs   - {{foo}}</h1>
    <h2>readonly - {{copy.count}}</h2>
</template>
<script setup>
    import { ref, reactive, toRef, toRefs, readonly } from "vue";
    // 创建单个响应式数据
    const count = ref(0);
    count.value = 1;
    console.log(count);
    // 对象响应式数据
    const obj = reactive({
        name: "张三",
    });
    // 修改对象响应式数据
    setTimeout(() => {
        obj.name = "李四";
    });

    const state = reactive({
        foo: 1,
        bar: 2,
    });

    // 双向 ref，会与源属性同步
    const fooRef = toRef(state, "foo");

    // 更改该 ref 会更新源属性
    fooRef.value++;
    console.log(state.foo); // 2

    // 更改源属性也会更新该 ref
    state.foo++;
    console.log(fooRef.value); // 3

    const stateAsRefs = toRefs(state)
    // 可以解构而不会失去响应性
    const { foo, bar } = stateAsRefs


    const original = reactive({ count: 0 })
    const copy = readonly(original)

    setTimeout(() => {
         // 依赖追踪
        console.log(copy.count)
    },2000);

    // 更改源属性会触发
    original.count++

    // 更改该只读副本将会失败，并会得到一个警告
    copy.count++ // warning!
</script>
```

## 生命周期

```html
1、setup() : 开始创建组件之前，在 beforeCreate 和 created 之前执行，创建的是 data 和 method

2、onBeforeMount() : 组件挂载到节点上之前执行的函数；

3、onMounted() : 组件挂载完成后执行的函数；

4、onBeforeUpdate(): 组件更新之前执行的函数；

5、onUpdated(): 组件更新完成之后执行的函数；

6、onBeforeUnmount(): 组件卸载之前执行的函数；

7、onUnmounted(): 组件卸载完成后执行的函数；

8、onActivated(): 被包含在 <keep-alive> 中的组件，会多出两个生命周期钩子函数，被激活时执行；

9、onDeactivated(): 比如从 A 组件，切换到 B 组件，A 组件消失时执行；

10、onErrorCaptured(): 当捕获一个来自子孙组件的异常时激活钩子函数。

11、onRenderTracked() 注册一个调试钩子，当组件渲染过程中追踪到响应式依赖时调用。

12、onRenderTriggered()注册一个调试钩子，当响应式依赖的变更触发了组件渲染时调用。
<script setup>
    import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount,
    onUnmounted, onRenderTracked, onRenderTriggered} from "vue";

    onBeforeMount(() => { console.log('挂载前的钩子')})

    onMounted(() => { console.log('挂载后的钩子') })

    onBeforeUpdate(() =>{ console.log('更新前的钩子') })

    onUpdated(() =>{ console.log('更新后的钩子') })

    onBeforeUnmount(() =>{ console.log('组件卸载之前') })

    onUnmounted(() =>{ console.log('组件卸载完成后') })

    //仅在开发模式下可用的调试钩子
    onRenderTracked(() =>{ console.log('渲染过程中追踪到响应式依赖时调用') })

    onRenderTriggered(() =>{ console.log('更新时依赖时调用') })
</script>
```

## 常用属性

## watchEffect

> 立即运行一个函数，同时响应式地追踪其依赖，并在依赖更改时重新执行。 即使组件卸载了，但是监听器依然存在，这个时候其实式需要我们手动关闭它的，否则容易造成内存泄漏。

```js
<template>
    <h1>{{count }}</h1>
    <div>
        <button type="button" @click="countAdd">点击+1</button>
    </div>
</template>
<script setup>
import {ref, watchEffect} from "vue";
const count = ref(0)
const stop  = watchEffect(() => {
    console.log("新的值:", count.value)

})
const countAdd = (() =>{
    count.value++ 
})

// 当不再需要此侦听器时:
 setTimeout(() => {
    stop()
}, 1000);

</script>
```

## watch

> watch 监听器监听了 message 变量，当它发生变化时，就会触发 watch 监听函数中的回调函数， 并且回调函数默认接收两个参数：新值和旧值。 注意：当我们第一进入页面时，watch 监听函数的回调函数是不会执行的。

```js
<template>
  <p>{{ message }}</p>
  <p>{{ x1 + x2 }}</p>
  <button @click="changeMsg">更改 message</button>
  <h1>深度监听</h1>
  <h3>数量：{{ number.count }}</h3>
  <button @click="countAdd">点击+1</button>
</template>
<script setup>
import { ref, watch, reactive } from "vue";
const message = ref("初始化的值");
const x1 = ref(12);
const x2 = ref(13);
watch(
  () => x1.value + x2.value,
  (newValue, oldValue) => {
    console.log("新的值:", newValue);
    console.log("旧的值:", oldValue);
  }
);
const changeMsg = () => {
  message.value = "张三";
  x1.value = 14;
  x2.value = 23;
};

// 深度监听
const number = reactive({ count: 0 });
const countAdd = () => {
  number.count++;
};
watch(
  () => number,
  (newValue, oldValue) => {
    console.log("新的值:", newValue);
    console.log("旧的值:", oldValue);
  },
  { deep: true }
);

</script>
```

> watch 与 watchEffect 区别

```html
1、watch 和 watchEffect 都能监听响应式数据的变化，不同的是它们监听数据变化的方式不同。
2、watch 会明确监听某一个响应数据，而 watchEffect 则是隐式的监听回调函数中响应数据。
3、watch 在响应数据初始化时是不会执行回调函数的，watchEffect 在响应数据初始化时就会立即执行回调函数。
```

## computed

> 接收一个回调函数，返回一个通过其他属性经过计算的新值，返回一个只读的响应式 ref 对象。

```js
<template>
  <p>{{ count }}</p>
  <h3>数量：{{ plusOne }}</h3>
  <button @click="countAdd">点击+1</button>
</template>
<script setup>
import { ref, computed } from "vue";
const count = ref(1);
const plusOne =  computed(() => {
     return count.value  * 2    // 注意 ref 包装过的值在value中
  })

const countAdd = () => {
    count.value++;
};
</script>
```

## 组件传参

> setup 函数的第一个参数是组件的 props。和标准的组件一致，一个 setup 函数的 props 是响应式的， 并且会在传入新的 props 时同步更新。
>
> 子组件

```js
<template>
  <h1>props 的校验, 子组件的接收类型校验</h1>
</template>
<script setup>
  defineProps({
    // 基础类型检查
    // （给出 `null` 和 `undefined` 值则会跳过任何类型检查）
    propA: Number,
    // 多种可能的类型
    propB: [String, Number],
    // 必传，且为 String 类型
    propC: {
      type: String,
      required: true,
    },
    // Number 类型的默认值
    propD: {
      type: Number,
      default: 100,
    },
    // 对象类型的默认值
    propE: {
      type: Object,
      // 对象或数组的默认值
      // 必须从一个工厂函数返回。
      // 该函数接收组件所接收到的原始 prop 作为参数。
      default(rawProps) {
        return { message: "hello" };
      },
    },
    // 自定义类型校验函数
    propF: {
      validator(value) {
        // The value must match one of these strings
        return ["success", "warning", "danger"].includes(value);
      },
    },
    // 函数类型的默认值
    propG: {
      type: Function,
      // 不像对象或数组的默认，这不是一个
      // 工厂函数。这会是一个用来作为默认值的函数
      default() {
        return "Default function";
      },
    },
  });
</script>
```

## 组件通信

## 父子通信

> 子组件

```js
<template>
  <h1>{{ name }}- 子组件的属性</h1>
  <button @click="send">发送数据给父组件</button>
</template>
<script setup>
import { ref } from "vue";
// 方法一 获取父组件传参
defineProps({
  name: String,
});
// 方法二 获取父组件传参
const props = defineProps(['name'])
let name = ref(props.name)
console.log(name)

// defineEmits 接收与 emits 选项相同的值
const emit = defineEmits(['sub'])

let send = () => {
  emit("sub", "hello son2");
};
</script>
```

> 父组件

```js
<template>
    <son1 :name="name" @sub="GetData">son1组件</son1>
</template>
<script setup>
  // 引入响应式数据对象 = data
  import { ref } from 'vue'
  // 子组件引入
  import son1 from './demo2.vue'

  //初始化一个响应式数据
  let name = ref('hello world')
  let GetData = (data) =>
  {
    // 子组件传过来的参数
    console.log(data)
  }     
</script>
```

## 插槽

> 使用slot声明一个插槽出口API后，选择将组件内容渲染到插槽部分，也可以选择不做渲染。
>
> 父组件

```js
<template>
  <slot1>
    <template v-slot:header></template>

    <!-- 中间内容 作用域插槽-->
    <template v-slot:content="scoped">
      {{scoped.demo}}
    </template>

    <template v-slot:footer></template>
  </slot1>
</template>

<script>
  import slot1 from '@/components/vue3/demo/slot1.vue'

  export default {
    components:{
      slot1
    }
  }
</script>
```

> 子组件

```js
<template>
  <h1>插槽子组件</h1>

  <slot name="header">
    <h1>头部部分</h1>
  </slot>

  <slot name="content" :demo="demo"></slot>

  <slot name="footer">
    <b>底部部分</b>
  </slot>
</template>

<script>
  import { ref } from 'vue'
  export default{
    setup()
    {
      let demo = ref('hello world')
      return {
        demo
      }
    }
  }
</script>
```

## 路由传参

## 安装VueRouter4

```
npm install vue-router@4 -S
```

> src/router.js

```js
//引入路由对象
import { createRouter, createWebHashHistory} from "vue-router"

//引入组件
import home from './components/home.vue'
import about from './components/about.vue'
import solt from './components/solt.vue'
// 创建路由
export default createRouter({
    history: createWebHashHistory(), //hash路由模式
    linkExactActiveClass: 'active',  //点击路由跳转的底部样式标量
    //路由列表
    routes: [
        {
            path: '/',
            name: 'home',
            component: home
        },
        {
            path: '/about/:id',
            name: 'about',
            component: about
        },
        {
            path: '/solt',
            name: 'solt',
            component: solt
        },
    ]
})
```

## 入口文件引入

> main.js

```js
import router from './routers/index.js'
createApp(App)
.use(router) // 路由挂载
.mount('#app')
```

## 路由跳转

> 组件home

```js
<template>
  <div>
    <button @click="toAbout">跳转到About</button>
    <button @click="toAbout2">跳转到solt</button>
  </div>
</template>
<script>
import { useRouter } from 'vue-router'

export default {
  name: 'Home',
  setup() {
    const router = useRouter()
    const toAbout = () => {
      router.push({
        name: 'about',
        params: {
          id: 100,
        },
      })
    }

    const toAbout2 = () => {
        router.push({
          path:'/solt',
          query: {
            id: 100,
          },
        })
      }

    return {
      toAbout,
    }
  },
}
</script>
```

> 组件about

```js
<template>
  <div class="about">
    <h1>about</h1>
  </div>
</template>
<script>
import { useRoute } from 'vue-router'

export default {
  name: 'about',
  setup() {
    const route = useRoute()
    console.log('99999999', route.params)
  },
}
</script>
```

> 组件solt

```js
<template>
  <div class="solt">
    <h1>about</h1>
  </div>
</template>
<script>
import { useRoute } from 'vue-router'

export default {
  name: 'solt',
  setup() {
    const route = useRoute()
    console.log('99999999', route.query)
  },
}
</script>
```

## 路由守卫

> beforeEach()全局前置守卫：初始化时执行、每次路由切换前执行；
>
> src/router.js

```js
//引入路由对象
import { createRouter, createWebHashHistory} from "vue-router"

//引入组件
import home from './components/home.vue'
import about from './components/about.vue'

// 创建路由
export default createRouter({
    history: createWebHashHistory(), //hash路由模式
    linkExactActiveClass: 'active',  //点击路由跳转的底部样式标量
    //路由列表
    routes: [
        {
            path: '/',
            name: 'home',
            component: home
        },
        {
            path: '/about',
            name: 'about',
            component: about,
            //给这个路由添加自定义信息, 让改路由在登录状态下才能访问
            meta: {
                IsLogin: true
            }
        },
    ]
})
```

> 页面结构 组件home

```js
<template>
    <router-link to="/about">跳转到About页面</router-link><br />
</template>
```

> 入口文件 main.js

```js
// 创建app的应用 mount挂载到 id=app的这个根容器里面
var app = createApp(App)
    .use(router)  //将路由的功能 挂载到vue应用上面
    .use(Vant)  //挂载UI框架
    .use(api)  //挂载接口
    .use(VueCookies) //挂载cookie  
    .mount('#app')


//给路由增加一个钩子函数 - 全局前置路由守卫 - 你访问的任何一个路由 都要先进入这里做判断
//to 这个参数代表 去到哪个路由
//from 这个参数代表 从哪里来
//next 这个参数代表 是否可以去到下一步
//我们可以根据to当中是否有meta信息来判断当前的路由是否需要登录
router.beforeEach(async (to, from, next) => {
    //获取meta信息,判断如果为true就是需要登录，false不需要登录
    var IsLogin = to.meta.auth ? to.meta.auth : false

    if(IsLogin)
    {
        //判断登录

        // 先去获取cookie
        var LoginAuth = app.$cookies.get('LoginAuth')

        //没有cookie信息
        if(!LoginAuth || JSON.stringify(LoginAuth) == "{}")
        {
            // 跳转到登陆页面
            next('/business/base/login')
            return false
        }

        //获取用户id
        var busid = LoginAuth.id ? LoginAuth.id : 0
        var mobile = LoginAuth.mobile ? LoginAuth.mobile : ''

        //组装数据
        var data = {
            busid,
            mobile
        }

        //根据id去找这个人是否真实存在
        var result = await app.$api.check(data)

        // 验证成功
        if(result.code)
        {
            //覆盖一下cookie
            app.$cookies.set('LoginAuth', result.data)

            next()
        }else
        {
            //删除掉伪造非法cookie
            app.$cookies.remove('LoginAuth')

            //回到登录界面
            next('/business/base/login')
        }
    }else
    {
        //不需要判断登录
        next()
    }
})
```

## 路由封装

## 使用场景

```
当我们在使用vue-router来进行路由封装的时候，就会需要用到该功能点

在用vue-router的时候会遇到需要引入当前文件夹下的所有文件例如引入module文件夹下所有的js文件

通常可以再module文件夹下建一个index.js 文件，然后在index文件里统一 export导出

但其实可以更方便，import.meta.globEager这个ES6方法可以满足需求，不需要再每次都要在index文件里导出了

这样操作我们还有一个好处就是可以让路由封装的路径与Components组件目录的路径一致

我们先可以看一下目录结构
```

> 组件的目录结构

```
components/
    user/
        base/
            index.vue
            login.vue
            profile.vue
            register.vue

        address/
            index.vue
            add.vue
            edit.vue
```

> 路由的目录结构

```html
routers/
    user/
        base.js
        address.js
        order.js
        index.js

    product/
        cart.js
        product.js
        type.js
        index.js

    index.js
```

由此可见我们发现每个目录下面都有一个`index.js`这个文件，那么这个文件就是每个路由模块的入口文件

## 总入口文件

> src/routers/index.js

```js
//引入路由对象
import { createRouter, createWebHashHistory } from "vue-router"

// 设置一个默认首页
import Home from "components/home.vue"

// 引入每个目录下面的index.js文件  import.meta.glob('./*/index.js', { eager: true })
const ModulesFile = import.meta.glob('./*/index.js', { eager: true })

// 总路由集合
const RouterList = []

//提取每个对象下的值 同步获取
Object.values(ModulesFile).map(async mod => {
    if (mod.default) {
        // console.log(mod.default)
        RouterList.push(...mod.default)
    }
})



RouterList.push({
    path: '/', // 路径
    name: 'Home',
    component: Home  // 组件
})


// 创建一个总路由对象
export default createRouter({
    history: createWebHashHistory(),  //history模式 并且不会有/# 
    linkExactActiveClass: 'active',  //激活链接状态class名称
    routes: RouterList,   //routes
})
```

## 每个独立路由模块下面的index.js

> src/routers/user/index.js

```js
// 引入当前目录下面的所有文件
const ModulesFile = import.meta.glob('./*.js', { eager: true })

// 路由集合
const RouterList = []

//提取每个对象下的值 同步获取
Object.values(ModulesFile).map(async mod => {
  if(mod.default)
  {
    RouterList.push(...mod.default)
  }
})

//定义父组件
const layout = {
  template:`<router-view></router-view>`
}

//导出
export default [
  {
    path:'/user', // 父路由
    component:layout,
    //子路由分组   /user/order/xxxx
    children:RouterList
  }
]
```

## 其他的路由文件

> src/routers/user/base.js

```js
//引入组件
import index from '@/components/user/base/index.vue'
import login from '@/components/user/base/login.vue'
import register from '@/components/user/base/register.vue'
import profile from '@/components/user/base/profile.vue'

export default [
    //会员中心
    {
        // /user/base/index
        path:'base/index',
        name:'BaseIndex',
        component:index,
        meta:{ //如果路由中存在这个属性 就代表需要登录才能访问
            auth:true
        }
    },
    {
        //基本资料
        path:'base/profile',
        name:'BaseProfile',
        component:profile,
        meta:{
            auth:true
        }
    },
    {
        //登录界面
        path:'base/login',
        name:'BaseLogin',
        component:login
    },
    {
        //注册界面
        path:'base/register',
        name:'BaseRegister',
        component:register
    }
]
```

## Vite配置

> vite.config.js

```js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
//引入路径模块
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      'vue': 'vue/dist/vue.esm-bundler.js' // 定义vue的别名，如果使用其他的插件，可能会用到别名
    },
  },
  plugins: [vue()],
})
```

## 项目搭建全家桶

## 脚手架安装

### 全局安装脚手架

> - Yarn安装

```
yarn global add @vue/cli
```

> - NPM安装

```
npm install -g @vue/cli
```

### 查看安装是否成功

```
vue --version
```

### 创建项目

> 利用Vite构建工具来创建项目

```
# npm 6.x
npm init vite@latest <project-name> --template vue

# npm 7+，需要加上额外的双短横线
npm init vite@latest <project-name> -- --template vue

cd <project-name>

npm install

npm run dev
```

> Yarn安装

```
yarn create vite <project-name> --template vue
cd <project-name>
yarn
yarn dev
```

### 目录结构

```
/project
    .gitignore                git仓库忽略文件
    index.html                页面入口文件
    package.json                安装包依赖文件
    vite.config.js            vite配置文件
    node_modules/                依赖包
    public/                    公共访问目录
    dist/                        打包目录
    src/                        开发逻辑目录


/src
    App.vue                    项目入口文件
    main.js                    项目的核心文件
    assets/                    放置一些图片，如logo等
    components/                组件目录
```

## Vite配置

### Vite构建工具

https://vitejs.cn/

### Vite配置

> vite.config.js

```js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

//引入路径模块
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "components": path.resolve(__dirname, "src/components"),
      'vue': 'vue/dist/vue.esm-bundler.js' // 定义vue的别名，如果使用其他的插件，可能会用到别名
      // "styles": path.resolve(__dirname, "src/styles"),
      // "plugins": path.resolve(__dirname, "src/plugins"),
      // "views": path.resolve(__dirname, "src/views"),
      // "layouts": path.resolve(__dirname, "src/layouts"),
      // "utils": path.resolve(__dirname, "src/utils"),
      // "apis": path.resolve(__dirname, "src/apis"),
      // "dirs": path.resolve(__dirname, "src/directives"),
    },
  },
  server: {
    proxy: {
      //设置代理请求 当代理商识别你的请求如果前缀是 /api的话 就会自动转移
      '/api': {
        target: 'http://www.ask.com/api',
        changeOrigin:true,  //跨域
        //替换掉api前缀 防止多个api地址
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    },
    hmr: {
      overlay: false,
    },
  },
  plugins: [vue()],
})
```

## 路由封装

### 安装VueRouter4

```
npm install vue-router@4 -S
```

> 快速入门使用

```
//引入路由对象
import { createRouter, createWebHashHistory } from "vue-router"

//引入组件
import home from '../components/home.vue'
import user from '../components/user.vue'

//创建路由
export default createRouter({
    history: createWebHashHistory(), //路由的模式
    linkExactActiveClass: 'active',  //点击路由跳转的底部样式标量
    //路由列表
    routes: [
        {
            //默认首页
            path: '/',
            name: 'home',
            component: home
        },
        {
            path: '/user',
            name: 'user',
            component: user
        }
    ]
})
```

### 使用场景

```
当我们在使用vue-router来进行路由封装的时候，就会需要用到该功能点

在用vue-router的时候会遇到需要引入当前文件夹下的所有文件例如引入module文件夹下所有的js文件

通常可以再module文件夹下建一个index.js 文件，然后在index文件里统一 export导出

但其实可以更方便，import.meta.globEager这个ES6方法可以满足需求，不需要再每次都要在index文件里导出了

这样操作我们还有一个好处就是可以让路由封装的路径与Components组件目录的路径一致

我们先可以看一下目录结构
```

> 组件的目录结构

```
components/
    user/
        base/
            index.vue
            login.vue
            profile.vue
            register.vue

        address/
            index.vue
            add.vue
            edit.vue
```

> 路由的目录结构

```html
routers/
    user/
        base.js
        address.js
        order.js
        index.js

    product/
        cart.js
        product.js
        type.js
        index.js

    index.js
```

由此可见我们发现每个目录下面都有一个`index.js`这个文件，那么这个文件就是每个路由模块的入口文件

### 总入口文件

> src/routers/index.js

```js
//引入路由对象
import { createRouter, createWebHashHistory } from "vue-router"

// 设置一个默认首页
import home from '@/components/home.vue'

// 引入每个目录下面的index.js文件
const ModulesFile = import.meta.globEager("./*/index.js")

// 总路由集合
const RouterList = []

//提取每个对象下的值 同步获取
Object.values(ModulesFile).map(async mod => {
  if(mod.default)
  {
    RouterList.push(...mod.default)
  }
})

RouterList.push({
  path:'/', //传参选项 query
  name:'home', //传参选项 params
  component: home,
  // meta:{ //自定义参数
  //   Auth:true, //自定义命名 比如Auth为true就是需要登录 否则不需要登录
  // }
})

// 创建一个总路由对象
export default createRouter({
  history: createWebHashHistory(),  //history模式 并且不会有/# 
  linkExactActiveClass:'active',  //激活链接状态class名称
  routes:RouterList,   //routes 很容易写成 routers !!!!!!!!!
})
```

### 每个独立路由模块下面的index.js

> src/routers/user/index.js

```js
// 引入当前目录下面的所有文件
const ModulesFile = import.meta.globEager('./*.js')

// 路由集合
const RouterList = []

//提取每个对象下的值 同步获取
Object.values(ModulesFile).map(async mod => {
  if(mod.default)
  {
    RouterList.push(...mod.default)
  }
})

//定义父组件
const layout = {
  template:`<router-view></router-view>`
}

//导出
export default [
  {
    path:'/user', // 父路由
    component:layout,
    //子路由分组   /user/order/xxxx
    children:RouterList
  }
]
```

### 其他的路由文件

> src/routers/user/base.js

```js
//引入组件
import index from '@/components/user/base/index.vue'
import login from '@/components/user/base/login.vue'
import register from '@/components/user/base/register.vue'
import profile from '@/components/user/base/profile.vue'

export default [
    //会员中心
    {
        // /user/base/index
        path:'base/index',
        name:'BaseIndex',
        component:index,
        meta:{ //如果路由中存在这个属性 就代表需要登录才能访问
            auth:true
        }
    },
    {
        //基本资料
        path:'base/profile',
        name:'BaseProfile',
        component:profile,
        meta:{
            auth:true
        }
    },
    {
        //登录界面
        path:'base/login',
        name:'BaseLogin',
        component:login
    },
    {
        //注册界面
        path:'base/register',
        name:'BaseRegister',
        component:register
    }
]
```

## 接口封装

### 使用场景

```
当我们在Vue项目开发当中，经常会去调用后端的接口，所以我们在Vue搭建的过程中，需要对接口请求进行封装

在封装的过程中我们需要去安装 axios 这个插件，来帮助我们发送http请求

下面就是封装的过程
```

### 安装axios

```
yarn add axios -S
```

### 请求服务封装

> src/services/request.js

```js
//引入axios异步请求插件
import axios from 'axios'

let cancel ,promiseArr = {}

const CancelToken = axios.CancelToken;

//请求拦截器
axios.interceptors.request.use(config => {
    //发起请求时，取消掉当前正在进行的相同请求
    if (promiseArr[config.url]) {
        promiseArr[config.url]('操作取消')
        promiseArr[config.url] = cancel
    } else {
        promiseArr[config.url] = cancel
    }
      return config
}, error => {
    return Promise.reject(error)
})

//响应拦截器即异常处理
axios.interceptors.response.use(
  response => {
      // return response
      return response.data
  }, 
  err => {
      if (err && err.response) {
        switch (err.response.status) {
          case 400:
            err.message = '错误请求'
            break;
          case 401:
            err.message = '未授权，请重新登录'
            break;
          case 403:
            err.message = '拒绝访问'
            break;
          case 404:
            err.message = '请求错误,未找到该资源'
            break;
          case 405:
            err.message = '请求方法未允许'
            break;
          case 408:
            err.message = '请求超时'
            break;
          case 500:
            err.message = '服务器端出错'
            break;
          case 501:
            err.message = '网络未实现'
            break;
          case 502:
            err.message = '网络错误'
            break;
          case 503:
            err.message = '服务不可用'
            break;
          case 504:
            err.message = '网络超时'
            break;
          case 505:
            err.message = 'http版本不支持该请求'
            break;
          default:
            err.message = `连接错误${err.response.status}`
        }
      } else {
        err.message = "连接到服务器失败"
      }
      console.err(err.message)
        return Promise.resolve(err.response)
  }
)

//请求的默认前缀 只要是发出去请求就会 默认带上这个前缀
axios.defaults.baseURL = '/api'

//设置默认请求头 异步的
axios.defaults.headers = {
    'X-Requested-With': 'XMLHttpRequest'
}

//设置超时请求时间
axios.defaults.timeout = 10000


//get请求
let GET = (data = {}) => {
  return new Promise((resolve,reject) => {
    axios({
      method: 'get',
      url:data.url,
      params: data.params,
      cancelToken: new CancelToken(c => {
        cancel = c
      })
    }).then(res => {
      resolve(res)
    })
  })
}

//post请求
let POST = (data = {}) =>
{
  return new Promise((resolve,reject) => {
    axios({
      method: 'post',
      url:data.url,
      data:data.params,
      cancelToken: new CancelToken(c => {
        cancel = c
      })
    }).then(res => {
      resolve(res)
    })
  })
}

// 文件上传请求
let UPLOAD = (data = {}) =>
{
  //封装表单数据对象
  var RequestData = new FormData()

  if(JSON.stringify(data.params) != "{}")
  {
    for(var key in data.params)
    {
      RequestData.append(key, data.params[key])
    }
  }

  return new Promise((resolve,reject) => {
    axios({
      method: 'post',
      url:data.url,
      data:RequestData,
      headers:{'Content-Type': 'multipart/form-data'},
      cancelToken: new CancelToken(c => {
        cancel = c
      })
    }).then(res => {
      resolve(res)
    })
  })
}


export {
  GET,
  POST,
  UPLOAD
}
```

> 接口的目录结构

```html
services/              存放自定义封装的服务文件
    request.js         axios二次封装的请求服务库


api/
    user/
        address.js
        base.js
        index.js

    product/
        product.js
        index.js

    index.js
```

由此可见我们发现每个目录下面都有一个`index.js`这个文件，那么这个文件就是每个接口的入口文件

### 总入口文件

> src/api/index.js

```js
// 引入每个目录下面的index.js文件
const ModulesFile = import.meta.globEager("./*/index.js")

//接口集合
var ApiList = {}

//提取对象下的值 同步
Object.values(ModulesFile).map(async mod => {
    if(mod.default)
    {
      //合并对象 循环多次合并
      ApiList = Object.assign(ApiList, mod.default)
    }
})

//让vue应用(app)继承接口服务  当使用.use挂载的时候， install函数就会被执行
ApiList.install = (app) => {
    //定义全局
    app.config.globalProperties.$api = ApiList
}

//导出接口集合
export default ApiList
```

### 每个独立接口模块下面的index.js

> src/api/user/index.js

```js
//引入当前目录下面所有的文件
const ModulesFile = import.meta.globEager('./*.js')

//接口列表
var ApiList = {}

Object.values(ModulesFile).map(async mod => {
    if(mod.default)
    {
        //合并对象 循环多次合并
        ApiList = Object.assign(ApiList,mod.default)
    }
})

export default ApiList
```

### 其他的接口文件

> src/api/user/base.js

```js
//引入封装的公共的请求插件
import {GET, POST, UPLOAD} from '@/services/request.js'

export default {
    register(data = {})
    {
        //注册接口
        //api/user/base/register
        return POST({
            url:'/user/base/register',
            params:data
        })
    },
    login(data = {})
    {
        //登录接口
        return POST({
            url:'/user/base/login',
            params:data
        })
    },
    profile(data = {}) 
    {
        //更改用户资料接口
        return UPLOAD({
            url:'/user/base/profile',
            params:data
        })
    }
}
```

### 全局挂载

> src/main.js

```js
//加载接口
import api from './api/index.js'

//挂载
const app = createApp(App)
    .use(api)
    .mount('#app')
```

### 在业务中使用

> src/components/home.vue

```js
export default {
    async created()
    {
      //接口请求
      var result = await this.$api.ProductIndex()
      console.log(result)
    }
}
```

## UI框架引入

## Vant移动端UI框架

[https://vant-contrib.gitee.io/vant](https://vant-contrib.gitee.io/vant/#/zh-CN)

### 安装

> 使用 NPM 或者 Yarn 安装

```
# Vue 2 项目，安装 Vant 2:
npm i vant@latest-v2

# Vue 3 项目，安装最新版 Vant：
npm i vant
```

### 导入所有组件

> src/main.js

```js
import { createApp } from 'vue';
import Vant from 'vant';
//引入组件样式
import 'vant/lib/index.css';

const app = createApp();
app.use(Vant);
```

### 使用组件

> 我们随便找个组件来使用一下

```html
<van-button type="primary">主要按钮</van-button>

<van-tag type="success">标签</van-tag>

<van-switch v-model="true" />
```

## 开发插件

### 开发自定义插件

> src/services/demo.js (新建自定义插件)

```js
// 插件是自包含的代码，通常向 Vue 添加全局级功能。
// 它可以是公开 install() 方法的 object，也可以是 function

export default {
  install(app, options)
  {
     //定义全局
     app.config.globalProperties.$demo = () => {
       return '自定义插件';
     }
  }
}
```

> src/main.js (全局挂载)

```js
//加载自定义插件
import demo from './services/demo'

const app = createApp(App)
    .use(demo)
    .mount('#app')
```

> 调用

```js
<script setup>
  import { getCurrentInstance } from 'vue'
  const { proxy } = getCurrentInstance()
  //调用自定义插件
  console.log(proxy.$demo())
</script>
```

### vue3-cookies

> Vue中操作Cookie插件：https://www.npmjs.com/package/vue3-cookies

```js
npm install vue3-cookies --save

yarn add vue3-cookies
```

> 路由守卫：src/main.js

```js
import { useCookies } from "vue3-cookies";

// 添加路由守卫做判断是否有无登录
router.beforeEach(async(to,from,next) =>{
    if(to.meta.auth){
        const { cookies } = useCookies();
    }
})
```

> 使用

```js
<script setup>
  import { useCookies } from "vue3-cookies";
  const { cookies } = useCookies();

  //获取cookie
  const LoginUser = ref(cookies.get("LoginUser"));

  //设置cookie
  cookies.set("LoginUser", result.data);

  //删除
  cookies.remove("LoginUser");
</script>
```

## 上线配置

### 打包上线

```
我们通过打包命令，将项目进行打包压缩，那么生成的路径是：dist/

那么大家在上线的时候一定要切记，在打包之前先把接口请求的代理地址改为线上地址
例如配置文件：vite.config.js

以下为本地配置
proxy: {
  '/api': {
    target: 'http://www.local.com/api',
    changeOrigin:true,
    rewrite: (path) => path.replace(/^\/api/, '')
  }
},


修改为线上配置 主要变化的是域名地址
proxy: {
  '/api': {
    target: 'http://www.online.com/api',
    changeOrigin:true,
    rewrite: (path) => path.replace(/^\/api/, '')
  }
},
```

> 然后运行打包命令

```
npm run build
```

### 最后传递到服务器上面，并配置服务器的反向代理

> Apache反向代理

```
1、去httpd.conf 中 开启一下两个扩展
LoadModule proxy_module modules/mod_proxy.so
LoadModule proxy_http_module modules/mod_proxy_http.so

2、在去到虚拟主机中  将<VirtualHost *:80>标签内部的内容放进去

<VirtualHost *:80>
    ProxyRequests off

    <Proxy *>
        Order deny,allow
        Allow from Off
    </Proxy>

    ProxyPass /api http://www.onlone.com/api
</VirtualHost>
```

> Nginx反向代理

```
server {
    listen       80; # 监听端口
    server_name  www.local.com;

    location / {
          #站点根目录，即网页文件存放的根目录, 默认主页目录在nginx安装目录的html子目录。 
        root   /Applications/MAMP/htdocs/class/local/dist;     

        #目录内的默认打开文件,如果没有匹配到index.html,则搜索index.htm,依次类推
        index  index.html index.htm;    

        #解决页面刷新404问题
        try_files $uri $uri/ /index.html;  
    }

    location /api {
        rewrite  ^.+api/?(.*)$ /$1 break;

        #需要代理的地址
        proxy_pass  http://www.online.com/api;
    }
}
```

## 文档链接

[Vue3学习笔记(尚硅谷)](https://blog.csdn.net/m0_53022813/article/details/128527334?utm_medium=distribute.pc_relevant.none-task-blog-2~default~baidujs_utm_term~default-5-128527334-blog-123071857.235^v38^pc_relevant_default_base3&spm=1001.2101.3001.4242.4&utm_relevant_index=8)