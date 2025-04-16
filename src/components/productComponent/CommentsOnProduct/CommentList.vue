<script setup>

const props = defineProps({
    comments: Array
})
</script>

<template>
    <div v-if="comments==[]">
        <h3> Pas de notes existantes </h3>
    </div>
    <div v-else>
        
    </div>
</template>

<style scoped>
</style>