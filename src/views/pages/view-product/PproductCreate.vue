<template>
  <div>
    <router-link :to="`/products`" class="text-success">
      Manage Product
    </router-link>
    <h3>Product Create</h3>
    
    <form @submit.prevent="formSubmit">
      <!-- Name Input -->
      <div>
        <label for="name" class="form-label">Name</label>
        <input type="text" class="form-control" v-model="product.name">
      </div>
      
      <!-- Category Input -->
      <div>
        <label for="category" class="form-label">Category</label>
        <input type="text" class="form-control" v-model="product.category_id">
      </div>
      
      <!-- Description Input -->
      <div>
        <label for="description" class="form-label">Description</label>
        <input type="text" class="form-control" v-model="product.description">
      </div>
      
      <!-- Price Input -->
      <div>
        <label for="price" class="form-label">Price</label>
        <input type="text" class="form-control" v-model="product.price">
      </div>
      
      <!-- Discount Input -->
      <div>
        <label for="discount" class="form-label">Discount</label>
        <input type="text" class="form-control" v-model="product.discount">
      </div>
      
      <!-- Quantity Input -->
      <div>
        <label for="quantity" class="form-label">Quantity</label>
        <input type="text" class="form-control" v-model="product.quantity">
      </div>
      
      <!-- Photo Input -->
      <div>
        <label for="photo" class="form-label">Photo</label>
        <input type="file" class="form-control" @change="handleFileChange">
      </div>
      
      <!-- Submit Button -->
      <button type="submit" class="form-submit">Submit</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import axios from 'axios';
import { ref } from 'vue';
import { defaultProduct, type Product } from '../../../interfaces/Product';

// Create a reactive product object
const product = ref<Product>(defaultProduct);

// Handle file input change
const handleFileChange = (event: any) => {
    product.value.photo_file = event.target.files[0]; 
}

// Handle form submission
function formSubmit() {
  console.log(product.value.name);
  console.log(product.value.category_id);
  
  const formData = new FormData();
  formData.append('name', product.value.name);
  formData.append('category_id', String(product.value.category_id));
  formData.append('description', product.value.description);
  formData.append('price', String(product.value.price));
  formData.append('discount', String(product.value.discount));
  formData.append('quantity', String(product.value.quantity));
  
  if (product.value.photo_file !== null) {
    formData.append('photo', product.value.photo_file as File); 
  }
//   if (product.value.photo) {
//     formData.append('photo', product.value.photo); 
//   }

  
  axios.post('http://127.0.0.1:8000/api/products', formData)
    .then(response => {
      console.log(response.data);
      if (response.status === 200) {
        // Reset the form after successful submission
        product.value = { ...defaultProduct }; // Reset product to its default state
        alert('Product Created Successfully');
      }
    })
    .catch(error => {
      console.error(error);
    });
}
</script>

<style lang="scss" scoped>
/* Scoped styling if needed */
</style>
