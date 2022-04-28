<template>
    <div class="container">
        <div class="section" v-for="(category, k) in categories" :key="k">
            <h2 class="text-center my-5">{{ category.name }}</h2>
            <div class="row">
                <div
                    class="col-6"
                    v-for="(product, p) in category.products"
                    :key="p"
                >
                    <div class="card mb-3">
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img
                                    :src="`http://localhost:5000/products/${product.image}`"
                                    alt=""
                                    class="img-fluid rounded-start"
                                />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">
                                        {{ product.name }}
                                    </h5>
                                    <p class="card-text">
                                        {{ product.description }}
                                    </p>
                                    <p class="card-text">
                                        Precio:
                                        <small class="text-muted">{{
                                            product.normal_price
                                        }}</small>
                                        {{ product.discount_price }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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
