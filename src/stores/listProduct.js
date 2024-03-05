import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import axios from 'axios';

const apiURL = "https://fakestoreapi.com/products";

export const useProductListStore = defineStore('productList', () => {
    const products = ref([]);

    async function load() {
        try {

            await axios.get(apiURL).then((result) => {
                return result.data;
            }).then((data) => {
                console.log(data);
                products.value = data;
            });
        }
        catch {
            //we do nothing
        }
    };

    function getProducts() {
        if(products.value.length == 0) {
            load();
        }

        return products;
    };

    return { products, load, getProducts };
})