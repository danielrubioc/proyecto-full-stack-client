import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
import axios from "axios";

const store = createStore({
    plugins: [createPersistedState()],
    state: {
        token: null,
        loggedIn: false,
    },

    getters: {
        isAuthenticated: (state) => !!state.loggedIn,
    },
    mutations: {
        loginSuccess(state, token) {
            state.loggedIn = true;
            state.token = token;
        },
        loginFailure(state) {
            state.loggedIn = false;
            state.token = null;
        },
        logout(state) {
            state.loggedIn = false;
            state.token = null;
        },
    },
    actions: {
        async login({ commit }, user) {
            try {
                const { data } = await axios.post("login", user);
                commit("loginSuccess", data.token);
                return Promise.resolve(data);
            } catch (error) {
                commit("loginFailure");
                return Promise.reject(error.response.data);
            }
        },
        async logout({ commit }) {
            commit("logout");
        },
    },
});
export default store;
