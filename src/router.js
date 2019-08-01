import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/home/Home.vue'; 
import City from '@/pages/city/City.vue'
import Detail from '@/pages/detail/Detail.vue'


Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },{
      path: '/city',
      name: 'city',
      component: City,
    },,{
      path: '/detail/:id',
      name: 'detail',
      component: Detail,
    }
  ],
  scrollBehavior(to,from,savedPosition) {
    return {x:0, y:0}
  }
});
