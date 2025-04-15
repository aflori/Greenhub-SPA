<script setup>
    import { defineProps} from "vue";
    import DescriptionPart from "./SingleProductCard/DescriptionPart.vue";

    const props = defineProps({
        product: Object | null
    })
    const sample_label = 'https://e7.pngegg.com/pngimages/940/882/png-clipart-green-dot-recycling-symbol-logo-label-recycling-symbol-angle-label.png'
    const sample_labels = [sample_label, sample_label]
</script>

<template>
    <div v-if="product==null">

    </div>
    <div v-else>
        <h1 class="h1"> {{ product.title }} </h1>
        <div class="flex flex-row flex-wrap justify-evenly m-3">
            <img :src="product.image" class="max-w-96 max-h-96" />
            <DescriptionPart :description="product.description" :labels="sample_labels" :price="product.price"/>
        </div>
    </div>
</template>

<style scoped>
    .h1 {
        text-align: center;
        font-family:'Times New Roman', Times, serif;
        font-size: 30px;
        font-weight: bold;
    }
</style>