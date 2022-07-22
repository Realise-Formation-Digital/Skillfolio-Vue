<template>
  <div class="home">
    <InfoComp />
    <h1>Page profile des CF</h1>
  </div>
</template>

<script>
import InfoComp from "@/components/InfoComp.vue";
export default {
  components: { InfoComp },
};
</script>

<style>
.home {
  margin-top: 100px;
  flex-direction: row-reverse;
  display: flex;
}
</style>
