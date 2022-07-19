import Vue from 'vue'
import App from './App.vue'
import router from './route/router'
import './assets/style/global.css'
import 'font-awesome/css/font-awesome.css'
import Carousel3d from 'vue-carousel-3d'
import VueMarkdownEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';

import Prism from 'prismjs';

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

VueMarkdownEditor.use(vuepressTheme, {
  Prism,
});

Vue.use(VueMarkdownEditor);
Vue.use(Carousel3d)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
