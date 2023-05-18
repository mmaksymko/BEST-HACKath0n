<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'
import Diagram from "../components/LineDiagramExpences.vue"
import History from "../components/IncomeHistory.vue"
import TransIncomeExp from "../components/IncExpPopup.vue"
const route = useRoute();
</script>

<template>
  <div class="expences__container">
      <Diagram></Diagram>
      <History></History>
  </div>
  <TransIncomeExp></TransIncomeExp>
  <RouterView />
</template>

<style scoped>
.expences__container {
  display: grid;
  width: 100%;
  align-items: center;
  gap: 5rem;
  grid-template-columns: 70% 30%;
  padding: 0 5rem;
}
</style>