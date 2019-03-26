# JS

- console.time("abc");  //开始秒表---传参表示是同一个秒表

- console.timeEnd("abc");  //结束秒表

- css中 @import url() 可以引入另一个css文件在当前的css文件中

- js: 自由变量:函数没有声明该变量,但是却有使用该变量,那么对于这个函数来说,这个变量就是自由变量

  ```javascript
  var a=10;
  function fn(){
      console.log(a); //对于fn来说,变量a是自由变量
      var b=10;
      console.log(b);  //b是fn内部的局部变量
      function inner(){
          console.log(b);  //对于函数inner来说,变量b是个自由变量
      }
  }
  ```

  ```javascript
  switch-case语句
  	语法：
  	switch(表达式或变量名){
  		case 值1:代码1;
  		break;
  		case 值2:代码2;
  		break;
  		case 值3:代码3;
  		break;
  		case 值4:代码4;
  		break;
  		...
  		default:代码5;
  	}
  ```

  

## String

- .length       字符串的长度

- .charAt(索引)  返回值是指定索引位置的字符串，超出索引，结果为空字符串

- .fromCharCode（数字值，数字值...），返回的是ASCII码对应的值

- .concat（字符串1，字符串2，...）；将括号里面的字符串加在原来的字符串后面，返回一个新的字符串

- .indexOf(要找的字符串，从某个位置开始的索引)；返回的是这个字符串的索引值，没有找到则返回-1；返回的为数字类型的

- .lastIndexOf（要找的字符串）；从后向前找，但是索引仍然是从左向右的方式，找不到则返回-1

- .replace（"原来的字符串","新的字符串"）；用来替换字符串的

- .slice(开始的索引,结束的索引); 从索引开始的位置开始提取,到索引结束的位置的前一个结束,没有结束位置的索引的值，并返回这个提取后的字符串

- .split("要干掉的字符串",切割后留下的个数);切割字符串--返回值为数组

- .substr(开始的位置,个数);返回的是截取后的新的字符串

- .substring(开始的索引,结束的索引),返回截取后的字符串,不包含结束的索引的字符串

- .toLocaleLowerCase();转小写

- .toLowerCase();转小写

- .toLocaleUpperCase()转大写

- .toUpperCase();转大写

- .trim();干掉字符串两端的空格

- .startsWith(x)-------以什么开始,判断字符串中是否以x字符开始---返回值为布尔类型

- .endsWith(x)---------以什么结束,判断字符串是否以x结束---返回值为布尔类型

- .padStart()方法,  .padEnd()方法

  - 如果某个字符串不够指定长度，会在头部或尾部补全。`padStart()`用于头部补全，`padEnd()`用于尾部补全。

  - `padStart()`和`padStart()`一共接受两个参数，第一个参数用来指定字符串的最小长度，第二个参数是用来补全的字符串。

  - 如果原字符串的长度，等于或大于指定的最小长度，则返回原字符串。

  - 如果用来补全的字符串与原字符串，两者的长度之和超过了指定的最小长度，则会截去超出位数的补全字符串。

  - 如果省略第二个参数，默认使用空格补全长度。

    

  

## Date

+ var dt=new Date()   console.log(dt.toString());   转换为字符串类型
+ dt.getFullYear();//年
+ dt.getMonth();//月---从0开始
+ dt.getDate();//日
+ dt.getHours();//小时
+ dt.getMinutes();//分钟
+ dt.getSeconds();//秒
+ dt.getDay();//星期---从0开始
+ dt.toDateString();//日期    英文格式
+ dt.toLocaleDateString();//日期
+ dt.toTimeString();//时间    英文格式
+ dt.toLocaleTimeString();//时间
+ dt.valueOf();//毫秒

## Math

- Math.ceil()---向上取整
- Math.floor()---向下取整
- Math.PI----圆周率的值
- Math.Max()---一组数字中的最大值
- Math.Min()---一组数字中的最小值
- Math.abs()----绝对值
- Math.random()---随机数字
- Math.sqrt()----开平方
- Math.pow()----一个数字的多少次幂

## Array

- Array.isArray(对象)----------判断这个对象是不是数组
- instanceof  关键字  ---------判断两个对象是否为同一类型
- .concat（数组，数组，数组，...）  组合成一个新的数组
- .every（函数）---返回值是布尔类型，函数作为参数使用，函数中有三个参数，第一个参数是元素的值，第二个参数是索引值，第三个参数是原来的数组    如果这个数组中的每个元素的值都符合条件，最后才返回的是true
- .push(值)；-----将值追加到数组最后，返回值也是追加数据之后的数组长度
- .pop();---------删除数组中最后一个元素，返回值就是删除的这个值
- .shift();-------删除数组中第一个元素，返回值就是删除的这个值
- .unshift(值);----向数组的第一个元素前面插入一个新的元素，----返回值是插入后的数组长度
- .forEach(函数);---遍历数组用---相当于for循环遍历数组  函数值类似于.every();
- .indexof(元素值); ----返回的是索引，如果数组中没有这个元素值，则返回-1；
- .lastIndexOf（要找的元素值）；从后向前找，但是索引仍然是从左向右的方式，找不到则返回-1
- .jion("字符串");------将每个元素用新加的字符串隔开   返回的是一个字符串
- .map(函数);----------数组中的每个元素都要执行这个函数，把执行后的结果组成一个新的数组，返回这个新的数组
- .reverse();----------反转数组
- .sort();-------------排序，可能不稳定，如果不稳定，将下面的固定代码写入
```javascript
    function compare(a,b){
        if (a>b) {
            return 1;
        }else if(a==b) {
            return 0;
        }else {
            return -1;
        }
    }

    .sort(function(a,b){
        return a-b;
    })   //a-b从小到大    b-a从大到小
```
- .slice(开始的索引，结束的索引)；---把截取的数组的值放在一个新的数组中，截取的值不包括结束的索引对应的元素值
- .slice(开始的索引)；---从开始的索引开始,到数组结束(包括结束的值)
- .slice()；---全部截取并返回新数组
- .splice（开始的索引，要删除的个数，替换或者新增的元素值）；
  + 一般用于删除数组中的元素值，或者替换元素值 ,如果为新增元素值，则增加的位置为开始位置的元素值的前面 
  + 返回值:如果从array中删除了元素，返回的是含有被删除的元素的数组。
- .includes(value)---  value表示需要判断的值,前面跟数组,判断value是否在数组中出现---返回值为布尔类型
- sort() 方法用于对数组的元素进行排序。
  + 如果调用该方法时没有使用参数，将按字母顺序对数组中的元素进行排序，说得更精确点，是按照字符编码的顺序进行排序。要实现这一点，首先应把数组的元素都转换成字符串（如有必要），以便进行比较。
  + 如果想按照其他标准进行排序，就需要提供比较函数，该函数要比较两个值，然后返回一个用于说明这两个值的相对顺序的数字。比较函数应该具有两个参数 a 和 b，其返回值如下：
    * 若 a 小于 b，在排序后的数组中 a 应该出现在 b 之前，则返回一个小于 0 的值。
    * 若 a 等于 b，则返回 0。
    * 若 a 大于 b，在排序后的数组中 a 应该出现在 b 之后,则返回一个大于 0 的值。

``` javascript
.includes(value)---  value表示需要判断的值,前面跟数组,判断value是否在数组中出现---返回值为布尔类型
Array数组方法
```

- `.find()`  方法返回数组中满足提供的测试函数的第一个元素的值。否则返回 `undefined`   ( ES6提供 )

  > 语法:  array.find ( callback, [ thisValue ] )

  - 当数组中的元素在测试条件( `callback` )时返回 *true* 时, find() 返回符合条件的元素，之后的值不会再调用执行函数。
  - 如果没有符合条件的元素返回 undefined

  | 参数                            | 描述                                                         |
  | ------------------------------- | ------------------------------------------------------------ |
  | callback(`item`, `index`,`arr`) | 必需。数组每个元素需要执行的函数。                                                                                                               函数参数:参数描述`item`必需 => 当前元素                                                                                                                                      `index`可选 => 当前元素的索引值                                                                                                                                               `arr`可选 => 当前元素所属的数组对象 |
  | *thisValue*                     | 可选。 传递给函数的值一般用 "this" 值。 如果这个参数为空， "undefined" 会传递给 "this" 值 |

- `.findIndex()`方法返回数组中满足提供的测试函数的第一个元素的**索引**。否则返回-1。 ( ES6提供 )

  > ```
  > arr.findIndex(callback, [thisValue] )
  > ```

  > 参数说明同`.find()`类似

  + 当数组中的元素在测试条件( `callback` )时返回 *true* 时, find() 返回符合条件的元素对应的 `索引`，之后的值不会再调用执行函数。
  + 如果没有符合条件的元素返回 `-1`

- .some(callback, thisValue)

  some() 方法用于检测数组中的元素是否满足指定条件（函数提供）。

  some() 方法会依次执行数组的每个元素：

  - 如果有一个元素满足条件，则表达式返回*true* , 剩余的元素不会再执行检测。
  - 如果没有满足条件的元素，则返回false。

  **注意：** some() 不会对空数组进行检测。

  **注意：** some() 不会改变原始数组。

  | 参数                                | 描述                                                         |
  | ----------------------------------- | ------------------------------------------------------------ |
  | *function(currentValue, index,arr)* | 必须。函数，数组中的每个元素都会执行这个函数 函数参数: 参数描述*currentValue*必须。当前元素的值*index*可选。当前元素的索引值*arr*可选。当前元素属于的数组对象 |
  | *thisValue*                         | 可选。对象作为该执行回调时使用，传递给函数，用作 "this" 的值。 如果省略了 thisValue ，"this" 的值为 "undefined" |







## Function.prototype成员

- [ ] arguments：获取函数的实参，已经被废弃了，现在推荐的做法是使用函数内部可用的 `arguments`对象来访问函数的实参。 
  - （废弃的意思：已经从 Web 标准中删除，虽然一些浏览器目前仍然支持它，但也许会在未来的某个时间停止支持，请尽量不要使用该特性。 ）
- [ ] length：获取形参的长度
- [ ] name：获取函数的名字，此属性不允许修改
- [x] caller: 用于获取当前在函数是在哪个函数中调用的，已经被废弃了。
- [x] constructor：指向当前构造函数，Function
- [x] call：调用函数，重新指向this
- [x] apply：调用函数，重新指向this
- [x] bind：重新指向this，返回一个新的函数，不调用。
  
### `instanceof`

1. 语法    实例对象  instanceof   构造函数
2. 作用:判断构造函数的prototype属性是否在实例对象的原型链上,如果在,返回true

### 函数调用栈(call stack)

- 函数在调用的时候,会压栈-----函数调用结束后,将结果返回(弹栈)
  + 特点:先进后出
  + 弹栈:将调用的函数从函数调用栈中弹出

**将Fn当作构造函数,创建对象**

```javascript
     var name="小厮";
     
     function Fn() { 
     
         (function () { 
     
              this.name="小花";
     
         }).call(window);
     
     }
     
     Fn.prototype.creat=function(){
     
         this.name="小明";
     
     }
     console.log(new new Fn().creat().name);
```

### **闭包**

闭包是函数和声明该函数的词法环境的组合
- 函数:内部函数
-  声明该函数:外部函数
- 词法环境:两个函数形成的作用域链
- 组合:两个函数以及作用域链形成的整体环境

#### 闭包的形成条件

- 有两个函数,是嵌套关系,内部函数还访问了外部函数的一个变量

#### 闭包的概念

> 闭包是函数和声明该函数的词法环境的组合。 

- 在JavaScript中，在函数中可以（嵌套）定义另一个函数时，如果内部的函数引用了外部的函数的变量，产生闭包。

**闭包中包含了内部函数的代码，以及所需外部函数中的变量的引用 **

#### 产生闭包的条件

* 当内部函数访问了外部函数的变量的时候，就会形成闭包。

#### 闭包的作用

1. 私有变量，保护数据安全

2. 持久化维持数据

3. 闭包存在的问题

   > 闭包占用的内存是不会被释放的，因此，如果滥用闭包，会造成内存泄漏的问题。闭包很强大，但是只有在必须使用闭包的时候才使用。

### [js的垃圾回收机制](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Memory_Management)

- 内存：计算机中所有程序的运行都是在`内存`中进行的，因此内存的性能对计算机的影响非常大，运行程序需要消耗内存，当程序结束时，内存会得到释放。
- javascript分配内存：当我们定义变量，javascript需要分配内存存储数据。无论是值类型或者是引用类型，都需要存储在内存中。
- 垃圾回收：当代码执行结束，分配的内存已经不需要了，这时候需要将内存进行回收，在javascript语言中，`垃圾回收机器`会帮我们回收`不再需要使用`的内存。

#### 引用记数法清除

引用记数垃圾收集：如果没有引用指向某个对象（或者是函数作用域），那么这个对象或者函数作用域就会被垃圾回收机制回收。

```javascript
var o = {
  name:"zs"
}
//对象被o变量引用  ，引用记数1
var obj = o;   //变量被o和obj引用，引用记数2

o = 1;  //o不在引用对象了， 引用记数1
obj = null; //obj不在引用对象了，引用记数0，可以被垃圾回收了。
```

#### 标记清除法清除

使用引用计数法进行垃圾回收的时候，会出现循环引用导致内存泄漏的问题。因此现代的浏览器都采用标记清除法来进行垃圾回收。

这个算法假定设置一个叫做根（root）的对象（在Javascript里，根是全局对象Window）。定期的，垃圾回收器将从根开始，找所有从根开始引用的对象，然后找这些对象引用的对象……从根开始，垃圾回收器将找到所有可以获得的对象和所有不能获得的对象。 

**从2012年起，所有现代浏览器都使用了标记-清除垃圾回收算法。** 

### 闭包占用内存释放

```javascript
function outer(){
  var count = 0;

  function fn(){
    count++;
    console.log("执行次数"+count);
  }
  return fn;
}


var result = outer();
result();
result = null;//当函数fn没有被变量引用了，那么函数fn就会被回收，函数fn一旦被回收，那么outer调用形成的作用域也就得到了释放。
```

#### 事件循环(Event Loop)

和js相关的三个浏览器进程
1.主线程:负责执行所有的js代码
2.ui渲染线程:负责渲染页面
3.事件循环线程:负责查看事件队列中是否有需要执行的回调函数,如果有,事件循环线程取出来该回调函数,交给主线程进行执行

- 字面量是代码中表述数据的手段
- input中属性accept 属性只能与  <input type="file"> 配合使用。它规定能够通过文件上传进行提交的文件类型    
  在文件上传中使用 accept  属性，本例中的输入字段可以接受 GIF 和 JPEG 两种图像：
  ```
  <form>
    <input type="file" name="pic" id="pic" accept="image/gif, image/jpeg" />
  </form>
  ```
  如果不限制图像的格式，可以写为：accept="image/*"。
- 函数new后,如果返回值是一个复杂数据类型,显示的是这个复杂数据类型,如果返回值是一个简单数据类型,则会被忽视,显示为return this这个对象(即当前this所指向的对象,若this指向为空,则为{ })
  1.如果在构造函数中返回简单数据类型,返回值无效,还是返回new创建的对象
  2.如果返回值为复杂数据类型,则会替代new创建 的对象
- new关键字作了以下几步：
1. 创建了一个空对象
2. 让this指向这个空对象
3. 执行构造函数（new 关键字后面的函数）
4. 返回this指向的这个对象
- 什么是实例？
   实例就是由构造函数创建出来的对象。
- 什么是成员？
  ​  + 成员是属性、方法的统称。
- 什么是实例成员？
  + 由构造函数创建出来的对象能直接访问的属性和方法，包括：对象本身 以及原型中的所有的属性和方法。
- 什么是静态成员？
  + 由构造函数直接访问到的属性和方法。大家注意：是直接访问的属性和方法，间接获取就不是了。
- 一般来说会把工具方法作为静态成员，把和对象相关的方法作为实例成员 
- 构造函数创建对象时,括号里面没有传参数时候,可以省略括号

## BOM

```javascript
window.onload表示在页面加载完毕后才执行代码，前面的window可省略
window.onunload页面关闭后才触发的事件  IE8
window.onbeforeunload页面关闭前才触发的事件  IE8

用来打开一个新页面
window.open(href,name,desc)
href:目标页面的地址
name:新页面的名称
desc:新页面的宽高等  需要宽高都设置才可生效

window.close(); 关闭页面
```

### location

```javascript
console.log(window.location.hash);       //显示地址栏上#及后面的内容
console.log(window.location.host);       //主机名及端口号
console.log(window.location.hostname);   //主机名
console.log(window.location.pathname);   //文件的路径---相对路径
console.log(window.location.port);       //端口号
console.log(window.location.protocol);   //协议
console.log(window.location.search);     //搜索的内容

location.href="http://www.jd.com";      //设置跳转页面的地址---location属性，有历史记录
location.assign("http://www.jd.com");   //设置跳转页面的地址---location方法，有历史记录
location.reload();                     //重新加载---刷新
location.replace("http://www.jd.com"); //替换地址---没有历史记录
```

### history

```javascript
window.history.back();      后退
window.history.forward();   前进
window.history.go();
```

### navigator

```javascript
window.navigator.userAgent;   通过userAgent可以判断用户浏览器的类型
window.navigator.platform; 通过platform可以判断浏览器所在的系统平台类型
```

## DOM

```javascript
/**
 * 设置元素的文本内容
 * @param element 任意元素
 * @param text 任意文本内容
 */
function setInnerText(element, text) {
    if (typeof(element.textContent) == "undefined") {
        element.innerText = text;
    } else {
        element.textContent = text;
    }
}


/**
 * 获取元素的文本内容
 * @param element 任意元素
 * @returns {*} 任意元素中的文本内容
 */
function getInnerText(element) {
    if (typeof(element.textContent) == "undefined") {
        return element.innerText;
    } else {
        return element.textContent;
    }
}



/**
 * 获取父级元素中的第一个子元素
 * @param element 父级元素
 * @returns {*} 父级元素中的子级元素
 */
function getFirstElement(element) {
    if (element.firstElementChild) {
        return element.firstElementChild;
    } else {
        var node = element.firstChild;
        while (node && node.nodeType != 1) {
            node = node.nextSibling;
        }
        return node;
    }
}


/**
 * 获取父级元素中的最后一个子元素
 * @param element 父级元素
 * @returns {*} 最后一个子元素
 */
function getLastElement(element) {
    if (element.lastElementChild) {
        return element.lastElementChild;
    } else {
        var node = element.lastChild;
        while (node && node.nodeType != 1) {
            node = node.previousSibling;
        }
        return node;
    }
}



/**
 * 获取某个元素的前一个兄弟元素
 * @param element 某个元素
 * @returns {*} 前一个兄弟元素
 */
function getPreviousElement(element) {
    if (element.previousElementSibling) {
        return element.previousElementSibling
    } else {
        var node = element.previousSibling;
        while (node && node.nodeType != 1) {
            node = node.previousSibling;
        }
        return node;
    }
}



/**
 * 获取某个元素的后一个兄弟元素
 * @param element 某个元素
 * @returns {*} 后一个兄弟元素
 */
function getNextElement(element) {
    if (element.nextElementSibling) {
        return element.nextElementSibling
    } else {
        var node = element.nextSibling;
        while (node && node.nodeType != 1) {
            node = node.nextSibling;
        }
        return node;
    }
}

/**
 * 获取某个元素的所有兄弟元素
 * @param element 某个元素
 * @returns {Array} 兄弟元素
 */
function getSiblings(element) {
    if (!element) return;
    var elements = [];
    var ele = element.previousSibling;
    while (ele) {
        if (ele.nodeType === 1) {
            elements.push(ele);
        }
        ele = ele.previousSibling;
    }
    ele = element.nextSibling;
    while (ele) {
        if (ele.nodeType === 1) {
            elements.push(ele);

        }
        ele = ele.nextSibling;
    }
    return elements;
}
```



```javascript
//创建元素
var i = 0;
my$("btn").onclick = function () {
    i++;
    var obj = document.createElement("input");
    obj.type = "button";
    obj.value = "按钮" + i;
    //追加子元素
    // my$("dv").appendChild(obj);
    //将新的子元素添加到第一个子元素的前面
    my$("dv").insertBefore(obj, my$("dv").firstElementChild);
};
//replaceChild用法
my$("btn3").onclick = function () {
    var obj1 = document.createElement("input");
    obj1.type = "button";
    obj1.value = "替换";
    my$("dv").replaceChild(obj1, my$("dv").firstElementChild);
};
//removeChild 用法
my$("btn1").onclick = function () {
    my$("dv").removeChild(my$("dv").firstElementChild);
};
//删除所有子元素
my$("btn2").onclick = function () {
    while (my$("dv").firstElementChild) {
        my$("dv").removeChild(my$("dv").firstElementChild);
    }
};
```

```javascript
//为任意元素绑定任意的事件
function addEventListener(element,type,fn){
    if(element.addEventListener){
        element.addEventListener(type,fn,false);
    }else if(element.attachEvent){
        element.attachEvent("on"+type,fn);
    }else {
        element["on"+type]=fn;
    }
}
```

### 事件

#### 资源事件

| 事件名称       | 何时触发                                           |
| -------------- | -------------------------------------------------- |
| `cached`       | manifest中列出的资源已经下载，应用程序现在已缓存。 |
| `error`        | 资源加载失败时                                     |
| `abort`        | 正在加载资源已经被中止时                           |
| `load`         | 资源及其相关资源已完成加载。                       |
| `beforeunload` | window，document 及其资源即将被卸载。              |
| `unload`       | 文档或一个依赖资源正在被卸载。                     |

#### 网络事件

| 事件名称  | 何时触发               |
| --------- | ---------------------- |
| `online`  | 浏览器已获得网络访问。 |
| `offline` | 浏览器已失去网络访问。 |

#### 焦点事件

| 事件名称 | 何时触发                 |
| -------- | ------------------------ |
| `focus`  | 元素获得焦点（不会冒泡） |
| `blur`   | 元素失去焦点（不会冒泡） |

#### Websocket事件

| 事件名称  | 何时触发                                          |
| --------- | ------------------------------------------------- |
| `open`    | WebSocket连接已建立                               |
| `message` | 通过WebSocket接收到一条消息                       |
| `error`   | WebSocket连接异常被关闭（比如有些数据无法发送）。 |
| `close`   | WebSocket连接已关闭                               |

#### css动画事件

| 事件名称             | 何时触发                        |
| -------------------- | ------------------------------- |
| `animationstart`     | 某个CSS动画开始时触发           |
| `animationend`       | 某个CSS动画完成时触发           |
| `animationiteration` | 某个CSS动画完成后重新开始时触发 |

#### css过渡事件

| 事件名称           | 何时触发                                                     |
| ------------------ | ------------------------------------------------------------ |
| `transitionstart`  | A [CSS transition](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions) has actually started (fired after any delay). |
| `transitioncancel` | A [CSS transition](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions) has been cancelled. |
| `transitionend`    | A [CSS transition](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions) has completed. |
| `transitionrun`    | A [CSS transition](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions) has begun running (fired before any delay starts). |

#### 表单事件

| 事件名称 | 何时触发       |
| -------- | -------------- |
| `reset`  | 点击重置按钮时 |
| `submit` | 点击提交按钮   |

#### 键盘事件

| Event Name | Fired When                                        |
| ---------- | ------------------------------------------------- |
| `keydown`  | 按下任意按键                                      |
| `keypress` | 除 Shift, Fn, CapsLock 外任意键被按住. (连续触发) |
| `keyup`    | 释放任意按键                                      |

#### 鼠标事件

| Event Name          | Fired When                                                   |
| ------------------- | ------------------------------------------------------------ |
| `mouseenter`        | 指针移到有事件监听的元素内, 只有在鼠标指针穿过被选元素时，才会触发 mouseenter 事件 |
| `mouseleave`        | 指针移出元素范围外（不冒泡）只有在鼠标指针离开被选元素时，才会触发 mouseleave 事件 |
| `mouseover`         | 鼠标进入事件; 不论鼠标指针穿过被选元素或其子元素，都会触发 mouseover 事件 |
| `mouseout`          | 鼠标离开事件; 不论鼠标指针离开被选元素还是任何子元素，都会触发 mouseout 事件 |
| `mousemove`         | 指针在元素内移动时持续触发                                   |
| `mousedown`         | 在元素上按下任意鼠标按钮                                     |
| `mouseup`           | 在元素上释放任意鼠标按键                                     |
| `click`             | 在元素上按下并释放任意鼠标按键                               |
| `dblclick`          | 在元素上双击鼠标按钮                                         |
| `contextmenu`       | 右键点击 (右键菜单显示前).                                   |
| `wheel`             | 滚轮向任意方向滚动                                           |
| `select`            | 文本被选中被选中                                             |
| `pointerlockchange` | 鼠标被锁定或者解除锁定发生时                                 |
| `pointerlockerror`  | 可能因为一些技术的原因鼠标锁定被禁止时。                     |

#### 拖放事件

| Event Name  | Fired When                                                   |
| ----------- | ------------------------------------------------------------ |
| `dragstart` | 用户开始拖动HTML元素或选中的文本                             |
| `drag`      | 正在拖动元素或文本选区（在此过程中持续触发，每350ms触发一次） |
| `dragend`   | 拖放操作结束 （松开鼠标按钮或按下Esc键）                     |
| `dragenter` | 被拖动的元素或文本选区移入有效释放目标区                     |
| `dragover`  | 被拖动的元素或文本选区正在有效释放目标上被拖动 （在此过程中持续触发，每350ms触发一次） |
| `dragleave` | 被拖动的元素或文本选区移出有效释放目标区                     |
| `drop`      | 元素在有效释放目标区上释放                                   |



### 事件冒泡

> 多个元素嵌套，有层次关系，这些元素注册了相同的事件，如果里面的元素事件触发了，外面元素的该事件会自动触发

- 阻止事件冒泡
  - window.event.cancelBubble = true;  谷歌，IE8支持，火狐不支持
  - e.stopPropagation(); 事件处理函数需传值e，  谷歌火狐支持，IE8不支持

- 事件三个阶段

  - 事件捕获阶段    从外向内
  - 事件目标阶段    开始选择的
  - 事件冒泡阶段    从内向外

- addEventListener("没有on的事件类型","事件处理函数",控制事件阶段)

  - addEventListener第三个参数是控制事件阶段的：
    - true是捕获阶段
    - false是冒泡阶段
    - 通过e.eventPhase这个属性可以知道当前事件是什么阶段
      1   ---事件捕获阶段
      2   ---事件目标阶段
      3   ---事件冒泡阶段

  + 事件触发过程中，可能出现事件冒泡，阻止事件冒泡
    谷歌、IE8---- window.event.cancelBubble=true;    window.event就是一个对象，IE中的标准
    谷歌、火狐---- e.stopPropagation();
    window.event和e都是事件参数对象，一个是IE标准，一个是火狐标准
    事件参数e在IE8的浏览器不存在，此时可以用window.event代替

### 三大系列

> clientX  clientY  鼠标在可视区的位置
> pageX pageY  鼠标在页面中的位置
> screenX screenY  鼠标在屏幕中的位置

#### offset系列

>  (父级元素margin+父级元素padding+父级元素border+自己的margin)

- offsetLeft:元素距离左边位置的值
- offsetTop:元素距离上面位置的值
- offsetWidth:获取元素的宽度(有边框)
- offsetHeight:获取元素的高度(有边框)

#### scroll系列:卷曲

- scrollLeft:元素向左卷曲出去的距离
- scrollTop:元素向上卷曲出去的距离
- scrollWidth:元素中内容的实际的宽度,如果没有内容,或者内容很少,元素的宽度
- scrollHeight:元素中内容的实际的高度,如果没有内容,或者内容很少,元素的高度

#### client系列

- clientWidth:可视区域的宽度,没有边框
- clientHeight:可视区域的高度,没有边框
- clientLeft:左边框的宽度
- clientTop:上边框的宽度
- clientX:可视区域的横坐标
- clientY:可视区域的纵坐标

> window.innerWidth  获取浏览器可视区宽度
> window.innereHeight 获取浏览器可视区高度
> window.onresize  事件,当窗口改变时,事件被触发

### innerText与innerHTML区别

- 如果要获取标签及内容，使用innerHTML
- 要设置标签，使用innerHTML
- 设置文本，用innerText，innerHTML或者textContent均可    

### 自定义属性

- 设置自定义属性：setAttribute("属性的名字"，"属性的值");
- 获取自定义属性的值：getAttribute("属性的名字");
- removeAttribute("属性名字")；可以移除自定义属性，也可移除元素自带属性

### 节点操作

```js
my$("btn").onclick = function () {
    i++;
    var obj = document.createElement("input");
    obj.type = "button";
    obj.value = "按钮" + i;
    //追加子元素
    my$("dv").appendChild(obj);
    //将新的子元素添加到第一个子元素的前面
    my$("dv").insertBefore(obj, my$("dv").firstElementChild);
};
//replaceChild用法
my$("btn3").onclick = function () {
    var obj1 = document.createElement("input");
    obj1.type = "button";
    obj1.value = "替换";
    my$("dv").replaceChild(obj1, my$("dv").firstElementChild);
};
//removeChild 用法
my$("btn1").onclick = function () {
    my$("dv").removeChild(my$("dv").firstElementChild);
};
//删除所有子元素
my$("btn2").onclick = function () {
    while (my$("dv").firstElementChild) {
        my$("dv").removeChild(my$("dv").firstElementChild);
    }
};
```

节点操作，方法
​	appendChild()
​	insertBefore()
​	removeChild()
​	replaceChild()
节点层次，属性
​	parentNode
​	childNodes
​	children
​	nextSibling/previousSibling
​	firstChild/lastChild

注意

childNodes和children的区别，childNodes获取的是子节点，children获取的是子元素

nextSibling和previousSibling获取的是节点，获取元素对应的属性是nextElementSibling和previousElementSibling获取的是元素

nextElementSibling和previousElementSibling有兼容性问题，IE9以后才支持

### 节点的属性

```js
节点的属性：
nodeType：节点的类型：1---标签  2---属性  3---文本
nodeName：节点的名字： 标签节点---大写的标签名  属性节点---小写的属性名字  文本节点---#text
nodeValue：节点的值： 标签节点---null  属性节点---属性值  文本节点---文本内容

querySelectorAll()   //获取的元素为静态,移动元素时并没动态变化
children            //获取的元素为动态,移动元素时动态变化
```

节点分类：

​	元素节点、文本节点、属性节点、注释节点

节点常用的属性

​	nodeType:  节点类型：元素节点的nodeType = 1

​	nodeName: 节点名称

​	nodeValue: 节点值

### 子节点

```javascript
childNodes:获取所有的孩子节点（包括了元素节点和其他很多类型的节点，基本不常用）
children:获取所有的子元素（用途很广泛），兼容性：IE678会把注释节点算上。
firstChild //第一个子节点
firstElementChild //第一个子元素 有兼容性问题（IE678）
lastChild //最后一个节点
lastElementChild //最后一个子元素 有兼容性问题（IE678）
```

### 兄弟节点

```javascript
1. nextSibling:下一个兄弟节点
2. nextElementSibling:下一个兄弟元素（IE678不兼容）
3. previousSibling//上一个兄弟节点
4. previousElementSibling //上一个兄弟元素 有兼容性问题
```

### 父节点

```javascript
1. parentNode:父节点  没有兼容性问题
```

javascript:void(0)的作用

```javascript
//1. javascript:是伪协议，表示href的内容通过javascript执行。
//2. void(0)表示不作任何操作，这样会防止链接跳转到其他页面。
//3. 让页面不跳转，JavaScript:void(0)是最通用的方式。
```

### onkeydown与onkeyup事件

```javascript
1. onkeydown:当键盘按下时触发的事件
2. onkeyup:键盘弹起时触发的事件

注意：如果给文本框注册的是onkeydown事件，获取的value值是上一次的。
```

### 添加节点

#### appendChild

语法：parent.appendChild(child)

parent: 调用者，父节点来调用

child:需要添加的那个孩子。

作用：把child添加到parent的孩子的最后面。

> 如果添加的是页面中本来就存在的元素，是一个剪切的效果，原来的就不在了。

```javascript
var demo = document.getElementById("demo");
var box = document.getElementById("box");
box.appendChild(demo);
```

#### insertBefore

语法：parent.insertBefore(child, refChild);

parent:必须要父节点来调用

child：需要添加的那个节点

refChild:添加到哪一个节点的前面。

```javascript
var ul = document.getElementById("list");
var li = document.createElement("li");
li.innerHTML = "骥骥";
//就是添加到子节点的最前面。
ul.insertBefore(li, ul.children[0]);
```

### 创建节点（3种方式）

```
1. document.write("标签的代码及内容")；
    缺陷：如果在页面加载完毕后，通过这种方式创建元素，那么页面上的所有内容全部被替代
    如果在页面加载的时候创建，页面原有的内容则不会被替代
2. 对象.innerHTML="标签及代码";
3. document.createElement("元素的名字");
```

#### document.write（基本不用）

可以生成新的节点，但是不推荐使用。***如果页面已经加载完成了，你还是用document.write写内容的话，会把之前的页面给覆盖掉*** 

原理：页面从上往下加载的时候，会开启一个文档流，当页面加载完，文档流就会关闭。

document.write的本意就是在文档流上写入内容。如果页面没加载完成，文档流还是开着的，document.write直接在这个文档流上写东西

如果页面加载完成了，还是用document.write写东西，会重新开启一个新的文档流，往新的文档流上写东西，旧的文档流就被新的文档流覆盖了。

#### innerHTML

innerHTML也可以创建节点

> innerHTML创建节点的时候有一个特点，如果原来有内容的话，使用innerHTML会把原先的内容给干掉。
>
> 慎用：很容易出现效率问题。

#### createElement

语法：var element = document.createElement("tagName");

作用：在内存里面创建了一个节点

返回：一个元素

用途非常的广泛。

### 删除节点

语法：parent.removeChild(child);

功能：有父盒子调用，删除里面的一个子元素。

### 克隆节点

语法：var newNode = node.cloneNode(deep)

功能：在内存中克隆一份节点

参数：deep

- false：默认值：是浅复制，只会复制标签，节点本身，不会复制节点的孩子。
- true:深度复制，会复制标签，还会复制标签的所有内容 --- **常用**

> 1. 克隆出来的节点跟原来的节点没有关系了，修改了也不会相互影响。
> 2. 如果克隆的节点带了id，我们需要给id重新设置一个值，不让id冲突



### 文件批量改后缀名

cmd中

D:\Web教程\前端\08.alibaixiu\code\baixiu\admin>ren *.html *.php

ren表示rename 将所有后缀为html改为后缀为php

### ES6，Array.includes()函数的用法

在ES5，Array已经提供了indexOf用来查找某个元素的位置，如果不存在就返回-1，但是这个函数在判断数组是否包含某个元素时有两个小不足，第一个是它会返回-1和元素的位置来表示是否包含，在定位方面是没问题，就是不够语义化。另一个问题是不能判断是否有NaN的元素。

ES6提供了Array.includes()函数判断是否包含某一元素，除了不能定位外，解决了indexOf的上述的两个问题。它直接返回true或者false表示是否包含元素，对NaN一样能有有效。

includes(*searchElement*,*fromIndex*)

| 参数            | 描述                                                         |
| --------------- | ------------------------------------------------------------ |
| *searchElement* | 必须。需要查找的元素值。                                     |
| *fromIndex*     | 可选。从该索引处开始查找 searchElement。如果为负值，则按升序从 array.length + fromIndex 的索引开始搜索。默认为 0。 |

| 返回值：         | 布尔值。如果找到指定值返回 true，否则返回 false。 |
| ---------------- | ------------------------------------------------- |
| JavaScript 版本: | ECMAScript 6                                      |

### Array.forEach()

对数组的每个元素执行一次提供的函数。

```js
var array1 = ['a', 'b', 'c'];

array1.forEach(function(element) {
  console.log(element);
});

// expected output: "a"
// expected output: "b"
// expected output: "c"

```

#### 语法

``` 
array.forEach(callback(currentValue, index, array){
    //do something
}, this)

array.forEach(callback[, thisArg])
```

#### 参数

- `callback`

  为数组中每个元素执行的函数，该函数接收三个参数：

  ​    currentValue数组中正在处理的当前元素。

  ​    index可选数组中正在处理的当前元素的索引。

  ​    array可选forEach()方法正在操作的数组。

- `thisArg`可选

  可选参数。当执行回调 函数时`用作``this的`值(参考对象)。

- 返回值[`undefined`]

`forEach` 方法按升序为数组中含有效值的每一项执行一次`callback` 函数，那些已删除或者未初始化的项将被跳过（例如在稀疏数组上）。

`callback` 函数会被依次传入三个参数：

- **数组当前项的值**
- **数组当前项的索引**
- **数组对象本身**

如果`给forEach传递了thisArg`参数，当调用时，它将被传给`callback` 函数，作为它的this值。否则，将会传入 [`undefined`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined) 作为它的this值。callback函数最终可观察到this值，这取决于 [函数观察到`this`的常用规则](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/this)。

`forEach` 遍历的范围在第一次调用 `callback` 前就会确定。调用`forEach` 后添加到数组中的项不会被 `callback` 访问到。如果已经存在的值被改变，则传递给 `callback` 的值是 `forEach` 遍历到他们那一刻的值。已删除的项不会被遍历到。如果已访问的元素在迭代时被删除了(例如使用 [`shift()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/shift)) ，之后的元素将被跳过 - 参见下面的示例。

`forEach()` 为每个数组元素执行callback函数；不像[`map()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map) 或者[`reduce()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) ，它总是返回 [`undefined`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined)值，并且不可链式调用。典型用例是在一个链的最后执行副作用。

**注意：** 没有办法中止或者跳出 forEach 循环，除了抛出一个异常。如果你需要这样，使用forEach()方法是错误的，你可以用一个简单的循环作为替代。如果您正在测试一个数组里的元素是否符合某条件，且需要返回一个布尔值，那么可使用 [`Array.every`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/every) 或 [`Array.some`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/some)。如果可用，新方法 [`find()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/find) 或者[`findIndex()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex) 也可被用于真值测试的提早终止。

### Array.map()   

返回新的数组,要对数组中素有值进行同样的操作时候,用map

回调函数参数同上

### Array.filter()

返回新的数组,删除或者过滤数组中某些值的时候使用

回调函数参数同上

### Array.some()

返回值true/false,数组中只要一个值符合条件,就返回true,否则false

回调函数参数同上

### Array.every()

数组中所有值满足条件,返回true,否则false  

回调函数参数同上       

## e.stopPropagation() 方法

终止事件在传播过程的捕获、目标处理或起泡阶段进一步传播。调用该方法后，该节点上处理该事件的处理程序将被调用，事件不再被分派到其他节点。

```javascript
event.stopPropagation()
```

ps:该方法将停止事件的传播，阻止它被分派到其他 Document 节点。在事件传播的任何阶段都可以调用它。注意，虽然该方法不能阻止同一个 Document 节点上的其他事件句柄被调用，但是它可以阻止把事件分派到其他节点。

## e.preventDefault() 方法

取消事件的默认动作。

```js
event.preventDefault()
```

ps:该方法将通知 Web 浏览器不要执行与事件关联的默认动作（如果存在这样的动作）。例如，如果 type 属性是 "submit"，在事件传播的任意阶段可以调用任意的事件句柄，通过调用该方法，可以阻止提交表单。注意，如果 Event 对象的 cancelable 属性是 fasle，那么就没有默认动作，或者不能阻止默认动作。无论哪种情况，调用该方法都没有作用。

## window.URL.createObjectURL预览本地图片或者视频

```html
<script src="http://code.jquery.com/jquery-2.1.1.min.js"></script>
 
<div>
  <img width="400" height="500"></img>
</div>
 
<input type="file" accept="image/*" />
 
<script type="text/javascript">
 
    $("input").change(function(){
        var files = this.files;
        if(!files.length) {
            return;
        }
        $("img").attr("src",window.URL.createObjectURL(files[0]));
    });
 
</script> 
```

## document.body.scrollTop 值总为 0 的解决方法

做页面的时候可能会用到位置固定的层，读取 document.body.scrollTop 来设置层的位置，像这样：

```javascript
window.onscroll = function () {
	var oFix = document.getElementById("divfix");
	oFix.style.top = document.body.scrollTop + "px";
}
```

可是怎么没有达到预期效果呢，输出 document.body.scrollTop 的值一看，一直都是 0。原来是 DTD 的问题,要是页面直接用 <html> 开头的话就没有问题了。但是要符合 web 标准，DTD 当然是不能少的。具有 DTD 时用 document.documentElement.scrollTop 代替 document.body.scrollTop 就可以了。

```javascript
window.onscroll = function () {
   var oFix = document.getElementById("divfix");
   oFix.style.top = document.documentElement.scrollTop + "px";
}
```

页面具有 DTD（或者说指定了 DOCTYPE）时，使用 document.documentElement。

- 页面不具有 DTD（或者说没有指定了 DOCTYPE）时，使用 document.body。

- 在 IE 和 Firefox 中均是如此。

- 为了兼容（不管有没有 DTD），可以使用如下代码：

  ```javascript
  var scrollTop = window.pageYOffset ||document.documentElement.scrollTop  
  || document.body.scrollTop  
  || 0;
  ```

  在标准w3c下，document.body.scrollTop恒为0，需要用document.documentElement.scrollTop来代替;

## touch事件(移动端)

touch是移动端的触摸事件(一组事件)

1. touch是移动端的触摸事件 而且是一组事件
2. touchstart   当手指触摸屏幕的时候触发
3. touchmove    当手指在屏幕来回的滑动时候触发
4. touchend     当手指离开屏幕的时候触发
5. touchcancel  当被迫终止滑动的时候触发（来电，弹消息）
6. 利用touch相关事件实现移动端常见滑动效果和移动端常见的手势事件

使用touch:

1. 绑定事件：box.addEventListener('touchstart',function () { });
2. 事件对象：名字：TouchList------触摸点（一个手指触摸就是一个触发点，和屏幕的接触点的个数）的集合
   changedTouches    改变后的触摸点集合
   targetTouches     当前元素的触摸点集合
   touches           页面上所有触摸点集合
3. .触摸点集合在每个事件触发的时候去记录触摸
   changedTouches 每个事件都会记录
   targetTouches，touches 在离开屏幕的时候无法记录触摸点
4. 分析滑动实现的原理：
   4.1 就是让触摸的元素随着手指的滑动做位置的改变
   4.2 位置的改变：需要当前手指的坐标
   4.3 在每一个触摸点中会记录当前触摸点的坐标 e.touches[0] 第一个触摸点
   4.4 clientX clientY      基于浏览器窗口（视口）
   4.4 pageX   pageY        基于页面（视口）
   4.4 screenX screenY      基于屏幕

## tap事件

1. tap事件  轻击 轻触  （响应速度快）
2. 移动端也有click事件 （在移动为了区分是滑动还是点击，click点击延时300ms）
3. 影响用户体验 响应太慢了。
4. 解决方案：
   4.1 使用tap事件（不是移动端原生事件，通过touch相关事件衍生过来） （zepto.js tap事件）了解其原理
   4.2 使用一个叫：fastclick.js 提供移动端click响应速度的
   4.2.1 下载：https://cdn.bootcss.com/fastclick/1.0.6/fastclick.min.js