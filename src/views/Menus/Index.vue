<script setup>
import TableMenus from "@/components/TableMenus.vue";
import Breadcrumb from "@/components/Breadcrumb.vue";
const list = [
    {
        url: "/menus",
        name: "Menus",
    },
];
</script>

<template>
    <main>
        <div class="mt-2">
            <Breadcrumb :listBreadcramb="list" />
        </div>
        <TableMenus />
    </main>
</template>
