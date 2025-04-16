<script setup>
import CommentCard from './CommentList/CommentCard.vue';

const props = defineProps({
    comments: Array
})
</script>

<template>
    <div v-if="comments==[]">
        <h3> Pas de notes existantes </h3>
    </div>
    <div v-else>
        <CommentCard :comment="comment" v-for="comment in comments" />
    </div>
</template>

<style scoped>
</style>