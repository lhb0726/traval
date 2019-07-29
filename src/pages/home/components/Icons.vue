<template>
    <div class="icons" >
        <swiper >
            <swiper-slide v-for="(page,index) of pages" :key="index">
                <div class="icon" v-for="item of page" :key="item.id">
                    <div class="icon-img"> 
                        <img class="icon-img-content" :src="item.imgUrl">
                    </div>
                    <p class="icon-desc">{{item.desc}}</p>
                </div>
            </swiper-slide>
        </swiper> 
        </div>
    </div>
</template>

<script>
export default {
    name: 'homeIcons',
    props:{
        list : Array
    },
    computed : {
        pages (){
            const pages = [];
            
            this.list.forEach((item,index)=>{
                const page =Math.floor(index/8);
                if(!pages[page]){
                    pages[page]=[]
                }
                pages[page].push(item)
            })
            console.log(pages)
            return pages
        }
    }
}   
</script>

<style lang="stylus" scoped>
.icons >>> .swiper-container
    overflow: hidden
    height: 0
    padding-bottom: 50%
.icon
    position: relative
    overflow: hidden
    float: left 
    width: 25%
    height: 0
    padding-bottom: 25%   
    .icon-img
        position: absolute
        top: 0
        left: 0
        right: 0
        bottom: .44rem

        box-sizing: border-border-box
        padding: .1rem
        .icon-img-content
            display: block
            margin: 0 auto
            height: 100%

    .icon-desc
        position: absolute
        line-height: .44rem
        height: .44rem
        left: 0
        right: 0
        bottom: 0
        color: #333
        text-align: center 
        overflow: hidden
        white-space: nowrap
        text-overflow: ellipsis
</style>