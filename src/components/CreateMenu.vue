<template>
    <div class="container-fluid min-vh-50 d-flex">
        <div class="row align-items-center w-100">
            <div class="card p-5" style="width: 35rem; margin: 0 auto">
                <h1 class="text-center">Nuevo Menu</h1>
                <form class="p-5" v-on:submit.prevent="createMenu">
                    <div id="errors"></div>
                    <div class="mb-3">
                        <label for="exampleInputNombre" class="form-label"
                            >Nombre</label
                        >
                        <input
                            type="text"
                            class="form-control"
                            id="exampleInputNombre"
                            v-model="menu.name"
                            aria-describedby="emailHelp"
                            required
                        />
                    </div>
                    <div class="d-flex flex-row-reverse">
                        <button type="submit" class="btn btn-success">
                            Crear
                        </button>
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
        menu: {
            name: "",
            url: "no aplica",
        },
        error: null,
        success: false,
    }),
    methods: {
        createMenu: async function () {
            console.log("dsasd");
            const divErrors = document.getElementById("errors");
            divErrors.innerHTML = "";
            try {
                const { data } = await axios.post("menus", this.menu);
                if (data.ok) {
                    this.$swal("Creado con éxito!");
                    this.$router.push("/menus");
                } else {
                    this.$swal(data.msg);
                }
                this.$router.push("/menus");
            } catch (error) {
                console.log("cathc", error);
                const errorMessage = error.response.data.msg.split(",");
                let string = "";
                errorMessage.forEach((error) => {
                    string += `<p>${error}</p>`;
                });
                return (divErrors.innerHTML = string);
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
.btn-success {
    font-size: 20px;
    font-weight: 400;
    font-family: "Barlow";
    text-transform: uppercase;
    border-radius: 35px;
    padding: 5px 20px;
}
</style>
