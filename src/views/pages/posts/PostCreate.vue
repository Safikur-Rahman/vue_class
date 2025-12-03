        <script setup lang="ts">
        import { ref } from 'vue';
        import axios from 'axios';
        import { defaultPostFake, type PostFake} from '../../../interfaces/PostFake';
          let post = ref<PostFake>(defaultPostFake)
        //   const title = ref('')
        //     const body = ref('')
            function formSubmit() { 
            axios.post('https://jsonplaceholder.typicode.com/posts',post.value)
            .then(response => {
                console.log(response.data);
                // Object.assign(post, response.data);
            })
            .catch(error => {
                console.log(error);
            });
            
                // alert(' Form Submited')
                // console.log("Title :", title.value);
                // console.log("Body :", body.value);
            }
            
        </script>
<template>
    
    <h3>Post Create</h3>
    <form  @submit.prevent="formSubmit">
        <div>
            <label for="id" class="form-lavel">ID</label>
            <input type="number" class="form-control" >
        </div>
        <div>
            <label for="userId" class="form-lavel">User ID</label>
            <input type="number" class="form-control">
        </div>
        <div>
            <label for="title" class="form-lavel">Title</label>
            <input type="text" class="form-control" v-model="post.title">
        </div>
        <div>
            <label for="body" class="form-lavel">Body</label>
            <input type="text" class="form-control" v-model="post.body">
        </div>
        <button type="submit" class="form-submit">Submit</button>
        
    </form>
    
</template>


<style scoped>

</style>