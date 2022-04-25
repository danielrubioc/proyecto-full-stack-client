<template>
    <main>
        <div class="mt-2">
            <Breadcrumb :listBreadcramb="list" />
        </div>
        <div class="container">
            <div class="card">
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
                    <div class="d-flex flex-row-reverse">
                        <button type="submit" class="btn btn-primary">
                            Crear
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </main>
</template>

<script>
import TableMenus from "@/components/TableMenus.vue";
import Breadcrumb from "@/components/Breadcrumb.vue";
import axios from "axios";

export default {
    props: ["foo"],
    components: {
        TableMenus,
        Breadcrumb,
    },
    data() {
        return {
            list: [
                {
                    url: "/menus",
                    name: "Menus",
                },
                {
                    url: "/menus/nuevo",
                    name: "Nuevo",
                },
            ],
            menuName: "menu1",
            menuUrl: "url",
        };
    },
    methods: {
        createMenu: async function () {
            const formData = new FormData();
            formData.append("name", this.menuName);
            formData.append("url", this.menuUrl);

            try {
                const { data } = await axios.post("menus", formData);
                if (data.ok) {
                    this.$swal("Creado con éxito!");
                    this.$router.push("/menus");
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
