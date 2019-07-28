import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/styles/reset.css';
import './assets/styles/border.css';
import fastClick from 'fastclick';
import './assets/styles/iconfont.css';
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'


Vue.config.productionTip = false;
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)//轮播图插件
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
