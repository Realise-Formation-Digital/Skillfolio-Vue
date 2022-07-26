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
    }
  },
  actions: {
    async getCf(context) {  //todo await async --> try catch
      const response = await axios.get('https://2g5gpatwek.preview.infomaniak.website/api/profiles')
      context.commit('CF_STATE', response.data.data);
    },
    async putCf(context) {
      const response = await axios.put('https://2g5gpatwek.preview.infomaniak.website/api/profiles/5?type=CF&firstname=sami&lastname=sami&description=scrummaster&status=delegated',
      {
        id: "id",
        type: "type",
        firstname: "firstname",
        lastname: "lastname",
        description: "description",
        CC: "CC",
        JC: "JC",
        trainer: "trainer",
        status: "status",
      })
      context.commit('CF_PUT_STATE', response.data.data)
    }
  },
  modules: {
  }
})
