<template>
    <h3>Product List</h3>
    <div>
        <router-link :to="`/product-create`" class="text-success">
            Create Product
        </router-link>
    </div>
    <table class="table table-striped">
        <thead>
            
            <tr >
                <td>ID</td>
                <td><i class="fa-solid fa-user"></i>Name</td>
                <td>category</td>
                <td>description</td>
                <td>price</td>
                <td>discount</td>
                <td>quantity</td>
                <td>photo</td>
                <td>Actions</td>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in products" :key="item.id">
                <td>{{ item.id }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.category_id }}</td>
                <td>{{ item.description }}</td>
                <td>{{ item.price }}</td>
                <td>{{ item.discount }}</td>
                <td>{{ item.quantity }}</td>
                <td>
                    <img v-if="item.photo == null" :src="`https://placehold.co/600x400`" alt="product" class="rounded-circle me-2" width="60">
                    <img v-else :src="baseURL+ item.photo" alt="product" class="rounded-circle me-2" width="60">
                </td>
                <td>
                    <div>
                       
                        <!-- <router-link  class="text-success">Edit</router-link> -->
                        <button  class="text-danger">Delete</button>
                    </div>
                </td>

            </tr>
        </tbody>

    </table>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Product } from '../../../interfaces/Product';
import api from '../../../config/api';
import { baseURL } from '../../../config/baseURL';

   const products = ref<Product[]>([]);
   api.get('products')
   .then(response => {
    console.log(response.data);
    products.value = response.data;
   })
   .catch(error => {
            console.log(error);
    })
</script>

<style scoped>

</style>