<template>
    <div>
        <div class="header_wrap">
        <img class="logo_wrap" :src="logoSrc" alt="">
        <ul class="header_nav clear">
            <li><i class="icon icon-user"></i><a href="">卓新思创</a></li>
            <li><i class="icon icon-user"></i><a href="">在线客服</a></li>
            <li><i class="icon icon-user"></i><a href="">常见问题</a></li>
            <li @click="reshowpass"><i class="icon icon-user"></i><a href="javascript:;">安全中心</a>
                
            </li>
            <li @click="exit"><i class="icon icon-user"></i><a href="">退出</a></li>
            <li>{{userName}}</li>
            <li><img :src="userImg" alt=""></li>
        </ul>
    </div>
    <div class="nav_wrap" >
        <ul class="main_nav">
            <li   ref = "userParentBox"  @mouseover="showAdmin" @mouseout="hideAdmin"><a><i class="icon icon-user"></i>用户管理</a></li>
            <li   ref = "curseParentBox"  @mouseover="showCourse" @mouseout="hideCourse"><a><i class="icon icon-book"></i>课程管理</a></li>
        </ul>
        <div  class="nav_content_wrap">
            <div class="nav_moveout" ></div>
            <div ref="listId" class="nav_content" >
                <div ref="userListId"   @mouseover="showAdmin" @mouseout="hideAdmin" class="one_nav_content_wrap" v-show="adminList">
                    <ul class="one_nav_content">
                        <li  @click="goAdmin"><a><i class="icon icon-user"></i>系统人员</a></li>
                        <li ><a><i class="icon icon-group"></i>学员管理</a></li>
                    </ul>
                </div>

                <div ref="courseListId" class="one_nav_content_wrap" v-show="courseList">
                    <ul class="one_nav_content">
                        <li ><a><i class="icon icon-th"></i>课程列表</a></li>
                        <li ><a><i class="icon_add icon_plus_add"></i>添加课程</a></li>
                        <li ><a><i class="icon icon-facetime-video"></i>视频管理</a></li>
                    </ul>
                </div>

            </div>
        </div>
    </div>
    <div>
        <resetpass v-show="reshow" :datashow="reshow" @winHide="parentpass"></resetpass>
    </div>
    </div>
</template>

<script>
import Vue from "vue";
import Axios from "axios";
import resetpass from "./resetpass";
export default {
  components: { resetpass },
  data() {
    return {
      reshow: false,
      // disabled:"disabled",
      logoSrc: "../../static/assets/back_logo.png",
      //   headerNav: ["卓新思创", "在线客服", "常见问题", "安全中心", "退出"],
      userImg: "../../static/assets/touxiang.jpg",
      userName: "管理员1",
      showlicon: false,
      userName: "",
      restShow: false,
      adminList: false,
      courseList: false
    };
  },
  methods: {
    showliconFun() {
      this.showlicon = !this.showlicon;
    },
    getInfo() {
      var that = this;
      Axios({
        url: "/api/Handler/AdminLoginRegHandler?actions=returninfo",
        method: "post"
      }).then(function(result) {
        // console.log(result.data)
        that.userName = result.data.success.userName;
      });
    },
    exit() {
      var that = this;
      Axios({
        url: "/api/Handler/AdminHandler?actions=quit",
        method: "get"
      }).then(function(result) {
        // console.log(result.data)
        if (result.data.success) {
          alert(result.data.success);
          // that.location.href="/"
          // that.$router.puah("/")
        }
      });
    },
    ParentHide(val) {
      this.restShow = val;
    },
    showAdmin() {
      this.adminList = true;
    },
    hideAdmin() {
      this.adminList = false;
    },
    showCourse() {},
    hideCourse() {},
    goAdmin() {
      this.$router.push("/admin");
    },
    reshowpass() {
      this.reshow = true;
      document.body.setAttribute("style", "overflow:hidden");
    },
    parentpass(val) {
      this.reshow = val;
    }
  },
  mounted() {
    this.getInfo();
  }
};
</script>

<style>


.nav_wrap {
  height: 50px;
  /* background:url(../static/assets/images/white_opacity_bg.png); */
}
/*导航*/
.main_nav {
  width: 1100px;
  margin: 0 auto;
  color: #fff;
  line-height: 50px;
  height: 50px;
  font-size: 14px;
}
.main_nav li {
  float: left;
  padding: 0 30px;
  position: relative;
  cursor: pointer;
}
.main_nav i {
  margin-right: 8px;
}
.main_nav li a {
  color: #fff;
  position: relative;
}
.main_nav li a .icon {
  top: 0;
  border: none;
  left: -20px;
}
.main_nav li a::before,
.main_nav li a::after {
  content: "";
  position: absolute;
  width: 8px;
  height: 8px;
  opacity: 0;
  border: 2px solid #fff;
  -webkit-transition: -webkit-transform 0.3s, opacity 0.3s;
  transition: transform 0.3s, opacity 0.1s;
  -webkit-transition-timing-function: cubic-bezier(0.17, 0.67, 0.05, 1.29);
  transition-timing-function: cubic-bezier(0.17, 0.67, 0.05, 1.29);
}
.main_nav li a::before {
  top: -14px;
  left: -50px;
  border-width: 2px 0 0 2px;
  -webkit-transform: translate3d(23px, 10px, 0);
  transform: translate3d(23px, 10px, 0);
}

.main_nav li a::after {
  right: -28px;
  bottom: -16px;
  border-width: 0 2px 2px 0;
  -webkit-transform: translate3d(-23px, -10px, 0);
  transform: translate3d(-23px, -10px, 0);
}

.main_nav .now a::after {
  opacity: 1;
  opacity: 0\0; /* IE8 或 IE9*/
  -webkit-transform: translate3d(-15px, -5px, 0);
  transform: translate3d(-15px, -5px, 0);
}
.icon_add {
  font-family: FontAwesome;
  font-weight: normal;
  font-style: normal;
  text-decoration: inherit;
  display: inline;
  position: absolute;
  top: 2px;
  left: 0;
  width: auto;
  height: 12px !important;
  border-left: 4px solid;
  line-height: normal;
  vertical-align: baseline;
  background-image: none !important;
  background-position: 0% 0%;
  background-repeat: repeat;
}
.icon_plus_add:before {
  content: " ";
  position: absolute;
  width: 12px;
  border-top: 4px solid;
  left: -8px;
  top: 4px !important;
}
.main_nav .now {
  _background-color: #263066; /*only for IE6*/
  +background-color: #263066; /*only for IE7*/
  background-color: #263066\0; /* IE8 或 IE9*/
}
.main_nav .now a::before {
  opacity: 1;
  opacity: 0\0; /* IE8 或 IE9*/
  -webkit-transform: translate3d(15px, 5px, 0);
  transform: translate3d(15px, 5px, 0);
}
.nav_content_wrap {
  position: relative;
  /* height: 0; */
  /* background:url(../static/assets/images/black_opacity_bg.png); */
  /* z-index: 999; */
  display: block;
}
.nav_content_wrap_now {
  opacity: 1;
  position: relative;
  min-height: 400px;
  /* background:url(../static/assets/images/black_opacity_bg.png); */
  z-index: 999;
}
.nav_moveout {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 150px;
  display: none;
}
.nav_content {
  /* height: 50px !important; */
}

.one_nav_content_wrap {
  opacity: 1;
  margin: 0 auto;
  background: #fff;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  /* display: none; */
}
.one_nav_content_wrap li a {
  position: relative;
  padding-left: 20px;
}
.one_nav_content_wrap li {
  color: #000;
}
.one_nav_content_wrap li:hover {
  color: #fff;
}
.one_nav_content_wrap li a .icon {
  top: 0;
  border: none;
  left: -15px;
}
.now.one_nav_content_wrap {
  border-bottom: 1px solid #fff;
}
.one_nav_content {
  overflow: hidden;
  padding: 44px 0 36px 0;
  width: 1140px;
  margin: 0 auto;
}
.one_nav_content li {
  float: left;
  width: 167px;
  height: 40px;
  line-height: 40px;
  padding: 0 40px;
  position: relative;
  cursor: pointer;
  border: 1px solid #ededed;
  color: #69696d;
  margin: 0 34px 20px 0;
  font-size: 14px;
}
.one_nav_content i {
  margin-right: 8px;
  color: #4c5c9c;
}
.one_nav_content li:hover {
  background: #4c5c9c;
  transition: all 0.5s ease 0s;
}
.one_nav_content li:hover,
.one_nav_content li:hover i {
  color: #fff;
  transition: all 0.5s ease 0s;
}

</style>
