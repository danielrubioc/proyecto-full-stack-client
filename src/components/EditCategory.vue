<template>
    <div class="container-fluid min-vh-50 d-flex mb-5">
        <div class="row align-items-center w-100">
            <div class="col">
                <div class="card p-5" style="width: 35rem; margin: 0 auto">
                    <h1 class="text-center">Actualizar Categoría</h1>
                    <form class="pt-5" v-on:submit.prevent="editCategory">
                        <div id="errors"></div>
                        <div class="mb-3">
                            <label for="exampleInputNombre" class="form-label"
                                >Nombre</label
                            >
                            <input
                                type="text"
                                class="form-control"
                                v-model="category.name"
                                aria-describedby="emailHelp"
                                required
                            />
                        </div>
                        <div class="mb-3">
                            <label
                                for="exampleInputPassword1"
                                class="form-label"
                                >Descripcion</label
                            >
                            <textarea
                                type="text"
                                class="form-control"
                                v-model="category.description"
                                required
                            >
                            </textarea>
                        </div>
                        <div class="mt-5 d-flex justify-content-end">
                            <button type="submit" class="btn btn-success mb-5">
                                Actualizar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div class="col-4">
                <ModalDelete @delete-confirm="deleteMenu" />
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import ModalDelete from "@/components/ModalDelete.vue";
export default {
    props: ["category"],
    components: {
        ModalDelete,
    },
    methods: {
        editCategory: async function () {
            const divErrors = document.getElementById("errors");
            divErrors.innerHTML = "";
            try {
                const { data } = await axios.put(
                    `menus/+${this.$route.params.id}/categories/${this.$route.params.category_id}`,
                    this.category
                );
                if (data.ok) {
                    this.$swal("Actualizado con éxito!");
                } else {
                    this.$swal(data.msg);
                }
            } catch (error) {
                const errorMessage = error.response.data.msg.split(",");
                let string = "";
                errorMessage.forEach((error) => {
                    string += `<p>${error}</p>`;
                });
                return (divErrors.innerHTML = string);
            }
        },
        deleteMenu: async function () {
            const { id } = this.$route.params;
            try {
                const { data } = await axios.delete("menus/" + id);
                if (data.ok) {
                    this.$swal("Eliminado con Éxito");
                    this.$router.push("/menus");
                } else {
                    this.$swal(data.msg);
                }
            } catch (error) {
                console.log(error);
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
