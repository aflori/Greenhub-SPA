<script setup>
    import { useBacketStore } from "@/stores/backet.js";
    import { ref } from 'vue';
    import BacketLine from "./BacketElementInArray.vue";

    const backetData = useBacketStore();

</script>

<template>
    <div class="overflow-x-auto">
          <table class="table">
            <!-- head -->
            <thead>
              <tr>
                <th>produit</th>
                <th>quantité</th>
                <th>prix unitaire</th>
                <th>prix total</th>
              </tr>
            </thead>

            <BacketLine :products="product" v-for="product in backetData.listProductInBacket"/>

        </table>
        <hr>
        <strong> total: {{ backetData.totalPrice }} €</strong>
    </div>
</template>

<style scoped>
    hr {
        background-color: black;
        height: 2px;

    }
</style>