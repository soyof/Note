## let  const

### let

- `let`声明的变量不存在变量提升
- `let`声明的变量只在当前块级作用域中生效
- `let`声明的变量无法重复声明

### const

- `const`声明的变量值无法改变,因此也称`const`声明的变量为常量
- `const`声明常量的同时必须赋值
- `const`无法声明同名变量
- `const`声明的常量只在当前作用域中生效
- `const`如果声明的是复合类型数据,则可以修改其属性

## Array

- `Array.from()`

  - 将类对象转为真正的数组

  常见的类对象 DOM操作返回的NodeList集合, 函数内部arguments对象

- `Array.of()`

  - 将一组值转为数组
  - 无参数时返回一个空数组

  ```javascript
  Array.of(1, 2, 3)
  // [1, 2, 3]
  ```

- `Array.prototype.copyWithin()`

  >参数
  >
  >Array.prototype.copyWithin(target, start = 0, end = this.length)
  >
  >target(必需): 从当前target位置开始替换数组, 如果为复制, 表示倒数
  >
  >start(可选): 从该位置开始读取替换的数据, 默认为0, 如果为负值, 表示从末尾开始计算
  >
  >end(可选): 到该位置停止读取数据, 默认等于数组长度, 如果为负值, 表示从末尾开始计算 

  - 将指定位置的成员复制到其它位置(会覆盖原有成员), 返回当前数组

  ```javascript
  [1, 2, 3, 4, 5].copyWithin(0, 3)
  // [4, 5, 3, 4, 5]
  ```

- `Array.prototype.find()` && `Array.prototype.findIndex()`

  >参数为一个回调函数callback(value, index, arr)
  >
  >该回调函数有三个参数
  >
  >value: 当前值
  >
  >index: 当前索引
  >
  >arr: 原数组

  - `Array.prototype.find()`找出符合条件的数组成员
  - `Array.prototype.findIndex()`找出符合条件的数组成员的索引

  ```javascript
  [1, 5, 10, 15].findIndex((value, index, arr) => {
    return value === 5;
  }) // 5
  
  [1, 5, 10, 15].findIndex((value, index, arr) => {
    return value > 9;
  }) // 2
  ```

- `Array.prototype.fill()`

  - 使用给定值, 填充一个数组
  - 可接受第二个和第三个参数, 分别表示起始位置和结束位置(不包括结束位置)

  ```javascript
  [1, 2, 3].fill('str')
  // ['str', 'str', 'str']
  
  [1, 2, 3].fill('str', 1, 2)
  [1, 'str', 3]
  ```

- `Array.prototype.includes()`

  - 判断某数组是否包含给定的值, 返回一个Boolean值

  ```javascript
  [1, 2, 3].includes(2)     // true
  [1, 2, 3].includes(4)     // false
  ```

- `Array.prototype.flat()`

  > `falt()`参数为一个整数的时候, 表示需要拉平的层数, 默认为1,
  >
  > 若不管有多少层嵌套, 都要转为一位数组, 可将参数写为 `Infinity`

  - `Array.prototype.flat()`将多维数组转为一维数组

## Object

- `Object.is()`

  - 判断两个值是否相等(严格),效果等同于`===`

- `Object.assign()`

  > `Object.assign(target, current, ...)`
  >
  > target: 目标对象
  >
  > current: 源对象

  - 将所有可枚举的属性复制到目标对象
  - 此方法等同于浅拷贝
  - 若有同名属性, 则会执行替换,而非添加
  - 用来处理数组时, 会将数组视为对象

- `Object.setPrototypeOf()`

  > ```javascript
  > Object.setPrototypeOf(object, prototype)
  > 
  > const obj = Object.setPrototypeOf({}, null)
  > ```

  - 设置一个对象的原型对象, 返回参数对象本身

- `Object.getPrototypeOf()`

  ```javascript
  Object.getPrototypeOf(obj)
  ```

  - 读取一个对象的原型对象

- `Object.keys()`

  - 获取某对象自身所有可遍历属性的键名, 返回值为数组

  ```javascript
  obj = {id: 1, name: 'jack' }
  Object.keys(obj)
  // ['id', 'name']
  ```

- `Object.values()`

  - 获取某对象自身所有可遍历属性的值, 返回值为数组

  ```javascript
  obj = {id: 1, name: 'jack' }
  Object.values(obj)
  // [1, 'jack']
  ```

- `Object.entries()`

  - 获取某对象自身所有可遍历属性的键值对数组, 返回值为数组

  ```javascript
  obj = {id: 1, name: 'jack' }
  Object.values(obj)
  // [['id', 1], ['name', 'jack']]
  ```

- `Object.fromEntries()`

  - `Object.entries()`的你操作,将一个键值对数组转为对象

  ```javascript
  const obj = Object.fromEntries([['id', 1], ['name', 'jack']])
  // obj = {id: 1, name: 'jack' }
  ```

## Set

> 新的数据结构, 类似于一个数组, 但成员的值都是唯一的, 没有重复的值
>
> 数组去重可使用此方法

### Set 实例的属性和方法

Set 结构的实例有以下属性。

- `Set.prototype.constructor`：构造函数，默认就是`Set`函数。
- `Set.prototype.size`：返回`Set`实例的成员总数。

Set 实例的方法1 :   操作方法（用于操作数据）

- `Set.prototype.add(value)`：添加某个值，返回 Set 结构本身。
- `Set.prototype.delete(value)`：删除某个值，返回一个布尔值，表示删除是否成功。
- `Set.prototype.has(value)`：返回一个布尔值，表示该值是否为`Set`的成员。
- `Set.prototype.clear()`：清除所有成员，没有返回值。

Set 实例的方法2 :  遍历方法（用于遍历成员）

- `Set.prototype.keys()`：返回键名的遍历器
- `Set.prototype.values()`：返回键值的遍历器
- `Set.prototype.entries()`：返回键值对的遍历器
- `Set.prototype.forEach()`：使用回调函数遍历每个成员

## Map

Map数据结构类似于对象, 也是键值对的集合, 但键的范围不限于字符串, 各种类型的值(包括对象)都可以当做键

### 实例属性和操作方法

- `size`
  - 返回Map结构的成员总数
- `Map.prototype.set(key, value)`
  - 设置键名key对应的键值为value, 然后返回整个Map结构, 如果key已经有值,则键值会被更新, 否则会创建
  - set()方法返回是当前Map对象, 因此可以采用链式写法
- `Map.prototype.get(key, value)`
  - `get`方法读取`key`对应的键值，如果找不到`key`，返回`undefined`
- `Map.prototype.has(key)`
  - `has`方法返回一个布尔值，表示某个键是否在当前 Map 对象之中
- `Map.prototype.delete(key)`
  - `delete`方法删除某个键，返回`true`。如果删除失败，返回`false`
- `Map.prototype.clear()`
  - `clear`方法清除所有成员，没有返回值

Map 结构原生提供三个遍历器生成函数和一个遍历方法。

- `Map.prototype.keys()`：返回键名的遍历器。
- `Map.prototype.values()`：返回键值的遍历器。
- `Map.prototype.entries()`：返回所有成员的遍历器。
- `Map.prototype.forEach()`：遍历 Map 的所有成员。

## Proxy

Proxy 用于修改某些操作的默认行为，可以理解为在目标对象之前架设一层“拦截”，外界对该对象的访问，都必须先通过这层拦截，因此提供了一种机制，可以对外界的访问进行过滤和改写。

- **get(target, propKey, receiver)**：拦截对象属性的读取，比如`proxy.foo`和`proxy['foo']`。
- **set(target, propKey, value, receiver)**：拦截对象属性的设置，比如`proxy.foo = v`或`proxy['foo'] = v`，返回一个布尔值。
- **has(target, propKey)**：拦截`propKey in proxy`的操作，返回一个布尔值。
- **deleteProperty(target, propKey)**：拦截`delete proxy[propKey]`的操作，返回一个布尔值。
- **ownKeys(target)**：拦截`Object.getOwnPropertyNames(proxy)`、`Object.getOwnPropertySymbols(proxy)`、`Object.keys(proxy)`、`for...in`循环，返回一个数组。该方法返回目标对象所有自身的属性的属性名，而`Object.keys()`的返回结果仅包括目标对象自身的可遍历属性。
- **getOwnPropertyDescriptor(target, propKey)**：拦截`Object.getOwnPropertyDescriptor(proxy, propKey)`，返回属性的描述对象。
- **defineProperty(target, propKey, propDesc)**：拦截`Object.defineProperty(proxy, propKey, propDesc）`、`Object.defineProperties(proxy, propDescs)`，返回一个布尔值。
- **preventExtensions(target)**：拦截`Object.preventExtensions(proxy)`，返回一个布尔值。
- **getPrototypeOf(target)**：拦截`Object.getPrototypeOf(proxy)`，返回一个对象。
- **isExtensible(target)**：拦截`Object.isExtensible(proxy)`，返回一个布尔值。
- **setPrototypeOf(target, proto)**：拦截`Object.setPrototypeOf(proxy, proto)`，返回一个布尔值。如果目标对象是函数，那么还有两种额外操作可以拦截。
- **apply(target, object, args)**：拦截 Proxy 实例作为函数调用的操作，比如`proxy(...args)`、`proxy.call(object, ...args)`、`proxy.apply(...)`。
- **construct(target, args)**：拦截 Proxy 实例作为构造函数调用的操作，比如`new proxy(...args)`。

## Reflect

Reflect设计目地

- 将`Object`对象的一些明显属于语言内部的方法（比如`Object.defineProperty`），放到`Reflect`对象上
-  修改某些`Object`方法的返回结果，让其变得更合理
-  让`Object`操作都变成函数行为
- `Reflect`对象的方法与`Proxy`对象的方法一一对应，只要是`Proxy`对象的方法，就能在`Reflect`对象上找到对应的方法

`Reflect`对象一共有 13 个静态方法。

- Reflect.apply(target, thisArg, args)
- Reflect.construct(target, args)
- Reflect.get(target, name, receiver)
- Reflect.set(target, name, value, receiver)
- Reflect.defineProperty(target, name, desc)
- Reflect.deleteProperty(target, name)
- Reflect.has(target, name)
- Reflect.ownKeys(target)
- Reflect.isExtensible(target)
- Reflect.preventExtensions(target)
- Reflect.getOwnPropertyDescriptor(target, name)
- Reflect.getPrototypeOf(target)
- Reflect.setPrototypeOf(target, prototype)

上面大部分与`Object`对象的同名方法的作用都是相同的，而且它与`Proxy`对象的方法是一一对应的

## Promise

### 实例方法

- `Promise.prototype.then()`
  - Promise操作成功的回调函数
- `Promise.prototype.catch()`
  - Promise操作发生错误时的回调函数
- `Promise.prototype.finally()`
  - 无论Promise操作是否成功, 只要操作完成, 都会执行此方法

### 静态方法

- `Promise.all()`

  - 将多个Promise实例包装成一个新的Promise实例

  ```javascript
  const p = Promise.all([p1, p2, p3]);
  ```

  1. 只有当p1, p2, p3的状态都变为fulfilled, p的状态才会变为fulfilled, 返回值以一个数组形式传递给p的回调

  2. 当p1, p2, p3有一个被rejected, p的状态才会变为rejected, 此时第一个被rejected的实例的返回值会传递给p的回调

- `Promise.race()`

  - `Promise.race()`方法同样是将多个 Promise 实例，包装成一个新的 Promise 实例

  只要`p1`、`p2`、`p3`之中有一个实例率先改变状态，`p`的状态就跟着改变。那个率先改变的 Promise 实例的返回值，就传递给`p`的回调函数。

  `Promise.race()`方法的参数与`Promise.all()`方法一样

- `Promise.allSettled()`

  - `Promise.allSettled()`方法接受一组 Promise 实例作为参数，包装成一个新的 Promise 实例。只有等到所有这些参数实例都返回结果，不管是`fulfilled`还是`rejected`，包装实例才会结束。

- `Promise.any()`

  - `Promise.any()`方法接受一组 Promise 实例作为参数，包装成一个新的 Promise 实例。只要参数实例有一个变成`fulfilled`状态，包装实例就会变成`fulfilled`状态；如果所有参数实例都变成`rejected`状态，包装实例就会变成`rejected`状态。

