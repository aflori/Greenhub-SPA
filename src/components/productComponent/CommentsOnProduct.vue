<script setup>

const props = defineProps({ comments: Array | null})


</script>

<template>
    <div v-if="comments===null"></div>
    <div v-else class="div rounded-md">
        <!-- <CommentList /> -->
        <NewCommentPost />
    </div>
</template>

<style scoped>
.div {
    background-color: rgba(249, 167, 4, 0.3);
    /* min-height: 100px; */
}
</style>