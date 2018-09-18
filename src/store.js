import Vue from 'vue'
import Vuex from 'vuex'
import notDynamic from '@/vuexModule';


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    test: 'hello'
  },
  mutations: {

  },
  actions: {

  },
  modules: {
    notDynamic,
  }
})
