<template>
    <div class="container">
        <div class="card shadow mb-4">
            <div class="card-header py-5 d-flex justify-content-between">
                <h6 class="m-0 font-weight-bold text-light">
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
                                    <td>
                                        <button
                                            type="button"
                                            class="btn btn-info"
                                            data-bs-toggle="modal"
                                            data-bs-target="#editProduct"
                                            @click="setData(product)"
                                        >
                                            Ver Detalle
                                        </button>
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
        <ModalEditProduct
            :product-edit="product"
            @create-confirm="getProducts"
        />
    </div>
</template>

<script>
import axios from "axios";
import moment from "moment";
import ModalEditProduct from "@/components/ModalEditProduct.vue";
import ModalCreateProduct from "@/components/ModalCreateProduct.vue";
import ModalProductDelete from "@/components/ModalProductDelete.vue";
export default {
    components: {
        ModalCreateProduct,
        ModalEditProduct,
        ModalProductDelete,
    },
    data() {
        return {
            products: [],
            product: {
                id: "",
                name: "",
                description: "",
                normal_price: "",
                discount_price: "",
                visible: "",
            },
        };
    },
    async mounted() {
        this.getProducts();
    },
    methods: {
        getProducts: async function () {
            try {
                const { data } = await axios.get(
                    `menus/${this.$route.params.id}/categories/${this.$route.params.category_id}/products`
                );
                const { data: products } = data;
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
                    `/menus/${this.$route.params.id}/categories/${this.$route.params.category_id}/products/${product_id}`
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
        setData: function (data) {
            this.product = data;
        },
        statusProduct: async function (key) {
            try {
                this.products[key].visible = !this.products[key].visible;
                const { data } = await axios.put(
                    `/menus/${this.$route.params.id}/categories/${this.$route.params.category_id}/products/${this.products[key].id}`,
                    this.products[key]
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
.table-es {
    background: #ffffff !important;
    color: #e7272d;
    text-transform: uppercase;
    font-family: "Barlow";
}
.btn-red {
    background: #e7272d;
    color: white;
    text-transform: uppercase;
    font-family: "Barlow";
    border-radius: 30px;
}
.btn-red:hover,
.btn-red:focus {
    background: #bc2025;
    color: white;
    text-transform: uppercase;
    font-family: "Barlow";
}
.card {
    border: none;
    background-image: url(https://demo.themewinter.com/wp/gloreya/wp-content/uploads/2019/10/ingredient_bg-1.png);
    background-size: 100% 100%;
}
h6 {
    font-family: "Barlow";
    text-transform: uppercase;
    font-size: 30px;
}
tr.odd {
    color: white;
    font-family: "Barlow";
    text-transform: uppercase;
    font-size: 20px;
}
tr.odd:hover {
    background: #1a2026;
    color: white;
}
.table-hover > tbody > tr:hover > * {
    color: white;
}
a.btn.btn-success {
    /* color: #e7272d; */
    /* font-family: "Permanent Marker", Sans-serif; */
    font-size: 20px;
    font-weight: 400;
    font-family: "Barlow";
    text-transform: uppercase;
}
.btn-success {
    border-radius: 35px;
}
.btn.btn-info {
    color: white;
    text-transform: uppercase;
    font-family: "Barlow";
    border-radius: 30px;
}
</style>
