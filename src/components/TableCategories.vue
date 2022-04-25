<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <div class="card shadow mb-4">
                    <div
                        class="card-header py-3 d-flex justify-content-between"
                    >
                        <h6 class="m-0 font-weight-bold text-primary">
                            Listado de Categorías
                        </h6>

                        <ModalCreateCategory @create-confirm="getCategories" />
                    </div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <div class="col-sm-12">
                                <table
                                    class="table table-bordered dataTable"
                                    id="dataTable"
                                    width="100%"
                                    cellspacing="0"
                                    role="grid"
                                    aria-describedby="dataTable_info"
                                    style="width: 100%"
                                >
                                    <thead>
                                        <tr role="row">
                                            <th style="width: 109px">Nombre</th>
                                            <th style="width: 169px">
                                                Decripción
                                            </th>
                                            <th style="width: 169px">
                                                Productos(Cantidad)
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
                                                {{
                                                    getHumanDate(
                                                        category.create_at
                                                    )
                                                }}
                                            </td>
                                            <td class="d-flex flex-row-reverse">
                                                <RouterLink
                                                    :to="
                                                        '/menus/' +
                                                        this.$route.params.id +
                                                        '/categories/' +
                                                        category.id
                                                    "
                                                    class="btn btn-primary"
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

<style scoped></style>
