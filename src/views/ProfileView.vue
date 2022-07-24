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
        <v-card class="mx-auto" max-width="500">
          <v-toolbar class="infobar" color="indigo" dark>
            <v-toolbar-title>Infomation</v-toolbar-title>
          </v-toolbar>

          <v-container fluid>
            <v-row>
              <v-col cols="6" class="shrink">
                <v-btn class="ma-2" color="info" @click="expand = !expand">
                  SoftSkills
                </v-btn>

                <v-expand-x-transition>
                  >
                  <v-col v-show="expand">
                    <v-textarea
                      solo
                      name="input-7-4"
                      label="Editer"
                    ></v-textarea>
                  </v-col>
                </v-expand-x-transition>
              </v-col>

              <v-col cols="6" class="shrink">
                <v-btn class="ma-2" color="warning" @click="expand2 = !expand2">
                  Competences
                </v-btn>

                <v-expand-x-transition>
                  <v-col v-show="expand2">
                    <v-textarea
                      solo
                      name="input-7-4"
                      label="Editer"
                    ></v-textarea>
                  </v-col>
                </v-expand-x-transition>
              </v-col>

              <v-col cols="6" class="shrink">
                <v-btn
                  dark
                  class="ma-2"
                  color="deep-purple lighten-1"
                  @click="expand3 = !expand3"
                >
                  Langues
                </v-btn>

                <v-expand-x-transition>
                  <v-col v-show="expand3">
                    <v-textarea
                      solo
                      name="input-7-4"
                      label="Editer"
                    ></v-textarea>
                  </v-col>
                </v-expand-x-transition>
              </v-col>

              <v-col cols="6" class="shrink">
                <v-btn
                  dark
                  class="ma-2"
                  color="light-green lighten-1"
                  @click="expand4 = !expand4"
                >
                  Documents
                </v-btn>

                <v-expand-x-transition>
                  <v-col v-show="expand4">
                    <v-textarea
                      solo
                      name="input-7-4"
                      label="Editer"
                      height="150"
                      width="300"
                    ></v-textarea>
                  </v-col>
                </v-expand-x-transition>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </div>
      <div>
        <ProfileCardComp />
      </div>
    </div>
  </div>
</template>

<script>
import ProfileCardComp from "@/components/ProfileCardComp.vue";
export default {
  expand: false,
  expand2: false,
  expand3: false,
  expand4: false,
  components: { ProfileCardComp },
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
.infobar {
  display: flex;
  justify-content: space-evenly;
}
</style>
