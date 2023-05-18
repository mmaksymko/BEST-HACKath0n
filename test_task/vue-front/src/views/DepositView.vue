<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'
import Diagram from "../components/DoughnutDiagramDeposit.vue"
import History from "../components/DepositHistory.vue"
import TransDepLoan from "../components/LoanDepositPopup.vue"
import LoanDep from "../components/AddDepCredPopup.vue"
import {addTransactionModalVis, addNewDepositCreditModalVis, 
  setPopupVisibility, setNewCreditPopupVis, unsetVars} from "@/visibilityvars";

const route = useRoute();
onMounted(async () => {
  unsetVars();
});
</script>

<template>
  <div class="deposits__container">
      <Diagram
      :setNewCreditPopupVis="setNewCreditPopupVis"
      ></Diagram>
      <History
      :setPopupVisibility=setPopupVisibility ></History>
  </div>
  <TransDepLoan v-if=addTransactionModalVis 
  :setPopupVisibility=setPopupVisibility 
  >
  </TransDepLoan>
  <LoanDep v-if="addNewDepositCreditModalVis" 
  :setNewCreditPopupVis="setNewCreditPopupVis"></LoanDep>
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