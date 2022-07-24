<template>
  <div class="login">
    <v-btn x-large elevation="10" color="warning" @click="goToCfList()"
      ><h1 class="black--text">Login</h1>
    </v-btn>
  </div>
</template>

<script>
export default {
  methods: {
    goToCfList() {
      this.$router.push("/CfList");
    },
  },
};
</script>

<style>
.login {
  display: flex;
  margin-top: 25%;
  margin-left: 50%;
}
</style>