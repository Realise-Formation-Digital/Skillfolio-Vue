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
      return state.cf.filter((item) => 
      item.firstname.toLowerCase().includes(query.toLowerCase()) || item.lastname.toLowerCase().includes(query.toLowerCase()) || item.type.toLowerCase().includes(query.toLowerCase()) || item.status.toLowerCase().includes(query.toLowerCase()))
    },
    
  },
  mutations: {
    CF_STATE(state, payload) {
      state.cf = [...payload];
      console.log("Ciao",state.cf)
    },
    CF_POST_STATE(state, actions) {
      state.cf.push(actions);
    },
  },
  actions: {
    async getCf(context) {
      const response = await axios.get('https://2g5gpatwek.preview.infomaniak.website/api/profiles')
      context.commit('CF_STATE', response.data.data);
    },
    // async putCf(context) {
    //   const response = await axios.put('https://2g5gpatwek.preview.infomaniak.website/api/profiles',
    //   {
    //     id: "id",
    //     type: "type",
    //     firstname: "firstname",
    //     lastname: "lastname",
    //     description: "description",
    //     CC: "CC",
    //     JC: "JC",
    //     trainer: "trainer",
    //     status: "status",
    //   })
    //   context.commit('CF_PUT_STATE', response.data.data)
    // },
    async postCf(context, post) {
      const response = await axios.post('https://2g5gpatwek.preview.infomaniak.website/api/profiles', post)
      context.commit('CF_POST_STATE', response.data.data);
    },
  },
  modules: {
  }
})
