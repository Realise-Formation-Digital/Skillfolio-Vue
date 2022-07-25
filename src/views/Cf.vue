<template>
  <div>

    <div>
      <h1>All CF Profil</h1>
      <form role="search">
        <input type="search" v-model="search" placeholder="search CF" />
      </form>
    </div>

    <v-container v-for="align in alignments" :key="align" class="grey lighten-5 mb-6">
      <v-row :align="align" no-gutters style="height: 100px;">
        <v-col v-for="item of cf" :key="item.cf">
          <v-card class="pa-2" outlined tile>
            <v-list-item-content>
              <v-list-item-title>CF</v-list-item-title>
              <v-list-item-title>Name : {{ item.name }}</v-list-item-title>
              <v-list-item-title>Lastname : {{ item.lastname }}</v-list-item-title>
              <v-list-item-title>Age : {{ item.age }}</v-list-item-title>
              <v-list-item-title>

                <v-dialog v-model="dialog" width="500">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn v-bind="attrs" v-on="on">Profil</v-btn>
                  </template>
                  <v-card>
                    <v-card-title class="text-h5 grey lighten-2">
                      Privacy Policy
                    </v-card-title>
                    <v-card-text>
                      Lorem
                    </v-card-text>
                    <v-divider></v-divider>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="primary" text @click="dialog = false">
                        I accept
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>

              </v-list-item-title>
            </v-list-item-content>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
 
<script>
import Vue from "vue";
import _ from "lodash";

export default Vue.extend({

  name: "CF",
  data: () => ({
    data () {
      return {
        dialog: false,
      }
    },
    alignments: [
      'center',
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
</style>


