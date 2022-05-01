<template>
    <main>
        <div class="mt-2">
            <Breadcrumb :listBreadcramb="list" />
        </div>
        <EditCategory :category="categoryEdit" />
        <TableProducts />
    </main>
</template>

<script>
import TableProducts from "@/components/TableProducts.vue";
import Breadcrumb from "@/components/Breadcrumb.vue";
import EditCategory from "@/components/EditCategory.vue";
import axios from "axios";

export default {
    components: {
        TableProducts,
        Breadcrumb,
        EditCategory,
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
            categoryEdit: {
                name: "",
                description: "",
            },
        };
    },
    async created() {
        this.getMenu();
        this.getCategory();
    },

    methods: {
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
                this.categoryEdit.name = category[0].name;
                this.categoryEdit.description = category[0].description;
                this.list.push({
                    url: "",
                    name: this.categoryEdit.name,
                });
            } catch (error) {
                console.log(error);
            }
        },
    },
};
</script>
