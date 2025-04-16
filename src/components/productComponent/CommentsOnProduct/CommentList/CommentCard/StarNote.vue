<script setup>
import Star_fill from '@/components/icons/Star_fill.vue';
import Star from '@/components/icons/Star.vue';

const props = defineProps({
    note: Number
})

const possibleNotes= [1,2,3,4,5]
</script>

<template>
    <div class="flex flex-row justify-between max-w-32">
        <div v-for="i in possibleNotes">
            <Star_fill v-if="i<=note" />
            <Star v-else />
        </div>
    </div>
</template>

<style scoped>
</style>