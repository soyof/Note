# Node

## node搭建简单的服务器

> response.write(响应内容) /  response.end(响应内容) :  响应内容只能是字符串或者二进制格式

+ 第一种方式:  通过response.write(内容)设置响应内容

  ```javascript
    var http = require('http');

    var server = http.createServer();

    server.on('request', function(request, response) {
        console.log('请求接收成功,路径为:' + request.url);
        if (request.url == '/') {
            response.write('index');
            response.end();
        }else if (request.url == '/login') {
            response.write('login');
            response.end();
        }else if (request.url == '/register') {
            response.write('register');
            response.end();
        }else if (request.url == '/hh') {
            response.write('hh');
            response.end();
        }else {
            response.write('404 not found');
            response.end();
        }
    });

    server.listen(8000, function() {
        console.log('启动成功,可通过http://127.0.0.1:8000/访问');
    });
  ```
+ 第二种方式:  通过response.end(内容)设置响应内容
  ```javascript
    var http = require('http');

    var server = http.createServer();

    server.on('request', function(request, response) {
        console.log('请求接收成功,路径为:' + request.url);
        if (request.url == '/') {
            response.end('index');
        }else if (request.url == '/login') {
            response.end('login');
        }else if (request.url == '/register') {
            response.end('register');
        }else if (request.url == '/hh') {
            response.end('hh');
        }else {
            response.end('404 not found');
        }
    })

    server.listen(8000, function() {
        console.log('启动成功,可通过http://127.0.0.1:8000/访问');
    });
  ```
  
## Node 中的 JavaScript

### ECMAScript

  - 变量
  - 方法
  - 数据类型
  - 内置对象
  - Array
  - Object
  - Date
  - Math

+ 模块系统

  - 在 Node 中没有全局作用域的概念
  - 在 Node 中，只能通过 require 方法来加载执行多个 JavaScript 脚本文件
  - require 加载只能是执行其中的代码，文件与文件之间由于是模块作用域，所以不会有污染的问题
    * 模块完全是封闭的
    * 外部无法访问内部
    * 内部也无法访问外部
  - 模块作用域固然带来了一些好处，可以加载执行多个文件，可以完全避免变量命名冲突污染的问题
  - 但是某些情况下，模块与模块是需要进行通信的
  - 在每个模块中，都提供了一个对象：`exports`
  - 该对象默认是一个空对象
  - 把需要被外部访问使用的成员手动的挂载到 `exports` 接口对象中
  - 然后使用 `require` 这个模块，就可以得到模块内部的 `exports` 接口对象

### 核心模块

  - 核心模块是由 Node 提供的一个个的具名的模块，它们都有自己特殊的名称标识，例如
    - fs 文件操作模块
    - http 网络服务构建模块
    - os 操作系统信息模块
    - path 路径处理模块
    - 。。。。
  - 所有核心模块在使用的时候都必须手动的先使用 `require` 方法来加载，然后才可以使用，例如：
    - `var fs = require('fs')`

### http
+ require
+ 端口号
  - ip 地址定位计算机
  - 端口号定位具体的应用程序

+ Content-Type

  - 服务器最好把每次响应的数据是什么内容类型都告诉客户端，而且要正确的告诉
  - 不同的资源对应的 Content-Type 是不一样，具体参照：http://tool.oschina.net/commons
  - 对于文本类型的数据，最好都加上编码，目的是为了防止中文解析乱码问题

- 通过网络发送文件

  - 发送的并不是文件，本质上来讲发送是文件的内容
  - 当浏览器收到服务器响应内容之后，就会根据 Content-Type 进行对应的解析处理

### 案例
  ```javascript
    var http = require('http');
    var fs = require('fs');

    var server = http.createServer();

    server.on('request', function(res, rep) {
        var url = res.url;

        if (url === '/index') {
            rep.setHeader('Content-Type', 'text/plain; charset=utf-8');
            rep.end('hello 世界');
        } else if (url === '/login') {
            fs.readFile('./index.html', function (err, data) {  
                if (err) {
                    rep.setHeader('Content-Type', 'text/plain; charset=utf-8');
                    rep.end('404 not Found');
                }else {
                    rep.setHeader('Content-Type', 'text/html; charset=utf-8');
                    rep.end(data);
                }
            });
        } else if (url === '/image') {
            fs.readFile('./images/001.jpg', function (err, data) {  
                if (err) {
                    rep.setHeader('Content-Type', 'text/plain; charset=utf-8');
                    rep.end('404 not Found');
                }else {
                    rep.setHeader('Content-Type', 'image/jpeg');
                    rep.end(data);
                }
            });        
        }
    });

    server.listen(3000, function() {
        console.log('server start ');
    });
  ```

### 服务端渲染和客户端渲染区别

  - 客户端渲染不利于SEO搜索引擎优化
  - 服务端渲染可以被爬虫抓取到,但客户体验差

### Node.js REPL(交互式解释器)

  - Node.js REPL(Read Eval Print Loop:交互式解释器) 表示一个电脑的环境，类似 Window 系统的终端或 Unix/Linux shell，我们可以在终端中输入命令，并接收系统的响应。
  - Node 自带了交互式解释器，可以执行以下任务：
    > `读取` - 读取用户输入，解析输入了Javascript 数据结构并存储在内存中。

    > `执行` - 执行输入的数据结构

    > `打印` - 输出结果

    > `循环` - 循环操作以上步骤直到用户两次按下 ctrl-c 按钮退出。
  - REPL 命令
    > ctrl + c - 退出当前终端。
    
    > ctrl + c 按下两次 - 退出 Node REPL。
    
    > ctrl + d - 退出 Node REPL.
    
    > 向上/向下 键 - 查看输入的历史命令

    > tab 键 - 列出当前命令

    > .help - 列出使用命令

    > .break - 退出多行表达式

    > .clear - 退出多行表达式

    > .save filename - 保存当前的 Node REPL 会话到指定文件

    > .load filename - 载入当前 Node REPL 会话的文件内容。

### node中的模块系统

  #### commonJS 模块规范
  + 模块作用域
  + 使用require方法加载模块
  + 使用exports接口对象导出模块中的成员
  ##### 加载require
  * 语法

    > var 自定义变量名称 = require('模块')
  * 作用
    - 执行被加载模块中的代码
    - 得到被加载模块中的`exports`导出接口对象 
  ##### 导出exports
  - node中是模块作用域,默认文件中所有成员只在当前文件模块有效
  - 对于希望被访问到的成员,需要将这些成员挂载到`exports`接口对象上即可
    + 导出多个成员(`必须在对象上`)

    ```javascript
    exports.a = 123;
    exports.b = 'hello';
    exports.c = function () {
      console.log(111);
    }
    exports.d = {
      foo: 'bar'
    }
    ```
    + 导出单个成员( `拿到的是:函数、字符串` )
    ```javascript
    module.exports = 'hello';
    ```
    + 以下情况会覆盖
    ```javascript
    module.exports = 'hello';
    //后者会覆盖前者
    module.exports = function (x, y) {
      return x + y
    };
    ```


##### exports和module.exports区别

  * 每个模块中都有一个 module 对象
  * module 对象中有一个 exports 对象
  * 把需要导出的成员都挂载到 module.exports 接口对象中,也就是：`module.exports.xxx = xxx` 的方式
  * 但是每次都 `module.exports.xxx = xxx` 很麻烦
  * 所以 Node 为了方便操作，同时在每一个模块中都提供了一个成员叫：`exports`
  * `exports === module.exports` 结果为  `true`
  * 所以对于：`module.exports.xxx = xxx` 的方式 完全可以：`exports.xxx = xxx`
  * 当一个模块需要导出单个成员的时候，这个时候必须使用：`module.exports = xxx` 的方式
  * 不要使用 `exports = xxx` ,因为每个模块最终向外 `return` 的是 `module.exports`,而 `exports` 只是 `module.exports` 的一个引用
  * 所以即便为 `exports = xx` 重新赋值，也不会影响 `module.exports`
  * 但是有一种赋值方式比较特殊：`exports = module.exports` 这个用来重新建立引用关系的

### require方法加载规则

  - 一个项目有且只有一个 node_modules，放在项目根目录中，这样的话项目中所有的子目录中的代码都可以加载到第三方包不会出现有多个 node_modules
  - 模块查找机制
    1. 优先从缓存加载
    2. 核心模块
    3. 路径形式的文件模块
    4. 第三方模块
  - 第三方模块加载查找顺序  ( `require(./xxx)` )
    1. node_modules/xxx/ 
    2. node_modules/xxx/package.json
    3. 查找 node_modules/xxx/package.json  里面的 `main`,如果有则加载,没有则加载备选项
    4. `index.js` 备选项
    5. 同级目录中无`node_modules` , 进入上一级目录找 `node_modules`
    6. 按照这个规则依次往上找，直到磁盘根目录还找不到，最后报错：`Can not find module xxx`

### package.json

通过 `npm init` 设置package.json,如果将 `node_modules` 删除, 通过 `npm install` 可以找回所有依赖包

  - 用来保存第三方包依赖信息,建议每个项目根目录下都有一个 `package.json` 文件
  - 建议执行 `npm install 第三方模板名` 的时候加上 `--save` 这个选项,用来保存依赖信息 
  - `npm` ----- node package manager
  - npm 5以后安装包不需要加`--save` 这个选项,它会自动保存这个依赖信息

### package-lock.json

- 用以记录当前状态下实际安装的各个npm package的具体来源和版本号
- `package-lock.json`文件中记录了下载源地址, 可以加快npm install速度
- package.json文件只能锁定大版本，也就是版本号的第一位，并不能锁定后面的小版本，每次npm install都是拉取的该大版本下的最新的版本，为了稳定性考虑我们几乎是不敢随意升级依赖包的，这将导致多出来很多工作量，测试/适配等，所以package-lock.json文件出来了，当你每次安装一个依赖的时候就锁定在你安装的这个版本。

### npm常用命令

+ npm init
  * npm init -y   可以跳过向导,快速生成package.json
+ npm install
  * 一次性把 `dependencies` 选项中的依赖项全部安装
+ npm install 包名
  * 只下载
  *  简写   npm i 包名
+ npm install --save 包名   /    npm install 包名 --save
  * 下载并保存依赖项 ( package.json文件中dependencies 选项 )
  * 简写  npm i -S 包名
+ npm uninstall 包名
  * 只删除,如果有依赖项会依然保存
  * 简写:  npm un 包名
+ npm help
  * 查看使用帮助
+ npm 命令 --help
  * 查看指定命令的使用帮助
+ npm config list
  * 查看npm配置信息

### 解决npm被墙的问题

+ 安装淘宝的cnpm

  ```shell
  npm install --global cnpm
  ```

+ 不安装cnpm又可以使用淘宝的服务器下载

  ```shell
  # 每次下载均需后面跟此参数
  npm install 包名 --registry=https://registry.npm.taobao.org
  ```

  ```shell
  # 将npm包下载地址替换为淘宝镜像地址(只需操作一次) ---- 修改配置文件
  npm config set registry https://registry.npm.taobao.org
  ```



### `nrm`的安装使用

作用：提供了一些最常用的NPM包镜像地址，能够让我们快速的切换安装包时候的服务器地址；
什么是镜像：原来包刚一开始是只存在于国外的NPM服务器，但是由于网络原因，经常访问不到，这时候，我们可以在国内，创建一个和官网完全一样的NPM服务器，只不过，数据都是从人家那里拿过来的，除此之外，使用方式完全一样；

1. 运行`npm i nrm -g`全局安装`nrm`包；
2. 使用`nrm ls`查看当前所有可用的镜像源地址以及当前所使用的镜像源地址；
3. 使用`nrm use npm`或`nrm use taobao`切换不同的镜像源地址；

nrm提供了下载包的url地址,并且可以在这几个地址之间进行切换,但使用的装包工具依然是npm

### 代码修改完自动重启工具

`nodemon` 可以解决频繁修改代码重启服务器问题

  ```shell
  npm install --global nodemon
  ```

完成安装后使用 `nodemon` 替代 `node` 打开文件

### 下载失败 

> 网络问题 ERR! : network 

```js
// npm ERR! A complete log of this run can be found in:
// npm ERR!     C:\Users\ma250\AppData\Roaming\npm-cache\_logs\2019-03-11T08_54_30_775Z-debug.log
```

> 删除缓存(清缓存)
> 方式1 : `npm cache clean -f` (--force)
> 方式2 : `C:/users/用户名/AppData/Roaming/npm-cache`  里面可以全部删除掉



## express模块

### 基本路由

- get:

```javascript
//  当以get方式请求'/'的时候,执行对应的函数
app.get('/', function (req, res) {
    res.send('11111')
})
```

- post

```javascript
//  当以post方式请求'/'的时候,执行对应的函数
app.post('/', function (req, res) {
    res.send('11111')
})
```

### 静态服务

- 第一种写法

```javascript
//  直接访问public中的资源,不需要加/public/
app.use(express.static('public'))

//  直接访问files中的资源,不需要加/files/
app.use(express.static('files'))

//   '/public/xxx'      通过/public/xxx访问public中的xxx资源
app.use('/public/', express.static('public'))

//   '/static/xxx'      通过/static/xxx访问public中的xxx资源,给public起了个别名
app.use('/static', express.static('public'))

app.use('/static', express.static(path.join(__dirname, 'public')))
```

- 第二种写法

```javascript
//   当以 /public/ 开头的时候，去 ./public/ 目录中找找对应的资源
//   这种方式更容易辨识，推荐这种方式
app.use('/public/', express.static('./public/'))

//   必须是 /a/puiblic目录中的资源具体路径     用'a'代替'public'
app.use('/a/', express.static('./public/'))

// 当省略第一个参数的时候，则可以通过 省略 /public 的方式来访问, 这种方式的好处就是可以省略 /public/
app.use(express.static('./public/'))
```

### express中配置使用art-template

- 安装

  > ```
  > npm install --save art-template
  > npm install --save express-art-template
  > ```

- 配置

  ```javascript
  app.engine('html', require('express-art-template')); 
  // 第一个参数表示，当渲染以 .html 结尾的文件的时候，使用 art-template 模板引擎
  ```

- 使用

  ```javascript
  //  Express 为 Response 相应对象提供了一个方法：render
  //  render 方法默认是不可以使用，但是如果配置了模板引擎就可以使用了
  //  res.render('html模板名', {模板数据});  第一个参数不能写路径，默认会去项目中的 views 目录查找该模板文件
  app.get('/', function (req, res) {
  	// express默认会去项目中的 views 目录找 index.html    
      res.render('index.html', {
          user: {
              name: 'aui',
              tags: ['art', 'template', 'nodejs']
          }
      });
  });
  ```

  如果想要修改默认的 `views` 视图渲染存储目录，可以使用

  ```javascript
  app.set('views', 目标路径)   // 第一个参数不能写错
  ```

### express中获取表单提交的GET请求参数

- express内置了一个API, 通过 `req.query` 获取

### express中获取表单提交的POST请求参数

- express没有内置获取POST请求参数的API,因此需要第三方包 `body-parser`

- 下载

  ```shell
  npm install --save body-parser
  ```

- 配置

  ```javascript
  var express = require('express')
  var bodyParser = require('body-parser')
  
  var app = express()
  
  // parse application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: false }))
  
  // parse application/json
  app.use(bodyParser.json())
  
  //  通过req.body获取响应后的数据
  app.use(function (req, res) {
    res.setHeader('Content-Type', 'text/plain')
    res.write('you posted:\n')
    res.end(JSON.stringify(req.body, null, 2))
  })
  ```

  

### express中配置express-session插件

- 安装

  >  npm install express-session

- 引包

  > var session **=** require('express-session')

- 配置

  ```javascript
  // 这个插件会为req请求对象添加一个成员: req.session (默认是一个对象)
  app.use(session({
     // 配置加密字符串, 即在原有的加密基础上和这个字符串拼起来再去加密--增强安全性,防止恶意伪造
      secret: 'keyboard cat',
      resave: false,
      //无论是否使用session,都会默认分配一把钥匙
      saveUninitialized: true
  }))
  ```

- 使用

  ```javascript
  // 添加session数据
  req.session.foo = 'bar'
  
  // 获取session数据
  req.session.foo
  ```

- PS: 默认 `session`数据是内存存储的, 服务器一旦重启就会丢失,因此生产环境会把 `session` 进行持久化存储



### express中间件 (express-middleware)

在收到请求后和发送响应之前这个阶段执行的一些函数,本质是一个请求处理方法

> 当调用next时,如果传递了参数,则直接找到带有四个参数的应用程序级别中间件,因此可以用来配置全局错误处理中间件

- 应用程序级别中间件

  > 万能匹配(不关心任何请求路径和请求方法)

  ```javascript
  app.use(function (req, res, next) {
      console.log('time', Date.now())
      next()
  })
  
  //  第一个参数是Request对象req。第二个参数是Response对象res。第三个则是用来驱动中间件调用链的函数next，如果你想让后面的中间件继续处理请求，就需要调用next方法。
  ```

  > 只要是以 '/xxx/' 开头的

  ```javascript
  app.use('/a', function (req, res, next) {
      console.log('time', Date.now())
      next()
  })
  ```

- 路由级别中间件

  - get

    ```javascript
    app.get('/', function(req, res) {
        res.send('111')
    })
    ```

    

  - post

    ```javascript
    app.post('/', function(req, res) {
        res.send('111')
    })
    ```

  - put

    ```javascript
    app.put('/', function(req, res) {
        res.send('111')
    })
    ```

- 错误处理中间件

  ```javascript
  app.use(function(err, req, res, next) {
      console.error(err.stack);
      res.status(500).send('error')
  })
  ```

- 内置中间件

  - express.static(root, [options])       可以用来处理网站里的静态文件的GET请求
    - 第一个参数root，是要处理的静态资源的根目录，可以是绝对路径，也可以是相对路径。第二个可选参数用来指定一些选项，比如maxAge、lastModified等
  - express.json()

- 第三方中间件

  - body-parser
  - cookie-parser
  - session

## Path模块

> 文档  http://nodejs.cn/api/path.html
>
> ​	  https://nodejs.org/dist/latest-v10.x/docs/api/path.html

- path.basename( path, [ext] )  ----------ext为可选参数,如果想去掉文件的后缀名,则使用此参数

  > path.basename('c:a/b/c/index.js', '.js')   ===>   index

  - 获取一个路径中的文件名( 默认包含扩展名 )

- path.dirname(path)

  - 获取一个路径中的目录部分

- path.parse(path)

  - 把一个路径转为对象
    - root根路径
    - dir 目录
    - base 包含后缀名的文件名
    - ext 后缀名
    - name 不包含后缀名的文件名

- path.join([...paths])

  > path.join('c:/', 'a', 'b')   ========>  `c:\\a\\b`

  - 拼接路径

- path.isAbsolute(path)

  - 判断一个路径是否是绝对路径



## Node中其它成员

在每个模块中,除了 `require` `exports` 等模块相关API之外,还有两个特殊成员

- `__dirname`    用来 **动态获取** 当前文件模块所属目录的绝对路径

  > 获取demo.js    __dirname
  >
  > D:\Web教程\前端\11-node\blog

- `__filename`  用来 **动态获取** 当前文件的绝对路径

  > 获取demo.js    __filename
  >
  > D:\Web教程\前端\11-node\blog\demo.js

- `__dirname` 和 `__filename` 获取的是绝对路径,不受node命令所属路径影响

Node文件操作的路径被设计为相对于执行node命令所处的路径-----解决办法( 将相对路径变为绝对路径 )

> `模块中的路径标识` 和 `文件操作中的相对路径` 标识不一致
>
> `模块中的路径标识` 就是相对于当前文件模块，不受执行 node 命令所处路径影响

## MongoDB

### 启动关闭数据库

- 启动

  ```shell
  # mongodb 默认使用执行mongod命令所在盘符根目录下的 /data/db作为自己的数据存储目录
  # 使用前需要先手动创建一个这样的目录
  mongod
  ```

  修改盘符目录

  ```shell
  mongod --dbpath E:/data/db(数据存储目录路径)
  ```

  

### 基本命令

+ show dbs

  > 查看显示所有数据库

+ db

  > 查看当前操作的数据库

+ use 数据库名称

  > 切换到指定的数据库(如果没有则会新建)

+ db.dropDatabase();   #删除当前使用数据库

+ db.stats();             #显示当前db状态

## mongoose(Node操作MongoDB数据库)

- 安装

  > npm install mongoose

  ```javascript
  var mongoose = require('mongoose');
  
  // 连接 MongoDB 数据库
  mongoose.connect('mongodb://localhost/test');  // test代表创建的数据库名称
  
  mongoose.Promise = global.Promise;
  
  // 创建一个模型
  // 就是在设计数据库
  // MongoDB 是动态的，非常灵活，只需要在代码中设计你的数据库就可以了
  // mongoose 这个包就可以让你的设计编写过程变的非常的简单
  var Cat = mongoose.model('Cat', { name: String });
  
  for (var i = 0; i < 100; i++) {
    // 实例化一个 Cat
    var kitty = new Cat({ name: '喵喵' + i });
  
    // 持久化保存 kitty 实例
    kitty.save(function (err) {
      if (err) {
        console.log(err);
      } else {
        console.log('meow');
      }
    });
  }
  ```

  

- 指南

  - 设计Scheme  发布Model

    ```javascript
    var mongoose = require('mongoose')
    
    var Schema = mongoose.Schema
    
    // 1. 连接数据库
    // 指定连接的数据库不需要存在，当你插入第一条数据之后就会自动被创建出来
    mongoose.connect('mongodb://localhost/itcast', {useMongoClient: true})
    
    // 2. 设计文档结构（表结构）
    // 字段名称就是表结构中的属性名称
    // 约束的目的是为了保证数据的完整性，不要有脏数据
    var userSchema = new Schema({
      username: {
        type: String,
        required: true // 必须有
      },
      password: {
        type: String,
        required: true
      },
      email: {
        type: String
      }
    })
    
    // 3. 将文档结构发布为模型
    //    mongoose.model 方法就是用来将一个架构发布为 model
    //    第一个参数：传入一个大写名词单数字符串用来表示你的数据库名称
    //                 mongoose 会自动将大写名词的字符串生成 小写复数 的集合名称
    //                 例如这里的 User 最终会变为 users 集合名称
    //    第二个参数：架构 Schema
    //   
    //    返回值：模型构造函数
    var User = mongoose.model('User', Schema)
    ```

  - 增加数据

    ```javascript
    var admin = new User({
      username: 'zs',
      password: '123456',
      email: 'admin@admin.com'
    })
    
    admin.save(function (err, ret) {
      if (err) {
        console.log('保存失败')
      } else {
        console.log('保存成功')
        console.log(ret)
      }
    })
    ```

  - 查询

    查询所有

    ```javascript
    User.find(function (err, ret) {
      if (err) {
        console.log('查询失败')
      } else {
        console.log(ret)
      }
    })
    ```

    按条件查询所有

    ```javascript
    User.find({
      username: 'zs'
    }, function (err, ret) {
      if (err) {
        console.log('查询失败')
      } else {
        console.log(ret)
      }
    })
    ```

    按条件查询单个

    ```javascript
    User.findOne({
      username: 'zs'
    }, function (err, ret) {
      if (err) {
        console.log('查询失败')
      } else {
        console.log(ret)
      }
    })
    ```

  - 删除数据

    根据条件删除所有

    ```javascript
    User.remove({
      username: 'zs'
    }, function (err, ret) {
      if (err) {
        console.log('删除失败')
      } else {
        console.log('删除成功')
        console.log(ret)
      }
    })
    ```

    根据条件删除一个

    > Model.findOneAndRemove( conditions, [options], [callback] )

    根据id删除一个

    > Model.findByIdAndRemove( id, [options], [callback] )

  - 更新数据

    根据条件更新所有

    > Model.update( conditions, doc, [options], [callback] )

    根据指定条件更新一个

    > Model.findOneAndUpdate( [conditions], [update], [options], [callback] )

    根据id更新一个

    ```javascript
    User.findByIdAndUpdate('5a001b23d219eb00c8581184', {
      password: '123'
    }, function (err, ret) {
      if (err) {
        console.log('更新失败')
      } else {
        console.log('更新成功')
      }
    })
    ```

    

## mysql(Node操作MySQL数据库)

- 安装

  ```shell
  npm install mysql
  ```

- 使用

  ```javascript
  var mysql      = require('mysql');
  var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'me',
    password : 'secret',
    database : 'my_db'
  });
   
  connection.connect();
   
  connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results[0].solution);
  });
   
  connection.end();
  ```

## 服务端重定向问题

- 服务端的重定向只针对同步请求才有效
- 服务端的重定向针对异步请求无效,页面不会跳转



# nvm使用

nvm install ## 安装指定版本，可模糊安装，如：安装v6.2.0，既可nvm install v6.2.0，又可nvm install 6.2
nvm uninstall ## 删除已安装的指定版本，语法与install类似
nvm use ## 切换使用指定的版本node
nvm ls ## 列出所有安装的版本
nvm ls-remote ## 列出所有远程服务器的版本（官方node version list）
nvm current ## 显示当前的版本
nvm alias ## 给不同的版本号添加别名
nvm unalias ## 删除已定义的别名