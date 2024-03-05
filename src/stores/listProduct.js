import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import axios from 'axios';

const apiURL = "https://fakestoreapi.com/products";

function changeToWantedFormat(requestResult) {
    function changeOneObject(product) {
        /*
            received:
            {
                id: Number,
                title: String,
                price: Number,
                description: String,
                category: String,
                image: String,
                rating: Object { rate: Number, count: Number }
            }

            wanted:
            {
                id: Number,
                title: String,
                price: String, //have to convert price from argument
                categories: Array, //have to create an array of only 1 category from argument
                description: String,
                image: String,
            }
        */
        product.categories = [ product.category ]; //conversion into an array
        product.price = product.price.toString(); //conversion into a String
        product.price += " €"; //currency
    }

    for(let i = 0; i<requestResult.length; i++) {
        changeOneObject(requestResult[i]);
    }
}

export const useProductListStore = defineStore('productList', () => {
    const products = ref([]);

    async function load() {
        try {

            await axios.get(apiURL).then((result) => {
                return result.data;
            }).then((data) => {
                changeToWantedFormat(data);
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