<script setup>
    import { defineProps, ref } from 'vue';
    import AmountNumber from './PayoutPart/AmountNumber.vue';
    import BuyingButton from './PayoutPart/BuyingButton.vue';
    
    const props = defineProps({
        price: String,
        labels: Array,
        productId: String
    })

    const number_buyed = ref(1)
    function updateAmountBuyed(newAmount) {
        number_buyed.value = newAmount
    }
</script>

<template>
    <div class="sm:flex sm:flex-row sm:flex-wrap sm:justify-evenly">
        <p class="m-2"> {{ price }}</p>
        <AmountNumber :amount="number_buyed" class="m-2" @amount-change="updateAmountBuyed"/>
        <BuyingButton class="m-2" :amount="number_buyed" :product-id="productId"/>
    </div>
</template>

<style scoped>
</style>