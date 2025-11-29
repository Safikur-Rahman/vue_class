<template>
    <h3>Post List</h3>
    <table class="table table-striped">
        <thead>
            
            <tr >
                <td>ID</td>
                <td><i class="fa-solid fa-user"></i>User ID</td>
                <td>Title</td>
                <td>Actions</td>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in posts" :key="item.id">
                <td>{{ item.id }}</td>
                <td>{{ item.userId }}</td>
                <td>{{item.title}}</td>
                <td>
                    <div>
                        <button class="text-primary"><i class="fa-solid fa-user"></i>Edit</button>
                        <button class="text-success">Details</button>
                        <button class="text-danger">Delete</button>
                    </div>
                </td>
            </tr>
        </tbody>

    </table>
</template>

<script setup lang="ts">
    import {ref} from 'vue';
    import axios from 'axios';

    interface PostFake{
        id: number,
        userId: number,
        title: string,
        body: string
    }

    let posts = ref<PostFake[]>([]);
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
        // console.log(response.data);
        posts.value = response.data;
        // posts.push(...response.data)
        console.log(posts);
    })
    .catch(error => {
        console.log(error);
    })
</script>

<style scoped>

</style>