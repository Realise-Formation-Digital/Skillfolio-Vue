// Page codé by Sam, state management via Axios

import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cf: [],
  },
  getters: {
    allCf: (state) => state.cf,
    filtered: (state) => (query) =>  {
      return state.cf.filter((item) => item.name.toLowerCase().includes(query.toLowerCase()))
    }
  },
  mutations: {
    CF_STATE(state, payload) {
      state.cf = [...payload];
      console.log("Ciao",state.cf)
    }
  },
  actions: {
    async getCf(context) {  //todo await async --> try catch
      const response = await axios.get('https://2g5gpatwek.preview.infomaniak.website/api/profiles')
      console.log("Test",response)
      context.commit('CF_STATE', response.data.data);
    },
  },
  modules: {
  }
})
