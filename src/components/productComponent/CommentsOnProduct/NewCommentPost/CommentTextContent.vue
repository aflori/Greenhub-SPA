<script setup>
import { ref } from 'vue';

const textContent = ref("")

</script>

<template>
    <div class="flex flex-col items-center md:flex-row justify-between">
        <div>
            <span> Explications :</span>
        </div>
        <div class="div">
            <textarea class="bg-[#BEBEBE] w-full h-full  " v-model="textContent" placeholder="ton commentaire">
            </textarea>
        </div>
    </div>
</template>

<style scoped>
.div {
    border-color: black;
    border-style: solid;
    border-width: 1px;
    width: 564px;
    height: 235px;
}
</style>