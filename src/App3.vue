<script setup>
// import './assets/custom.css';
import Img from '/public/WhatsApp Image 2025-11-18 at 2.54.21 AM.png'
import src from '/public/WhatsApp Image 2025-11-18 at 2.54.21 AM (1).png'
import { ref } from 'vue';
        const title = 'Safikur Rahman';
        const desc = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio commodi veniam velit dicta reprehenderit magni sint quisquam dolor perferendis ex voluptates consequuntur inventore necessitatibus pariatur veritatis sit maiores repudiandae repellat, iusto iste odit omnis eligendi! Doloremque, dolorum atque nulla quod nam tenetur recusandae repellendus odio inventore iure molestias blanditiis aut vero corrupti, libero beatae nostrum quos suscipit eius nemo quis perferendis. Deserunt quaerat impedit iure magni quibusdam fugit vero nobis porro dolorum officia non consequatur, accusamus nemo enim sed recusandae corporis! Quaerat, libero fuga perspiciatis qui sapiente soluta eligendi quis consequatur aut corrupti dolore id nesciunt, vitae ut illo rerum!';
        const round = ref(true);
        const trainees = ['Roxi','Shah-Alam','Shohel'];
        const link = 'https://vuejs.org/';
        const test = () => {
        alert('Thank You');
      }
        const count= ref(0);
        const increment = () => {

          count.value++;
        }
        const buttonChange = () =>{
          if(round=true){
            
          }
        }
        const change = () =>{
          if(round.value){
            round.value = false;
          }else{
            round.value = true;
          }
        }
      
 
    

</script>

<template>
    <header>
      <img src="./assets/vue.svg" class="logo" alt="Vite logo" />
  
     <div class="wrapper name">
          <h1>{{ title }}</h1>
    </div>
    <h2>{{ count }}</h2>
    <button type="button" @click="increment" class="btn btn-info">Increment</button>
    </header>
    <section class="img-wrap">
      <img src="./assets/images/garlic.png" alt="Img">
      <img src="/public/WhatsApp Image 2025-11-18 at 2.54.21 AM (1).png" alt="Img">
      <img src="@/assets/images/WhatsApp.png" alt="Img">
      <img :src="Img" alt="Img">
      <img :src alt="Img">
    </section>
        
    <main>

      <p>
          {{ desc }}
      </p>
      <p>Round:
          <span v-if="round">Active</span>
          <span v-else="round">Inactive</span>
      </p>
      <button type="button" @click="change" class="btn btn-primary">Active/Inactive</button>
      <button type="button" @click="change" class="btn btn-success">Active/Inactive</button>
      <!-- <a v-bind:href="link" target="_blank">Web Site</a> -->
      <a :href="link" target="_blank">Web Site</a>
      <ul>
        <li v-for="trainee in trainees" :key="trainee">{{ trainee }}</li>
      </ul>
      <button type="button" @click="test">Click to Test</button>
        
    </main>

</template>

<style scoped>
@import './assets/custom.css';
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.name:hover {
  filter: drop-shadow(0 0 2em #03153baa);
}
</style>
