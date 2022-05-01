<template>
    <div>
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
                    <form v-on:submit.prevent="editProduct">
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
                                    v-model="productEdit.name"
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
                                    v-model="productEdit.description"
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
                                    v-model="productEdit.normal_price"
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
                                    v-model="productEdit.discount_price"
                                    required
                                />
                            </div>
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
            theModal: null,
        };
    },
    methods: {
        editProduct: async function () {
            try {
                const { data } = await axios.put(
                    `menus/${this.$route.params.id}/categories/${this.$route.params.category_id}/products/${this.productEdit.id}`,
                    this.productEdit
                );
                this.$emit("createConfirm", true);
                document.getElementById("closeModalEdit").click();
            } catch (error) {
                console.log(error);
            }
        },
    },
};
</script>
