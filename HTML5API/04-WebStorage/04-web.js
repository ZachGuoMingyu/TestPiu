// 后台线程
// 使用onmessage事件监听主线程给后台线程的参数
onmessage = function (event) {
  // 主线程给后台线程的参数
  var num = event.data;

  // 计算和
  var total = 0
  for(var i = 0; i<num; i++){
    total += i
  }
  // 将total返回给主线程
  postMessage(total)
}