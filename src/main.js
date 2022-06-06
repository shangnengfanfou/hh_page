import Vue from 'vue'
import App from './App.vue'
import router from './route/router'
import './assets/style/global.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faWeixin, faAlipay } from '@fortawesome/free-brands-svg-icons'
import { faRetweet, faArrowCircleDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faWeixin, faAlipay)
library.add(faRetweet, faArrowCircleDown)

Vue.config.productionTip = false
Vue.component('font-awesome-icon', FontAwesomeIcon)

document.documentElement.style.fontSize = document.documentElement.clientWidth / 120 + "px";
window.addEventListener(
  "resize",
  function() {
    document.documentElement.style.fontSize =
      document.documentElement.clientWidth / 120 + "px";
  },
  false
);

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
