<template>
    <div class="row">
        <!-- ===========without Form (Not Recommended)============ -->
    <div>
        <label for="" class="form-label">Number Update</label>
        <input type="number" @click="updateNumber" class="form-control" v-model="count">
        <button @click="updateNumber">update</button>
    </div>
        <!-- ===========Form (Recommended)============ -->
    <form action="" @submit.prevent="updateNumber">
        <label for="" class="form-label">Number Update</label>
        <input type="number" class="form-control" v-model="count">
        <div>
            <button type="submit">Update</button>
        </div>

    </form>
    <form action="" @submit.prevent="updateUser" >Form Test
        <div class="mb-3">
            <label for="" class="form-label">ID</label>
            <input type="number" class="form-control" v-model="user.id">
        </div>
        <div class="mb-3">
            <label for="" class="form-label">Name</label>
            <input type="text" class="form-control" v-model="user.name">
        </div>
        <div>
            <button type="submit">Update</button>
        </div>

    </form>
    <form @submit.prevent="formsSubmit2" class="col-6 bg-success">
        <h3>User Form 2</h3>
        <div class="mb-3">
            <label for="exampleInputTitle1" class="form-label">Title</label>
            <input type="text" class="form-control" id="exampleInputTitle1" aria-describedby="nameHelp" v-model="post.title">
            <div id="nameHelp" class="form-text">Enter your Name</div>
            <span class="text-danger">{{ error.title }}</span>
        </div>
        <div class="mb-3">
            <label for="exampleInputDetails1" class="form-label">Details</label>
            <textarea type="text" class="form-control" id="exampleInputDetails1" aria-describedby="detailsHelp" v-model="post.details"></textarea>
            <div id="detailsHelp" class="form-text">We'll never share your email with anyone else.</div>
            <span class="text-danger">{{ error.details }}</span>
        </div>
        <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1" v-model="post.isReactive">
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="exampleAgreeCheck2" v-model="agree1">
            <label class="form-check-label" for="exampleAgreeCheck2">I agree </label><br>
            <span class="text-danger">{{ error.agree1 }}</span>
        </div>
        
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    <form @submit.prevent="formsSubmit" class="col-6 bg-primary">
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
        <button type="submit" class="btn btn-success">Submit</button>
    </form>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive, isReactive } from 'vue'
import type {Post} from '/src/interfaces/Post'
import { useCounterStore } from '../../store/counter'
import { useUserStore } from '../../store/user'
import type { User } from '../../interfaces/User'
const userData = useUserStore()
// const user = ref(userData.user)
const counter = useCounterStore();
const count = ref(counter.count)
const post = reactive<Post>({
    title: '',
    details: '',
    isReactive: false,
    agree1: false
});
const user = ref<User>(userData.user)

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
    const error = reactive({
        title: '',
        details: '',
        agree: '',
        agree1: ''
    });
    function formsSubmit2(){
        const titleRegex = /^[a-zA-Z0-9 .-]+$/   // + means minimum 1
        // const titleRegex = /^[a-zA-Z0-9 .-]{1,}$/   // {1,} means minimum 1 {1} Must be 1
        console.log("Title:", post.title)
        console.log("Details:", post.details)
        console.log("isReactive:", post.isReactive)

        // =======Form Validation (Title)=========\\

        if(post.title===''){
            error.title = 'Title is required';
        }else if(post.title.length <2){
            error.title = 'Title Must be 2 Characters';
        }else if(!titleRegex.test(post.title)){
            error.title = 'Title Must be Alphanumaric, space, . or -';
        }else{
            error.title = ''
        }
        
         // =======Form Validation (Details)=========\\

        if(post.details===''){
            error.details = 'Title is required';
        }else{
            error.details = ''
        }
        if (post.agree !== true) {
            error.agree1 = 'You must agree to continue';
        } else {
            error.agree1 = '';
        }

        
        
        if(error.title !=='' || error.details !=='' || error.agree !=='' ){
            return;
        }
       alert("Submitted")
    }

    function updateNumber(){
            counter.count = count.value;
            counter.setLocal();
    }
    function updateUser(){
        console.log(user.value);
            userData.user = user.value;
            userData.setLocal()
    }
</script>

<style scoped>

</style>
