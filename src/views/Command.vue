<script setup>
    import { ref } from 'vue';
    import ListElement from "@/components/BacketComponents/BacketPosition.vue";
    import BacketComposition from "@/components/BacketComponents/BacketComposition.vue"

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
        <BacketComposition />
        <ul class="steps steps-vertical lg:steps-horizontal">
            <ListElement :text="text" :stepNumber="index+1" :position="position" v-for="(text,index) in texts"/>
        </ul>
    </main>
</template>
