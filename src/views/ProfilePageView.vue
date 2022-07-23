<template>
  <div>
    <div class="coach-wrap">
      <div>
        <v-btn>Job-Coach</v-btn>
      </div>

      <div>
        <v-btn>Conseillère-Coach</v-btn>
      </div>

      <div>
        <v-btn>Formateur-trice</v-btn>
      </div>
    </div>

    <div class="home">
      <div>
        <InfoComp />
      </div>
      <div>
        <ProfileCardComp />
      </div>
    </div>
  </div>
</template>

<script>
import InfoComp from "@/components/InfoComp.vue";
import ProfileCardComp from "@/components/ProfileCardComp.vue";
export default {
  components: { InfoComp, ProfileCardComp },
};
</script>

<style>
.home {
  margin-top: 100px;
  flex-direction: row-reverse;
  display: flex;
  justify-content: space-evenly;
}
.coach-wrap {
  display: flex;
  justify-content: space-evenly;

  margin-top: 100px;
}
</style>
