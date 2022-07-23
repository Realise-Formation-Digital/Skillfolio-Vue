<template>
  <nav>
    <v-toolbar app class="info accent-3">
      <!-- Back to home page btn -->
      <v-btn dark elevation="5" class="blue darken-3">
        <span>Accueil</span>
      </v-btn>

      <v-spacer></v-spacer>

      <!-- Search bar -->
      <v-text-field
        left
        hide-details
        prepend-icon="mdi-magnify"
        single-line
        label="Recherche CF"
      ></v-text-field>

      <v-spacer></v-spacer>

      <!-- Logo -->
      <h1>S</h1>
      <span><h1>k!ll</h1></span>
      <span><h2 class="font-weight-light">folio</h2></span>

      <v-spacer></v-spacer>
      <v-spacer></v-spacer>

      <!-- Cf name and logout btn -->
      <div class="cf">
        <h3>Bruno Silva</h3>
        <v-btn dark x-small elevation="5" class="blue darken-3">
          <span>Se deconnecte</span>
        </v-btn>
        <v-spacer class="info"></v-spacer>
      </div>

      <v-spacer></v-spacer>
      <v-spacer></v-spacer>

      <!-- Settings btn -->
      <v-speed-dial v-model="fab" slide-y-transition direction="bottom">
        <template v-slot:activator>
          <v-btn v-model="fab" color="blue darken-2" dark fab small>
            <v-icon v-if="fab"> mdi-close </v-icon>
            <v-icon v-else> mdi-cog-outline </v-icon>
          </v-btn>
        </template>

        <!-- Btns nested on Settings btn -->
        <v-btn fab dark small color="green">
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
        <v-btn fab dark small color="indigo">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
        <v-btn fab dark small color="red">
          <v-icon>mdi-delete</v-icon>
        </v-btn>
      </v-speed-dial>
    </v-toolbar>
  </nav>
</template>

<script>
export default {};
</script>

<style>
.cf {
  display: flex;
  flex-direction: column;
  text-align: center;
}
</style>