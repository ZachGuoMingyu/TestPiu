var baseURL = 'http://47.106.244.1:8099'
// 导出myAjax
export default 
function myAjax(url, method, param, successHandle, errorHandle) {
  $.ajax({
    url: baseURL + url,
    method: method,
    data: param,
    success: successHandle,
    error: errorHandle
  })
}