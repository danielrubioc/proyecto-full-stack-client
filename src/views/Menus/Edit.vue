<template>
    <main>
        <div class="mt-2">
            <Breadcrumb :listBreadcramb="list" />
        </div>
        <EditMenu :menu="this.menuEdit" />
        <TableCategories />
    </main>
</template>

<script>
import TableCategories from "@/components/TableCategories.vue";
import Breadcrumb from "@/components/Breadcrumb.vue";
import EditMenu from "@/components/EditMenu.vue";
import axios from "axios";
import { RouterLink } from "vue-router";

export default {
    components: {
        TableCategories,
        Breadcrumb,
        EditMenu,
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
            menuEdit: {
                name: "",
                url: "no aplica",
            },
        };
    },
    async created() {
        this.getMenu();
    },
    methods: {
        getMenu: async function () {
            const { id } = this.$route.params;
            try {
                const { data } = await axios.get("menus/" + id);
                const { data: menu } = data;
                this.menuEdit.name = menu[0].name;
                this.menuEdit.url = menu[0].url;
                this.list.push({
                    url: "",
                    name: this.menuEdit.name,
                });
            } catch (error) {
                console.log(error);
            }
        },
    },
};
</script>
