<!-- Page codé by Sam
Page profil avec liste des profil et filtre pour la barre de recherche -->

<template>
  <div>
    <h1 class="text-decoration-underline">Panneau d'administration</h1>
    <nav>
      <v-btn>
        <router-link to="/">Log Out</router-link> 
      </v-btn>
    </nav>

    <div>
      <h1 class="text-center text-decoration-underline">All Profil</h1>
      <p><AjouterCf></AjouterCf></p>
      <form role="search" class="text-center">
        <input class="SAH" type="search" v-model="search" placeholder="Search Profil" />
      </form>
    </div>
  
    <v-container v-for="align in alignments" :key="align" class="grey lighten-5 mb-6">
      <v-row :align="align" no-gutters style="height: 100px;">
        <v-col v-for="item of cf" :key="item.cf">
          <v-card class="pa-2" outlined tile>

            <v-list-item-content>
              <v-list-item-title>Type : {{ item.type }}</v-list-item-title>
              <v-list-item-title>Name : {{ item.firstname }}</v-list-item-title>
              <v-list-item-title>Lastname : {{ item.lastname }}</v-list-item-title>
              <v-list-item-title>Description : {{ item.description }}</v-list-item-title>
              <v-list-item-title>Status : {{ item.status }}</v-list-item-title>
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