<template>
  <v-card elevation="10" class="mx-auto" max-width="434" tile>
    <v-img
      height="100%"
      src="https://cutewallpaper.org/23/web-development-wallpaper-hd/101384277.jpg"
    >
      <v-row class="fill-height">
        <div class="profile-wrap">
          <div>
            <!-- Photo CF -->
            <v-col align-self="start" class="pa-0" cols="12">
              <v-avatar class="profile" color="grey" size="164" tile>
                <v-img
                  src="https://www.pngitem.com/pimgs/m/560-5603874_product-image-logo-avatar-minimalist-flat-line-hd.png"
                ></v-img>
              </v-avatar>

              <!-- Nom et Cours -->
              <v-col class="py-0">
                <v-list-item color="rgba(0, 0, 0, .4)" dark>
                  <v-list-item-content>
                    <v-list-item-title class="text-h6">
                      Bruno Silva
                    </v-list-item-title>
                    <v-list-item-subtitle>Dev Web</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-col>
            </v-col>
          </div>

          <!-- Description -->
          <v-col cols="6" class="shrink">
            <v-btn
              elevation="5"
              dark
              class="ma-2"
              color="amber darken-4"
              @click="expand = !expand"
            >
              Description
            </v-btn>

            <v-expand-x-transition>
              <v-col v-show="expand">
                <v-textarea
                  solo
                  name="input-7-4"
                  label="Editer"
                  height="90"
                  width="300"
                ></v-textarea>
              </v-col>
            </v-expand-x-transition>
          </v-col>
        </div>
      </v-row>
    </v-img>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    expand: false,
  }),
};
</script>

<style>
.profile-wrap {
  display: flex;
  align-items: baseline;
}
</style>