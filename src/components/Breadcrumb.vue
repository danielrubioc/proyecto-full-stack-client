<template>
    <div class="container">
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li
                    v-for="(li, k) in listBreadcramb"
                    :key="k"
                    class="breadcrumb-item"
                >
                    <RouterLink
                        :to="li.url"
                        class="nav-link nav-breadcrumbs active"
                    >
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
.nav-breadcrumbs {
    text-decoration: none;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
        border-color 0.15s ease-in-out;
    font-family: "Permanent Marker", cursive;
    color: #fff;
    background: #e7272d;
}
.nav-breadcrumbs:hover,
.nav-breadcrumbs:focus,
.nav-breadcrumbs:visited {
    color: #fff;
    background: #d4242a;
}
</style>
