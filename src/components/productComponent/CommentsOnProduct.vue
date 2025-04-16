<script setup>

const props = defineProps({ comments: Array | null})


</script>

<template>
    <div v-if="comments===null"></div>
    <div v-else class="div">

    </div>
</template>

<style scoped>
.div {
    background-color: rgba(249, 167, 4, 0.3);
    min-height: 10px;
}
</style>