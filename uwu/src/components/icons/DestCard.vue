<template>
    <div class="card" v-for="destination in destinations">
        <h2>{{ destinations.SkinName }}</h2>
        <img :src="destinations.img" alt="" class="image">

        <button @click="add(destination)"> Buy </button>
        <h3>Price: {{ Price }}</h3> 
    </div>
</template>

<script setup>
import { defineProps, ref } from "vue";

const props = defineProps({
    destinations: Object,
});

const clicked = ref(0);
function add() {
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