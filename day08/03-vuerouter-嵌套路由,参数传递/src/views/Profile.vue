<template>
  <div>
    <h2>我是档案的标题</h2>
    <p>我是档案的内容</p>
    <!-- 通过动态路由传递过来的参数 -->
    <h2>{{$route.params}}</h2>
    <h2>{{$route.params.id}}</h2>
    <!-- 通过query传递过来的参数 -->
    <h2>{{$route.query}}</h2>
    <h2>{{$route.query.name}}</h2>
    <h2>{{$route.query.age}}</h2>

    <!-- 命名路由传参 -->
    <h2>{{$route.params.height}}</h2>
  </div>
</template>

<script>
export default {
  name: 'profile',
  data() {
    return {
    };
  },
};
</script>
<style scoped>
</style>