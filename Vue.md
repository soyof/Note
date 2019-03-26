- vue移动端绑定click事件失效问题
  原因可能是使用了better-scroll，默认它会阻止touch事件。所以在配置中需要加上click: true

# Vue

​	`vue`：`mvvm` 数据驱动影响视图 适用于复杂数据

​	`jquery`：`mvc` 视图塞入数据 适用于复杂视图动效

## MVVM模式

- M: model  业务模型，用处：处理数据，提供数据

- V: view    用户界面、用户视图

业务模型model中的数据发生改变的时候，用户视图view也随之变化。用户视图view改变的时候，业务模型model中的数据也可以发生改变。

1. 组件化
2. 指令系统
3. Vue.js 2.0开始支持虚拟DOM（Vue.js 1.0 是操作的真是DOM，而不是虚拟DOM）

虚拟DOM可以提升页面的刷新速度



## Vue.js入门

1. 在html页面中引入vue.js

2. 创建一个对象。

   ```javascript
    var app = new Vue({
           el: '.app',    // 声明vue管理边界
           data: {        // data核心作用是存放显示在页面中的数据,是一个对象
               text: 'Fortune favors the bold.....',
               timeId: null
           },
           methods: {
               
           }
       });
   ```

   

3. 在用户界面view中，通过 `{{ }}` 形式将data中的数据显示在页面中。

   - 在用户界面中，`{{ }}` 代码中绑定的data的key，而在页面中显示的是该key的value。

   - Vue.js对获取的data与页面上显示的 `{{ }}` 会产生一种映射关系。

   

## Vue.js指令

### v-text

​	作用：操作元素中的纯文本

​	快捷方式：{{}}

### v-html

​	作用：操作元素中的html

![img](https://images2015.cnblogs.com/blog/1068445/201612/1068445-20161223175748776-595731520.png)

### v-bind

​	作用：v-bind绑定页面中的元素属性。例如：a的href属性，img的src、alt和title属性。缩写 `:`

​	语法：v-bind:元素的属性名 = “data中键名”

​	实现数据的单项绑定,从M 自动绑定到 V , 无法实现数据的双向绑定

![img](https://images2015.cnblogs.com/blog/1068445/201612/1068445-20161223175804448-1603921850.png)

#### 使用class样式

1. 数组

```
<h1 :class="['red', 'thin']">这是一个邪恶的H1</h1>
```

2. 数组中使用三元表达式

```
<h1 :class="['red', 'thin', isactive?'active':'']">这是一个邪恶的H1</h1>
```

3. 数组中嵌套对象

```
<h1 :class="['red', 'thin', {'active': isactive}]">这是一个邪恶的H1</h1>
```

4. 直接使用对象

```
<h1 :class="{red:true, italic:true, active:true, thin:true}">这是一个邪恶的H1</h1>
```

#### 使用内联样式

1. 直接在元素上通过 `:style` 的形式，书写样式对象

```
<h1 :style="{color: 'red', 'font-size': '40px'}">这是一个善良的H1</h1>
```

2. 将样式对象，定义到 `data` 中，并直接引用到 `:style` 中

- 在data上定义样式：

```
data: {
        h1StyleObj: { color: 'red', 'font-size': '40px', 'font-weight': '200' }
}
```

- 在元素中，通过属性绑定的形式，将样式对象应用到元素中：

```
<h1 :style="h1StyleObj">这是一个善良的H1</h1>
```

3. 在 `:style` 中通过数组，引用多个 `data` 上的样式对象

- 在data上定义样式：

```
data: {
        h1StyleObj: { color: 'red', 'font-size': '40px', 'font-weight': '200' },
        h1StyleObj2: { fontStyle: 'italic' }
}
```

- 在元素中，通过属性绑定的形式，将样式对象应用到元素中：

```
<h1 :style="[h1StyleObj, h1StyleObj2]">这是一个善良的H1</h1>
```



### v-model

​	作用：接受用户输入的一些数据，直接就可以将这些数据挂在到data属性上。这样就产生了双向的数据绑定（当业务模型中	的数据发生变化时，用户界面中的数据会发生变化；当用户界面中的数据变化时，业务模型中的数据也会发生变化）。

​	语法：v-model = “data中的键名”

​	在data中，最好也要定义这个属性，不然会报错。



### v-show

​	作用：通过判断，是否显示该内容。如果值为true，则显示。否则就隐藏。

​	语法：v-show=”判断表达式”

​	特点：元素会始终渲染在DOM中，只是被设置了display:none

### **v-if** 

​	作用：判断是否加载固定的内容。如果为真，则加载；为假时，则不加载。

​	用处：用在权限管理，页面条件加载

​	语法：v-if=”判断表达式”

​	特点：控制元素插进来或者删除，而不是隐藏。



> 一般来说，v-if 有更高的切换消耗而 v-show 有更高的初始渲染消耗。因此，如果需要频繁切换 v-show 较好，如果在运行时条件不大可能改变 v-if 较好。





### v-if与v-show的区别：

​	一般来说，v-if有更高的切换消耗，安全性更高，而v-show有更多的初始化渲染消耗。因此，如果需要频繁切换而对安全性无	要求，使用v-show。如果在运行时，条件不可能改变，则使用v-if较好。

​	**v-if**：是真实的条件渲染，切换时销毁和重建，第一次如果判断条件为假，是什么都不做的，官方称为懒惰性。

​	**v-show**：元素始终被编译并保留，只是简单地基于 CSS 切换
​	总结一下， **v-if**有更高的切换消耗而 **v-show**有更高的初始渲染消耗。因此，如果需要频繁切换使用 **v-show**较好，如果在运	行时条件不大可能改变则使用 **v-if**较好。

### v-else

​	v-else必须紧跟在v-if后面，否则他不能被识别。表示：当v-if的条件不成立的时候执行。

### v-for

​	作用：控制html元素中的循环，实现诗句列表的生成。

​	用法：

​	view:

​	v-for=”item in 集合”

 

​	item: 集合的子项

​	集合：被遍历的集合，通常为数组。

​	用处：写在谁上，谁循环。

![img](https://images2015.cnblogs.com/blog/1068445/201612/1068445-20161223175849214-1169307537.png)

![img](https://images2015.cnblogs.com/blog/1068445/201612/1068445-20161223175854995-1855078175.png)

![img](https://images2015.cnblogs.com/blog/1068445/201612/1068445-20161223175908182-387190923.png)

1. 迭代数组

```html
<ul>
  <li v-for="(item, i) in list">索引：{{i}} --- 姓名：{{item.name}} --- 年龄：{{item.age}}</li>
</ul>
```

2. 迭代对象中的属性

```html
	<!-- 循环遍历对象身上的属性 -->

    <div v-for="(val, key, i) in userInfo">{{val}} --- {{key}} --- {{i}}</div>

```

3. 迭代数字

```html
<p v-for="i in 10">这是第 {{i}} 个P标签</p>

```



> 2.2.0+ 的版本里，**当在组件中使用** v-for 时，key 现在是必须的。



当 Vue.js 用 v-for 正在更新已渲染过的元素列表时，它默认用 “**就地复用**” 策略。如果数据项的顺序被改变，Vue将**不是移动 DOM 元素来匹配数据项的顺序**， 而是**简单复用此处每个元素**，并且确保它在特定索引下显示已被渲染过的每个元素。

为了给 Vue 一个提示，**以便它能跟踪每个节点的身份，从而重用和重新排序现有元素**，你需要为每项提供一个唯一 key 属性。



### v-on

​	作用：对页面中的事件进行绑定

​	语法： v-on:事件类型=“事件处理函数名”

​	缩写： @事件类型=“事件处理函数名”

![img](https://images2015.cnblogs.com/blog/1068445/201612/1068445-20161223175914432-203826402.png)

​	用法：

​	在view中，用v-on:事件类型=”methods中的方法名字”

​	在vue实例中，在methods中去监听：也就书写methods的该方法。

![img](https://images2015.cnblogs.com/blog/1068445/201612/1068445-20161223175921073-1423532112.png)



​	Vue 允许为 v-on 在监听键盘事件时添加按键修饰符：

```html
<!-- 只有在 keyCode 是 13 时调用 vm.submit() -->
<input v-on:keyup.13="submit">
```

全部的按键别名：

- enter
- tab
- delete (捕获 “删除” 和 “退格” 键)
- esc
- space
- up
- down
- left
- right

从此再也不用记数字了。并且可以通过全局 config.keyCodes对象[自定义按键修饰符别名](https://cn.vuejs.org/v2/api/#keyCodes)：

```javascript
//可以使用 v-on:keyup.f2
Vue.config.keyCodes.f2= 113 
//要注意是全局对象Vue调用的。
```

新增的可以配合其他操作一起用的键名：

- ctrl
- alt
- shift
- meta

```html
<!-- Alt + C -->
<input @keyup.alt.67="clear">
//？？？试了一下，并不是只有alt+c能触发，只要是最后一个键按得是c，就能触发,会继续关注。
```



### v-pre(跳过，不编译) 

​	跳过这个元素和它的子元素的编译过程。跳过大量没有指令的节点会加快编译。注意这个指令 **不需要表达式**

```html
<span v-pre>{{ this will not be compiled }}</span>

//会连同花括号一直展示出来：{{ this will not be compiled }}
```

### v-cloak（不需要表达式）

​	这个指令保持在元素上直到关联实例结束编译。和 CSS 规则如 [v-cloak] { display: none } 一起用时，这个指令可以隐藏未编	译的 Mustache 标签直到实例准备完毕

### v-once（不需要表达式）

​	只渲染元素和组件一次。随后的重新渲染,元素/组件及其所有的子节点将被视为静态内容并跳过。这可以用于优化更新性能。

元素首次出现因为 `v-once` 属性的存在, 因此将被存放在内存中,从而等到需要的时候再调用,提高性能

### ref

``` html
<div id="app">
    <navbar></navbar>
    <pagefooter></pagefooter>
</div>
<script>
Vue.component('navbar',{
    template:'#navbar',
    data:function () {
        return {
            navs:[]
        }
    }
});

Vue.component('pagefooter',{
    template:'#pagefooter',
    data:function () {
        return {
            footer:''
        }
    }
});
new Vue({
    el:'#app',
    mounted:function () {
        //ready,
        //这里怎么直接访问navbar的navs和pagefooter的footer值呢，
    }
})
</script>
```

这就用到ref了

修改组件

```html
<div id="app">
    <navbar ref="navbar"></navbar>
    <pagefooter ref="pagefooter"></pagefooter>
</div>
<script>
new Vue({
    el:'#app',
    mounted:function () {
        //ready,
        //这里怎么直接访问navbar的navs和pagefooter的footer值呢，
        console.log(this.$refs.navbar.navs);
        console.log(this.$refs.pagefooter.footer);
    }
})
</script>
```

如果仅仅用到一个普通标签上

```html
<div ref="demo"></div>
```

他的作用和：

```javascript
document.querySelector('[ref=demo]');
```

的作用一样

## 事件修饰符

- .stop       阻止冒泡

- .prevent    阻止默认事件

- .capture    添加事件侦听器时使用事件捕获模式

- .self       只当事件在该元素本身（比如不是子元素）触发时触发回调

- .once       事件只触发一次

  ```html
  <!-- 阻止单击事件继续传播 -->
  <a v-on:click.stop="doThis"></a>
  
  <!-- 提交事件不再重载页面 -->
  <form v-on:submit.prevent="onSubmit"></form>
  
  <!-- 修饰符可以串联 -->
  <a v-on:click.stop.prevent="doThat"></a>
  
  <!-- 只有修饰符 -->
  <form v-on:submit.prevent></form>
  
  <!-- 添加事件监听器时使用事件捕获模式 -->
  <!-- 即元素自身触发的事件先在此处理，然后才交由内部元素进行处理 -->
  <div v-on:click.capture="doThis">...</div>
  
  <!-- 只当在 event.target 是当前元素自身时触发处理函数 -->
  <!-- 即事件不是从内部元素触发的 -->
  <div v-on:click.self="doThat">...</div>
  
  <!-- 点击事件将只会触发一次 -->
  <a v-on:click.once="doThis"></a>
  
  <!-- 滚动事件的默认行为 (即滚动行为) 将会立即触发 -->
  <!-- 而不会等待 `onScroll` 完成  -->
  <!-- 这其中包含 `event.preventDefault()` 的情况 -->
  <div v-on:scroll.passive="onScroll">...</div>
  ```

  > 使用修饰符时，顺序很重要；相应的代码会以同样的顺序产生。因此，用 `v-on:click.prevent.self` 会阻止**所有的点击**，而 `v-on:click.self.prevent` 只会阻止对元素自身的点击。

  这个 `.passive` 修饰符尤其能够提升移动端的性能。

  不要把 `.passive` 和 `.prevent` 一起使用，因为 `.prevent` 将会被忽略，同时浏览器可能会向你展示一个警告。请记住，`.passive` 会告诉浏览器你*不*想阻止事件的默认行为。

## 按键修饰符

Vue 允许为 `v-on` 在监听键盘事件时添加按键修饰符：

```html
<!-- 只有在 `key` 是 `Enter` 时调用 `vm.submit()` -->
<input v-on:keyup.enter="submit">
```

为了在必要的情况下支持旧浏览器，Vue 提供了绝大多数常用的按键码的别名：

- `.enter`
- `.tab`
- `.delete` (捕获“删除”和“退格”键)
- `.esc`
- `.space`
- `.up`
- `.down`
- `.left`
- `.right`

有一些按键 (`.esc` 以及所有的方向键) 在 IE9 中有不同的 `key` 值, 如果你想支持 IE9，这些内置的别名应该是首选。

你还可以通过全局 `config.keyCodes` 对象[自定义按键修饰符别名](https://cn.vuejs.org/v2/api/#keyCodes)：

```js
// 可以使用 `v-on:keyup.f1`
Vue.config.keyCodes.f1 = 112
```



## Vue.js的过滤器

1、在Vue中使用过滤器（Filters）来渲染数据是一种很有趣的方式。

2、Vue中的过滤器不能替代Vue中的`methods`、`computed`或者`watch`，

3、过滤器不改变真正的`data`，而只是改变渲染的结果，并返回过滤后的版本。

4、在很多不同的情况下，过滤器都是有用的，比如尽可能保持API响应的干净，并在前端处理数据的格式。

5、在你希望避免重复和连接的情况下，它们也可以有效地封装成可重用代码块背后的所有逻辑。

6、在Vue 2.0中已经没有内置的过滤器了，我们可以自定义过滤器。



Vue.js 允许你自定义过滤器，可被用于一些常见的文本格式化。过滤器可以用在两个地方：**双花括号插值和 v-bind 表达式** (后者从 2.1.0+ 开始支持)。过滤器应该被添加在 JavaScript 表达式的尾部，由“管道”符号指示：

```html
<!-- 在双花括号中 -->
{{ message | capitalize }}

<!-- 在 `v-bind` 中 -->
<div v-bind:id="rawId | formatId"></div>
```

本地过滤器(局部)

```javascript
filters: {
  capitalize: function (value) {
    if (!value) return ''
    value = value.toString()
    return value.charAt(0).toUpperCase() + value.slice(1)
  }
}
```

全局过滤器

```javascript
Vue.filter('capitalize', function (value) {
  if (!value) return ''
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
})

new Vue({
  // ...
})
```

- 过滤器函数总接收表达式的值 (之前的操作链的结果) 作为第一个参数。在上述例子中，`capitalize` 过滤器函数将会收到 `message` 的值作为第一个参数。
- 过滤器可以串联：
  - {{ message | filterA | filterB }}
  - 在这个例子中，`filterA` 被定义为接收单个参数的过滤器函数，表达式 `message` 的值将作为参数传入到函数中。然后继续调用同样被定义为接收单个参数的过滤器函数 `filterB`，将 `filterA` 的结果传递到 `filterB` 中。
- 过滤器是 JavaScript 函数，因此可以接收参数：
  - {{ message | filterA('arg1', arg2) }}
  - 这里，`filterA` 被定义为接收三个参数的过滤器函数。其中 `message` 的值作为第一个参数，普通字符串 `'arg1'` 作为第二个参数，表达式 `arg2` 的值作为第三个参数。



## 自定义指令

### 全局指令

```javascript
// 注册一个全局自定义指令 `v-focus`
Vue.directive('focus', {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function (el) {
    // 聚焦元素
    el.focus()
  }
})          // <input v-focus>  使用
```

### 局部指令

```javascript
directives: {
  focus: {
    // 指令的定义
    inserted: function (el) {
      el.focus()
    }
  }
}              // <input v-focus>  使用
```

 ### 钩子函数

一个指令定义对象可以提供如下几个钩子函数 (均为可选)：

- `bind`：只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。
  - 样式，只要通过指令绑定给了元素，不管这个元素有没有被插入到页面中去，这个元素肯定有了一个内联的样式 , 将来元素肯定会显示到页面中，这时候，浏览器的渲染引擎必然会解析样式，应用给这个元素
- `inserted`：被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)。--(和js有关的操作尽量放在inserted中)
  - `inserted` 表示元素 插入到DOM中的时候，会执行 inserted 函数
- `update`：所在组件的 VNode 更新时调用，**但是可能发生在其子 VNode 更新之前**。指令的值可能发生了改变，也可能没有。但是你可以通过比较更新前后的值来忽略不必要的模板更新

- `componentUpdated`：指令所在组件的 VNode **及其子 VNode** 全部更新后调用。
- `unbind`：只调用一次，指令与元素解绑时调用。

接下来我们来看一下钩子函数的参数 (即 `el`、`binding`、`vnode` 和 `oldVnode`)。

#### 参数

指令钩子函数会被传入以下参数：

- `el`：指令所绑定的元素，可以用来直接操作 DOM 。
- binding：一个对象，包含以下属性：
  - `name`：指令名，不包括 `v-` 前缀。
  - `value`：指令的绑定值，例如：`v-my-directive="1 + 1"` 中，绑定值为 `2`。
  - `oldValue`：指令绑定的前一个值，仅在 `update` 和 `componentUpdated` 钩子中可用。无论值是否改变都可用。
  - `expression`：字符串形式的指令表达式。例如 `v-my-directive="1 + 1"`中，表达式为 `"1 + 1"`。
  - `arg`：传给指令的参数，可选。例如 `v-my-directive:foo` 中，参数为 `"foo"`。
  - `modifiers`：一个包含修饰符的对象。例如：`v-my-directive.foo.bar` 中，修饰符对象为 `{ foo: true, bar: true }`。
- `vnode`：Vue 编译生成的虚拟节点。移步 [VNode API](https://cn.vuejs.org/v2/api/#VNode-%E6%8E%A5%E5%8F%A3) 来了解更多详情。
- `oldVnode`：上一个虚拟节点，仅在 `update` 和 `componentUpdated` 钩子中可用。

除了 `el` 之外，其它参数都应该是只读的，切勿进行修改。如果需要在钩子之间共享数据，建议通过元素的 [`dataset`](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement/dataset) 来进行。

#### 简写

在很多时候，你可能想在 `bind` 和 `update` 时触发相同行为，而不关心其它的钩子。比如这样写:

```javascript
Vue.directive('color-swatch', function (el, binding) {
  el.style.backgroundColor = binding.value
})
// 这个 function 等同于 把 代码写到了 bind 和 update 中去
```

## 实例生命周期(钩子函数)

### 创建阶段

- beforeCreate   
  - 实例完全被创建出来之前，会执行它
  - 在 beforeCreate 生命周期函数执行的时候，data 和 methods 中的 数据都还没有没初始化
- created
  - 在 created 中，data 和 methods 都已经被初始化好了！
  - 要调用 methods 中的方法，或者操作 data 中的数据，最早，只能在 created 中操作
- beforeMount
  - 模板已经在内存中编辑完成了，但是尚未把 模板渲染到 页面中
  - 在 beforeMount 执行的时候，页面中的元素，还没有被真正替换过来，只是之前写的一些模板字符串
- mounted
  - 内存中的模板，已经真实的挂载到了页面中，用户已经可以看到渲染好的页面了
  - mounted 是 实例创建期间的最后一个生命周期函数，当执行完 mounted 就表示，实例已经被完全创建好了，此时，如果没有其它操作的话，这个实例，就静静的 躺在内存中，一动不动

### 运行阶段

- beforeUpdate
  - 当执行到beforeUpdate时,页面显示的数据还是旧的,此时data中的数据是最新的,页面尚未和data数据保持同步
- updated
  - updated 事件执行的时候，页面和 data 数据已经保持同步了，都是最新的

### 销毁阶段

- beforeDestroy
  - 当执行beforeDestroy钩子函数时,Vue实例已经从运行阶段进入到了销毁阶段
  - 此时实例身上所有的data和所有methods,过滤器,指令...等等,都处于可用状态,此时还没有真正执行销毁的过程
- destroyed
  - 当执行destroyed钩子函数时,组件已经完全被销毁了,此时组件中的所有数据,方法,指令...都已不可用

### keep-alive的两个钩子函数

- activated
  - 类型：func
  - 触发时机：keep-alive组件激活时使用；
- deactivated
  - 类型：func
  - 触发时机：keep-alive组件停用时调用；

![](D:\datum\note\lifecycle.png)

## vue-resource 实现 get, post, jsonp请求

除了 vue-resource 之外，还可以使用 `axios` 的第三方包实现实现数据的请求

### JSONP的实现原理

- 由于浏览器的安全性限制，不允许AJAX访问 协议不同、域名不同、端口号不同的 数据接口，浏览器认为这种访问不安全；
- 可以通过动态创建script标签的形式，把script标签的src属性，指向数据接口的地址，因为script标签不存在跨域限制，这种数据获取方式，称作JSONP（注意：根据JSONP的实现原理，知晓，JSONP只支持Get请求）；
- 具体实现过程：

- 先在客户端定义一个回调方法，预定义对数据的操作；
- 再把这个回调方法的名称，通过URL传参的形式，提交到服务器的数据接口；
- 服务器数据接口组织好要发送给客户端的数据，再拿着客户端传递过来的回调方法名称，拼接出一个调用这个方法的字符串，发送给客户端去解析执行；
- 客户端拿到服务器返回的字符串之后，当作Script脚本去解析执行，这样就能够拿到JSONP的数据了；

- 带大家通过 Node.js ，来手动实现一个JSONP的请求例子；

```javascript
    const http = require('http');
    // 导入解析 URL 地址的核心模块
    const urlModule = require('url');

    const server = http.createServer();
    // 监听 服务器的 request 请求事件，处理每个请求
    server.on('request', (req, res) => {
      const url = req.url;

      // 解析客户端请求的URL地址
      var info = urlModule.parse(url, true);

      // 如果请求的 URL 地址是 /getjsonp ，则表示要获取JSONP类型的数据
      if (info.pathname === '/getjsonp') {
        // 获取客户端指定的回调函数的名称
        var cbName = info.query.callback;
        // 手动拼接要返回给客户端的数据对象
        var data = {
          name: 'zs',
          age: 22,
          gender: '男',
          hobby: ['吃饭', '睡觉', '运动']
        }
        // 拼接出一个方法的调用，在调用这个方法的时候，把要发送给客户端的数据，序列化为字符串，作为参数传递给这个调用的方法：
        var result = `${cbName}(${JSON.stringify(data)})`;
        // 将拼接好的方法的调用，返回给客户端去解析执行
        res.end(result);
      } else {
        res.end('404');
      }
    });

    server.listen(3000, () => {
      console.log('server running at http://127.0.0.1:3000');
    });
```



### vue-resource 的配置步骤

- 直接在页面中，通过`script`标签，引入 `vue-resource` 的脚本文件；
- 注意：引用的先后顺序是：先引用 `Vue` 的脚本文件，再引用 `vue-resource` 的脚本文件；
- 发送get请求：

```javascript
getInfo() { // get 方式获取数据
  this.$http.get('http://127.0.0.1:8899/api/getlunbo').then(res => {
    console.log(res.body);
  })
}
```



- 发送post请求：

```javascript
postInfo() {
  var url = 'http://127.0.0.1:8899/api/post';
  // post 方法接收三个参数：
  // 参数1： 要请求的URL地址
  // 参数2： 要发送的数据对象
  // 参数3： 指定post提交的编码类型为 application/x-www-form-urlencoded
  
  
  this.$http.post(url, { name: 'zs' }, { emulateJSON: true }).then(res => {
    console.log(res.body);
  });
}
```



- 发送JSONP请求获取数据

  ```javascript
  jsonpInfo() { // JSONP形式从服务器获取数据
    var url = 'http://127.0.0.1:8899/api/jsonp';
    this.$http.jsonp(url).then(res => {
      console.log(res.body);
    });
  }
  ```

  

## Vue中的动画

### 使用过渡类名

1. HTML结构：

```html
<div id="app">
    <input type="button" value="动起来" @click="myAnimate">
    <!-- 使用 transition 将需要过渡的元素包裹起来 -->
    <transition name="fade">
      <div v-show="isshow">动画哦</div>
    </transition>
  </div>
```



2. VM 实例：

```javascript
// 创建 Vue 实例，得到 ViewModel
var vm = new Vue({
  el: '#app',
  data: {
    isshow: false
  },
  methods: {
    myAnimate() {
      this.isshow = !this.isshow;
    }
  }
});
```



3. 定义两组类样式：

```css
/* 定义进入和离开时候的过渡状态 */
    .fade-enter-active,
    .fade-leave-active {
      transition: all 0.2s ease;
      position: absolute;
    }

/* 定义进入过渡的开始状态 和 离开过渡的结束状态 */
    .fade-enter,
    .fade-leave-to {
      opacity: 0;
      transform: translateX(100px);
    }
```



### [使用第三方 CSS 动画库](https://cn.vuejs.org/v2/guide/transitions.html#自定义过渡类名)

1. 导入动画类库：

```
<link rel="stylesheet" type="text/css" href="./lib/animate.css">
```

2. 定义 transition 及属性：

``` vue
<transition
	enter-active-class="fadeInRight"
    leave-active-class="fadeOutRight"
    appear                                       //  
    appear-active-class="fadeInRight"            //  设置刷新完页面后的动画
    :duration="{ enter: 500, leave: 800 }">
  	<div class="animated" v-show="isshow">动画哦</div>
</transition>

// <transition :duration="1000">...</transition>     设置 入场 和 离场 时候的动画时长

//  使用  :duration="{ enter: 200, leave: 400 }"      分别设置 入场的时长 和 离场的时长
```



### 使用动画钩子函数

```html
<transition
  v-on:before-enter="beforeEnter"
  v-on:enter="enter"
  v-on:after-enter="afterEnter"
  v-on:enter-cancelled="enterCancelled"

  v-on:before-leave="beforeLeave"
  v-on:leave="leave"
  v-on:after-leave="afterLeave"
  v-on:leave-cancelled="leaveCancelled"
>
  <!-- ... -->
</transition>
```

```javascript
// ...
methods: {
  // --------
  // 进入中
  // --------

  beforeEnter: function (el) {
    // ...
  },
  // 当与 CSS 结合使用时
  // 回调函数 done 是可选的
  enter: function (el, done) {
    // ...
    done()
  },
  afterEnter: function (el) {
    // ...
  },
  enterCancelled: function (el) {
    // ...
  },

  // --------
  // 离开时
  // --------

  beforeLeave: function (el) {
    // ...
  },
  // 当与 CSS 结合使用时
  // 回调函数 done 是可选的
  leave: function (el, done) {
    // ...
    done()
  },
  afterLeave: function (el) {
    // ...
  },
  // leaveCancelled 只用于 v-show 中
  leaveCancelled: function (el) {
    // ...
  }
}
```

>  当只用 JavaScript 过渡的时候，**在 enter 和 leave 中必须使用 done 进行回调**。否则，它们将被同步调用，过渡会立即完成

> 推荐对于仅使用 JavaScript 过渡的元素添加 `v-bind:css="false"`，Vue 会跳过 CSS 的检测。这也可以避免过渡过程中 CSS 的影响。

1. 定义 transition 组件以及三个钩子函数：

   ```html
   <div id="app">
       <input type="button" value="切换动画" @click="isshow = !isshow">
       <transition
       @before-enter="beforeEnter"
       @enter="enter"
       @after-enter="afterEnter">
         <div v-if="isshow" class="show">OK</div>
       </transition>
     </div>
   ```

   

2. 定义三个 methods 钩子方法：

```javascript
methods: {
        beforeEnter(el) { // 动画进入之前的回调
          el.style.transform = 'translateX(500px)';
        },
        enter(el, done) { // 动画进入完成时候的回调
          el.offsetWidth;
          el.style.transform = 'translateX(0px)';
          done();
        },
        afterEnter(el) { // 动画进入完成之后的回调
          this.isshow = !this.isshow;
        }
      }
```



3. 定义动画过渡时长和样式：

```
.show{
      transition: all 0.4s ease;
    }
```

### [v-for 的列表过渡](https://cn.vuejs.org/v2/guide/transitions.html#列表的进入和离开过渡)

1. 定义过渡样式：

```css
<style>
    .list-enter,
    .list-leave-to {
      opacity: 0;
      transform: translateY(10px);
    }

    .list-enter-active,
    .list-leave-active {
      transition: all 0.3s ease;
    }
</style>
```



2. 定义DOM结构，其中，需要使用 transition-group 组件把v-for循环的列表包裹起来：

```html
  <div id="app">
    <input type="text" v-model="txt" @keyup.enter="add">

    <transition-group tag="ul" name="list">
      <li v-for="(item, i) in list" :key="i">{{item}}</li>
    </transition-group>
  </div>
```



3. 定义 VM中的结构：

```javascript
    // 创建 Vue 实例，得到 ViewModel
    var vm = new Vue({
      el: '#app',
      data: {
        txt: '',
        list: [1, 2, 3, 4]
      },
      methods: {
        add() {
          this.list.push(this.txt);
          this.txt = '';
        }
      }
    });
```



### 列表的排序过渡

`<transition-group>` 组件还有一个特殊之处。不仅可以进入和离开动画，**还可以改变定位**。要使用这个新功能只需了解新增的 `v-move` 特性，**它会在元素的改变定位的过程中应用**。

- `v-move` 和 `v-leave-active` 结合使用，能够让列表的过渡更加平缓柔和：

```
.v-move{
  transition: all 0.8s ease;
}
.v-leave-active{
  position: absolute;
}
```

- 通过 为 transition-group 元素，设置 tag 属性，指定 transition-group 渲染为指定的元素，如果不指定 tag 属性，默认，渲染为 span 标签
- 给 transition-group 添加 appear 属性，实现页面刚展示出来时候，入场时候的效果
- 要为 v-for 循环创建的元素设置动画，必须为每一个 元素 设置 :key 属性



## Vue组件

- 模块化： 是从代码逻辑的角度进行划分的；方便代码分层开发，保证每个功能模块的职能单一；
- 组件化： 是从UI界面的角度进行划分的；前端的组件化，方便UI组件的重用；

### 全局组件定义的三种方式

1. 使用 Vue.extend 配合 Vue.component 方法：

```javascript
var login = Vue.extend({
      template: '<h1>登录</h1>'
});
Vue.component('login', login);
```



2. 直接使用 Vue.component 方法：

```javascript
Vue.component('register', {
   template: '<h1>注册</h1>'
});
```



3. 将模板字符串，定义到script标签中或者template标签中：(template  Vue提供)

   ```html
   <script id="tmpl" type="x-template">
         <div><a href="#">登录</a> | <a href="#">注册</a></div>
   </script>
   
   
   <template id="tmpl">
         <div><a href="#">登录</a> | <a href="#">注册</a></div>
   </template>
   ```

   



同时，需要使用 Vue.component 来定义组件：

```
Vue.component('account', {
    template: '#tmpl'
});
```

> 注意： 组件中的DOM结构，有且只能有唯一的根元素（Root Element）来进行包裹！

### 组件中展示数据和响应事件

1. 在组件中，`data`需要被定义为一个方法，例如：

```javascript
Vue.component('account', {
      template: '#tmpl',
      data() {
        return {
          msg: '大家好！'
        }
      },
      methods:{
        login(){
          alert('点击了登录按钮');
        }
      }
 });
```



2. 在子组件中，如果将模板字符串，定义到了script标签中，那么，要访问子组件身上的`data`属性中的值，需要使用`this`来访问；

**组件中的data属性必须定义为一个方法并返回一个对象**

### 使用`components`属性定义局部子组件

1. 组件实例定义方式：

```html
<script>
    // 创建 Vue 实例，得到 ViewModel
    var vm = new Vue({
      el: '#app',
      data: {},
      methods: {},
      components: { // 定义子组件
        account: { // account 组件
          template: '<div><h1>这是Account组件{{name}}</h1><login></login></div>', // 在这里使用定义的子组件
          components: { // 定义子组件的子组件
            login: { // login 组件
              template: "<h3>这是登录组件</h3>"
            }
          }
        }
      }
    });
</script>
```



2. 引用组件：

```html
<div id="app">
    <account></account>
</div>
```



### 使用`flag`标识符结合`v-if`和`v-else`切换组件

1. 页面结构：

```html
<div id="app">
    <input type="button" value="toggle" @click="flag=!flag">
    <my-com1 v-if="flag"></my-com1>
    <my-com2 v-else="flag"></my-com2>
</div>
```



2. Vue实例定义：

```javascript
<script>
    Vue.component('myCom1', {
      template: '<h3>奔波霸</h3>'
    })

    Vue.component('myCom2', {
      template: '<h3>霸波奔</h3>'
    })

    // 创建 Vue 实例，得到 ViewModel
    var vm = new Vue({
      el: '#app',
      data: {
        flag: true
      },
      methods: {}
    });
  </script>
```



### 使用`:is`属性来切换不同的子组件,并添加切换动画

1. 组件实例定义方式：

```javascript
  // 登录组件
    const login = Vue.extend({
      template: `<div>
        <h3>登录组件</h3>
      </div>`
    });
    Vue.component('login', login);

    // 注册组件
    const register = Vue.extend({
      template: `<div>
        <h3>注册组件</h3>
      </div>`
    });
    Vue.component('register', register);

    // 创建 Vue 实例，得到 ViewModel
    var vm = new Vue({
      el: '#app',
      data: { comName: 'login' },
      methods: {}
    });
```



2. 使用`component`标签，来引用组件，并通过`:is`属性来指定要加载的组件：

```html
  <div id="app">
    <a href="#" @click.prevent="comName='login'">登录</a>
    <a href="#" @click.prevent="comName='register'">注册</a>
    <hr>
    <transition mode="out-in">   <!--通过 mode 属性,设置组件切换时候的 模式 -->
      <component :is="comName"></component>
    </transition>
  </div>
```



3. 添加切换样式：

```css
  <style>
    .v-enter,
    .v-leave-to {
      opacity: 0;
      transform: translateX(30px);
    }

    .v-enter-active,
    .v-leave-active {
      position: absolute;
      transition: all 0.3s ease;
    }

    h3{
      margin: 0;
    }
  </style>
```

### 父组件向子组件传值

1. 组件实例定义方式，注意：一定要使用`props`属性来定义父组件传递过来的数据

```javascript
// 创建 Vue 实例，得到 ViewModel
    var vm = new Vue({
      el: '#app',
      data: {
        msg: '这是父组件中的消息'
      },
      components: {
        son: {
          template: '<h1>这是子组件 --- {{finfo}}</h1>',
          props: ['finfo']
        }
      }
    });
```



2. 使用`v-bind`或简化指令，将数据传递到子组件中：

```html
<div id="app">
    <son :finfo="msg"></son>
</div>
```



### 子组件向父组件传值

1. 原理：父组件将方法的引用，传递到子组件内部，子组件在内部调用父组件传递过来的方法，同时把要发送给父组件的数据，在调用方法的时候当作参数传递进去；
2. 父组件将方法的引用传递给子组件，其中，`getMsg`是父组件中`methods`中定义的方法名称，`func`是子组件调用传递过来方法时候的方法名称

```html
<son @func="getMsg"></son>
```



3. 子组件内部通过`this.$emit('方法名', 要传递的数据)`方式，来调用父组件中的方法，同时把数据传递给父组件使用

```html
<div id="app">
    <!-- 引用父组件 -->
    <son @func="getMsg"></son>

    <!-- 组件模板定义 -->
    <script type="x-template" id="son">
      <div>
        <input type="button" value="向父组件传值" @click="sendMsg" />
      </div>
    </script>
  </div>

  <script>
    // 子组件的定义方式
    Vue.component('son', {
      template: '#son', // 组件模板Id
      methods: {
        sendMsg() { // 按钮的点击事件
          this.$emit('func', 'OK'); // 调用父组件传递过来的方法，同时把数据传递出去
        }
      }
    });

    // 创建 Vue 实例，得到 ViewModel
    var vm = new Vue({
      el: '#app',
      data: {},
      methods: {
        getMsg(val){ // 子组件中，通过 this.$emit() 实际调用的方法，在此进行定义
          alert(val);
        }
      }
    });
  </script>
```



### 组件中data和props的区别

子组件中的data数据，不是通过父组件传递的        是子组件私有的，是可读可写的。

子组件中的所有 props中的数据，都是通过父组件传递给子组件的，是只读的。



### Prop

父组件再给子组件传值的时候，子组件接收值，子组件会对接收的值进行一些规范约束，主要一下几种方式：

```html
<div id="app">
    <child :content="{a:1}" :msg="123" val="hello world"></child>
</div>

<script>
    Vue.component('child',{
        props:{
            content:Object,//规定必须是对象
            msg:[String,Number],//规定必须是字符串或者数字
            val:{
                type:String,//规定类型必须是字符串
                required:true,//规定必须传这个属性值，如果不传就会报错
                default:'default value',//规定默认值，如果不传值，就显示default规定的值
                validator:function(value){//自定义校验器，这里规定传入的值的长度大于5
                    return (value.length>5)
                }
            }
        },
        template:'<div>{{content}}+{{msg}}+{{val}}</div>'
    })

    var vm = new Vue({
        el:"#app",
    })
</script>
```





### Prop 验证

可以为组件的 prop 指定验证规则。如果传入的数据不符合要求，Vue 会发出警告。这对于开发给他人使用的组件非常有用。

要指定验证规则，需要用对象的形式来定义 prop，而不能用字符串数组：

```javascript
Vue.component('example', {
  props: {
    // 基础类型检测 (`null` 指允许任何类型)
    propA: Number,
    // 可能是多种类型
    propB: [String, Number],
    // 必传且是字符串
    propC: {
      type: String,
      required: true
    },
    // 数值且有默认值
    propD: {
      type: Number,
      default: 100
    },
    // 数组/对象的默认值应当由一个工厂函数返回
    propE: {
      type: Object,
      default: function () {
        return { message: 'hello' }
      }
    },
    // 自定义验证函数
    propF: {
      validator: function (value) {
        return value > 10
      }
    }
  }
})
```

type 可以是下面原生构造器：

- String
- Number
- Boolean
- Function
- Object
- Array
- type 也可以是一个自定义构造器，使用 instanceof 检测。

当 prop 验证失败，Vue 会抛出警告 (如果使用的是开发版本)。注意 prop 会在组件实例创建之前进行校验，所以在 default 或 validator 函数里，诸如 data、computed 或methods 等实例属性还无法使用。



### 非prop的特性

和props特别的主要区别是，props特性可以使用插值的形式获取父组件传递的值，而非props不能，props特性在页面渲染的时候不会显示出来，非props特性是以属性的方式显示在渲染出来的html模板中



### $emit与$on

- var Event = new Vue();
  + 相当于又new了一个vue实例，Event中含有vue的全部方法；

- Event.$emit('msg',this.msg);
  + 发送数据，第一个参数是发送数据的名称，接收时还用这个名字接收，第二个参数是这个数据现在的位置；

- Event.$on('msg',function(msg){}　　
  - 接收数据，第一个参数是数据的名字，与发送时的名字对应，第二个参数是一个方法，要对数据的操作



### slot插槽

#### 单个插槽 | 默认插槽 | 匿名插槽

首先是单个插槽，**单个插槽**是vue的官方叫法，但是其实也可以叫它默认插槽，或者与具名插槽相对，我们可以叫它匿名插槽。因为它不用设置name属性。

单个插槽可以放置在组件的任意位置，但是就像它的名字一样，一个组件中只能有一个该类插槽。相对应的，具名插槽就可以有很多个，只要名字（name属性）不同就可以了。

下面通过一个例子来展示。

父组件：

```html
<template>
    <div class="father">
        <h3>这里是父组件</h3>
        <child>
            <div class="tmpl">
              <span>菜单1</span>
              <span>菜单2</span>
              <span>菜单3</span>
              <span>菜单4</span>
              <span>菜单5</span>
              <span>菜单6</span>
            </div>
        </child>
    </div>
</template>
```

子组件：

```html
<template>
    <div class="child">
        <h3>这里是子组件</h3>
        <slot></slot>
    </div>
</template>
```

在这个例子里，因为父组件在里面写了html模板，那么子组件的**匿名插槽**这块模板就是下面这样。也就是说，子组件的匿名插槽被使用了，是被下面这块模板使用了。

```html
<div class="tmpl">
  <span>菜单1</span>
  <span>菜单2</span>
  <span>菜单3</span>
  <span>菜单4</span>
  <span>菜单5</span>
  <span>菜单6</span>
</div>
```



#### 具名插槽

匿名插槽没有name属性，所以是匿名插槽，那么，插槽加了name属性，就变成了具名插槽。具名插槽可以在一个组件中出现N次，出现在不同的位置。下面的例子，就是一个有两个**具名插槽**和**单个插槽**的组件，这三个插槽被父组件用同一套css样式显示了出来，不同的是内容上略有区别。

父组件：

```html
<template>
  <div class="father">
    <h3>这里是父组件</h3>
    <child>
      <div class="tmpl" slot="up">
        <span>菜单1</span>
        <span>菜单2</span>
        <span>菜单3</span>
        <span>菜单4</span>
        <span>菜单5</span>
        <span>菜单6</span>
      </div>
      <div class="tmpl" slot="down">
        <span>菜单-1</span>
        <span>菜单-2</span>
        <span>菜单-3</span>
        <span>菜单-4</span>
        <span>菜单-5</span>
        <span>菜单-6</span>
      </div>
      <div class="tmpl">
        <span>菜单->1</span>
        <span>菜单->2</span>
        <span>菜单->3</span>
        <span>菜单->4</span>
        <span>菜单->5</span>
        <span>菜单->6</span>
      </div>
    </child>
  </div>
</template>
```

子组件：

```html
<template>
  <div class="child">
    // 具名插槽
    <slot name="up"></slot>
    <h3>这里是子组件</h3>
    // 具名插槽
    <slot name="down"></slot>
    // 匿名插槽
    <slot></slot>
  </div>
</template>
```

可以看到，父组件通过html模板上的slot属性关联具名插槽。没有slot属性的html模板默认关联匿名插槽。

#### 作用域插槽 | 带数据的插槽

最后，就是我们的作用域插槽。这个稍微难理解一点。官方叫它作用域插槽，实际上，对比前面两种插槽，我们可以叫它带数据的插槽。什么意思呢，就是前面两种，都是在组件的template里面写

```html
匿名插槽
<slot></slot>
具名插槽
<slot name="up"></slot>
```

但是**作用域插槽要求，在slot上面绑定数据**。也就是你得写成大概下面这个样子。

```html
<slot name="up" :data="data"></slot>
 export default {
    data: function(){
      return {
        data: ['zhangsan','lisi','wanwu','zhaoliu','tianqi','xiaoba']
      }
    },
}
```

我们前面说了，插槽最后显示不显示是看父组件有没有在child下面写模板，像下面那样。

```html
<child>
   html模板
</child>
```

写了，插槽就总得在浏览器上显示点东西，东西就是html该有的模样，没写，插槽就是空壳子，啥都没有。 OK，我们说有html模板的情况，就是父组件会往子组件插模板的情况，那到底插一套什么样的样式呢，这由父组件的html+css共同决定，但是这套样式里面的内容呢？

正因为作用域插槽绑定了一套数据，父组件可以拿来用。于是，情况就变成了这样：样式父组件说了算，但内容可以显示子组件插槽绑定的。

我们再来对比，作用域插槽跟单个插槽和具名插槽的区别，因为单个插槽和具名插槽不绑定数据，所以父组件提供的模板一般要既包括样式又包括内容，上面的例子中，你看到的文字，“菜单1”，“菜单2”都是父组件自己提供的内容；而作用域插槽，父组件只需要提供一套样式（在确实用作用域插槽绑定的数据的前提下）。

下面的例子，你就能看到，父组件提供了三种样式(分别是flex、ul、直接显示)，都没有提供数据，数据使用的都是子组件插槽自己绑定的那个数组（一堆人名的那个数组）。

父组件：

```html
<template>
  <div class="father">
    <h3>这里是父组件</h3>
    <!--第一次使用：用flex展示数据-->
    <child>
      <template slot-scope="user">
        <div class="tmpl">
          <span v-for="item in user.data">{{item}}</span>
        </div>
      </template>
 
    </child>
 
    <!--第二次使用：用列表展示数据-->
    <child>
      <template slot-scope="user">
        <ul>
          <li v-for="item in user.data">{{item}}</li>
        </ul>
      </template>
 
    </child>
 
    <!--第三次使用：直接显示数据-->
    <child>
      <template slot-scope="user">
       {{user.data}}
      </template>
 
    </child>
 
    <!--第四次使用：不使用其提供的数据, 作用域插槽退变成匿名插槽-->
    <child>
      我就是模板
    </child>
  </div>
</template>
```

子组件：

```html
<template>
  <div class="child">
 
    <h3>这里是子组件</h3>
    // 作用域插槽
    <slot  :data="data"></slot>
  </div>
</template>
 
 export default {
    data: function(){
      return {
        data: ['zhangsan','lisi','wanwu','zhaoliu','tianqi','xiaoba']
      }
    }
}
```





## 在 vue 中使用 vue-router

1. 导入 vue-router 组件类库：

```html
<!-- 1. 导入 vue-router 组件类库 -->
<script src="./lib/vue-router-2.7.0.js"></script>
```



2. 使用 router-link 组件来导航

```html
<!-- 2. 使用 router-link 组件来导航 -->
<router-link to="/login">登录</router-link>
<router-link to="/register">注册</router-link>
```



3. 使用 router-view 组件来显示匹配到的组件

```html
<!-- 3. 使用 router-view 组件来显示匹配到的组件 -->
<router-view></router-view>
```



4. 创建使用`Vue.extend`创建组件

```javascript
    // 4.1 使用 Vue.extend 来创建登录组件
    var login = Vue.extend({
      template: '<h1>登录组件</h1>'
    });

    // 4.2 使用 Vue.extend 来创建注册组件
    var register = Vue.extend({
      template: '<h1>注册组件</h1>'
    });
```



5. 创建一个路由 router 实例，通过 routers 属性来定义路由匹配规则

```javascript
//创建一个路由 router 实例，通过 routers 属性来定义路由匹配规则
    var router = new VueRouter({
      routes: [
        { path: '/login', component: login },
        { path: '/register', component: register }
      ]
    });
```



6. 使用 router 属性来使用路由规则

```javascript
// 创建 Vue 实例，得到 ViewModel
    var vm = new Vue({
      el: '#app',
      router: router // 使用 router 属性来使用路由规则
    });
```



### 使用tag属性指定router-link渲染的标签类型

```html
<!-- 默认生成span标签  使用tag改变标签  -->

<router-link to="/login/5" tag='a'>登录</router-link>
```

### 在路由规则中定义参数

1. 在规则中定义参数：

```javascript
{ path: '/register/:id', component: register }
```



2. 通过 `this.$route.params`来获取路由中的参数：

```javascript
var register = Vue.extend({
      template: '<h1>注册组件 --- {{this.$route.params.id}}</h1>'
});
```

也可通过 `#/xxx?id=5&name=ls` 通过 `this.$route.query.id` 获取参数



### 使用 `children` 属性实现路由嵌套

```html
  <div id="app">
    <router-link to="/account">Account</router-link>

    <router-view></router-view>
  </div>

  <script>
    // 父路由中的组件
    const account = Vue.extend({
      template: `<div>
        这是account组件
        <router-link to="/account/login">login</router-link> | 
        <router-link to="/account/register">register</router-link>
        <router-view></router-view>
      </div>`
    });

    // 子路由中的 login 组件
    const login = Vue.extend({
      template: '<div>登录组件</div>'
    });

    // 子路由中的 register 组件
    const register = Vue.extend({
      template: '<div>注册组件</div>'
    });

    // 路由实例
    var router = new VueRouter({
      routes: [
        { path: '/', redirect: '/account/login' }, // 使用 redirect 实现路由重定向
        {
          path: '/account',
          component: account,
          children: [ // 通过 children 数组属性，来实现路由的嵌套
            { path: 'login', component: login }, // 注意，子路由的开头位置，不要加 / 路径符
            { path: 'register', component: register }
          ]
        }
      ]
    });

    // 创建 Vue 实例，得到 ViewModel
    var vm = new Vue({
      el: '#app',
      data: {},
      methods: {},
      components: {
        account
      },
      router: router
    });
  </script>
```



### 命名视图实现经典布局

1. 标签代码结构：

```html
<div id="app">
    <router-view></router-view>
    <div class="content">
      <router-view name="a"></router-view>
      <router-view name="b"></router-view>
    </div>
</div>
```



2. JS代码：

```javascript

    var header = Vue.component('header', {
      template: '<div class="header">header</div>'
    });

    var sidebar = Vue.component('sidebar', {
      template: '<div class="sidebar">sidebar</div>'
    });

    var mainbox = Vue.component('mainbox', {
      template: '<div class="mainbox">mainbox</div>'
    });

    // 创建路由对象
    var router = new VueRouter({
      routes: [
        {
          path: '/', components: {
            default: header,
            a: sidebar,
            b: mainbox
          }
        }
      ]
    });

    // 创建 Vue 实例，得到 ViewModel
    var vm = new Vue({
      el: '#app',
      data: {},
      methods: {},
      router
    });
```



3. CSS 样式：

```css
    .header {
      border: 1px solid red;
    }

    .content{
      display: flex;
    }
    .sidebar {
      flex: 2;
      border: 1px solid green;
      height: 500px;
    }
    .mainbox{
      flex: 8;
      border: 1px solid blue;
      height: 500px;
    }
```



## `watch`属性的使用

1. 监听`data`中属性的改变：

   ```hmtl
   <div id="app">
       <input type="text" v-model="firstName"> +
       <input type="text" v-model="lastName"> =
       <span>{{fullName}}</span>
     </div>
   
     <script>
       // 创建 Vue 实例，得到 ViewModel
       var vm = new Vue({
         el: '#app',
         data: {
           firstName: 'jack',
           lastName: 'chen',
           fullName: 'jack - chen'
         },
         methods: {},
         watch: {
           'firstName': function (newVal, oldVal) { // 第一个参数是新数据，第二个参数是旧数据
             this.fullName = newVal + ' - ' + this.lastName;
           },
           'lastName': function (newVal, oldVal) {
             this.fullName = this.firstName + ' - ' + newVal;
           }
         }
       });
     </script>
   ```

   

2. 监听路由对象的改变：

```html
<div id="app">
    <router-link to="/login">登录</router-link>
    <router-link to="/register">注册</router-link>

    <router-view></router-view>
  </div>

  <script>
    var login = Vue.extend({
      template: '<h1>登录组件</h1>'
    });

    var register = Vue.extend({
      template: '<h1>注册组件</h1>'
    });

    var router = new VueRouter({
      routes: [
        { path: "/login", component: login },
        { path: "/register", component: register }
      ]
    });

    // 创建 Vue 实例，得到 ViewModel
    var vm = new Vue({
      el: '#app',
      data: {},
      methods: {},
      router: router,
      watch: {
        '$route': function (newVal, oldVal) {
          if (newVal.path === '/login') {
            console.log('这是登录组件');
          }
        }
      }
    });
  </script>
```



## `computed`计算属性的使用

1. 默认只有`getter`的计算属性：

```html
<div id="app">
    <input type="text" v-model="firstName"> +
    <input type="text" v-model="lastName"> =
    <span>{{fullName}}</span>
</div>

<script>
    // 创建 Vue 实例，得到 ViewModel
    var vm = new Vue({
      el: '#app',
      data: {
        firstName: 'jack',
        lastName: 'chen'
      },
      methods: {},
      computed: { // 计算属性； 特点：当计算属性中所以来的任何一个 data 属性改变之后，都会重新触发 本计算属性 的重新计算，从而更新 fullName 的值
        fullName() {
          return this.firstName + ' - ' + this.lastName;
        }
      }
    });
</script>
```



2. 定义有`getter`和`setter`的计算属性：

```html
<div id="app">
    <input type="text" v-model="firstName">
    <input type="text" v-model="lastName">
    <!-- 点击按钮重新为 计算属性 fullName 赋值 -->
    <input type="button" value="修改fullName" @click="changeName">

    <span>{{fullName}}</span>
</div>

<script>
    // 创建 Vue 实例，得到 ViewModel
    var vm = new Vue({
      el: '#app',
      data: {
        firstName: 'jack',
        lastName: 'chen'
      },
      methods: {
        changeName() {
          this.fullName = 'TOM - chen2';
        }
      },
      computed: {
        fullName: {
          get: function () {
            return this.firstName + ' - ' + this.lastName;
          },
          set: function (newVal) {
            var parts = newVal.split(' - ');
            this.firstName = parts[0];
            this.lastName = parts[1];
          }
        }
      }
    });
</script>
```



## `watch`、`computed`和`methods`之间的对比

1. `computed`属性的结果会被缓存，除非依赖的响应式属性变化才会重新计算。主要当作属性来使用；
2. `methods`方法表示一个具体的操作，主要书写业务逻辑；
3. `watch`一个对象，键是需要观察的表达式，值是对应回调函数。主要用来监听某些特定数据的变化，从而进行某些具体的业务逻辑操作；可以看作是`computed`和`methods`的结合体；



## webpack安装的两种方式

1. 运行`npm i webpack -g`全局安装webpack，这样就能在全局使用webpack的命令
2. 在项目根目录中运行`npm i webpack --save-dev`安装到项目依赖中

### 初步使用webpack打包构建列表隔行变色案例

1. 运行`npm init`初始化项目，使用npm管理项目中的依赖包
2. 创建项目基本的目录结构
3. 使用`cnpm i jquery --save`安装jquery类库
4. 创建`main.js`并书写各行变色的代码逻辑：

```
	// 导入jquery类库
    import $ from 'jquery'

    // 设置偶数行背景色，索引从0开始，0是偶数
    $('#list li:even').css('backgroundColor','lightblue');
    // 设置奇数行背景色
    $('#list li:odd').css('backgroundColor','pink');
```

5. 直接在页面上引用`main.js`会报错，因为浏览器不认识`import`这种高级的JS语法，需要使用webpack进行处理，webpack默认会把这种高级的语法转换为低级的浏览器能识别的语法；
6. 运行`webpack 入口文件路径 输出文件路径`对`main.js`进行处理：

```
webpack src/js/main.js dist/bundle.js
```

### 使用webpack的配置文件简化打包时候的命令

1. 在项目根目录中创建`webpack.config.js`
2. 由于运行webpack命令的时候，webpack需要指定入口文件和输出文件的路径，所以，我们需要在`webpack.config.js`中配置这两个路径：

```javascript
// 导入处理路径的模块
var path = require('path');

// 导出一个配置对象，将来webpack在启动的时候，会默认来查找webpack.config.js，并读取这个文件中导出的配置对象，来进行打包处理
module.exports = {
  entry: path.resolve(__dirname, 'src/js/main.js'), // 项目入口文件
  output: { // 配置输出选项
      path: path.resolve(__dirname, 'dist'), // 配置输出的路径
      filename: 'bundle.js' // 配置输出的文件名
  }
}
```



### 实现webpack的实时打包构建

1. 由于每次重新修改代码之后，都需要手动运行webpack打包的命令，比较麻烦，所以使用`webpack-dev-server`来实现代码实时打包编译，当修改代码之后，会自动进行打包构建。
2. 运行`cnpm i webpack-dev-server --save-dev`安装到开发依赖
3. 安装完成之后，在命令行直接运行`webpack-dev-server`来进行打包，发现报错，此时需要借助于`package.json`文件中的指令，来进行运行`webpack-dev-server`命令，在`scripts`节点下新增`"dev": "webpack-dev-server"`指令，发现可以进行实时打包，但是dist目录下并没有生成`bundle.js`文件，这是因为`webpack-dev-server`将打包好的文件放在了内存中

- 把`bundle.js`放在内存中的好处是：由于需要实时打包编译，所以放在内存中速度会非常快
- 这个时候访问webpack-dev-server启动的`http://localhost:8080/`网站，发现是一个文件夹的面板，需要点击到src目录下，才能打开我们的index首页，此时引用不到bundle.js文件，需要修改index.html中script的src属性为:`<script src="../bundle.js"></script>`
- 为了能在访问`http://localhost:8080/`的时候直接访问到index首页，可以使用`--contentBase src`指令来修改dev指令，指定启动的根目录：

```javascript
 "dev": "webpack-dev-server --contentBase src"
```

 同时修改index页面中script的src属性为`<script src="bundle.js"></script>`

### 使用`html-webpack-plugin`插件配置启动页面

由于使用`--contentBase`指令的过程比较繁琐，需要指定启动的目录，同时还需要修改index.html中script标签的src属性，所以推荐大家使用`html-webpack-plugin`插件配置启动页面.

1. 运行`cnpm i html-webpack-plugin --save-dev`安装到开发依赖
2. 修改`webpack.config.js`配置文件如下：

```javascript
// 导入处理路径的模块
var path = require('path');
// 导入自动生成HTMl文件的插件
var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, 'src/js/main.js'), // 项目入口文件
    output: { // 配置输出选项
        path: path.resolve(__dirname, 'dist'), // 配置输出的路径
        filename: 'bundle.js' // 配置输出的文件名
    },
    plugins:[ // 添加plugins节点配置插件
        new htmlWebpackPlugin({
            template:path.resolve(__dirname, 'src/index.html'),//模板路径
            filename:'index.html'//自动生成的HTML文件的名称
        })
    ]
}
```

3. 修改`package.json`中`script`节点中的dev指令如下：

```javascript
"dev": "webpack-dev-server"
```

4. 将index.html中script标签注释掉，因为`html-webpack-plugin`插件会自动把bundle.js注入到index.html页面中！

### 实现自动打开浏览器、热更新和配置浏览器的默认端口号

**注意：热更新在JS中表现的不明显，可以从一会儿要讲到的CSS身上进行介绍说明！**

#### 方式1：

- 修改`package.json`的script节点如下，其中`--open`表示自动打开浏览器，`--port 4321`表示打开的端口号为4321，`--hot`表示启用浏览器热更新：

```javascript
"dev": "webpack-dev-server --hot --port 4321 --open"
```



#### 方式2：

1. 修改`webpack.config.js`文件，新增`devServer`节点如下：

```javascript
devServer:{
        hot:true,
        open:true,
        port:4321
    }
```



2. 在头部引入`webpack`模块：

```javascript
var webpack = require('webpack');
```

3. 在`plugins`节点下新增：

```javascript
new webpack.HotModuleReplacementPlugin()
```



### 使用webpack打包css文件

1. 运行`cnpm i style-loader css-loader --save-dev`
2. 修改`webpack.config.js`这个配置文件：

```javascript
module: { // 用来配置第三方loader模块的
        rules: [ // 文件的匹配规则
            { test: /\.css$/, use: ['style-loader', 'css-loader'] }//处理css文件的规则
        ]
    }
```

3. 注意：`use`表示使用哪些模块来处理`test`所匹配到的文件；`use`中相关loader模块的调用顺序是从后向前调用的；

### 使用webpack打包less文件

1. 运行`cnpm i less-loader less -D`
2. 修改`webpack.config.js`这个配置文件：

```json
{ test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] }
```

### 使用webpack打包sass文件

1. 运行`cnpm i sass-loader node-sass --save-dev`
2. 在`webpack.config.js`中添加处理sass文件的loader模块：

```javascript
{ test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] }
```

### 使用webpack处理css中的路径

1. 运行`cnpm i url-loader file-loader --save-dev`
2. 在`webpack.config.js`中添加处理url路径的loader模块：

```javascript
{ test: /\.(png|jpg|gif)$/, use: 'url-loader' }
```

3. 可以通过`limit`指定进行base64编码的图片大小；只有小于指定字节（byte）的图片才会进行base64编码：

```javascript
{ test: /\.(png|jpg|gif)$/, use: 'url-loader?limit=43960' }
```

4.   处理 字体文件的 loader 

```javascript
{ test: /\.(woff|woff2|svf|eof|ttf)/, use: ['url-loader'] }
```



### 使用babel处理高级JS语法

1. 运行`cnpm i babel-core babel-loader babel-plugin-transform-runtime --save-dev`安装babel的相关loader包
2. 运行`cnpm i babel-preset-env babel-preset-stage-0 --save-dev`安装babel转换的语法
3. 在`webpack.config.js`中添加相关loader模块，其中需要注意的是，一定要把`node_modules`文件夹添加到排除项：

```javascript
{ test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ }
```

4. 在项目根目录中添加`.babelrc`文件，并修改这个配置文件如下：

```javascript
{
    "presets":["env", "stage-0"],
    "plugins":["transform-runtime"]
}
```

5. **注意：语法插件`babel-preset-es2015`可以更新为`babel-preset-env`，它包含了所有的ES相关的语法；**

在 webpack 中，默认只能处理 一部分 ES6 的新语法，一些更高级的ES6语法或者 ES7 语法，webpack 是处理不了的；这时候，就需要 借助于第三方的 loader，来帮助webpack 处理这些高级的语法，当第三方loader 把 高级语法转为 低级的语法之后，会把结果交给 webpack 去打包到 bundle.js 中
通过 Babel ，可以帮我们将 高级的语法转换为 低级的语法

1. 在 webpack 中，可以运行如下两套 命令，安装两套包，去安装 Babel 相关的loader功能：
    1.1 第一套包：` cnpm i babel-core babel-loader babel-plugin-transform-runtime -D`
    1.2 第二套包：` cnpm i babel-preset-env babel-preset-stage-0 -D`
2. 打开 webpack 的配置文件，在 module 节点下的 rules 数组中，添加一个 新的 匹配规则：
    2.1` { test:/\.js$/, use: 'babel-loader', exclude:/node_modules/ }`
    2.2 注意： 在配置 babel 的 loader规则的时候，必须 把 node_modules 目录，通过 exclude 选项排除掉：原因有俩：
    2.2.1 如果 不排除 node_modules， 则Babel 会把 node_modules 中所有的 第三方 JS 文件，都打包编译，这样，会非常消耗CPU，同时，打包速度非常慢；
    2.2.2 哪怕，最终，Babel 把 所有 node_modules 中的JS转换完毕了，但是，项目也无法正常运行！
3. 在项目的 根目录中，新建一个 叫做 .babelrc  的Babel 配置文件，这个配置文件，属于JSON格式，所以，在写 .babelrc 配置的时候，必须符合JSON语法规范： 不能写注释，字符串必须用双引号
    3.1 在 .babelrc 写如下的配置：  大家可以把 preset 翻译成 【语法】 的意思
       {
         "presets": ["env", "stage-0"],
         "plugins": ["transform-runtime"]
       }
4. 了解： 目前，我们安装的 babel-preset-env, 是比较新的ES语法， 之前， 我们安装的是 babel-preset-es2015, 现在，出了一个更新的 语法插件，叫做 babel-preset-env ，它包含了 所有的 和 es***相关的语法



## 在webpack中配置.vue组件页面的解析

1. 运行`cnpm i vue -S`将vue安装为运行依赖；
2. 运行`cnpm i vue-loader vue-template-compiler -D`将解析转换vue的包安装为开发依赖；
3. 运行`cnpm i style-loader css-loader -D`将解析转换CSS的包安装为开发依赖，因为.vue文件中会写CSS样式；
4. 在`webpack.config.js`中，添加如下`module`规则：

```javascript
module: {

    rules: [

      { test: /\.css$/, use: ['style-loader', 'css-loader'] },

      { test: /\.vue$/, use: 'vue-loader' }

    ]

  }
```



1. 创建`App.vue`组件页面：

```vue
    <template>

      <!-- 注意：在 .vue 的组件中，template 中必须有且只有唯一的根元素进行包裹，一般都用 div 当作唯一的根元素 -->
          <div>

            <h1>这是APP组件 - {{msg}}</h1>

            <h3>我是h3</h3>

          </div>

    </template>


    <script>

    // 注意：在 .vue 的组件中，通过 script 标签来定义组件的行为，需要使用 ES6 中提供的 export default 方式，导出一个vue实例对象
        export default {

          data() {

            return {

              msg: 'OK'

            }
          }
        }

    </script>



    <style scoped>

        h1 {

          color: red;

        }

    </style>
```



6. 创建`main.js`入口文件：

```javascript
    // 导入 Vue 组件

    import Vue from 'vue'



    // 导入 App组件

    import App from './components/App.vue'



    // 创建一个 Vue 实例，使用 render 函数，渲染指定的组件

    var vm = new Vue({

      el: '#app',

      render: c => c(App)

    });

```



## 在使用webpack构建的Vue项目中使用模板对象

1. 在`webpack.config.js`中添加`resolve`属性：

```javascript
resolve: {    //  修改 Vue 被导入时候的包的路径
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
}
```





## ES6中语法使用总结

1. 使用 `export default` 和 `export` 导出模块中的成员; 对应node中的 `module.exports` 和 `export`
2. 使用 `import ** from **` 和 `import '路径'` 还有 `import {a, b} from '模块标识'` 导入其他模块
3. 使用箭头函数：`(a, b)=> { return a-b; }`

- 在 ES6 中，使用 export default 和 export 向外暴露成员：

- export default

  - 注意： export default 向外暴露的成员，可以使用任意的变量来接收
  - 注意： 在一个模块中，export default 只允许向外暴露1次
  - 注意： 在一个模块中，可以同时使用 export default 和 export 向外暴露成员

- export

  - 注意： 使用 export 向外暴露的成员，只能使用 { } 的形式来接收，这种形式，叫做 【按需导出】
  - 注意： export 可以向外暴露多个成员， 同时，如果某些成员，我们在 import 的时候，不需要，则可以 不在 {}  中定义
  - 注意： 使用 export 导出的成员，必须严格按照 导出时候的名称，来使用  {}  按需接收；
  - 注意： 使用 export 导出的成员，如果 就想 换个 名称来接收，可以使用 as 来起别名；

- 接收所导出的成员

  ```javascript
  import m222, { title as title123, content } from './test.js'
  
  // m222  表示接收  export default 导出的成员,名称自定义即可
  // { title as title123, content }  表示 export 导出的成员  必须和定义时名称一致,需要更改名称用 as
  ```

  



总结梳理： webpack 中如何使用 vue :
1. 安装vue的包：  cnpm i vue -S
2. 由于 在 webpack 中，推荐使用 .vue 这个组件模板文件定义组件，所以，需要安装 能解析这种文件的 loader    cnpm i vue-loader vue-template-complier -D
3. 在 main.js 中，导入 vue 模块  import Vue from 'vue'
4. 定义一个 .vue 结尾的组件，其中，组件有三部分组成： template script style
5. 使用 import login from './login.vue' 导入这个组件
6. 创建 vm 的实例 var vm = new Vue({ el: '#app', render: c => c(login) })
7. 在页面中创建一个 id 为 app 的 div 元素，作为我们 vm 实例要控制的区域；





## 在vue组件页面中，集成vue-router路由模块

[vue-router官网](https://router.vuejs.org/)

1. 导入路由模块：

```javascript
import VueRouter from 'vue-router'
```



2. 安装路由模块：

```javascript
Vue.use(VueRouter);
```



3. 导入需要展示的组件:

```javascript
import login from './components/account/login.vue'

import register from './components/account/register.vue'
```



4. 创建路由对象:

```javascript
var router = new VueRouter({

  routes: [

    { path: '/', redirect: '/login' },

    { path: '/login', component: login },

    { path: '/register', component: register }

  ]

});

```



5. 将路由对象，挂载到 Vue 实例上:

```javascript
var vm = new Vue({

  el: '#app',

  // render: c => { return c(App) }

  render(c) {

    return c(App);

  },

  router // 将路由对象，挂载到 Vue 实例上

});
```



6. 改造App.vue组件，在 template 中，添加`router-link`和`router-view`：

```vue
<router-link to="/login">登录</router-link>

<router-link to="/register">注册</router-link>


<router-view></router-view>
```



- 组件中的css作用域问题
  - scoped  表示在当前作用域及其子代作用域生效
  - lang 可以选择需要编译的语言  `lang="scss"`    ` lang="less"`

## vueX

配置vuex的步骤
1. 运行 cnpm i vuex -S 

2. 导入包

   ```javascript
   import Vuex from 'vuex'
   ```

3. 注册vuex到vue中

   ```javascript
   Vue.use(Vuex)
   ```

4. new Vuex.Store() 实例，得到一个 数据仓储对象

   ```javascript
   var store = new Vuex.Store({
     state: {
       // 大家可以把 state 想象成 组件中的 data ,专门用来存储数据的
       // 如果在 组件中，想要访问，store 中的数据，只能通过 this.$store.state.*** 来访问
       count: 0
     },
     mutations: {
       // 注意： 如果要操作 store 中的 state 值，只能通过 调用 mutations 提供的方法，才能操作对应的数据，不推荐直接操作 state 中的数据，因为 万一导致了数据的紊乱，不能快速定位到错误的原因，因为，每个组件都可能有操作数据的方法；
       increment(state) {
         state.count++
       },
       // 注意： 如果组件想要调用 mutations 中的方法，只能使用 this.$store.commit('方法名')
       // 这种 调用 mutations 方法的格式，和 this.$emit('父组件中方法名')
       subtract(state, obj) {
         // 注意： mutations 的 函数参数列表中，最多支持两个参数，其中，参数1： 是 state 状态； 参数2： 通过 commit 提交过来的参数；
         console.log(obj)
         state.count -= (obj.c + obj.d)
       }
     },
     getters: {
       // 注意：这里的 getters， 只负责 对外提供数据，不负责 修改数据，如果想要修改 state 中的数据，请 去找 mutations
       optCount: function (state) {
         return '当前最新的count值是：' + state.count
       }
       // 经过咱们回顾对比，发现 getters 中的方法， 和组件中的过滤器比较类似，因为 过滤器和 getters 都没有修改原数据， 都是把原数据做了一层包装，提供给了 调用者；
       // 其次， getters 也和 computed 比较像， 只要 state 中的数据发生变化了，那么，如果 getters 正好也引用了这个数据，那么 就会立即触发 getters 的重新求值；
     }
   })
   ```

5. 将 vuex 创建的 store 挂载到 VM 实例上， 只要挂载到了 vm 上，任何组件都能使用 store 来存取数据

总结：
1. state中的数据，不能直接修改，如果想要修改，必须通过 mutations
2. 如果组件想要直接 从 state 上获取数据： 需要 this.$store.state.***
3. 如果 组件，想要修改数据，必须使用 mutations 提供的方法，需要通过 this.$store.commit('方法的名称'， 唯一的一个参数)
4. 如果 store 中 state 上的数据， 在对外提供的时候，需要做一层包装，那么 ，推荐使用 getters, 如果需要使用 getters ,则用 this.$store.getters.***

## axios

Axios 各种方法传递参数 Demo (整理一下，总是忘记。)


get 和 delete 方法较为不同


axios.get(url[, config])

axios.delete(url[, config])

axios.post(url[, data[, config]])

axios.put(url[, data[, config]])

axios.patch(url[, data[, config]])

### GET方法

```javascript
Axios.get('demo/url', {
    params: {
        id: 123,
        name: 'Henry',
        sex: 1,
        phone: 13333333
    }
})
```



### DELETE方法

```javascript
Axios.delete('demo/url', {
    data: {
        id: 123,
        name: 'Henry',
        sex: 1,
        phone: 13333333
    }
})
```



### POST方法

```javascript

Axios.post('demo/url', {
    id: 123,
    name: 'Henry',
    sex: 1,
    phone: 13333333
})
```



### PUT方法

```javascript
Axios.put('demo/url', {
    id: 123,
    name: 'Henry',
    sex: 1,
    phone: 13333333
})
```



### PATCH方法

```javascript
Axios.patch('demo/url', {
    id: 123,
    name: 'Henry',
    sex: 1,
    phone: 13333333
})
```

