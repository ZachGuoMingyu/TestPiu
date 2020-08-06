<template>
  <div class="hello">
    <h2>平方：{{$store.state.count * $store.state.count}}</h2>
    <h2>年龄大于20岁的学生有：{{more20Student}}</h2>
    <h2>年龄大于20岁的学生有：{{$store.getters.more20Student}}</h2>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  computed: {
    more20Student(){
      return this.$store.state.students.filter(s => s.age > 20)
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
