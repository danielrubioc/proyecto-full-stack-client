<template>
    <main>
        <div class="mt-2">
            <Breadcrumb :listBreadcramb="list" />
        </div>
        <div class="container">
            <div class="card">
                <h5 class="card-header">Editando Menú</h5>
                <form class="p-5" v-on:submit.prevent="createMenu">
                    <div class="mb-3">
                        <label for="exampleInputNombre" class="form-label"
                            >Nombre</label
                        >
                        <input
                            type="text"
                            class="form-control"
                            id="exampleInputNombre"
                            v-model="menuName"
                            aria-describedby="emailHelp"
                            required
                        />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label"
                            >Password</label
                        >
                        <input
                            type="text"
                            class="form-control"
                            v-model="menuUrl"
                            id="exampleInputPassword1"
                            required
                        />
                    </div>
                    <div class="mt-5 d-flex justify-content-between">
                        <ModalDelete @delete-confirm="deleteMenu" />
                        <button type="submit" class="btn btn-primary">
                            Actualizar
                        </button>

                        <RouterLink
                            :to="`/digital-menus/${this.$route.params.id}/design/1`"
                            class="btn btn-success"
                        >
                            Ver Menú Digital
                        </RouterLink>
                    </div>
                </form>
            </div>
        </div>
        <br />

        <TableCategories />
    </main>
</template>

<script>
import TableCategories from "@/components/TableCategories.vue";
import Breadcrumb from "@/components/Breadcrumb.vue";
import ModalDelete from "@/components/ModalDelete.vue";
import axios from "axios";
import { RouterLink } from "vue-router";

export default {
    props: ["foo"],
    components: {
        TableCategories,
        Breadcrumb,
        ModalDelete,
        RouterLink,
    },
    data() {
        return {
            list: [
                {
                    url: "/menus",
                    name: "Menus",
                },
            ],
            menuName: "",
            menuUrl: "url",
        };
    },
    async created() {
        this.getMenu();
    },

    methods: {
        createMenu: async function () {
            const formData = new FormData();
            const { id } = this.$route.params;
            formData.append("name", this.menuName);
            formData.append("url", this.menuUrl);

            try {
                const { data } = await axios.put("menus/" + id, formData);
                if (data.ok) {
                    this.$swal("Actualizado con éxito!");
                } else {
                    this.$swal(data.msg);
                }
            } catch (error) {
                console.log(error);
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
        getMenu: async function () {
            const { id } = this.$route.params;
            try {
                const { data } = await axios.get("menus/" + id);
                const { data: menu } = data;
                this.menuName = menu[0].name;
                this.menuUrl = menu[0].url;
                this.list.push({
                    url: "",
                    name: this.menuName,
                });
            } catch (error) {
                console.log(error);
            }
        },
    },
};
</script>
