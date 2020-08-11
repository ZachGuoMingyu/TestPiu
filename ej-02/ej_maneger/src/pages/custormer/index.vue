<template>
  <!-- 顾客管理 -->
  <div class="custormer">
    <!-- 顾客管理title -->
    <div class="custormer_title">顾客管理</div>

    <!-- 头部按钮区域 -->
    <div class="custormer_header">
      <el-button size="small" type="primary" @click="addCustormer">添加</el-button>
      <el-input size="small" v-model="input" placeholder="请输入状态"></el-input>
      <el-button size="small" type="primary" @click="toSearch">查询</el-button>
    </div>

    <!-- 表格区域 -->
    <div class="custormer_table">
      <el-table :data="custormer.list" style="width: 100%" size="small">
        <el-table-column prop="id" label="编号" align="center" width="180"></el-table-column>
        <el-table-column prop="realname" label="姓名" align="center" width="180"></el-table-column>
        <el-table-column prop="telephone" label="手机号" align="center"></el-table-column>
        <el-table-column prop="status" label="状态" align="center"></el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <!-- 去单个删除中处理 -->
            <span class="setSpan" @click="deleteHandler(scope.row.id)">删除</span>
            <!-- 编辑新增 先配置模态框 -->
            <span class="setSpan" @click="editHandler(scope.row)">编辑</span>
            <!-- 增减点击方法 跳转到顾客详情 参数为scope.row 因为我们的详情界面要根据顾客的id显示详情-->
            <span class="setSpan" @click="toDetails(scope.row)">详情</span>
          </template>
        </el-table-column>
      </el-table> 
    </div>
    <!-- 表格区域 -->

    <!-- 分页 -->
    <div class="custormer_page">
      <el-pagination background @current-change="handleCurrentChange" :page-size="pageSize" layout="total,prev, pager, next" :total="total"></el-pagination>
    </div>

    <!-- 模态框 -->
    <el-dialog :title="title" :visible.sync="dialogFormVisible">
      <el-form ref="ruleForm" :model="form" :rules="rules" label-width="120px">
        <!-- el-form-item元素的prop属性绑定字段名username，表单验证时，就会验证el-input元素绑定的变量form.username的值是否符合验证规则 -->
        <el-form-item label="用户名" prop="username">
          <!-- clearable一键清除 -->
          <el-input v-model="form.username" clearable placeholder="请输入用户名" />
        </el-form-item>
        <el-form-item label="姓名" prop="realname">
          <el-input v-model="form.realname" clearable placeholder="请输入姓名" />
        </el-form-item>
        <el-form-item label="手机号" prop="telephone">
          <el-input v-model="form.telephone" clearable placeholder="请输入手机号" />
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="form.password" type="password" clearable placeholder="请输入密码" />
        </el-form-item>
        <el-form-item label="状态" prop="status">
          <el-select v-model="form.status" placeholder="请选择状态">
            <el-option label="禁用" value="禁用" />
            <el-option label="启用" value="启用" />
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <!-- 这里的参数我们就是要传一个ruleForm字符串 因为下面的$refs需要这个作为key拿到表单验证的值 -->
        <el-button type="primary" @click="toSave('ruleForm')">确 定</el-button>
      </div>
    </el-dialog>
    
  </div>
</template>
<script>

import { mapActions, mapState } from 'vuex'
export default {
  data() {
    return {
      // 请输入状态
      input:'',
      // 默认页码
      page: 0,
      // 分页pageSize 每页显示10条数据
      pageSize:10,
      // 总页数 根据请求下来的数据再去动态设置
      total:100,
      // 顾客信息数据
      // custormerData: this.custormer.list,
      // 表单的名字
      title: '添加顾客信息',
      // 双向数据绑定表单
      form: {},
      // 是我们绑定的对象 存放数据
      ruleForm: {
        username: '',
        realname: '',
        telephone: '',
        password: '',
        status: ''
      },
      // 控制模态框是否弹出
      dialogFormVisible: false,
      // 表单验证规则
      rules: {
        username: [
          // trigger: 'blur' 失去焦点是验证表单
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        realname: [
          { required: true, message: '请输入姓名', trigger: 'blur' }
        ],
        telephone: [
          { required: true, message: '请输入手机号', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ],
        status: [
          { required: true, message: '请选择状态', trigger: 'change' }
        ]
      },
    };
  },
  created() {
    this.findAllCustormer()
  },
  computed: {
    ...mapState('custormer',['custormer','deleteData'])
  },
  methods: {
    ...mapActions('custormer',['toLoadCustormer','deleteCustermer','saveCategory']),

    // 获取全部顾客信息
    findAllCustormer(){
      let params = {
        page: this.page,
        pageSize: this.pageSize
      }
      this.toLoadCustormer(params).then(r => {
        this.total = this.custormer.total
      })
    },

    handleCurrentChange(val){ 
      this.page = val - 1
      this.findAllCustormer()
    },
    
    // 根据状态查询数据
    toSearch(){
      // 首先配置参数 
      // 查询之前 先给page置0 因为我们可能是在第二页或者其他页查询 这样可能会有问题
      this.page = 0
      let params = {
        page: this.page,
        pageSize: this.pageSize,
        // 拿到输入框中的输入
        status: this.input
      }
      // 我们这里做一个判断 如果input我们什么都不填的时候 它会是一个空字符串 影响查询结果
      if (params.status == '') {
        // 如果status为空字符串 那么我们就查询全部
        // 可以直接在params中删除掉这个属性
        delete params.status
        // 这里我们还是调用toLoadCustormer接口 接口可以根据status来查询数据
        this.toLoadCustormer(params)
        .then(r => {
          this.total = this.custormer.total
        })
      }else{
        // 调用的还是之前的接口 只是参数不一样了
        this.toLoadCustormer(params)
        // 分页我们要根据过滤的数据重新配置
        .then(r => {
          this.total = this.custormer.total
        })
      }
    },
    // 单个删除
    deleteHandler(id){
      // this.$confirm elementui插件 notice messagebox 确认消息
      this.$confirm('此操作将永久删除这条数据, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        // 先去配置删除方法
        this.deleteCustermer(id).then((res)=>{
          // 刷新数据 放在.then里的目的是 等数据删除完毕才会刷新 否则刷新先执行 删除后执行 数据显示会有问题
          this.findAllCustormer()
        })
        this.$message({
          type: 'success',
          message: '删除成功!',
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    // 编辑
    editHandler(row){
      this.title = '编辑信息'
      // 信息赋值
      // 如果我们直接将row赋值给this.form 我们会发现即使没有提交 表单里也会双向数据绑定 
      // 所以我们使用结构赋值先将对象解构 然后用一个新的对象包裹 内容相同 但是内存地址不一样了 所以就不会有之前的那种情况了
      this.form = {...row}
      // 打开模态框
      this.dialogFormVisible = true
    },
    // 新增顾客
    addCustormer(){
      // 表单数据置空
      this.form = {}
      this.dialogFormVisible = true
    },
    // 保存
    toSave(form) {
      // 表单验证
      this.$refs[form].validate((valid) => {
        if (valid) {
          // 调用接口传递表单参数
          this.saveCategory(this.form).then(r => {
        
            let messageInfo = "";
            if (this.form.id) {
              messageInfo = "修改";
            } else {
              messageInfo = "新增";
            }
            this.$notify({
              title: "成功",
              message: messageInfo + "成功",
              type: "success"
            });
            // 请求成功刷新数据 关闭模态框
            this.findAllCustormer();
            this.dialogFormVisible = false
          });
        } else {
          return false
        }
      })
    },

    // 新增和编辑处理完以后 我们处理详情 新建一个详情组件 配置路由
    // 跳转到顾客详情
    toDetails(row){
      // 跳转界面 要将顾客的id传递过去 因为后面界面的数据需要id来获取
      this.$router.push({path:'/custormer/custormerDetails', query:{id: row.id}})
    }
  },
};
</script>
<style scoped>
/* 设置整体样式 */
.custormer {
  width: 99%;
  /* vh:相对于视框的高度：视框高度是100vh */
  min-height: calc(100vh - 70px);
  background-color: #fff;
  padding: 10px;
  overflow: hidden;
}
/* 设置标题样式 */
.custormer_title {
  border-bottom: 1px solid;
  padding-bottom: 10px;
}
/* 设置头部样式 */
.custormer_header {
  margin-top: 10px;
  margin-bottom: 10px;
}
/* 设置输入框样式 .el-input是el-input的默认样式 */
.custormer_header .el-input{
  width: 200px !important;
}
/* 设置表格区域样式 */
.custormer_table {
  max-height: 500px;
  overflow: auto;
  width: 100%;
  margin-bottom: 10px;
}
/* 设置操作span样式 */
.setSpan{
  color: rgb(92, 174, 252);
  cursor: pointer;
}

</style>

