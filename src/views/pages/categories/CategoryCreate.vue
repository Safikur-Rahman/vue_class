<template>
    <div>
        <router-link :to="`/categories`" class="text-success">
            Manage Category
        </router-link>
        <h3>Post Create</h3>
    <form  @submit.prevent="formSubmit">
        
       
        <div>
            <label for="title" class="form-lavel">Category Namr</label>
            <input type="text" class="form-control" v-model="category.name">
        </div>
        <div>
            <label for="body" class="form-lavel">Is Active</label>

            <input type="checkbox" class="form-check-input" v-model="category.is_inactive">
        </div>
        <button type="submit" class="form-submit">Submit</button>
        
    </form>
    </div>
</template>

<script setup lang="ts">
import axios from 'axios';
import { type Category, defaultCategory } from '../../../interfaces/Category';
import { ref } from 'vue';

let category = ref<Category>(defaultCategory);
    function formSubmit() { 
        console.log(category.value.name);
        console.log(category.value.is_inactive);
        let is_inactive= category.value.is_inactive ? 0 : 1;
        let formData = new FormData();
        formData.append('name', category.value.name)
        formData.append('is_inactive', is_inactive.toString());
            axios.post('http://127.0.0.1:8000/api/categories',formData)
            .then(response => {
                console.log(response.data);
                console.log(response.status);
                if(response.status === 200){
                    category.value.name = '';
                    category.value.is_inactive = false;
                    alert('Category Created Successfully')
                }
                Object.assign(category, response.data);
            })
            .catch(error => {
                console.log(error);
            });
        }
</script>

<style lang="scss" scoped>

</style>