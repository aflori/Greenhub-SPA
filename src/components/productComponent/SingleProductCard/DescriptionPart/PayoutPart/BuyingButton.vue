<script setup>
import BuyButtonLogo from '@/components/icons/BuyButtonLogo.vue';

const propos = defineProps({
    amount: Number,
    productId: String,
})


</script>

<template>
    <BuyButtonLogo />
</template>

<style scoped>
</style>