<template>
    <main>
        <div class="mt-2">
            <Breadcrumb :listBreadcramb="list" />
        </div>
        <CreateMenu />
    </main>
</template>

<script>
import TableMenus from "@/components/TableMenus.vue";
import Breadcrumb from "@/components/Breadcrumb.vue";
import CreateMenu from "@/components/CreateMenu.vue";

export default {
    components: {
        TableMenus,
        Breadcrumb,
        CreateMenu,
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
        };
    },
};
</script>
