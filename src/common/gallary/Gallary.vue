<template>
    <div>
        <div class="container">
            <div class="wrapper">
                <swiper :options="swiperOption" v-if="list.length">
                    <swiper-slide  v-for="item of list" :key="item.id">
                        <img class="swiper-img" :src="item.imgUrl" >
                    </swiper-slide>
                    <div class="swiper-pagination"  slot="pagination"></div>
                </swiper>  
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CommonGallary'
}
</script>

<style lang="stylus"  scoped>
.container
    display:flex
    flex-direction: column
    justify-content:center
    position:fixed
    left: 0
    right: 0
    top: 0
    bottom: 0
    background: #000
    z-index: 99
    .wrapper
        width:100%
        height: 0
        overflow: hidden
        padding-bottom: 100%

</style>