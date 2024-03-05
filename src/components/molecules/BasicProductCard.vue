<script setup>
    import { RouterLink } from 'vue-router'

    const props = defineProps({
        product: Object
        /* contains:
        id: Number,
        title: String,
        price: String,
        categories: Array,
        description: String,
        image: String,
        */
    });
</script>

<template>
    <div class="card w-96 bg-base-100 shadow-xl p-4 m-2 bg-primary">
        <RouterLink :to="{name: 'product', params: {id: product.id}}" class="">
            <h2 class="card-title">
                {{ product.title }}
                <!-- <div class="badge badge-secondary">NEW</div> -->
            </h2>
            <figure>
                <img :src="product.image" :alt="product.title" />
            </figure>
        </RouterLink>
        <div class="card-body">
            <p>{{ product.description }}</p>
            <div class="card-actions justify-end flex">
                <p>{{product.price}}</p>
                <div class="badge badge-outline" v-for="category in product.categories">{{category}}</div>
            </div>
        </div>
    </div>
</template>