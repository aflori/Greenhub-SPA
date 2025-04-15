<script setup>
import { defineProps, defineEmits, ref, watch } from 'vue';
import Add_icon from '@/components/icons/Add_icon.vue';
import LessIcon from '@/components/icons/LessIcon.vue'; 

const props = defineProps({
    amount: Number
})

const localAmount = ref(props.amount)

watch(localAmount, (newValue, prevValue) => {
    if(newValue === "") {
        newValue = 0
    }

    if(typeof(newValue) === "string") {
        newValue = parseInt(newValue)
    }

    if (newValue === NaN) {
        localAmount.value = prevValue;
        return ;
    }

    if (newValue !== prevValue) {
        localAmount.value = newValue
    }
})
</script>

<template>
    <div class="flex flex-row flex_wrap">
        <LessIcon class="cursor-pointer" @click="localAmount--" />
        <input type="text" v-model="localAmount" min="1" class="max-w-10 px-1 text-center border border-black rounded-sm bg-[#B8BCC8]"/>
        <Add_icon class="cursor-pointer" @click="localAmount++"/>
    </div>
</template>

<style scoped>
</style>