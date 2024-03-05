<script setup>
    import { defineProps } from "vue";

    const props = defineProps({
        id: String
    })
</script>

<template>
    <main>
        <p> {{ id }} </p>
    </main>
</template>
