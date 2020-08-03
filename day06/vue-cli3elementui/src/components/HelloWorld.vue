<template>
  <div class="hello">
    {{categoryList}}
  </div>
</template>

<script>
import myAjax from '../utils/request'
export default {
  name: 'HelloWorld',
  data() {
    return {
      categoryList:[]  
    }
  },
  created() {
    myAjax('/manager/category/findAllCategory', 'get', {}, function (res){
      console.log(res);
      this.categoryList = res.data
    })
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
