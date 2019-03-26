- sublime中php代码格式化Ctrl+ Alt + f

- $_SERVER['PHP_SELF'] 动态获取当前页面访问路径

- 当表单使用了radio,一定要为相同name的radio设置不同的value,让服务器可以辨别

- checkbox如果没有选中则不会提交,如果选中提交,显示为on                                  

  如果需要同时提交多个选中项,可以在那么属性后面跟上[],表示将所有选中项存在一个数组中返回给服务端

- select如果没有设置value属性默认提交的是innerText内容,设置了value属性,提交的是value值

- 如果一个表单中有文件域(文件上传),必须将表单的method设置为post,  enctype设置为multipart/form-data             enctype默认是urlencoded格式

- JSON是一种类似于js的字面量的手段  (字面量是代码中表述数据的手段)---JSON也是表述数据的手段

  1. JSON中属性名称必须用双引号包裹
  2. JSON中字符串必须用双引号包裹
  3. JSON不允许使用注释
  4. JSON 没有 undefined 这个值

- PHP中获取对象中的元素的值    对象 -> 键

- PHP获取数组中的值        数组['键']

# PHP 全局变量 - 超全局变量

- [$GLOBALS](http://php.net/manual/zh/reserved.variables.globals.php)
- [$_SERVER](http://php.net/manual/zh/reserved.variables.server.php)
- [$_GET](http://php.net/manual/zh/reserved.variables.get.php)
- [$_POST](http://php.net/manual/zh/reserved.variables.post.php)
- [$_FILES](http://php.net/manual/zh/reserved.variables.files.php)
- [$_COOKIE](http://php.net/manual/zh/reserved.variables.cookies.php)
- [$_SESSION](http://php.net/manual/zh/reserved.variables.session.php)
- [$_REQUEST](http://php.net/manual/zh/reserved.variables.request.php)
- [$_ENV](http://php.net/manual/zh/reserved.variables.environment.php)

$GLOBALS 这种全局变量用于在 PHP 脚本中的任意位置访问全局变量（从函数或方法中均可）。PHP 在名为 $GLOBALS[index] 的数组中存储了所有全局变量。变量的名字就是数组的键。

$_SERVER 这种超全局变量保存关于报头、路径和脚本位置的信息。

| 元素/代码                       | 描述                                                         |
| ------------------------------- | ------------------------------------------------------------ |
| $_SERVER['PHP_SELF']            | 返回当前执行脚本的文件名。                                   |
| $_SERVER['GATEWAY_INTERFACE']   | 返回服务器使用的 CGI 规范的版本。                            |
| $_SERVER['SERVER_ADDR']         | 返回当前运行脚本所在的服务器的 IP 地址。                     |
| $_SERVER['SERVER_NAME']         | 返回当前运行脚本所在的服务器的主机名（比如 www.w3school.com.cn）。 |
| $_SERVER['SERVER_SOFTWARE']     | 返回服务器标识字符串（比如 Apache/2.2.24）。                 |
| $_SERVER['SERVER_PROTOCOL']     | 返回请求页面时通信协议的名称和版本（例如，“HTTP/1.0”）。     |
| $_SERVER['REQUEST_METHOD']      | 返回访问页面使用的请求方法（例如 POST）。                    |
| $_SERVER['REQUEST_TIME']        | 返回请求开始时的时间戳（例如 1577687494）。                  |
| $_SERVER['QUERY_STRING']        | 返回查询字符串，如果是通过查询字符串访问此页面。             |
| $_SERVER['HTTP_ACCEPT']         | 返回来自当前请求的请求头。                                   |
| $_SERVER['HTTP_ACCEPT_CHARSET'] | 返回来自当前请求的 Accept_Charset 头（ 例如 utf-8,ISO-8859-1） |
| $_SERVER['HTTP_HOST']           | 返回来自当前请求的 Host 头。                                 |
| $_SERVER['HTTP_REFERER']        | 返回当前页面的完整 URL（不可靠，因为不是所有用户代理都支持）。 |
| $_SERVER['HTTPS']               | 是否通过安全 HTTP 协议查询脚本。                             |
| $_SERVER['REMOTE_ADDR']         | 返回浏览当前页面的用户的 IP 地址。                           |
| $_SERVER['REMOTE_HOST']         | 返回浏览当前页面的用户的主机名。                             |
| $_SERVER['REMOTE_PORT']         | 返回用户机器上连接到 Web 服务器所使用的端口号。              |
| $_SERVER['SCRIPT_FILENAME']     | 返回当前执行脚本的绝对路径。                                 |
| $_SERVER['SERVER_ADMIN']        | 该值指明了 Apache 服务器配置文件中的 SERVER_ADMIN 参数。     |
| $_SERVER['SERVER_PORT']         | Web 服务器使用的端口。默认值为 “80”。                        |
| $_SERVER['SERVER_SIGNATURE']    | 返回服务器版本和虚拟主机名。                                 |
| $_SERVER['PATH_TRANSLATED']     | 当前脚本所在文件系统（非文档根目录）的基本路径。             |
| $_SERVER['SCRIPT_NAME']         | 返回当前脚本的路径。                                         |
| $_SERVER['SCRIPT_URI']          | 返回当前页面的 URI。                                         |

PHP $_REQUEST 用于收集 HTML 表单提交的数据

##   **判断变量是否设置值**

  ```php
  bool isset($var)
  ```

      检测变量是否设置，并且不是 NULL。 

  ​	变量未设置或者设置为null,返回false（认为变量没有设置）。其余情况全部为true。一般用来判断变量是否设置，因为变量未设置，无法直接使用。(变量先赋值，在使用！） 

##   **判断变量是否为空**

  ```php 
  bool empty($var)
  ```

  ​	判断变量是否为空。PHP中认为变量的值为：""、0、"0"、NULL、FALSE、[]时，变量虽然赋值了，但是无实际的意义。为空。

#                         数组方法

| 函数                                                         | 描述                                                         |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| [array()](http://www.w3school.com.cn/php/func_array.asp)     | 创建数组。                                                   |
| [array_change_key_case()](http://www.w3school.com.cn/php/func_array_change_key_case.asp) | 把数组中所有键更改为小写或大写。                             |
| [array_chunk()](http://www.w3school.com.cn/php/func_array_chunk.asp) | 把一个数组分割为新的数组块。                                 |
| [array_column()](http://www.w3school.com.cn/php/func_array_column.asp) | 返回输入数组中某个单一列的值。                               |
| [array_combine()](http://www.w3school.com.cn/php/func_array_combine.asp) | 通过合并两个数组来创建一个新数组。                           |
| [array_count_values()](http://www.w3school.com.cn/php/func_array_count_values.asp) | 用于统计数组中所有值出现的次数。                             |
| [array_diff()](http://www.w3school.com.cn/php/func_array_diff.asp) | 比较数组，返回差集（只比较键值）。                           |
| [array_diff_assoc()](http://www.w3school.com.cn/php/func_array_diff_assoc.asp) | 比较数组，返回差集（比较键名和键值）。                       |
| [array_diff_key()](http://www.w3school.com.cn/php/func_array_diff_key.asp) | 比较数组，返回差集（只比较键名）。                           |
| [array_diff_uassoc()](http://www.w3school.com.cn/php/func_array_diff_uassoc.asp) | 比较数组，返回差集（比较键名和键值，使用用户自定义的键名比较函数）。 |
| [array_diff_ukey()](http://www.w3school.com.cn/php/func_array_diff_ukey.asp) | 比较数组，返回差集（只比较键名，使用用户自定义的键名比较函数）。 |
| [array_fill()](http://www.w3school.com.cn/php/func_array_fill.asp) | 用给定的键值填充数组。                                       |
| [array_fill_keys()](http://www.w3school.com.cn/php/func_array_fill_keys.asp) | 用指定键名的给定键值填充数组。                               |
| [array_filter()](http://www.w3school.com.cn/php/func_array_filter.asp) | 用回调函数过滤数组中的元素。                                 |
| [array_flip()](http://www.w3school.com.cn/php/func_array_flip.asp) | 交换数组中的键和值。                                         |
| [array_intersect()](http://www.w3school.com.cn/php/func_array_intersect.asp) | 比较数组，返回交集（只比较键值）。                           |
| [array_intersect_assoc()](http://www.w3school.com.cn/php/func_array_intersect_assoc.asp) | 比较数组，返回交集（比较键名和键值）。                       |
| [array_intersect_key()](http://www.w3school.com.cn/php/func_array_intersect_key.asp) | 比较数组，返回交集（只比较键名）。                           |
| [array_intersect_uassoc()](http://www.w3school.com.cn/php/func_array_intersect_uassoc.asp) | 比较数组，返回交集（比较键名和键值，使用用户自定义的键名比较函数）。 |
| [array_intersect_ukey()](http://www.w3school.com.cn/php/func_array_intersect_ukey.asp) | 比较数组，返回交集（只比较键名，使用用户自定义的键名比较函数）。 |
| [array_key_exists()](http://www.w3school.com.cn/php/func_array_key_exists.asp) | 检查指定的键名是否存在于数组中。                             |
| [array_keys()](http://www.w3school.com.cn/php/func_array_keys.asp) | 返回数组中所有的键名。                                       |
| [array_map()](http://www.w3school.com.cn/php/func_array_map.asp) | 把数组中的每个值发送到用户自定义函数，返回新的值。           |
| [array_merge()](http://www.w3school.com.cn/php/func_array_merge.asp) | 把一个或多个数组合并为一个数组。                             |
| [array_merge_recursive()](http://www.w3school.com.cn/php/func_array_merge_recursive.asp) | 递归地合并一个或多个数组。                                   |
| [array_multisort()](http://www.w3school.com.cn/php/func_array_multisort.asp) | 对多个数组或多维数组进行排序。                               |
| [array_pad()](http://www.w3school.com.cn/php/func_array_pad.asp) | 用值将数组填补到指定长度。                                   |
| [array_pop()](http://www.w3school.com.cn/php/func_array_pop.asp) | 删除数组的最后一个元素（出栈）。                             |
| [array_product()](http://www.w3school.com.cn/php/func_array_product.asp) | 计算数组中所有值的乘积。                                     |
| [array_push()](http://www.w3school.com.cn/php/func_array_push.asp) | 将一个或多个元素插入数组的末尾（入栈）。                     |
| [array_rand()](http://www.w3school.com.cn/php/func_array_rand.asp) | 返回数组中一个或多个随机的键。                               |
| [array_reduce()](http://www.w3school.com.cn/php/func_array_reduce.asp) | 通过使用用户自定义函数，以字符串返回数组。                   |
| [array_replace()](http://www.w3school.com.cn/php/func_array_replace.asp) | 使用后面数组的值替换第一个数组的值。                         |
| [array_replace_recursive()](http://www.w3school.com.cn/php/func_array_replace_recursive.asp) | 递归地使用后面数组的值替换第一个数组的值。                   |
| [array_reverse()](http://www.w3school.com.cn/php/func_array_reverse.asp) | 以相反的顺序返回数组。                                       |
| [array_search()](http://www.w3school.com.cn/php/func_array_search.asp) | 搜索数组中给定的值并返回键名。                               |
| [array_shift()](http://www.w3school.com.cn/php/func_array_shift.asp) | 删除数组中首个元素，并返回被删除元素的值。                   |
| [array_slice()](http://www.w3school.com.cn/php/func_array_slice.asp) | 返回数组中被选定的部分。                                     |
| [array_splice()](http://www.w3school.com.cn/php/func_array_splice.asp) | 删除并替换数组中指定的元素。                                 |
| [array_sum()](http://www.w3school.com.cn/php/func_array_sum.asp) | 返回数组中值的和。                                           |
| [array_udiff()](http://www.w3school.com.cn/php/func_array_udiff.asp) | 比较数组，返回差集（只比较值，使用一个用户自定义的键名比较函数）。 |
| [array_udiff_assoc()](http://www.w3school.com.cn/php/func_array_udiff_assoc.asp) | 比较数组，返回差集（比较键和值，使用内建函数比较键名，使用用户自定义函数比较键值）。 |
| [array_udiff_uassoc()](http://www.w3school.com.cn/php/func_array_udiff_uassoc.asp) | 比较数组，返回差集（比较键和值，使用两个用户自定义的键名比较函数）。 |
| [array_uintersect()](http://www.w3school.com.cn/php/func_array_uintersect.asp) | 比较数组，返回交集（只比较值，使用一个用户自定义的键名比较函数）。 |
| [array_uintersect_assoc()](http://www.w3school.com.cn/php/func_array_uintersect_assoc.asp) | 比较数组，返回交集（比较键和值，使用内建函数比较键名，使用用户自定义函数比较键值）。 |
| [array_uintersect_uassoc()](http://www.w3school.com.cn/php/func_array_uintersect_uassoc.asp) | 比较数组，返回交集（比较键和值，使用两个用户自定义的键名比较函数）。 |
| [array_unique()](http://www.w3school.com.cn/php/func_array_unique.asp) | 删除数组中的重复值。                                         |
| [array_unshift()](http://www.w3school.com.cn/php/func_array_unshift.asp) | 在数组开头插入一个或多个元素。                               |
| [array_values()](http://www.w3school.com.cn/php/func_array_values.asp) | 返回数组中所有的值。                                         |
| [array_walk()](http://www.w3school.com.cn/php/func_array_walk.asp) | 对数组中的每个成员应用用户函数。                             |
| [array_walk_recursive()](http://www.w3school.com.cn/php/func_array_walk_recursive.asp) | 对数组中的每个成员递归地应用用户函数。                       |
| [arsort()](http://www.w3school.com.cn/php/func_array_arsort.asp) | 对关联数组按照键值进行降序排序。                             |
| [asort()](http://www.w3school.com.cn/php/func_array_asort.asp) | 对关联数组按照键值进行升序排序。                             |
| [compact()](http://www.w3school.com.cn/php/func_array_compact.asp) | 创建包含变量名和它们的值的数组。                             |
| [count()](http://www.w3school.com.cn/php/func_array_count.asp) | 返回数组中元素的数目。                                       |
| [current()](http://www.w3school.com.cn/php/func_array_current.asp) | 返回数组中的当前元素。                                       |
| [each()](http://www.w3school.com.cn/php/func_array_each.asp) | 返回数组中当前的键／值对。                                   |
| [end()](http://www.w3school.com.cn/php/func_array_end.asp)   | 将数组的内部指针指向最后一个元素。                           |
| [extract()](http://www.w3school.com.cn/php/func_array_extract.asp) | 从数组中将变量导入到当前的符号表。                           |
| [in_array()](http://www.w3school.com.cn/php/func_array_in_array.asp) | 检查数组中是否存在指定的值。                                 |
| [key()](http://www.w3school.com.cn/php/func_array_key.asp)   | 从关联数组中取得键名。                                       |
| [krsort()](http://www.w3school.com.cn/php/func_array_krsort.asp) | 对数组按照键名逆向排序。                                     |
| [ksort()](http://www.w3school.com.cn/php/func_array_ksort.asp) | 对数组按照键名排序。                                         |
| [list()](http://www.w3school.com.cn/php/func_array_list.asp) | 把数组中的值赋给一些变量。                                   |
| [natcasesort()](http://www.w3school.com.cn/php/func_array_natcasesort.asp) | 用“自然排序”算法对数组进行不区分大小写字母的排序。           |
| [natsort()](http://www.w3school.com.cn/php/func_array_natsort.asp) | 用“自然排序”算法对数组排序。                                 |
| [next()](http://www.w3school.com.cn/php/func_array_next.asp) | 将数组中的内部指针向前移动一位。                             |
| [pos()](http://www.w3school.com.cn/php/func_array_pos.asp)   | current() 的别名。                                           |
| [prev()](http://www.w3school.com.cn/php/func_array_prev.asp) | 将数组的内部指针倒回一位。                                   |
| [range()](http://www.w3school.com.cn/php/func_array_range.asp) | 创建包含指定范围单元的数组。                                 |
| [reset()](http://www.w3school.com.cn/php/func_array_reset.asp) | 将数组的内部指针指向第一个元素。                             |
| [rsort()](http://www.w3school.com.cn/php/func_array_rsort.asp) | 对数组逆向排序。                                             |
| [shuffle()](http://www.w3school.com.cn/php/func_array_shuffle.asp) | 将数组打乱。                                                 |
| [sizeof()](http://www.w3school.com.cn/php/func_array_sizeof.asp) | count() 的别名。                                             |
| [sort()](http://www.w3school.com.cn/php/func_array_sort.asp) | 对数组排序。                                                 |
| [uasort()](http://www.w3school.com.cn/php/func_array_uasort.asp) | 使用用户自定义的比较函数对数组中的键值进行排序。             |
| [uksort()](http://www.w3school.com.cn/php/func_array_uksort.asp) | 使用用户自定义的比较函数对数组中的键名进行排序。             |
| [usort()](http://www.w3school.com.cn/php/func_array_usort.asp) | 使用用户自定义的比较函数对数组进行排序。                     |

ctrl+shift+g  sublime快捷键--选中元素外面包裹标签

- MySQL服务卸载

  1.停止服务

  2.管理员运行cmd    输入**sc delete MySQL**;

  ​                 MySQL为服务名称,非显示名称----可删除任何想删除的服务



ALTER USER 'root'@'localhost' IDENTIFIED BY 'password' PASSWORD EXPIRE NEVER; #修改加密规则 
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password'; #更新一下用户的密码 

   FLUSH PRIVILEGES; #刷新权限 

## 常量

 **常量的定义**

​	脚本执行周期内，值不会发生改变的量。常量不可以修改及删除。定义为常量可以节省存储空间。英文为：`constant`

 常量的使用方法：
   1) 声明:  define(常量名,  常量值,  大小写区分标志);   

​	true（不区分）/false（区分/默认）;

   2) 调用:  echo  常量名;

**注意:**一般在实际工作中,常量都用大写

**语法**

```php
define(常量名，常量值);
```

```php
define('VERSION','1.2.0'); //常量默认全部字母大写
define('PI',3.1415926);
echo 'PI:',PI;             //使用时直接使用常量名
```

- 常量默认区分大小写。
- 按照开发惯例，常量名推荐全部字母大写。
- 常量不可以重复定义及修改数据。
- 常量值为标量数据类型（整型、浮点型、布尔类型、字符串）。

# PHP内置函数

### 数学函数

- max(),min()   分别返回一组数的最大值及最小值；

- abs() 返回绝对值。

- floor() 向下取整。

- ceil()  向上取整。

- round() 四舍五入。

- rand()  返回随机数，可以取到两端的值。

### 日期函数

- time()  返回当前的 时间戳(1970到现在的时间的秒数)

- date(format,time) 格式化一个本地时间或日期

  格式：Y(年) m(月)  d(日)   H(时)  i(分)  s秒

```php
	$time=time();//获取时间戳
	date_default_timezone_set("Asia/Shanghai");//表示将时间显示为当前地区的时间
	echo date('Y-m-d H:i:s',$time); //格式化时间戳
```

默认时区会不太正确,  我们在东八区, 比0时区会多八小时

```php
路径: D:\phpStudy\php\php-5.4.45
在php.ini里加上找到date.timezone项，设置date.timezone = "PRC"，重启环境就ok了。
```

PRC: 中华人民共和国



### 字符串函数

- str_replace(查找的值，替换的值，执行替换操作的字符)       字符串替换
- trim(字符串);     去除首尾空白字符
- explode(分割符，执行分割的字符串);        使用一个字符串分割另一个字符串,返回一个分割后的数组(类似split)
- implode(连接符，执行连接的数组);           将数组根据连接符拼接成字符串(类似join)
- substr( 字符串，起始索引，截取长度  );    截取字符串 中文占3个字节长度
- strchr(字符串，标识字符);          从左向右找标识字符，返回该字符后全部字符(包括该字符)
- strrchr(字符串，标识字符);        从右向左找标识字符，返回该字符后全部字符(包括该字符) **主要用于获取后缀名**

### 字符串函数

- str_replace(查找的值，替换的值，执行替换操作的字符)       字符串替换
- trim(字符串);     去除首尾空白字符
- explode(分割符，执行分割的字符串);        使用一个字符串分割另一个字符串,返回一个分割后的数组(类似split)
- implode(连接符，执行连接的数组);           将数组根据连接符拼接成字符串(类似join)
- substr( 字符串，起始索引，截取长度  );    截取字符串 中文占3个字节长度
- strchr(字符串，标识字符);          从左向右找标识字符，返回该字符后全部字符(包括该字符)
- strrchr(字符串，标识字符);        从右向左找标识字符，返回该字符后全部字符(包括该字符) **主要用于获取后缀名**

# include文件引入

**介绍**

​	不同的页面中有相同的代码部分，可以将其分离为单个文件。需要调用时，include 引入对应的文件即可调用。提高代码的复用率。

类似于 js 中 script 标签导入, 可以用于函数复用

**语法**

```javascript
include | include_once   "文件的路径"
```

**include 与 include_once区别**

- include  可以重复引入文件
- include_once  只引入一次，防止多次引入文件

# PHP数据读写到文件(数据持久化)

程序运行过程中，数据存储在内存中的，程序结束, 数据会销毁

如果希望可以永久存储某些数据，可以将数据存储在硬盘上（存储在文件中） 

将数据由 内存 存储到硬盘的过程，称为数据持久化；

- file_get_contents(path)          根据路径读取文件内容, 得到一个字符串

- file_put_contents(path,$str)  将一个字符串写入到一个文件中。(只能存储字符串)

  ```php
  int file_put_contents(string $file, string $data[, constants flag]);
  参数1: 文件路径
  参数2: 要写入文件的字符串
  参数3: 可选参数，默认不写，新内容覆盖原文件中的内容；后面可跟
  FILE_USE_INCLUDE_PATH
  FILE_APPEND (向文件后面追加内容)
  LOCK_EX
  FILE_APPEND是向文件中追加内容
  返回值: 写入文件的字符串长度(不用记)
  ```

- json_encode($data);               将PHP变量转成JSON格式字符串。

- json_decode($str,assoc);          将 JSON 字符串, 转换为 PHP 数组。**assoc**: 当该参数为 TRUE 时，将返回数组，FALSE 时返回对象(默认值为false),第二个参数不传时默认为false,转换为对象

# PHP 全局变量 - 超全局变量

PHP 中的许多预定义变量都是“超全局的”，这意味着它们在一个脚本的全部作用域中都可用。在函数或方法中无需执行 global $variable; 就可以访问它们。

这些超全局变量是：

- $GLOBALS
- $_SERVER
- $_REQUEST
- $_POST
- $_GET
- $_FILES
- $_ENV
- $_COOKIE
- $_SESSION

# 表单处理

> 表单（form）：表单用于收集用户输入信息，并将数据提交给服务器。是一种常见的与服务端数据交互的一种方式

```javascript
//1. action: 指定表单的提交地址
//2. method: 指定表单的提交方式，get/post，默认get
//3. input的数据想要提交到后台，必须指定name属性，后台通过name属性获取值
//4. 想要提交表单，不能使用input:button 必须使用input:submit
```

**php获取表单数据** 

```
 // $_GET 是 PHP 系统提供的一个超全局变量，是一个数组，里面存放了表单通过get方式提交的数据。
 // $_POST 是 PHP 系统提供的一个超全局变量，是一个数组，里面存放了表单通过post方式提交的数据。
```

**get与post的区别** 

```javascript
//1. get方式
	//1.1 数据会拼接在url地址的后面?username=pp&password=123456
	//1.2 地址栏有长度限制，因此get方式提交数据大小不会超过4k
//2. post方式
	//2.1 数据不会在url中显示，相比get方式，post更安全
	//2.2 提交的数据没有大小限制, 可用于文件上传
```

## html要求

1. 文件上传的提交方式必须是post方式
2. 需要给form指定enctype="multipart/form-data"
3. 指定name属性，后台才能获取到

## **php相关**

- 文件上传时，通过`$_FILES`才能获取到，这是一个二维数组。

  ```php
    Array
    (
        [photo] => Array
            (
                [name] => 001.jpg   // 文件名字
                [type] => image/jpeg  // 文件类型
                [tmp_name] => C:\Users\Jepson\AppData\Local\Temp\phpF2A0.tmp   // 上传文件的临时保存的位置
                [error] => 0     // 上传错误码, 错误码为 0 表示没有错误
                [size] => 6000   // 文件大小, 单位字节, 大小 6kb 左右
            )
  
    )
  ```

  ​

- 上传文件时，文件会临时保存在服务器上，如果文件最终没有保存，那么临时文件会被删除，保证服务器安全。

- `sleep(10) ` 可以让代码延迟10秒钟才执行。

- `move_uploaded_file($path, $newPath);`可以保存临时图片

```php
// 保存图片的完整代码
  // 思路:
  // 1. 在文件上传成功的情况下, 进行图片的保存   error == 0
  // 2. 获取临时文件路径
  // 3. 随机生成新的文件名, 注意文件中后缀名是不能改变的
  // 4. 根据新的文件名, 转移临时文件

  $file = $_FILES['photo'];

  // 判断上传是否成功
  if ( $file['error'] == 0 ) { // 上传成功
    // 1. 获取临时文件路径
    $ftemp = $file['tmp_name'];

    // 2. 随机生成新的文件名, 后缀不能随便起, 要获取一下
    $name = $file['name'];
    $text = strrchr($name, '.');
    // 为了防止重复, 生成随机的文件名以当前时间秒数+随机数组成
    $newName = time().rand(10000,99990).$text;

    // 3. 进行转存
    move_uploaded_file($ftemp, "./upload/$newName");
  }
```

# HTTP协议

**协议：**

> 协议，就是事先的一种约定、规则、规范、标准。（入学协议）

 **常见协议**

- HTTP、HTTPS 超文本传输协议 
- FTP 文件传输协议
- SMTP 简单邮件传输协议

**HTTP协议**

> 即超文本传输协议，网站是基于HTTP协议的，例如网站的图片、CSS、JS等都是基于HTTP协议进行传输的。

HTTP协议是由从客户机到服务器的`请求(Request)`和从服务器到客户机的`响应(Response)`进行了约束和规范。

即HTTP协议主要由`请求`和`响应`构成。 

- 常用请求方法 POST、GET、PUT、DELETE

- 请求 (request)：`请求行、请求头、请求主体`。

- 响应 (response)：`状态行、响应头、响应主体`。

### 请求报文和响应报文

**请求/请求报文**

​	请求由客户端发起，其规范格式为：请求行、请求头、请求主体。	

**响应/响应报文**

​	响应由服务器发出，其规范格式为：状态行、响应头、响应主体。

**get请求的请求报文详解** 

​	get请求没有请求体，因为要传递的数据已经拼接到了请求头中

```javascript
//--------------------------请求行--------------------------------
// GET  请求方式
// /day02/01.php?username=hucc&password=123456    请求路径+参数（注意点）
// HTTP/1.1 HTTP的版本号
GET /day02/01.php?username=hucc&password=123456 HTTP/1.1

//--------------------------请求头--------------------------------
// Host:主机地址
Host: www.study.com
// HTTP1.1版本默认开启，建立过连接后，TCP连接不会断开，下次连接可以继续使用（底层，不用管）
Connection: keep-alive
//chrome浏览器自己增加的，不用管
Upgrade-Insecure-Requests: 1
//浏览器的代理字符串（版本信息）
User-Agent: Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.96 Safari/537.36
//浏览器端可以接受的类型。
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,`*/*`;q=0.8
//从哪个页面发出的请求
Referer: http://www.study.com/day02/01-login.html
//检查浏览器支持的压缩方式
Accept-Encoding: gzip, deflate, sdch
//浏览器支持的语言，优先中文。
Accept-Language: zh-CN,zh;q=0.8,en;q=0.6
//----------------------------请求体-------------------------------------
//get请求没有请求体，因为要传递的数据已经拼接到了请求头中
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
username=hucc&password=123456
```



**GET请求与POST请求的对比** 

- GET请求没有请求体，因为GET请求的参数拼接到地址栏中了
  `/day02/01.php?username=hucc&password=123456`
- POST请求有请求体，就是传递的参数。
- POST请求需要指定content-type属性。
  `content-type:application/x-www-form-urlencoded`





## 响应与响应报文

```javascript
//---------------------状态行（响应行）-------------------------------
//HTTP/1.1  HTTP版本
//200 响应的状态
	//200表示成功
	//302页面重定向
	//304表示文档未修改
	//404表示找不到资源
	//500表示服务端错误
HTTP/1.1 200 OK

//----------------------响应头-----------------------------------------------
Date: Thu, 22 Jun 2017 16:51:22 GMT //服务器的时间
Server: Apache/2.4.23 (Win32) OpenSSL/1.0.2j PHP/5.4.45  //服务器的版本信息
X-Powered-By: PHP/5.4.45  //后台编程语言信息
Content-Length: 18   //服务器的响应主体长度
//内容类型，告诉浏览器该如何解析响应结果
Content-Type: text/html;charset=utf-8
//-----------------------响应体------------------------------------------------
用户登录成功
```

​	通常来说，我们不会用抓包工具来查看请求和响应，太麻烦了，可以直接使用谷歌浏览器来查看请求报文和响应报文。

​	谷歌浏览器会对报文进行一定的格式化，看起来虽然不是原生的报文，但是使用起来更加的方便简洁。

# Mysql数据库技术

## 初识数据库概念

**数据库基本概念**

> 专门用来存储、管理数据的仓库（空间），按照数据结构来组织、存储和管理，可以实现高效存储及读取的数据解决方案。英文：Database,DB。 Database Administrator  DBA 
>
> 数据是程序核心    



> 实际项目中，一般将项目相关的数据全部存储在单个数据库中。 



> 数据库有专门的、高效的数据管理系统（DBMS），可以应对数据量较大、关系较为复杂的情况。

**关系型数据库**

当前使用范围最广的数据库。按照关系模型（数据之间存在联系）组织的数据库。数据存储在硬盘文件中。

订单：订单编号，商品名称，价格，数量，配送地址

| **订单编号** | **商品名称** | **价格** | **数量** | **配送地址**        |
| ------------ | ------------ | -------- | -------- | ------------------- |
| 100123       | 华为mate10   | 4999     | 2        | 北京市京顺路99号    |
| 100124       | 花裙子       | 499      | 1        | 北京市清华大学1号楼 |

  关系模型是采用二维表格（行、列）及其之间的联系。

  相对于其他模型，更贴合现实世界，更便于理解。

- 关系型数据库  数据存储在硬盘上

- 非关系型 数据库  数据存储在内存中

### **数据库的组织架构：**

- **数据表（table）**

> 表是以行和列的形式组织起来的数据的集合。项目一般需要不同的数据表，将数据分布存储在不同的数据表中。
>
> 数据库的数据存放在数据表中



> 如：订单表，用户表，商品表，配送地址表，

- **记录-行（row，record）**

> 一行有意义的信息的集合

- **字段-列(column，field)**

> 某一列的值的名称

> 通过行列交叉确定具体数据

#### 关系型数据库产品—MySQL介绍

### SQL

- SQL基本概述

  > 注释用 --  
  >
  > 语句结束加分号(;)
  > 增 删 改 查

- 插入数据insert

```sql
-- insert into 表名 (字段列表) values (值列表)
insert into book (name,author,category,price) values ('天龙八部','金庸','文学',20)
```

- 修改数据update

```sql
-- update 表名 set 字段名称1=值1,字段名称2=值2,... where 条件
update book set name='笑傲江湖',price='30' where id=10
```

- 删除数据delete

```sql
-- delete from 表名 where 条件
-- delete from book;  删除book表中全部数据
delete from book where id=10
```

- 查询数据select

```sql
-- select * from 表名 where 条件
select * from book where author='金庸' and price>20
```

### SQL高级

- where子句

  查询时，不添加where条件返回数据表所有行。需要添加限定条件，只返回需要的行。

select  字段列表 from  table where子句；

 

- Like 模糊匹配  % 通配符

```sql
	-- 查找姓张的人
	select * from table where name like '张%';
```

- in 语法：一次查询多个符合条件的数据

```sql
	select  字段列表 from tb where  字段 in  (value1,value2,value3);
```

- Count() 获取返回数据的总条数

```sql
	-- 查询满足条件数据的总条数	
	select count(*) from table where 条件
```

- 排序

```sql
select * from 表名 order by  字段名称;   	  	默认升序
select * from 表名 order by  age;  -- 按照年龄来排序
select * from 表名 order by 字段名称 desc;      降序
```

- limit 子句

返回查找结果中的前n行 

```sql
	 select 字段列表  from  table  limit 截取的起始索引，截取的长度 
```

- 连接查询

```sql
	select 字段列表 from  A join B on  A.字段  =  B.字段 [where子句];
```

查询学生基本信息以及班级信息：

- 注意各个子句之间的顺序。

```sql
	select 字段列表  from  table  where 子句
```

​	

创建学生表 ：编号 、姓名、年龄、性别

```sql
-- ----------------------------
-- Table structure for stu1
-- ----------------------------
DROP TABLE IF EXISTS `stu1`;
CREATE TABLE `stu1` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `age` int(11) DEFAULT NULL,
  `sex` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of stu1
-- ----------------------------
INSERT INTO `stu1` VALUES ('1', '张三', '18', '男');
INSERT INTO `stu1` VALUES ('2', '李四', '19', '女');
INSERT INTO `stu1` VALUES ('3', '王五', '22', '男');
INSERT INTO `stu1` VALUES ('5', '赵六', '18', '女');
INSERT INTO `stu1` VALUES ('6', '田七', '15', '男');
INSERT INTO `stu1` VALUES ('7', '王八', '16', '女');
INSERT INTO `stu1` VALUES ('8', '李狗蛋', '18', '男');
INSERT INTO `stu1` VALUES ('9', '李元芳', '20', '男');
INSERT INTO `stu1` VALUES ('10', '张飞', '16', '男');
```

## PHP代码操作数据

### **连接数据库基本步骤**

1-连接数据库
2-准备sql语句
3-执行sql语句
4-获取执行的结果并分析
5-释放并关闭数据库

### **操作数据库常用API**

- mysqli_connect(IP,用户名，密码，数据库名,[端口号])  连接数据库  -----端口号可省略
- mysqli_query($link,$sql)  执SQL语句 $link--连接对象  $sql--执行语句
- mysqli_error($link);  返回最近调用函数的错误描述
- mysqli_close($link) 关闭连接
- mysqli_fetch_row($res)  以索引数组的形式返回结果
- mysqli_fetch_assoc($res) 以关联数组的形式返回数据
- mysqli_fetch_array($res) 返回索引数组和关联数组
- mysqli_num_rows(resource $res); 返回结果集的行数

### sql操作注意事项：

- 使用PHP发送SQL语句前，可以先打印SQL语句，检查语句的正确性。
- 使用变量拼接SQL语句时，字段为字符串类型，需要在变量的两侧使用单、双引号包裹。可以将所有的字段外面都使用双引号包含。

```php
    //常用方法
      //mysqli_connect('ip地址','用户名','密码','数据库名称');
      //如果成功返回 数据库连接
      //如果失败返回 false

      //die('文本');  终止程序的执行

      //mysqli_query(数据库连接,要执行的sql语句);
      //成功 返回 true
      //失败 返回 false

      //mysqli_close(数据库连接); 关闭数据库的连接
      //mysqli_error(数据库的连接)； 输出数据库最近一次执行错误信息

     //@ 抑制错误 
     //1-连接数据库 
     @$link= mysqli_connect('127.0.0.1','root','','test1');
    // 如果出错 给用户提示
     if(!$link){
         //如果数据库连接失败，后面代码直接结束
         die('数据库连接失败！');     
     }

    //2-操作数据 
     //2-1 准备好sql语句（删除）
     $id=14;
     //双引号可以解析变量
     $sql="delete from stu1 where icd=$id";
    
     //2-2 让数据库执行sql语句  
     if(mysqli_query($link,$sql)){
         echo '删除成功！';
     }else{
        echo '<br/>'; 
         //输出数据库最近一次执行错误 
         echo mysqli_error($link);
     }

     //关闭数据库连接
     mysqli_close($link);
```

### 非查询(增删改)和查询语句（select）的区别

通过mysqli_query()函数，来执行sql语句，操作数据库

- 执行的是非查询sql语句时，mysqli_query()执行成功返回true,失败返回false 作为标识

- 而执行查询的sql语句是，mysqli_query()执行成功，返回查询数据的结果集（二维数组），失败返回false，我们拿到数据库中返回的数据进行渲染处理;
  **查询数据逻辑如下**

  ```php
      //操作数据的基本步骤：
      //1-连接数据库 
      //2-准备sql语句
      //3-操作数据（对数据库进行增删改查）
      //4-获取执行结果 
      //5-关闭数据连接
       //1-连接数据库 
            $link=mysqli_connect('127.0.0.1','root','','test1');
       if(!$link){
           die('数据库连接失败!');
       }
  
       //进行查询操作
       $sql="select * from stu1";
  
       //执行sql
       // 如果 mysqi_query 执行的是查询语句
       // 查询成功 返回的 查询到的数据的结果集
       // 查询失败 返回 false  
       $res=mysqli_query($link,$sql);
  
      //如果获取到数据 把数据保存到php中，然后传给前端
      //当查询结果不为false并且数据行数大于0行 进行保存
      //mysqli_num_rows($res);//获取结果集的行数
       if(!$res || mysqli_num_rows($res)==0 ){
           die('未获取到数据！');
       }
  
       //对数据进行保存
       //获取结果集中的数据
       // mysqli_fetch_assoc($res); 返回的是一个关联数组 一次取一条数据
      while($row=mysqli_fetch_assoc($res)){
          $arr[]=$row; //把每次获取的一行的关联数组的数据 放到$arr数组
      }
  
      mysqli_close($link);
  ```

  ### 数据库工具函数的封装

  > 为了提高代码的复用性，把数据增删改的操作封装成一个方法

> 封装公共代码部分，变换的部分提取成参数

```php
      //定义常量 存储数据库基本信息
      define('HOST','127.0.0.1');
      define('UNAME','root');
      define('PWD','');
      define('DB','test1');
      //非查询功能
      function my_exec($sql){
          //1-连接数据库
          @$link=mysqli_connect(HOST,UNAME,PWD,DB);
          //判断
          if(!$link){
              die('数据库连接失败！');
          }
          //2-执行sql语句，判断执行结果
          if(!mysqli_query($link,$sql)){
              //如果失败输出错误信息
              echo  '操作失败！'.mysqli_error($link); 
          }
          //3-关闭连接
          mysqli_close($link);
      }

      //查询功能
      function my_query($sql){
          //1-连接数据库
          @$link=mysqli_connect(HOST,UNAME,PWD,DB);
          //判断连接
          if(!$link){
              echo '数据库连接失败！';
              return false;
          }

          //执行查询
          $res=mysqli_query($link,$sql);
          //判断是否有数据
          if(!$res || mysqli_num_rows($res)==0 ){
              echo '未获取到数据！';
              //关闭连接
              mysqli_close($link);
              return false;
          }
          //保存数据 二维数组的形式
          //获取结果集中所有的数据
          while($row=mysqli_fetch_assoc($res)){
              $arr[]=$row;
          }
          //关闭连接
          mysqli_close($link); 
          //返回数据库的数据
          return $arr;       
        
      }
```

#  [include，include_once，require，require_once的区别](https://www.cnblogs.com/tongx/p/4956173.html)



1、include,require在其被调用的位置处包含一个文件。

2、include_once,require_once函数的作用与include相同，不过它会首先验证是否已包含该文件。如果已经包含，则不再执行include_once。其他同include一样。

3、require与include最主要的区别，a、require出错时，脚本将停止运行，而include出错的情况下，脚本将继续执行。b、无论require的位置如何，制定文件都将包含到出现require的脚本中。例如，即使require放在计算结果为假的if语句中，依然会包含指定文件。

4、使用require_once可以解决文件被覆盖的问题。 require_once函数确保文件只包含一次。在遇到require_once后，后面再试图包含相同的文件时将被忽略。	

# COOKIE 和 SESSION

**会话**：浏览器与服务器之间的数据交流。



### HTTP协议特点：

**无状态的,  多次请求之间没有相关性**

> 即同一用户请求同一网站的不同页面，服务器无法识别是否是同一用户发起的请求。因此，用户无法进行连续的业务逻辑。

如：登录，已在A页面登录，请求B页面，提示未登录。



### cookie 和 session 区分

- **cookie**: 在浏览器端的 存储数据的 容器
- **session ** 在服务器端的 存储数据的 容器

## cookie

- 在浏览器端的 存储数据的 容器
- 可以使用js对cookie进行操作
- cookie 允许服务器脚本（PHP脚本）在浏览器端存储数据
- **cookie特点**：在cookie中数据设置后，浏览器再次请求服务器指定页面时，会自动携带cookie中的数据到服务器，在服务器中可以获取cookie中的数据；

### js操作cookie（了解）

```js
// 设置cookie
document.cookie = 'name=zs'; 
document.cookie = 'pwd=123';   

// 获取cookie中的值
document.cookie;
```

### jquery.cookie.js插件 操作cookie

```javascript
//向页面中引入插件js文件，基于jquery的 
$.cookie('weight',100,{expires:7});//设置   expires 过期时间
$.cookie('name');//获取
$.removeCookie('name');//删除	

$.cookie(键,值,{expires:过期天数})
$.cookie(键) //获取 
```

### PHP操作cookie(服务器端操作cookie)

```php
	//设置cookie
	setcookie('名称','值'); 
	setcookie('名称','值'，'有效期');
	//删除cookie  将过期时间设置为之前的时间即可
	setcookie('名称',''，time()-1000); 
	//获取cookie  
	//$_COOKIE是PHP的超全局变量，内部存放有浏览器传过来的cookie数据，$_COOKIE只能用于获取数据
	$_COOKIE['名称'];
```

**小结：**

- cookie中的数据 可以被同一个网站的页面所共享
- 不同浏览器的cookie 不能共享
- cookie的数据存储在浏览器中，每次请求服务器，在请求报文中携带cookie的数据，发送给服务器
- 服务器端无法直接操作cookie，是通过在服务器端设置响应头的的方式，通知浏览器对cookie进行设置，
- cookie中的数据有效期，不设置是会话级别的, 浏览器关闭，会话结束，数据销毁
- cookie存储容量小，约4kb
- 存储的cookie值中不要出现空格,等号,分号

## session

![](E:/%E9%BB%91%E9%A9%AC%E5%89%8D%E7%AB%AF/6.PHP/%E8%A7%86%E9%A2%91/day05/05-%E9%A2%84%E4%B9%A0%E8%B5%84%E6%96%99/img/session.png)

- 在服务器端存储数据的容器
- session容器是一个数组的形式，通过超全局变量$_SESSION 进行取值和设置
- session在使用前，必须先 session_start 开启session 机制
- session中的数据可以被当前网站所共享

### session的基本操作

**开启session机制**(使用session前必须调用此方法)

```php
 session_start(); //开启session会话或者重用已经创建的会话。
```

**小结**:

1. 会在服务器中自动对每个第一次访问的用户, 随机生成一个sessionID

2. 再根据 sessionID, 自动创建一个session会话文件，我们可以在其中存储该用户的数据

3. 响应时, 在响应头中设置set-cookie, 存放该用户的sessionID

4. 将来浏览器端根据响应头, 将sessionId 存到 cookie 中, 并在下一次请求时携带

5. 下次访问时, 服务器端就会根据 sessionId 找到该用户的会话文件, 我们可以从session中读取用户信息, 实现会话保持

   ​

**设置和获取session中的数据**(通过超全局变量$_SESSION进行操作)

```php
//设置
$_SESSION['键']='值'; 
//删除
unset($_SESSION['键']); 
//清空session
$_SESSION=[]; 
//直接删除session会话文件，PHP脚本将无法读取session数据
session_destroy();
 //获取session的id
session_id();
```



# COOKE 和SESSION的应用--登录状态保持



登录模块的基本思路：

1. 如果用户登录成功，在服务器中记录用户的登录状态

   - session_start(),  对于第一次访问的用户, 会自动生成 sessionId, 并创建session文件，

   - 我们需要在session文件中，记录当前用户的信息

   - 通过响应头，给浏览器的cookie设置sessionID

     ```php
     if($name=='zs'&&$pwd=='666'){  
       // 登录成功, 将该用户唯一标识存到 session 中
       // 该用户数据库中 id 为 1
       $id = 1;
       session_start();
       $_SESSION['userid']=$id;
     }
     ```

     ​

2. 后续访问其他页面（个人中心），浏览器会自动发送cookie中存放的sessionID到服务器

3. 服务器会浏览器传递根据sessionID,找到对应的session文件，查看其中是否存放有当前用户的信息

   - 是： 用户已登录 ，正常浏览

   - 否：用户未登录，跳转到登录页

     ```php
     session_start();
     if(!empty($_SESSION['userid'])){
       //正常浏览
     }else{ 
       header('location:./04-login.html');
       die();//后面代码不执行
     }
     ```







