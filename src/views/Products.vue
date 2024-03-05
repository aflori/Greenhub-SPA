<script setup>
    import BasicProductCard from "@/components/molecules/BasicProductCard.vue";
    import { useProductListStore } from "@/stores/listProduct.js";

    const list = useProductListStore();
    list.getProducts();
</script>

<template>
    <main class="flex flex-row flex-wrap">

        <BasicProductCard :product="product" v-for="product in list.products"/>

    </main>
</template>
