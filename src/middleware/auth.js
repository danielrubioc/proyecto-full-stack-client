import store from "../store";
const auth = function guardMyroute(to, from, next) {
    if (!store.getters.isAuthenticated) next("/");
    next();
};

export default auth;
