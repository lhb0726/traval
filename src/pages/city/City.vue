<template>
    <div>
        <city-header></city-header>
        <city-search></city-search>
        <city-list 
             :city="cities"
             :hot="hotCities" 
             :letter="letter" 
        >
        </city-list>
        <city-alphabet 
            :city="cities" 
            @change="handleChange"
            >

        </city-alphabet>
    </div>
</template>

<script>
import CityHeader from './components/Header.vue'
import CitySearch from './components/Search.vue'
import CityList from './components/List.vue'
import CityAlphabet from './components/Alphabet.vue'
import axios from 'axios'
export default {
    name: 'City',
    components:{
        CityHeader,
        CitySearch,
        CityList,
        CityAlphabet,
    },
    data () {
        return {
            cities : {} ,
            hotCities : [],
            letter : ''

        }
    },
    methods: {
        getCityInfo () {
            axios.get('/api/city.json')
                .then(this.handleGetCityInfoSucc);
        },
        handleGetCityInfoSucc (res) {
            console.log(res)
            res=res.data;
            if(res.ret&&res.data){
                const data = res.data
                this.cities=data.cities
                this.hotCities=data.hotCities
            }
        },
        handleChange (letter) {
            this.letter=letter;
            console.log(letter)
        }
    },
    mounted (){
        this.getCityInfo(); //调用方法
    },
}
</script>

<style lang="stylus" scoped>
    
</style>