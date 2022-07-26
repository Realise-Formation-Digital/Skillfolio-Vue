<template>
  <v-app>
    <v-app-bar app dark class="bar">
      <div class="d-flex align-center">
        <v-img alt="Vuetify Logo" class="shrink mr-2" contain src="@/assets/logo2.png" transition="scale-transition"
          max-width="200" max-height="100" />
      </div>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
<style scoped lang="scss">
.bar {
  background: rgb(255, 255, 255);
  background: linear-gradient(90deg, rgba(255, 255, 255, 1) 10%, rgba(2, 68, 165, 1) 19%, rgba(65, 178, 225, 1) 45%, rgba(145, 210, 44, 1) 100%);
}
</style>
