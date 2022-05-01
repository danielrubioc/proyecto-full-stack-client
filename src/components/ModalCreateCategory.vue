<template>
    <div>
        <button
            type="button"
            class="btn btn-success"
            data-bs-toggle="modal"
            data-bs-target="#createCategories"
        >
            Nueva Categoría
        </button>
        <!-- Modal -->
        <div
            class="modal fade"
            id="createCategories"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabindex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
        >
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <form v-on:submit.prevent="createCategory">
                        <div class="modal-header">
                            <h5 class="modal-title" id="staticBackdropLabel">
                                Nueva Categoría
                            </h5>
                            <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div class="modal-body">
                            <div class="mb-3">
                                <label for="inputNombre" class="form-label"
                                    >Nombre</label
                                >
                                <input
                                    type="text"
                                    class="form-control"
                                    id="inputNombre"
                                    v-model="catName"
                                    required
                                />
                            </div>
                            <div class="mb-3">
                                <label for="inputDescription" class="form-label"
                                    >Descripción</label
                                >
                                <textarea
                                    type="text"
                                    class="form-control"
                                    v-model="catDescription"
                                    id="inputDescription"
                                    required
                                />
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button
                                type="button"
                                class="btn btn-secondary"
                                data-bs-dismiss="modal"
                                id="closeModalCategories"
                            >
                                Cancelar
                            </button>
                            <button
                                type="submit"
                                class="btn btn-primary"
                                @click="deleteRegister"
                            >
                                Crear
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    data() {
        return {
            catName: "",
            catDescription: "",
            theModal: null,
        };
    },
    methods: {
        createCategory: async function () {
            const { id } = this.$route.params;
            const formData = new FormData();
            formData.append("name", this.catName);
            formData.append("description", this.catDescription);

            try {
                const { data } = await axios.post(
                    "menus/" + id + "/categories",
                    formData
                );
                this.$emit("createConfirm", true);
                console.log(data);
            } catch (error) {
                console.log(error);
            }
            /*   try {
                const { data } = await axios.post("menus", formData);
                if (data.ok) {
                    this.$swal("Creado con éxito!");
                    this.$router.push("/menus");
                } else {
                    this.$swal(data.msg);
                }
            } catch (error) {
                console.log(error);
            } */

            this.catName = "";
            this.catDescription = "";
            document.getElementById("closeModalCategories").click();
        },
    },
};
</script>

<style scoped>
.btn-success {
    font-size: 20px;
    font-weight: 400;
    font-family: "Barlow";
    text-transform: uppercase;
    border-radius: 35px;
    padding: 5px 20px;
}
.modal-header {
    background: black;
    color: white;
    text-transform: uppercase;
}
.modal-footer .btn.btn-secondary,
.modal-footer .btn.btn-primary {
    border-radius: 35px;
    padding: 6px 20px;
    text-transform: uppercase;
    font-weight: 400;
    font-family: "Barlow";
}
</style>
