<template>
    <div class="content-warp">
        <Bgcanvas class="bg"></Bgcanvas>
        <div class="con">
            <img :src="src1" alt="">
            <li><span class="icon icon-user iconcol"></span><input type="text" ref="username" placeholder="用户名"></li>
            <li><span class="icon icon-lock iconcol"></span><input type="text" ref="password" placeholder="密码"></li>
            <li><span class="icon icon-lock iconcol"></span><input class="veri" type="text" placeholder="验证码" ref="code"><Veri></Veri></li>
            <button class="forget">忘记密码</button> <button class="load" @click="login">登陆</button>
        </div>
    </div>
</template>

<script>
import Vue from "vue"
import Bgcanvas from "./bgCanvas"
import Veri from "./veri"
import Axios from "axios"
export default {
    data(){
        return {
            src1:"../../static/assets/back_logo.png",
            veriUrl:"../../static/assets/validatecode.png"
        }
    },
    components:{Bgcanvas,Veri},
    methods:{
        login(){
            var that=this
            Axios({
                url:"/api/Handler/AdminLoginRegHandler?actions=checkveri",
                method:"get",
                params:{
                    //ref 获取输入框的内容
                    veri:this.$refs.code.value
                }
            }).then(function(result){
                if(result.data.success){
                    Axios({
                        url:"/api/Handler/AdminLoginRegHandler?actions=login",
                        method:"post",
                        data:{
                            userName:that.$refs.username.value,
                            password:that.$refs.password.value
                        }
                    }).then(function(result){
                        if(result.data.success){
                            // window.location.href="/#/nav"
                            that.$router.push("/nav")
                        }
                    })
                }
            })
        }
    }
}
</script>

<style>
    *{
        margin: 0;
        padding:0;
    }
    li{
        list-style: none;
    }
    body{
        background: #0f1953;
    }
    .bg{
        position: fixed;
        left: 0;
        top: 0;
        z-index: 1;
    }
    .content-warp{
        width: 600px;
        margin: 100px auto 0;
        text-align: center;
    }
    .content-warp li{
        line-height: 50px;
    }
    .content-warp input{
        width: 300px;
        height: 50px;
        padding-left: 20px;
        margin: 10px;
        background: #0f1953;
        outline: none;
        border: 1px solid #ccc;
        color: white;
        vertical-align: middle
    }
    .content-warp li .veri{
        width: 210px;
    }
    .content-warp li img{
        vertical-align: middle;
    }
    ::-webkit-input-placeholder{
        color: white
    }
    .forget,.load{
        margin-top: 30px;
        width: 110px;
        height: 30px;
        background: #3399cc;
        font: 15px/30px "";
        text-align: center;
        color: white;
        border: none
    }
    .load{
        margin-left: 200px;
        background: #66cc66
    }
    .con{
        position: relative;
        z-index: 888;
    }
    .iconcol{
        color: #ffffff
    }
    canvas{
        display: inline-block;
        vertical-align: middle;
    }
</style>
