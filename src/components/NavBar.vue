<template>
    <header v-if="isLoggedIn">
        <div class="wrapper">
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark py-4">
                <div class="container">
                    <a class="navbar-brand" href="#">LOGO *</a>
                    <div
                        class="collapse navbar-collapse"
                        id="navbarNavAltMarkup"
                    >
                        <div class="navbar-nav ms-auto">
                            <RouterLink to="/menus" class="nav-link me-5">
                                Mis Menus
                            </RouterLink>
                            <a class="nav-link btn-sesion" @click="logout">
                                Cerrar Sesión
                            </a>
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
<style scoped>
nav.navbar.navbar-expand-lg.navbar-light.bg-light {
    background-color: black !important;
    box-shadow: 0 1px 8px rgb(0 0 0 / 10%) !important;
    color: white;
}
.navbar-light .navbar-nav .nav-link {
    color: #fff;
    font-family: "Barlow";
}
a.nav-link.btn-sesion {
    background: #e7272d;
    color: #fff;
    border: 1px solid #e7272d;
    margin-right: 5px;
    color: white;
    font-size: 14px;
    line-height: 1.5;
    text-transform: uppercase;
    border-radius: 36px;
    padding: 10px 20px;
    font-family: "Barlow";
    cursor: pointer;
}
.navbar-dark .navbar-nav .nav-link {
    color: #fff;
    font-family: "Barlow";
    text-transform: uppercase;
}
</style>
