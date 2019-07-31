<template>
    <div>
        <div class="banner" @click="handleBannerClick">
            <img 
                class="banner-img"
                src="http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_710x360_7486df6c.jpg"
             >
             <div class="banner-info">
                 <div class="banner-title">故宫-神圣伟大的地方(AAAAA景区)</div>
                 <div class="banner-number">39</div>
             </div>
        </div>
        <common-gallary :imgs="imgs" v-show="showGallary" @close="handleClose"></common-gallary>
    </div> 
    <!-- banner样式中的paddingbottom是为了防止加载是页面抖动设置的 -->
</template>

<script>
import CommonGallary from '@/common/gallary/Gallary.vue';
export default {
    name: "DetailBanner",
    components: {
        CommonGallary,
    },
    data () {
        return {
            imgs: ['http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_710x360_7486df6c.jpg',
                   'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_710x360_7486df6c.jpg'],
            showGallary: false,       
        }
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