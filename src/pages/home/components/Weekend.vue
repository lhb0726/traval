<template>
    <div>
        <div class="recommend-title">周末去哪儿</div>
        <ul>
            <li class="item border-bottom" v-for="item of list" :key="item.id">
                <div class="item-img-wrapper">
                    <img :src="item.imgUrl"  class="item-img">
                </div>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                </div>
            </li>
        </ul>
    </div> 
</template>

<script>
export default {
    name : 'homeWeekend',
    props: {
        list: Array
    }
}
</script>

<style lang="stylus" scoped>
.recommend-title
    margin-top: .2rem
    line-height: .8rem
    background: #eee
    text-indent: .2rem
.item-img-wrapper
    overflow:hidden
    padding-bottom: 37.09%
    height: 0
.item-img
    width : 100%
.item-info
    padding: .1rem
    min-width: 0
    .item-title
        line-height: .54rem
        font-size: .32rem
        overflow: hidden
        white-space: nowrap
        text-overflow: ellipsis
    .item-desc
        line-height: .4rem
</style>