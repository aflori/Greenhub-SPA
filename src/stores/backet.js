import { ref, computed } from 'vue';
import { defineStore } from 'pinia';


export const useBacketStore = defineStore('backet', {
    state: () => ({
        listProductInBacket: [],
        totalPrice: 0
    }),
    getters: {

    },
    actions: {

    }
});