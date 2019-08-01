<template>
    <div>
        <div class="banner" @click="handleBannerClick">
            <img 
                class="banner-img"
                :src="bannerImg"
             >
             <div class="banner-info">
                 <div class="banner-title">{{this.sightName}}</div>
                 <div class="banner-number">{{this.bannerImgs.length}}</div>
             </div>
        </div>
        <fade-animation>
            <common-gallary :imgs="bannerImgs" v-show="showGallary" @close="handleClose"></common-gallary>
        </fade-animation>
        
    </div> 
    <!-- banner样式中的paddingbottom是为了防止加载是页面抖动设置的 -->
</template>

<script>
import CommonGallary from '@/common/gallary/Gallary.vue';
import FadeAnimation from '@/common/fade/FadeAnimation.vue';
export default {
    name: "DetailBanner",
    components: {
        CommonGallary,
        FadeAnimation,
    },
    data () {
        return {
            showGallary: false,       
        }
    },
    props: {
        sightName: String,
        bannerImg: String,
        bannerImgs: Array
    },
    methods: {
        handleBannerClick () {
            this.showGallary= true  
        },
        handleClose () {
            this.showGallary=false
        }
    }
}
</script>

<style lang="stylus" scoped>
.banner
    position: relative
    overflow: hidden
    height: 0
    padding-bottom: 55%
    .banner-img
        width: 100%
    .banner-info
        position: absolute
        left: 0
        right: 0
        bottom: 0
        line-height : .9rem
        display: flex
        color:#eee
        background-image : linear-gradient(to top,rgba(0,0,0,0),rgba(0,0,0,0.8))
        .banner-title
            flex: 1
            font-size:.32rem
            padding: 0 .2rem
        .banner-number
            height: .36rem
            padding 0 .4rem
            line-height: .6rem
            margin-top: .2rem
            border-radius: .2rem
            background : rgba(0,0,0,.8)
            
</style>