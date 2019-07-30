<template>
    <div>
        <ul class="list">
            <li class="item" 
                v-for="(item,key) of city"
                :key="key"
                @click="handleLetterClick"
             >
                {{key}}
            </li>

        </ul>
    </div>
</template>

<script>
export default {
    name : 'CityAlphabet',
    props: {
        city : Object
    },
    methods: {
        handleLetterClick (e){
            this.$emit('change',e.target.innertext)
        }
    } 
}
</script>

<style lang="stylus" scoped>
.list
    display:flex
    flex-direction: column
    justify-content: center
    position: absolute
    top: 1.58rem
    right: 0
    bottom: 0
    width: .4rem
    .item
        line-height: .4rem
        text-align: center
</style>