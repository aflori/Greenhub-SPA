<script setup>
    import { defineProps, ref } from "vue";
    import IconModify from "@/components/icons/Modify.vue";
    import { useBacketStore } from "@/stores/backet.js";

    const props = defineProps(["products"]);
</script>

<template>
    <tr class="max-w-full">
        <td class="custom-max-w ">
            <!-- daisyUI component for showing full title or not // section checkbox -->
            <label class="swap">
                <input type="checkbox" />
                <div class="swap-off custom-max-w truncate my-auto"> {{ products.product.title }} </div>
                <div class="swap-on"> {{ products.product.title }} </div>
            </label>
        </td>
        <td> <div class="grid grid-cols-2">
            <span class="mx-2">{{ products.quantity}}</span> <IconModify />
        </div> </td>
        <td>{{ products.unitPrice}}</td>
        <td>{{ products.totalPrice}}</td>
    </tr>
</template>

<style scoped>
    .custom-max-w {
        max-width: 29vw;
    }
</style>