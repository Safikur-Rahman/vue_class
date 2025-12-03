import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/pages/Home.vue";
import Priceing from "../views/pages/Priceing.vue";
import ComparePlans from "../views/pages/ComparePlans.vue";
import Form from "../views/pages/Form.vue";
import PlanDetails from "../views/pages/PlanDetails.vue";
import PostManage from "../views/pages/posts/PostManage.vue";
import PostDetails from "../views/pages/posts/PostDetails.vue";
import PostCreate from "../views/pages/posts/PostCreate.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component: Home},
        {path: '/price', component: Priceing},
        {path: '/compare-plans', component: ComparePlans},
        {path: '/form', component: Form},
        {path: '/plan-details/:id', component: PlanDetails},
        {path: '/posts', component: PostManage},
        {path: '/post-create', component: PostCreate},
        {path: '/post/:id/details/:userid', component: PostDetails},
        {path: '/post/:id/details/:userid', component: PostDetails},
        // {path: '/post/:id', component: PostManage},
    ]
});

export default router