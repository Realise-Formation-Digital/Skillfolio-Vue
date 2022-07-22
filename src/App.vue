<template>
  <v-app>
    <NavbarComp />
    <v-content>
      <router-view></router-view>
    </v-content>
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
