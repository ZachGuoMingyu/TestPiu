<template>
  <div id="app">
    <!-- 批量删除 -->
    <el-button type="danger" @click="onePassClickDelete">危险按钮</el-button>
    <!-- 使用的是 多选 表格 -->
    <!-- :data 绑定我们的数组 -->
    <!-- @selection-change="handleSelectionChange" 获取选中的内容 -->
    <el-table
      ref="multipleTable"
      :data="categoryList"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange">
      <!-- width 宽度 align 居中 -->
      <el-table-column type="selection" width="180" align="center"></el-table-column>
      <!-- prop要和我们数据中的字段相对应 -->
      <el-table-column label="栏目名称" width="180" prop="name" align="center"></el-table-column>

      <el-table-column prop="parent.name" label="父级栏目" width="120" align="center">
        <!-- 这里我们使用作用域插槽来做判断 -->
        <template scope="scope" align="center">
          <p v-if="scope.row.parent == null">---</p>
          <p v-else>{{scope.row.parent.name}}</p>
        </template>
      </el-table-column>

      <el-table-column prop="comment" label="描述" align="center"></el-table-column>

      <el-table-column label="操作" width="150" align="center">
        <div>
          <el-button type="success" size="mini">删除</el-button>
          <el-button type="danger" size="mini">操作</el-button>
        </div>
      </el-table-column>

    </el-table>
    
  </div>
</template>

<script>
// 导入封装的ajax
import myAjax from './utils/request'

export default {
  name: 'app',
  data() {
    return {
      categoryList:[],
      // 选中的数组
      multipleSelection: []
    }
  },
  // 先做一些初始化，实现函数自执行（data数据已经初始化，但是DOM结构渲染完成，组件没有加载）
  created() {
    this.getCategoryList()
  },
  methods: {
    getCategoryList(){
      // 因为这里是异步操作 当初我们讲过为什么要外部定义that
      let that = this
      myAjax('/manager/category/findAllCategory', 'get', {}, function (res){
        console.log(res);
        that.categoryList = res.data
      })
    },
    // 选中的方法
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    // 一键删除
    onePassClickDelete() {
      console.log(this.multipleSelectionVideo);
      let ids = this.multipleSelection.map(item => {
        // item为数组的元素
        console.log(item.id);
        return item.id;
      });
    },
  },
}
</script>

<style>

</style>
