<template>
  <v-app>
    <v-parallax
      height="1000"
      src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
    >
      <NavbarComp />
      <v-content>
        <router-view></router-view>
      </v-content>
    </v-parallax>
  </v-app>
</template>

<script>
import NavbarComp from "./components/NavbarComp.vue";
export default {
  name: "app",
  data() {
    return {};
  },
  components: { NavbarComp },
};
</script>
