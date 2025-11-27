<template>
    <div class="row">
    <form @submit.prevent="formsSubmit2" class="col-6">
        <h3>User Form 2</h3>
        <div class="mb-3">
            <label for="exampleInputTitle1" class="form-label">Title</label>
            <input type="text" class="form-control" id="exampleInputTitle1" aria-describedby="nameHelp" v-model="post.title">
            <div id="nameHelp" class="form-text">Enter your Name</div>
        </div>
        <div class="mb-3">
            <label for="exampleInputDetails1" class="form-label">Details</label>
            <textarea type="text" class="form-control" id="exampleInputDetails1" aria-describedby="detailsHelp" v-model="post.details"></textarea>
            <div id="detailsHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1" v-model="post.isReactive">
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    <form @submit.prevent="formsSubmit" class="col-6">
        <h3>User Form 1</h3>
        <div class="mb-3">
            <label for="exampleInputName1" class="form-label">name</label>
            <input type="text" class="form-control" id="exampleInputName1" aria-describedby="emailHelp" v-model="name.lastName">
            <div id="emailHelp" class="form-text">Enter your Name</div>
        </div>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="email">
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" v-model="password">
        </div>
        <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1" v-model="agree">
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <div class="form-check">
            <label for="" class="form-label">Gender</label><br>
            <input class="form-check-input" type="radio" name="radioDefault" id="radioDefault1" v-model="gender" value="male">
            <label class="form-check-label" for="radioDefault1">
                Male
            </label>
            </div>
            <div class="form-check">
            <input class="form-check-input" type="radio" name="radioDefault" id="radioDefault2" v-model="gender" value="female">
            <label class="form-check-label" for="radioDefault2">
                Female
            </label>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive, isReactive } from 'vue'
import type {Post} from '/src/interfaces/Post'
const post = reactive<Post>({
    title: '',
    details: '',
    isReactive: false
});

const name = ref({id: 1,lastName: ''})
const email = ref('')
const password = ref('')
const gender = ref('')
const agree = ref(false)
    function formsSubmit(){
        // alert ('Form Submit');
        console.log("Name:", name.value.lastName)
        console.log("Gender:", gender.value)
        console.log("Agree:", agree.value)
    }
    function formsSubmit2(){
        // alert ('Form Submit');
        console.log("Title:", post.title)
        console.log("Details:", post.details)
        console.log("isReactive:", post.isReactive)
       
    }
</script>

<style scoped>

</style>
