<template>
    <div>
        <h2>{{ destinations.SkinName }}</h2>
        <img :src="destinations.img" alt="" class="image">
        <button @click="increment"> Buy </button>
        <h3>Clicked: {{ clicked }}</h3>
    </div>
</template>

<script setup>
import { defineProps, ref } from "vue";

const props = defineProps({
    destinations: Object,
});

const clicked = ref(0);
function increment() {
    clicked.value++;
}
</script>

<style scoped>
.image {
    width: 100%;
    max-width: 300px;
    height: auto;
}
button {
    margin-top: 10px;
}
</style>