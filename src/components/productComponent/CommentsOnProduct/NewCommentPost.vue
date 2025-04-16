<script setup>
import NoteInStar from './NewCommentPost/NoteInStar.vue';
import { ref } from 'vue';

const note = ref(0)
const commentContent = ref("")
</script>

<template>
    <form>
        <h3 class="text-center"> poster une nouvelle note </h3>
        <NoteInStar />
        <!-- <CommentTextContent /> -->
        <!-- <ButtonAddComment @click.prevent="addComment()" /> -->
    </form>
</template>

<style scoped>
</style>