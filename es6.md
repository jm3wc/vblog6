# 变量let与const

### let

> let 声明的变量，具有如下几个特点：

- let 声明的变量具有块作用域的特征。
- 在同一个块级作用域，不能重复声明变量。
- let 声明的变量不存在变量提升。

```
let a = 1
console.log(a);//1
console.log(b);//Uncaught ReferenceError: b is not defined
let b = 2;
function foo(){
    let a = 1;
    let a = 2;//Uncaught SyntaxError: Identifier 'a' has already been declared
}
```

 

### const

> const 声明一个只读变量，声明之后不允许改变

```
const a = 1;
console.log(a); //1
a = 2; //Uncaught TypeError: Assignment to constant variable.
```

 

> const 声明创建一个值的只读引用。但这并不意味着它所持有的值是不可变的，只是变量标识符不能重新分配。

```
const obj = {a:1,b:2};
console.log(obj.a);//1
obj.a = 3;
console.log(obj.a);//3
```

 

> 关于 var 和 let 区别的一个例子

```
for (var i = 0; i < 10; i++) {
    setTimeout(function(){
        console.log(i);
    },100)
};
// 该代码运行后，会在控制台打印出10个10

for (let i = 0; i < 10; i++) {
    setTimeout(function(){
        console.log(i);
    },100)
};
// 则该代码运行后，就会在控制台打印出0-9

总结:
  var 声明的变量属于函数作用域，let 和 const 声明的变量属于块级作用域；

  var 存在变量提升现象，而 let 和 const 没有此类现象；

  var 变量可以重复声明，而在同一个块级作用域，let 变量不能重新声明，const 变量不能修改。
```

 

### Symbol

- symbol 是一种基本数据类型
- 每个从Symbol()返回的symbol值都是唯一的。一个symbol值能作为对象属性的标识符；
- Symbol()函数会返回symbol类型的值，该类型具有静态属性和静态方法。

```
let sy = Symbol("KK");
console.log(sy);             // Symbol(KK)
console.log(typeof(sy));     // "symbol"

// 相同参数 Symbol() 返回的值不相等
let sy1 = Symbol("kk"); 
console.log(sy === sy1);       // false
```

- Symbol 值作为属性名

```
  let sy = Symbol("key1");

// 写法1
let syObject = {};
syObject[sy] = "kk";
console.log(syObject);    // {Symbol(key1): "kk"}

// 写法2
let syObject = {
  [sy]: "kk"
};
console.log(syObject);    // {Symbol(key1): "kk"}

// 写法3
let syObject = {};
Object.defineProperty(syObject, sy, {value: "kk"});
console.log(syObject);   // {Symbol(key1): "kk"}
```

- Symbol 作为对象属性名时不能用.运算符，要用方括号

```
let sy = Symbol();
let syObject = {};
syObject[sy] = "kk";

console.log(syObject[sy]);  // "kk"
console.log(syObject.sy) // undefined
```

 

### Set

> 对象允许你存储任何类型的唯一值，无论是原始值或者是对象引用

- 集合表示无重复值的有序列表；let set = new Set ();创建一个新的集合；
- set.add();
- set.delete()
- 校验某个值是否在set中：set.has()

```
  const set1 = new Set([1, 2, 3, 3, 4, 5, 2]);
  console.log(set1) // Set(5) {1, 2, 3, 4, 5}
  let set2 = [...set1]
  console.log(set2) // (5) [1, 2, 3, 4, 5]

  var mySet = new Set();
  mySet.add(1);
  mySet.add(5).add("some text"); // 可以链式调用

  console.log(mySet);
  // Set [1, 5, "some text"]

  mySet.add(5).add(1);
  console.log(mySet);
  // Set [1, 5, "some text"]  // 重复的值没有被添加进去



  var mySet = new Set();
  mySet.add("foo");

  console.log(mySet.delete("bar")); // 返回 false，不包含 "bar" 这个元素
  console.log(mySet.delete("foo")); // 返回 true，删除成功

  console.log(mySet.has("foo"));    // 返回 false，"foo" 已经成功删除




  var mySet = new Set();
  mySet.add('foo');
  console.log(mySet.has('foo'));  // 返回 true
  console.log(mySet.has('bar'));// 返回 false

  var set1 = new Set();
  var obj1 = {'key1': 1};
  set1.add(obj1);

  console.log(set1.has(obj1));      // 返回 true
  console.log(set1.has({'key1': 1}));  // 会返回 false，因为其是另一个对象的引用
  console.log(set1.add({'key1': 1})); // 现在 set1 中有2条（不同引用的）对象了
```

 

### Map

> Map 对象保存键值对，并且能够记住键的原始插入顺序。任何值(对象或者原始值) 都可以作为一个键或一个值。

- Map 对象。
- Map 与数组的关系。

```
let myMap = new Map();

let keyObj = {};
let keyFunc = function() {};
let keyString = 'a string';

// 添加键
myMap.set(keyString, "和键'a string'关联的值");
myMap.set(keyObj, "和键keyObj关联的值");
myMap.set(keyFunc, "和键keyFunc关联的值");

myMap.size; // 3

// 读取值
myMap.get(keyString);    // "和键'a string'关联的值"
myMap.get(keyObj);       // "和键keyObj关联的值"
myMap.get(keyFunc);      // "和键keyFunc关联的值"

console.log(myMap.get('a string'));  // "和键'a string'关联的值"  
// 因为keyString === 'a string'
console.log(myMap.get({}))          // undefined, 因为keyObj !== {}
console.log(myMap.get(function() {})); // undefined, 因为keyFunc !== function () {}



let kvArray = [["key1", "value1"], ["key2", "value2"]];
// 使用常规的Map构造函数可以将一个二维键值对数组转换成一个Map对象
let myMap = new Map(kvArray);
// 使用Array.from函数可以将一个Map对象转换成一个二维键值对数组
console.log(Array.from(myMap)); // 输出和kvArray相同的数组
// 更简洁的方法来做如上同样的事情，使用展开运算符
console.log([...myMap]);


// Map对象同数组进行合并时，如果有重复的键值，则后面的会覆盖前面的。
let first = new Map([
  [1, 'one'],
  [2, 'two'],
  [3, 'three'],
]);

let second = new Map([
  [1, 'uno'],
  [2, 'dos']
]);

let merged = new Map([...first, ...second, [1, 'eins']]);

console.log(merged); // Map(3) {1 => 'eins', 2 => 'dos', 3 => 'three'}

console.log(merged.get(1)); //eins
console.log(merged.get(2)); // dos
console.log(merged.get(3)); // three
```

## 字符串扩展

- includes()：返回布尔值，判断是否找到参数字符串。

```
let string = "apple,banana,orange";

banana = string.includes("banana");     
console.log(banana)            // true
```

## 数组扩展

- 包含includes()

```
// 参数1：包含的指定值
console.log([1, 2, 3].includes(1));    // true

// 参数2：可选，搜索的起始索引，默认为0
console.log([1, 2, 3].includes(1, 2)); // false

// NaN 的包含判断
console.log([1, NaN, 3].includes(NaN)); // true
```

- 扩展运算符...

```
let arr = [1, 2],
    arr1 = [...arr];
console.log(arr1); // [1, 2]

// 数组含空位
let arr2 = [1, , 3],
    arr3 = [...arr2];
console.log(arr3); [1, undefined, 3]
```

## 模板字符串

```
let demo = 'ES6';
let str = `Hello ${demo}`;
console.log(str);
```

## 函数扩展

- 箭头函数

```
var f = v => v;
//等价于
var f = function(a){
 return a;
}

f(1);  //1
console.log(f(1))
```

- 函数体中的 this 对象

```
function fn(){
  setTimeout(()=>{
    // 定义时，this 绑定的是 fn 中的 this 对象
    console.log(this.a);
  },0)
}
var a = 20;
// fn 的 this 对象为 {a: 19}
fn.call({a: 18});  // 18
```

- 不定参数

```
function f(...values){
    console.log(values.length);
}
f(1,2);      //2
f(1,2,3,4);  //4
```

 

## 对象扩展

- Object.assign(target, source_1, ···)

```
// 基本用法
let target = {a: 1};
let object2 = {b: 2};
let object3 = {c: 3};
Object.assign(target,object2,object3);  
// 第一个参数是目标对象，后面的参数是源对象
console.log(target);  // {a: 1, b: 2, c: 3}

// 合并具有相同属性的对象
const o1 = { a: 1, b: 1, c: 1 };
const o2 = { b: 2, c: 2 };
const o3 = { c: 3 };

const obj = Object.assign({}, o1, o2, o3);
console.log(obj); // { a: 1, b: 2, c: 3 }

//数组的处理
console.log(Object.assign([2,3], [5]));  // [5,3]
```

- Object.is(value1, value2)

```
// 用来比较两个值是否严格相等
console.log(Object.is("q","q"));      // true
console.log(Object.is(1,1));          // true
console.log(Object.is([1],[1]));      // false
console.log(Object.is({q:1},{q:1}));  // false

//与（===）的区别
//一是+0不等于-0
console.log(Object.is(+0,-0));  //false
console.log(+0 === -0)  //true
//二是NaN等于本身
console.log(Object.is(NaN,NaN)); //true
console.log(NaN === NaN)  //false
```

- Object.defineProperty()

```
// 直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回此对象。

function Archiver() {
  var temperature = null;
  var archive = [];

  Object.defineProperty(this, 'temperature', {
    get: function() {
      console.log('get!');
      return temperature;
    },
    set: function(value) {
      temperature = value;
      archive.push({ val: temperature });
    }
  });

  this.getArchive = function() { return archive; };
}

var arc = new Archiver();
arc.temperature; // 'get!'
arc.temperature = 11;
arc.temperature = 13;
console.log(arc.getArchive()) // [{ val: 11 }, { val: 13 }]
```

- Object.keys(), Object.values()

```
// Object.keys(): 返回一个由一个给定对象的自身可枚举属性组成的数组，数组中属性名的排列顺序和正常循环遍历该对象时返回的顺序一致 。
// Object.values(): 返回一个给定对象自身的所有可枚举属性值的数组.

// 简单数组
var arr = ['a', 'b', 'c'];
console.log(Object.keys(arr)); // console: ['0', '1', '2'];
console.log(Object.values(obj)); // ['bar', 42]

// 类数组对象
var obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.keys(obj)); // console: ['0', '1', '2']
console.log(Object.values(obj)); // ['a', 'b', 'c']

// 排序的类数组对象
var anObj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.keys(anObj)); // console: ['2', '7', '100']
console.log(Object.values(an_obj)); // ['b', 'c', 'a']
```

### class类

- class（类声明）
- 重复声明一个类会引起类型错误。
- 类表达式定义一个类后再声明一个类同样会报错
- constructor 创建 和 初始化 class创建对象的特殊方法，一个类中只能有 一个 构造方法constructor

```
class Polygon {
  constructor(height, width) {
    this.name = 'Polygon';
    this.height = height;
    this.width = width;
  }
}
let polygon = new Polygon(171, 20);
console.log(polygon) //Polygon {name: 'Polygon', height: 171, width: 20}

// 重复定义
class Polygon{} //Uncaught SyntaxError: Identifier 'Polygon' has already been declared
```

 

```
// 静态方法
class Example{
    static sum(a, b) {
        console.log(a+b);
    }
}
Example.sum(1, 2); // 3

// 原型方法
class Example {
    sum(a, b) {
        console.log(a + b);
    }
}
let exam = new Example();
exam.sum(1, 2); // 3
```

- super关键字 至多出现 一次
- 必须在使用 this 关键字之前使用
- super关键字 也可以用来调用父对象上的函数。
- extends ，用来创建一个子类继承另一个类

```
  class Person {
        constructor(name) {
            this.name = name;
            this.sex = "男";
        }
    }
    class Student extends Person {
        constructor(name, age) {
            super(name);
            this.age = age;
        }
    }
    let s = new Student("张三", 11);
    console.log(s.name);
    console.log(s.age);
    console.log(s.sex);
```

- getter / setter

```
class Square extends Polygon {
    constructor(length) {        
        // 在这里, 它调用了父类的构造函数, 并将 length 提供给 Polygon 的"width"和"height"    
        super(length, length);
        // 注意: 在派生类中, 必须先调用 super() 才能使用 "this"。
        // 忽略这个，将会导致一个引用错误。
        this.name = '正方形';
    }

    get area () {
        return this.height * this.width;
    }

    set area(value) {
        // 注意：不能使用 this.area = value 为area赋值
        // 否则会导致循环call setter方法导致爆栈
        this._area = value;
    }
}

let category = new Square(100) 
console.log(category) // Square {name: '正方形', height: 100, width: 100}
```

### export 与 import

- 除export default外，导出的函数什么和类声明都必须要有名称
- import命令会提升到整个模块的头部，首先执行。
- 模块导入导出各种类型的变量，如字符串，数值，函数，类。

### export导出

> test.js

```
function f1 ()
{
    console.log("函数1: functino 1")
}

let b = 
{
    name:"test_one"
}

let str = "hell绿绿绿"

export {
    f1,b,str
}
```

> demo.html

```
<script type="module">
    import {f1,b,str} from "./demo.js";
    console.log(f1,b,str)
</script>
```

### export default导出

> test1.js

```
const demo =  {
    name: '张三',
    age: 18,
    devement: '编程'
}
export default demo
```

> demo1.html

```
<script type="module">
    // 不需要加{}， 使用任意变量接收
    import demo from "./test3.js"; 
    console.log(demo)
</script>
```

### as的用法

> test.js

```
function f1 ()
{
    console.log("函数1: functino 1")
}
let b = 
{
    name:"test_one"
}

let str = "hell绿绿绿"

export {
    f1,b,str
}

// 或者 

export {
    f1 as fun1,
    b as b1,
    str as strs
}
```

> demo.html

```
<script type="module">
    import * as test  from "./demo.js";
    import { fun1, b1, strs} from "./test.js";
    console.log(test) 
    console.log(fun1, b1, strs)
</script>
```

### 基本⽤法

```
Promise是⼀个构造函数，⾃⼰身上有all、reject、resolve等⽅法，
原型上有then、catch 等⽅法； new出来的Promise对象就有then、catch⽅法;
Promise传⼊两个参数：resolve，reject，
分别表示异步操作执⾏成功后的回调函数和异步操作执⾏失败后的回调函数;

var p = new Promise(function (resolve, reject) {
    //做⼀些异步操作 
    setTimeout(function () { 
        console.log('执⾏完成');
        resolve('操作resolve');
     }, 2000);
})

p.then(function(successMessage){ 
    //successMessage的值是上⾯调⽤resolve(...)⽅法传⼊的值.
     console.log(" message: " + successMessage); 
})
```

### reject、resolve的⽤法

```
reject的作⽤就是把Promise的状态置为rejected，这样我们在then中就能捕捉到然后执⾏“失败”情况的回调
then⽅法可以接受两个参数，第⼀个对应resolve的回调，第⼆个对应reject的回调。
所以我们能够分别拿到他们传过来的数据。


function testReject() 
{
    var p = new Promise(function (resolve, reject) { 
        //做⼀些异步操作 
        setTimeout(function(){ 
            var num = Math.ceil(Math.random()*10); 
            //⽣成1-10的随机数 
            if(num <= 5){ 
                resolve(num); 
            }else{
                reject('数字超出了范围');
            } 
        }, 2000); 
    }); 
    return p; 
}

testReject().then(
    function(data) { 
        console.log('resolved状态');
        console.log(data); 
    }, 
    function(reason, data) { 
        console.log('rejected状态'); 
        console.log(reason); 
    } 
);
```

### all()

```
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3]).then((values) => {
    console.log(values);
    // (3) [3, 42, 'foo']
});
```

### async/await

```
await 操作符用于等待一个Promise 对象。它只能在异步函数 async function 中使用。

async 函数中可能会有 await 表达式，async 函数执行时，如果遇到 await 就会先暂停执行 ，
等到触发的异步操作完成后，恢复 async 函数的执行并返回解析值。
```

### async

```
async function demo()
{
    var p1 = new Promise(function(resolve,reject){
        resolve('成功')
    })

    //同步执行
    //var res = await p1;
    //console.log(res)

    //异步执行
    p1.then(success => console.log(success))

    console.log('看谁先执行')
}

demo()
```

### await

```
async function demo()
{
    var p1 = new Promise(function(resolve,reject){
        resolve('成功')
    })

    //同步执行
    var res = await p1;
    console.log(res)

    //异步执行
    // p1.then(success => console.log(success))

    console.log('看谁先执行')
}

demo()
```