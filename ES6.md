# ECMAScript6

## let

- let声明的变量不存在预解析,如不存在会报错   (先声明再使用)
- let声明的变量不允许重复 ( 在同一个`作用域`/`模块`中 )
- ES6引入了块级作用域,因此块内部定义的变量,在外部是不可以访问的
    ```javascript
    if (true) {
        let flag = 123;
    }
    console.log(flag);  //报错 ReferenceError: flag is not defined
    ```
    + 通过`for (let i = 0; i < 3; i++) {}`声明

## const

- 用来声明常量
- const声明的常量不允许重新赋值
- const声明的常量必须初始化
```javascript
const a;   //报错  SyntaxError: Missing initializer in const declaration(const声明中缺少初始化)
```
## 变量的解构赋值
- 数组的解构赋值 ( 可以指定默认值 )
 ```JavaScript
    var [a, b, c] = [1, 2, 3];
    console.log(a, b, c)   // 1  2  3

    let [a, b, c] = [1, 2, 3];
    let [a, b, c] = [, 2, ];
    let [a = 1, b, c] = [, 2, ];
 ```
- 对象的解构赋值
```javascript
let {foo, bar} = {foo: 'a', bar: 'b'};
let {foo, bar} = {bar: 'b', foo: 'a'};  //两种写法均可
```
- 对象属性别名 ( 如果有了别名,原来的名字就失效了 )
```javascript
let {foo: ff, bar} = {foo: 'a', bar: 'b'};
console.log(ff, bar)
```
- 字符串的解构赋值
```javascript
let [a, b, c, d, e] = 'hello';
console.log(a,b,c,d,e);   //  h e l l o
```
- 字符串相关扩展
    + includes(参数1, 参数2)  
        > 参数1--需要判断的字符串   参数2--从第几个字符开始
        
        > 判断字符串中是否包含指定字符串,有返回true,无返回false
    + startsWith()

        > 判断字符串是否以特定的字符开始
    + endsWith()

        > 判断字符串是否以特定字符结束
- 模板字符串 (反引号表示模板,模板中的内容可以有格式,通过${}方式填充数据)
```javascript
let obj = {
    name: 'zs',
    age: '18',
    gender: 'male'
}

let tpl = `
    <div>
        <span>${obj.name}</span>
        <span>${obj.age}</span>
        <span>${obj.gender}</span>
    </div>
`;

console.log(tpl); 
    // <div>
    //     <span>zs</span>
    //     <span>18</span>
    //     <span>male</span>
    // </div>
```

## 函数的扩展

- 参数默认值
    ```javascript
    function foo (a = 'hello') {
        console.log(a);
    }
    foo();  // hello
    foo('hh');  // hh
    ```
- 参数的解析赋值
    ```javascript
    function foo ({name = 'zs', age = 18} = {}) {
        console.log(name, age);
    }
    foo(); // zs 18
    foo({name: 'ls', age: 19}); // ls 19
    ```

- rest参数 (剩余参数)
    ```javascript
    function foo (a, b, ...c) {
        console.log(a,b,c);
    }
    
    foo(1,2,3,4,5,6);  // 1 2 [ 3, 4, 5, 6 ]
    ```
    + 扩展运算符
        ```javascript
        function foo (a, b, c, d, e, f, g) {
            console.log(a + b + c + d + e + f + g);
        }
        let arr = [1, 2, 3, 4, 5, 6, 7];
        foo(...arr);  // 28
        ```
    + 合并数组
        ```javascript
        let arr1 = [1, 2, 3];
        let arr2 = [4, 5, 6];
        let arr3 = [...arr1, ...arr2];
        console.log(arr3);  // [ 1, 2, 3, 4, 5, 6 ]
        ```
- 箭头函数
    ```javascript
    //==============无参数
    function foo () {
        console.log('hello');
    }
    foo();   // hello
    
    //箭头函数
    let foo = () => console.log('hello');
    foo();   //hello
    
    //==============一个参数
    function foo (v) {
        return v;
    }
    var res = foo(123);
    console.log(res);   // 123
    // 箭头函数 ----  只有一个参数时,括号可以省略
    
    let foo = v => v;
    let res = foo(123);
    console.log(res);  //123
    
    // =============两个及以上参数
    let foo = (a, b) => a + b;
    let res = foo(2, 5);
    console.log(res);  // 7
    ```
- 箭头函数注意事项
    + 箭头函数中this取决于函数的定义,而不是函数调用(es5以下取决于函数的调用)
    ```javascript
    function foo () {
        setTimeout(() => {
            console.log(this.num);   // 1 
        }, 100);
    }
    
    foo.call({num: 1});
    
    //================================================
    var num = 5;
    
    function foo () {
        setTimeout(() => {
            console.log(this.num);   // 5
        }, 100);
    }
    
    foo();
    ```
    + 不可以当作构造函数，也就是说，不可以使用 `new` 命令，否则会抛出一个错误
    + 箭头函数不可以使用`arguments`获取参数列表, 可以使用`rest`参数代替
    + 不可以使用`yield`命令，因此箭头函数不能用作 Generator 函数







## Promise 对象

```javascript
var fs = require('fs')

var p1 = new Promise(function (resolve, reject) {
  fs.readFile('./data/a.txt', 'utf8', function (err, data) {
    if (err) {
      reject(err)
    } else {
      resolve(data)
    }
  })
})

var p2 = new Promise(function (resolve, reject) {
  fs.readFile('./data/b.txt', 'utf8', function (err, data) {
    if (err) {
      reject(err)
    } else {
      resolve(data)
    }
  })
})

var p3 = new Promise(function (resolve, reject) {
  fs.readFile('./data/c.txt', 'utf8', function (err, data) {
    if (err) {
      reject(err)
    } else {
      resolve(data)
    }
  })
})
```



- Promise.prototype.then() 

  - 为 Promise 实例添加状态改变时的回调函数

    > 第一个参数是`resolved`状态的回调函数

    > 第二个参数（可选）是`rejected`状态的回调函数

  ```javascript
  p1
    .then(function (data) {
      console.log(data)
      // 当 p1 读取成功的时候,当前函数中 return 的结果可以在后面的 then 中 function 接收到
      // 当 return 123 后面就接收到 123, return 'hello' 后面就接收到 'hello'
      // 没有 return 后面收到的就是 undefined
      // 真正有用的是：我们可以 在then 的函数中 return 一个 Promise 对象
      // 当 return 一个 Promise 对象的时候，后续的 then 中的 方法的第一个参数会作为 p2 的 resolve
      return p2
    }, function (err) {
      console.log('读取文件失败了', err)
    })
    .then(function (data) {
      console.log(data)
      return p3
    })
    .then(function (data) {
      console.log(data)
      console.log('end')
    })
  ```

  ```javascript
  // 封装Promise的readFile
  var fs = require('fs');
  
  function readFile(path) {
      new Promise(function(resovle, reject) {
          fs.readFile(path, function(err, data) {
              if (err) {
                  reject(err);
              } else {
                  resovle(data);
              }
          });
      });
  }
  
  readFile('./a.txt')
      .then(function(data) {
          console.log(data);
          return readFile('/b.txt');
      })
      .then(function(data) {
          console.log(data);
          return readFile('/c.txt');
      })
      .then(function (data) {
          console.log(data);
          console.log('end');        
      })
      .catch(function () {
      
  	})
  
  // catch作用: 前面有任何的promise执行失败,则立即终止所有的promise任务,并立即进入catch中进行错误的捕获和处理
  ```

  