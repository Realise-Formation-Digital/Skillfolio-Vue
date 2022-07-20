<template>
  <v-app>
    <!-------------log out-------------->
    <v-navigation-drawer permanent>
      <v-list>
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
      <!--------- add account ----------->
      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <!----------CF list--------------->
    <v-container fluid class="bg-surface-variant">
      <v-row>
        <v-col justify="center" md="4" v-for="item of info" :key="item.id">
          <v-card elevation="6" width="20rem">
            <li>
              <b> {{ item.name }} </b>
              <br />
              <v-img class="bg-white" height="200" :aspect-ratio="1" :src="item.image_url"></v-img>
              <br />
              <div>{{ item.description }}</div>
              <br />
              <!----------Modal------------->
              <div>
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
                      salut
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
              </div>
              <v-divider></v-divider>
            </li>
          </v-card>
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

  data() {
    return {
      info: [],
      dialog: false,
      items: [
        { title: 'Add account' },
      ],
      username: this.$route.params.username
    }
  },
  methods: {
    logout() {
      this.$router.replace({ name: 'login' })
    }
  }
}
</script>
<style scoped lang="scss">
</style>