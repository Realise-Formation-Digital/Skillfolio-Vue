import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cf: [],
  },
  getters: {
    allCf: (state) => state.cf
  },
  mutations: {
    CF_STATE(state, payload) {
      state.cf = [...payload];
      console.log("Ciao",state.cf)
    }
  },
  actions: {
    async getCf(context) {  //todo await async --> try catch
      const response = await axios.get('http://localhost:3002/cf')
      console.log("Test",response)
      context.commit('CF_STATE', response.data);
    }
  },
  modules: {
  }
})
