<template>
  <v-app>
    <!-- <v-toolbar color="primary" dark fixed app>
      <v-toolbar-title>Application</v-toolbar-title>
    </v-toolbar> -->
    <v-navigation-drawer permanent>
      <v-list>
        <v-list-item class="px-2">
          <v-list-item-avatar>
            <v-img src="https://randomuser.me/api/portraits/women/85.jpg"></v-img>
          </v-list-item-avatar>
        </v-list-item>

        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title class="text-h6">
              {{ username || 'Username' }}
            </v-list-item-title>
            <v-list-item-subtitle v-on:click="logout">log out</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>


    <!-- <div class="search-wrapper">
    <input type="text" v-model="search" placeholder="Search"/>
        <label>Search title:</label>
    </div> -->


    <v-container fluid class="bg-surface-variant">
      <v-row>
        <v-col justify="center" md="4" v-for="item of info" :key="item.id">

          <li>
            <b> {{ item.name }} </b>
            <br />
            <v-img class="bg-white" height="200" :aspect-ratio="1" :src="item.image_url"></v-img>
            <br />
            <div>lorem</div>
            <br />
            <!-- <v-btn block depressed color="error">
                  --- Plus de details ---
                </v-btn> -->
            <div class="text-center">
              <v-dialog v-model="dialog" width="500">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn color="red lighten-2" dark v-bind="attrs" v-on="on">
                    Click Me
                  </v-btn>
                </template>

                <v-card>
                  <v-card-title class="text-h5 grey lighten-2">
                    Privacy Policy
                  </v-card-title>

                  <v-card-text>
                    {{ item.description }}
                  </v-card-text>

                  <v-divider></v-divider>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" text @click="dialog = false">
                      Supprimer
                    </v-btn>
                    <v-btn color="primary" text @click="dialog = false">
                      Modifier
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </div>
            <br />
            <v-divider></v-divider>
          </li>
        </v-col>

      </v-row>
    </v-container>
  </v-app>
</template>

<script>
  import axios from 'axios'
  export default {

   

    async mounted() {
    const result = await axios.get('https://api.punkapi.com/v2/beers');
    this.info = result.data;
    console.log(this.info)
  },

    data () {
      return {
        dialog: false,
        info : [],
        items: [
          { title: 'Ajouter un compte CF', icon: 'mdi-view-dashboard' },
        ],
        username:this.$route.params.username
      }
    },
    methods: {
      logout() {
        this.$router.replace({name:'login'})
      }
    }
  }
</script>

<style>
</style>