<script setup>
    import { defineProps, ref } from "vue";
    import { useProductListStore } from "@/stores/listProduct.js";
    import SingleProductCard from "@/components/productComponent/SingleProductCard.vue";
    import CommentsOnProduct from "@/components/productComponent/CommentsOnProduct.vue";


    const props = defineProps({
        id: String
    })
    const productStore = useProductListStore();
    const product = ref(null)
    const comments = ref(null)
    productStore.getSingleProduct(props.id).then( (value) => {
            product.value = value
            comments.value = value.comments
        }
    )

    function createComment(commentData) {
        comments.value.push(commentData)
    }
</script>

<template>
    <main class="main-center">
        <SingleProductCard :product="product" />
        <CommentsOnProduct :comments="comments" @create-comment="createComment"/>
    </main>
</template>

<style scoped>
    .main-center {
        max-width: 1100px;
        margin: auto;
    }
</style>