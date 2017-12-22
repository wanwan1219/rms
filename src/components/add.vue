<template>
  <div :style="win">
    <div class="passBox">
      <div class="passHeader">
        <h3>添加</h3>
        <span class="qx" @click="cancel">X&nbsp;</span>
      </div>
      <div class="passCont">
        <p>
          <span>用户名:</span>
          <input type="text" ref="username">
        </p>
        <p>
          <span>姓名：</span>
          <input type="text" ref="truename">
        </p>
        <p>
          <span>手机号：</span>
          <input type="text" ref="pho">
        </p>
        <p>
          <span>权限选择：</span>
          <select name="" id="" ref="power">
              <option value="0">系统管理员</option>
              <option value="1">课程管理员</option>
          </select>
        </p>
        <p>
          <button @click="sure">确定</button>
          <button @click="cancel">取消</button>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
// import Vue from "vue";
// import Axios from "axios";
export default {
  props: ["addshow"],
  data() {
    return {
      win: {
        width: window.innerWidth + "px",
        height: window.innerHeight + "px",
        background: "rgba(255,255,255,0.6)",
        position: "absolute",
        zIndex: 999,
        top: 0,
        left: 0
      },
      a: this.addshow
    };
  },
  methods: {
    cancel() {
      console.log(this.a);
      this.$emit("winhide", this.a);
      document.body.setAttribute("style", "overflow:");
    },
    sure() {
     this.$http({
       url:"/api/Handler/AdminLoginRegHandler?actions=add",
       method:"post",
       data:{
         userName:this.$refs.username.value,
         truename:this.$refs.truename.value,
         password:"123",
         phone:this.$refs.pho.value,
         powerCode:this.$refs.power.value
       }
     }).then(result=>{
       alert(result.data)
       this.$emit("winhide", this.a);
       document.body.setAttribute("style", "overflow:");
     })
        
     
    }
  }
};
</script>

<style scoped>
/* <style scoped>  代表只在当前模板使用此样式 */

.passBox {
  width: 400px;
  height: 260px;
  background: white;
  margin: 200px auto;
  border: 5px solid blue;
}

.passHeader {
  height: 30px;
  background: blue;
  font-size: 20px;
  color: white;
}

.passHeader span {
  float: right;
  margin-top: -20px;
}

.passCont {
  padding: 30px 23px;
}

.passCont p {
  line-height: 40px;
}

.passCont p span {
  text-align: right;
  display: inline-block;
  width: 100px;
}

.passCont p input {
  line-height: 20px;
  width: 190px;
}

.passCont p button {
  width: 100px;
  height: 35px;
  border: none;
  margin: 30px;
  outline: none;
}

.qx{
    cursor: pointer;
}
</style>
