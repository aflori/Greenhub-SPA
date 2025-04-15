<script setup>
    import { defineProps } from 'vue';
    import LabelPart from "./DescriptionPart/LabelPart.vue";

    const props = defineProps({
        description: String,
        labels: Array
    })

    // eventually update description for chort/full version on mobile screen
</script>

<template>
    <div class="flex flex-col items-center max-w-96">
        <p class="p"> {{ description }}</p>
        <LabelPart :labels="labels" class="max-sm:hidden"/>
    </div>
</template>

<style scoped>
.p {
    text-align: justify;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-size: 14px;
}
</style>