<template>
    <div>
        <div class="recommend-title">周末去哪儿</div>
        <ul>
            <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
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
    data (){
        return {
            recommendList: [{
                id:'001',
                imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20197/b72df47942fb28fcd7bf481f01e785f5.jpg',
                title: '北京出发一日游',
                desc: '★不到长城非好汉，北京必去的景点！',
            },{
                id:'002',
                imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20197/b72df47942fb28fcd7bf481f01e785f5.jpg',
                title: '北京出发一日游',
                desc: '★不到长城非好汉，北京必去的景点',
            },{
                id:'003',
                imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20197/b72df47942fb28fcd7bf481f01e785f5.jpg',
                title: '北京出发一日游',
                desc: '★不到长城非好汉，北京必去的景点',
            }]
        }
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
    padding-bottom: 31.25%
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