<script setup>
import StarNote from './StarNote.vue';

const props = defineProps({
    pseudo: String,
    note: Number
})

</script>

<template>
    <div>
        <strong> {{ pseudo }} </strong>
        <StarNote :note="note" />
    </div>
</template>

<style scoped>

</style>