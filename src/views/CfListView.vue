<template>
  <v-card class="mx-auto" max-width="100%">
    <v-card-title class="list--wrap white--text indigo darken-4">
      <h2>CF List</h2>

      <v-spacer></v-spacer>

      <v-btn color="white" class="text--primary" fab small>
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-card-title>

    <v-card-text class="pt-4">liste de tous les CF chez realise. </v-card-text>

    <v-divider></v-divider>

    <v-virtual-scroll :profiles="profiles" :item-height="50" height="300">
      <template>
        <v-list-item>
          <v-list-item-avatar>
            <v-avatar size="56" class="white--text"> </v-avatar>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>{{ profiles.fullName }}</v-list-item-title>
          </v-list-item-content>

          <v-list-item-action>
            <v-btn :to="{ name: 'ProfileView' }" depressed small>
              View User

              <v-icon color="orange darken-4" right> mdi-open-in-new </v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>
      </template>
    </v-virtual-scroll>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      profiles: [],
    };
  },

  mounted() {
    fetch("http://localhost:3000/profiles")
      .then((res) => res.json())
      .then((data) => (this.profiles = data))
      .catch((err) => console.log(err.message));
  },
};
</script>

<style>
.list--wrap {
  margin-top: 69px;
}
</style>