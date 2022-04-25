<template>
    <div class="container">
        <div class="card shadow mb-4">
            <div class="card-header py-3 d-flex justify-content-between">
                <h6 class="m-0 font-weight-bold text-primary">
                    Listado de Productos
                </h6>
                <ModalCreateProduct @create-confirm="getProducts" />
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <div class="col-sm-12">
                        <table class="table table-hover">
                            <thead class="table-es">
                                <tr role="row">
                                    <th style="width: 109px">Nombre</th>
                                    <th style="width: 169px">Precio normal</th>
                                    <th style="width: 169px">Precio normal</th>
                                    <th style="width: 77px">Creado</th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr
                                    class="odd"
                                    v-for="(product, k) in products"
                                    :key="k"
                                >
                                    <td class="sorting_1">
                                        {{ product.name }}
                                    </td>
                                    <td>{{ product.normal_price }}</td>
                                    <td>{{ product.discount_price }}</td>
                                    <td>
                                        {{ getHumanDate(product.create_at) }}
                                    </td>
                                    <td>
                                        <div class="form-check form-switch">
                                            <input
                                                class="form-check-input"
                                                type="checkbox"
                                                role="switch"
                                                id="flexSwitchCheckChecked"
                                                :checked="product.visible"
                                                @change="statusProduct(k)"
                                            />
                                            <label
                                                class="form-check-label"
                                                for="flexSwitchCheckChecked"
                                            >
                                                <span v-if="product.visible">
                                                    Visible</span
                                                >
                                                <span v-if="!product.visible">
                                                    No Visible</span
                                                >
                                            </label>
                                        </div>
                                    </td>
                                    <td class="d-flex flex-row-reverse">
                                        <ModalEditProduct
                                            :product-edit="product"
                                            @create-confirm="getProducts"
                                        />

                                        <ModalProductDelete
                                            @delete-product-confirm="
                                                deleteProduct(product.id)
                                            "
                                        />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import moment from "moment";
import ModalCreateProduct from "@/components/ModalCreateProduct.vue";
import ModalEditProduct from "@/components/ModalEditProduct.vue";
import ModalProductDelete from "@/components/ModalProductDelete.vue";

export default {
    components: {
        ModalCreateProduct,
        ModalEditProduct,
        ModalProductDelete,
    },
    data() {
        return {
            count: 0,
            products: [],
        };
    },
    async mounted() {
        this.getProducts();
    },
    methods: {
        getProducts: async function () {
            try {
                const { data } = await axios.get(
                    "menus/" +
                        this.$route.params.id +
                        "/categories/" +
                        this.$route.params.category_id +
                        "/products"
                );
                const { data: products } = await data;
                this.products = products;
            } catch (error) {
                console.log(error);
            }
        },
        getHumanDate: function (date) {
            return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
        },
        deleteProduct: async function (product_id) {
            try {
                const { data } = await axios.delete(
                    "/menus/" +
                        this.$route.params.id +
                        "/categories/" +
                        this.$route.params.category_id +
                        "/products/" +
                        product_id
                );
                if (data.ok) {
                    this.$swal("Actualizado con Éxito");
                    this.getProducts();
                } else {
                    this.$swal(data.msg);
                }
            } catch (error) {
                console.log(error);
            }
        },

        statusProduct: async function (key) {
            try {
                this.products[key].visible = !this.products[key].visible;

                const formData = new FormData();
                formData.append("name", this.products[key].name);
                formData.append("description", this.products[key].description);
                formData.append(
                    "normal_price",
                    this.products[key].normal_price
                );
                formData.append(
                    "discount_price",
                    this.products[key].discount_price
                );
                formData.append("visible", this.products[key].visible);
                const { data } = await axios.put(
                    "/menus/" +
                        this.$route.params.id +
                        "/categories/" +
                        this.$route.params.category_id +
                        "/products/" +
                        this.products[key].id,
                    formData
                );
                if (data.ok) {
                    this.$swal("Eliminado con Éxito");
                    this.getProducts();
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
thead.table-es {
    background: #f3f6f9 !important;
    color: black;
}
</style>
