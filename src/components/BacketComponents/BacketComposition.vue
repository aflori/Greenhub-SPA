<script setup>
    import { useBacketStore } from "@/stores/backet.js";

    const backetData = useBacketStore();
    const products = backetData.listProductInBacket[3]; //read-only - to modify with methods

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
            <tbody>
                <tr>
                    <td>{{ products.product.title }}</td>
                    <td>{{ products.quantity}}</td>
                    <td>{{ products.unitPrice}}</td>
                    <td>{{ products.totalPrice}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>