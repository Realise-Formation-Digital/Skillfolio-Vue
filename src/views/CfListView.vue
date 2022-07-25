<template>
  <v-card class="mx-auto" max-width="100%">
    <v-card-title class="list--wrap white--text indigo darken-4">
      <h1>CF List</h1>

      <v-spacer></v-spacer>

      <v-btn color="white" class="text--primary" fab small>
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-card-title>

    <v-card-text class="pt-4"> List des Cf chez Realise. </v-card-text>

    <v-divider></v-divider>

    <v-virtual-scroll :items="profiles" :item-height="50" height="300">
      <template v-slot:default="{ item }">
        <v-list-item>
          <v-list-item-avatar>
            <v-avatar :color="item.color" size="56" class="white--text">
              {{ item.photo }}
            </v-avatar>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title
              >{{ item.firstname }} {{ item.lastname }}</v-list-item-title
            >
          </v-list-item-content>

          <v-list-item-action>
            <router-link
              :to="{ name: 'profileDetails', params: { id: item.id } }"
            >
              <v-btn depressed small>
                View User
                <v-icon color="orange darken-4" right> mdi-open-in-new </v-icon>
              </v-btn>
            </router-link>
          </v-list-item-action>
        </v-list-item>
      </template>
    </v-virtual-scroll>
  </v-card>
</template>

<script>
import Services from "@/services/services";
export default {
  data() {
    return {
      profiles: [],
      error: "",
    };
  },
  async mounted() {
    try {
      this.profiles = await Services.getAll();
      console.log(this.profiles);
    } catch (error) {
      console.log(error);
      this.error = error.message;
    }
  },
};
</script>

<style>
.list--wrap {
  margin-top: 69px;
}
</style>