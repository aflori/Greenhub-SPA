<script setup>
import Star from '@/components/icons/Star.vue';
import Star_fill from '@/components/icons/Star_fill.vue';
import { ref } from 'vue';

const note = ref(0);

const maxNote = 5
const noteValues = [1, 2, 3, 4, 5]
</script>

<template>
 <div id="note" class="flex flex-row justify-center">
    <div v-for="i in noteValues">
        <Star_fill v-if="i <= note" />
        <Star v-else />
    </div>
 </div>
</template>

<style scoped>
</style>