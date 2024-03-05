<script setup>

    const props = defineProps({
        id: Number,
        title: String, //--
        price: String,
        categories: Array,
        description: String, //--
        image: String, // --
    });
</script>

<template>
    <div class="card w-96 bg-base-100 shadow-xl p-4 m-2 bg-primary">
        <h2 class="card-title">
            {{ props.title }}
            <!-- <div class="badge badge-secondary">NEW</div> -->
        </h2>
        <figure>
            <img :src="props.image" :alt="props.title" />
        </figure>
        <div class="card-body">
            <p>{{ props.description }}</p>
            <div class="card-actions justify-end">
                <div class="badge badge-outline" v-for="category in categories">{{category}}</div>
            </div>
        </div>
    </div>
</template>