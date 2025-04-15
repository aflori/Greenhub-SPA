<script setup>
    import { defineProps } from 'vue';

    const props = defineProps({
        description: String,
        labels: Array
    })

</script>

<template>
    <div class="flex flex-col items-center max-w-96">
        <p class="p"> {{ description }}</p>
        <div class="flex flex_row flex-wrap justify-center max-sm:hidden">
            <img :src="label_image" v-for="label_image in labels" class="img"/>
        </div>
    </div>
</template>

<style scoped>
.p {
    text-align: justify;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-size: 15px;
    line-height: 25px;
}
.img {
    width: 35px;
    height: 35px;
}
</style>