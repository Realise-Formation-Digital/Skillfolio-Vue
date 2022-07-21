<template>
    <v-container>
        <v-row>
            <v-col>
                <v-card class="mx-auto" max-width="344" v-for="item of cf" :key="item.cf">
                    <v-card-text>
                        <div>{{ item.departament }}</div>
                        <p class="text-h4 text--primary">
                            {{ item.name }}
                        </p>
                        <p>{{ item.lastname }}</p>
                        <div class="text--primary">
                            {{ item.language }}<br>
                            {{ item.age }}Ans
                        </div>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn text color="deep-purple accent-4">
                            Learn More
                        </v-btn>
                    </v-card-actions>
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
    cf : [],
  }),
  async mounted () {
    await this.$store.dispatch('getCf');
    this.cf = this.$store.getters.allCf;
  }
}) 
</script>