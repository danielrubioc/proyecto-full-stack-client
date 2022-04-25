<template>
    <div class="container">
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li
                    v-for="(li, k) in listBreadcramb"
                    :key="k"
                    class="breadcrumb-item"
                >
                    <RouterLink :to="li.url" class="nav-link active">
                        {{ li.name }}</RouterLink
                    >
                </li>
            </ol>
        </nav>
    </div>
</template>

<script>
export default {
    props: ["listBreadcramb"],
    data() {
        return {
            count: 0,
            menus: [],
        };
    },
};
</script>

<style scoped>
.breadcrumb-item + .breadcrumb-item::before {
    margin-top: 10px;
}
</style>
