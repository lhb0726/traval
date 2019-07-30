<template>
  <div>
    <home-header ></home-header> 
    <!-- 父组件通过属性的形式给子组件传值 -->
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconList"></home-icons>
    <home-recommend :list="recommendList"></home-recommend>
    <home-weekend :list="weekendList"></home-weekend>
  </div>

</template>
<script>
import homeHeader from './components/Header'
import homeSwiper from './components/Swiper'
import homeIcons from './components/Icons'
import homeRecommend from './components/Recommend'
import homeWeekend from './components/Weekend'
import axios from 'axios'

export default {
    name:'home',
    components : {
      homeHeader,
      homeSwiper,
      homeIcons,
      homeRecommend,
      homeWeekend,
    },
    data (){
      return {
        swiperList : [],
        iconList : [],
        recommendList : [],
        weekendList: [],
      }
    },
    methods: {
      getHomeInfo (){
        axios.get('/api/index.json')
          .then(this.getHomeSucc)
      },
      getHomeSucc(res) {
        res=res.data;
        if (res.ret&&res.data) {
          this.swiperList=res.data.swiperList
          this.iconList=res.data.iconList
          this.recommendList=res.data.recommendList
          this.weekendList=res.data.weekendList
        }
        
      }
    },
    mounted (){
      this.getHomeInfo()
    }
}
</script>

<style>
</style>