// arguments
// 当使用箭头函数来打印arguments时 我们并不能准确的找到我们想要的实参数据 因为使用箭头函数时，虽然有arguments 但是不会保存实参
// let test = (a, b) => console.log(arguments)

// 使用之前的函数来打印
// function test(a, b) {
//   console.log(arguments);
// }

//在箭头函数里 我们可以使用... rest函数来接收实参
let test = (...temp) => console.log(temp)

test(1, 2, 3, 4, 5)