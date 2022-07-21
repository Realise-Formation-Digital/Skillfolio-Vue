<template>
  <div>
    <v-container>
      <v-row>
        <v-col>
          <v-app>
            <v-app-bar app>
            
              <router-link to="/" class="black--text pa-md-4 mx-lg-auto"><v-btn color="rgb(255, 0, 0, 0.2)">Home</v-btn></router-link>
              <router-link to="/about" class="black--text pa-md-4 mx-lg-auto"><v-btn color="rgb(255, 0, 0, 0.2)">About</v-btn></router-link>
            
              <v-spacer></v-spacer>

            </v-app-bar>

            <v-main>
              <router-view/>
            </v-main> 
          </v-app>
        </v-col>
      </v-row>   
    </v-container>

    <v-footer dark padless>
      <v-card class="flex" flat tile>
        <v-card-title class="teal">
          <strong class="subheading">Get connected with us on social networks!</strong>

          <v-spacer></v-spacer>

          <v-btn v-for="icon in icons" :key="icon" class="mx-4" dark icon>
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-title>

      </v-card>
    </v-footer>
  </div>
</template>

<style>
.v-main__wrap, .v-main, body, .v-toolbar__content{
  background: url('./assets/bg.jpg');
  background-size: cover;
}

* {
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande", "Lucida Sans Unicode";
}
</style>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'App',

  data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-linkedin',
        'mdi-github',
      ],
    }),
  })
</script>
