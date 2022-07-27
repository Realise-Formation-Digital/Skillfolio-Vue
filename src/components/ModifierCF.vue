<template>
    <div>
        <v-dialog v-model="dialog" width="500">
            <template v-slot:activator="{ on, attrs }">
                <v-btn v-bind="attrs" v-on="on" color="primary" @click="editItem(profil)">modifier</v-btn>
            </template>
            <v-card>
                <v-card-title class="text-h5 grey lighten-2">
                    CF profil
                </v-card-title>

                <v-card-text>
                    <v-list-item-content>
                        <v-text-field v-model="profil.id"></v-text-field>
                        <v-text-field v-model="profil.type"></v-text-field>
                        <v-text-field v-model="profil.firstname"></v-text-field>
                        <v-text-field v-model="profil.lastname"></v-text-field>
                        <v-text-field v-model="profil.description"></v-text-field>
                        <v-text-field v-model="profil.CC"></v-text-field>
                        <v-text-field v-model="profil.JC"></v-text-field>
                        <v-text-field v-model="profil.trainer"></v-text-field>
                        <v-text-field v-model="profil.status"></v-text-field>
                    </v-list-item-content>
                </v-card-text>

                <v-divider></v-divider>
                <v-card-actions>
                    <v-spacer></v-spacer>
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
            dialog: false,
            profil: {
                id: "",
                type : "",
                firstname : "",
                lastname :  "",
                description: "",
                CC: "",
                JC: "",
                trainer: "",
                status: ""
            }
        }
        
    },
    editItem (profil) {
        this.editedIndex = this.desserts.indexOf(profil)
        this.editedItem = Object.assign({}, profil)
        this.dialog = true
    },
    hods: {
        updateProduct() {
            axios.put('https://2g5gpatwek.preview.infomaniak.website/api/profiles/' + this.profil.id, this.profil)
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