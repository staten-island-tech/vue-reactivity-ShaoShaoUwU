<template>
    <div class="card" v-for="destination in destinations" :key="destination.SkinName">
        <h2>{{ destinations.SkinName }}</h2>
        <img :src="destinations.img" alt="" class="image">

        <button @click="addCart(destination)"> Buy </button>
        <h3>Price: {{ destination.Price }}</h3> 
    </div>
</template>

<script setup>
import { useSkins } from "@/stores/skins.js";

const props = defineProps({
    destinations: Object,
});

const store = useSkins();

function addCart(destination) {
  if (destination.clicked === 0) {
    store.cart.push(destination);
  }
  destination.clicked++;
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