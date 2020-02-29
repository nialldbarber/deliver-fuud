import Vue from 'vue'
import Vuex from 'vuex'
import food from '~/store/modules/food'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    food
  }
})
