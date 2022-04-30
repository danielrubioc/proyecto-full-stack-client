<template>
    <div class="container">
        <h4 class="text-center">Menú</h4>
        <div class="section my-5" v-for="(category, k) in categories" :key="k">
            <h2 class="text-center mb-5">{{ category.name }}</h2>
            <div class="row">
                <div
                    class="col-12 col-lg-6 mb-4"
                    v-for="(product, p) in category.products"
                    :key="p"
                >
                    <div class="row">
                        <div class="col-3">
                            <img
                                :src="`${this.url}/products/${product.image}`"
                                alt=""
                                class="img-fluid rounded-start"
                            />
                        </div>
                        <div class="col-9">
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
                                <span>$ {{ product.discount_price }}</span>
                            </p>
                        </div>
                    </div>
                    <!-- <div class="card mb-3">
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img
                                    :src="`${this.url}/products/${product.image}`"
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
                    </div> -->
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
export default {
    props: ["products", "categories"],
    async created() {
        console.log(import.meta.env.VITE_API_URL);
    },
    data: () => ({
        url: import.meta.env.VITE_API_URL,
    }),
};
</script>
<style>
body main.menu1 {
    background: #15181c;
    padding-top: 5rem;
    padding-bottom: 5rem;
}
</style>
<style scoped>
h4 {
    color: #e7272d;
    font-family: "Permanent Marker", Sans-serif;
    font-size: 24px;
    font-weight: 400;
}
h2 {
    text-align: center;
    color: #ffffff;
    font-size: 45px;
    font-weight: 900;
    line-height: 64px;
    font-family: "Philosopher", sans-serif;
    text-transform: capitalize;
}
.card-title {
    margin-bottom: 0.5rem;
    font-size: 23px;
    font-weight: 700;
    line-height: 44px;
    margin: 0px 0px -5px 0px;
    color: #ffffff;
}
p.card-text {
    color: #d5d5d5;
}
p.card-text span {
    font-family: "Barlow", cursive;
    color: #e7272d;
    font-size: 21px;
    line-height: 30px;
    padding-left: 20px;
}
img.img-fluid.rounded-start {
    border-radius: 8px;
    -webkit-border-radius: 8px;
}
.text-muted {
    --bs-text-opacity: 1;
    color: #6c757d !important;
    text-decoration: line-through;
}
</style>
