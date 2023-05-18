<script setup lang="ts">
import { RouterLink, RouterView, useRoute } from 'vue-router'
import Diagram from "../components/Diagram.vue"
import History from "../components/History.vue"
import TransDepLoan from "../components/LoanDepositPopup.vue"

const route = useRoute();

</script>

<template>
  <div class="credits__container">
      <Diagram></Diagram>
      <History></History>
  </div>
  <TransDepLoan></TransDepLoan>
  <RouterView />
</template>

<style scoped>
.credits__container {
  display: grid;
  width: 100%;
  align-items: center;
  gap: 5rem;
  grid-template-columns: 70% 30%;
  padding: 0 5rem;
}
</style>