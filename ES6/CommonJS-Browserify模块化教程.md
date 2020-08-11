## Browserify模块化使用教程

基于浏览器端 我们在浏览器端执行

1. 创建项目结构,生成配置文件 当前目录下执行npm init
  ```
  |-js
    |-dist //打包生成文件的目录
    |-src //源码所在的目录
      |-module1.js
      |-module2.js
      |-module3.js
      |-app.js //应用主源文件
  |-index.html //基于浏览器端我们要有index.html
  |-package.json
    {
      "name": "browserify-test",
      "version": "1.0.0"
    }
  ```
2. 下载browserify - Browserify 可以让你使用类似于 node 的 require() 的方式来组织浏览器端的 Javascript 代码
  * 全局: npm install browserify -g (全局和局部都需要安装)
  * 局部: npm install browserify --save-dev
3. 定义模块代码
  * module1.js
    ```
    module.exports = {
      foo() {
        console.log('moudle1 foo()')
      }
    }
    ```
  * module2.js
    ```
    module.exports = function () {
      console.log('module2()')
    }
    ```
  * module3.js
    ```
    exports.foo = function () {
      console.log('module3 foo()')
    }
    
    exports.bar = function () {
      console.log('module3 bar()')
    }
    ```
  * app.js (应用的主js)
    ```
    //引用模块
    let module1 = require('./module1')
    let module2 = require('./module2')
    let module3 = require('./module3')
    
    let uniq = require('uniq')
    
    //使用模块
    module1.foo()
    module2()
    module3.foo()
    module3.bar()
    
    console.log(uniq([1, 3, 1, 4, 3]))
    ```
* 打包处理js:
  
  * browserify js/src/app.js -o js/dist/bundle.js 将app.js文件输出到bundle.js文件
* 页面使用引入:
  ```
  <script type="text/javascript" src="js/dist/bundle.js"></script> 
  ```