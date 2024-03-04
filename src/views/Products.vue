<script setup>
    const listArticles = [
    {
        id: 1,
        title: "Blue shoes!",
        price: '32.5 €',
        category: ['toto'],
        description: 'If a dog chews shoes whose shoes does he choose?',
        image: 'https://images.pexels.com/photos/19090/pexels-photo.jpg'
    },
    {
        id: 2,
        title: "White shoes!",
        price: '55.5 €',
        category: ['titi'],
        description: 'If a cat chews shoes whose shoes does he choose?',
        image: 'https://images.pexels.com/photos/2529147/pexels-photo-2529147.jpeg'
    }];

</script>

<template>
    <main>
        <div class="card w-96 bg-base-100 shadow-xl p-4 bg-primary">
            <h2 class="card-title">
                Shoes!
                <div class="badge badge-secondary">NEW</div>
            </h2>
            <figure>
                <img src="https://images.pexels.com/photos/19090/pexels-photo.jpg" alt="Shoes" />
            </figure>
            <div class="card-body">
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div class="card-actions justify-end">
                    <div class="badge badge-outline">Fashion</div>
                    <div class="badge badge-outline">Products</div>
                </div>
            </div>
        </div>
    </main>
</template>
