## webpack四个核心概念

### 入口(entry)

> 入口: ` webpack`应该使用哪个模块，作为构建其内部依赖图的开始。进入入口起点后，webpack 会找出有哪些模块和库是入口起点（直接和间接）依赖的。
>
> 每个依赖项随即被处理，最后输出到称之为 bundles 的文件中
>
> 可以通过在 webpack 配置中配置 `entry` 属性，来指定一个入口起点（或多个入口起点）。默认值为 `./src`。
>

```JavaScript
module.exports = {
  entry: './src/main.js'
}
// or
module.exports = {
  entry: {
      main: './src/main.js'
  }
}
// or
const config = {
  entry: {
    app: './src/main.js',
    vendors: './src/vendors.js'
  }
}
```

#### 多页面

```javascript
const config = {
  entry: {
    index1: './src/pageOne/index.js',
    index2: './src/pageTwo/index.js',
    index3: './src/pageThree/index.js'
  }
}
```





### 输出(output)

>  输出: 输出所创建的 *bundles*，以及如何命名这些文件，默认值为 `./dist`。基本上，整个应用程序结构，都会被编译到你指定的输出路径的文件夹中。可以通过在配置中指定一个 `output` 字段，来配置这些处理过程

```javascript
const path = require('path');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.bundle.js'
  }
}
```

#### 多个入口

```javascript
{
  entry: {
    app: './src/app.js',
    search: './src/search.js'
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/dist'
  }
}
```

#### 配置项

- **output.chunkFilename**  (string / function)

  非入口chunk文件的名称

+ **output.chunkLoadTimeout ** (int)

  chunk请求到期之前的毫秒数, 默认120000 

+ **output.crossOriginLoading**  (boolean / string)

  只用于 `target`是 web，使用了通过 script 标签的 JSONP 来按需加载 chunk。

  启用 cross-origin 属性加载 chunk。以下是可接收的值……

  `crossOriginLoading: false` - 禁用跨域加载（默认）

  `crossOriginLoading: "anonymous"` - **不带凭据(credential)**启用跨域加载

  `crossOriginLoading: "use-credentials"` - **带凭据(credential)**启用跨域加载 **with credentials**

+ **output.jsonpScriptType**  (string)

  允许自定义 `script` 的类型，webpack 会将 `script` 标签注入到 DOM 中以下载异步 chunk。可以使用以下选项：

  - `"text/javascript"`（默认）
  - `"module"`：与 ES6 就绪代码一起使用。

+ **output.filename**  (string / function)

  此选项决定了每个输出 bundle 的名称。这些 bundle 将写入到 `output.path` 选项指定的目录下。

  对于单个`入口`起点，filename 会是一个静态名称。

  当通过多个入口起点、代码拆分或各种插件创建多个 bundle，应该使用以下一种替换方式，来赋予每个 bundle 一个唯一的名称

  - 使用入口名称： 

    ```javascript
    filename: "[name].bundle.js"
    ```

  -  使用内部 chunk id 

    ```javascript
    filename: "[id].bundle.js"
    ```

  -  使用每次构建过程中，唯一的 hash 生成

    ```javascript
    filename: "[name].[hash].bundle.js"
    ```

  -  使用基于每个 chunk 内容的 hash

    ```javascript
    filename: "[chunkhash].bundle.js"
    ```

+ **output.path**  (string)

  output 目录对应的一个绝对路径

  ```
  path: path.resolve(__dirname, 'dist/assets')
  ```

+ **output.pathinfo** (boolean)

  告诉 webpack 在 bundle 中引入「所包含模块信息」的相关注释。此选项默认值是 `false`，并且**不应该**用于生产环境(production)

  ```javascript
  pathinfo: true
  ```

+ **output.publicPath** (string / function)

  对于按需加载或加载外部资源（如图片、文件等）来说，output.publicPath 是很重要的选项。如果指定了一个错误的值，则在加载这些资源时会收到 404 错误。该选项的值是以 runtime(运行时) 或 loader(载入时) 所创建的每个 URL 为前缀。因此，在多数情况下，**此选项的值都会以`/`结束**。

  默认值是一个空字符串 `""`。

  简单规则配置如下

  ```javascript
  path: path.resolve(__dirname, "public/assets"),
  publicPath: "https://cdn.example.com/assets/"
  
  // or
  publicPath: "/assets/",
  chunkFilename: "[id].chunk.js"
  ```

### loader

> 使得webpack 可以处理非 JavaScript 文件。loader 可以将所有类型的文件转换为 webpack 能够处理的有效模块，然后就可以利用 webpack 的打包能力，对它们进行处理

```javascript
const path = require('path');

const config = {
  output: {
    filename: 'index.bundle.js'
  },
  module: {
    rules: [
      { test: /\.css$/, use: 'style-loader' }
      // 或者 { test: /\.css$/, use: ['style-loader', 'css-loader'] }
    ]
  }
}

module.exports = config
```

 对一个单独的 module 对象定义了 `rules` 属性，里面包含两个必须属性：`test` 和 `use`。 

#### loader特征

- loader 支持链式传递。能够对资源使用流水线(pipeline)。一组链式的 loader 将按照相反的顺序执行。loader 链中的第一个 loader 返回值给下一个 loader。在最后一个 loader，返回 webpack 所预期的 JavaScript。
- loader 可以是同步的，也可以是异步的。
- loader 运行在 Node.js 中，并且能够执行任何可能的操作。
- loader 接收查询参数。用于对 loader 传递配置。
- loader 也能够使用 `options` 对象进行配置。
- 除了使用 `package.json` 常见的 `main` 属性，还可以将普通的 npm 模块导出为 loader，做法是在 `package.json` 里定义一个 `loader` 字段。
- 插件(plugin)可以为 loader 带来更多特性。
- loader 能够产生额外的任意文件。



### 插件(plugins)

> 处理各种任务

```javascript
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = {
  module: {
    rules: [
      { test: /\.txt$/, use: 'raw-loader' }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({template: './src/index.html'})
  ]
}
module.exports = config
```

webpack 插件列表。例如，当多个 bundle 共享一些相同的依赖，`CommonsChunkPlugin` 有助于提取这些依赖到共享的 bundle 中，来避免重复打包。可以像这样添加：

```js
plugins: [
  new webpack.optimize.CommonsChunkPlugin({
    ...
  })
]
```

一个复杂示例，使用多个插件，可能看起来就像这样：

```js
var webpack = require('webpack');
// 导入非 webpack 自带默认插件
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var DashboardPlugin = require('webpack-dashboard/plugin');

// 在配置中添加插件
plugins: [
  // 构建优化插件
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    filename: 'vendor-[hash].min.js',
  }),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false,
      drop_console: false,
    }
  }),
  new ExtractTextPlugin({
    filename: 'build.min.css',
    allChunks: true,
  }),
  new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
  // 编译时(compile time)插件
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': '"production"',
  }),
  // webpack-dev-server 强化插件
  new DashboardPlugin(),
  new webpack.HotModuleReplacementPlugin(),
]
```

### 模式

>  通过选择 `development` 或 `production` 之中的一个，来设置 `mode` 参数，可以启用相应模式下的 webpack 内置的优化 

```javascript
module.exports = {
  mode: 'production'
}
```

webpack 插件列表。例如，当多个 bundle 共享一些相同的依赖，`CommonsChunkPlugin` 有助于提取这些依赖到共享的 bundle 中，来避免重复打包。可以像这样添加：

```js
plugins: [
  new webpack.optimize.CommonsChunkPlugin({
    ...
  })
]
```

一个复杂示例，使用多个插件，可能看起来就像这样：

```js
var webpack = require('webpack');
// 导入非 webpack 自带默认插件
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var DashboardPlugin = require('webpack-dashboard/plugin');

// 在配置中添加插件
plugins: [
  // 构建优化插件
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    filename: 'vendor-[hash].min.js',
  }),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false,
      drop_console: false,
    }
  }),
  new ExtractTextPlugin({
    filename: 'build.min.css',
    allChunks: true,
  }),
  new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
  // 编译时(compile time)插件
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': '"production"',
  }),
  // webpack-dev-server 强化插件
  new DashboardPlugin(),
  new webpack.HotModuleReplacementPlugin(),
]
```

## 配置

```javascript
const path = require('path');

module.exports = {
  mode: "production", // "production" | "development" | "none"

  entry: "./app/entry", // string | object | array
  // entry: ["./app/entry1", "./app/entry2"],
  // entry: {
  //   a: "./app/entry-a",
  //   b: ["./app/entry-b1", "./app/entry-b2"]
  // },
  // 这里应用程序开始执行

  output: {
    // webpack 如何输出结果的相关选项

    path: path.resolve(__dirname, "dist"), // string
    // 所有输出文件的目标路径
    // 必须是绝对路径（使用 Node.js 的 path 模块）

    filename: "bundle.js", // string
    // filename: "[name].js", // 用于多个入口点(entry point)
    // filename: "[chunkhash].js", // 用于长效缓存

    publicPath: "/assets/", // string
    // publicPath: "",
    // publicPath: "https://cdn.example.com/",
    // 输出解析文件的目录，url 相对于 HTML 页面

    library: "MyLibrary", // string,
    // 导出库(exported library)的名称

    libraryTarget: "umd", // 通用模块定义
    //  libraryTarget: "umd2", // 通用模块定义
    //  libraryTarget: "commonjs2", // exported with module.exports
    //  libraryTarget: "commonjs-module", // 使用 module.exports 导出
    //  libraryTarget: "commonjs", // 作为 exports 的属性导出
    //  libraryTarget: "amd", // 使用 AMD 定义方法来定义
    //  libraryTarget: "this", // 在 this 上设置属性
    //  libraryTarget: "var", // 变量定义于根作用域下
    //  libraryTarget: "assign", // 盲分配(blind assignment)
    //  libraryTarget: "window", // 在 window 对象上设置属性
    //  libraryTarget: "global", // property set to global object
    //  libraryTarget: "jsonp", // jsonp wrapper
    // 导出库(exported library)的类型

    /* 高级输出配置（点击显示） */

    pathinfo: true, // boolean
    // 在生成代码时，引入相关的模块、导出、请求等有帮助的路径信息。

    chunkFilename: "[id].js",
    chunkFilename: "[chunkhash].js", // 长效缓存(/guides/caching)
    // 「附加分块(additional chunk)」的文件名模板

    jsonpFunction: "myWebpackJsonp", // string
    // 用于加载分块的 JSONP 函数名

    sourceMapFilename: "[file].map", // string
    sourceMapFilename: "sourcemaps/[file].map", // string
    // 「source map 位置」的文件名模板

    devtoolModuleFilenameTemplate: "webpack:///[resource-path]", // string
    // 「devtool 中模块」的文件名模板

    devtoolFallbackModuleFilenameTemplate: "webpack:///[resource-path]?[hash]", // string
    // 「devtool 中模块」的文件名模板（用于冲突）

    umdNamedDefine: true, // boolean
    // 在 UMD 库中使用命名的 AMD 模块

    crossOriginLoading: "use-credentials", // 枚举
    crossOriginLoading: "anonymous",
    crossOriginLoading: false,
    // 指定运行时如何发出跨域请求问题
  },

  module: {
    // 关于模块配置
    rules: [
      // 模块规则（配置 loader、解析器等选项）

      {
        test: /\.jsx?$/,
        include: [
          path.resolve(__dirname, "app")
        ],
        exclude: [
          path.resolve(__dirname, "app/demo-files")
        ],
        // 这里是匹配条件，每个选项都接收一个正则表达式或字符串
        // test 和 include 具有相同的作用，都是必须匹配选项
        // exclude 是必不匹配选项（优先于 test 和 include）
        // 最佳实践：
        // - 只在 test 和 文件名匹配 中使用正则表达式
        // - 在 include 和 exclude 中使用绝对路径数组
        // - 尽量避免 exclude，更倾向于使用 include

        issuer: { test, include, exclude },
        // issuer 条件（导入源）

        enforce: "pre",
        enforce: "post",
        // 标识应用这些规则，即使规则覆盖（高级选项）

        loader: "babel-loader",
        // 应该应用的 loader，它相对上下文解析
        // 为了更清晰，`-loader` 后缀在 webpack 2 中不再是可选的
        // 查看 webpack 1 升级指南。

        options: {
          presets: ["es2015"]
        },
        // loader 的可选项
      },

      {
        test: /\.html$/,
        test: "\.html$"

        use: [
          // 应用多个 loader 和选项
          "htmllint-loader",
          {
            loader: "html-loader",
            options: {
              /* ... */
            }
          }
        ]
      },

      { oneOf: [ /* rules */ ] },
      // 只使用这些嵌套规则之一

      { rules: [ /* rules */ ] },
      // 使用所有这些嵌套规则（合并可用条件）

      { resource: { and: [ /* 条件 */ ] } },
      // 仅当所有条件都匹配时才匹配

      { resource: { or: [ /* 条件 */ ] } },
      { resource: [ /* 条件 */ ] },
      // 任意条件匹配时匹配（默认为数组）

      { resource: { not: /* 条件 */ } }
      // 条件不匹配时匹配
    ],

    noParse: [
      /special-library\.js$/
    ],
    // 不解析这里的模块

    unknownContextRequest: ".",
    unknownContextRecursive: true,
    unknownContextRegExp: /^\.\/.*$/,
    unknownContextCritical: true,
    exprContextRequest: ".",
    exprContextRegExp: /^\.\/.*$/,
    exprContextRecursive: true,
    exprContextCritical: true,
    wrappedContextRegExp: /.*/,
    wrappedContextRecursive: true,
    wrappedContextCritical: false,
  },

  resolve: {
    // 解析模块请求的选项
    // （不适用于对 loader 解析）

    modules: [
      "node_modules",
      path.resolve(__dirname, "app")
    ],
    // 用于查找模块的目录

    extensions: [".js", ".json", ".jsx", ".css"],
    // 使用的扩展名

    alias: {
      // 模块别名列表

      "module": "new-module",
      // 起别名："module" -> "new-module" 和 "module/path/file" -> "new-module/path/file"

      "only-module$": "new-module",
      // 起别名 "only-module" -> "new-module"，但不匹配 "only-module/path/file" -> "new-module/path/file"

      "module": path.resolve(__dirname, "app/third/module.js"),
      // 起别名 "module" -> "./app/third/module.js" 和 "module/file" 会导致错误
      // 模块别名相对于当前上下文导入
    },
    /* 可供选择的别名语法（点击展示） */
    alias: [
      {
        name: "module",
        // 旧的请求

        alias: "new-module",
        // 新的请求

        onlyModule: true
        // 如果为 true，只有 "module" 是别名
        // 如果为 false，"module/inner/path" 也是别名
      }
    ],

    /* 高级解析选项（点击展示） */

    symlinks: true,
    // 遵循符号链接(symlinks)到新位置

    descriptionFiles: ["package.json"],
    // 从 package 描述中读取的文件

    mainFields: ["main"],
    // 从描述文件中读取的属性
    // 当请求文件夹时

    aliasFields: ["browser"],
    // 从描述文件中读取的属性
    // 以对此 package 的请求起别名

    enforceExtension: false,
    // 如果为 true，请求必不包括扩展名
    // 如果为 false，请求可以包括扩展名

    moduleExtensions: ["-module"],
    enforceModuleExtension: false,
    // 类似 extensions/enforceExtension，但是用模块名替换文件

    unsafeCache: true,
    unsafeCache: {},
    // 为解析的请求启用缓存
    // 这是不安全，因为文件夹结构可能会改动
    // 但是性能改善是很大的

    cachePredicate: (path, request) => true,
    // predicate function which selects requests for caching

    plugins: [
      // ...
    ]
    // 应用于解析器的附加插件
  },

  performance: {
    hints: "warning", // 枚举
    hints: "error", // 性能提示中抛出错误
    hints: false, // 关闭性能提示
    maxAssetSize: 200000, // 整数类型（以字节为单位）
    maxEntrypointSize: 400000, // 整数类型（以字节为单位）
    assetFilter: function(assetFilename) {
      // 提供资源文件名的断言函数
      return assetFilename.endsWith('.css') || assetFilename.endsWith('.js');
    }
  },

  devtool: "source-map", // enum
  devtool: "inline-source-map", // 嵌入到源文件中
  devtool: "eval-source-map", // 将 SourceMap 嵌入到每个模块中
  devtool: "hidden-source-map", // SourceMap 不在源文件中引用
  devtool: "cheap-source-map", // 没有模块映射(module mappings)的 SourceMap 低级变体(cheap-variant)
  devtool: "cheap-module-source-map", // 有模块映射(module mappings)的 SourceMap 低级变体
  devtool: "eval", // 没有模块映射，而是命名模块。以牺牲细节达到最快。
  // 通过在浏览器调试工具(browser devtools)中添加元信息(meta info)增强调试
  // 牺牲了构建速度的 `source-map' 是最详细的。

  context: __dirname, // string（绝对路径！）
  // webpack 的主目录
  // entry 和 module.rules.loader 选项
  // 相对于此目录解析

  target: "web", // 枚举
  target: "webworker", // WebWorker
  target: "node", // node.js 通过 require
  target: "async-node", // Node.js 通过 fs and vm
  target: "node-webkit", // nw.js
  target: "electron-main", // electron，主进程(main process)
  target: "electron-renderer", // electron，渲染进程(renderer process)
  target: (compiler) => { /* ... */ }, // 自定义
  // 包(bundle)应该运行的环境
  // 更改 块加载行为(chunk loading behavior) 和 可用模块(available module)

  externals: ["react", /^@angular\//],
  externals: "react", // string（精确匹配）
  externals: /^[a-z\-]+($|\/)/, // 正则
  externals: { // 对象
    angular: "this angular", // this["angular"]
    react: { // UMD
      commonjs: "react",
      commonjs2: "react",
      amd: "react",
      root: "React"
    }
  },
  externals: (request) => { /* ... */ return "commonjs " + request }
  // 不要遵循/打包这些模块，而是在运行时从环境中请求他们

  stats: "errors-only",
  stats: { //object
    assets: true,
    colors: true,
    errors: true,
    errorDetails: true,
    hash: true,
    // ...
  },
  // 精确控制要显示的 bundle 信息

  devServer: {
    proxy: { // proxy URLs to backend development server
      '/api': 'http://localhost:3000'
    },
    contentBase: path.join(__dirname, 'public'), // boolean | string | array, 静态资源路径
    compress: true, // 开启gzip
    historyApiFallback: true,
    hot: true, // 热模块替换。取决于HotModuleReplacementPlugin
    https: false,
    noInfo: true,
  },

  plugins: [
    // ...
  ]
}
```

#### devServer

- `devServer.compress ` (boolean)

  一切服务都启用gzip 压缩：

  ```javascript
  compress: true
  ```

  

- `devServer.contentBase` (boolean / string / array)

  告诉服务器从哪里提供内容。只有在你想要提供静态文件时才需要。`devServer.publicPath`将用于确定应该从哪里提供 bundle，并且此选项优先。

  默认情况下，将使用当前工作目录作为提供内容的目录，但是你可以修改为其他目录：

  ```js
  contentBase: path.join(__dirname, "public")
  ```

  也可以从多个目录提供内容：

  ```js
  contentBase: [path.join(__dirname, "public"), path.join(__dirname, "assets")]
  ```

  禁用 `contentBase`：

  ```javascript
  contentBase: false
  ```

  

- `devServer.filename`  (string)

  在**惰性模式**中，此选项可减少编译。 默认在**惰性模式**，每个请求结果都会产生全新的编译。使用 `filename`，可以只在某个文件被请求时编译。

  如果 `output.filename` 设置为 `bundle.js` ，`filename` 使用如下：

  ```javascript
  lazy: true,
  filename: "bundle.js"
  ```

  现在只有在请求 `/bundle.js` 时候，才会编译 bundle。

  > `filename` 在不使用**惰性加载**时没有效果。



+ `devServer.proxy`  (object)

  如果有单独的后端开发服务器 API，并且希望在同域名下发送 API 请求 ，那么代理某些 URL 会很有用。

  dev-server 使用了非常强大的 [http-proxy-middleware](https://github.com/chimurai/http-proxy-middleware) 包。请查阅其[文档](https://github.com/chimurai/http-proxy-middleware#options)。

  在 `localhost:3000` 上有后端服务的话，你可以这样启用代理：

  ```js
  proxy: {
    "/api": "http://localhost:3000"
  }
  ```

  请求到 `/api/users` 现在会被代理到请求 `http://localhost:3000/api/users`。

  如果你不想始终传递 `/api` ，则需要重写路径：

  ```js
  proxy: {
    "/api": {
      target: "http://localhost:3000",
      pathRewrite: {"^/api" : ""}
    }
  }
  ```

  默认情况下，不接受运行在 HTTPS 上，且使用了无效证书的后端服务器。如果你想要接受，修改配置如下：

  ```js
  proxy: {
    "/api": {
      target: "https://other-server.example.com",
      secure: false
    }
  }
  ```

  有时你不想代理所有的请求。可以基于一个函数的返回值绕过代理。

  在函数中你可以访问请求体、响应体和代理选项。必须返回 `false` 或路径，来跳过代理请求。

  例如：对于浏览器请求，你想要提供一个 HTML 页面，但是对于 API 请求则保持代理。你可以这样做：

  ```js
  proxy: {
    "/api": {
      target: "http://localhost:3000",
      bypass: function(req, res, proxyOptions) {
        if (req.headers.accept.indexOf("html") !== -1) {
          return "/index.html"
        }
      }
    }
  }
  ```

   如果您想代理多个特定路径到同一个服务器，您可以使用一个或多个带有“context”属性的对象数组 :

  ```js
  proxy: [{
    context: ["/auth", "/api"],
    target: "http://localhost:3000",
  }]
  ```



上述均来自[**`webpack官网`**]( https://www.webpackjs.com/concepts/ )  , 对webpack需深入研究的,请前往官网