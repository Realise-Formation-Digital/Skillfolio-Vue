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
                    <v-list-item-title>ID : {{ item.id}}</v-list-item-title>
                    <v-list-item-title>Name : {{ item.name }}</v-list-item-title>
                    <v-list-item-title>Lastname : {{ item.lastname }}</v-list-item-title>
                    <v-list-item-title>Age : {{ item.age }}</v-list-item-title>
                    <v-list-item-title>Year : {{ item.year }}</v-list-item-title>
                    <v-list-item-title>Departement : {{ item.departament }}</v-list-item-title>
                    <v-list-item-title>Language : {{ item.language }}</v-list-item-title>
                    <v-list-item-title>Research : {{ item.Research }}</v-list-item-title>
                    <v-list-item-title>Type : {{ item.type }}</v-list-item-title>
                    <v-list-item-title>ID Job Coach : {{ item.idJC }}</v-list-item-title>
                    <v-list-item-title>ID Conseiller Coach : {{ item.idCC }}</v-list-item-title>
                    <v-list-item-title>ID Formateur : {{ item.idTeacher }}</v-list-item-title>
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