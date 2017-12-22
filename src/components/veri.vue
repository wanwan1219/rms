<template>
    
        <canvas id="canvas" @click="changeVeri" width="80" height="50"></canvas>
    
</template>

<script>
import Axios from "axios"
export default {
    data(){
        return{
            canvas:"",
            ctx:"",
            width:"",
            height:""
        }
    },
    methods:{
        /*
            需求：
                1.获取元素
                2.绘制绘图环境
                3.绘制矩形
                4.绘制小圆点
                    4.1填充颜色
                    4.2开启路径
                    4.3绘制小圆点 
                    4.4关闭路径
                5.绘制干扰线
                    5.1填充颜色
                    5.2开启路径
                    5.3绘制细线
                    5.4关闭路径
                6.绘制内容
                    6.1填充颜色
                    6.2开启路径
                    6.3绘制文字 font
                    6.4改变样式
                    6.5关闭路径
        */
        drawPic(txt){
            // this.ctx.clearRect(0,0,this.width,this.height)
            this.ctx.fillStyle=this.randomColor(200,250)
            this.ctx.beginPath();
            this.ctx.fillRect(0,0,this.width,this.height);
            //绘制内容
            for(var i=0;i<4;i++){
                //得到后台返回的文字
                var returnText=txt[i]
                this.ctx.fillStyle=this.randomColor(30,100);
                this.ctx.font="bold 30px Arial"
                var x=17*i+10;
                var y=this.randomNum(35,38)
                //定义倾斜角度
                var deg=this.randomNum(-10,10)
                // this.ctx.translate(x,y);
                this.ctx.rotate(deg*Math.PI/180); 
                this.ctx.textBaseline="bottom"
                this.ctx.fillText(returnText,x,y);
                // this.ctx.translate(-x,-y);
                this.ctx.rotate(-deg*Math.PI/180);
                this.ctx.closePath()
            }
            // 绘制小圆点
            for(var i=0;i<50;i++){
                //填充颜色
                this.ctx.fillStyle=this.randomColor(180,250)
                //开始第一笔
                 this.ctx.beginPath();
                //画圆
                this.ctx.arc(this.randomNum(0,this.width),this.randomNum(0,this.height),2,0,Math.PI*2)
                //填充
                this.ctx.fill()
                //闭合
                this.ctx.closePath()
            }
            //绘制干扰线
            for(var i=0;i<10;i++){
                this.ctx.strokeStyle=this.randomColor(180,250)
                this.ctx.beginPath();
                this.ctx.moveTo(this.randomNum(0,this.width),this.randomNum(0,this.height))
                this.ctx.lineTo(this.randomNum(0,this.width),this.randomNum(0,this.height))
                this.ctx.lineWidth=.3
                this.ctx.stroke();
                this.ctx.closePath()
            }
            return;
        },
        //小点的大小 线的粗细 长短
        randomNum(min,max){
            return Math.ceil(Math.random()*(max-min)+min)
        },
        //线条的颜色
        randomColor(min,max){
            var r=this.randomNum(min,max)
            var g=this.randomNum(min,max)
            var b=this.randomNum(min,max)
            return "rgb("+r+","+g+","+b+")"
        },
        changeVeri(){
            this.getVeri()
        },
        getVeri(){
            var that=this
            Axios({
                url:"/api/Handler/AdminLoginRegHandler?actions=veri",
                methods:"get"
            }).then(function(result){
                var veri= result.data.data;
                that.drawPic(veri)
            })
        }
    },
    mounted(){
        this.canvas=document.getElementById("canvas")
        this.ctx=this.canvas.getContext("2d")
        this.width=this.canvas.width
        this.height=this.canvas.height
        this.drawPic("ssdg")
        this.getVeri()
    }
}
</script>

<style>

</style>
