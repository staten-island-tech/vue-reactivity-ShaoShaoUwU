<template>
  <div class="cart-gallery">
    <CoolCart v-for="item in store.cart"
    :Item="item">
    </CoolCart>
  </div>
</template>

<script setup>
import { useSkins } from '@/stores/skins.js';

const store = useSkins()

</script>

<style scoped>

</style>
