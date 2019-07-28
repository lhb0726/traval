<template>
    <div class="wrapper">
        <swiper :options="swiperOption">
            <swiper-slide  v-for="item of swipperList" :key="item.id">
                <img class="swiper-img" :src="item.imgUrl" >
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>       
    </div>
</template>

<script>
export default {
    name : 'homeSwiper', 
    data () {
        return {
            swiperOption: {
                pagination: '.swiper-pagination',
                loop: true
            },
            swipperList: [{
                id: '001',
                imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20197/0677c297245b8a489ee12ab9b165c928.jpg'
                },
            {
                id: '002',
                imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20197/3f5ff03fa0c024b930f515e63ae2c702.jpg_945x288_7dff4510.jpg'
                }]
        }
    }
    
}
</script>

<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active
    background: white  
.wrapper
    width:100%
    height:0
    overflow: hidden
    padding-bottom : 31.25% 
.swiper-img
    width:100%
</style>