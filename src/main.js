import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import store from "./store";
import axios from "axios";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

//axios.defaults.withCredentials = true;
//axios.defaults.baseURL = "https://menu-digital-api.herokuapp.com/api/v1";
axios.defaults.baseURL = "http://localhost:5000/api/v1";
axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";

axios.interceptors.request.use((request) => {
    const token = store.state.token;
    if (token) {
        request.headers.common.Authorization = `Bearer ${token}`;
    }

    return request;
});

axios.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response.status === 401) {
            store.dispatch("logout");
            router.push("/");
        }
        return error;
    }
);

const app = createApp(App);

app.use(router);
app.use(store);
app.use(VueSweetalert2);

app.mount("#app");
import "bootstrap/dist/js/bootstrap.js";
