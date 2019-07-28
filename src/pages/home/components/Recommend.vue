<template>
    <div>
        <div class="recommend-title">热销推荐</div>
        <ul>
            <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
                <img :src="item.imgUrl"  class="item-img">
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <button class="item-button">查看详情</button>
                </div>
            </li>
        </ul>
    </div> 
</template>

<script>
export default {
    name : 'homeRecommend',
    data (){
        return {
            recommendList: [{
                id:'001',
                imgUrl: 'https://imgs.qunarzz.com/p/tts9/1905/e5/ae14cb05c5d23a02.png_256x144_00eba93d.png',
                title: '北京出发一日游',
                desc: '★不到长城非好汉，北京必去的景点！',
            },{
                id:'002',
                imgUrl: 'https://imgs.qunarzz.com/p/tts9/1905/e5/ae14cb05c5d23a02.png_256x144_00eba93d.png',
                title: '北京出发一日游',
                desc: '★不到长城非好汉，北京必去的景点',
            },{
                id:'003',
                imgUrl: 'https://imgs.qunarzz.com/p/tts9/1905/e5/ae14cb05c5d23a02.png_256x144_00eba93d.png',
                title: '北京出发一日游',
                desc: '★不到长城非好汉，北京必去的景点',
            },{
                id:'004',
                imgUrl: 'https://imgs.qunarzz.com/p/tts9/1905/e5/ae14cb05c5d23a02.png_256x144_00eba93d.png',
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
.item
    display: flex
    height: 1.9rem
    .item-img
        width: 1.7rem
        height: 1.7rem
        padding: .1rem
    .item-info
        flex: 1
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
        .item-button
            line-height: .44rem
            background: #ff9300
            padding: 0 .2rem
            border-radius: .6rem
            margin-top:#fff
            overflow: hidden
            white-space: nowrap
            text-overflow: ellipsis
</style>