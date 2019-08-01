<template>
    <div>
        <router-link tag="div" to='/' class="header-abs" v-show="showAbs">返回</router-link>
        <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
            景点详情
            <!-- <router-link to="/">
                 <div class="header-fixed-back">&#xe624;</div>
            </router-link> -->
        </div>
    </div>
</template>

<script>
export default {
    name: 'DetailHeader',
    data(){
        return {
            showAbs:true,
            opacityStyle: {
                opacity: 0
            }
        }
    },
    methods: {
        handleScroll (){
            const top=document.documentElement.scrollTop;

            if(top > 60){
                let opacity=top/140;
                opacity=opacity >1 ? 1 : opacity
                this.opacityStyle = { opacity }
                this.showAbs=false;
            }else{
                this.showAbs=true;
            }
        }
    },
    activated () {
        window.addEventListener('scroll', this.handleScroll)
    },
    deactivated() {
        window.removeEventListener('scroll', this.handleScroll)   
    },
}
</script>

<style lang="stylus" scoped>
@import'../../../assets/styles/varibles.styl'
.header-abs
    position:absolute
    left: .2rem
    top: .2rem
    width: .8rem
    height: .8rem
    border-radius: .4rem
    background: rgba(0,0,0,.8)
    text-align: center
    line-height: .8rem
    color: #fff
.header-fixed
    z-index: 99  
    position: fixed 
    top:0
    left:0
    right:0
    height: $headerHeight
    line-height: $headerHeight
    text-align: center
    color: #fff
    background : $bgColor

</style>