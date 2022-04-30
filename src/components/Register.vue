<template>
    <div class="container-fluid min-vh-100 d-flex">
        <div class="row align-items-center w-100">
            <div class="card p-5" style="width: 30rem; margin: 0 auto">
                <h1 class="text-center">Completa los datos</h1>
                <form v-on:submit.prevent="login">
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label"
                            >Name</label
                        >
                        <input
                            type="text"
                            class="form-control"
                            aria-describedby="emailHelp"
                            v-model="userRegister.name"
                        />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label"
                            >Email</label
                        >
                        <input
                            type="email"
                            class="form-control"
                            aria-describedby="emailHelp"
                            v-model="userRegister.email"
                        />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label"
                            >Contraseña</label
                        >
                        <input
                            type="password"
                            class="form-control"
                            v-model="userRegister.password"
                        />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label"
                            >Confirmar Contraseña</label
                        >
                        <input
                            type="password"
                            class="form-control"
                            v-model="userRegister.confirmPassword"
                        />
                    </div>
                    <div class="text-center">
                        <button type="submit" class="btn btn-especial mx-auto">
                            Registrarse
                        </button>
                    </div>
                    <div class="text-end">
                        <RouterLink to="/login" class="login">
                            Ingresa
                        </RouterLink>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    data: () => ({
        info: null,
        userRegister: {
            name: "test@test.cl",
            email: "test@test.cl",
            password: "test@test.cl",
            confirmPassword: "test@test.cl",
        },
        error: null,
        success: false,
    }),
    methods: {
        login: async function () {
            try {
                const { data } = await axios.post(
                    "register",
                    this.userRegister
                );
                console.log("error", data);
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
