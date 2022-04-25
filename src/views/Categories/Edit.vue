<template>
    <main>
        <div class="mt-2">
            <Breadcrumb :listBreadcramb="list" />
        </div>
        <div class="container">
            <div class="card">
                <h5 class="card-header">Editando categoría</h5>

                <form class="p-5" v-on:submit.prevent="updateCategory">
                    <div class="mb-3">
                        <label for="exampleInputNombre" class="form-label"
                            >Nombre</label
                        >
                        <input
                            type="text"
                            class="form-control"
                            id="exampleInputNombre"
                            v-model="categoryName"
                            aria-describedby="emailHelp"
                            required
                        />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label"
                            >Descripcion</label
                        >
                        <textarea
                            type="text"
                            class="form-control"
                            v-model="categoryDescription"
                            id="exampleInputPassword1"
                            required
                        >
                        </textarea>
                    </div>
                    <div class="mt-5 d-flex justify-content-between">
                        <ModalDelete @delete-confirm="deleteMenu" />
                        <button type="submit" class="btn btn-primary">
                            Actualizar
                        </button>
                    </div>
                </form>
            </div>
        </div>
        <br />

        <TableProducts />
    </main>
</template>

<script>
import TableProducts from "@/components/TableProducts.vue";
import Breadcrumb from "@/components/Breadcrumb.vue";
import ModalDelete from "@/components/ModalDelete.vue";
import axios from "axios";

export default {
    components: {
        TableProducts,
        Breadcrumb,
        ModalDelete,
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
            categoryName: "",
            categoryDescription: "",
        };
    },
    async created() {
        this.getMenu();
        this.getCategory();
    },

    methods: {
        updateCategory: async function () {
            const formData = new FormData();
            const { id, category_id } = this.$route.params;
            formData.append("name", this.categoryName);
            formData.append("description", this.categoryDescription);

            try {
                const { data } = await axios.put(
                    "menus/" + id + "/categories/" + category_id,
                    formData
                );
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
            try {
                const { data } = await axios.delete(
                    "menus/" +
                        this.$route.params.id +
                        "/categories/" +
                        this.$route.params.category_id
                );
                if (data.ok) {
                    this.$swal("Eliminado con Éxito");
                    this.$router.push("/menus/" + this.$route.params.id);
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
                this.list.push({
                    url: "/menus/" + menu[0].id,
                    name: menu[0].name,
                });
            } catch (error) {
                console.log(error);
            }
        },
        getCategory: async function () {
            const { id } = this.$route.params;
            try {
                const { data } = await axios.get("menus/" + id + "/categories");
                const { data: category } = data;
                this.categoryName = category[0].name;
                this.categoryDescription = category[0].description;
                this.list.push({
                    url: "",
                    name: this.categoryName,
                });
            } catch (error) {
                console.log(error);
            }
        },
    },
};
</script>
