<script setup>
    import { defineProps } from "vue";
    import IconModify from "@/components/icons/Modify.vue";
    import { useBacketStore } from "@/stores/backet.js";

    const props = defineProps(["products"]);
</script>

<template>
    <tr>
        <td> {{ products.product.title }} </td>
        <td> <div class="grid grid-cols-2">
            <span class="mx-2">{{ products.quantity}}</span> <IconModify />
        </div> </td>
        <td>{{ products.unitPrice}}</td>
        <td>{{ products.totalPrice}}</td>
    </tr>
</template>