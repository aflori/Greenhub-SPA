<script setup>
    import { defineProps, ref } from 'vue';
    import AmountNumber from './PayoutPart/AmountNumber.vue';
    import BuyingButton from './PayoutPart/BuyingButton.vue';
    import LabelPart from './LabelPart.vue';

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
    <div class="sm:flex sm:flex-row sm:flex-wrap sm:justify-evenly max-sm:grid max-sm:grid-cols-2 max-sm:grid-rows-2">
        <div class="m-auto max-sm:row-start-1 max-sm:col-start-1">
            <p class="m-2"> {{ price }}</p>
        </div>
        <LabelPart :labels="labels" class="max-sm:m-auto sm:hidden row-start-1 col-start-2"/>
        <AmountNumber :amount="number_buyed" class="max-sm:m-auto m-2 max-sm:row-start-2 max-sm:col-start-1" @amount-change="updateAmountBuyed"/>
        <BuyingButton class="max-sm:m-auto m-2 max-sm:row-start-2 max-sm:col-start-2" :amount="number_buyed" :product-id="productId"/>
    </div>
</template>

<style scoped>

</style>