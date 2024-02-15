<template>
    <div>
        <h2>{{ Luxs.SkinName }}</h2>
        <img :src="Luxs.img" alt="" class="image">
        <button @click="increment"> buy </button>
        <h3>{{ clicked }}</h3>
    </div>
</template>

<script setup>
import {ref} from "vue";
const props = defineProps({
    Lux: Object,
});

//clicker logic
const clicked = ref(0);
function increment(){
    clicked.value++;
}
</script>

<style scoped>
img {
    width: 300px;
    height: 300px;

}

</style>