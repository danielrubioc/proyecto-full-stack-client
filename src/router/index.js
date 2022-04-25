import { createRouter, createWebHistory } from "vue-router";

import LoginView from "../views/LoginView.vue";

import MenuIndex from "../views/Menus/Index.vue";
import MenuCreate from "../views/Menus/Create.vue";
import MenuEdit from "../views/Menus/Edit.vue";
import CategoryEdit from "../views/Categories/Edit.vue";
import auth from "../middleware/auth";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "login",
            component: () => LoginView,
        },
        {
            path: "/menus",
            name: "menu",
            component: () => MenuIndex,
            beforeEnter: (to, from, next) => {
                auth(to, from, next);
            },
        },
        {
            path: "/menus/nuevo",
            name: "MenuCreate",
            component: () => MenuCreate,
            beforeEnter: (to, from, next) => {
                auth(to, from, next);
            },
        },
        {
            path: "/menus/:id",
            name: "MenuEdit",
            component: MenuEdit,
            beforeEnter: (to, from, next) => {
                auth(to, from, next);
            },
        },
        {
            path: "/menus/:id/categories/:category_id",
            name: "CategoryEdit",
            component: CategoryEdit,
            beforeEnter: (to, from, next) => {
                auth(to, from, next);
            },
        },
    ],
});

export default router;
