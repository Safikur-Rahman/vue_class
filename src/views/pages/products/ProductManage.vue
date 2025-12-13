<template>
    <h3>Product List</h3>
    <div>
        <!-- <router-link :to="`/create`" class="text-success">
            Create Product
        </router-link> -->
    </div>
    <table class="table table-striped">
        <thead>
            
            <tr >
                <td>ID</td>
                <td><i class="fa-solid fa-user"></i>Name</td>
                <td>Category</td>
                <td>Description</td>
                <td>Price</td>
                <td>Discount</td>
                <td>Quantity</td>
                <td>Photo</td>
                <td>Action</td>
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
                <td><img :src="`http://127.0.0.1:8080/${item.photo}`" alt="product" class="rounded-circle me-2" width="60"></td>

                <!-- <td>{{item.is_inactive ? 'Active': 'not Active'}}</td> -->
                <td>
                    <div>
                       
                        <!-- <router-link :to="`/category-update/${item.id}`" class="text-success">Edit</router-link>
                        <button @click="handleDelete(item.id)" class="text-danger">Delete</button> -->
                    </div>
                </td>
            </tr>
        </tbody>

    </table>
</template>

<script setup lang="ts">
    import {reactive} from 'vue';
    import axios from 'axios';
    import { useRouter } from 'vue-router';
    import type { Product } from '../../../interfaces/Product';
    const router = useRouter();
    let products = reactive<Product[]>([]);
    function manageProduct(){

        axios.get('http://127.0.0.1:8080/api/products')
        .then(response => {
            // console.log(response.data);
            products.length = 0;
            products.push(...response.data);
            console.log(products);
            if(products.length === 0){
                router.push('/');
            }
        })
        .catch(error => {
            console.log(error);
        })
    }
    manageProduct();
   function handleDelete(id:number){
    // alert(id)
    // console.log(id);
       axios.delete(`http://127.0.0.1:8000/api/products/${id}`)
       .then( (res)=> {
            console.log(res)
            if(res.status == 200) alert('Product Deleted Successfully');
            manageProduct();
       })
    }
</script>

<style scoped>

</style>