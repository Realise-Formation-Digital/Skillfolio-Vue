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
                    <p>Name : {{ item.year }}</p>
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