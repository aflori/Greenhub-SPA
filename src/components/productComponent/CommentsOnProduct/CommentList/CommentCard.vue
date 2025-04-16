<script setup>
    

    const props = defineProps({
        comment: Object
    })
</script>

<template>
    <div>
        <!-- <IntroField :pseudo="comment.pseudo" :note="comment.note" /> -->
        <p>
            {{ comment.comment }}
        </p>
    </div>
</template>

<style scoped>
</style>
