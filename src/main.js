import Vue from 'vue'
import App from './App.vue'
import router from './route/router'
import './assets/style/global.css'
import 'font-awesome/css/font-awesome.css'
import Carousel3d from 'vue-carousel-3d'

Vue.config.productionTip = false

document.documentElement.style.fontSize = document.documentElement.clientWidth / 120 + "px";
window.addEventListener(
  "resize",
  function() {
    document.documentElement.style.fontSize =
      document.documentElement.clientWidth / 120 + "px";
  },
  false
);

Vue.use(Carousel3d)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
