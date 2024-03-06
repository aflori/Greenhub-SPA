<script setup>
    import { ref } from 'vue';
    import ListElement from "@/components/molecules/BacketPosition.vue"
    const position = ref(1);
</script>

<template>
    <main>
        <button class="btn" @click="position++">next</button>
        <button class="btn" @click="position--">previous</button>
        <p>{{position}}</p>
        <ul class="steps steps-vertical lg:steps-horizontal">
            <ListElement />
            <!-- <li class="step step-neutral step-primary">panier</li> -->
            <li class="step step-neutral">livraisons</li>
            <li class="step step-neutral">paiement</li>
            <li class="step step-neutral">confirmation</li>
            <li class="step step-neutral">test</li>
            <li class="step step-neutral">test</li>
            <li class="step step-neutral">test</li>
            <li class="step step-neutral">test</li>
            <li class="step step-neutral">test</li>
            <li class="step step-neutral">test</li>
            <li class="step step-neutral">test</li>
        </ul>
    </main>
</template>
