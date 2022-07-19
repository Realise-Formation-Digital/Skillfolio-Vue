<template>
<v-app>
    <v-toolbar color="primary" dark fixed app>
        <v-toolbar-title>Application</v-toolbar-title>
      </v-toolbar>
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
                {{username || 'Username'}}
              </v-list-item-title>
              <v-list-item-subtitle v-on:click="logout">log out</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>


    <v-container fluid class="bg-surface-variant">
      <v-row> 
          <v-col justify="center" md="4" v-for="item of info" :key="item.id">
          
            <li>
              <b> {{ item.name }} </b>
              <br />
              <v-img class="bg-white" height="200" :aspect-ratio="1" :src="item.image_url"></v-img>
              <br />
              <div>{{ item.description }}</div>
              <br />
                <v-btn block depressed color="error">
                  --- Plus de details ---
                </v-btn>
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
        info : [],
        items: [
          { title: 'Dashboard', icon: 'mdi-view-dashboard' },
          { title: 'Photos', icon: 'mdi-image' },
          { title: 'About', icon: 'mdi-help-box' },
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