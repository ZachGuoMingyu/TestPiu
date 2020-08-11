## 为什么要学jQuery

使用javascript开发过程中，有许多的缺点：

1. 查找元素的方法单一，麻烦。
2. 遍历数组很麻烦，通常要嵌套一大堆的for循环。
3. 有兼容性问题。
4. 想要实现简单的动画效果，也很麻烦
5. 代码冗余



## jQuery到底是什么

> jQuery的官网 http://jQuery.com/
> jQuery就是一个js库，使用jQuery的话，会比使用JavaScript更简单。

js库：把一些常用到的方法写到一个单独的js文件，使用的时候直接去引用这js文件就可以了。
（animate.js、common.js）

我们知道了，jQuery其实就是一个js文件，里面封装了一大堆的方法方便我们的开发，
其实就是一个加强版的common.js，因此我们学习jQuery，其实就是学习jQuery这个js文件中封装的一大堆方法。



## jQuery的版本问题

> 官网下载地址：http://jQuery.com/download/
>
> 第三方下载地址：http://www.jq22.com/jquery-info122
>
> jQuery版本有很多，分为1.x 2.x 3.x
> 1.x和2.x版本jQuery都不再更新版本了，现在只更新3.x版本。

大版本分类：

- 1.x版本：能够兼容IE678浏览器
- 2.x版本：不能兼容IE678浏览器
- 3.x版本：不能兼容IE678浏览器，更加的精简（在国内不流行，因为国内使用jQuery的主要目的就是兼容IE678）

关于压缩版和未压缩版：

- jQuery-1.12.4.min.js:压缩版本，适用于生产环境，因为文件比较小，去除了注释、换行、空格等东西，但是基本没有颗阅读性。
- jQuery-1.12.4.js:未压缩版本，适用于学习与开发环境，源码清晰，易阅读。

引入方式

- 本地引入：下载相应版本的jQuery的js文件，通过绝对路径或相对路径引入
- cdn引入：找到相应版本的jQuery的cdn，将其复制到要使用的地方即可
  - 使用CDN引用的一个好处：许多用户在访问其他站点时，已经从百度、又拍云、新浪、谷歌或微软等网站加载过 jQuery。所有结果是，当他们访问您的站点时，会从缓存中加载 jQuery，这样可以减少加载时间。同时，大多数 CDN 都可以确保当用户向其请求文件时，会从离用户最近的服务器上返回响应，这样也可以提高加载速度。

## script放在head和body中的区别

放在body中：在页面加载的时候被执行

放在head中：在被调用时被执行

原因：

1、浏览器是从上到下解析HTML的。 

2、放在head里的js代码，会在body解析之前被解析；放在body里的js代码，会在整个页面加载完成之后解析。

js应该放哪：

1、head中：需调用才执行或事件触发执行的脚本，可以保证脚本在调用之前被加载

2、body中：当页面被加载时执行的脚本，通常被用来生成页面内容



## jQuery在线文档

1.http://hemin.cn/jq/

2.https://jquery.cuishifeng.cn



## 体验jQuery的使用

```js
/*
* 1. 查找元素的方法多种多样，非常灵活
* 2. 拥有隐式迭代特性，因此不再需要手写for循环了。
* 3. 完全没有兼容性问题。
* 4. 实现动画非常简单，而且功能更加的强大。
* 5. 代码简单、粗暴。
* */
$(document).ready(function () {
    $("#btn1").click(function () {
        $("div").show(200);
    });
    $("#btn2").click(function () {
        $("div").text("我是内容");
    });
});
```



## jQuery的入口函数

使用jQuery的三个步骤：

1. 引入jQuery文件
2. 入口函数
3. 功能实现

关于jQuery的入口函数：

```js
//第一种写法
$(document).ready(function() {
	
});
//第二种写法
$(function() {
	
});
```

jQuery入口函数与js入口函数的对比：

1. JavaScript的入口函数要等到页面中所有资源（包括图片、文件）加载完成才开始执行。
2. jQuery的入口函数只会等待文档树加载完成就开始执行，并不会等待图片、文件的加载。

```js
<script>
  //1.$是什么?
  //如果报了这个错误:$ is not defined,就说明没有引入jQuery文件.
  // $(function () {
  //
  // });


  //2.jQuery文件结构.
  //其实是一个自执行函数.
  // (function(){
  //   window.jQuery = window.$ = jQuery;
  // }());


  //3.
  //a.引入一个js文件,是会执行这js文件中的代码的.
  //console.log(num);//10
  //b.jQuery文件是一个自执行函数,执行这个jQuery文件中的代码,其实就是执行这个自执行函数.
  //c.这个自执行文件就是给window对象添加一个jQuery属性和$属性.
  //console.log(window);
  //d.$其实和jQuery是等价的,是一个函数.

  // console.log(window.jQuery === window.$);//true
  // console.log(Object.prototype.toString.call($));//'[object Function]'


  //4.$是一个函数
  //参数传递不同,效果也不一样.
  //4.1 如果参数传递的是一个匿名函数-入口函数
  // $(function(){
  // });

  //4.2 如果参数传递的是一个字符串-选择器/创建一个标签
  //$('#one');
  //$('<div>啦啦,我是一个div</div>');

  //4.3 如果参数是一个dom对象,那他就会把dom对象转换成jQuery对象.
  //$(dom对象);

</script>
```



## jq对象和dom对象(重要)

1. DOM对象：使用JavaScript中的方法获取页面中的元素返回的对象就是dom对象。
2. jQuery对象：jquery对象就是使用jquery的方法获取页面中的元素返回的对象就是jQuery对象。
3. jQuery对象其实就是DOM对象的包装集包装了DOM对象的集合（伪数组）
4. DOM对象与jQuery对象的方法不能混用。



DOM对象转换成jQuery对象：

```js
var $obj = $(domObj);
// $(document).ready(function(){});就是典型的DOM对象转jQuery对象
```



jQuery对象转换成DOM对象：

```js
var $li = $("li");
//第一种方法（推荐使用）
$li[0]
//第二种方法
$li.get(0)
```



## jquery选择器

### 什么是jQuery选择器

- jQuery选择器是jQuery为我们提供的一组方法，让我们更加方便的获取到页面中的元素。
  注意：jQuery选择器返回的是jQuery对象。
- jQuery选择器有很多，基本兼容了CSS1到CSS3所有的选择器，并且jQuery还添加了很多扩展性的选择器。
  【查看jQuery文档】
- jQuery选择器虽然很多，但是选择器之间可以相互替代，就是说获取一个元素，你会有很多种方法获取到。
  所以我们平时真正能用到的只是少数的最常用的选择器。

### 基本选择器

|    名称    |        用法        |                 描述                 |
| :--------: | :----------------: | :----------------------------------: |
|  ID选择器  |     $(“#id”);      |           获取指定ID的元素           |
|  类选择器  |    $(“.class”);    |        获取同一类class的元素         |
| 标签选择器 |     $(“div”);      |       获取同一类标签的所有元素       |
| 并集选择器 |   $(“div,p,li”);   | 使用逗号分隔，只要符合条件之一就可。 |
| 交集选择器 | $(“div.redClass”); |     获取class为redClass的div元素     |

> 总结：跟css的选择器用法一模一样。



### 过滤选择器

|   **名称**   |              **用法**              |                          **描述**                           |
| :----------: | :--------------------------------: | :---------------------------------------------------------: |
| :eq（index） | $(“li:eq(2)”).css(“color”, ”red”); | 获取到的li元素中，选择索引号为2的元素，索引号index从0开始。 |
|     :odd     |  $(“li:odd”).css(“color”, ”red”);  |          获取到的li元素中，选择索引号为奇数的元素           |
|    :even     | $(“li:even”).css(“color”, ”red”);  |          获取到的li元素中，选择索引号为偶数的元素           |

> 总结：这类选择器都带冒号



### 筛选选择器(方法)

|      **名称**      |          **用法**           |             **描述**             |
| :----------------: | :-------------------------: | :------------------------------: |
| children(selector) |   $(“ul”).children(“li”)    |   相当于$(“ul>li”)，子类选择器   |
|   find(selector)   |     $(“ul”).find(“li”);     |   相当于$(“ul li”),后代选择器    |
| siblings(selector) | $(“#first”).siblings(“li”); |  查找兄弟节点，不包括自己本身。  |
|      parent()      |    $(“#first”).parent();    |             查找父亲             |
|     eq(index)      |       $(“li”).eq(2);        | 相当于$(“li:eq(2)”),index从0开始 |
|       next()       |       $(“li”).next()        |           找下一个兄弟           |
|       prev()       |       $(“li”).prev()        |           找上一次兄弟           |

