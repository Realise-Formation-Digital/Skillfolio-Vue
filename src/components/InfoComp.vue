<template>
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
              <v-textarea solo name="input-7-4" label="Editer"></v-textarea>
            </v-col>
          </v-expand-x-transition>
        </v-col>

        <v-col cols="6" class="shrink">
          <v-btn class="ma-2" color="warning" @click="expand2 = !expand2">
            Competences
          </v-btn>

          <v-expand-x-transition>
            <v-col v-show="expand2">
              <v-textarea solo name="input-7-4" label="Editer"></v-textarea>
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
              <v-textarea solo name="input-7-4" label="Editer"></v-textarea>
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
</template>

<script>
export default {
  data: () => ({
    expand: false,
    expand2: false,
    expand3: false,
    expand4: false,
  }),
};
</script>

<style>
.infobar {
  display: flex;
  justify-content: space-evenly;
}
</style>