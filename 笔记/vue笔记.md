```javascript
$("#gbin1-text").show(0).delay(1000).hide(0);  // 正常
$("#gbin1-text").show().delay(1000).hide();  // 异常  直接执行hide()
```

分析:  delay()方法将会允许其它在特效队列中的方法延迟执行，只有一个队列中的子事件才可以被延迟，例如，这个方法不会延迟没有参数的方法，因为没有参数的方法不使用特效的队列。



由于 JavaScript 的限制，Vue 不能检测到以下数组的变动：

- 当你利用索引直接设置一个数组项时，例如：`vm.items[indexOfItem] = newValue`
- 当你修改数组的长度时，例如：`vm.items.length = newLength`

为了解决第一个问题，Vue 提供了以下操作方法：

```javascript
// Vue.set
Vue.set(vm.items, indexOfItem, newValue)
// vm.$set，Vue.set的一个别名
vm.$set(vm.items, indexOfItem, newValue)
// Array.prototype.splice
vm.items.splice(indexOfItem, 1, newValue)
复制代码
```

为了解决第二个问题，Vue 提供了以下操作方法：

```javascript
// Array.prototype.splice
vm.items.splice(newLength)
```

## Vue 的父组件和子组件生命周期钩子函数执行顺序？

Vue 的父组件和子组件生命周期钩子函数执行顺序可以归类为以下 4 部分：

- 加载渲染过程

  父 beforeCreate -> 父 created -> 父 beforeMount -> 子 beforeCreate -> 子 created -> 子 beforeMount -> 子 mounted -> 父 mounted

- 子组件更新过程

  父 beforeUpdate -> 子 beforeUpdate -> 子 updated -> 父 updated

- 父组件更新过程

  父 beforeUpdate -> 父 updated

- 销毁过程

  父 beforeDestroy -> 子 beforeDestroy -> 子 destroyed -> 父 destroyed

在 created 钩子函数中调用异步请求有以下优点：

- 能更快获取到服务端数据，减少页面 loading 时间；
- ssr 不支持 beforeMount 、mounted 钩子函数，所以放在 created 中有助于一致性；



## 父组件可以监听到子组件的生命周期吗？

比如有父组件 Parent 和子组件 Child，如果父组件监听到子组件挂载 mounted 就做一些逻辑处理，可以通过以下写法实现：

```
// Parent.vue
<Child @mounted="doSomething"/>
    
// Child.vue
mounted() {
  this.$emit("mounted");
}
```

以上需要手动通过 $emit 触发父组件的事件，更简单的方式可以在父组件引用子组件时通过 @hook 来监听即可，如下所示：

```
//  Parent.vue
<Child @hook:mounted="doSomething" ></Child>

doSomething() {
   console.log('父组件监听到 mounted 钩子函数 ...');
},
    
//  Child.vue
mounted(){
   console.log('子组件触发 mounted 钩子函数 ...');
},    
    
// 以上输出顺序为：
// 子组件触发 mounted 钩子函数 ...
// 父组件监听到 mounted 钩子函数 ...     
复制代码
```

当然 @hook 方法不仅仅是可以监听 mounted，其它的生命周期事件，例如：created，updated 等都可以监听

## 组件中 data 为什么是一个函数？

> 为什么组件中的 data 必须是一个函数，然后 return 一个对象，而 new Vue 实例里，data 可以直接是一个对象？

因为组件是用来复用的，且 JS 里对象是引用关系，如果组件中 data 是一个对象，那么这样作用域没有隔离，子组件中的 data 属性值会相互影响，如果组件中 data 选项是一个函数，那么每个实例可以维护一份被返回对象的独立的拷贝，组件实例之间的 data 属性值不会互相影响；而 new Vue 的实例，是不会被复用的，因此不存在引用对象的问题。



## Vue 组件间通信有哪几种方式？

**（1）props / $emit  适用 父子组件通信**

这种方法是 Vue 组件的基础，相信大部分同学耳闻能详，所以此处就不举例展开介绍。

**（2）ref 与 $parent / $children 适用 父子组件通信**

- `ref`：如果在普通的 DOM 元素上使用，引用指向的就是 DOM 元素；如果用在子组件上，引用就指向组件实例
- `$parent` / `$children`：访问父 / 子实例

**（3）EventBus （$emit / $on）  适用于 父子、隔代、兄弟组件通信**

这种方法通过一个空的 Vue 实例作为中央事件总线（事件中心），用它来触发事件和监听事件，从而实现任何组件间的通信，包括父子、隔代、兄弟组件。

**（4）$attrs/$listeners 适用于 隔代组件通信**

- `$attrs`：包含了父作用域中不被 prop 所识别 (且获取) 的特性绑定 ( class 和 style 除外 )。当一个组件没有声明任何 prop 时，这里会包含所有父作用域的绑定 ( class 和 style 除外 )，并且可以通过 `v-bind="$attrs"` 传入内部组件。通常配合 inheritAttrs 选项一起使用。
- `$listeners`：包含了父作用域中的 (不含 .native 修饰器的)  v-on 事件监听器。它可以通过 `v-on="$listeners"` 传入内部组件

**（5）provide / inject 适用于 隔代组件通信**

祖先组件中通过 provider 来提供变量，然后在子孙组件中通过 inject 来注入变量。 provide / inject API 主要解决了跨级组件间的通信问题，不过它的使用场景，主要是子组件获取上级组件的状态，跨级组件间建立了一种主动提供与依赖注入的关系。

**（6）Vuex  适用于 父子、隔代、兄弟组件通信**

Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。每一个 Vuex 应用的核心就是 store（仓库）。“store” 基本上就是一个容器，它包含着你的应用中大部分的状态 ( state )。

- Vuex 的状态存储是响应式的。当 Vue 组件从 store 中读取状态的时候，若 store 中的状态发生变化，那么相应的组件也会相应地得到高效更新。
- 改变 store 中的状态的唯一途径就是显式地提交  (commit) mutation。这样使得我们可以方便地跟踪每一个状态的变化。





## 路由懒加载

```
const Foo = () => import('./Foo.vue')
const router = new VueRouter({
  routes: [
    { path: '/foo', component: Foo }
  ]
})
```

## 第三方插件的按需引入

我们在项目中经常会需要引入第三方插件，如果我们直接引入整个插件，会导致项目的体积太大，我们可以借助 `babel-plugin-component` ，然后可以只引入需要的组件，以达到减小项目体积的目的。以下为项目中引入 element-ui 组件库为例：

（1）首先，安装 `babel-plugin-component` ：

```
npm install babel-plugin-component -D
```

（2）然后，将 .babelrc 修改为：

```
{
  "presets": [["es2015", { "modules": false }]],
  "plugins": [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}
```

（3）在 main.js 中引入部分组件：

```
import Vue from 'vue';
import { Button, Select } from 'element-ui';

 Vue.use(Button)
 Vue.use(Select)
```

## Webpack 对图片进行压缩

在 vue 项目中除了可以在 `webpack.base.conf.js` 中 url-loader 中设置 limit 大小来对图片处理，对小于 limit 的图片转化为 base64 格式，其余的不做操作。所以对有些较大的图片资源，在请求资源的时候，加载会很慢，我们可以用 `image-webpack-loader`来压缩图片：

（1）首先，安装 image-webpack-loader  ：

```
npm install image-webpack-loader --save-dev
```

（2）然后，在 webpack.base.conf.js  中进行配置：

```
{
  test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
  use:[
    {
    loader: 'url-loader',
    options: {
      limit: 10000,
      name: utils.assetsPath('img/[name].[hash:7].[ext]')
      }
    },
    {
      loader: 'image-webpack-loader',
      options: {
        bypassOnDebug: true,
      }
    }
  ]
}
```

## 减少 ES6 转为 ES5 的冗余代码

Babel 插件会在将 ES6 代码转换成 ES5 代码时会注入一些辅助函数，例如下面的 ES6 代码：

```
class HelloWebpack extends Component{...}
```

这段代码再被转换成能正常运行的 ES5 代码时需要以下两个辅助函数：

```
babel-runtime/helpers/createClass  // 用于实现 class 语法
babel-runtime/helpers/inherits  // 用于实现 extends 语法   
```

在默认情况下， Babel 会在每个输出文件中内嵌这些依赖的辅助函数代码，如果多个源代码文件都依赖这些辅助函数，那么这些辅助函数的代码将会出现很多次，造成代码冗余。为了不让这些辅助函数的代码重复出现，可以在依赖它们时通过 `require('babel-runtime/helpers/createClass')` 的方式导入，这样就能做到只让它们出现一次。`babel-plugin-transform-runtime` 插件就是用来实现这个作用的，将相关辅助函数进行替换成导入语句，从而减小 babel 编译出来的代码的文件大小。

（1）首先，安装 `babel-plugin-transform-runtime` ：

```
npm install babel-plugin-transform-runtime --save-dev
```

（2）然后，修改 .babelrc  配置文件为：

```
"plugins": [
    "transform-runtime"
]
```

## 提取公共代码

如果项目中没有去将每个页面的第三方库和公共模块提取出来，则项目会存在以下问题：

- 相同的资源被重复加载，浪费用户的流量和服务器的成本。
- 每个页面需要加载的资源太大，导致网页首屏加载缓慢，影响用户体验。

所以我们需要将多个页面的公共代码抽离成单独的文件，来优化以上问题 。Webpack 内置了专门用于提取多个Chunk 中的公共部分的插件 CommonsChunkPlugin，我们在项目中 CommonsChunkPlugin 的配置如下：

```
// 所有在 package.json 里面依赖的包，都会被打包进 vendor.js 这个文件中。
new webpack.optimize.CommonsChunkPlugin({
  name: 'vendor',
  minChunks: function(module, count) {
    return (
      module.resource &&
      /\.js$/.test(module.resource) &&
      module.resource.indexOf(
        path.join(__dirname, '../node_modules')
      ) === 0
    );
  }
}),
// 抽取出代码模块的映射关系
new webpack.optimize.CommonsChunkPlugin({
  name: 'manifest',
  chunks: ['vendor']
})
```

## 开启 gzip 压缩

gzip 是 GNUzip 的缩写，最早用于 UNIX 系统的文件压缩。HTTP 协议上的 gzip 编码是一种用来改进 web 应用程序性能的技术，web 服务器和客户端（浏览器）必须共同支持 gzip。目前主流的浏览器，Chrome，firefox，IE等都支持该协议。常见的服务器如 Apache，Nginx，IIS 同样支持，gzip 压缩效率非常高，通常可以达到 70% 的压缩率，也就是说，如果你的网页有 30K，压缩之后就变成了 9K 左右

以下我们以服务端使用我们熟悉的 express 为例，开启 gzip 非常简单，相关步骤如下：

- 安装：

```
npm install compression --save
```

- 添加代码逻辑：

```
var compression = require('compression');
var app = express();
app.use(compression())
```

- 重启服务，观察网络面板里面的 response header，如果看到如下红圈里的字段则表明 gzip 开启成功 ：

  

  ![1.png](https://user-gold-cdn.xitu.io/2019/8/15/16c924653ef48d24?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)





TortoiseGit密钥的配置
TortoiseGit使用扩展名为ppk的密钥，而不是ssh-keygen生成的rsa密钥。也就是说使用ssh-keygen -t rsa -C "yourname@yourcompany.com"产生的密钥在TortoiseGit中不能用。而基于github的开发必须要用到rsa密钥，因此需要用到TortoiseGit的putty key generator工具来生成既适用于github的rsa密钥也适用于TortoiseGit的ppk密钥，配置步骤如下：

1、运行TortoiseGit开始菜单中的Puttygen程序

2、点击“Generate”按钮，鼠标在上图的空白地方来回移动直到进度条完毕，就会自动生一个随机的key

3、为密钥设置对应的访问密码，在“Key passphrase”和“Confirm passphrase”的后面的输入框中输入密码

4、将多行文本框中以“ssh-rsa”开头的内容全选、复制，并粘贴到github的 Account Settings -> SSH Keys -> Add SSH key -> Key字段中，这就是适用于github的公钥

5、点击“Save private key”按钮,将生成的key保存为适用于TortoiseGit的私钥（扩展名为.ppk）

6、运行TortoiseGit开始菜单中的Pageant程序，程序启动后将自动停靠在任务栏中，双击该图标，弹出key管理列表

7、点击“Add Key”按钮，将第5步保存的ppk私钥添加进来，关闭对话框即可





因为Git与TortoiseGit默认使用的私钥格式不一样，所以我们需要给Git和TortoiseGit个配置一份公钥私钥，但是这样会显得很麻烦，那么我们如何让Git与TortoiseGit使用同一SSH密钥呢？

https://blog.csdn.net/qq_32786873/article/details/81480414



## Vue 不能检测到数组的变动解决办法

由于 JavaScript 的限制，Vue 不能检测到以下数组的变动：

- 当利用索引直接设置一个数组项时，例如：`vm.items[indexOfItem] = newValue`
- 当修改数组的长度时，例如：`vm.items.length = newLength`

为了解决第一个问题，Vue 提供了以下操作方法：

```cpp
// Vue.set
Vue.set(vm.items, indexOfItem, newValue)
// vm.$set，Vue.set的一个别名
vm.$set(vm.items, indexOfItem, newValue)
// Array.prototype.splice
vm.items.splice(indexOfItem, 1, newValue)
```

为了解决第二个问题，Vue 提供了以下操作方法：

```cpp
// Array.prototype.splice
vm.items.splice(newLength)
```

## 父组件可以监听到子组件的生命周期吗？

比如有父组件 Parent 和子组件 Child，如果父组件监听到子组件挂载 mounted 就做一些逻辑处理，可以通过以下写法实现：

```java
// Parent.vue
<Child @mounted="doSomething"/>

// Child.vue
mounted() {
  this.$emit("mounted");
}
```

以上需要手动通过 $emit 触发父组件的事件，更简单的方式可以在父组件引用子组件时通过 @hook 来监听即可，如下所示：

```jsx
//  Parent.vue
<Child @hook:mounted="doSomething" ></Child>

doSomething() {
   console.log('父组件监听到 mounted 钩子函数 ...');
},

//  Child.vue
mounted(){
   console.log('子组件触发 mounted 钩子函数 ...');
},    

// 以上输出顺序为：
// 子组件触发 mounted 钩子函数 ...
// 父组件监听到 mounted 钩子函数 ...     
```

当然 @hook 方法不仅仅是可以监听 mounted，其它的生命周期事件，例如：created，updated 等都可以监听。



“懒加载也叫延迟加载，即在需要的时候进行加载，随用随载。在单页应用中，如果没有应用懒加载，运用webpack打包后的文件将会异常的大，造成进入首页时，需要加载的内容过多，延时过长，不利于用户体验，而运用懒加载则可以将页面进行划分，需要的时候加载页面，可以有效的分担首页所承担的加载压力，减少首页加载用时。”

### 1、vue路由的懒加载

- 按需加载的写法

```
require(["src/xx/xxx/xx.vue"], resolve);
```

![clipboard.png](https://segmentfault.com/img/bVV6vV?w=790&h=515)

- 效果

![clipboard.png](https://segmentfault.com/img/bVV6yA?w=741&h=277)

按需加载会在页面第一次请求的时候，把相关路由组件块的js添加上；非按需加载则会把所有的路由组件块的js包打在一起。当业务包很大的时候建议用路由的按需加载（懒加载）。

### 2、vue组件的异步加载和同步加载

- 组件的写法

```
       // aview: function(resolve) {
       //     require(["./a.vue"], resolve);
       // },
       // bview: function(resolve) {
       //     require(["./b.vue"], resolve);
       // }
       aview:require("./a.vue"),
       bview:require("./b.vue"),
```

![clipboard.png](https://segmentfault.com/img/bVV6z2?w=762&h=254)

- 效果
  异步组件页面渲染的时候会跳动；但是同步书写不会

### 3、vue组件的按需加载（2种方式）

#### 1、动态组件方式

- 书写方式

```
组件里面：
 components: {
        aview: function(resolve) {
            require(["./a.vue"], resolve);
        },
        bview: function(resolve) {
            require(["./b.vue"], resolve);
        }
    },
 模板里面：
<component :is="current" :data="myData" ></component>
 data: function() {
        return {
            current: "",
            myData:"",
            show:false
        }
    },
    methods: {
        changeComponents:function(view)
        {
            if(view=='aview')
            {
                this.myData='a1000';
            }
            else
            {
                this.myData='b1000';
            }
            this.current=view;
        }
    }
```

*效果（会触发组件的生命周期）

![clipboard.png](https://segmentfault.com/img/bVV6Bj?w=579&h=194)

#### 2、v-if方式(强制创建和结束生命周期)

- 书写方式

```
模板：
<aview v-if="show"></aview>
组件：
components: {
        aview:require("./a.vue")
    },
```

- 效果

![clipboard.png](https://segmentfault.com/img/bVV6Cm?w=470&h=164)

