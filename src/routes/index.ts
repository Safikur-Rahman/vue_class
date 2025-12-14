import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/pages/Home.vue";
import Priceing from "../views/pages/Priceing.vue";
import ComparePlans from "../views/pages/ComparePlans.vue";
import Form from "../views/pages/Form.vue";
import PlanDetails from "../views/pages/PlanDetails.vue";
import PostManage from "../views/pages/posts/PostManage.vue";
import PostDetails from "../views/pages/posts/PostDetails.vue";
import PostCreate from "../views/pages/posts/PostCreate.vue";
import CategoryManage from "../views/pages/categories/CategoryManage.vue";
import CategoryCreate from "../views/pages/categories/CategoryCreate.vue";
import CategoryUpdate from "../views/pages/categories/CategoryUpdate.vue";
import ProductManage from "../views/pages/products/ProductManage.vue";
// import ChatAI from "../views/pages/openAi/ChatAI.vue";
import ChatAI from "../views/pages/openAi/ChatAI.vue";
import ChatImageAI from "../views/pages/openAi/ChatImageAI.vue";
import PproductManage from "../views/pages/view-product/PproductManage.vue";
import PproductCreate from "../views/pages/view-product/PproductCreate.vue";
import Login from "../views/pages/Login.vue";
// import ChatAI from "../views/pages/openAi/ChatAI.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component: Home, name: 'Home' , meta: {auth: true}},
        {path: '/login', component: Login, name: 'login', meta: {auth: false, noLayout: true}}, //custom information ar jonno meta use kora hoi
        {path: '/register', component: Login, name: 'register', meta: {auth: false}}, //custom information ar jonno meta use kora hoi
        {path: '/price', component: Priceing , meta: {guard: false}},
        {path: '/compare-plans', component: ComparePlans , meta: {guard: false}},
        {path: '/form', component: Form , meta: {auth: true}},
        {path: '/plan-details/:id', component: PlanDetails , meta: {auth: true}},
        {path: '/posts', component: PostManage , meta: {auth: true}},
        {path: '/post-create', component: PostCreate , meta: {auth: true}},
        {path: '/post/:id/details/:userid', component: PostDetails , meta: {auth: true}},
        {path: '/post/:id/details/:userid', component: PostDetails , meta: {auth: true}},
        // -======================Category=============================
        {path: '/categories', component: CategoryManage , meta: {auth: true}},
        {path: '/category-create', component: CategoryCreate , meta: {auth: true}},
        {path: '/category-update/:id', component: CategoryUpdate , meta: {auth: true}},
        // -======================Product=============================
        {path: '/products', component: ProductManage , meta: {auth: true}},
        {path: '/category-create', component: CategoryCreate , meta: {auth: true}},
        {path: '/category-update/:id', component: ChatAI , meta: {auth: true}},
        // -======================P Product=============================
        {path: '/view-products', component: PproductManage , meta: {auth: true}},
        {path: '/create-products', component: PproductCreate , meta: {auth: true}},
        // -======================Open AI=============================
        {path: '/open-ai', component: ChatAI , meta: {auth: true}},
        {path: '/open-image-ai', component: ChatImageAI , meta: {auth: true}},
        // {path: '/post/:id', component: PostManage},
    ]
});

router.beforeEach((to,form,next) => {
    const hasToken = !!localStorage.getItem('token');
    // const authenticated = !!localStorage.getItem('token') ? true : false;
    if(!hasToken && to.meta.auth){
        next('/login');
        // return{ name: 'login' };
    }else if(hasToken && !to.meta.auth && to.meta.guard !== false){
        // return true;
        next('/');
    }else{
        // return true;
        next();
    }
});
export default router