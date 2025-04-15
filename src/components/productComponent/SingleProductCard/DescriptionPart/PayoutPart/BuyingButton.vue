<script setup>
import BuyButtonLogo from '@/components/icons/BuyButtonLogo.vue';

const propos = defineProps({
    amount: Number,
    productId: String,
})

const button_color = "white"

</script>

<template>
    <button class="flex flew-row bg-[#1E561E] rounded-md">
        <BuyButtonLogo :color="button_color" class="my-auto ml-1"/>
        <div class="mx-2">
            <span class="span"> ACHAT </span>
        </div>
    </button>
</template>

<style scoped>
.span {
    text-align: center;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-size: 13px;
    font-weight: bold;
    color: white;

}
</style>