<template>
    <div class="container">
        <table
            class="table table-borderless mt-5"
            v-for="(category, k) in categories"
            :key="k"
        >
            <h2>{{ category.name }}</h2>
            <thead>
                <tr>
                    <th scope="col"></th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(product, p) in category.products" :key="p">
                    <td>{{ product.name }}</td>
                    <td>{{ product.description }}</td>
                    <td>{{ product.discount_price }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped>
body {
    background: white !important;
}
</style>
<script>
import axios from "axios";
import Design1 from "@/components/Design1.vue";
export default {
    props: ["products", "categories"],
};
</script>
