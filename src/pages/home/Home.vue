<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
    <home-recommend></home-recommend>
    <home-weekend></home-weekend>
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
    methods: {
      getHomeInfo (){
        axios.get('/api/index.json')
          .then(this.getHomeSucc)
      },
      getHomeSucc(res) {
        console.log(res)
      }
    },
    mounted (){
      this.getHomeInfo()
    }
}
</script>

<style>
</style>