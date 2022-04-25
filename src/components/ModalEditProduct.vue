<template>
    <div>
        <button
            type="button"
            class="btn btn-info"
            data-bs-toggle="modal"
            data-bs-target="#editProduct"
        >
            Ver Detalle
        </button>
        <!-- Modal -->
        <div
            class="modal fade"
            id="editProduct"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabindex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
        >
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <form class="p-1" v-on:submit.prevent="editProduct">
                        <div class="modal-header">
                            <h5 class="modal-title" id="staticBackdropLabel">
                                Actualizar Producto
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
                            <!-- <div class="mb-3">
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
                            </div> -->
                        </div>
                        <div class="modal-footer">
                            <button
                                type="button"
                                class="btn btn-secondary"
                                data-bs-dismiss="modal"
                                id="closeModalEdit"
                            >
                                Cancelar
                            </button>
                            <button type="submit" class="btn btn-primary">
                                Actualizar
                            </button>
                        </div>
                        {{ productEdit }}
                        {{ inputName }}
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    props: ["productEdit"],
    data() {
        return {
            inputName: this.productEdit.name,
            inputDescription: this.productEdit.description,
            inputPrice: this.productEdit.normal_price,
            inputPriceDiscto: this.productEdit.discount_price,
            theModal: null,
        };
    },
    methods: {
        editProduct: async function () {
            const { id, category_id } = this.$route.params;
            const formData = new FormData();
            formData.append("name", this.inputName);
            formData.append("description", this.inputDescription);
            formData.append("normal_price", this.inputPrice);
            formData.append("discount_price", this.inputPriceDiscto);
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
            /*      
            this.catName = "";
            this.catDescription = "";
            document.getElementById("closeModalEdit").click(); */
        },
    },
};
</script>
