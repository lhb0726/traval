<template>
  <div class="header">
      <div class="header-left">
          <span class="iconfont">&#xe624;</span>
      </div>
      <div class="header-input"><span class="iconfont">&#xe632;</span>输入城市/景点/游玩主题</div>
      <router-link to='/city'>
        <div class="header-right">
          {{this.currentCity}} 
          <!-- vuex公共数据的使用this.$store.state.city -->
          <span class="iconfont">&#xe64a;</span>
        </div>
      </router-link>

  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    name:'homeHeader',
    props :{
        city : String
    },
    computed: {
        ...mapState({
            currentCity:'city'
        })
        //把vuex中的公用数据city映射到计算属性的currentCity中
    }
}
</script>

<style lang="stylus" scoped>
@import'../../../assets/styles/varibles.styl'
.header
    display: flex
    line-height: .86rem
    background: $bgColor
    color:#fff
    .header-left
        width: .64rem
        float: left
        text-align : center 
    .header-right
        min-width: 1.04rem
        padding: 0 .1rem
        float:right
        text-align: center
        color: white
    .header-input
        flex: 1
        background :#fff
        border-radius: .1rem
        margin-top: .12rem
        margin-left: .2rem
        margin-bottom : .12rem
        height: .64rem
        color: #ccc
        padding-left: .2rem
</style>