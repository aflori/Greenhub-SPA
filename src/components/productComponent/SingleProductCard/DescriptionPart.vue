<script setup>
    import { defineProps } from 'vue';
    import LabelPart from "./DescriptionPart/LabelPart.vue";
    import PayoutPart from "./DescriptionPart/PayoutPart.vue";
import Product from '@/views/Product.vue';

    const props = defineProps({
        description: String,
        labels: Array,
        price: String,
        productId: String
    })

    // eventually update description for short/full version on mobile screen
</script>

<template>
    <div class="flex flex-col items-center max-w-96">
        <p class="p"> {{ description }}</p>
        <LabelPart :labels="labels" class="max-sm:hidden"/>
        <PayoutPart :price="price" :labels="labels" :product-id="productId"/>
    </div>
</template>

<style scoped>
.p {
    text-align: justify;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-size: 14px;
}
</style>