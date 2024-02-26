<template>
    <div>
        <h2>{{ destination.SkinName }}</h2>
        <img :src="destination.img" alt="" class="image">
        <button @click="increment"> buy </button>
        <h3>{{ clicked }}</h3>
    </div>
</template>

<script setup>
import {ref} from "vue";
const props = defineProps({
    destination: Object,
});

//clicker logic
const clicked = ref(0);
function increment(){
    clicked.value++;
}
</script>

<style scoped>
img {
    flex-direction: flex;

}

</style>