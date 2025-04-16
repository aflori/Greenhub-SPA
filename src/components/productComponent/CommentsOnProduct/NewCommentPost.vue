<script setup>
import NoteInStar from './NewCommentPost/NoteInStar.vue';
import CommentTextContent from './NewCommentPost/CommentTextContent.vue';
import { ref } from 'vue';

const note = ref(0)
const commentContent = ref("")

function updateNote(newNote) {
    note.value = newNote
}
</script>

<template>
    <form>
        <h3 class="text-center"> poster une nouvelle note </h3>
        <NoteInStar @note-change="updateNote"/>
        <CommentTextContent />
        <!-- <ButtonAddComment @click.prevent="addComment()" /> -->
    </form>
</template>

<style scoped>
</style>