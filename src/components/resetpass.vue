<template>
  <div :style="win">
    <div class="passBox">
      <div class="passHeader">
        <h3>修改密码</h3>
        <span class="qx" @click="cancel">X&nbsp;</span>
      </div>
      <div class="passCont">
        <p>
          <span>当前密码:</span>
          <input type="text" ref="oldpass">
        </p>
        <p>
          <span>新密码:</span>
          <input type="text" ref="newpass">
        </p>
        <p>
          <span>确认密码:</span>
          <input type="text" ref="surepass">
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
  props: ["datashow"],
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
      a: this.datashow
    };
  },
  methods: {
    cancel() {
      console.log(this.a);
      this.$emit("winHide", this.a);
      document.body.setAttribute("style", "overflow:");
    },
    sure() {
      if (this.$refs.newpass.value!=""&&this.$refs.newpass.value == this.$refs.surepass.value) {
          var that=this
        this.$http({
          url: "/api/Handler/AdminLoginRegHandler?actions=updatepass",
          method: "post",
          data: {
            oldpassword:that.$refs.oldpass.value,
            newpassword:that.$refs.newpass.value,
          }
        }).then(function(result){
            if(result.data.success){
                alert(result.data.success)
                window.location.href="/"
            }else{
                alert(result.data.err)
            }
            
        });
        
      }
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
