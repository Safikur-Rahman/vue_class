<script setup> 
import {ref} from "vue";
import api from "../../config/api";
import { useRouter } from "vue-router";
const router = useRouter();
const user = ref({
    email:'',
    password:''
});
const errorMSG = ref({
    email:'',
    password:''
});
    function handleSubmit(){
        api.post('login',user.value)
       
            .then(response => {
                console.log(response.data);
                user.value = response.data;
                console.log(user.value);
                if(response.data.token){
                    localStorage.setItem('token',response.data.token)
                    router.replace('/')
                    // router.push('/')
                }

            })
            .catch(error => {
                console.log(error.response.status);
                if(error.response.data.errors){
                    errorMSG.value.email = error.response.data.errors.email[0];
                    errorMSG.value.password = error.response.data.errors.password[0];
                }
            })
        };
    function validation(){
        const regEmail = /^[a-zA-Z0-9._]{2,65}@[a-zA-Z0-9._]{2,65}.[a-zA-Z]{2,5}$/;
           if (user.value.email == ''){
            errorMSG.value.email ="Email is Required";
            }else if (!regEmail.test(user.value.email)){
                errorMSG.value.email ="Email is Invalid";
            }else{
                errorMSG.value.email ='';

            }
           if (user.value.password === ''){
            errorMSG.value.password ="Password is Required";
            }else{
                errorMSG.value.password ='';

            }

            // console.log('No Error');
            if(errorMSG.value.email == '' && errorMSG.value.password == ''){
                console.log('No Error');
                handleSubmit();
            }

    } 
    // validation();
</script>

<template>
    <h3 class="text-center">Login</h3>
    <div class="row">
        <div class="col-md-6 mx-auto">
            <form @submit.prevent="validation">
                <div class="mb-3">
                    <label for="">Email</label>
                    <input type="text" class="form-control" v-model="user.email" >
                    <span class="error-text text-danger">{{ errorMSG.email }}</span>
                </div>
                <div class="mb-3">
                    <label for="">Password</label>
                    <input type="text" class="form-control" v-model="user.password">
                    <span class="error-text text-danger">{{ errorMSG.password }}</span>
                </div>
                <button type="submit" class="btn btn-primary w-100" >Login</button>
            </form>
        </div>
    </div>
</template>