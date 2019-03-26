# jQuery

## css操作

> 功能：设置或者修改样式，操作的是style属性。

> 操作单个样式

```javascript
//name：需要设置的样式名称
//value：对应的样式值
css(name, value);
//使用案例
$("#one").css("background","gray");//将背景色修改为灰色
```

> 设置多个样式

```javascript
//参数是一个对象，对象中包含了需要设置的样式名和样式值
css(obj);
//使用案例
$("#one").css({
    "background":"gray",
    "width":"400px",
    "height":"200px"
});
```

> 获取样式

```javascript
//name:需要获取的样式名称
css(name);
//案例
$("div").css("background-color");
```

注意：获取样式操作只会返回第一个元素对应的样式值。

隐式迭代：

1. 设置操作的时候，如果是多个元素，那么给所有的元素设置相同的值
2. 获取操作的时候，如果是多个元素，那么只会返回第一个元素的值。

## class操作

> 添加样式类   addClass('name');

```javascript
//name：需要添加的样式类名，注意参数不要带点.
addClass(name);
//例子,给所有的div添加one的样式。
$(“div”).addClass(“one”);
```

> 移除样式类  removeClass('name')

```javascript	
//name:需要移除的样式类名
removeClass(“name”);
//例子，移除div中one的样式类名
$(“div”).removeClass(“one”);
```

> 判断是否有某个样式类   hasClass('name')

```javascript
//name: 用于判断的样式类名，返回值为true false
hasClass(name)
//例子，判断是否有one的样式类
$(“div”).hasClass(“one”);
```

> 切换样式类   toggleClass('name')

```javascript
//name:需要切换的样式类名，如果有，移除该样式，如果没有，添加该样式。
toggleClass(name);
//例子
$(“div”).toggleClass(“one”);
```

## attr操作

- 设置单个属性  attr(name, value);

```javascript
//第一个参数：需要设置的属性名
//第二个参数：对应的属性值
attr(name, value);
//用法举例
$(“img”).attr(“title”,”哎哟，不错哦”);
$(“img”).attr(“alt”,“哎哟，不错哦”);
```

- 设置多个属性  attr(obj)

```javascript
//参数是一个对象，包含了需要设置的属性名和属性值
attr(obj)
//用法举例
$("img").attr({
    title:"哎哟，不错哦",
    alt:"哎哟，不错哦",
    style:"opacity:.5"
});
```

- 获取属性  attr(name)

```javascript
//传需要获取的属性名称，返回对应的属性值
attr(name)
//用法举例
var oTitle = $("img").attr("title");
alert(oTitle);
```

- 移除属性  removeAttr(name);

```javascript
//参数：需要移除的属性名，
removeAttr(name);
//用法举例
$("img").removeAttr("title");
```

## prop操作

> 在jQuery1.6之后，对于checked、selected、disabled这类boolean类型的属性来说，不能用attr方法，只能用prop方法。

```javascript
//设置属性
$(“input:checked”).prop(“checked”,true);
//获取属性
$(“input:checked”).prop(“checked”);//返回true或者false

```

## jQuery

### 三组基本动画

- 显示(show)与隐藏(hide)是一组动画

- 滑入(slideUp)与滑出(slideDown)与切换(slideToggle)，效果与卷帘门类似

- 淡入(fadeIn)与淡出(fadeOut)与切换(fadeToggle)

- 自定义动画

  - animate: 自定义动画

    ```javascript
    $(selector).animate({params},[speed],[easing],[callback]);
    // {params}：要执行动画的CSS属性，带数字（必选）
    // speed：执行动画时长（可选）
    // easing: 执行效果，默认为swing（缓动）  可以是linear（匀速）
    // callback：动画执行完后立即执行的回调函数（可选）
    ```

  - 动画队列与停止动画   .stop()

    ```javascript
    //stop方法：停止动画效果
    stop(clearQueue, jumpToEnd);
    //第一个参数：是否清除队列
    //第二个参数：是否跳转到最终效果
    ```

## 创建节点

- $(htmlStr)

```javascript
//$(htmlStr)
//htmlStr：html格式的字符串
$("<span>这是一个span元素</span>");
```

## 添加节点

> append       appendTo
> prepend      prependTo
> before
> after

### 追加到子元素的后面

- $(A).append(B)  将B加入到A中----------A与B此时为父子关系
- $(A).appendTo(B)   把A追加到B中----------A与B此时为父子关系

### 追加到子元素的前面

- $(A).prepend(B)  将B加入到A中-------A与B此时为父子关系
- $(A).prependTo(B)   把A追加到B中-------A与B此时为父子关系

### 追加到当前元素的后面

- $(A).after(B)   将B加入到A的后面-------------A与B此时为兄弟元素

### 追加到当前元素的前面

- $(A).before(B)   将B加入到A的前面-----------A与B此时为兄弟元素

## 清空节点与删除节点

> empty：清空指定节点的所有元素，自身保留(清理门户)

```javascript
$(“div”).empty();//清空div的所有内容（推荐使用，会清除子元素上绑定的内容，源码）
$(“div”).html(“”);//使用html方法来清空元素，不推荐使用，会造成内存泄漏，绑定的事件不会被清除。
```

> remove：相比于empty，自身也删除（自杀）

```javascript
$(“div”).remove();
```

## 克隆节点

> 作用：复制匹配的元素
>
> $(A).clone().appendTo($(B));       深度复制节点A,并将复制的节点加入到B中
>    * 不传参数与传参数都是深复制
>         * 传false------不会复制事件
>         * 传true-------事件也会复制

```javascript
// 复制$(selector)所匹配到的元素（深度复制）
//cloneNode(true)
// 返回值为复制的新元素，和原来的元素没有任何关系了。即修改新元素，不会影响到原来的元素。
$(selector).clone();
```



## mouseover 与 mouseenter

> mouseover 和 mouseenter 都有鼠标经过的意思，但是在注册鼠标经过事件的时候，推荐使用`mouseenter`

[mouseenter 与 mouseover 的不同](http://www.w3school.com.cn/tiy/t.asp?f=jquery_event_mouseenter_mouseover)

1. mouseover与mouseout是一对事件，当鼠标经过当前元素或者当前元素的子元素的时候，mouseover事件都会触发 `事件冒泡`。
2. mouseenter 与mouseleave是一对事件，只有当鼠标经过当前元素时，事件会触发，鼠标经过子元素，mousenter事件是不会触发的。

## index方法

> `index()`方法返回的是当前元素在所有兄弟元素里面的索引。

```html
<ul>
  <li><a href="#">我是链接</a></li>
  <li><a href="#">我是链接</a></li>
  <li><a href="#">我是链接</a></li>
  <li><a href="#">我是链接</a></li>
  <li><a href="#">我是链接</a></li>
  <li><a href="#">我是链接</a></li>
  <li><a href="#">我是链接</a></li>
  <li><a href="#">我是链接</a></li>
  <li><a href="#">我是链接</a></li>
</ul>
```

**当碰到这种结构的时候，推荐给li注册事件，这样通过index方法才能获取到正确的索引值。**

## val方法

> val方法用于设置和获取表单元素的值，例如input、textarea的值

```javascript
//设置值
$("#name").val(“张三”);
//获取值
$("#name").val();
```

## html方法与text方法

> html方法相当于innerHTML  text方法相当于innerText

```javascript
//设置内容
$(“div”).html(“<span>这是一段内容</span>”);
//获取内容
$(“div”).html()

//设置内容
$(“div”).text(“<span>这是一段内容</span>”);
//获取内容
$(“div”).text()
```

区别：html方法会识别html标签，text方法会那内容直接当成字符串，并不会识别html标签。

## width方法与height方法

> 设置或者获取高度

```javascript
//带参数表示设置高度
$(“img”).height(200);
//不带参数获取高度
$(“img”).height();

```

获取网页的可视区宽高

```javascript
//获取可视区宽度
$(window).width();
//获取可视区高度
$(window).height();
```

## scrollTop与scrollLeft

> 设置或者获取垂直滚动条的位置

```javascript
//获取页面被卷曲的高度
$(window).scrollTop();
//获取页面被卷曲的宽度
$(window).scrollLeft();
```

## offset方法与position方法

> offset方法获取元素距离document的位置，position方法获取的是元素距离有定位的父元素的位置。

```javascript
//获取元素距离document的位置,返回值为对象：{left:100, top:100}
$(selector).offset();
//获取相对于其最近的有定位的父元素的位置。
$(selector).position();
```

## jQuery事件机制

> JavaScript中已经学习过了事件，但是jQuery对JavaScript事件进行了封装，增加并扩展了事件处理机制。jQuery不仅提供了更加优雅的事件处理语法，而且极大的增强了事件的处理能力。

## jQuery事件发展历程

简单事件绑定>>bind事件绑定>>delegate事件绑定>>on事件绑定(推荐)

> 简单事件注册

```javascript
click(handler)			单击事件
mouseenter(handler)		鼠标进入事件
mouseleave(handler)		鼠标离开事件
```

缺点：不能同时注册多个事件

> bind方式注册事件

```javascript
//第一个参数：事件类型
//第二个参数：事件处理程序
$("p").bind("click mouseenter", function(){
    //事件响应方法
});
```

缺点：不支持动态事件绑定

> delegate注册委托事件

```javascript
// 第一个参数：selector，要绑定事件的元素
// 第二个参数：事件类型
// 第三个参数：事件处理函数
$(".parentBox").delegate("p", "click", function(){
    //为 .parentBox下面的所有的p标签绑定事件
});
```

缺点：只能注册委托事件，因此注册时间需要记得方法太多了

> on注册事件

## on注册事件

> jQuery1.7之后，jQuery用on统一了所有事件的处理方法。
>
> 最现代的方式，兼容zepto(移动端类似jQuery的一个库)，强烈建议使用。

on注册简单事件

```javascript
// 表示给$(selector)绑定事件，并且由自己触发，不支持动态绑定。
$(selector).on( "click", function() {});
```

on注册委托事件

```javascript
// 表示给$(selector)绑定代理事件，当必须是它的内部元素span才能触发这个事件，支持动态绑定
$(selector).on( "click",“span”, function() {});

```

on注册事件的语法：

```javascript
// 第一个参数：events，绑定事件的名称可以是由空格分隔的多个事件（标准事件或者自定义事件）
// 第二个参数：selector, 执行事件的后代元素（可选），如果没有后代元素，那么事件将有自己执行。
// 第三个参数：data，传递给处理函数的数据，事件触发的时候通过event.data来使用（不常使用）
// 第四个参数：handler，事件处理函数
$(selector).on(events[,selector][,data],handler);

```

## 事件解绑

> unbind方式（不用）

```javascript
$(selector).unbind(); //解绑所有的事件
$(selector).unbind("click"); //解绑指定的事件
```

> undelegate方式（不用）

```javascript
$( selector ).undelegate(); //解绑所有的delegate事件
$( selector).undelegate( “click” ); //解绑所有的click事件
```

> off方式（推荐）

```javascript
// 解绑匹配元素的所有事件
$(selector).off();
// 解绑匹配元素的所有click事件
$(selector).off("click");
```

## 触发事件

```javascript
$(selector).click();
$(selector).trigger("click");    //触发 click事件
```

## jQuery事件对象

jQuery事件对象其实就是js事件对象的一个封装，处理了兼容性。

```javascript
screenX和screenY	对应屏幕最左上角的值
clientX和clientY	距离页面左上角的位置（忽视滚动条）
pageX和pageY	距离页面最顶部的左上角的位置（会计算滚动条的距离）

event.keyCode	按下的键盘代码
event.data	存储绑定事件时传递的附加数据

event.stopPropagation()	阻止事件冒泡行为
event.preventDefault()	阻止浏览器默认行为
return false:既能阻止事件冒泡，又能阻止浏览器默认行为。
```

## 链式编程

> 通常情况下，只有设置操作才能把链式编程延续下去。因为获取操作的时候，会返回获取到的相应的值，无法返回 jQuery对象。

```javascript
end(); // 筛选选择器会改变jQuery对象的DOM对象，想要回复到上一次的状态，并且返回匹配元素之前的状态。
```

## each方法

> jQuery的隐式迭代会对所有的DOM对象设置相同的值，但是如果我们需要给每一个对象设置不同的值的时候，就需要自己进行迭代了。

作用：遍历jQuery对象集合，为每个匹配的元素执行一个函数

```javascript
// 参数一表示当前元素在所有匹配元素中的索引号
// 参数二表示当前元素（DOM对象）
$(selector).each(function(index,element){});
```

## 多库共存

> jQuery使用$作为标示符，但是如果与其他框架中的$冲突时，jQuery可以释放$符的控制权.

```javascript
var c = $.noConflict();//释放$的控制权,并且把$的能力给了c
```

## jQuery获取自定义属性的值

```
//获取属性值 1

<div id="text" value="黑哒哒的盟友"><div>

jQuery取值： $("#text").attr("value");


//获取自定义属性值 2

<div id="text" value="123"  data_obj="黑哒哒的盟友"><div>

JQUERY取值：$("#text").attr("data_obj");


//获取data值 3

<div id="text" value="123"  data-name="黑哒哒的盟友"><div>

JQUERY取值：$("#text").data("name");
```

### jquery移除元素

- remove() - 删除被选元素（及其子元素）
- empty() - 从被选元素中删除子元素

## jQuery ajax - serialize() 方法

### 定义和用法

serialize() 方法通过序列化表单值，创建 URL 编码文本字符串。

您可以选择一个或多个表单元素（比如 input 及/或 文本框），或者 form 元素本身。

序列化的值可在生成 AJAX 请求时用于 URL 查询字符串中。

### 语法

```
$(selector).serialize()
```

### 详细说明

.serialize() 方法创建以标准 URL 编码表示的文本字符串。它的操作对象是代表表单元素集合的 jQuery 对象。

表单元素有几种类型：

```html
<form>
  <div><input type="text" name="a" value="1" id="a" /></div>
  <div><input type="text" name="b" value="2" id="b" /></div>
  <div><input type="hidden" name="c" value="3" id="c" /></div>
  <div>
    <textarea name="d" rows="8" cols="40">4</textarea>
  </div>
  <div><select name="e">
    <option value="5" selected="selected">5</option>
    <option value="6">6</option>
    <option value="7">7</option>
  </select></div>
  <div>
    <input type="checkbox" name="f" value="8" id="f" />
  </div>
  <div>
    <input type="submit" name="g" value="Submit" id="g" />
  </div>
</form>
```

.serialize() 方法可以操作已选取个别表单元素的 jQuery 对象，比如 <input>, <textarea> 以及 <select>。不过，选择 <form> 标签本身进行序列化一般更容易些：

```
$('form').submit(function() {
  alert($(this).serialize());
  return false;
});
```

输出标准的查询字符串：

```
a=1&b=2&c=3&d=4&e=5
```

注释：只会将”成功的控件“序列化为字符串。如果不使用按钮来提交表单，则不对提交按钮的值序列化。如果要表单元素的值包含到序列字符串中，元素必须使用 name 属性。

