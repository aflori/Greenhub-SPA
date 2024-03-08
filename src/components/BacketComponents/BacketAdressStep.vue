<script setup>
    import { ref,  defineEmits } from 'vue';

    const canSubmitForm = ref(false);
    const emit = defineEmits([ 'next-step' ]);

    function emitIfFormIsValid() {
        if(canSubmitForm.value) {
            emit("next-step")
        }
    }
</script>

<template>
    <form>

        <button type="submit" class="btn" @click.prevent="emitIfFormIsValid()">
            valider
        </button>
        <button type="reset" class="btn" @click="$emit('prev-step')">
            retour
        </button>
    </form>
</template>
