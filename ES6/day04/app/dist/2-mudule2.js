'use strict';

var _module = require('./1-module1');

var _module2 = _interopRequireDefault(_module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var temp = 'hello';

// 部分导入 想使用其它js文件内的变量 先要在顶部导入 
// console.log(a, obj);
// test1()

// 整体导入
// console.log(obj);

// export default导出的
// 导入其它js文件的内容 
// 可以使用as重命名 重命名以后要使用最新的名字
// import { a, obj, test as test1} from './1-module1' //.js可以省略

// 如果想导入所有的内容 
// import * as obj from './1-module1'

// 导入export default导出的
console.log(_module2.default);

// 先试用node执行 会报错 然后我们使用npm run build转换为es5 执行es5的js文件