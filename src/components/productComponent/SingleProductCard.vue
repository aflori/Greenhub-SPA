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
        <div class="flex flex-row flex-wrap justify-evenly m-3">
            <img :src="product.image" class="max-w-96 max-h-96" />
            <!-- <DescriptionPart :description="Object.description" :labels="[]" /> -->
        </div>
        <!-- <Payout :price="product.price" /> -->
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