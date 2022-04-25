<template>
    <div class="container">
        <div class="card shadow mb-4">
            <div class="card-header py-3 d-flex justify-content-between">
                <h6 class="m-0 font-weight-bold text-primary">
                    Listado de Menús
                </h6>
                <RouterLink to="/menus/nuevo" class="btn btn-success">
                    Nuevo Menú
                </RouterLink>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <div class="col-sm-12">
                        <table class="table table-hover">
                            <thead class="table-es">
                                <tr role="row">
                                    <th style="width: 109px">Nombre</th>
                                    <th style="width: 169px">Url</th>
                                    <th style="width: 77px">Creado</th>
                                    <th style="width: 30px"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr
                                    class="odd"
                                    v-for="(menu, k) in menus"
                                    :key="k"
                                >
                                    <td class="sorting_1">
                                        {{ menu.name }}
                                    </td>
                                    <td>{{ menu.url }}</td>
                                    <td>{{ getHumanDate(menu.create_at) }}</td>
                                    <td class="d-flex flex-row-reverse">
                                        <RouterLink
                                            :to="'/menus/' + menu.id"
                                            class="btn btn-primary"
                                        >
                                            <i class="fa fa-bars"></i>
                                            Ver Menú</RouterLink
                                        >
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

export default {
    data() {
        return {
            count: 0,
            menus: [],
        };
    },
    async mounted() {
        this.getMenus();
    },
    methods: {
        getMenus: async function () {
            try {
                const { data } = await axios.get("/menus");
                const { data: menus } = await data;
                this.menus = menus;
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
thead.table-es {
    background: #f3f6f9 !important;
    color: black;
}
</style>
