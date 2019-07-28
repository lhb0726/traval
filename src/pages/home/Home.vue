<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
  </div>

</template>
<script>
import homeHeader from './components/Header'
import homeSwiper from './components/Swiper'
import homeIcons from './components/Icons'

export default {
    name:'home',
    components : {
      homeHeader,
      homeSwiper,
      homeIcons,
    }
}
</script>

<style>
</style>