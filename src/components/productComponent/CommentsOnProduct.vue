<script setup>
import NewCommentPost from './CommentsOnProduct/NewCommentPost.vue';

const emit = defineEmits(["createComment"])
const props = defineProps({ comments: Array | null})

function createComment(commentData) {
    emit("createComment", commentData)
}
</script>

<template>
    <div v-if="comments===null"></div>
    <div v-else class="div rounded-md">
        <!-- <CommentList /> -->
        <NewCommentPost @create-comment="createComment"/>
    </div>
</template>

<style scoped>
.div {
    background-color: rgba(249, 167, 4, 0.3);
    /* min-height: 100px; */
}
</style>