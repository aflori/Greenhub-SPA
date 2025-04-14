<script setup>
    import { defineProps, ref } from "vue";
    import { useProductListStore } from "@/stores/listProduct.js";
    import { useBacketStore } from "@/stores/backet.js";
    import BaketInput from "@/components/molecules/BacketInput.vue";
    function getIdOnGoodType(propsParam) {
        return Number(propsParam.id);
    }

    const props = defineProps({
        id: String
    })
    const productStore = useProductListStore();
    const product = ref(undefined)
    productStore.getSingleProduct(props.id).then( (value) => {
            product.value = value
        }
    )
</script>

<template>
    <main class="main-center">
        
        
    </main>
</template>

<style scoped>
    .main-center {
        max-width: 1100px;
        margin: auto;
    }
</style>