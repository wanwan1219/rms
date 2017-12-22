<template>
  <div>
        <div>
            <!-- <fcheader></fcheader> -->
        </div>
        <div class="index_body">
             <!-- 快捷操作开始 -->
              <div class="quick_links">
                <div class="quicklinks_one" v-on:click="courseList()">
                  <h1>课程列表</h1>
                  <h2>Course List</h2>
                  <div class="icon_wrap"><i class="icon icon-th-large"></i></div>
                  <p>查询现有课程，添加课程，管理课程</p>
                </div>
                <div class="quicklinks_one" onclick="window.location = '/courseEditList'">
                  <h1>课程添加</h1>
                  <h2>Course Add</h2>
                  <div class="icon_wrap"><i class="icon icon-plus"></i></div>
                  <p>添加、修改课程信息，为课程添加视频课件……</p>
                </div>
                <div class="quicklinks_one mouse_on" v-on:click="courseList()">
                  <h1>课程置顶</h1>
                  <h2>Course Up</h2>
                  <div class="icon_wrap"><i class="icon icon-arrow-up"></i></div>
                  <p>课程置顶，显示在移动端banner上</p>
                </div>
                <div class="quicklinks_one" onclick="window.location = '/vedioList'">
                  <h1>视频管理</h1>
                  <h2>Video Manage</h2>
                  <div class="icon_wrap"><i class="icon icon-facetime-video"></i></div>
                  <p>管理视频，上传、删除</p>
                </div>
                <div class="quicklinks_one mouse_on"  onclick="window.location = '/adminListCom'">
                  <h1>用户管理</h1>
                  <h2>User Manage</h2>
                  <div class="icon_wrap"><i class="icon icon-user"></i></div>
                  <p>管理系统用户</p>
                </div>
                <div class="quicklinks_one mouse_on"  onclick="window.location = '/studentList'">
                  <h1>学员管理</h1>
                  <h2>Student Manage</h2>
                  <div class="icon_wrap"><i class="icon icon-file"></i></div>
                  <p>管理学员</p>
                </div>
              </div>
               <!-- 图表开始 -->
                <div class="charts_wrap">
                  <div style="background:#fff; padding-top:20px; height:340px;">
                    <div style="width:400px; height:370px;" ref="chart01"></div>
                  </div>
                  <div style="background:#fff; padding-top:20px; height:340px;">
                    <div style="width:530px; height:370px;" ref="chart02"></div>
                  </div>
                  <div style="background:#fff; padding-top:20px; height:340px;">
                    <div style="width:580px; height:370px;" ref="chart03"></div>
                  </div>
                </div>
        </div>
  </div>
</template>
<script type="text/javascript">
// import fcheader from './fcheader.vue';
import echarts from "echarts"; //不是vue插件
export default {
  data() {
    return {
      input_default: {}
    };
  },
  // components:{fcheader},
  mounted: function() {
    document.body.setAttribute(
      "style",
      "background:url(./src/assets/images/body_bg.jpg) !important;min-width:1100px;font-family:'宋体';margin:0;padding:0"
    );

    if (window.offsetWidth <= 1366) {
      this.$refs.chart01.style.width = "40%";
      this.$refs.chart02.style.width = "40%";
      this.$refs.chart03.style.width = "90%";
    }
    //初始化图表
    var mychart01 = echarts.init(this.$refs.chart01);
    mychart01.setOption({
      title: {
        text: "学习人数比例",
        subtext: "  ",
        x: "center",
        textStyle: {
          color: "#008ACD"
        }
      },
      //工具提示框
      tooltip: {
        //数据展示
        formatter: "{a} <br/>{b} : {c}%"
      },
      //工具箱
      toolbox: {
        show: true,
        feature: {
          mark: { show: true },
          restore: { show: true },
          saveAsImage: { show: true }
        }
      },
      //数据
      series: [
        {
          name: "学习人数比例",
          type: "gauge",
          axisLine: {
            show: true,
            lineStyle: {
              color: [[0.2, "#2EC7C9"], [0.8, "#5AB1EF"], [1, "#D87A80"]],
              width: 10
            }
          },
          axisTick: {
            show: true,

            length: 8,
            lineStyle: {
              color: [[0.2, "#2EC7C9"], [0.8, "#5AB1EF"], [1, "#D87A80"]],
              width: 1,
              type: "solid"
            }
          },
          detail: {
            formatter: "{value}%"
          },
          data: [{ value: 80, name: "比例" }]
        }
      ]
    });

    var mychart02 = echarts.init(this.$refs.chart02);
    mychart02.setOption({
      title: {
        text: "浏览器占比变化",
        subtext: "纯属虚构",
        x: "right",
        y: "bottom"
      },
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      legend: {
        orient: "vertical",
        x: "left",
        style:{marginTop:-100},
        data: ["Chrome", "Firefox", "Safari", "IE9+", "IE8-"]
      },
      toolbox: {
        show: true,
        feature: {
          mark: { show: true },
          dataView: { show: true, readOnly: false },
          restore: { show: true },
          saveAsImage: { show: true }
        }
      },
      calculable: false,
      series: (function() {
        var series = [];
        for (var i = 0; i < 30; i++) {
          series.push({
            name: "浏览器（数据纯属虚构）",
            type: "pie",
            itemStyle: {
              normal: {
                label: { show: i > 28 },
                labelLine: { show: i > 28, length: 20 }
              }
            },
            radius: [i * 4 + 40, i * 4 + 43],
            data: [
              { value: i * 128 + 80, name: "Chrome" },
              { value: i * 64 + 160, name: "Firefox" },
              { value: i * 32 + 320, name: "Safari" },
              { value: i * 16 + 640, name: "IE9+" },
              { value: i * 8 + 1280, name: "IE8-" }
            ]
          });
        }
        series[0].markPoint = {
          symbol: "emptyCircle",
          symbolSize: series[0].radius[0],
          effect: {
            show: true,
            scaleSize: 12,
            color: "rgba(250,225,50,0.8)",
            shadowBlur: 10,
            period: 30
          },
          data: [{ x: "50%", y: "50%" }]
        };
        return series;
      })()
    });

    var mychart03 = echarts.init(this.$refs.chart03);
    mychart03.setOption({
      title: {
        x: "center",
        text: "时间、课程、新增课程输",
        subtext: " ",
        textStyle: {
          color: "#008ACD"
        }
      },
      tooltip: {
        trigger: "item"
      },
      calculable: true,
      grid: {
        borderWidth: 0,
        y: 80,
        y2: 60
      },
      xAxis: [
        {
          type: "category",
          show: false,
          data: ["学习时间", "总课程数", "新增课程数"]
        }
      ],
      yAxis: [
        {
          type: "value",
          show: false
        }
      ],
      series: [
        {
          name: "",
          type: "bar",
          itemStyle: {
            normal: {
              color: function(params) {
                // build a color map as your need.
                var colorList = ["#C1232B", "#B5C334", "#F0805A"];
                return colorList[params.dataIndex];
              },

              barBorderRadius: 5,
              label: {
                show: true,
                position: "top",
                formatter: "{b}\n{c}"
              }
            }
          },
          data: [12, 21, 10]
        }
      ]
    });
  },
  methods: {
    courseList: function() {
      //55
      window.location = "/courseList";
    }
  }
};
</script>

<style>
.index_body {
  background: url(../assets/images/index_body_bg.jpg);
  padding-top: 65px;
  color: #fff;
  min-width: 1100px;
}
.quick_links {
  overflow: hidden;
}
.quicklinks_one {
  width: 12%;
  height: 202px;
  background: url(../assets/images/white_opacity_bg.png);
  position: relative;
  text-align: center;
  cursor: pointer;
  float: left;
  margin-left: 4%;
  margin-bottom: 54px;
}
.quicklinks_one h1 {
  font-size: 24px;
  font-family: "方正大标宋", "宋体";
  padding-top: 38px;
}
.quicklinks_one h2 {
  font-size: 12px;
  font-family: Arial, Helvetica, sans-serif;
  padding-top: 12px;
  font-weight: normal;
}
.quicklinks_one p {
  font-size: 12px;
  padding: 23px 22px 0;
  display: none;
  line-height: 21px;
}
.quicklinks_one .icon_wrap {
  position: absolute;
  top: 118px;
  left: 0;
  width: 100%;
}
.quicklinks_one i {
  font-size: 40px;
}
.quicklinks_one i {
  border: none;
  height: 20px;
}
.quicklinks_one .icon-plus {
  border: 4px solid #fff;
  border-radius: 2px;
}
.quicklinks_one .icon::before {
  position: absolute;
  left: -25px;
  top: -10px;
}
.quicklinks_one .icon-plus:before {
  width: 20px;
  border: 4px solid #fff;
  border-radius: 2px;
  left: -13px;
  top: 5px;
}

.quicklinks_one:hover {
  background-color: #27a9e3;
  transition: all 0.5s ease 0s;
}
.quicklinks_one:hover .icon_wrap {
  top: 22px;
  transition: all 0.5s ease 0s;
}
.quicklinks_one:hover h1 {
  padding-top: 78px;
  transition: all 0.5s ease 0s;
}
.quicklinks_one:hover h2 {
  display: none;
  transition: all 0.5s ease 0s;
}
.quicklinks_one:hover p {
  display: block;
  transition: all 0.5s ease 0s;
}
.quicklinks_one.disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/*图表*/
.charts_wrap {
  margin-left: 4%;
  margin-right: 4%;
  background: url(../assets/images/white_opacity_bg.png);
  padding-top: 50px;
  overflow: hidden;
}
.charts_wrap > div {
  float: left;
  margin-left: 4%;
  overflow: hidden;
  margin-bottom: 50px;
}
.quicklinks_one .icon_wrap {
  left: 120px;
}
i {
  display: inline-block;
}
</style>
