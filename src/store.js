import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

let defaultCity='北京'
try{
  if(localStorage.city){
    defaultCity =localStorage.city
  }
}catch (e) {}
export default new Vuex.Store({
  state: {
    city : defaultCity
  },
  actions: {
    changeCity(ctx,city){
      ctx.commit('changeCity',city)  
      //此处的changeCity指的是mutation中的，借助ctx这个参数将city传入mutation中
    }
  },
  mutations: {
    changeCity(state,city){
      state.city= city
      //此处的参数state同公共仓库state
      try{
        localStorage.city=city
      }catch (e){}
      //类似于cookie的本地存储api
    }
  },
  getters: {
    doubleCity (state) {
      return state.city + '' +state.city //与其他api用法相同，getters相当于其他函数的计算属性
    }
  }

});
