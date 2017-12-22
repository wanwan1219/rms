<template>
    <div>
        <fcheader></fcheader>
        <div class="wrapBread">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>活动管理</el-breadcrumb-item>
                <el-breadcrumb-item>活动列表</el-breadcrumb-item>
                <el-breadcrumb-item>活动详情</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div>
            <el-input placeholder="请输入内容" v-model="input"></el-input>
            <el-button type="primary" round @click="search">查询</el-button>
            <el-button type="primary" round  @click="addwin">添加</el-button>
        </div>
        <add v-show="showadd" :addshow="showadd" @winhide="winhi"></add>
        <div>
            <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="userName"
        label="用户名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="truename"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="power"
        label="后台权限">
      </el-table-column>
      <el-table-column
        prop="phone"
        label="手机号">
      </el-table-column>
      <el-table-column
        prop="creatAt"
        label="创建日期">
      </el-table-column>
      <el-table-column
        prop="tokenId"
        label="操作">
        <template slot-scope="scope">
        <el-button type="text" size="small">删除</el-button>
        <el-button type="text" size="small">编辑</el-button>
      </template>
      </el-table-column>
    </el-table>
        </div>
        <div class="block">
  <el-pagination
    layout="prev, pager, next"
    :total="count" @current-change="page">
  </el-pagination>
</div>
    </div>
</template>

<script>
import fcheader from "./fcheader";
import add from "./add";
export default {
  components: { fcheader,add },
  data(){
      return {
          tableData: [],
        showadd:false,
        pageStart:1,
        input:"",
        count:0
      }
  },
  methods:{
      addwin(){
          this.showadd=true;
          document.body.setAttribute("style", "overflow:hidden");
      },
      winhi(val){
          this.showadd=val
      },
      showAdminList(){
          var that=this
          this.$http({
              url:"/api/Handler/AdminLoginRegHandler?actions=show",
              method:"get",
              params:{
                  pageStart:this.pageStart,
                  searchText:this.input
              }
          }).then(function(result){
              if(result.data.success){
                  console.log(result)
                  that.tableData=result.data.data.list
                  that.count=Math.ceil((result.data.data.count)/3)*10
              }else{
                  that.tableData=[]
              }
          })
      },
      page(val){
          console.log(val)
          this.pageStart=val
          this.showAdminList()
      },
      search(){
          this.showAdminList()
      }
  },
  mounted(){
      this.showAdminList()
  }
};
</script>

<style>
    .wrapBread{
        margin: 20px;
        color: white;
    }
    .el-input{
        width: 900px;
        display: inline-block;
    }
    .el-input input{
        width: 900px;
    }
    .el-button--primary:first-of-type{
        margin-right: 800px;
    }
</style>
