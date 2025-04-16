<script setup>
import Star from '@/components/icons/Star.vue';
import Star_fill from '@/components/icons/Star_fill.vue';
import { ref } from 'vue';

const note = ref(1);
const emit = defineEmits(["noteChange"])

const noteValues = [1, 2, 3, 4, 5]

function updateNote(newValue) {
    note.value = newValue
    emit("noteChange", newValue)
}
</script>

<template>
 <div id="note" class="flex flex-row justify-center my-6">
    <div class="cursor-pointer" @click="updateNote(i)" v-for="i in noteValues">
        <Star_fill v-if="i <= note" />
        <Star v-else />
    </div>
 </div>
</template>

<style scoped>
</style>