<script setup lang="ts">
import { onMounted, ref , provide } from 'vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'
import Diagram from "../components/LineDiagramExpences.vue"
import History from "../components/ExpencesHistory.vue"
import TransIncomeExp from "../components/IncExpPopup.vue"
import {addTransactionModalVis, setPopupVisibility, unsetVars} from "@/visibilityvars";
import type { MoneyFlowInfo } from '@/types'
const route = useRoute();

const transactions = ref<MoneyFlowInfo[]>([{
  id: 0,
  date: new Date(2023, 5, 18),
  sum: 100,
  description: "fdf"
}]);

provide('transactions', transactions);

onMounted(async () => {
  unsetVars();
});

</script>

<template>
  <div class="expences__container">
    <Diagram
    :transactions="transactions"></Diagram>
      <History
      :setPopupVisibility="setPopupVisibility"  
      ></History>
  </div>
  <TransIncomeExp v-if="addTransactionModalVis"
  :setPopupVisibility="setPopupVisibility"></TransIncomeExp>
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
@media screen and (max-width: 414px) {
  .expences__container {
    display: flex;
    flex-direction: column;
    padding: 0 1rem;
    gap: 2rem;
  }
}
</style>