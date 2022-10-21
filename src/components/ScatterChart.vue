<script setup>
import { ref, onMounted } from "vue";

const main = ref(null);

onMounted(() => {});
</script>
<template>
    <div class="main" ref="main"></div>
</template>
<style lang="scss" scoped>
.main {
    width: "";
}
</style>
