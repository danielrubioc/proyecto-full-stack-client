<script setup>
import { RouterLink, RouterView } from "vue-router";
import NavBar from "@/components/NavBar.vue";
</script>

<template>
    <NavBar />
    <RouterView />
</template>

<style>
@import "@/assets/base.css";
div#errors {
    color: #e7272d;
}
</style>
