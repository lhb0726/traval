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
import {mapState} from 'vuex'
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
        lastCity: '',
        swiperList : [],
        iconList : [],
        recommendList : [],
        weekendList: [],
      }
    },
    computed: {
      ...mapState({
        currentCity : 'city'
      })
    },
    methods: {
      getHomeInfo (){
        axios.get('/api/index.json?city='+this.currentCity)
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
      this.lastCity=this.currentCity
      this.getHomeInfo()
    },
    activeted(){
      if(this.lastCity !==this.currentCity){
        this.getHomeInfo()
        this.lastCity=this.currentCity
      }
    }
}
</script>

<style>
</style>