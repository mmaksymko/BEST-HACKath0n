<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'
import Diagram from "../components/DoughnutDiagramDeposit.vue"
import History from "../components/DepositHistory.vue"
import TransDepLoan from "../components/LoanDepositPopup.vue"
import LoanDep from "../components/AddDepCredPopup.vue"

const route = useRoute();

</script>

<template>
  <div class="deposits__container">
      <Diagram></Diagram>
      <History></History>
  </div>
  <TransDepLoan></TransDepLoan>
  <LoanDep></LoanDep>
  <RouterView />
</template>

<style scoped>
.deposits__container {
  display: grid;
  width: 100%;
  align-items: center;
  gap: 5rem;
  grid-template-columns: 70% 30%;
  padding: 0 5rem;
}
</style>