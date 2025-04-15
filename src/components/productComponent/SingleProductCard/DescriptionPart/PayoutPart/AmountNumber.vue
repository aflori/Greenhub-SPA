<script setup>
import { defineProps, defineEmits, ref } from 'vue';
import Add_icon from '@/components/icons/Add_icon.vue';
import LessIcon from '@/components/icons/LessIcon.vue'; 

const props = defineProps({
    amount: Number
})

const value = ref(props.amount)
</script>

<template>
    <div class="flex flex-row flex_wrap">
        <LessIcon class="cursor-pointer" @click="value--" />
        <input type="text" v-model="value" min="1" class="max-w-8 px-1 text-center border border-black rounded-sm bg-[#B8BCC8]"/>
        <Add_icon class="cursor-pointer" @click="value++"/>
    </div>
</template>

<style scoped>
</style>