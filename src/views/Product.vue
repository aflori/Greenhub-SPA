<script setup>
    import { defineProps } from "vue";
    import { useProductListStore } from "@/stores/listProduct.js";

    function getIdOnGoodType(propsParam) {
        return Number(propsParam.id);
    }

    const props = defineProps({
        id: String
    })
    const store = useProductListStore();

    const productDatas = store.getSingleProduct(getIdOnGoodType(props));

    console.log(productDatas);
</script>

<template>
    <main>
        <!-- <p> {{ productDatas }} </p> -->
    </main>
</template>
