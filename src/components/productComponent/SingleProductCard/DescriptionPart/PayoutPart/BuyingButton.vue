<script setup>
import BuyButtonLogo from '@/components/icons/BuyButtonLogo.vue';
import { useProductListStore } from '@/stores/listProduct.js'
import { useBacketStore } from '@/stores/backet.js'

const props = defineProps({
    amount: Number,
    productId: String,
})

const button_color = "white"
const productStore = useProductListStore()
const cartStore = useBacketStore()

function addToCart() {
    productStore.getSingleProduct(props.productId)
    .then((product) =>{
        cartStore.addProduct(product, props.amount)
    })
}
</script>

<template>
    <button class="flex flew-row bg-[#1E561E] rounded-md sm:min-h-7 max-sm:min-h-9">
        <BuyButtonLogo :color="button_color" class="my-auto ml-1"/>
        <div class="mx-2 my-auto">
            <span class="span" @click="addToCart"> ACHAT </span>
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