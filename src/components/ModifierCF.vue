<template>
    <v-btn color="primary" @click="editItem(item)">modifier</v-btn>
</template>
<script>
import axios from "axios"

export default {
    methods: {
        updateProduct() {
            axios.put('https://2g5gpatwek.preview.infomaniak.website/api/profiles/' + this.item.id, this.item)
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