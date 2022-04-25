<template>
    <header v-if="isLoggedIn">
        <div class="wrapper">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container">
                    <a class="navbar-brand" href="#">LOGO *</a>
                    <div
                        class="collapse navbar-collapse"
                        id="navbarNavAltMarkup"
                    >
                        <div class="navbar-nav ms-auto">
                            <RouterLink to="/menus" class="nav-link">
                                Menus
                            </RouterLink>
                            <a class="nav-link" @click="logout"
                                >Cerrar Sesión</a
                            >
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    </header>
</template>

<script>
export default {
    computed: {
        isLoggedIn: function () {
            return this.$store.getters.isAuthenticated;
        },
    },
    methods: {
        logout: function () {
            this.$store.dispatch("logout");
            this.$router.push("/");
        },
    },
};
</script>
