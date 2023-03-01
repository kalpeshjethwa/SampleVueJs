import { createWebHistory, createRouter } from "vue-router";

const routes = [
    {
        path:'/',
        alias:'/home',
        name:'HomeView',
        component: () => import("./views/HomeView")
    },
    {
        path:'/getAllUser',
        name:'UserList',
        component: () => import("./views/UserList")
    },
    {
        path:'/getUser/:id',
        name:'FindUser',
        component: () => import("./views/FindUser")
    }
    
    ];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;