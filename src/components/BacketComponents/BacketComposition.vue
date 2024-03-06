<script setup>
    import { useBacketStore } from "@/stores/backet.js";

    const backetData = useBacketStore();
    const products = backetData.listProductInBacket; //read-only
</script>

<template>
    <p> successfully imported </p>
</template>