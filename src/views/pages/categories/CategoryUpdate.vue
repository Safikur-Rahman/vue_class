<script setup lang="ts">
import axios from 'axios';
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import {  defaultCategory, type Category } from '../../../interfaces/Category';

    const categories = ref<Category>(defaultCategory)
    const router = useRoute();
    const categoryId = router.params.id;

    console.log(categoryId)
     
    axios.get(`http://127.0.0.1:8000/api/categories/${categoryId}`)
    .then(res=>{
        console.log(res.data);
        categories.value=res.data.category
        categories.value.is_inactive = !categories.value.is_inactive
    })

    function formSubmit() { 
        console.log(categories.value.name);
        console.log(categories.value.is_inactive);
        let is_inactive= categories.value.is_inactive ? 0 : 1;
        let formData = new FormData();
        formData.append('_method', 'PUT')
        formData.append('name', categories.value.name)
        formData.append('is_inactive', is_inactive.toString());
            axios.post(`http://127.0.0.1:8000/api/categories/${categoryId}`, formData)
            .then(response => {
                
                    alert('Category Created Successfully')
                    console.log(response.data);
                })
                
         
            .catch(error => {
                console.log(error);
                console.log(error.status);
                if(error.status === 400){
                    alert(error.response.data.message)
                }

            });
        }

</script>

<template>
    <div>
        <router-link :to="`/categories`" class="text-success">
            Manage Category
        </router-link>
        <h3>Post Create</h3>
    <form @submit.prevent="formSubmit">
    <div>
        <label for="title" class="form-label">Category Name</label>
        <input type="text" class="form-control" v-model="categories.name">
    </div>

    <div>
        <label for="body" class="form-label">Is Active</label>
        <input type="checkbox" class="form-check-input" v-model="categories.is_inactive">
    </div>

    <button type="submit" class="form-submit">Submit</button>
</form>

    </div>
</template>


<style lang="scss" scoped>

</style>