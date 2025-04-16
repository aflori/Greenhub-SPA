<script setup>
    import IntroField from './CommentCard/IntroField.vue';

    const props = defineProps({
        comment: Object
    })
</script>

<template>
    <div class="flex flex-col md:flex-row md:mx-20 mx-5 pt-10 ">
        <IntroField class="self-center":pseudo="comment.pseudo" :note="comment.note" />
        <div class="ml-14"> <p class="p">
            {{ comment.comment }}
        </p> </div>
    </div>
</template>

<style scoped>
.p {
  text-align: justify;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-size: 14px;
}
</style>
