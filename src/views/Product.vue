<script setup>
    import { defineProps, ref } from "vue";
    import { useProductListStore } from "@/stores/listProduct.js";
    import BraketInput from "@/components/molecules/BracketInput.vue";
    function getIdOnGoodType(propsParam) {
        return Number(propsParam.id);
    }

    const props = defineProps({
        id: String
    })
    const store = useProductListStore();
    const product = ref({});

    const productId = getIdOnGoodType(props)
    store.getSingleProduct(productId)
        .then((productData) => {
        product.value = productData
    });

</script>

<template>
    <main>
        <!-- the v-if test the product chargement by looking into its main attribute -->
        <div v-if="product['id'] !== undefined">
            <div class="card lg:card-side bg-base-100 shadow-xl">
              <figure><img :src="product.image" alt="Album"/></figure>
              <div class="card-body">
                <h2 class="card-title">{{ product.title }}</h2>
                <p> {{ product.description }}</p>
                <div class="card-actions justify-between">
                    <div> <p> {{ product.price }} </p> </div>
                    <BraketInput />
                    <button class="btn btn-primary">Acheter</button>
                </div>
              </div>
            </div>
        </div>
    </main>
</template>
