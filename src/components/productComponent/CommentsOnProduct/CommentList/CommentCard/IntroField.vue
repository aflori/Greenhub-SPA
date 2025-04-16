<script setup>
import StarNote from './StarNote.vue';

const props = defineProps({
    pseudo: String,
    note: Number
})

</script>

<template>
    <div class="flex flex-col items-center">
        <strong> {{ pseudo }} </strong>
        <StarNote :note="note" />
    </div>
</template>

<style scoped>

</style>