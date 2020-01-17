### 当前浏览器

```javascript
/***
 * 获取当前浏览器类型
 */
function myBrowser() {
    var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
    var isOpera = userAgent.indexOf("Opera") > -1;
    if (isOpera) { //判断是否Opera浏览器
        return "Opera"
    }
    ;
    if (userAgent.indexOf("Firefox") > -1) { //判断是否Firefox浏览器
        return "FF";
    }
    ;
    if (userAgent.indexOf("Chrome") > -1) {
        return "Chrome";
    }
    ;
    if (userAgent.indexOf("Safari") > -1) { //判断是否Safari浏览器
        return "Safari";
    }
    ;
    if (userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera) { //判断是否IE浏览器
        return "IE";
    }
    ;
}
```

### 禁止复制选择

#### 第一种

```javascript
document.oncontextmenu = new Function("event.returnValue=false");
document.onselectstart = new Function("event.returnValue=false");
```

#### 第二种

```html
<div onselectstart="return false" id="div" >
此区域禁止复制
</div>
或
<div onselectstart="return false" id="div" >
此区域禁止复制
</div>
<script type="text/javascript" >
    $(document).ready(function(){
          document.getElementById('div').onselectstart =function(){
                return false;
          };
    });
</script>
```

#### 第三种

在火狐下有个屏蔽选择样式的样式属性 -moz-user-select （只支持火狐浏览器）

```html
<div style="-moz-user-select:none;" >
    禁止复制此区域
</div>
如果要禁止整个页面
<script type="text/javascript" >
    $(document).ready(function(){
         $("body").css("-moz-user-select","none");
    });
</script>  
```

