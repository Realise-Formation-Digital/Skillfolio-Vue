<template>
    <div class="text-center">
        <v-dialog v-model="dialog" width="500">
            <template v-slot:activator="{ on, attrs }">
                <v-btn v-bind="attrs" v-on="on">Ajouter un cf</v-btn>
            </template>
            <v-card>
                <v-card-title class="text-h5 grey lighten-2">
                    Ajouter un CF
                </v-card-title>

                <v-card-text>
                    <validation-observer ref="observer" v-slot="{ invalid }">
                        <form @submit.prevent="submit">
                            <validation-provider v-slot="{ errors }" name="Name" rules="required|max:10">
                                <v-text-field v-model="name" :counter="10" :error-messages="errors" label="Name"
                                    required></v-text-field>
                            </validation-provider>
                            <validation-provider v-slot="{ errors }" name="phoneNumber" :rules="{
                                required: true,
                                digits: 7,
                                regex: '^(71|72|74|76|81|82|84|85|86|87|88|89)\\d{5}$'
                            }">
                                <v-text-field v-model="phoneNumber" :counter="7" :error-messages="errors"
                                    label="Phone Number" required></v-text-field>
                            </validation-provider>
                            <validation-provider v-slot="{ errors }" name="email" rules="required|email">
                                <v-text-field v-model="email" :error-messages="errors" label="E-mail" required>
                                </v-text-field>
                            </validation-provider>
                            <validation-provider v-slot="{ errors }" name="select" rules="required">
                                <v-select v-model="select" :items="items" :error-messages="errors" label="Select"
                                    data-vv-name="select" required></v-select>
                            </validation-provider>
                            <validation-provider v-slot="{ errors }" rules="required" name="checkbox">
                                <v-checkbox v-model="checkbox" :error-messages="errors" value="1" label="Option"
                                    type="checkbox" required></v-checkbox>
                            </validation-provider>

                            <v-btn class="mr-4" type="submit" :disabled="invalid">
                                submit
                            </v-btn>
                            <v-btn @click="clear">
                                clear
                            </v-btn>
                        </form>
                    </validation-observer>
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
import Vue from 'vue';
import VeeValidate from 'vee-validate';
Vue.use(VeeValidate);
Vue.use(Vue);
export default {
    props: {
        item: Object
    },
    data() {
        return {
            dialog: false,
        }
    },
}
</script>