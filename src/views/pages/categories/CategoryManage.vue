<template>
    <h3>Category List</h3>
    <div>
        <router-link :to="`/category-create`" class="text-success">
            Create Category
        </router-link>
    </div>
    <table class="table table-striped">
        <thead>
            
            <tr >
                <td>ID</td>
                <td><i class="fa-solid fa-user"></i>Name</td>
                <td>Is_Inactive</td>
                <td>Action</td>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in categories" :key="item.id">
                <td>{{ item.id }}</td>
                <td>{{ item.name }}</td>
                <td>{{item.is_inactive ? 'Inactive': 'not Active'}}</td>
                <td>
                    <div>
                        <button class="text-primary"><i class="fa-solid fa-user"></i>Edit</button>
                        <router-link :to="`/category/${item.id}/details/${item.id}`" class="text-success">Details</router-link>
                        <router-link :to="`/category/${item.id}/delete/${item.id}`" class="text-danger">Details</router-link>
                    </div>
                </td>
            </tr>
        </tbody>

    </table>
</template>

<script setup lang="ts">
    import {reactive} from 'vue';
    import axios from 'axios';
    import type { Category } from '../../../interfaces/Category';
import { useRouter } from 'vue-router';
    const router = useRouter();
    let categories = reactive<Category[]>([]);
    axios.get('http://127.0.0.1:8000/api/categories')
    .then(response => {
        // console.log(response.data);
        categories.push(...response.data);
        console.log(categories);
        if(categories.length === 0){
            router.push('/');
        }
    })
    .catch(error => {
        console.log(error);
    })
</script>

<style scoped>

</style>