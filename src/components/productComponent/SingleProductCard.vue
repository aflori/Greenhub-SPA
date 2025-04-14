<script setup>
    import { defineProps} from "vue";

    const props = defineProps({
        product: Object | null
    })
</script>

<template>
    <div v-if="product==null">

    </div>
    <div v-else>
        <h1 class="h1"> {{ product.title }} </h1>
    </div>
</template>

<style scoped>
    .h1 {
        text-align: center;
        font-family:'Times New Roman', Times, serif;
        font-size: 30px;
        font-weight: bold;
    }
</style>