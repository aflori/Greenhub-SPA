<script setup>
    import { ref } from "vue";
    const numberOfProduct = ref(1);

    function updateValue(event) {
        const tag = event.target
        const newValue = tag.value;

        if (newValue < 1) {
            tag.value = numberOfProduct.value;
            return ;
        }
        else {
            numberOfProduct.value = Number(newValue);
        }


    }
</script>

<template>
    <label class="form-control w-full max-w-sm flex flex-row">
        <span class="label-text"></span>
        <input type="number" min="1" :value="numberOfProduct" @input="updateValue" class="input input-bordered w-full max-w-xs" />
    </label>
</template>