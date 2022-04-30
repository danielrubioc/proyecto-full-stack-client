import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";
import DigitalMenu from "../views/DigitalMenu.vue";
import MenuIndex from "../views/Menus/Index.vue";
import MenuCreate from "../views/Menus/Create.vue";
import MenuEdit from "../views/Menus/Edit.vue";
import CategoryEdit from "../views/Categories/Edit.vue";
import auth from "../middleware/auth";
import loggedIn from "../middleware/isLoged";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView,
            beforeEnter: (to, from, next) => {
                loggedIn(to, from, next);
            },
        },
        {
            path: "/login",
            name: "login",
            component: LoginView,
            beforeEnter: (to, from, next) => {
                loggedIn(to, from, next);
            },
        },
        {
            path: "/digital-menus/:menu_id/design/:desing_id",
            name: "menuDigital",
            component: DigitalMenu,
        },
        {
            path: "/register",
            name: "register",
            component: RegisterView,
        },
        {
            path: "/menus",
            name: "menu",
            component: MenuIndex,
            beforeEnter: (to, from, next) => {
                auth(to, from, next);
            },
        },
        {
            path: "/menus/nuevo",
            name: "MenuCreate",
            component: MenuCreate,
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
