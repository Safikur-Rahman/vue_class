<template>
    <form @submit.prevent="formsSubmit">
        <h3>User Form</h3>
        <div class="mb-3">
            <label for="exampleInputName1" class="form-label">name</label>
            <input type="text" class="form-control" id="exampleInputName1" aria-describedby="emailHelp" v-model="name">
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
</template>

<script setup>
import { ref } from 'vue'
const name = ref('')
const email = ref('')
const password = ref('')
const gender = ref('')
const agree = ref(false)
    function formsSubmit(){
        // alert ('Form Submit');
        console.log("Name:", name.value)
        console.log("Gender:", gender.value)
        console.log("Agree:", agree.value)
    }
</script>

<style scoped>

</style>
