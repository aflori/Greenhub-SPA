<script setup>
    import { defineProps, ref } from 'vue';
    import AmountNumber from './PayoutPart/AmountNumber.vue';

    const props = defineProps({
        price: String,
        labels: Array
    })

    const number_buyed = ref(1)
</script>

<template>
    <div class="sm:flex sm:flex-row sm:flex-wrap sm:justify-evenly">
        <p class="m-2"> {{ price }}</p>
        <AmountNumber :amount="number_buyed" class="m-2" />
        <!-- <BuyingButtun class="m-2" /> -->
    </div>
</template>

<style scoped>
</style>