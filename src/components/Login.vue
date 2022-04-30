<template>
    <div class="container-fluid min-vh-100 d-flex">
        <div class="row align-items-center w-100">
            <div class="card p-5" style="width: 30rem; margin: 0 auto">
                <h1 class="text-center">Ingresa</h1>
                <form v-on:submit.prevent="login">
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label"
                            >Email</label
                        >
                        <input
                            type="email"
                            class="form-control"
                            aria-describedby="emailHelp"
                            v-model="user.email"
                        />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label"
                            >Contraseña</label
                        >
                        <input
                            type="password"
                            class="form-control"
                            v-model="user.password"
                        />
                    </div>
                    <div class="text-center">
                        <button type="submit" class="btn btn-especial mx-auto">
                            Ingresa
                        </button>
                    </div>
                    <div class="text-end">
                        <RouterLink to="/register" class="login">
                            Registrarse
                        </RouterLink>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        info: null,
        user: {
            email: "test@test.cl",
            password: "test@test.cl",
        },
        error: null,
        success: false,
    }),
    methods: {
        login: async function () {
            try {
                await this.$store.dispatch("login", this.user);
                this.$router.push("/menus");
            } catch (error) {
                console.log("error", error);
            }
        },
    },
};
</script>

<style scoped>
h1 {
    font-family: "Barlow";
    font-weight: 900;
    text-transform: uppercase;
}
.container-fluid.min-vh-100.d-flex {
    background-image: url(menu_pattern3-min.png);
    background-size: contain;
}
.btn-especial {
    font-family: "Permanent Marker", cursive;
    color: #fff;
    font-size: 25px;
    background: #54595f;
    border-radius: 30px;
}
.btn-especial:hover {
    color: #fff;
    background: #333539;
}
label.form-label {
    font-family: "Barlow";
    font-weight: 700;
}
.login {
    color: #e7272d;
    font-family: "Permanent Marker", Sans-serif;
    font-size: 24px;
    font-weight: 400;
    text-decoration: none;
}
</style>
