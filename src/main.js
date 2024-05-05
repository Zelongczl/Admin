import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import axios from 'axios'
import router from './router'
// import "./style.scss";

Vue.config.productionTip = false
Vue.use(ElementUI);
axios.defaults.baseURL = "http://localhost:9090/";
axios.defaults.withCredentials = true;
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

var docEl = document.documentElement;
function setRemUnit() {
  var rem = docEl.clientWidth / 19.2; // 可根据不同电脑分辨率进行手动修改（如1920*1080 为19.2
  docEl.style.fontSize = rem + 'px'
}

setRemUnit()

window.addEventListener('resize', setRemUnit)
window.addEventListener('pageshow', function (e) {
  if (e.persisted) {
    setRemUnit()
  }
})
