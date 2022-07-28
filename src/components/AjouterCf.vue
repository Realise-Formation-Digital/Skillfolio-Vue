<!-- Page codé by Sam
Modal pour enregistrer un profil -->

<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-bind="attrs" v-on="on">ADD profil</v-btn>
      </template>
      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          Profil
        </v-card-title>

        <v-card-text>
          <v-list-item-content>
            <template>
              <validation-observer ref="observer" v-slot="{ invalid }">
                <form @submit.prevent="submit()">
                  <validation-provider v-slot="{ errors }" name="firstname" rules="required|max:50">
                    <v-text-field v-model="newcf.firstname" :counter="50" :error-messages="errors" label="Firstname" required>
                    </v-text-field>
                  </validation-provider>
                  <validation-provider v-slot="{ errors }" name="lastname" rules="required|max:50">
                    <v-text-field v-model="newcf.lastname" :counter="50" :error-messages="errors" label="Lastname" required>
                    </v-text-field>
                  </validation-provider>
                  <validation-provider v-slot="{ errors }" name="description" rules="required|max:400">
                    <v-text-field v-model="newcf.description" :counter="400" :error-messages="errors" label="Description" required>
                    </v-text-field>
                  </validation-provider>
                  <validation-provider v-slot="{ errors }" name="address" rules="required|max:100">
                    <v-text-field v-model="newcf.address" :counter="100" :error-messages="errors" label="Address" required>
                    </v-text-field>
                  </validation-provider>
                  <validation-provider v-slot="{ errors }" name="CC" rules="required|max:50">
                    <v-text-field v-model="newcf.CC" :counter="50" :error-messages="errors" label="CC" required>
                    </v-text-field>
                  </validation-provider>
                  <validation-provider v-slot="{ errors }" name="JC" rules="required|max:50">
                    <v-text-field v-model="newcf.JC" :counter="50" :error-messages="errors" label="JC" required>
                    </v-text-field>
                  </validation-provider>
                  <validation-provider v-slot="{ errors }" name="trainer" rules="required|max:50">
                    <v-text-field v-model="newcf.trainer" :counter="50" :error-messages="errors" label="Trainer" required>
                    </v-text-field>
                  </validation-provider>
                  <validation-provider v-slot="{ errors }" name="select1" rules="required">
                    <v-select v-model="newcf.type" :items="typeOptions" :error-messages="errors" label="Type"
                      data-vv-name="select" required></v-select>
                  </validation-provider>
                  <validation-provider v-slot="{ errors }" name="select2" rules="required">
                    <v-select v-model="newcf.status" :items="statusOptions" :error-messages="errors" label="Status"
                      data-vv-name="select" required></v-select>
                  </validation-provider>

                  <v-btn class="mr-4" type="submit" :disabled="invalid">
                    submit
                  </v-btn>
                  <v-btn @click="clear">
                    clear
                  </v-btn>
                </form>
              </validation-observer>
            </template>
          </v-list-item-content>
        </v-card-text>

        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="dialog = false">
            close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { required, max } from 'vee-validate/dist/rules'
import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate'


setInteractionMode('eager')

extend('required', {
  ...required,
  message: '{_field_} can not be empty',
})

extend('max', {
  ...max,
  message: '{_field_} may not be greater than {length} characters',
})

export default {
  props: {
    item: Object
  },

  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data: () => ({
    typeOptions: [
      'CF',
      'CC',
      'JC',
      'Trainer',
    ],
    statusOptions: [
        'no-delegated',
        'delegated',
        'square',
        'in recruitment progress'
    ],
    cf_post: [],
    dialog: false,
    newcf: {
      firstname: '',
      lastname: '',
      description: '',
      type: null,
      CC: '',
      JC: '',
      trainer: '',
      address: '',
      status: null
    },
  }
  ),

  methods: {
    submit() {
      this.$store.dispatch("postCf", this.newcf);
      
      console.log(this.newcf)

    },
    clear() {
      this.firstname = ''
      this.lastname = ''
      this.description = ''
      this.select1 = null
      this.select2 = null
      this.CC = ''
      this.JC = ''
      this.trainer = ''
      this.address = ''
    },
  },
}
</script>