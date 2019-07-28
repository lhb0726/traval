<template>
    <div class="icons">
        <div class="icon">
            <div class="icon-img"> 
                <img class="icon-img-content"src="https://s.qunarzz.com/homenode/images/touchheader/hotel.png">
            </div>
            <p class="icon-desc">酒店</p>
        </div>
        <div class="icon">
            <div class="icon-img"> 
                <img class="icon-img-content"src="https://s.qunarzz.com/homenode/images/touchheader/flight.png">
            </div>
            <p class="icon-desc">机票</p>
        </div>
        <div class="icon">
            <div class="icon-img"> 
                <img class="icon-img-content"src="https://s.qunarzz.com/homenode/images/touchheader/package.png">
            </div>
            <p class="icon-desc">度假</p>
        </div>
        <div class="icon">
            <div class="icon-img"> 
                <img class="icon-img-content"src="https://s.qunarzz.com/homenode/images/touchheader/train.png">
            </div>
            <p class="icon-desc">火车票</p>
        </div>
        <div class="icon">
            <div class="icon-img"> 
                <img class="icon-img-content"src="https://s.qunarzz.com/homenode/images/touchheader/piao.png">
            </div>
            <p class="icon-desc">景点</p>
        </div>
        <div class="icon">
            <div class="icon-img"> 
                <img class="icon-img-content"src="https://s.qunarzz.com/homenode/images/touchheader/bus.png">
            </div>
            <p class="icon-desc">特惠</p>
        </div>
        <div class="icon">
            <div class="icon-img"> 
                <img class="icon-img-content"src="https://s.qunarzz.com/homenode/images/touchheader/bargainflight.png">
            </div>
            <p class="icon-desc">低价机票</p>
        </div>
        <div class="icon">
            <div class="icon-img"> 
                <img class="icon-img-content"src="https://s.qunarzz.com/homenode/images/touchheader/inn.png">
            </div>
            <p class="icon-desc">客栈</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'homeIcons'
}
</script>

<style lang="stylus">
.icons
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
</style>