<script setup>
    import BasicProductCard from "../components/molecules/BasicProductCard.vue";
    const products = [
    {
        id: 1,
        title: "Blue shoes!",
        price: '32.5 €',
        categories: ['toto'],
        description: 'If a dog chews shoes whose shoes does he choose?',
        image: 'https://images.pexels.com/photos/19090/pexels-photo.jpg'
    },
    {
        id: 2,
        title: "White shoes!",
        price: '55.5 €',
        categories: ['tata', 'titi'],
        description: 'If a cat chews shoes whose shoes does he choose?',
        image: 'https://images.pexels.com/photos/2529147/pexels-photo-2529147.jpeg'
    }];

</script>

<template>
    <main class="flex flex-row flex-wrap">
        <BasicProductCard v-bind="product" v-for="product in products"/>
    </main>
</template>
