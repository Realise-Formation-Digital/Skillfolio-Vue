<template>
  <div>
    <h1>Panneau d'administration</h1>
    <nav>
      <v-btn>
        <router-link to="/">Log Out</router-link> |
        <router-link to="/home">Home</router-link>
      </v-btn>
    </nav>

    <div>
      <h1>All CF Profil</h1>
      <form role="search">
        <input class="SAH" type="search" v-model="search" placeholder="search CF" />
      </form>
      
      
    </div>
    <p><AjouterCf></AjouterCf></p>

    <v-container v-for="align in alignments" :key="align" class="grey lighten-5 mb-6">
      <v-row :align="align" no-gutters style="height: 100px;">
        <v-col v-for="item of cf" :key="item.cf">
          <v-card class="pa-2" outlined tile>

            <v-list-item-content>
              <v-list-item-title>CF</v-list-item-title>
              <v-list-item-title>Name : {{ item.name }}</v-list-item-title>
              <v-list-item-title>Lastname : {{ item.lastname }}</v-list-item-title>
              <v-list-item-title>Age : {{ item.age }}</v-list-item-title>
            </v-list-item-content>
            <v-list-item-title>
            <modal :item="item"></modal>
            </v-list-item-title>
            <!-- CF
            Name : {{ item.name }}
            LastName : {{ item.lastname }}
            Age : {{ item.age }} -->

          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
 
<script>
import Vue from "vue";
import _ from "lodash";
import Modal from "@/views/MoDalView.vue"
import AjouterCf from "@/components/AjouterCf.vue";


export default Vue.extend({

  name: "CF",
  components: {
    "modal": Modal,
    "AjouterCf": AjouterCf
},
  data: () => ({
    alignments: [
      'start',
      'center',
      'end',
    ],
    cf: [],
    search: []
  }),
  async mounted() {
    await this.$store.dispatch('getCf');
    this.cf = this.$store.getters.allCf;
  },
  watch: {
    search: _.debounce(function (query) {
      this.cf = this.$store.getters.filtered(query);
    }, 500)
  }
}) 
</script>

<style lang="scss">
.SAH {
  border-style:solid
}
</style>