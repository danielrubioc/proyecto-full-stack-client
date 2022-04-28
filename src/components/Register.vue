<template>
    <div class="container-fluid min-vh-100 d-flex">
        <div class="row align-items-center w-100">
            <div class="card p-5" style="width: 23rem; margin: 0 auto">
                <form v-on:submit.prevent="login">
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label"
                            >Name</label
                        >
                        <input
                            type="text"
                            class="form-control"
                            aria-describedby="emailHelp"
                            v-model="name"
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
                            v-model="email"
                        />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label"
                            >Contraseña</label
                        >
                        <input
                            type="password"
                            class="form-control"
                            v-model="password"
                        />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label"
                            >Confirmar Contraseña</label
                        >
                        <input
                            type="password"
                            class="form-control"
                            v-model="password_confirm"
                        />
                    </div>
                    <button type="submit" class="btn btn-primary mx-auto">
                        Registrarse
                    </button>
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
        name: "test@test.cl",
        email: "test@test.cl",
        password: "test@test.cl",
        password_confirm: "test@test.cl",
        error: null,
        success: false,
    }),
    methods: {
        login: async function () {
            const formData = new FormData();
            formData.append("name", this.name);
            formData.append("email", this.email);
            formData.append("password", this.password);
            formData.append("confirmPassword", this.password_confirm);

            try {
                const { data } = await axios.post("register", formData);
                console.log("error", data);
            } catch (error) {
                console.log("error", error);
            }
        },
    },
};
</script>

<style scoped></style>
