import store from "../store";
const loggedIn = function guardMyroute(to, from, next) {
    if (store.getters.isAuthenticated) next("/menus");
    next();
};

export default loggedIn;
