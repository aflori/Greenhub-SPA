<script setup>
    import { ref } from 'vue';
    import ListElement from "@/components/molecules/BacketPosition.vue"

    const position = ref(1);
    const texts = [
        "panier",
        "livraisons",
        "paiement",
        "confirmation"
    ];
</script>

<template>
    <main>
        <button class="btn" @click="position++">next</button>
        <button class="btn" @click="position--">previous</button>
        <ul class="steps steps-vertical lg:steps-horizontal">
            <ListElement :text="text" :stepNumber="index+1" :position="position" v-for="(text,index) in texts"/>
            <!-- <li class="step step-neutral step-primary">panier</li>
            <li class="step step-neutral">livraisons</li>
            <li class="step step-neutral">paiement</li>
            <li class="step step-neutral">confirmation</li>
            <li class="step step-neutral">test</li>
            <li class="step step-neutral">test</li>
            <li class="step step-neutral">test</li>
            <li class="step step-neutral">test</li>
            <li class="step step-neutral">test</li>
            <li class="step step-neutral">test</li>
            <li class="step step-neutral">test</li> -->
        </ul>
    </main>
</template>
