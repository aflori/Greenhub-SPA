<script setup>
import CommentCard from './CommentList/CommentCard.vue';

const props = defineProps({
    comments: Array
})
</script>

<template>
    <div v-if="comments.length == 0" class="pl-12 pt-2">
        <small class="small"> Pas de notes existantes </small>
    </div>
    <div v-else>
        <CommentCard :comment="comment" v-for="comment in comments" />
    </div>
</template>

<style scoped>
.small {
    text-align: center;
    font-size: 12px;
}
.div {
    width: fit-content;
}
</style>