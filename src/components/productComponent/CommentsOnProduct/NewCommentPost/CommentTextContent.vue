<script setup>
import { ref, watch } from 'vue';

const emit = defineEmits(["commentChange"])

const textContent = ref("")

watch(textContent, (oldValue, newValue) => {
    emit("commentChange", textContent.value)
})

</script>

<template>
    <div class="flex flex-col items-center md:flex-row justify-between mx-20 pb-5">
        <div>
            <span> Explications :</span>
        </div>
        <div class="div">
            <textarea class="bg-[#BEBEBE] w-full h-full" v-model="textContent" placeholder="ton commentaire">
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