<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    labels: Array
})
</script>

<template>
    <div class="flex flex_row flex-wrap justify-center">
        <img :src="label_image" v-for="label_image in labels" class="img"/>
    </div>
</template>

<style scoped>
.img {
    width: 40px;
    height: 40px;
    margin: 10px;
}
</style>