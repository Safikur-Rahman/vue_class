        <script setup lang="ts">
        import axios from 'axios';
        // import { reactive } from 'vue';
        import { useRoute } from 'vue-router';
        import { defaultPostFake, type PostFake } from '../../../interfaces/PostFake';
        import { ref } from 'vue';
            // let post = reactive<PostFake>(defaultPostFake)
            let post = ref<PostFake>(defaultPostFake)
            let route = useRoute();
            axios.get(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
            .then(response => {
                console.log(response.data);
                // Object.assign(post, response.data);
                post.value = response.data;
            })
            .catch(error => {
                console.log(error);
            });
            
        </script>
<template>
    
    <h3>Post Details</h3>
    <table class="table table-striped">
        <thead>
            <tr >
                <td>ID</td>
                <td><i class="fa-solid fa-user"></i>User ID</td>
                <td>Title</td>
                <td>Body</td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>{{ route.params.id }}</td>
                <td>{{ route.params.userid }}</td>
                <!-- <td>{{ post.title }}</td>
                <td>{{ post.body }}</td> -->
                
                <td>{{ post.title }}</td>
                <td>{{ post.body }}</td>
               
            </tr>
           
        </tbody>

    </table>
</template>


<style scoped>

</style>