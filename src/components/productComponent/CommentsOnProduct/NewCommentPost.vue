<script setup>
import NoteInStar from './NewCommentPost/NoteInStar.vue';
import CommentTextContent from './NewCommentPost/CommentTextContent.vue';
import ButtonAddComment from './NewCommentPost/ButtonAddComment.vue';
import { ref } from 'vue';

const note = ref(1)
const commentContent = ref("")

function updateNote(newNote) {
    note.value = newNote
}
function updateComment(newComment) {
    commentContent.value = newComment
}
</script>

<template>
    <form class="flex flex-col">
        <h3 class="text-center"> poster une nouvelle note </h3>
        <NoteInStar @note-change="updateNote"/>
        <CommentTextContent @comment-change="updateComment"/>
        <ButtonAddComment class="self-end mb-5 pb-1" @click.prevent="addComment()" />
    </form>
</template>

<style scoped>
</style>