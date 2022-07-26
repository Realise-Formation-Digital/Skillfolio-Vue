<!-- Page codé by Gab, modal qui montre la totalitée des informatin de chaque CF -->

<template>
    <div class="text-center">
        <v-dialog v-model="dialog" width="500">
            <template v-slot:activator="{ on, attrs }">
                <v-btn v-bind="attrs" v-on="on">Profil</v-btn>
            </template>
            <v-card>
                <v-card-title class="text-h5 grey lighten-2">
                    CF profil
                </v-card-title>

                <v-card-text>
                    <v-list-item-content>
                        <v-list-item-title>Type : {{ item.type}}</v-list-item-title>
                        <v-list-item-title>Firstname : {{ item.firstname }}</v-list-item-title>
                        <v-list-item-title>Lastname : {{ item.lastname }}</v-list-item-title>
                        <v-list-item-title>Description : {{ item.description }}</v-list-item-title>
                        <v-list-item-title>CC : {{ item.CC }}</v-list-item-title>
                        <v-list-item-title>JC : {{ item.JC }}</v-list-item-title>
                        <v-list-item-title>Trainer : {{ item.trainer }}</v-list-item-title>
                        <v-list-item-title>Status : {{ item.status }}</v-list-item-title>
                        <v-list-item-title>File : {{ item.File }}</v-list-item-title>
                    </v-list-item-content>
                </v-card-text>

                <v-divider></v-divider>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" @click="dialog = false">modifiere <v-icon small class="mr-2"
                            @click="editItem(item)">
                            mdi-pencil
                        </v-icon>
                    </v-btn>
                    <v-btn color="primary" @click="dialog = false">close</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>
<script>
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