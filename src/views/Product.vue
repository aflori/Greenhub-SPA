<script setup>
    import { defineProps, ref } from "vue";
    import { useProductListStore } from "@/stores/listProduct.js";

    function getIdOnGoodType(propsParam) {
        return Number(propsParam.id);
    }

    const props = defineProps({
        id: String
    })
    const store = useProductListStore();
    const product = ref({});

    const productId = getIdOnGoodType(props)
    store.getSingleProduct(productId)
        .then((productData) => {
            product.value = productData
        });

</script>

<template>
    <main>
        <!-- the v-if test the product chargement by looking into its main attribute -->
        <p v-if="product['id'] !== undefined"> {{ product.description }} </p>
    </main>
</template>
