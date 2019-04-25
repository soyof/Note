# react



### 生命周期函数

- `componentDidMount()` 方法会在组件已经被渲染到 DOM 中后运行

- 组件的[生命周期](https://facebook.github.io/react/docs/working-with-the-browser.html#component-lifecycle)分成三个状态：

  - Mounting：已插入真实 DOM
  - Updating：正在被重新渲染
  - Unmounting：已移出真实 DOM

  React 为每个状态都提供了两种处理函数，`will` 函数在进入状态之前调用，`did` 函数在进入状态之后调用，三种状态共计五种处理函数。

  - componentWillMount()
  - componentDidMount()  --- ajax请求一般放在此函数中
  - componentWillUpdate(object nextProps, object nextState)
  - componentDidUpdate(object prevProps, object prevState)
  - componentWillUnmount()

  此外，React 还提供两种特殊状态的处理函数。

  - componentWillReceiveProps(object nextProps)：已加载组件收到新的参数时调用
  - shouldComponentUpdate(object nextProps, object nextState)：组件判断是否重新渲染时调用

![img](https://upload-images.jianshu.io/upload_images/4589282-0f0608b3c8cfb86c.png?imageMogr2/auto-orient/)

### diff算法

- **React的diff算法**
   （1）什么是**调和**？
   将Virtual DOM树转换成actual DOM树的**最少操作的过程** 称为 调和 。

  （2）什么是React diff算法？
   diff算法是**调和的具体实现。**

  **diff策略**
   React用 三大策略 将O(n^3)复杂度 转化为 **O(n)复杂度**

  策略一（**tree diff**）：
   Web UI中DOM节点跨层级的移动操作特别少，可以忽略不计。

  策略二（**component diff**）：
   拥有相同类的两个组件 生成相似的树形结构，
   拥有不同类的两个组件 生成不同的树形结构。

  策略三（**element diff**）：
   对于同一层级的一组子节点，通过唯一id区分。

**tree diff**
 （1）React通过updateDepth对Virtual DOM树进行**层级控制**。
 （2）对树分层比较，两棵树 只对**同一层次节点** 进行比较。如果该节点不存在时，则该节点及其子节点会被完全删除，不会再进一步比较。
 （3）只需遍历一次，就能完成整棵DOM树的比较。



![img](https:////upload-images.jianshu.io/upload_images/5518628-d60043dbeddfce8b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/504/format/webp)

层级控制

**那么问题来了，如果DOM节点出现了跨层级操作,diff会咋办呢？**
 答：diff只简单考虑同层级的节点位置变换，如果是跨层级的话，**只有创建节点和删除节点的操作。**



![img](https:////upload-images.jianshu.io/upload_images/5518628-41118df156ed8d6e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/952/format/webp)

image.png

如上图所示，以A为根节点的整棵树会被**重新创建，而不是移动**，因此 **官方建议不要进行DOM节点跨层级操作，可以通过CSS隐藏、显示节点，而不是真正地移除、添加DOM节点**。

------

**component diff**
 React对不同的组件间的比较，有三种策略
 （1）同一类型的两个组件，按原策略（层级比较）继续比较Virtual DOM树即可。

（2）同一类型的两个组件，组件A变化为组件B时，可能Virtual DOM没有任何变化，如果知道这点（变换的过程中，Virtual DOM没有改变），可节省大量计算时间，所以 用户 可以通过 **shouldComponentUpdate()** 来判断是否需要 判断计算。

（3）不同类型的组件，将一个（将被改变的）组件判断为dirty component（脏组件），从而**替换 整个组件的所有节点**。

**注意：如果组件D和组件G的结构相似，但是 React判断是 不同类型的组件，则不会比较其结构，而是删除 组件D及其子节点，创建组件G及其子节点。**

------

**element diff**
 当节点处于同一层级时，diff提供三种节点操作：**删除、插入、移动**。

**插入**：组件 C 不在集合（A,B）中，需要插入

**删除**：（1）组件 D 在集合（A,B,D）中，但 D的节点已经更改，不能复用和更新，所以需要**删除 旧的 D** ，再创建新的。

（2）组件 D 之前在 集合（A,B,D）中，但集合变成新的集合（A,B）了，D 就需要被删除。

**移动**：组件D已经在集合（A,B,C,D）里了，且集合更新时，D没有发生更新，只是位置改变，如新集合（A,D,B,C），D在第二个，无须像传统diff，让旧集合的第二个B和新集合的第二个D 比较，并且删除第二个位置的B，再在第二个位置插入D，而是 **（对同一层级的同组子节点） 添加唯一key进行区分，移动即可。**

------

**重点说下移动的逻辑**：
 **情形一：新旧集合中存在相同节点但位置不同时，如何移动节点**



![img](https:////upload-images.jianshu.io/upload_images/5518628-89bb3cd6ebdb4296.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/642/format/webp)

移动1

（1）看着上图的 B，React先从新中取得B，然后判断旧中是否存在相同节点B，当发现存在节点B后，就去判断是否移动B。
 B在旧 中的index=1，它的lastIndex=0，**不满足 index < lastIndex 的条件，因此 B 不做移动操作。此时，一个操作是，lastIndex=(index,lastIndex)中的较大数=1.**

**注意：lastIndex有点像浮标，或者说是一个map的索引，一开始默认值是0，它会与map中的元素进行比较，比较完后，会改变自己的值的（取index和lastIndex的较大数）。**

（2）看着 A，A在旧的index=0，此时的lastIndex=1（因为先前与新的B比较过了），**满足index<lastIndex**，因此，对A进行移动操作，此时**lastIndex=max(index,lastIndex)=1**。

（3）看着D，同（1），不移动，由于D在旧的index=3，比较时，lastIndex=1，所以改变lastIndex=max(index,lastIndex)=3

（4）看着C，同（2），移动，C在旧的index=2，满足index<lastIndex（lastIndex=3），所以移动。

**由于C已经是最后一个节点，所以diff操作结束。**

情形二：新集合中有新加入的节点，旧集合中有删除的节点



![img](https:////upload-images.jianshu.io/upload_images/5518628-eb7ef5477ea1a678.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/601/format/webp)

移动2

（1）B不移动，不赘述，更新l astIndex=1

（2）新集合取得 E，发现旧不存在，故**在lastIndex=1的位置 创建E**，更新lastIndex=1

（3）新集合取得C，C不移动，更新lastIndex=2

（4）新集合取得A，A移动，同上，更新lastIndex=2

（5）**新集合对比后，再对旧集合遍历。判断 新集合 没有，但 旧集合 有的元素（如D，新集合没有，旧集合有）**，发现 D，删除D，diff操作结束。

------

**diff的不足与待优化的地方**



![img](https:////upload-images.jianshu.io/upload_images/5518628-aea2bb7e8e843db6.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/636/format/webp)

移动3

看图的 D，此时D不移动，但它的index是最大的，导致更新lastIndex=3，从而使得其他元素A,B,C的index<lastIndex，导致A,B,C都要去移动。

**理想情况是只移动D，不移动A,B,C。因此，在开发过程中，尽量减少类似将最后一个节点移动到列表首部的操作，当节点数量过大或更新操作过于频繁时，会影响React的渲染性能。**



### Redux

- store 是唯一的
- 只有store可以改变自己的内容

> 纯函数 :  给定固定的输入,返回固定的输出,且不会有任何副作用

![img](https://img-blog.csdn.net/20180820151917591?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L01heGltdXNfY2tw/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)



- 安装Redux

  - npm install --save redux

- src下新建 store 文件夹，并新建index.js

- index.js中 通过 createStore 方法创建 store

  ```javascript
  import { createStore } from 'redux';
  
  const store =createStore();
  
  export default store;
  ```

- store 文件夹下新建 reducer.js 并声明各组件所需 state 中的变量

  ```javascript
  const defaultState = {
      inputValue: '',
      list:[1,2],
      showMsg:false
  }
  export default (state = defaultState,action)=>{
      return state;
  }
  ```

  

- 将 reducer 作为参数传给 createStore 方法，创建 store

  ```javascript
  import { createStore } from 'redux';
  import reducer from './reducer';
  
  const store =createStore(reducer);
  
  export default store;
  ```

  

- 将组件文件中引入 store 并将 state 与 store 进行绑定

  ```javascript
  // 引入store
  import store from './store';           // ./store/index.js   的简写
  ...
  class Todolist extends Component {
    constructor(props){
      super(props);
      // 原组件中的state与store进行绑定
      // this.state={
      //   inputValue: '', // 输入框中的值
      //   list: [], // todolist数组
      //   showMsg: false 
      // }
      this.state = store.getState();
      ...
    }
    ...
  }
  ```

  

- 方法中声明 action 传递给 store,让 store 去根据 action.type 在 reducer 中做判断，决定将 reducer 中哪个值改为 action.value,并返回一个新 state 让 store 通知组件去更新

  ```javascript
  <input type="text" value={this.state.inputValue} onChange={this.handleInput}/>
  ```

  ```javascript
  // 动态监听输入变化inputValue值
  handleInput(e) {
     // let inputValue = e.target.value; // 获取input值
     // this.setState({
     //   inputValue // 键值对相同时 可简写
     // });
     const action = {
       type:'change_input_value',
       value:e.target.value
     }
     store.dispatch(action); // 解析action
  }
  ```

  reducer.js 中接收 action，返回最新数据给 store

  ```javascript
  const defaultState = {
      inputValue: '',
      list:[1,2],
      showMsg:false
  }
  export default (state = defaultState,action)=>{
      // 根绝action.type 判断更改何值
      if(action.type === 'change_input_value'){
          // why copy old state -> newState ? reducer 可以接收state 不能修改state！！！
          const newState = JSON.parse(JSON.stringify(state)); // 深度拷贝
          newState.inputValue = action.value;
          return newState;
      }
      return state;
  }
  ```

  

- store 的变化要与组件联动，组件需要注册监听 store 的变化，并通过回调更新组件的state

  ```javascript
  // 引入store
  import store from './store'; // './store/index.js'的简写
  ...
  class Todolist extends Component {
    constructor(props){
      super(props);
      this.state = store.getState();
      // 注意需要绑定 this
      this.handleStoreChange = this.handleStoreChange.bind(this);
      // 注册监听store，store变化后调用组件的handleStoreChange方法更新组件的state
      store.subscribe(this.handleStoreChange); 
      ...
    }
    ...
    // store 变化后,更新组件的 state
    handleStoreChange() {
      this.setState(
        store.getState()
      )
    }
  }
  ```

  ### yarn使用

  - **初始化一个新项目**

    > ```
    > yarn init
    > ```

  - **添加依赖包**

    > ```
    > yarn add [package]
    > yarn add [package]@[version]
    > yarn add [package]@[tag]
    > ```

  - **将依赖项添加到不同依赖项类别中**

    分别添加到 `devDependencies`、`peerDependencies` 和 `optionalDependencies` 类别中：

    > ```
    > yarn add [package] --dev
    > yarn add [package] --peer
    > yarn add [package] --optional
    > ```

  - **升级依赖包**

    > ```
    > yarn upgrade [package]
    > yarn upgrade [package]@[version]
    > yarn upgrade [package]@[tag]
    > ```

  - **移除依赖包**

    > ```powershell
    > yarn remove [package]
    > ```

  - **安装项目的全部依赖**

    > ```shell
    > yarn
    > 或者
    > yarn install
    > ```