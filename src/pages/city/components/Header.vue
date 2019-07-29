<template>
    <div >
        <div class="header">
            城市选择
            <router-link to="/">
                 <div class="header-back">&#xe624;</div>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
@import'../../../assets/styles/varibles.styl'
.header
    position: relative
    overflow: hidden
    height: .86rem
    line-height: .86rem
    text-align: center
    color: #fff
    background : $bgColor
    .header-back
        position:absolute
        width: .64rem
        text-align: center 
        font-size: .4rem
        top: 0
        left: 0
</style>