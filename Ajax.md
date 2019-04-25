# AJAX

## 请求与请求报文

**get请求的请求报文详解** (username=pp&password=123456)---以数组的形式存在

```javascript
//--------------------------请求行--------------------------------
// GET  请求方式
// /day02/01.php?username=pp&password=123456    请求路径+参数（注意点）
// HTTP/1.1 HTTP的版本号
GET /day02/01.php?username=pp&password=123456 HTTP/1.1

//--------------------------请求头--------------------------------
Host: www.study.com
Connection: keep-alive
Upgrade-Insecure-Requests: 1
User-Agent: Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.96 Safari/537.36
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,`*/*`;q=0.8
Accept-Encoding: gzip, deflate, sdch
Accept-Language: zh-CN,zh;q=0.8,en;q=0.6

//----------------------------请求体-------------------------------------
//get请求没有请求体，但是参数会拼接到请求行中
```



**POST请求的请求报文** 

```javascript
//-----------------------请求行---------------------------------------------
POST /day02/01.php HTTP/1.1

//-----------------------请求头--------------------------------------------
Host: www.study.com
Connection: keep-alive
//传递的参数的长度。
Content-Length: 29
Cache-Control: max-age=0
Origin: http://www.study.com
Upgrade-Insecure-Requests: 1
User-Agent: Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.96 Safari/537.36
//内容类型：表单数据，如果是post请求，必须指定这个属性。
Content-Type: application/x-www-form-urlencoded
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,`*/*`;q=0.8
Referer: http://www.study.com/day02/01-login.html
Accept-Encoding: gzip, deflate
Accept-Language: zh-CN,zh;q=0.8,en;q=0.6

//------------------------请求体------------------------------------------
username=pp&password=123456
```

**GET请求与POST请求的对比** 

- GET请求没有请求体，因为GET请求的参数拼接到地址栏中了

- POST请求有请求体，就是传递的参数

  

## 响应与响应报文

```javascript
//---------------------状态行（响应行）-------------------------------
//HTTP/1.1  HTTP版本
//200 响应的状态
	//200表示成功
	//304表示读缓存
	//404表示找不到资源
	//500表示服务端错误
HTTP/1.1 200 OK

//----------------------响应头-----------------------------------------------
Date: Thu, 22 Jun 2017 16:51:22 GMT
Server: Apache/2.4.23 (Win32) OpenSSL/1.0.2j PHP/5.4.45
X-Powered-By: PHP/5.4.45
Content-Length: 18
Keep-Alive: timeout=5, max=100
Connection: Keep-Alive
//内容类型，告诉浏览器该如何解析响应结果
Content-Type: text/html;charset=utf-8
//-----------------------响应体------------------------------------------------
hello world
```





## 常见数据传输格式

### XML  可拓展的标记语言

> XML是一种标记语言，很类似HTML，其宗旨是用来传输数据，具有自我描述性（固定的格式的数据）。

#### 语法规则

1. 必须有一个根元素
2. 不可有空格、不可以数字或.开头、大小写敏感
3. 不可交叉嵌套
4. 属性双引号（浏览器自动修正成双引号了）
5. 特殊符号要使用实体（转义字符）
6. 注释和HTML一样

虽然可以描述和传输复杂数据，但是其解析过于复杂并且体积较大，所以实现开发已经很少使用了。

其解析方式类似于DOM

```xml
<?xml version='1.0'  encoding='utf-8' ?>
<root>
    <person num="1" >
        <name>鹏鹏</name>
        <sex>弯</sex>
        <age>1</age>
        <hobby>飙车</hobby>
        <album>&lt;&lt;老司机的自我修养&gt;&gt;</album>        
    </person>
    <person num='2'>
        <name>春哥</name>
        <sex>男</sex>
        <age>38</age>
        <hobby>修发动机</hobby>
        <album>C语言从入门到放弃</album>        
    </person>
</root>
```



### JSON

>  即 JavaScript Object Notation，另一种轻量级的文本数据交换格式，独立于语言。

####  语法规则

1、数据在名称/值对中
2、数据由逗号分隔(最后一个健/值对不能带逗号)
3、花括号保存对象方括号保存数组
4、使用双引号

#### JSON解析

> JSON数据在不同语言进行传输时，类型为字符串，不同的语言各自也都对应有解析方法，需要解析完成后才能读取

+ Javascript 解析方法

  JSON对象  JSON.parse()、JSON.stringify()；
  JSON兼容处理json2.js

  ##### JSON.parse(text[, reviver])

  text

  要被解析成JavaScript值的字符串

  `reviver` 可选

  转换器, 如果传入该参数(函数)，可以用来修改解析生成的原始值，调用时机在parse函数返回之前。

  '**JSON.parse()**'用于从一个字符串中解析出json 对象。例如

  var str='{"name":"cpf","age":"23"}'

  经 JSON.parse(str) 得到：

  Object: age:"23"

  ​            name:"cpf"

  ​            _proto_:Object

  ps:单引号写在{}外，每个属性都必须双引号，否则会抛出异常

  ```js
  JSON.parse('{}');              // {}
  JSON.parse('true');            // true
  JSON.parse('"foo"');           // "foo"
  JSON.parse('[1, 5, "false"]'); // [1, 5, "false"]
  JSON.parse('null');            // null
  JSON.parse('1');               //  1
  ```

  `**JSON.stringify()**` 方法是将一个JavaScript值(对象或者数组)转换为一个 JSON字符串，如果指定了replacer是一个函数，则可以替换值，或者如果指定了replacer是一个数组，可选的仅包括指定的属性。

  JSON.stringify(value[, replacer [, space]])

  `value`   将要序列化成 一个JSON 字符串的值。

  `replacer` 可选

  如果该参数是一个函数，则在序列化过程中，被序列化的值的每个属性都会经过该函数的转换和处理；如果该参数是一个数组，则只有包含在这个数组中的属性名才会被序列化到最终的 JSON 字符串中；如果该参数为null或者未提供，则对象所有的属性都会被序列化；关于该参数更详细的解释和示例，请参考[使用原生的 JSON 对象](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Using_native_JSON#The_replacer_parameter)一文。

  `space` 可选

  指定缩进用的空白字符串，用于美化输出（pretty-print）；如果参数是个数字，它代表有多少的空格；上限为10。该值若小于1，则意味着没有空格；如果该参数为字符串(字符串的前十个字母)，该字符串将被作为空格；如果该参数没有提供（或者为null）将没有空格。

  ```js
  JSON.stringify({});             // '{}'
  JSON.stringify(true);           // 'true'
  JSON.stringify("foo");          // '"foo"'
  JSON.stringify([1,"false",false]);//'[1,"false",false]'
  JSON.stringify({ x: 5 });       // '{"x":5}'
  JSON.stringify({x: 5, y: 6});// "{"x":5,"y":6}"
  
  JSON.stringify([new Number(1), new String("false"), new Boolean(false)]); // '[1,"false",false]'
  
  JSON.stringify({x: undefined, y: Object, z: Symbol("")}); // '{}'
  
  JSON.stringify([undefined, Object, Symbol("")]);     // '[null,null,null]' 
  
  JSON.stringify({[Symbol("foo")]: "foo"});    
  // '{}'
  
  JSON.stringify({[Symbol.for("foo")]: "foo"}, [Symbol.for("foo")]);// '{}'
  
  JSON.stringify(
      {[Symbol.for("foo")]: "foo"}, 
      function (k, v) {
          if (typeof k === "symbol"){
              return "a symbol";
          }
      }
  );
  
  
  // undefined 
  
  // 不可枚举的属性默认会被忽略：
  JSON.stringify( 
      Object.create(
          null, 
          { 
              x: { value: 'x', enumerable: false }, 
              y: { value: 'y', enumerable: true } 
          }
      )
  );
  
  // "{"y":"y"}"
  ```


+ PHP解析方法
+ json_encode() 、json_decode()
  **总结：** JSON体积小、解析方便且高效，在实际开发成为首选。

## AJAX

> 即 Asynchronous Javascript And XML，AJAX 不是一门的新的语言，而是对现有持术的综合利用。

+ 本质:是在HTTP协议的基础上以异步的方式通过js的XMLHttpRequest对象与服务器进行通信。


+ 作用：可以在页面不刷新的情况下，请求服务器，局部更新页面的数据；

### 异步与同步

>  指某段程序执行时不会阻塞其它程序执行，其表现形式为程序的执行顺序不依赖程序本身的书写顺序，相反则为同步。
>
>  (open()中参数true(默认)异步,false为同步)
>
>  open(method, url, async, user, password)
>
>  async传入boolean类型---true(默认)异步   false同步



> 其优势在于不阻塞程序的执行，从而提升整体执行效率。

+ 同步：同一时刻只能做一件事，上一步完成才能开始下一步 sync


+ 异步：同时做多件事，效率更高,做一件事情时，不影响另一件事情的进行。Async

XMLHttpRequest可以以异步方式的处理程序。

## XMLHttpRequest

> 浏览器内建对象，用于在后台与服务器通信(交换数据) ， 由此我们便可实现对网页的部分更新，而不是刷新整个页面。这个请求是异步，即在往服务器发送请求时，并不会阻碍程序的运行，浏览器会继续渲染后续的结构。



### 发送get请求

XMLHttpRequest以异步的方式发送HTTP请求，因此在发送请求时，一样需要遵循HTTP协议。

```javascript
//使用XMLHttpRequest发送get请求的步骤
//1. 创建一个XMLHttpRequest对象
var xhr = new XMLHttpRequest();
//2. 设置请求行
//第一个参数:请求方式  get/post
//第二个参数:请求的地址 需要在url后面拼上参数列表
xhr.open("get", "08.php?name=hucc");
//3. 设置请求头
xhr.setReqeustHeader('content-type','text/html');
//浏览器会给我们默认添加基本的请求头,get请求时无需设置
//4. 设置请求体
//get请求的请求体为空,因为参数列表拼接到url后面了
xhr.send(null);
```

+ get请求,设置请求行时,需要把参数列表拼接到url后面
+ get请求不用设置请求头
+ get请求的请求体为null



### 发送post请求

```javascript
var xhr = new XMLHttpRequest();
//1. 设置请求行 post请求的参数列表在请求体中
xhr.open("post", "09.php");
//2. 设置请求头, post请求必须设置content-type,不然后端无法获取到数据
xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
//3. 设置请求体
xhr.send("name=hucc&age=18");
```

+ post请求,设置请求行时,参数列表不能拼接到url后面

+ post必须设置请求头中的content-type为application/x-www-form-urlencoded

+ post请求需要将参数列表设置到请求体中.



### 获取响应

HTTP响应分为3个部分，状态行、响应头、响应体。

```javascript
//给xhr注册一个onreadystatechange事件，当xhr的状态发生状态发生改变时，会触发这个事件。
xhr.onreadystatechange = function () {
  if(xhr.readyState == 4){
    //1. 获取状态行
    // 响应的状态
	//200表示成功
	//302 重定向
	//304表示文档未修改
	//404表示找不到资源
	//500表示服务端错误
    console.log("状态行:"+xhr.status);
    //2. 获取响应头
    console.log("所有的响应头:"+xhr.getAllResponseHeaders());
    console.log("指定响应头:"+xhr.getResponseHeader("content-type"));
    //3. 获取响应体
    console.log(xhr.responseText);
  }
}
```

**readyState** 

> readyState:记录了XMLHttpRequest对象的当前状态

```javascript
//0：请求未初始化（还没有调用 open()）。
//1：请求已经建立，但是还没有发送（还没有调用 send()）。
//2：请求已发送，正在处理中
//3：请求在处理中；通常响应中已有部分数据可用了，但是服务器还没有完成响应的生成。
//4：响应已完成；您可以获取并使用服务器的响应了。(我们只需要关注状态4即可)
```



## 兼容性处理

```javascript
var xhr = null;
if(XMLHttpRequest){
  //现代浏览器
  xhr = new  XMLHttpRequest();
}else{
  //IE5.5支持
  xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
}
```


## 封装ajax工具函数

> 每次发送ajax请求，其实步骤都是一样的，重复了大量代码，我们完全可以封装成一个工具函数。

```javascript
//1. 创建xhr对象
//2. 设置请求行
//3. 设置请求头
//3. 设置请求体
//4. 监听响应状态
//5. 获取响应内容
```

### 参数提取


| 参数名      | 参数类型     | 描述      | 传值           | 默认值                                    |
| -------- | :------- | ------- | ------------ | -------------------------------------- |
| type     | string   | 请求方式    | get/post     | 只要不传post，就是get                         |
| url      | string   | 请求地址    | 接口地址         | 如果不传地址，不发送请求                           |
| data     | object   | 请求数据    | `{key:valu}` | 需要把这个对象拼接成参数的格式 uname=hucc&upass=12345 |
| callback | function | 渲染数据的函数 | 函数           | 空                                      |

### 完整代码

```js
var $={
  
    ajax:function(obj){
        //获取用户的参数
        var type=obj.type||'get'; //默认请求方式是get
        var url=obj.url||location.href; //默认请求当前页面
        var callback=obj.callback;
        //1-js中使用对最方便接受的参数是对象，但是传递给服务器的格式 name=zs&age=18
        var data=this.setParam(obj.data); //name=zs&age=18

        // console.log(data);
        //封装ajax公共代码部分
        //1-创建XMLHttpRequest对象
        var xhr=new XMLHttpRequest();

        //模拟http协议
        //如果是get请求在url后面拼接参数
        if(type=='get'){
            url=url+'?'+data;
            data=null;
        }
        //1-请求行
        xhr.open(type,url);
        //2-请求头 post 必须设置请求头
        if(type=='post'){
            xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');
        }
        //3-请求主体
        xhr.send(data);

        //监听服务器的响应
        xhr.onreadystatechange=function(){
            if(xhr.readyState==4 &&xhr.status==200){
                var r=xhr.responseText;//获取响应主体
                //r中就是服务器返回核心数据 需要渲染
                callback&&callback(r);
            }
        }
    },
  
    //将对象转成 name=zs&age=18
    setParam:function(obj){
        
        if(typeof obj =='object'){ 
            var str='';                  
            for(var k in obj){
                str+=k+'='+obj[k]+'&';
            }
            str=str.substr(0,str.length-1); //参数一：开始索引 参数二：截取长度
        }

        return str;//返回转换后的字符串
    }
};        
```



## jQuery中的ajax方法

> jQuery为我们提供了更强大的Ajax封装

### $.ajax

参数列表

| 参数名称       | 描述       | 取值                  | 示例                                |
| ---------- | -------- | ------------------- | --------------------------------- |
| url        | 接口地址     |                     | url:"02.php"                      |
| type       | 请求方式     | get/post            | type:"get"                        |
| timeout    | 超时时间     | 单位毫秒                | timeout:5000                      |
| dataType   | 服务器返回的格式 | json/xml/text(默认)   | dataType:"json"                   |
| data       | 发送的请求数据  | 对象                  | data:{name:"zs", age:18}          |
| beforeSend | 调用前的回调函数 | function(){}        | beforeSend:function(){ alert(1) } |
| success    | 成功的回调函数  | function (data) {}  | success:function (data) {}        |
| error      | 失败的回调函数  | function (error) {} | error:function(data) {}           |
| complete   | 完成后的回调函数 | function () {}      | complete:function () {}           |

###   dataType

​	类型：String

- 预期服务器返回的数据类型。如果不指定，jQuery 将自动根据 HTTP 包 MIME 信息来智能判断，比如 XML MIME 类型就被识别为 XML。在 1.4 中，JSON 就会生成一个 JavaScript 对象，而 script 则会执行这个脚本。随后[服务器端](https://www.baidu.com/s?wd=%E6%9C%8D%E5%8A%A1%E5%99%A8%E7%AB%AF&tn=SE_PcZhidaonwhc_ngpagmjz&rsv_dl=gh_pc_zhidao)返回的数据会根据这个值解析后，传递给[回调函数](https://www.baidu.com/s?wd=%E5%9B%9E%E8%B0%83%E5%87%BD%E6%95%B0&tn=SE_PcZhidaonwhc_ngpagmjz&rsv_dl=gh_pc_zhidao)。可用值:

- "xml": 返回 XML 文档，可用 jQuery 处理。
- "html": 返回纯文本 HTML 信息；包含的 script 标签会在插入 dom 时执行。
- "script": 返回纯文本 JavaScript 代码。不会自动缓存结果。除非设置了 "cache" 参数。注意：在远程请求时(不在同一个域下)，所有 POST 请求都将转为 GET 请求。（因为将使用 DOM 的 script标签来加载）
- "json": 返回 JSON 数据 。
- "jsonp": JSONP 格式。使用 JSONP 形式调用函数时，如 "myurl?callback=?" jQuery 将自动替换 ? 为正确的函数名，以执行[回调函数](https://www.baidu.com/s?wd=%E5%9B%9E%E8%B0%83%E5%87%BD%E6%95%B0&tn=SE_PcZhidaonwhc_ngpagmjz&rsv_dl=gh_pc_zhidao)。
- "text": 返回纯文本字符串  



使用示例：

```javascript
$.ajax({
  type:"get",//请求类型
  url:"02.php",//请求地址
  data:{name:"zs", age:18},//请求数据
  dataType:"json",//希望接受的数据类型
  timeout:5000,//设置超时时间
  beforeSend:function () {
    //alert("发送前调用");
  },
  success:function (data) {
    //alert("成功时调用");
    console.log(data);
  },
  error:function (error) {
    //alert("失败时调用");
    console.log(error);
  },
  complete:function () {
    //alert("请求完成时调用");
  }
});
```
【案例：登录案例.html】

### 其他api(了解)

```javascript
//$.post(url, callback, [dataType]);只发送post请求
//$.get(url, callback, [dataType]);
//$.getJSON(url, callback);
//$.getScript(url,callback);//载入服务器端的js文件
//$("div").load(url);//载入一个服务器端的html页面。
```

## jQuery Ajax 操作函数

jQuery 库拥有完整的 Ajax 兼容套件。其中的函数和方法允许我们在不刷新浏览器的情况下从服务器加载数据。

| 函数                                                         | 描述                                                         |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [jQuery.ajax()](http://www.w3school.com.cn/jquery/ajax_ajax.asp) | 执行异步 HTTP (Ajax) 请求。                                  |
| [.ajaxComplete()](http://www.w3school.com.cn/jquery/ajax_ajaxcomplete.asp) | 当 Ajax 请求完成时注册要调用的处理程序。这是一个 Ajax 事件。 |
| [.ajaxError()](http://www.w3school.com.cn/jquery/ajax_ajaxerror.asp) | 当 Ajax 请求完成且出现错误时注册要调用的处理程序。这是一个 Ajax 事件。 |
| [.ajaxSend()](http://www.w3school.com.cn/jquery/ajax_ajaxsend.asp) | 在 Ajax 请求发送之前显示一条消息。                           |
| [jQuery.ajaxSetup()](http://www.w3school.com.cn/jquery/ajax_ajaxsetup.asp) | 设置将来的 Ajax 请求的默认值。                               |
| [.ajaxStart()](http://www.w3school.com.cn/jquery/ajax_ajaxstart.asp) | 当首个 Ajax 请求完成开始时注册要调用的处理程序。这是一个 Ajax 事件。 |
| [.ajaxStop()](http://www.w3school.com.cn/jquery/ajax_ajaxstop.asp) | 当所有 Ajax 请求完成时注册要调用的处理程序。这是一个 Ajax 事件。 |
| [.ajaxSuccess()](http://www.w3school.com.cn/jquery/ajax_ajaxsuccess.asp) | 当 Ajax 请求成功完成时显示一条消息。                         |
| [jQuery.get()](http://www.w3school.com.cn/jquery/ajax_get.asp) | 使用 HTTP GET 请求从服务器加载数据。                         |
| [jQuery.getJSON()](http://www.w3school.com.cn/jquery/ajax_getjson.asp) | 使用 HTTP GET 请求从服务器加载 JSON 编码数据。               |
| [jQuery.getScript()](http://www.w3school.com.cn/jquery/ajax_getscript.asp) | 使用 HTTP GET 请求从服务器加载 JavaScript 文件，然后执行该文件。 |
| [.load()](http://www.w3school.com.cn/jquery/ajax_load.asp)   | 从服务器加载数据，然后把返回到 HTML 放入匹配元素。           |
| [jQuery.param()](http://www.w3school.com.cn/jquery/ajax_param.asp) | 创建数组或对象的序列化表示，适合在 URL 查询字符串或 Ajax 请求中使用。 |
| [jQuery.post()](http://www.w3school.com.cn/jquery/ajax_post.asp) | 使用 HTTP POST 请求从服务器加载数据。                        |
| [.serialize()](http://www.w3school.com.cn/jquery/ajax_serialize.asp) | 将表单内容序列化为字符串。                                   |
| [.serializeArray()](http://www.w3school.com.cn/jquery/ajax_serializearray.asp) | 序列化表单元素，返回 JSON 数据结构数据。                     |

### 接口化开发

请求地址即所谓的接口，通常我们所说的接口化开发，其实是指一个接口对应一个功能， 并且严格约束了**请求参数** 和**响应结果** 的格式，这样前后端在开发过程中，可以减少不必要的讨论， 从而并行开发，可以极大的提升开发效率，另外一个好处，当网站进行改版后，服务端接口进行调整时，并不影响到前端的功能。



#### 获取短信验证码接口

**需求文档(产品)** 

```javascript
//总需求：点击发送按钮，向服务端发送请求
//需求1：格式校验
  //1. 手机号码不能为空   如果为空提示"手机号不能为空"
  //2. 手机号码格式必须正确,     提示"请输入正确的手机号码"
//需求2：点击发送时，按钮显示为"发送中",并且不能重复提交请求
//需求3：根据不同的响应结果，进行响应。
  //1. 如果接口调用成功
      //如果响应代码为100，倒计时
      //如果响应代码为101，提示手机号重复
  //2. 如果接口调用失败，告诉用户"服务器繁忙，请稍候再试"
```

**接口文档**

```javascript
//接口说明：获取短信验证码
//接口地址：getCode.php
//请求方式：get
//接口传参：mobile 手机号
//返回类型  json
//接口返回：{"code":"101","msg":"手机号码存在", "mobile":"18511249258"}
        //code 当前业务逻辑的处理成功失败的标识  100:成功   101:手机号码存在
        //msg  当前系统返回给前端提示
        //mobile  当前的手机号码
```



#### 注册接口

**表单序列化**

jquery提供了一个`serialize()`方法序列化表单，说白就是将表单中带有name属性的所有参数拼成一个格式为`name=value&name1=value1`这样的字符串。方便我们获取表单的数据。

```javascript
//serialize将表单参数序列化成一个字符串。必须指定name属性
//name=hucc&pass=123456&repass=123456&mobile=18511249258&code=1234
$('form').serialize();

//serializeArray将表单序列化成一个数组，必须指定name属性
//[{name:"name", value:"hucc"},{name:"pass", value:"123456"},{name:"repass", value:"123456"},{name:"mobile", value:"18511241111"}, {name:"code", value:"1234"}]
$('form').serializeArray();
```

**jquery的ajax方法，data参数能够直接识别表单序列化的数据`data:$('form').serializeArray()`**

```javascript
$.post({
  url:"register.php",
  data:$('form').serializeArray(),
  dataType:'json',
  success:function (info) {
    console.log(info);
  }
});
```



**需求文档**

```javascript
//注册功能
//总需求：点击注册按钮，向服务端发送请求
//需求1:表单校验
  //1.1 用户名不能为空，否则提示"请输入用户名"
  //1.2 密码不能为空，否则提示"请输入密码"
  //1.3 确认密码必须与密码一直，否则提示"确认密码与密码不一致"
  //1.4 手机号码不能为空，否则提示"请输入手机号码";
  //1.5 手机号码格式必须正确，否则提示"手机号格式错误"
  //1.6 短信验证码必须是4位的数字，否则提示"验证码格式错误"
//需求2：点击注册按钮时，按钮显示为"注册中...",并且不能重复提交请求
//需求3：根据不同响应结果，处理响应
  //3.1 接口调用成功
    //100 提示用户注册成功，3s后跳转到首页
    //101 提示用户"用户名hucc已经存在"
    //102 提示用户"验证码错误"
  //3.1 接口调用失败，提示"服务器繁忙，请稍后再试",恢复按钮的值
```

**接口文档**

```javascript
//接口说明：注册
//接口地址：register.php
//请求方式：post
//接口传参：name:用户名 pass:密码 code:验证码  mobile:手机号
//返回类型  json
//接口返回：{"code":"100","msg":"注册成功","name":"huccc"}
        //code 当前业务逻辑的处理成功失败的标识  100:成功  101:用户存在 102:验证码错误
        //msg  当前系统返回给前端提示
        //name: 注册的用户名
```


# 模板引擎

> 是为了使用户界面与业务数据（内容）分离而产生的，它可以生成特定格式的文档，用于网站的模板引擎就会生成一个标准的HTML文档。

## 为什么要使用模板引擎

我们通过ajax获取到数据后，需要把数据渲染到页面，在学习模板引擎前，我们的做法是大量的拼接字符串，对于结构简单的页面，这么做还行，但是如果页面结构很复杂，使用拼串的话**代码可阅读性非常的差，而且非常容易出错，后期代码维护也是相当的麻烦。** 

【演示：使用拼串进行渲染的缺点.html】



## 常见的模板引擎

BaiduTemplate：http://tangram.baidu.com/BaiduTemplate/
velocity.js：https://github.com/shepherdwind/velocity.js/
ArtTemplate：https://github.com/aui/artTemplate

artTemplate是使用最广泛，效率最高的模板引擎，需要大家掌握。



## artTemplate的使用

[github地址](https://github.com/aui/art-template)

[中文api地址](https://aui.github.io/art-template/docs/)

### artTemplate入门

**1.引入模板引擎的js文件** 

```javascript
<script src="template-web.js"></script>
```

**2.准备模板** 

```html
<!--
  指定了type为text/html后，这一段script标签并不会解析，也不会显示。
-->
<script type="text/html" id="myTmp">
  <p>姓名：隔壁老王</p>
  <p>年龄：18</p>
  <p>技能：查水表</p>
  <p>描述：年轻力气壮</p>
</script>
```

**3.准备数据**

```javascript
//3. 准备数据,数据是后台获取的，可以随时变化
var json = {
  userName:"隔壁老王",
  age:18,
  skill:"查水表",
  desc:"年轻气壮"
}
```

**4.将模板与数据进行绑定**

```javascript
//第一个参数：模板的id
//第二个参数：数据
//返回值：根据模板生成的字符串。
var html = template("myTmp", json);
console.log(html);
```

**5.修改模板**

```html
<script type="text/html" id="myTmp">
  <p>姓名：{{userName}}</p>
  <p>年龄：{{age}}</p>
  <p>技能：{{skill}}</p>
  <p>描述：{{desc}}</p>
</script>
```



**6.将数据显示到页面**

```javascript
var div = document.querySelector("div");
div.innerHTML = html;
```



### artTemplate语法

**if语法**

```html
{{if gender='男'}}
  <div class="man">
{{else}}
  <div class="woman">
{{/if}}
```

**each语法**

```html
<!--
  1. {{each data}}  可以通过$value 和 $index获取值和下标
  2. {{each data v i}}  自己指定值为v，下标为i
-->
{{each data v i}}
<li>
  <a href="{{v.url}}">
    <img src="{{v.src}}" alt="">
    <p>{{v.content}}</p>
   </a>
 </li>
{{/each}}
```

```javascript
//如果返回的数据是个数组，必须使用对象进行包裹，因为在{{}}中只写书写对象的属性。
var html = template("navTmp", {data:info});
```



# 线程与进程

## 进程

狭义定义：**进程就是一段程序的执行过程。

**广义定义：**进程是一个具有一定独立功能的程序关于某个数据集合的一次运行活动。它是操作系统动态执行的基本单元，在传统的操作系统中，进程既是基本的分配单元，也是基本的执行单元。

**简单的来讲进程的概念主要有两点**：**第一**，进程是一个实体。每一个进程都有它自己的地址空间，一般情况下，包括文本区域（text region）、数据区域（data region）和堆栈（stack region）。文本区域存储处理器执行的代码；数据区域存储变量和进程执行期间使用的动态分配的内存；堆栈区域存储着活动过程调用的指令和本地变量。**第二**，进程是一个“执行中的程序”。程序是一个没有生命的实体，只有处理器赋予程序生命时，它才能成为一个活动的实体，我们称其为进程。

**进程状态：**进程有三个状态，就绪、运行和阻塞。就绪状态其实就是获取了出cpu外的所有资源，只要处理器分配资源就可以马上执行。就绪状态有排队序列什么的，排队原则不再赘述。运行态就是获得了处理器分配的资源，程序开始执行。阻塞态，当程序条件不够时候，需要等待条件满足时候才能执行，如等待i/o操作时候，此刻的状态就叫阻塞态。

## **程序**

说起进程，就不得不说下程序。先看定义：程序是指令和数据的有序集合，其本身没有任何运行的含义，是一个静态的概念。而进程则是在处理机上的一次执行过程，它是一个动态的概念。这个不难理解，其实进程是包含程序的，进程的执行离不开程序，进程中的文本区域就是代码区，也就是程序。

## 线程

通常在一个进程中可以包含若干个线程，当然一个进程中至少有一个线程，不然没有存在的意义。线程可以利用进程所拥有的资源，在引入线程的操作系统中，通常都是把进程作为分配资源的基本单位，而把线程作为独立运行和独立调度的基本单位，由于线程比进程更小，基本上不拥有系统资源，故对它的调度所付出的开销就会小得多，能更高效的提高系统多个程序间并发执行的程度。

## **多线程**

在一个程序中，这些独立运行的程序片段叫作“线程”（Thread），利用它编程的概念就叫作“多线程处理”。多线程是为了同步完成多项任务，不是为了提高运行效率，而是为了提高资源使用效率来提高系统的效率。线程是在同一时间需要完成多项任务的时候实现的。

最简单的比喻多线程就像火车的每一节车厢，而进程则是火车。车厢离开火车是无法跑动的，同理火车也不可能只有一节车厢。多线程的出现就是为了提高效率。

### **进程与线程的区别：**

进程和线程的主要差别在于它们是不同的操作系统资源管理方式。进程有独立的地址空间，一个进程崩溃后，在保护模式下不会对其它进程产生影响，而线程只是一个进程中的不同执行路径。线程有自己的堆栈和局部变量，但线程之间没有单独的地址空间，**一个线程死掉就等于整个进程死掉**，**所以多进程的程序要比多线程的程序健壮**，但在进程切换时，耗费资源较大，效率要差一些。但对于一些要求同时进行并且又要共享某些变量的并发操作，只能用线程，不能用进程。

1) 简而言之,一个程序至少有一个进程,一个进程至少有一个线程.

2) 线程的划分尺度小于进程，使得多线程程序的并发性高。

3) 另外，进程在执行过程中拥有独立的内存单元，而多个线程共享内存，从而极大地提高了程序的运行效率。

4) 线程在执行过程中与进程还是有区别的。每个独立的线程有一个程序运行的入口、顺序执行序列和程序的出口。但是线程不能够独立执行，必须依存在应用程序中，由应用程序提供多个线程执行控制。

5) 从逻辑角度来看，多线程的意义在于一个应用程序中，有多个执行部分可以同时执行。但操作系统并没有将多个线程看做多个独立的应用，来实现进程的调度和管理以及资源分配。这就是进程和线程的重要区别。

### **优缺点**

线程和进程在使用上各有优缺点：线程执行开销小，但不利于资源的管理和保护；而进程正相反。同时，线程适合于在SMP(多核处理机)机器上运行，而进程则可以跨机器迁移。

## link标签

link标签真正的定义:链入一个文档,通过rel属性申明链入的文档与当前文档之间的关系

## 跨域

同源策略是浏览器的一种安全策略，所谓同源是指域名，协议，端口完全相同，只有同源的地址才可以相互通过AJAX 的方式请求。
同源或者不同源说的是两个地址之间的关系，不同源地址之间请求我们称之为跨域请求

/ 请求一个不同源的地址实际上就是我们所说的跨域请求

```javascript
// 当前页面访问地址：http://day-12.io/12-cross-origin.html
// 希望被请求的地址：http://locally.uieee.com/categories
//
// 校验目标：1 能发出去，2 能收回来

// img link script iframe  //自动发送请求
//
// ## 1. img
// 可以发送不同源地址之间的请求
// 无法拿到响应结果
// var img = new Image()
// img.src = 'http://locally.uieee.com/categories'

// ## 2. link
// 可以发送不同源地址之间的请求
// 无法拿到响应结果
// var link = document.createElement('link')
// link.rel = 'stylesheet'
// link.href = 'http://locally.uieee.com/categories'
// document.body.appendChild(link)

// ## 3. script
// 可以发送不同源地址之间的请求
// 无法拿到响应结果
// 借助于能够作为 JS 执行
var script = document.createElement('script')
script.src = 'http://localhost/time2.php'
document.body.appendChild(script) // 开始发起请求

// 相当于请求的回调
function foo (res) {
  console.log(res)
}

// console.log(a)
```
## JSONP

- JSON with Padding，是一种借助于 script 标签发送跨域请求的技巧。
- 其原理就是在客户端借助 script 标签请求服务端的一个动态网页（php 文件），服务端的这个动态网页返回一段带有函数调用的 JavaScript 全局函数调用的脚本，将原本需要返回给客户端的数据传递进去。
- 以后绝大多数情况都是采用 JSONP 的手段完成不同源地址之间的跨域请求

- 总结一下：由于 XMLHttpRequest 无法发送不同源地址之间的跨域请求，所以我们必须要另寻他法，script 这种方案就是我们最终选择的方式，我们把这种方式称之为 JSONP，如果你不了解原理，先记住怎么用，多用一段时间再来看原理。

1. JSONP 需要服务端配合，服务端按照客户端的要求返回一段 JavaScript 调用客户端的函数
2. 只能发送 GET 请求
    注意：JSONP 用的是 script 标签，跟 AJAX 提供的 XMLHttpRequest 没有任何关系！！！
3. jQuery 中使用 JSONP 就是将 dataType 设置为 jsonp

## CORS

Cross Origin Resource Share，跨域资源共享

```
// 允许远端访问
header('Access‐Control‐Allow‐Origin: *');
```

这种方案无需客户端作出任何变化（客户端不用改代码），只是在被请求的服务端响应的时候添加一个 Access-Control-Allow-Origin 的响应头，表示这个资源是否允许指定域请求。

## XMLHttpRequest2.0

> XMLHttpRequest是一个javascript内置对象，使得Javascript可以进行异步的HTTP通信。2008年2月，就提出了XMLHttpRequest Level 2 草案。

老版本的XMLHttpRequest的缺点：

```javascript
1. 仅支持传输文本数据，无法传输二进制文件，比如图片视频等。
2. 传输数据时，没有进度信息，只能提示完成与否。
3. 受到了"同源策略"的限制
```



新版本的功能：

```javascript
1. 可以设置timeout超时时间
2. 可以使用formData对象管理表单数据
3. 允许请求不同域名下的数据（跨域）
4. 支持上传二进制文件
5. 可以获取数据传输的进度信息
```

**注意：我们现在使用new XMLHttpRequest创建的对象就是2.0对象了，我们之前学的是1.0的语法，现在学习一些2.0的新特性即可。**  

## timeout设置超时

```javascript
xhr.timeout = 3000;//设置超时时间
xhr.ontimeout = function(){
  alert("请求超时");
}
```



## formData管理表单数据

> formData对象类似于jquery的serialize方法，用于管理表单数据

```javascript
使用特点： 
1. 实例化一个formData对象， new formData(form); form就是表单元素
2. formData对象可以直接作为 xhr.send(formData)的参数。注意此时数据是以二进制的形式进行传输。
3. formData有一个append方法，可以添加参数。formData.append("id", "1111");
4. 这种方式只能以post形式传递，不需要设置请求头，浏览器会自动为我们设置一个合适的请求头。
```



代码示例：

```javascript
//1. 使用formData必须发送post请求
    xhr.open("post", "02-formData.php");
    
//2. 获取表单元素
var form = document.querySelector("#myForm");
//3. 创建form对象，可以直接作为send的参数。
var formData = new FormData(form);

//4. formData可以使用append方法添加参数
formData.append("id", "1111");

//5. 发送，不需要指定请求头，浏览器会自动选择合适的请求头
xhr.send(formData);
```



## 文件上传

> 以前，文件上传需要借助表单进行上传，但是表单上传是同步的，也就是说文件上传时，页面需要提交和刷新，用户体验不友好，xhr2.0中的formData对象支持文件的异步上传。

```javascript
var formData = new FormData();
//获取上传的文件，传递到后端
var file = document.getElementById("file").files[0];
formData.append("file", file);
xhr.send(formData);
```



## 显示文件进度信息

> xhr2.0还支持获取上传文件的进度信息，因此我们可以根据进度信息可以实时的显示文件的上传进度。

```javascript
1. 需要注册 xhr.upload.onprogress = function(e){} 事件，用于监听文件上传的进度.注意：需要在send之前注册。
2. 上传的进度信息会存储事件对象e中
3. e.loaded表示已上传的大小   e.total表示整个文件的大小
```



代码参考：

```javascript
xhr.upload.onprogress = function (e) {
  
  inner.style.width = (e.loaded/e.total*100).toFixed(2)+"%";
  span.innerHTML = (e.loaded/e.total*100).toFixed(2)+"%";
}

xhr.send(formData);
```

如果上传文件超过8M，php会报错，需要进行设置，允许php上传大文件。





## 跨域资源共享(CORS) ( 兼容性IE10+ )

### cors的使用

> 新版本的XMLHttpRequest对象，可以向不同域名的服务器发出HTTP请求。这叫做["跨域资源共享"](http://en.wikipedia.org/wiki/Cross-Origin_Resource_Sharing)（Cross-origin resource sharing，简称CORS）。

跨域资源共享（CORS）的前提

- 浏览器支持这个功能( 兼容性IE10+ )
- 服务器必须允许这种跨域。

服务器允许跨域的代码：

```php
//允许所有的域名访问这个接口
header("Access-Control-Allow-Origin:*");
//允许www.study.com这个域名访问这个接口
header("Access-Control-Allow-Origin:http://www.study.com");
```



### CORS的具体流程（了解）

1. 浏览器发送跨域请求

2. 服务器端收到一个跨域请求后，在响应头中添加Access-Control-Allow-Origin Header资源权限配置。发送响应

3. 浏览器收到响应后，查看是否设置了`header('Access-Control-Allow-Origin:请求源域名或者*');`

   如果当前域已经得到授权，则将结果返回给[JavaScript](http://lib.csdn.net/base/javascript)。否则浏览器忽略此次响应。

结论：

1. **跨域行为是浏览器行为，响应是回来了, 只是浏览器安全机制做了限制,  对于跨域响应内容进行了忽略。**
2. **服务器与服务器之间是不存在跨域的问题的**



### jsonp与cors的对比

- jsonp兼容性好，老版本浏览器也支持，但是jsonp仅支持get请求，发送的数据量有限。使用麻烦
- cors需要浏览器支持cors功能才行。但是使用简单，**只要服务端设置允许跨域，对于客户端来说，跟普通的get、post请求并没有什么区别。**
- 跨域的安全性问题：**因为跨域是需要服务端配合控制的** ，也就是说不论jsonp还是cors，如果没有服务端的允许，浏览器是没法做到跨域的。

## XHR2 调用接口上传文件

```js
/**
 * 异步上传文件
 */
$('#upload').on('change', function () {
      // FormData用于管理表单数据的
      var  form=document.querySelector("#form1");
      //formData对象 管理form表单
      var  formData=new FormData(form);

      // 发送给服务器 
      var  xhr=new XMLHttpRequest();
      xhr.open('post','./02-formData.php');
  	  //1-必须使用post方式
  	  //2-切记不需要设置请求头，浏览器会自动设置要给合适的请求头
      xhr.send(formData); //直接发送formData 

      xhr.onreadystatechange=function(){
        if(xhr.readyState==4 && xhr.status==200){
          var r=xhr.responseText;
        }
      }
})
```

jQuery 也是可以的（内部仍然是使用的 XMLHttpRequest level 2）

```js
/**
 * 异步上传文件
 */
$('#upload').on('change', function () {
  // 准备要上传的数据
  var formData = new FormData(form)
  formData.append('file', this.files[0])

  // 发送 AJAX 请求，上传文件
  $.ajax({
    url: '/admin/upload.php',  
    contentType: false, //设置编码类型
    processData: false, //设置传递值方式
    data: formData,
    type: 'post',
    success: function (res) {
      if (res.success) {
        $('#image').val(res.data).siblings('.thumbnail').attr('src', res.data).fadeIn()
      } else {
        $('#image').val('').siblings('.thumbnail').fadeOut()
        notify('上传文件失败')
      }
    }
  })
})
```

1、contentType:

```
(默认: "application/x-www-form-urlencoded") 发送信息至服务器时内容编码类型。默认值适合大多数情况。如果你明确地传递了一个content-type给 $.ajax() 那么他必定会发送给服务器（即使没有数据要发送）
```

2、processData

```
(默认: true) 默认情况下，通过data选项传递进来的数据，如果是一个对象(技术上讲只要不是字符串)，都会处理转化成一个查询字符串，以配合默认内容类型 "application/x-www-form-urlencoded"。如果要发送 DOM 树信息或其它不希望转换的信息，请设置为 false。
```

3、FormData

```
XMLHttpRequest Level 2添加了一个新的接口FormData.利用FormData对象,我们可以通过JavaScript用一些键值对来模拟一系列表单控件,我们还可以使用XMLHttpRequest的send()方法来异步的提交这个"表单".比起普通的ajax,使用FormData的最大优点就是我们可以异步上传一个二进制文件.
```

