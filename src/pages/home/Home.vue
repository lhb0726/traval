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

export default {
    name:'home',
    components : {
      homeHeader,
      homeSwiper,
      homeIcons,
      homeRecommend,
      homeWeekend,
    }
}
</script>

<style>
</style>