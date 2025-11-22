<script>
  export default {
    data() {
      return{
        title:'Safikur Rahman',
        desc:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio commodi veniam velit dicta reprehenderit magni sint quisquam dolor perferendis ex voluptates consequuntur inventore necessitatibus pariatur veritatis sit maiores repudiandae repellat, iusto iste odit omnis eligendi! Doloremque, dolorum atque nulla quod nam tenetur recusandae repellendus odio inventore iure molestias blanditiis aut vero corrupti, libero beatae nostrum quos suscipit eius nemo quis perferendis. Deserunt quaerat impedit iure magni quibusdam fugit vero nobis porro dolorum officia non consequatur, accusamus nemo enim sed recusandae corporis! Quaerat, libero fuga perspiciatis qui sapiente soluta eligendi quis consequatur aut corrupti dolore id nesciunt, vitae ut illo rerum!',
        round:true,
        trainees:['Roxi','Shah-Alam','Shohel'],
        link:'https://vuejs.org/'
      }
    },
    methods: {
      test(){
        alert('Thank You')
      }
    }
  }
</script>

<template>
    <header>
      <img src="./assets/vue.svg" class="logo" alt="Vite logo" />
  
     <div class="wrapper name">
          <h1>{{ title }}</h1>
    </div>
    </header>
        
    <main>
      <p>
          {{ desc }}
      </p>
      <p>Round:
          <span v-if="round">Active</span>
          <span v-else="round">Inactive</span>
      </p>
      <!-- <a v-bind:href="link" target="_blank">Web Site</a> -->
      <a :href="link" target="_blank">Web Site</a>
      <ul>
        <li v-for="trainee in trainees" :key="trainee">{{ trainee }}</li>
      </ul>
      <button type="button" @click="test">Click to Test</button>
        
    </main>

</template>

<style scoped>
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
