<template>
    <div>
        <main class="menu1" v-if="this.$route.params.desing_id == 1">
            <Design1 :products="products" :categories="categories" />
        </main>
        <main class="menu2" v-if="this.$route.params.desing_id == 2">
            <Design2 :products="products" :categories="categories" />
        </main>
    </div>
</template>

<script>
import axios from "axios";
import Design1 from "@/components/Design1.vue";
import Design2 from "@/components/Design2.vue";
export default {
    components: {
        Design1,
        Design2,
    },
    data() {
        return {
            products: [],
            categories: [],
        };
    },
    async created() {
        this.getMenu();
    },

    methods: {
        getMenu: async function () {
            const { menu_id } = this.$route.params;
            try {
                const { data } = await axios.get(
                    `menus/${menu_id}/menu-digital`
                );

                this.products = data.data;

                //filter repeat
                const uniqueObjects = [
                    ...new Map(
                        this.products.map((item) => [item.category_id, item])
                    ).values(),
                ];

                this.categories = uniqueObjects.map((el) => {
                    const productByCategory = this.products.filter(
                        (e) => e.category_id == el.category_id
                    );
                    return {
                        name: el.category_name,
                        id: el.category_id,
                        products: productByCategory,
                    };
                });

                console.log(this.categories);
            } catch (error) {
                console.log(error);
            }
        },
    },
};
</script>
