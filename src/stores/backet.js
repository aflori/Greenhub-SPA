import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

/*
for reference, product object has to be on the form of
{
    id: Number,
    title: String,
    price: String, // format "xx.xx €" --- need to remove the 2 last characters
    categories: Array,
    description: String,
    image: String,
}
*/
export const useBacketStore = defineStore('backet', {
    state: () => ({
        listProductInBacket: {}, //sorted by id to avoid duplicates
        totalPrice: 0
    }),
    getters: {
    },
    actions: {
        addProduct(product, quantity) {
            function productAlreadyInBacket(product, backet) {
                backet[product.id] === undefined
            }

            if(productAlreadyInBacket(product, this.listProductInBacket)) {
                //pass for testing purpose
            }
            else {

                function getPriceInString(price) {
                    return price.slice(0,-2);
                }
                const unitPriceString = getPriceInString(product.price); //remove currency symbole

                const backetEntry = {
                    'product': product,
                    'quantity': quantity,
                    'unitPrice': Number(unitPriceString),
                    'totalPrice': unitPrice * quantity,
                }

                //add entry into our backet
                this.listProductInBacket[product.id] = backetEntry;
                this.totalPrice += backetEntry.totalPrice;
            }
        }
    }
});