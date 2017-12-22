// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
//import App from './'
import router from './router'
import Element from "element-ui"
import Axios from "axios"
import 'element-ui/lib/theme-chalk/index.css'
Vue.config.productionTip = false
Vue.use(Element)
/*允许跨域访问请求 
Axios.defaults.withCredentials=true;*/
//原型解构 在页面中可以不用在引用 直接用this.$http来代表Axios
Vue.prototype.$http=Axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  //template: '<App/>',
  //components: { App }
})
