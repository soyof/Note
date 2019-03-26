# html

- form表单上面加上novalidate属性,可以取消浏览器自带的校验功能
- autocomplete="off"  关闭客户端的自动完成功能

## calssList

Element.classList` 是一个只读属性，返回一个元素的类属性的实时[`DOMTokenList`]集合。

使用 `classList` 是替代[`element.className`]作为空格分隔的字符串访问元素的类列表的一种方便的方法。

- add( String [, String] )

  + 添加指定的类值。如果这些类已经存在于元素的属性中，那么它们将被忽略。

- remove( String [,String] )

  + 删除指定的类值。

- item ( Number )

  + 按集合中的索引返回类值。

- toggle ( String [, force] )

  + 当只有一个参数时：切换 class value; 即如果类存在，则删除它并返回`false`，如果不存在，则添加它并返回`true`。

  + 当存在第二个参数时：如果第二个参数的计算结果为true，则添加指定的类值，如果计算结果为false，则删除它

- contains( String )

  + 检查元素的类属性中是否存在指定的类值。

- replace( oldClass, newClass )

  + 用一个新类替换已有类。

==============================================================================================

- 添加类: dom.classList.add('类名')   

- 移除类: dom.classList.remove('类名')

- 判断类: dom.classList.contains('类名')

- 切换类: dom.classList.toggle('类名',[boolean])----第二个参数为布尔类型,true强制添加类名,false强制删除类名

## data-*自定义属性

- jquery的data() 操作内存

- H5的dataset     操作dom

- 通过setAttribute和getAttribute方法

  ```javascript
  var dom=document.getElementById('dom');
  dom.setAttribute('data-id',2);//修改值
  var id=dom.getAttribute('data-id');//获取值
  ```

- 通过dataset

  ```javascript
  var dom=document.getElementById('dom');
  dom.dataset.id=2;//修改值
  console.log(dom.dataset.id);//获取值
  ```

- 使用jquery

  ```javascript
  $('#dom').data('id','2');//修改值
  $('#dom').data('id');//获取值
  ```

### data设置方法

- 直接在标签内书写，格式如下

  ```javascript
  <div id="test" data-age="24">
      Click Here
  </div>
  ```

- 用 js 设置

  ```javascript
  var test = document.getElementById('test');
  test.dataset.my = 'Byron';
  ```

注意：

1. 在添加或读取属性的时候需要去掉前缀data-*，像上面的例子我们没有使用test.dataset.data-my = 'Byron';的形式。
2. 如果属性名称中还包含连字符(-)，需要转成驼峰命名方式，但如果在CSS中使用选择器，我们需要使用连字符格式

## H5-新增API

### 全屏方法

> HTML5规范允许用户自定义网页上任一元素全屏显示。

- Node.requestFullScreen() 开启全屏显示
- Node.cancelFullScreen() 关闭全屏显示
- 由于其兼容性原因，不同浏览器需要添加前缀如：
  webkit内核浏览器：webkitRequestFullScreen、webkitCancelFullScreen，如chrome浏览器。
  Gecko内核浏览器：mozRequestFullScreen、mozCancelFullScreen，如火狐浏览器。
- document.fullScreen检测当前是否处于全屏
  不同浏览器需要添加前缀
  document.webkitIsFullScreen、document.mozFullScreen

### 多媒体

> 自定义播放器

方法

| 方法           | 描述                                    |
| -------------- | --------------------------------------- |
| addTextTrack() | 向音频/视频添加新的文本轨道             |
| canPlayType()  | 检测浏览器是否能播放指定的音频/视频类型 |
| load()         | 重新加载音频/视频元素                   |
| play()         | 开始播放音频/视频                       |
| pause()        | 暂停当前播放的音频/视频                 |

属性

| 属性                | 描述                                                       |
| ------------------- | ---------------------------------------------------------- |
| audioTracks         | 返回表示可用音轨的 AudioTrackList 对象                     |
| autoplay            | 设置或返回是否在加载完成后随即播放音频/视频                |
| buffered            | 返回表示音频/视频已缓冲部分的 TimeRanges 对象              |
| controller          | 返回表示音频/视频当前媒体控制器的 MediaController 对象     |
| controls            | 设置或返回音频/视频是否显示控件（比如播放/暂停等）         |
| crossOrigin         | 设置或返回音频/视频的 CORS 设置                            |
| currentSrc          | 返回当前音频/视频的 URL                                    |
| currentTime         | 设置或返回音频/视频中的当前播放位置（以秒计）              |
| defaultMuted        | 设置或返回音频/视频默认是否静音                            |
| defaultPlaybackRate | 设置或返回音频/视频的默认播放速度                          |
| duration            | 返回当前音频/视频的长度（以秒计）                          |
| ended               | 返回音频/视频的播放是否已结束                              |
| error               | 返回表示音频/视频错误状态的 MediaError 对象                |
| loop                | 设置或返回音频/视频是否应在结束时重新播放                  |
| mediaGroup          | 设置或返回音频/视频所属的组合（用于连接多个音频/视频元素） |
| muted               | 设置或返回音频/视频是否静音                                |
| networkState        | 返回音频/视频的当前网络状态                                |
| paused              | 设置或返回音频/视频是否暂停                                |
| playbackRate        | 设置或返回音频/视频播放的速度                              |
| played              | 返回表示音频/视频已播放部分的 TimeRanges 对象              |
| preload             | 设置或返回音频/视频是否应该在页面加载后进行加载            |
| readyState          | 返回音频/视频当前的就绪状态                                |
| seekable            | 返回表示音频/视频可寻址部分的 TimeRanges 对象              |
| seeking             | 返回用户是否正在音频/视频中进行查找                        |
| src                 | 设置或返回音频/视频元素的当前来源                          |
| startDate           | 返回表示当前时间偏移的 Date 对象                           |
| textTracks          | 返回表示可用文本轨道的 TextTrackList 对象                  |
| videoTracks         | 返回表示可用视频轨道的 VideoTrackList 对象                 |
| volume              | 设置或返回音频/视频的音量                                  |

事件

| 事件           | 描述                                         |
| -------------- | -------------------------------------------- |
| canplay        | 当浏览器可以播放音频/视频时                  |
| abort          | 当音频/视频的加载已放弃时                    |
| canplaythrough | 当浏览器可在不因缓冲而停顿的情况下进行播放时 |
| durationchange | 当音频/视频的时长已更改时                    |
| emptied        | 当目前的播放列表为空时                       |
| ended          | 当目前的播放列表已结束时                     |
| error          | 当在音频/视频加载期间发生错误时              |
| loadeddata     | 当浏览器已加载音频/视频的当前帧时            |
| loadedmetadata | 当浏览器已加载音频/视频的元数据时            |
| loadstart      | 当浏览器开始查找音频/视频时                  |
| pause          | 当音频/视频已暂停时                          |
| play           | 当音频/视频已开始或不再暂停时                |
| playing        | 当音频/视频在已因缓冲而暂停或停止后已就绪时  |
| progress       | 当浏览器正在下载音频/视频时                  |
| ratechange     | 当音频/视频的播放速度已更改时                |
| seeked         | 当用户已移动/跳跃到音频/视频中的新位置时     |
| seeking        | 当用户开始移动/跳跃到音频/视频中的新位置时   |
| stalled        | 当浏览器尝试获取媒体数据，但数据不可用时     |
| suspend        | 当浏览器刻意不获取媒体数据时                 |
| timeupdate     | 当目前的播放位置已更改时                     |
| volumechange   | 当音量已更改时                               |
| waiting        | 当视频由于需要缓冲下一帧而停止               |

### 地理定位

> 在HTML规范中，增加了获取用户地理信息的API，
> 这样使得我们可以基于用户位置开发互联网应用，
> 即基于位置服务 (Location Base Service)

- 获取当前地理信息

```
navigator.geolocation.getCurrentPosition(successCallback, errorCallback) 
```

- 重复获取当前地理信息

```
navigator. geolocation.watchPosition(successCallback, errorCallback)
```

- 当成功获取地理信息后，会调用succssCallback，并返回一个包含位置信息的对象position。
  position.coords.latitude纬度
  position.coords.longitude经度
  position.coords.accuracy精度
  position.coords.altitude海拔高度
- 当获取地理信息失败后，会调用errorCallback，并返回错误信息error
- 在现实开发中，通过调用第三方API（如百度地图）来实现地理定位信息，这些API都是基于用户当前位置的，并将用位置位置（经/纬度）当做参数传递，就可以实现相应的功能。

### 本地存储

> 随着互联网的快速发展，基于网页的应用越来越普遍，
> 同时也变的越来越复杂，为了满足各种各样的需求，会经常性在本地存储大量的数据，
> HTML5规范提出了相关解决方案。

- 特性
  - 设置、读取方便
  - 容量较大，sessionStorage约5M、localStorage约5M
  - 只能存储字符串，可以将对象JSON.stringify() 编码后存储
- window.sessionStorage
  - 生命周期为关闭浏览器窗口
  - 在同一个窗口(页面)下数据可以共享
- window.localStorage
  - 永久生效，除非手动删除（服务器方式访问然后清除缓存）
  - 可以多窗口（页面）共享
- 方法
  - setItem(key, value) 设置存储内容
  - getItem(key) 读取存储内容
  - removeItem(key) 删除键值为key的存储内容
  - clear() 清空所有存储内容

### 历史管理

> 提供window.history，对象我们可以管理历史记录，
> 可用于单页面应用，Single Page Application，可以无刷新改变网页内容。

- pushState(data, title, url) 追加一条历史记录  

  - data用于存储自定义数据，通常设为null
  - title网页标题，基本上没有被支持，一般设为空
  - url 以当前域为基础增加一条历史记录，不可跨域设置

- replaceState(data, title, url) 与pushState()基本相同，
  不同之处在于replaceState()，只是替换当前url，不会增加/减少历史记录。

- onpopstate事件，当前进或后退时则触发  

  `window.onpopstate`是`popstate`事件在window对象上的事件处理程序.

  `每当处于激活状态的历史记录条目发生变化时,popstate`事件就会在`对应window`对象上触发. 如果当前`处于激活状态的历史记录条目是由``history.pushState()`方法创建,或者由`history.replaceState()方法修改过`的, 则`popstate事件对象的``state`属性包含了这个历史记录条目的state对象的一个拷贝.

  调用`history.pushState()`或者`history.replaceState()`不会触发popstate事件. `popstate`事件只会在浏览器某些行为下触发, 比如点击后退、前进按钮(或者在JavaScript中调用`history.back()、history.forward()、history.go()`方法).

  当网页加载时,各浏览器对`popstate`事件是否触发有不同的表现,Chrome 和 Safari会触发`popstate`事件, 而Firefox不会.

### 离线应用

> HTML5中我们可以轻松的构建一个离线（无网络状态）应用，只需要创建一个cache manifest文件。

- 优势
  - 1、可配置需要缓存的资源
  - 2、网络无连接应用仍可用
  - 3、本地读取缓存资源，提升访问速度，增强用户体验
  - 4、减少请求，缓解服务器负担
- 缓存清单
  - 一个普通文本文件，其中列出了浏览器应缓存以供离线访问的资源，推荐使用.appcache为后缀名
  - 例如我们创建了一个名为demo.appcache的文件，然后在需要应用缓存在页面的根元素(html)添加属性manifest="demo.appcache"，路径要保证正确。
- manifest文件格式
  - 1、顶行写CACHE MANIFEST
  - 2、CACHE: 换行 指定我们需要缓存的静态资源，如.css、image、js等
  - 3、NETWORK: 换行 指定需要在线访问的资源，可使用通配符
  - 4、FALLBACK: 换行 当被缓存的文件找不到时的备用资源
- 其它
  - 1、CACHE: 可以省略，这种情况下将需要缓存的资源写在CACHE MANIFEST
  - 2、可以指定多个CACHE: NETWORK: FALLBACK:，无顺序限制
  - 3、#表示注释，只有当demo.appcache文件内容发生改变时或者手动清除缓存后，才会重新缓存。
  - 4、chrome 可以通过chrome://appcache-internals/工具和离线（offline）模式来调试管理应用缓存

### 文件读取

> HTML5新增内建对象，可以读取本地文件内容。

### 网络状态

- 我们可以通过window.onLine来检测，用户当前的网络状况，返回一个布尔值
  - window.online用户网络连接时被调用
  - window.offline用户网络断开时被调用

# CSS

==================================================================

- 给元素设置transfom之后,如果当前元素有定位,则可以提高当前元素的层级

==================================================================

##  border-image

border-image 属性是一个简写属性，用于设置以下属性：(如果省略值，会设置其默认值。)

- border-image-source

- border-image-slice

- border-image-width

- border-image-outset

- border-image-repeat

  + border-image-repeat 字面意义是 边框图片平铺。作用是指定 border-image 的平铺方式。语法上最多可接收两个参数，第一个参数指定水平方向边框的平铺方式，第二个参数指定垂直方向边框的平铺方式

  + 目前只能四值可供选择：stretch, repeat, round, space。其中，stretch 是默认值，space 目前chrome浏览器按 repeat 来渲染。
  + repeat 与 round 的区别：round 除了能平铺外还能通过伸缩使背景完整显示。
  + round 与 space 的区别：虽然都使背景完整显示，但是 space 在小方块之间有一定的空隙.

| 值                    | 描述                                                         |
| :-------------------- | ------------------------------------------------------------ |
| *border-image-source* | 用在边框的图片的路径。                                       |
| *border-image-slice*  | 图片边框向内偏移。                                           |
| *border-image-width*  | 图片边框的宽度。                                             |
| *border-image-outset* | 边框图像区域超出边框的量。                                   |
| *border-image-repeat* | 图像边框是否应平铺(repeated)、铺满(rounded)或拉伸(stretched)。 |

## CSS 选择器

| 选择器                                                       | 描述                                                         |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [[*attribute*\]](http://www.w3school.com.cn/cssref/selector_attribute.asp) | 用于选取带有指定属性的元素。                                 |
| [[*attribute*=*value*\]](http://www.w3school.com.cn/cssref/selector_attribute_value.asp) | 用于选取带有指定属性和值的元素。                             |
| [[*attribute*~=*value*\]](http://www.w3school.com.cn/cssref/selector_attribute_value_contain.asp) | 用于选取属性值中包含指定词汇的元素。                         |
| [[*attribute*\|=*value*\]](http://www.w3school.com.cn/cssref/selector_attribute_value_start.asp) | 用于选取带有以指定值开头的属性值的元素，该值必须是整个单词。 |
| [[*attribute*^=*value*\]](http://www.w3school.com.cn/cssref/selector_attr_begin.asp) | 匹配属性值以指定值开头的每个元素。                           |
| [[*attribute*$=*value*\]](http://www.w3school.com.cn/cssref/selector_attr_end.asp) | 匹配属性值以指定值结尾的每个元素。                           |
| [[*attribute**=*value*\]](http://www.w3school.com.cn/cssref/selector_attr_contain.asp) | 匹配属性值中包含指定值的每个元素。                           |

### 关系选择器

![img](D:/datum/css3%E7%AC%94%E8%AE%B0-%E6%80%BB/images/s1.png)

### 属性选择器

![img](D:/datum/css3%E7%AC%94%E8%AE%B0-%E6%80%BB/images/s2.png)

### 伪类选择器

> 伪类选择器的语法：都带有一个 冒号 `:`

### child系列（重点）

![img](D:/datum/css3%E7%AC%94%E8%AE%B0-%E6%80%BB/images/s3.png)

### 其他伪类选择器

+ :of-type系列，  用法与child系列很像，但是找的是子元素中对应类型的下标（了解，用的不多）
+ :focus    查找获取到焦点的文本框
+ :checked 获得选中的checkbox
+ :disabled 获得不可用的框
+ :enabled 获得可用的框
+ :not(selector)选择不匹配selector的那些元素
+ :target  获取当前活跃的锚链接

### 伪元素选择器

- before和after

  > 注意事项：
  > 1.必须指定content属性，可以在content属性中写入文本内容，但是通常为空字符串。
  > 2.默认是行内元素，无法设置宽高，需要指定display:block或者position:absolute
  > E::before :在元素子节点的最前面添加一个内容。
  > E::after  :在元素子节点的最后面添加一个内容。

- 关于单冒号和双冒号问题

  > 关于:before与::before的区别
  > :before是css2中伪元素的写法，但是呢，在css3中严格规定，伪类采用单冒号，伪元素需要使用双冒号。为了兼容旧的代码，当浏览器碰到了:before之后，会自动的转换成::before。
  > 如果需要兼容老的浏览器，比如IE678，推荐使用:before
  > 如果不需要兼容老的浏览器，比如移动端，推荐使用::before

### 其他伪元素选择器

- ::first-letter  :获取元素的第一个字符
- ::first-line   :获取元素的第一行
- ::selection   ：获取选中的元素

```css
[]       表示全部可选项
||       表示或者
|        表示多选一
？       表示0个或者1个
*        表示0个或者多个
{2,3}    表示范围
```

## CSS3阴影

### 文字阴影

> text-shadow:文字阴影

```
语法： text-shadow：水平偏移 垂直偏移 羽化大小 颜色
```

### 边框阴影

> box-shadow:边框阴影

```
none： 无阴影 
<length>：第1个长度值用来设置对象的阴影水平偏移值。可以为负值 
<length>：第2个长度值用来设置对象的阴影垂直偏移值。可以为负值 
<length>：如果提供了第3个长度值则用来设置对象的阴影模糊值。不允许负值 
<length>：如果提供了第4个长度值则用来设置对象的阴影外延值。可以为负值 
<color>：设置对象的阴影的颜色。 
inset：设置对象的阴影类型为内阴影。该值为空时，则对象的阴影类型为外阴影
```

## CSS3背景

> 在css2中已经有background属性了，用于设置盒子的背景相关的一些样式，在CSS3中新增加了几个背景相关的几个属性。

### background-size

> 用户设置背景图片的尺寸大小

```javascript
//注意：这两种设置方式会导致图片失真。
/*background-size:设置背景图片的大小*/
background-size: 600px 400px;

/* 百分比是相对于盒子自身的宽度和高度 */
background-size: 100% 100%;
```

不失真的设置方式（等比例缩放）

```javascript
/*containe保证等比例缩放,但是会出现留白*/
background-size: contain;

/*cover保证等比例缩放,并且不会留白，但是出现有一部分图片不显示*/
background-size: cover;
```

### background-clip

> 设置背景区域的大小

```javascript
/*盒子的背景区域是整个盒子，包括边框和padding*/
/*默认值，设置背景区域包括了边框*/
background-clip: border-box;

/*背景区域只包含padding和content*/
background-clip: padding-box;

/*背景区域只包含content*/
background-clip: content-box;
```

### background-origin

> 设置背景图片的原点的位置，默认是padding的地方开始

```javascript
background-image: url(images/bg.jpg);
/*设置原点从border开始*/
background-origin: border-box;

/*设置原点从padding开始,默认值*/
background-origin: padding-box;

/*设置原点从content开始*/
background-origin: content-box;
```

### 多重背景

> background设置背景的时候，可以设置多个背景图片，使用逗号隔开。注意颜色只能设置一次，并且通常来说，颜色都是在最后面进行设置。
>
> background是一个合写的属性，如果在background之前设置了background相关的样式，会被覆盖掉。

```css
background: url(images/mn1.jpg) no-repeat top left, url("images/mn2.jpg") no-repeat right bottom, pink;
```

## CSS3渐变

### 线性渐变

> linear-gradient指沿着某条直线朝一个方向产生的渐变效果。

```javascript
//注意：渐变实际上相当与一张图片，因为需要加给background-image才会生效
//渐变的两个要求：有区间，有颜色变化。
//最简单的渐变
background-image: linear-gradient(red, green);
//设定渐变的方向
background-image: linear-gradient(to right, red, green);
//也可以设定渐变的角度
background-image: linear-gradient(45deg, red, green);
//设定渐变的范围
background-image: linear-gradient(to right, red 20%, green 80%)
//每一个区间表示渐变颜色的范围
background-image: linear-gradient(to right, red 20%, green 20%)

```

### 径向渐变

> radial-gradient指从一个中心点开始沿着四周产生渐变效果

```CSS
background-image: radial-gradient(渐变距离 at 位置(方位名词或距离一个值或两个值), 颜色 范围, 颜色 范围,.....);

/*1. 最简单的渐变*/
background-image: radial-gradient(red, green);

/*2. 指定圆的半径和圆心*/
background-image: radial-gradient(200px at center, red, green);

/*3. 指定椭圆*/
background-image: radial-gradient(200px 80px at center, red, green);

/*4. 指定范围*/
background-image: radial-gradient(200px at center, green 50%, red 50%);

```

## CSS3盒子模型



> CSS3中可以通过box-sizing 来指定盒模型，即可指定为content-box、border-box，这样我们计算盒子大小的方式就发生了改变。

可以分成两种情况： 

- box-sizing: border-box 计算方式为content = width – border - padding 
- box-sizing: content-box 计算方式为content = width

## 过渡

### 过渡的属性

1. 如果两个状态发生改变，没有过渡，效果是瞬间变化的
2. 如果加上了过渡，那么这个过程就会有动画的效果。
3. 整个状态变化的过程是由浏览器来完成的，我们只需要关注开始状态与结束状态即可。

```css
/*transition-property：设置过渡属性
/*也可以是width,height*/
transition-property:all;

/*transition-duration:设置过渡时间*/
transition-duration:1s;

/*transition-delay：设置过渡延时*/
transition-delay:2s;

/*transition-timing-function:设置过渡的速度*/
/*linear，ease，ease-in，ease-out，ease-in-out， steps(10)*/
transition-timing-function:linear;
```

### 属性合写

```css
/* 属性 时间 延时 速度 */
transition: width 1s 3s linear;
```

过渡的注意点：

- 过渡必须要有两个状态的变化。
- 过渡可以写在A状态，也可以写在B状态，但是如果写在B状态，那么回来的时候，就没有过渡效果了。

## 2D转换

> transform: 转换，是CSS3最具颠覆性的几个特性之一，既可以用于2D转换，也可以用于3D转换。
>
> transform：2D转换，元素在平面上实现移动、旋转、缩放、斜切等操作

### scale缩放

```css
transform: scaleX(0.5);/*让宽度变化*/
transform: scaleY(0.5);/*让高度变化，注意不能写多个transform，不然会覆盖。*/
transform: scale(0.5);/*让宽度和高度同时变化*/
```

注意：

- scale接收的值是倍数，因此没有单位
- scale可以是一个值，如果是一个值，不是说仅仅缩放宽度，高度也会等比例的缩放。
- 可以通过transform-origin设定旋转原点

### translate平移

```javascript
transform: translateX(100px);
transform: translateY(100px);
transform: translate(100px, 100px);
transform: translate(50%, 50%);
```

注意：

- translate的值可以是px，也可以是百分比，如果是百分比，那么参照的是自身的宽高。
- translate移动的元素并不会影响其他盒子，类似于相对定位。

### rotate旋转

```javascript
transform: rotate(360deg);//旋转360度
transform: rotate(-360deg);//逆时针旋转360度
```

注意：

- 单位是deg，角度，不是px
- 正值顺时针转，负值逆时针转
- 可以通过transition-origin设定旋转原点

### skew斜切(变形)

> skew在实际开发中，是用的最少的一个属性。一般来说，x和y只会倾斜其中的一个

```javascript
/*在水平方向倾斜30deg*/
transform: skewX(30deg);
/*在垂直方向倾斜30deg*/
transform: skewY(30deg);
```

### transform-origin转换原点

> 通过transform-origin可以设置转换的中心原点。

```javascript
transform-origin: center center;
transform-origin: 40px 40px;
```

### 转换合写问题

```javascript
transform:translateX(800px) scale(1.5) rotate(360deg) ;
//1. transform属性只能写一个，如果写了多个会覆盖
//2. transform属性可以连写，但是顺序对效果影响的，因为它会在第一个效果的基础上执行第二个效果，然后执行第三个效果（通常会把rotate放后面）
//3. 如果对transform进行过度效果的时候，初始状态和结束状态一一对应
```

## 3D转换

> transform:不仅可以2D转换，还可以进行3D转换。

### 坐标轴

> 用X、Y、Z分别表示空间的3个维度，三条轴互相垂直。**注意+Y是向下的。**

<img src="D:/datum/css3%E7%AC%94%E8%AE%B0-%E6%80%BB/images/zbz.png">

###  perspective透视

> 电脑显示屏是一个2D的平面，因为我们看不出来旋转的方向，通过perspective属性，可以定义3D 元素距视图的距离，单位是px。
>
> 说白了，设置了perspective属性后，就有了进大远小的效果了，在视觉上，让我们能看出来3d的效果。
>
> 注意：当为元素定义 perspective 属性时，其子元素会获得透视效果，而不是元素本身。

```javascript
perspective：500px;
```

### rotate旋转

```javascript
transform: rotate(45deg);// 让元素在平面2D中旋转
transform: rotateX(45deg);// 让元素沿着X轴转45度
transform: rotateY(45deg);// 让元素沿着Y轴转45度
transform: rotateZ(45deg);// 让元素沿着Z轴转45度
```

### translate平移

```javascript
/*沿着X轴的正方向移动45px*/
transform: translateX(45px);
/*沿着Y轴的正方向移动45px*/
transform: translateY(45px);
/*沿着Y轴的正方向移动45px*/
transform: translateZ(45px);

```

### transform-style

> transform-style 属性规定如何在 3D 空间中呈现被嵌套的元素。注意这个属性只能给父元素添加。

```javascript
flat:默认值，2d显示
preserve-3d: 3d显示
```

transform-style与perspective的区别

```javascript
/*透视：透视只是相当于设置了一个距离，辅助我们查看3D效果的工具，*/
/*preserve-3d:给父盒子添加，让子元素保留3D的位置，说白了，只有设置了preserve-3d，这个元素才能被称之为3d元素。 */

//一个3d元素可以没有perspective，但是不能没有transform-style
```

## 动画

> 动画可以通过设置多个节点来精确控制一个或者一组动画，常用来实现复杂的动画效果。

动画与过渡的区别：

```
1. 过渡必须触发，需要两个状态的改变。
2. 动画可以一直运行下去，不需要触发。实现效果与过渡差不多
```

使用一个动画的基本步骤：

- 通过@keyframes指定动画序列
- 通过百分比或者from/to将动画分割成多个节点
- 在各个节点中分别定义样式
- 通过animation将动画应用于相应的元素

### animation详解

> animation是一个复合属性，一共有8个参数

```
animation-name:动画名称，由@keyframes定义的
animation-duration：动画的持续时间
animation-timing-function：动画的过渡类型
animation-delay：动画的延迟时间
animation-iteration-count：动画的循环次数
animation-direction：设置动画在循环中是否反向运动
animation-fill-mode：设置动画时间之外的状态
animattion-play-state:设置动画的状态。
```

### 动画库的使用

<https://daneden.github.io/animate.css/>

## 字体图标

我们经常把网页常用的一些小的图标，做成精灵图，然后通过background-position去调整位置，但是这个需要引入图片，并且图片大小改变之后如果失真。在CSS3中可以使用字体图片，即使用图标跟使用文字一样。 

优点： 

1、将所有图标打包成字体库，减少请求； 

2、具有矢量性，可保证清晰度； 

3、使用灵活，便于维护； 

阿里巴巴矢量图标：（可以自己定制） <http://www.iconfont.cn/plus/collections/index?type=1>

Font Awesome 使用 <http://fontawesome.dashgame.com/> 

## 弹性布局(伸缩布局)

> Flex是Flexible Box的缩写，翻译成中文就是“弹性盒子”，用来为盒装模型提供最大的灵活性。**任何一个容器都可以指定为Flex布局**。

CSS3在布局方面做了非常大的改进，使得我们对块级元素的布局排列变得十分灵活，适应性非常强，其强大的伸缩性，在响应式开中可以发挥极大的作用。

当给一个盒子设置了display：flex之后，这个盒子就有了***主轴*** 和***侧轴*** 的概念。
主轴：Flex容器的主轴主要用来配置Flex项目，默认是水平方向
侧轴：与主轴垂直的轴称作侧轴，默认是垂直方向的
方向：默认***主轴从左向右*** ，默认***侧轴从上到下*** 

### 给容器设置的样式

#### flex-direction

> flex-diretion主要是用来调整主轴的方向的，默认是水平方向
>
> 了解即可，一般来说，很少调整主轴的方向。

可选值

```javascript
row：主轴方向为水平向右
column：主轴方向为竖直向下
row-reverse:主轴方向为水平向左
column-reverse:主轴方向是竖直向上。
```

#### justify-content

> justify-content主要用来设置***主轴方向的对齐方式*** ，可选的值有：

可选值：

```css
flex-start: 弹性盒子元素将向起始位置对齐
flex-end: 弹性盒子元素将向结束位置对齐。
center: 弹性盒子元素将向行中间位置对齐
space-around: 弹性盒子元素会平均地分布在行里
space-between:第一个贴左边，最后一个贴右边，其他盒子均分，保证每个盒子之间的空隙是相等的。
space-evenly: 平均分配(新增)----平均分配所有空隙

```

#### align-items

> align-items用于调整***侧轴的对其方式*** ，可选的值有：

```css
flex-start： 元素在侧轴的起始位置对其。 
flex-end： 元素在侧轴的结束位置对其。
center： 元素在侧轴上居中对其。
stretch： 元素的高度会被拉伸到最大（不能给死高度）。
```

#### flex-wrap

> flex-wrap属性控制flex容器是单行或者多行,默认不换行

```css
nowrap： 不换行（默认），会压缩子盒子的宽度。
wrap： 当宽度不够的时候，会换行。
```

#### align-content

> align-content用来设置多行的flex容器的排列方式。

```css
flex-start： 各行向侧轴的起始位置堆叠。 
flex-end： 各行向弹性盒容器的结束位置堆叠。
center： 各行向弹性盒容器的中间位置堆叠。
space-between： 第一行贴上边，最后一个行贴下边,其他行在弹性盒容器中平均分布。
space-around：  各行在侧轴中平均分布。 
stretch：拉伸，不设置高度的情况下。
```

align-items与align-content的区别

```css
align-items调整的是侧轴的对其方式，不换行一般用align-items
align-content:必须是多行才生效，如果单行，没有效果。换行了就用align-content。
```

### 给子元素设置的样式

> 上述给容器设置的样式，都是用于对子元素进行排列的
>
> 下列的属性更多的是用于设置子元素自身的样式。

#### flex属性

flex属性与用于子元素分配主轴的空间。

```css
flex:1;
```

#### order属性

> order属性定义项目的排列顺序。数值越小，排列越靠前，默认为0。

```javascript
order:1;
```

#### align-self

> align-self也是用于设置在侧轴的位置，但是align-self给子元素设置，优先级比align-items的优先级高。

```javascript
取值与align-items的取值一样。
```

## viewport

- 流式布局：就是百分比布局，非固定像素，内容向两侧填充，理解成流动的布局，称为流式布局

- 视觉窗口：viewport,是移动端特有。这是一个虚拟的区域，承载网页的。

  > 承载关系：浏览器---->viewport---->网页

- 适配要求：

  + 网页宽度必须和浏览器保持一致
  + 默认显示的缩放比例和PC端保持（缩放比例1.0）
  + 不允许用户自行缩放网页

- 适配设置：

  - 如果任何设置都没有，默认走的就是viewport的默认设置

  - 设置新的viewport设置,达到适配要求。

    - meta:vp + tab  快捷方式

    ```html
    <meta name="viewport"> 设置视口的标签  在head里面并且应该紧接着编码设置
     viewport的功能：
         1. width    可以设置宽度   (device-width 当前设备的宽度)
         2. height   可以设置高度
         3. initial-scale  可以设置默认的缩放比例
         4. user-scalable  可以设置是否允许用户自行缩放
         5. maximum-scale  可以设置最大缩放比例
         6. minimum-scale  可以设置最小缩放比例
    在<meta name="viewport" content="" >  content="" 使用以上参数
     1. width=device-width   宽度一致比例是1.0
     2. initial-scale=1.0    宽度一致比例是1.0
     3. user-scalable=no     不允许用户自行缩放  （yes，no  1,0）
    标准适配方案：
    <meta name="viewport" content="width=device-width,initial-scale=1.0,user-scalable=0">
    ```

## rem与em区别

1. rem 单位翻译为像素值是由 html 元素的字体大小决定的。 此字体大小会被浏览器中字体大小的设置影响，除非显式重写一个具体单位。
2. em 单位转为像素值，取决于他们使用的字体大小。 此字体大小受从父元素继承过来的字体大小，除非显式重写与一个具体单位。

- rem 和 em 单位是由浏览器基于你的设计中的字体大小计算得到的像素值。
- em 单位基于使用他们的元素的字体大小。
- rem 单位基于 html 元素的字体大小。
- em 单位可能受任何继承的父元素字体大小影响
- rem 单位可以从浏览器字体设置中继承字体大小。
- 使用 em 单位应根据组件的字体大小而不是根元素的字体大小。
- 在不需要使用em单位，并且需要根据浏览器的字体大小设置缩放的情况下使用rem。
- 使用rem单位，除非你确定你需要 em 单位，包括对字体大小。
- 媒体查询中使用 rem 单位
- 不要在多列布局中使用 em 或 rem -改用 %。
- 不要使用 em 或 rem，如果缩放会不可避免地导致要打破布局元素。

