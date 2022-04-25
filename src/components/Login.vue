<template>
    <div class="container-fluid min-vh-100 d-flex">
        <div class="row align-items-center w-100">
            <div class="card p-5" style="width: 23rem; margin: 0 auto">
                <form v-on:submit.prevent="login">
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label"
                            >Email</label
                        >
                        <input
                            type="email"
                            class="form-control"
                            aria-describedby="emailHelp"
                            v-model="username"
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
                    <button type="submit" class="btn btn-primary mx-auto">
                        Ingresar
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        info: null,
        username: "test@test.cl",
        password: "test@test.cl",
        error: null,
        success: false,
    }),
    methods: {
        login: async function () {
            const formData = new FormData();
            formData.append("email", this.username);
            formData.append("password", this.password);

            try {
                await this.$store.dispatch("login", formData);
                this.$router.push("/menus");
            } catch (error) {
                console.log("error", error);
            }
        },
    },
};
</script>

<style scoped></style>
