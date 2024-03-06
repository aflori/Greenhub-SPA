<script setup>
    import { defineProps } from "vue";

    const props = defineProps(["products"]);
</script>

<template>
    <tr>
        <td>{{ products.product.title }}</td>
        <td>{{ products.quantity}}</td>
        <td>{{ products.unitPrice}}</td>
        <td>{{ products.totalPrice}}</td>
    </tr>
</template>