<template>
    <div class="container">
        <div class="card shadow mb-4">
            <div class="card-header py-5 d-flex justify-content-between">
                <h6 class="m-0 font-weight-bold text-light">
                    Listado de Categorías
                </h6>
                <ModalCreateCategory @create-confirm="getCategories" />
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <div class="col-sm-12">
                        <table class="table table-hover">
                            <thead class="table-es">
                                <tr role="row">
                                    <th style="width: 109px">Nombre</th>
                                    <th style="width: 169px">Decripción</th>
                                    <th style="width: 169px">
                                        Productos (Cantidad)
                                    </th>
                                    <th style="width: 77px">Creado</th>
                                    <th style="width: 30px"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr
                                    class="odd"
                                    v-for="(category, k) in categories"
                                    :key="k"
                                >
                                    <td class="sorting_1">
                                        {{ category.name }}
                                    </td>
                                    <td>{{ category.description }}</td>
                                    <td>
                                        {{ category.count_product }}
                                    </td>
                                    <td>
                                        {{ getHumanDate(category.create_at) }}
                                    </td>
                                    <td>
                                        <RouterLink
                                            :to="`/menus/${this.$route.params.id}/categories/${category.id}`"
                                            class="btn btn-red"
                                        >
                                            <i class="fa fa-bars"></i>
                                            Ver Categoría
                                        </RouterLink>
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
import ModalCreateCategory from "@/components/ModalCreateCategory.vue";
export default {
    components: {
        ModalCreateCategory,
    },
    data() {
        return {
            categories: [],
        };
    },
    async mounted() {
        this.getCategories();
    },
    methods: {
        getCategories: async function () {
            const { id } = this.$route.params;
            try {
                const { data } = await axios.get("menus/" + id + "/categories");
                const { data: categories } = data;
                this.categories = categories;
            } catch (error) {
                console.log(error);
            }
        },
        getHumanDate: function (date) {
            return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
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
</style>
