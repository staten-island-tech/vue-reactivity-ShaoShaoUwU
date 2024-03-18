<template>
    <div>
        <DestCard v-for="destinations in destinations"
    :key="destinations.SkinName"
    :Destination="destination"
    />
    </div>
</template>
  
  <script setup>
  import DestCard from '@/components/icons/DestCard.vue'
  import { useSkins } from '@/stores/skins';

const skins = useSkins().skins

  </script>
  
  <style scoped>
  
  </style>
  