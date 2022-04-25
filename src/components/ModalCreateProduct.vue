<template>
    <div>
        <button
            type="button"
            class="btn btn-success"
            data-bs-toggle="modal"
            data-bs-target="#createCategories"
        >
            Crear
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
                    <form class="p-1" v-on:submit.prevent="createProduct">
                        <div class="modal-header">
                            <h5 class="modal-title" id="staticBackdropLabel">
                                Nuevo Producto
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
                                    v-model="inputName"
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
                                    v-model="inputDescription"
                                    id="inputDescription"
                                    required
                                />
                            </div>
                            <div class="mb-3">
                                <label
                                    for="inputPrecioNormal"
                                    class="form-label"
                                    >Precio Normal</label
                                >
                                <input
                                    type="number"
                                    class="form-control"
                                    id="inputPrecioNormal"
                                    v-model="inputPrice"
                                    required
                                />
                            </div>
                            <div class="mb-3">
                                <label
                                    for="inputPrecioDescuento"
                                    class="form-label"
                                    >Precio con Descuento</label
                                >
                                <input
                                    type="number"
                                    class="form-control"
                                    id="inputPrecioDescuento"
                                    v-model="inputPriceDiscto"
                                    required
                                />
                            </div>
                            <div class="mb-3">
                                <label
                                    for="inputPrecioDescuento"
                                    class="form-label"
                                    >Imagen</label
                                >
                                <input
                                    class="form-control"
                                    id="inputPrecioDescuento"
                                    type="file"
                                    ref="myFile"
                                    @change="previewFiles"
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
            inputName: "",
            inputDescription: "",
            inputPrice: "",
            inputPriceDiscto: "",
            inputFile: "",
            theModal: null,
        };
    },
    methods: {
        previewFiles(event) {
            console.log(event.target.files);
            this.inputFile = this.$refs.myFile.files[0];
            console.log(this.inputFile[0]);
        },
        createProduct: async function () {
            const { id, category_id } = this.$route.params;
            const formData = new FormData();
            formData.append("name", this.inputName);
            formData.append("description", this.inputDescription);
            formData.append("normal_price", this.inputPrice);
            formData.append("discount_price", this.inputPriceDiscto);
            formData.append("image", this.inputFile);
            formData.append("visible", true);

            try {
                const { data } = await axios.post(
                    "menus/" + id + "/categories/" + category_id + "/products",
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
