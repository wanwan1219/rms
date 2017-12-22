<template>
<div>
    <div>
        <fcheader></fcheader>
    </div>
    <div>
        <resetpass v-show="reshow" :datashow="reshow" @winHide="parentpass"></resetpass>
    </div>
    <div>
        <second></second>
    </div>
</div>
</template>

<script>
import Vue from "vue"
import Axios from "axios"
import second from "./second"
import resetpass from "./resetpass"
import fcheader from "./fcheader"
export default {
    //注册
    components:{second,resetpass,fcheader},
  data() {
    return {
        reshow:false,
        // disabled:"disabled",
      logoSrc: "../../static/assets/back_logo.png",
    //   headerNav: ["卓新思创", "在线客服", "常见问题", "安全中心", "退出"],
      mainNav: [
        {
          navalist: "用户管理",
          liconlis: [
            { data: "系统人员", icon: "icon icon-user" },
            { data: "学员管理", icon: "icon icon-user" },
            { data: "权限管理", icon: "icon icon-user" }
          ]
        },
        {
          navalist: "课程管理",
          liconlis: [
            { data: "系统人员", icon: "icon icon-user" },
            { data: "学员管理", icon: "icon icon-user" },
            { data: "权限管理", icon: "icon icon-user" }
          ]
        },
        {
          navalist: "统计报表",
          liconlis: [
            { data: "系统人员", icon: "icon icon-user" },
            { data: "学员管理", icon: "icon icon-user" },
            { data: "权限管理", icon: "icon icon-user" }
          ]
        },
        {
          navalist: "其他管理",
          liconlis: [
            { data: "系统人员", icon: "icon icon-user" },
            { data: "学员管理", icon: "icon icon-user" },
            { data: "权限管理", icon: "icon icon-user" }
          ]
        },
        {
          navalist: "数据字典",
          liconlis: [
            { data: "系统人员", icon: "icon icon-user" },
            { data: "学员管理", icon: "icon icon-user" },
            { data: "权限管理", icon: "icon icon-user" }
          ]
        },
        {
          navalist: "系统维护",
          liconlis: [
            { data: "系统人员", icon: "icon icon-user" },
            { data: "学员管理", icon: "icon icon-user" },
            { data: "权限管理", icon: "icon icon-user" }
          ]
        }
      ],
      userImg: "../../static/assets/touxiang.jpg",
      userName: "管理员1",
      showlicon: false
    };
  },
  methods: {
    showliconFun() {
      this.showlicon = !this.showlicon;
    },
    getInfo(){
        var that=this
        Axios({
            url:"/api/Handler/AdminLoginRegHandler?actions=returninfo",
            method:"post",
        }).then(function(result){
            // console.log(result.data)
            that.userName=result.data.success.userName
        })
    },
    exit(){
        var that=this;
        Axios({
            url:"/api/Handler/AdminHandler?actions=quit",
            method:"get",
        }).then(function(result){
            // console.log(result.data)
            if(result.data.success){
                alert(result.data.success)
                // that.location.href="/"
                // that.$router.puah("/")
            }
            
        })
    },
    reshowpass(){
        this.reshow=true
        document.body.setAttribute("style","overflow:hidden")
    },
    parentpass(val){
        this.reshow=val
    }
  },
  mounted(){
      this.getInfo()
  }
};
</script>

<style>

</style>
