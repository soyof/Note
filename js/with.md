## with

`with`可以将一个没有或者有多个属性的对象处理为一个完全隔离的词法作用域,因此这个对象的属性也会被处理为定义在这个作用域的词法标识符

```javascript
var foo = function (obj) {
    with (obj) {
        a = 2
    }
}

var o1 = {
    a: 3
}
var o2 = {
    b: 3
}

foo(o1)
console.log(o1.a)
// console.log(a)  // 报错  a不存在

foo(o2)
console.log(o2.a)  // undefined
console.log(a)  // 2 -- a被泄露到全局作用域中

```

`o2`的作用域,函数`foo`的作用域,全局作用域中并未找到a,因此当`a = 2`执行时,创建了一个全局变量