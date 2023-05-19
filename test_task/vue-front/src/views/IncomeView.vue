<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'
import Diagram from "../components/LineDiagramIncome.vue"
import History from "../components/IncomeHistory.vue"
import TransIncomeExp from "../components/IncomeExpencesPopup.vue"
import {addTransactionModalVis, setPopupVisibility, unsetVars} from "@/visibilityvars";
const route = useRoute();

async function getTransactions(id: number, date_start: Date, date_end: Date) {
  const response = await fetch(`https://trandafyl-test.onrender.com/moneyflow/${id}?`
    + new URLSearchParams({
      "date_start": date_start.toISOString().slice(0, 19).replace('T', ' '),
      "date_end": date_end.toISOString().slice(0, 19).replace('T', ' ')
    }), {
    method: 'GET'
  })
}

onMounted(async () => {
  unsetVars();
});

</script>

<template>
  <div class="income__container">
      <Diagram ></Diagram>
      <History
      :setPopupVisibility="setPopupVisibility"></History>
  </div>
  <TransIncomeExp v-if="addTransactionModalVis"
  :setPopupVisibility="setPopupVisibility"></TransIncomeExp>
  <RouterView />
</template>

<style scoped>
.income__container {
  display: grid;
  width: 100%;
  align-items: center;
  gap: 5rem;
  grid-template-columns: 70% 30%;
  padding: 0 5rem;
}
@media screen and (max-width: 1280px) {
  .income__container {
    gap: 3rem;
    padding: 0 3rem;
  }
}
@media screen and (max-width: 920px) {
  .income__container {
    display: flex;
    flex-direction: column;
    margin-bottom: 6rem;
  }
}
@media screen and (max-width: 414px) {
  .income__container {
    padding: 0 1rem;
    gap: 2rem;
    margin-bottom: 3rem;
  }
}
</style>