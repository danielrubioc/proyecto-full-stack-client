import store from "../store";
const auth = function guardMyroute(to, from, next) {
    console.log(store.getters.isAuthenticated);
    if (!store.getters.isAuthenticated) next("/");
    next();
};

export default auth;
