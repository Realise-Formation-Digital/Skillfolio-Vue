<template>
    <div>
        <v-dialog v-model="dialog" width="500">
            <template v-slot:activator="{ on, attrs }">
                <v-btn v-bind="attrs" v-on="on" color="primary" >modifier</v-btn>
            </template>
            <v-card>
                <v-card-title class="text-h5 grey lighten-2">
                    CF profil
                </v-card-title>

                <v-card-text>
                    <v-list-item-content>
                        <v-text-field v-model="profil.id" placeholder="id"></v-text-field>
                        <v-text-field v-model="profil.firstname" placeholder="firstname"></v-text-field>
                        <v-text-field v-model="profil.lastname" placeholder="lastname"></v-text-field>
                        <v-text-field v-model="profil.description" placeholder="description"></v-text-field>
                        <v-text-field v-model="profil.CC" placeholder="CC"></v-text-field>
                        <v-text-field v-model="profil.JC" placeholder="JC"></v-text-field>
                        <v-text-field v-model="profil.trainer" placeholder="trainer"></v-text-field>
                        <v-select v-model="profil.type" :items="typeOptions" placeholder="type"></v-select>
                        <v-select v-model="profil.status" :items="statusOptions" placeholder="status"></v-select>
                    </v-list-item-content>
                </v-card-text>

                <v-divider></v-divider>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn @click="updateProfil(profil)" color="primary">Update</v-btn>
                    <v-btn color="primary" @click="dialog = false">close</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>
<script>
import axios from "axios"

export default {
    data() {

        return {
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
            dialog: false,
            profil: {
                id: "",
                firstname: "",
                lastname: "",
                description: "",
                CC: "",
                JC: "",
                trainer: "",
                type: null,
                status: null,
            }
        }

    },
    editItem(profil) {
        this.editedIndex = this.desserts.indexOf(profil)
        this.editedItem = Object.assign({}, profil)
        this.dialog = true
    },
    methods: {
        updateProfil() {
            // headers {authorisasion:"https://2g5gpatwek.preview.infomaniak.website/api/Profiles"}]
            axios.put('https://2g5gpatwek.preview.infomaniak.website/api/profiles' + this.profil.id, this.profil)
                .then(response => {
                    console.log('response', response);
                })
                .catch(function (error) {
                    console.log(error.response)
                })
        }
    }
}
</script>