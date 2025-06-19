# React语法

## React 使用

- 实例输出了 Hello, world!

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script crossorigin src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
    <script src="https://unpkg.com/babel-standalone@6.26.0/babel.js"></script>
</head>
<body>
    <div id="root"></div>

    <script type="text/babel">
      let root = document.getElementById('root')
      class App extends React.Component {
        render() {
          return <h1>Hello world!</h1>
        }
      }

      ReactDOM.render(<App />, root)
    </script>
</body>
</html>
```



------





## 通过 npm 使用 React

- 国内使用 npm 速度很慢，可以使用淘宝定制的 cnpm (gzip 压缩支持) 命令行工具代替默认的 npm

```html
$ npm install -g cnpm --registry=https://registry.npm.taobao.org
$ npm config set registry https://registry.npm.taobao.org
```

- 使用 create-react-app 快速构建 React 开发环境

```html
执行以下命令创建项目：

$ cnpm install -g create-react-app
$ create-react-app my-app
$ cd my-app/
$ npm start
```

- 尝试修改 src/App.js 文件代码：

```html
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component 
{
    render() 
    {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Hello World</h2>
                </div>
                <p className="App-intro">
                    你可以在 <code>src/App.js</code> 文件中修改。
                </p>
            </div>
        )
    }
}

export default App;


修改后，打开 http://localhost:3000/ （一般自动刷新）
```

# React元素渲染

```html
React 元素是不可变对象。一旦被创建，你就无法更改它的子元素或者属性。
更新 UI 唯一的方式是创建一个全新的元素，并将其传入 ReactDOM.render()。
```



```html
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8" />
    <title>Hello React!</title>
    <script src="https://cdn.staticfile.org/react/16.4.0/umd/react.development.js"></script>
    <script src="https://cdn.staticfile.org/react-dom/16.4.0/umd/react-dom.development.js"></script>
    <script src="https://cdn.staticfile.org/babel-standalone/6.26.0/babel.min.js"></script>
</head>

<body>
    <div id="root"></div>
    <script type="text/babel">
        function tick() {
            const element = (
                <div>
                <h1>Hello, world!</h1>
                <h2>It is {new Date().toLocaleTimeString()}.</h2>
                </div>
            );
            ReactDOM.render(element, document.getElementById('root'));
        }
        setInterval(tick, 1000);
    </script>
</body>

</html>
```

# React JSX

- JSX：是一个 JavaScript 的语法扩展。我们建议在 React 中配合使用 JSX，JSX 可以很好地描述 UI 应该呈现出它应有交互的本质形式。
- JSX特性：



```html
由于 JSX 就是 JavaScript，一些标识符像 class 和 for 不建议作为 XML 属性名。
className用于代替class添加 CSS 类，就像class 在JavaScript 中的保留关键字一样。
JSX 中的属性和方法是驼峰式的——onclick将变成onClick.
```



## 案例

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <title>React 实例</title>
    <script src="https://cdn.staticfile.org/react/16.4.0/umd/react.development.js"></script>
    <script src="https://cdn.staticfile.org/react-dom/16.4.0/umd/react-dom.development.js"></script>
    <script src="https://cdn.staticfile.org/babel-standalone/6.26.0/babel.min.js"></script>
    <style>
        .title {
            font-size: 40px;
            color: chartreuse;
        }
    </style>
</head>

<body>
    <div id="app"></div>
    <script type="text/babel">
        class MyComponent extends React.Component {
            constructor(props) {
                super(props);
                this.state = {
                    isLogin: true,
                    Mystyle: {
                        fontSize: '20PX',
                        color: 'blue'
                    },
                    firstname: "我的名字是",
                    lastname: "李四",
                    list: [
                        <span>姓名：张三</span>,
                        <span>性别：男</span>,
                        <span>年龄：20</span>
                    ]
                }
            }

            render() {
                return (
                    <div>
                        {/* 运算符表达式 */}
                        <h2>{this.state.firstname + " ：" + this.state.lastname}</h2>
                        <h2>{20 * 50}</h2>

                        {/* 三元运算符 */}
                         <h2>{this.state.isLogin ? "欢迎回来" : "请先登录"}</h2>

                        {/* 行内样式写法 */}
                        <p style={this.state.Mystyle}>样式写法</p>

                        {/* class样式写法 */}
                        <p className="title">class样式写法</p>


                        {/* 数组写法 正确写法 */}
                        <div>
                            { this.state.list.map((item,index) => {
                                return(
                                    <p key={index}>{index}---{item}</p>
                                )
                            })}
                        </div>

                        <p>-----分割线-------</p>
                        {/* 数组写法 上面的写法有些麻烦，可以继续简化 */}
                         <div>
                            <Info  info={this.state.list}/>
                        </div>

                    </div>
                )
            }
        }

        function Info(props){
            const list = props.info.map((item,index) => <p key={index}>{index}---{item}</p>) 
            return list
        }


        ReactDOM.render(
            <MyComponent />,
            document.getElementById('app')
        )
    </script>
</body>
</html>
```

# React生命周期

> React的生命周期从广义上分为挂载、渲染、卸载三个阶段，在React的整个生命周期中提供很多钩子函数在生命周期的不同时刻调用。 描述的是使用class类组件提供的生命周期函数，每个组件都包含自己的生命周期方法，通过重写这些方法，可以在运行过程中特定的阶段执行这些方法

### 挂载过程

###### 当组件实例被创建并插入DOM中时，其生命周期调用顺序如下：

- constructor()

- render()

- componentDidMount()

  > 在这个阶段的componentWillMount()生命周期即将过时，在新代码中应该避免使用。



### 更新过程

###### 当组件的props或state发生变化时会触发更新，组件更新的生命周期调用顺序如下：

- render()
- componentDidUpdate()



### 卸载

###### 当组件从 DOM 中移除时会调用如下方法：

- componentWillUnmount()



```html
<!DOCTYPE html>
<html>

<head>
  <meta charset="UTF-8" />
  <title>React生命周期</title>
</head>

<body>
  <div id="root"></div>
</body>
<script src="https://unpkg.com/react@17/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
<script type="text/babel">

  class Clock extends React.Component {
    /*
    * 组件初始化时只调用，
    * 以后组件更新不调用，
    * 整个生命周期只调用一次，此时可以修改state
    */
    constructor(props) {
      super(props);
      this.state = { date: new Date() };
    }
     /*
    * 这个就是组件初始化创建的时候才会执行的方法
    * 并且只会执行一次，此时可以去修改 State里面的值
    */
    componentDidMount() {
      console.log("ComponentDidMount", this);
      console.log(this.props);
      console.log(this.state);
      console.log("");
      this.timer = setInterval(() => this.tick(), 1000);
    }
    /*
    * 组件将要卸载时调用，
    * 一些事件监听和定时器需要在此时清除
    */
    componentWillUnmount() {
      console.log("ComponentWillUnmount", this);
      console.log(this.props);
      console.log(this.state);
      console.log("");
      clearInterval(this.timer);
    }
    /*
    你执行的方法函数可以写在这里，也可以写在底部
    定时器
    */
    tick() {
      this.setState({ date: new Date() });
    }
    /*
    * react最重要的步骤，
    * 创建虚拟dom，
    * 进行diff算法，当你组件传递数据更新变化都会执行 render
    * 更新dom树都在此进行。此时就不能更改state了
    */
    render() {
      return (
        <div>
          <h1>{this.props.tips}</h1>
          <h2>Now: {this.state.date.toLocaleTimeString()}</h2>
        </div>
      );
    }
  }



  class App extends React.Component{
    constructor(props){
      super(props);
      this.state = { 
        showClock: true,
        tips: "Hello World!"
      }
    }
    /*
    会在更新后会被立即调用，首次渲染不会执行此方法。
    当组件更新后，可以在此处对DOM进行操作，如果你对更新前后的props进行了比较，
    也可以选择在此处进行网络请求(例如，当props未发生变化时，则不会执行网络请求。
    */ 
    componentDidUpdate(prevProps, prevState) {
      console.log("ComponentDidUpdate", this);
      console.log(this.props);
      console.log(this.state);
      console.log("");
    }
    updateTips() {
      this.setState((state, props) => ({
        tips: "React update"
      }));
    }
    changeDisplayClock() {
      this.setState((state, props) => ({
        showClock: !this.state.showClock
      }));
    }
    render() {
      return (
        <div>
          {this.state.showClock && <Clock tips={this.state.tips} />}
          <button onClick={() => this.updateTips()}>更新tips</button>
          <button onClick={() => this.changeDisplayClock()}>改变显隐</button>
        </div>
      );
    }
  }

  var vm = ReactDOM.render(
    <App />,
    document.getElementById("root")
  );
</script>

</html>
```

# React事件绑定

```
React 元素的事件处理和 DOM 元素类似。但是有一点语法上的不同:
React 事件绑定属性的命名采用驼峰式写法，而不是小写。
如果采用 JSX 的语法你需要传入一个函数作为事件处理函数，而不是一个字符串(DOM 元素的写法)
还有一个核心点就是，React事件中的回调函数里面的this是undefined，因为在React中的this是指向组件本身
所以如果想要将回调函数可以绑定事件的话，需要我们自己手动利用bind方法进行指向
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div id="app"></div>
</body>
</html>
<script src="https://cdn.staticfile.org/react/16.4.0/umd/react.development.js"></script>
<script src="https://cdn.staticfile.org/react-dom/16.4.0/umd/react-dom.development.js"></script>
<script src="https://cdn.staticfile.org/babel-standalone/6.26.0/babel.min.js"></script>
<script type="text/babel">
class MyComponent extends React.Component{
    constructor(props){
        super(props)

        //让回调函数指向全局的this属性
        this.handleClick = this.handleClick.bind(this)
    }

    //类中方法的写法
    handleClick(data, e){

        console.log('触发事件')

        // 传过来的参数值
        console.log(data)

        // 事件的对象
        console.log(e)
    }

    handleClick3(data,e){
        console.log(data)
        console.log(e)
    }

    render(){
        return (
            <div>
                <p><button onClick={this.handleClick.bind(this, '你好，今天星期四')}>第一种绑定事件</button></p>
                <p><button onClick={(e) => this.handleClick3('你好', e)}>第二种写法绑定事件</button></p>
            </div>
        )
    }

}
ReactDOM.render(
    <MyComponent />, document.getElementById('app')
)
</script>
```

# React 组件

- 组件是元素复用的思想，也是组件化框架的最主要的特征。我们现在要把网页的菜单栏看出一个组件，然后独立的抽象出来，这样做之后，任何需要菜单的页面只要导入该组件，就可以实现代码复用，让维护和扩展都变得简单。

#### 组件有两个核心概念：

## props

> props 就是组件的属性，由外部通过 JSX 属性传入设置，一旦初始设置完成，就可以认为 this.props 是不可更改的，所有 React 组件都必须像纯函数一样保护它们的 props 不被更改。
>
> ## state
>
> state 是组件的当前状态，可以把组件简单看成一个“状态机”，根据状态 state 呈现不同的 UI 展示。 一旦状态（数据）更改，组件就会自动调用 render 重新渲染 UI，这个更改的动作会通过 this.setState 方法来触发。setState是React事件处理函数中和请求回调函数中触发UI更新的主要方法。





## 复合组件

- 创建多个组件来合成一个组件，即把组件的不同功能点进行分离

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8" />
<title>React 实例</title>
<script src="https://cdn.staticfile.org/react/16.4.0/umd/react.development.js"></script>
<script src="https://cdn.staticfile.org/react-dom/16.4.0/umd/react-dom.development.js"></script>
<script src="https://cdn.staticfile.org/babel-standalone/6.26.0/babel.min.js"></script>
</head>
<body>

<div id="example"></div>
<script type="text/babel">
function Name(props) {
    return <h1>网站名称：{props.name}</h1>;
}
function Url(props) {
    return <h1>网站地址：{props.url}</h1>;
}
function Nickname(props) {
    return <h1>网站小名：{props.nickname}</h1>;
}
function App() {
    return (
    <div>
        <Name name="百度一下" />
        <Url url="http://www.baidu.com" />
        <Nickname nickname="百度" />
    </div>
    );
}

ReactDOM.render(
     <App />,
    document.getElementById('example')
);
</script>

</body>
</html>
```



## React -- 组件间通信

```html
分为三种类型的通信关系： 
1、父组件向子组件通信 
2、子组件向父组件通信 
3、没有嵌套关系的组件之间的通信

父组件向子组件通信
父组件通过子组件的props向子组件传递需要的信息。

子组件向父组件通信
两种方法： 
1、利用回调函数 
2、利用自定义事件机制
```



ListItem.js：

```javascript
import React, { Component } from 'react';

class ListItem extends Component{
    static defaultProps = {
        text: '',
        checked: false,
    }
    render() {
        return(
            <li>
                <input type="checkbox" checked={this.props.checked} onChange={this.props.onChange}/>
                <span>{this.props.value}</span>
            </li>
        )
    }

}

export default ListItem
```

List.js：

```javascript
import React, { Component } from 'react';
import ListItem from './ListItem';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                {
                    text: '苹果',
                    checked: false
                },
                {
                    text: '草莓',
                    checked: false
                }
            ]
        }
    }

    onItemChange(val) {
        const {list} = this.state
        this.setState({
            list: list.map((item) =>({
                text: item.text,
                checked: item.text == val.text ? !item.checked: item.checked
            }))
        })

    }

    render() {
        return (
            <div>
                {
                    this.state.list.map((item, index) =>{
                        return (
                            <ListItem
                                key={index}
                                checked={item.checked}
                                value={item.text}
                                onChange={this.onItemChange.bind(this, item)}
                            />
                        )
                    })
                }
            </div>
        )
    }
}

export default List;
```

App.js：

```javascript
import React, { Component } from 'react';
import List from './List'

class APP extends Component {

  render() {
    return (
        <List />
    )
  }
}
export default APP;
```

### 跨级组件通信 context来实现跨级通信。

> Context 提供了一个无需为每层组件手动添加 props，就能在组件树间进行数据传递的方法。一种在组件之间共享此类值的方式，而不必显式地通过组件树的逐层传递.

List.js:

```javascript
import React from 'react';
import ListItem from './ListItem';
import MyContext from './context';

class List extends React.Component {
     constructor(props) {
        super(props)
        this.state = {
            msg: ''
        }
    }

    fromGranson(val){
        this.setState({msg: val})
    }

    // 使用一个 Provider 来将当前的 value 传递给以下的组件树。
    // 无论多深，任何组件都能读取这个值。
    render(){
        return (
            <div style={{backgroundColor:'#f7ba2a',padding:'20px',width:'500px',margin:'auto',textAlign:'center'}}>
                <p>context通信实例第一层</p>
                <span style={{color: 'red',fontSize:'30px'}}>{this.state.msg}</span>
                <MyContext.Provider value={{text: '今天星期五',toParent: this.fromGranson.bind(this)}}>
                    <Son1/>
                </MyContext.Provider>
            </div>
        )
    }
}

// 导出组件
export default List;
```

ListItem.js:

```javascript
import React from 'react';
import Grandson from './Grandson';

class ListItem extends React.Component {
  render(){
    return (
      <div>
        <Grandson></Grandson>
      </div>
    )
  }
}
// 导出组件
export default ListItem;
```

Grandson.js:

```javascript
import React from 'react';
import MyContext from './context';

class Grandson extends React.Component {
    // 指定 contextType 读取当前的 MyContext
    /*
        挂载在 class 上的 contextType 属性可以赋值为由 React.createContext() 创建的 Context 对象。
        此属性可以让你使用 this.context 来获取最近 Context 上的值。
        你可以在任何生命周期中访问到它，包括 render 函数中。
    */
    static contextType = MyContext
    constructor(props) {
        super(props)
    }

    toParent()
    {
        this.context.toParent('孙组件向爷爷组件传数据')
    }

    render() {
        return(
            <div style={{backgroundColor:'#13ce66',padding:'10px',width:'200px',margin:'auto',marginTop:'20px'}}>
                <p>通过context传过来：</p>
                <span style={{color:'blue'}}>{this.context.text}第四层</span>
                <button onClick={() => this.toParent()}>context向上</button>
            </div>

        )
    }
}

export default Grandson
```

context.js：

```javascript
import React from "react";
const MyContext = React.createContext({text:'我是一个文本'});
export default MyContext
```

App.js：

```javascript
import React, { Component } from 'react';
import List from './List'

class APP extends Component {
  render() {
    return (
        <List />
    )
  }
}
export default APP;
```

### 没有嵌套关系的组件通讯

events.js:

```javascript
// events.js（以常用的发布/订阅模式举例,借用Node.js Events模块的浏览器版实现）
import { EventEmitter } from 'events';
export default new EventEmitter();
```

OneList.js:

```javascript
import React, { Component } from 'react';
import emitter from './events';

class OneList extends Component {
 constructor(props) {
  super(props);
  this.state = {
   message: 'oneList',
  };
 }
 componentDidMount() {
  // 组件装载完成以后声明一个自定义事件，也就是订阅事件
  this.eventEmitter = emitter.addListener('changeMessage', (message) => {
   this.setState({
    message,
   });
  });
 }
 componentWillUnmount() {
  //  取消订阅，就是销毁事件
  emitter.removeAllListeners(this.eventEmitter);
 }
 render() {
  return (
   <div>
    {this.state.message}
   </div>
  );
 }
}
export default OneList;
```

TwoList.js:

```javascript
import React, { Component } from 'react';
import emitter from './events';

class TwoList extends Component {
 handleClick = (message) => {
  //  发布事件，也就是触发事件
  emitter.emit('changeMessage', message);
 };
 render() {
  return (
   <div>
    <button onClick={this.handleClick.bind(this, 'TwoList')}>点击我改变OneList组件中显示信息</button>
   </div>
  );
 }
}
export default TwoList;
```

App.js：

```javascript
import React, { Component } from 'react';
import OneList from './OneList'
import TwoList from './TwoList'

class APP extends Component {

  render() {
    return (
      <OneList/>
      <TwoList/>
    )
  }
}
export default APP;
```

# React表单

#### 受控组件

- 标签 input、textarea、select的值的改变通常是根据用户输入进行更新。在React中，可变状态通常保存在组件的状态属性中，并且只能使用 setState() 更新，而呈现表单的React组件也控制着在后续用户输入时该表单中发生的情况，以这种由React控制的输入表单元素而改变其值的方式，称为：“受控组件”。

#### 不受控组件

- 在受控组件中，表单数据由 React 组件负责处理。另外一个选择是不受控组件，其表单数据由 DOM 元素本身处理。。

#### 处理多个输入元素

- 当您需要处理多个受控的 input 元素时，您可以为每个元素添加一个 name 属性，并且让处理函数根据 event.target.name 的值来选择要做什么。



```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .item{
            margin:10px;
        }
    </style>
</head>

<body>
    <div id="root"></div>
</body>

</html>
<script src="https://unpkg.com/react@17/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
<script type="text/babel">
class NameForm extends React.Component {
     constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            selections: 'strawberry',
            sex: '0',
            hobby: [
                {
                    'title': "睡觉",
                    'checked': false,
                },
                {
                    'title': "吃饭",
                    'checked': false
                },
                {
                    'title': "敲代码",
                    'checked': false
                }
            ],
            avatar:null,
            avatarCDN:'',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        //  使用 ref 来从 DOM 节点中获取表单数据。
        // this.files = React.createRef()

    }

    // 批量修改受控组件的值
    handleChange(event) {
        const target = event.target
        const name = target.name
        // setState() 自动将部分状态合并到当前状态
        this.setState({
            [name]: target.value
        })
    }

    changeHobby(key) {
        var hobby = this.state.hobby
        hobby[key].checked = !hobby[key].checked
        this.setState({
            hobby:hobby
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state)
        // 获取上传文件的内容
        // console.log(this.files.current.files)

    }

    avatar = (e) => 
    {
        var avatar = e.target.files[0]

        var avatarCDN = URL.createObjectURL(avatar)

        this.setState({
            avatar:avatar,
            avatarCDN:avatarCDN
        })
    }

    render() {
        let preview = ''

        if(this.state.avatarCDN)
        {
            preview = <img src={this.state.avatarCDN} />
        }
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div style={{ margin: '10px' }}>
                        <label>
                            名字：
                            <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                        </label>
                    </div>
                    <div style={{ margin: '10px' }}>
                        <label>
                            密码：
                            <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                        </label>
                    </div>
                    <div style={{ margin: '10px' }}>
                        <label>
                            选择你喜欢的水果：
                            <select name="selections" value={this.state.selections} onChange={this.handleChange}>
                                <option value="grapefruit">葡萄柚</option>
                                <option value="lime">橙子</option>
                                <option value="strawberry">草莓</option>
                                <option value="banana">香蕉</option>
                                <option value="mango">芒果</option>
                            </select>
                        </label>
                    </div>
                    <div style={{ margin: '10px' }}>
                        <label>
                            文件：
                            {/* <input type="file" ref={this.files} multiple="multiple" /> */}

                            <input type="file" name="avatar" onChange={this.avatar} /><br />

                            {preview}<br />

                        </label>
                    </div>
                    <div style={{ margin: '10px' }}>
                        <label>
                            性别:
                            <input type="radio" name="sex" value="0" checked={this.state.sex == '0'} onChange={this.handleChange} /> 保密
                            <input type="radio" name="sex" value="1" checked={this.state.sex == '1'} onChange={this.handleChange} /> 男
                            <input type="radio" name="sex" value="2" checked={this.state.sex == '2'} onChange={this.handleChange} /> 女
                        </label>
                    </div>
                    <div style={{ margin: '10px' }}>
                        <label>
                            爱好:
                            {
                                this.state.hobby.map((item, index) => {
                                    return (
                                        <span key={index}>
                                            <input type="checkbox" checked={item.checked} onChange={this.changeHobby.bind(this, index)} />
                                            {item.title}
                                        </span>
                                    )
                                })
                            }
                        </label>
                    </div>
                    <div style={{ margin: '10px' }}>
                        <input type="submit" value="提交" />
                    </div>
                </form>
            </div>
        )
    }
}


var vm = ReactDOM.render(
    <NameForm />,
    document.getElementById("root")
  );
</script>
```

# React Hook

> Hook 是 React 16.8 的新增特性。它可以让你在不编写 class 的情况下使用 state 以及其他的 React 特性。

### useState 和 useEffect

```javascript
useState 会返回一对值：当前状态和一个让你更新它的函数，你可以在事件处理函数中或其他一些地方调用这个函数。
它类似 class 组件的 this.setState，但是它不会把新的 state 和旧的 state 进行合并。

将 useEffect 放在组件内部让我们可以在 effect 中直接访问 count state 变量（或其他 props）。
我们不需要特殊的 API 来读取它 —— 它已经保存在函数作用域中。

案例：

import React, { useState, useEffect } from 'react';

function Hooks () {
    const [ count, setCount ] = useState(0)
    const [ width, setWidth ] = useState(document.body.clientWidth)

    const onChange = () => {
        setWidth(document.body.clientWidth)
    }

    useEffect(() => {
        //相当于 componentDidMount
        window.addEventListener('resize', onChange, false)
        return () => {
            //相当于componentWillUnmount
            window.removeEventListener('resize', onChange, false)
        }
    }, [])

    useEffect(() => {
        //相当于componentDidUpdate
        document.title = count;
    })

    useEffect(() => {
        console.log(`count change: count is ${count}`)
    }, [ count ])

    return (
        <div>
            页面名称: { count }
            页面宽度: { width }
            <button onClick={() => { setCount(count + 1)}}>点我</button>
        </div>
    )
}
// 导出组件
export default Hooks;
```



### useContext

```javascript
接收一个 context 对象（React.createContext 的返回值）并返回该 context 的当前值。
当前的 context 值由上层组件中距离当前组件最近的 <MyContext.Provider> 的 value prop 决定。


import React, { useContext } from 'react';

const themes = {
    light: {
      foreground: "#000000",
      background: "#eeeeee",
    },
    dark: {
      foreground: "#ffffff",
      background: "#222222",
      fontSize: "24px"
    }
  };

  const ThemeContext = React.createContext(themes.light);

  function Hook3() {
    return (
      <ThemeContext.Provider value={themes.dark}>
        <Toolbar />
      </ThemeContext.Provider>
    );
  }

  function Toolbar(props) {
    return (
      <div>
        <ThemedButton />
      </div>
    );
  }

  function ThemedButton() {
    const theme = useContext(ThemeContext);
    return (
      <button style={{background: theme.background, color: theme.foreground, fontSize: theme.fontSize }}>
        I am styled by theme context!
      </button>
    );
  }

// 导出组件
export default Hook3;
```



### useReducer

```javascript
/*
useReducer的作用类似redux中的功能，相较于useState，useReducer适合一些逻辑较复杂且包含多个子值的情况。
reducer接受两个参数，第一个参数是一个reducer，第二个参数是初始 state，返回值为最新的state和dispatch函数。

按照官方的说法，useReducer适合用于复杂的state操作逻辑，嵌套的state的对象的场景。
*/
import React, { useReducer } from 'react';

function Hook3 () {
    const initialState={count:0}
    const [count,dispatch] = useReducer((state,avtion) => {
        switch(avtion.type) {
            case 'add':
                return state+1;
            case 'minus':
                return state-1
            default:
                return state
        }
    },0)
    return (
        <div>
            <div>{count}</div>
            <button onClick={() => {dispatch({type: 'add'})}}>useReducer加</button>
            <button onClick={() => {dispatch({type: 'minus'})}}>useReducer减</button>
        </div>
    )
}
export default Hook3;
```



### useCallback

```javascript
/*
useCallback，它将返回该回调函数的 memoized 版本，该回调函数仅在某个依赖项改变时才会更新.
 是来优化子组件的，防止子组件的重复渲染
*/

import React, { useState, useCallback, useEffect } from 'react';

function Parent() {
    const [count, setCount] = useState(1);
    const [val, setVal] = useState('');

    const callback = useCallback(() => {
        return count;
    }, [count]);

    return <div>
        <h4>父组件：{count}</h4>
        <Child callback={callback}/>
        <button onClick={() => setCount(count + 1)}>点我+1</button>
    </div>;
}


function Child({ callback }) {
    const [count, setCount] = useState(() => callback());
    useEffect(() => {
        setCount(callback());
    }, [callback]);
    return <div>
        子组件：{count}
    </div>
}

export default Parent;
```



### useMemo

```javascript
/*
useMemo: 由于父组件的state发生改变会导致父组件更新，而子组件虽然没有发生改变但是也会进行更新，
优化当前组件主要是通过 memoize 来将一些复杂的计算逻辑进行缓存，其作用类似于类组件的 PureComponent。
会在渲染的时候执行，而不是渲染之后执行，这一点和 useEffect 有区别，所以 useMemo不建议方法中有副作用相关的逻辑
*/ 

import { useMemo , useState} from 'react';

function Hook3 () {
    const [ count, setCount ] = useState(0)
    const add = useMemo(() => {
      return count + 1
    }, [count])
    return (
      <div>
        点击次数: { count }
        <br/>
        次数加一: { add }
        <button onClick={() => { setCount(count + 1)}}>点我</button>
      </div>
      )
  }

export default Hook3;
```



### useRef

```javascript
/*
useRef 返回一个可变的 ref 对象，其 .current 属性被初始化为传入的参数（initialValue）。
返回的 ref 对象在组件的整个生命周期内持续存在。
*/

import React, { useState, useRef } from 'react'

function Hook3(){
    const [count, setCount] = useState(0)
    const counterEl = useRef(null)

    const increment = () => {
        setCount(count + 1)
        console.log(counterEl)
    }

    return (
        <>
            Count: <span ref={counterEl}>{count}</span>
            <button onClick={increment}>Hook3点我+</button>
        </>
    )
}

export default Hook3;
```

# React Refs

> React 支持一种非常特殊的属性 Ref ，你可以用来绑定到 render() 输出的任何组件上。

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div id="app"></div>
</body>
</html>
<script src="https://cdn.staticfile.org/react/16.4.0/umd/react.development.js"></script>
<script src="https://cdn.staticfile.org/react-dom/16.4.0/umd/react-dom.development.js"></script>
<script src="https://cdn.staticfile.org/babel-standalone/6.26.0/babel.min.js"></script>
<script type="text/babel">
class CustomTextInput extends React.Component {
  constructor(props) {
    super(props);

    this.textInput = null;

    this.setTextInputRef = element => {
      this.textInput = element;
      console.log(element)
    };

    this.focusTextInput = () => {
      // 使用原生 DOM API 使 text 输入框获得焦点
      if (this.textInput) this.textInput.focus();
      console.log(this.textInput.value)
    };
  }

  componentDidMount() {
    // 组件挂载后，让文本框自动获得焦点
    this.focusTextInput();
  }

  render() {
    // 使用 `ref` 的回调函数将 text 输入框 DOM 节点的引用存储到 React
    // 实例上（比如 this.textInput）
    return (
      <div>
        <input
          type="text"
          ref={this.setTextInputRef}
        />
        <input
          type="button"
          value="Focus the text input"
          onClick={this.focusTextInput}
        />
      </div>
    );
  }
}
ReactDOM.render(
    <CustomTextInput />, document.getElementById('app')
)
</script>
```

# React项目搭建

# React-cli

### 安装

> 建议在 React 中使用 CommonJS 模块系统，比如 browserify 或 webpack，本教程使用 webpack。
>
> 国内使用 npm 速度很慢，可以使用淘宝定制的 cnpm (gzip 压缩支持) 命令行工具代替默认的 npm:

```html
$ npm install -g cnpm --registry=https://registry.npm.taobao.org
$ npm config set registry https://registry.npm.taobao.org

这样就可以使用 cnpm 命令来安装模块了：

$ cnpm install [name]
1、全局安装
cnpm install create-react-app -g

2、查看版本号：
    create-react-app -V

3、创建项目
create-react-app 项目的名字

npx可以避免全局安装。先会查看npm path 是否安装过。如果安装过，直接使用。如果未安装，它才会帮你安装。
```



------





### 创建项目

```html
1、创建项目

npx create-react-app xxxxx

npm init react-app my-app

yarn create react-app my-app

2、运行项目：

    npm start    

    yarn start

3、打包

    npm run build

    在生产环境中编译代码，并放在build目录中
    能够正确的打包代码，并且优化，压缩，使用hash重命名文件
```



------





### create-react-app 目录结构

```html
EADME.md                说明文件
  node_modules/            依赖包目录
  package.json            依赖包配置
  gitignore  --  git管理代码的时候，有的文件不希望传到git仓库中，可以把文件定义在这。
  public/                    公共资源目录
    index.html            默认首页
    favicon.ico            ico图标
    manifest.json: wepack打包优化相关
  src/                        项目核心目录
    App.css                根组件css样式文件
    App.js                根组件App
    App.test.js            测试文件
    index.css                全局css样式文件
    index.js                全局入口程序文件
    logo.svg                logo图片文件
    serviceWorker.js            离线支持和网络恢复能力
    setupTests.js            index.js测试文件
```



### craco配置

> 使用 create-react-app 创建项目，不想 eject 项目但想对项目中 wepback 进行自定义配置 那么就可以使用craco配置

1、安装

```html
  yarn add @craco/craco -S
```

2、修改命令配置文件 (package.json)

```javascript
  "scripts": {
    "start": "craco start",
    "build": "craco build",
    "test": "craco test",
    "eject": "react-scripts eject"
  }
```

3、项目根目录下创建配置文件 (项目名称/craco.config.js)

```javascript
  /* craco.config.js */
  const path = require('path')

  module.exports = {
    webpack: {
      // 别名
      alias: {
        "@": path.resolve("src"),
      }
    },
    //配置代理解决跨域
    devServer: {
      proxy: {
          "/api": {
              target: "http://www.ask.com/api",  
              changeOrigin: true,
              pathRewrite: {
                  "^/api": ""
              }
          }
      }
    }
  }
```

# react-router 路由

##### 安装

```html
npm

npm install react-router-dom@6 -S

yarn

yarn add react-router-dom@6 -S
```

##### 设置

```javascript
要让 React Router 在您的应用程序中工作，您需要在元素树的根部或附近渲染一个路由器元素。
根据您的应用程序运行的位置，我们提供了几种不同的路由器。

<BrowserRouter>或者<HashRouter>应该在 Web 浏览器中运行时使用（您选择哪一个取决于您喜欢或需要的 URL 样式）
<NativeRouter>应该在React Native应用程序中使用。
```

#### API 参考

- BrowserRouter

```javascript
<BrowserRouter>使用干净的 URL 将当前位置存储在浏览器的地址栏中，并使用浏览器的内置历史堆栈进行导航。

import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    {/* The rest of your app goes here */}
  </BrowserRouter>,
  root
);
```

- NavLink

```javascript
<NavLink>是一种特殊的类型，<Link>它知道它是否“活跃”。这在构建导航菜单（如面包屑或一组选项卡）时很有用，
以根据<NavLink>组件的活动状态自定义组件的内容，这对于更改内部元素的样式特别有用。

<NavLink to="/" >
  Home
</NavLink>
```

- Navigate

```javascript
<Navigate>元件改变时，它呈现的当前位置。它是一个围绕 的组件包装器useNavigate，并接受与 props 相同的所有参数。

replace: 重定向

<Navigate to="/dashboard" replace={true} />
```

- Outlet

```javascript
<Outlet>应该在父路由元素中使用An来呈现其子路由元素。这允许在渲染子路由时显示嵌套 UI。
如果父路由完全匹配，它将渲染子索引路由，如果没有索引路由，则不渲染。

<Outlet />
```

- useLocation

```javascript
这个钩子返回当前location对象。如果您想在当前位置更改时执行一些副作用，这可能很有用。

import * as React from 'react';
import { useLocation } from 'react-router-dom';

function App() {
  let location = useLocation();

  React.useEffect(() => {
    ga('send', 'pageview');
  }, [location]);

  return (
    // ...
  );
}
```

- useSearchParams

```javascript
该useSearchParams钩子用于读取和修改当前位置的 URL 中的查询字符串。
useSearchParams返回一个包含两个值的数组：当前位置的搜索参数和一个可用于更新它们的函数。

import * as React from "react";
import { useSearchParams } from "react-router-dom";

function App() {
  let [searchParams, setSearchParams] = useSearchParams();

  function handleSubmit(event) {
    event.preventDefault();
    let params = serializeFormQuery(event.target);
    setSearchParams(params);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>{/* ... */}</form>
    </div>
  );
}
```

- useParams

```javascript
该useParams钩子从当前 URL 返回一个由<Route path>. 子路由继承父路由的所有参数。

import * as React from 'react';
import { Routes, Route, useParams } from 'react-router-dom';

function ProfilePage() {
  // 从URL获取用户ID参数。
  let { userId } = useParams();
  // ...
}

function App() {
  return (
    <Routes>
      <Route path="users">
        <Route path=":userId" element={<ProfilePage />} />
        <Route path="me" element={...} />
      </Route>
    </Routes>
  );
}
```

- useNavigate

```javascript
该useNavigate钩子返回的功能，可以让一个表单提交后您导航程序。

import { useNavigate } from "react-router-dom";

function SignupForm() {
  let navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    await submitForm(event.target);
    navigate("../success", { replace: true });
  }

  return <form onSubmit={handleSubmit}>{/* ... */}</form>;
}
```

#### 入口文件

```javascript
App.js

import './App.css';
import {BrowserRouter, useLocation  } from 'react-router-dom'
import RouterList from './routers/index';
import React from 'react'
import Tab from './components/common/tabbar'

function Breadcrumb() {
  // 获取路由地址
  const location = useLocation();
  var showTabs = true
  if(location.pathname == '/' || location.pathname == '/user/base/index' || location.pathname == '/contact/contact/index'){
    showTabs = true;
  } else{
    showTabs = false;
  }
  return (<div>{showTabs ?  <Tab /> : ''}</div>);
}

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <RouterList/>
        <Breadcrumb/>
      </BrowserRouter>
    );
  }

}

export default App;
```

#### 路由总入口文件

```javascript
src/routers/index.js


import React from 'react'
import {Routes, Route, Outlet} from 'react-router-dom'
import AuthRouter from './auth'
import Home from '@/components/home.js'

// 引入每个目录下面的index.js文件
const ModulesFile = require.context('./',true,/index.js$/)

// 总路由集合
const RouterMap = []

//对引入的文件进行循环
ModulesFile.keys().reduce((modules, modulePath) => {

  // 路由模块名称   文件夹/index  user/index
  const ModuleName = modulePath.replace(/^.\/(.*)\.js/,'$1')

  //不包含当前index.js 文件
  if(ModuleName !== 'index')
  {
    //路由列表
    const ModuleList = ModulesFile(modulePath)

    //追加到数组
    RouterMap.push(...ModuleList.default)
  }

  return RouterMap
}, {})


class RouterList extends React.Component{
  constructor(props)
  {
    super(props)

    this.state = {}
  }

  render()
  {
    return (
      <>
        <Routes>
          {/* 默认首页 */}
          <Route path="/" element={<Home />}></Route>

          <Route path="/" element={<><Outlet /></>}>
            {
              RouterMap.map((item, index) => {
                return (
                  <Route key={index} path={item.path} element={<AuthRouter auth={item.auth} component={<item.component />}></AuthRouter>}>
                    {item.children &&
                      item.children.map((son, idx) => <Route key={idx} path={son.path} element={<AuthRouter auth={son.auth} component={<son.component />}></AuthRouter>}></Route>)
                    }
                  </Route>
                )
              })
            }
          </Route>
        </Routes>
      </>
    )
  }
}

export default RouterList
```

#### 每个独立路由模块下面的入口文件index.js

```javascript
src/routers/user/index.js


import { Outlet } from 'react-router-dom'

// 引入当前目录下面的所有文件
const ModulesFile = require.context('./',true,/.js$/)

const RouterMap = []

ModulesFile.keys().reduce((modules, modulePath) => {
  // 路由模块名称
  const ModuleName = modulePath.replace(/^.\/(.*)\.js/,'$1')

  //不包含当前index.js 文件
  if(ModuleName !== 'index')
  {
    //路由列表(数组)
    const ModuleList = ModulesFile(modulePath)

    //追加到数组
    RouterMap.push(...ModuleList.default)
  }

  return RouterMap
},{})

//默认父组件 可以自己定义
const layout = () => {
  return (
    <>
      <Outlet />
    </>
  )
}

const RouterList = [
  {
    path: '/user',
    component: layout,
    children: RouterMap,
  }
]

export default RouterList
```



#### 独立模块的路由文件

```javascript
src/routers/user/base.js

import profile from "@/components/user/profile"
import index from "@/components/user/index"
import login from "@/components/user/login"

const base = [
    {
        path: "base/index",
        name: 'baseindex',
        component: index,
        auth: true
    },
    {
        path: "base/profile",
        name: 'profile',
        component: profile,
        auth: true
    },
    {
        path: "base/login",
        name: 'login',
        component: login,
    },
]
export default base
```

# 路由守卫

#### 需要先安装react-cookie

```html
yarn add react-cookies -S
```

#### 定义路由验证文件

```javascript
// src/routers/auth.js 

import React from 'react'
import {useNavigate} from 'react-router-dom'
import cookie from 'react-cookies'

class AuthRouter extends React.Component{
  constructor(props)
  {
    super(props)

    this.state = {}
  }

  render()
  {
    const AuthLogin = () =>
    {
      let navigate = useNavigate()
      React.useEffect(() => {
        var LoginUser = cookie.load('LoginUser') ? cookie.load('LoginUser') : {}
        if(JSON.stringify(LoginUser) === "{}")
        {
          navigate('/user/base/login')
        }
      })

      return false
    }

    return (
      <> 
        {
          this.props.auth && <AuthLogin />
        }
        {this.props.component}
      </>
    )
  }
}

export default AuthRouter
```



#### 路由入口封装文件中的使用方式

```javascript
// src/routers/index.js

import React from 'react'
import {Routes, Route, Outlet} from 'react-router-dom'
import AuthRouter from './auth'
import Home from '@/components/home.js'

// 引入每个目录下面的index.js文件
const ModulesFile = require.context('./',true,/index.js$/)

// 总路由集合
const RouterMap = []

//对引入的文件进行循环
ModulesFile.keys().reduce((modules, modulePath) => {

  // 路由模块名称   文件夹/index  user/index
  const ModuleName = modulePath.replace(/^.\/(.*)\.js/,'$1')

  //不包含当前index.js 文件
  if(ModuleName !== 'index')
  {
    //路由列表
    const ModuleList = ModulesFile(modulePath)

    //追加到数组
    RouterMap.push(...ModuleList.default)
  }

  return RouterMap
}, {})


class RouterList extends React.Component{
  constructor(props)
  {
    super(props)

    this.state = {}
  }

  render()
  {
    return (
      <>
        <Routes>
          {/* 默认首页 */}
          <Route path="/" element={<Home />}></Route>

          <Route path="/" element={<><Outlet /></>}>
            {
              RouterMap.map((item, index) => {
                return (
                  <Route key={index} path={item.path} element={<AuthRouter auth={item.auth} component={<item.component />}></AuthRouter>}>
                    {item.children &&
                      item.children.map((son, idx) => <Route key={idx} path={son.path} element={<AuthRouter auth={son.auth} component={<son.component />}></AuthRouter>}></Route>)
                    }
                  </Route>
                )
              })
            }
          </Route>
        </Routes>
      </>
    )
  }
}

export default RouterList
```



#### 路由的结构

```javascript
/**
 * 用户基本资料路由 - 子路由
 */
const base = [
  {
    path: "base/profile",
    name: 'profile',
    component: profile,
    auth: true  //判断是否要登陆权限
  },
  {
    path: "base/login",
    name: 'login',
    component: login,
  }
]

export default base
```

# React-vant

## 版本

https://react-vant-gitee.3lang.dev/ -- react-vant

## 安装

> 使用 npm 或 yarn 安装#

```html
# 通过 npm 安装
npm i react-vant

# 通过 yarn 安装
yarn add react-vant
```



## 使用

```javascript
import React from 'react'
import { useNavigate, useLocation} from 'react-router-dom'
import React from 'react'
import { Tabbar } from 'react-vant'
import { FriendsO, HomeO, LikeO  } from '@react-vant/icons'

const Tab = () =>{
    const tabs = [
        {
          name: '/',
          title: '首页',
          icon: <HomeO />,
        },
        {
          name: '/user/base/contact',
          title: '新建',
          icon: <LikeO />,
        },
        {
          name: '/user/base/index',
          title: '我的',
          icon: <FriendsO />,
        },
    ]
    const navigate = useNavigate()

    const location = useLocation()

    const [tabName,settabName]  = React.useState('/')

    React.useEffect(() => {
        settabName(location.pathname)
    })

    // 切换标签时触发事件
    const onChangeTab = (val) => {
        settabName(val)
        navigate(val)
    }

        return (
            <div className="tabbar">
                <TabBar value={tabName} onChange={onChangeTab}  className="item">
                    {tabs.map(item => (
                        <TabBar.Item name={item.name} icon={item.icon}>{item.title}</Tabbar.Item>
                    ))}
                </TabBar>
            </div>
        )

}

export default Tab
```



## 组件更改样式

```javascript
// React 脚手架里面已经配置了 Sass，只需要安装 Sass即可；

npm install sass-loader node-sass --save-dev

// 页面使用
import React from 'react'
import styles from './contactadd.scss'

 return (
    <div className="contacttype">
        <TabBar value={tabName} onChange={onChangeTab}  className="item">
            {tabs.map(item => (
                <TabBar.Item name={item.name} icon={item.icon}>{item.title}</Tabbar.Item>
            ))}
        </TabBar>
    </div>
)


contactadd.scss

// 自定义样式名
.contacttype{
    // 组件样式名
    .rv-tabbar-item--active{
       color:red;
    }
}
```

# Axios

## 安装

```html
yarn add axios -S
```

## 请求服务封装

```javascript
// src/services/request.js

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
      console.log(err.message)
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

  if(JSON.stringify(data.params) !== "{}")
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



## 总入口文件

```javascript
// src/api/index.js

// 引入每个目录下面的index.js文件
const ModulesFile = require.context('./',true,/index.js$/)

//接口集合
var ApiList = {}

ModulesFile.keys().reduce((modules, modulePath) => {
  //文件名
  const ModuleName = modulePath.replace(/^.\/(.*)\.js/,'$1')

  //不包含当前index.js 文件
  if(ModuleName !== 'index')
  {
    //请求列表
    const ModuleList = ModulesFile(modulePath)

    //合并对象 循环多次合并
    ApiList = Object.assign(ApiList,ModuleList.default)
  }

  return ApiList
}, {})

//导出接口集合
export default ApiList
```

## 文件的PAI

```javascript
// src/api/user/base.js
//引入封装的请求服务
import { POST, UPLOAD } from '@/services/request.js'

//导出接口
const base = {
  register(data = {})
  {
    return POST({
      url: '/user/base/register',
      params: data
    })
  },
  login(data = {})
  {
    return POST({
      url: '/user/base/login',
      params: data
    })
  }
}

export default base
```

## 定义全局API变量

```javascript
//加载接口
import api from './api/index.js'

//设置为全局变量
React.$api = api
```

## 在业务中使用

```javascript
  //组装数据
  var data = {
    email: '123123@qq.com',
    password: 123123
  }
  const logins = async() => {
    var result = await React.$api.login(data)
  }
```

## 视频文档 

视频地址：https://www.bilibili.com/video/BV1wy4y1D7JT 

[学习笔记 React.js](https://blog.csdn.net/weixin_45305844/article/details/125796010?ops_request_misc=%7B%22request%5Fid%22%3A%22170394072316800227494621%22%2C%22scm%22%3A%2220140713.130102334..%22%7D&request_id=170394072316800227494621&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~top_positive~default-1-125796010-null-null.142%5Ev99%5Epc_search_result_base6&utm_term=React.js&spm=1018.2226.3001.4187)

