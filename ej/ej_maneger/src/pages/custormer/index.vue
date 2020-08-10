<template>
  <!-- 顾客管理 -->
  <div class="custormer">
    <!-- 顾客管理title -->
    <div class="custormer_title">顾客管理</div>

    <!-- 头部按钮区域 -->
    <div class="custormer_header">
      <!-- 添加按钮 -->
      <el-button size="small" type="primary" @click="addCustormer">添加</el-button>
      <!-- 搜索框 然后去data中定义input 双向数据绑定 然后设置样式 -->
      <el-input size="small" v-model="input" placeholder="请输入状态"></el-input>
      <!-- 查询按钮 -->
      <el-button size="small" type="primary" @click="toSearch">查询</el-button>
    </div>


    <!-- 表格区域 -->
    <div class="custormer_table">
      <!-- 去组件库中找一个表格组件放进来 把数据也拷贝进来-->
      <!-- el-table 加一个size="small" 属性 大家可以根据自己的样式 可加可不加-->
      <!-- 根据原型图 修改label名称 传入对应的数据 -->
      <!-- 拿到数据以后把绑定数组换成我们请求后拿到的数组 因为state的辅助函数放在计算属性中声明 所以我们可以直接把custormer当做计算属性来使用 去看下数据接口 custormer里的list是顾客信息 -->
      <!-- 设置完数据 把分页处理了 -->
      <el-table :data="custormer.list" style="width: 100%" size="small">
        <!-- 给prop赋值的时候 先去在data中声明一个数组 来接收辅助函数custormer 然后根据字段名进行赋值 -->
        <!-- 编号 -->
        <el-table-column prop="id" label="编号" align="center" width="180"></el-table-column>
        <!-- 姓名 -->
        <el-table-column prop="realname" label="姓名" align="center" width="180"></el-table-column>
        <!-- 手机号 -->
        <el-table-column prop="telephone" label="手机号" align="center"></el-table-column>
        <!-- 状态 -->
        <el-table-column prop="status" label="状态" align="center"></el-table-column>
        <!-- 操作 -->
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
      <!-- 去组件库中找一个分页插件 然后给其添加一些属性 根据组件的属性来配置-->
      <!-- background，@current-change, 动态绑定page-size(在data中添加pageSize属性)，layout中添加一个total 显示总页数 最后total也动态绑定一个total属性(data中给一个total属性)，再去methods中实现handleCurrentChange方法 页数改变时会触发的事件-->
      <el-pagination background @current-change="handleCurrentChange" :page-size="pageSize" layout="total,prev, pager, next" :total="total"></el-pagination>
    </div>
    <!-- 配置完分页之后 就可以去请求数据进行显示了 取到methods中 获取全部顾客信息 -->

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

// 从Vuex导入辅助函数 目前 我们这里需要调用Actions中的方法 那么我们就导入mapActions 那么导入以后怎么使用呢？
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
      // 表格模拟数据 用完删掉了
      
    };
  },
  created() {
    // 页面加载默认数据
    this.findAllCustormer()
  },
  computed: {
    // 我们刚刚使用了辅助函数mapActions 现在我们来使用mapState
    // 使用方法和mapAction一样 只不过后面的数组中 填的是state中定义的属性 这样 我们就可以直接使用它了
    // 设置完这个以后 我们去设置一下分页的总页数
    ...mapState('custormer',['custormer','deleteData'])
  },
  methods: {
    // 使用辅助函数
    // mapActions 使用方法 ...mapActions('命名空间',['actions中的方法'])
    // 第一个参数 为命名空间 也就是我们设置namespaced为true的原因 当我们从custormer中导出使用一些东西时 命名空间会限制辅助函数 只在当前custormer的Vuex中来使用对应的方法 就算其他模块有重名 也不会去调用
    // 第二个参数 直接将我们在actios中定义的方法名传递过来 这样 通过辅助函数 我们就不需要再使用$store.dispatch去调用actions中的方法了 直接使用即可 this.toLoadCustormer('要传递的参数')
    ...mapActions('custormer',['toLoadCustormer','deleteCustermer','saveCategory']),

    // 获取全部顾客信息
    findAllCustormer(){
      // 我们之前 都是在这里直接进行数据请求 但是现在 我们在Vuex中来处理 在store文件夹下新建custormer文件夹 在里面新建文件index.js 然后去store的根index.js文件中进行注册 
      // 我们来学习一种新的方式来调用Vuex中的方法或属性 -- 辅助函数 先导入辅助函数

      // 使用辅助函数执行actions中的方法 那我们现在看一下 这个接口需要传递哪些参数 pageSize我们已经定义了 再去定义一个page 默认值为0
      // 定一个参数对象 用来传递参数
      let params = {
        page: this.page,
        pageSize: this.pageSize
      }
      
      this.toLoadCustormer(params)
      // 设置完state的辅助函数后 再来设置总数据的显示 total
      .then(r => {
        // 因为state中的custormer经过请求后会发生更新 所以我们将数据中的total进行匹配传给total
        this.total = this.custormer.total
      })
      // 配置完这个 就开始修改界面的数据

      // 因为我们获取顾客信息 需要自执行 那么我们去created函数中自执行
      // 执行完毕后 去Vuex中继续处理
    },

    // 点击分页 页数改变时会触发的事件  val为当前显示的页码
    handleCurrentChange(val){
      // 这里我们要先对页数 -1 因为我们传递参数的时候 page是从零开始 所以我们要减去1 
      this.page = val - 1
      // 直接再次调用获取全部顾客信息 因为page 声明在data中 是一个响应式的数据 所以我们直接调用findAllCustormer() 里面的请求参数也会对应的进行改变
      this.findAllCustormer()
      
      // 分页设置完毕后 去设置头部
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

