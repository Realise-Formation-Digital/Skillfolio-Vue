<template>
    <v-container class="grey lighten-5">
        <v-row no-gutters>
            <v-col v-for="n in 3" :key="n" cols="12" sm="4">
                <v-card class="mx-auto noir" width="20rem" v-for="item of cf" :key="item.cf">
                    <li>{{ item.departament }}
                        <b class="text-h4 text--primary">
                            {{ item.name }}
                        </b>
                        <b>{{ item.lastname }}</b>
                            {{ item.language }}<br>
                            {{ item.age }}Ans
                        <v-card-actions>
                            <v-btn text color="deep-purple accent-4">
                                Learn More
                            </v-btn>
                        </v-card-actions>
                    </li>
                </v-card>
                </v-col>
        </v-row>
    </v-container>
</template>
 
<script>
import Vue from "vue";

export default Vue.extend({
    name: "CF",
    data: () => ({
        cf: [],
        alignments: [
            'start',
            'center',
            'end',
        ],
    }),
    async mounted() {
        await this.$store.dispatch('getCf');
        this.cf = this.$store.getters.allCf;
    }
}) 
</script>
<style scoped lang="scss">
.noir {
    background-color: rgb(105, 105, 105);
    margin: 1rem;
}
</style>