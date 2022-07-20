<template>
   <v-app>
      <v-main>
         <v-container fluid fill-height>
            <v-layout align-center justify-center>
               <v-flex xs12 sm8 md4>
                  <h1>Bienvenue chez Réalise</h1>
                  <v-card class="elevation-12">
                     <v-toolbar dark color="primary">
                        <v-toolbar-title>{{ isRegister ? stateObj.register.name : stateObj.login.name }} form
                        </v-toolbar-title>
                     </v-toolbar>
                     <v-card-text>
                        <form ref="form" @submit.prevent="isRegister ? register() : login()">
                           <v-text-field v-model="username" name="username" label="Username" type="text"
                              placeholder="username" required></v-text-field>

                           <v-text-field v-model="password" name="password" label="Password" type="password"
                              placeholder="password" required></v-text-field>
                           <div class="red--text"> {{ errorMessage }}</div>
                           <v-btn type="submit" class="mt-4" color="primary" value="log in">{{ isRegister ?
                                 stateObj.register.name : stateObj.login.name
                           }}</v-btn>
                           
                        </form>
                     </v-card-text>
                  </v-card>
               </v-flex>
            </v-layout>
         </v-container>
      </v-main>
   </v-app>
</template>

<script>
export default {
   name: "App",
   data() {
      return {
         username: "",
         password: "",
         isRegister: false,
         errorMessage: "",
         stateObj: {
            login: {
               name: 'Login',
               message: 'Register'
            }
         }
      };
   },
   methods: {
      login() {
         const { username } = this;
         this.$router.replace({ name: "dashboard", params: { username: username } });
      },
   },
   computed: {
      toggleMessage: function () {
         return this.isRegister ? this.stateObj.register.message : this.stateObj.login.message
      }
   }
};
</script>