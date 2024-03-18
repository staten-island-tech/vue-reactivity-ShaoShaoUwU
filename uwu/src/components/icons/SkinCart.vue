<div class="cart">
    <h2>{{ destination.skins }} - {{ destination.price }} x {{ destination.clicked }}</h2>
</div>
</template>

<script setup>
const props = defineProps({
destination: Object,
});

</script>

<style scoped>

</style>