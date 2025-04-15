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
        <h2> test 2 </h2>
    </div>
</template>

<style scoped>
.p {
    text-align: justify;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-size: 15px;
    line-height: 25px;
}
</style>