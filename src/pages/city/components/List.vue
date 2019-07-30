<template>
    <div class="list" ref="wrapper"> 
        <div>
            <div class="area">
                <div class="title border-topbottom">当前城市</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button">北京</div>                     
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">热门城市</div>
                <div class="button-list">
                    <div class="button-wrapper" v-for="item of hot" :key="item.id">
                        <div class="button">{{item.name}}</div>                     
                    </div>
                </div>
            </div>
            <div class="area" v-for="(item, key) of city" :key="key" :ref="key" >
                <div class="title border-topbottom">{{key}}</div>
                <div class="item-list"  >
                    <div class="item border-bottom" v-for="innerItem of item" :key="innerItem.id">
                        {{innerItem.name}}
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    name: 'CityList',
    props : {
        city : Object ,
        hot : Array,
        letter: String,
    },
    data() {
        return {
            scroll: null
        }
    },
    mounted(){
        this.scroll=new BScroll(this.$refs.wrapper);
    },
    watch: {
        letter () {
            if(this.letter){
                const element = this.$refs[this.letter][0]
                 this.scroll.scrollToElement(element)
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
.title
    line-height: .44rem
    background: #eee
    padding-left: .2rem
    color: #666
    font-size: .26rem
.border-topbottom
    &:before
        border-color: #ccc
    &:after
        border-color: #ccc
.border-bottom
    &:before
        border-color: #ccc
.list
    position: absolute
    top: 1.58rem
    overflow: hidden
    height: calc(100% - 1.58rem)
    .button-list
        overflow:hidden
        padding: .1rem .6rem .1rem .1rem
        .button-wrapper
            width: 33.33%
            float: left
            .button
                text-align: center
                margin: .1rem
                border: .02rem solid #ccc
                border-radius: .06rem
                padding: .2rem
    .item-list
        .item
            line-height: .76rem
            padding-left: .2rem
    
    
</style>