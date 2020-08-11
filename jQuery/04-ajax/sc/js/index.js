// js
// 处理点击切换页面
$(function () {
  
  $('.sc-body li').click(
    function (event) {
      // 通过event.target获取到每个li的文本
      var text = $(event.target).text()
      switch (text) {
        case '学生管理':
          // 加载页面 使用load 将内容 加载到content里
          // 注意 我们的js文件是在index.html中引入的 这里的路径我们要根据index.html来获取
          // 这里要右击index.html 点击 open with live server打开 本地运行有跨域问题
          $('.content').load('./pages/student.html')
          break;
        case '课程管理':
          $('.content').load('./pages/course.html')
          break;
        case '班级管理':
          $('.content').load('./pages/class.html')
          break;
        case '年级管理':
          $('.content').load('./pages/grade.html')
          break;
        case '教师管理':
          $('.content').load('./pages/teacher.html')
          break;

        default:
          break;
      }
    }
  )
  // 使用trigger模拟点击 让我们第一次进来默认显示学生管理界面
  $('.sc-body li').first().trigger('click')
})
