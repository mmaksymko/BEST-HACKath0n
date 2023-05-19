<script setup lang="ts">
import { onMounted, ref , provide} from 'vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'
import Diagram from "../components/LineDiagramIncome.vue"
import History from "../components/IncomeHistory.vue"
import TransIncomeExp from "../components/IncomeExpencesPopup.vue"
import {addTransactionModalVis, setPopupVisibility, unsetVars} from "@/visibilityvars";
import type { MoneyFlowInfo } from '@/types'
const route = useRoute();

const transactions = ref<MoneyFlowInfo[]>([]);
const update = ref(true);

async function getTransactions(id: number, date_start: Date, date_end: Date) {
  const response = await fetch(`https://trandafyl-test.onrender.com/moneyflow/profits/${id}?`
    + new URLSearchParams({
      "date_start": date_start.toISOString().slice(0, 19).replace('T', ' '),
      "date_end": date_end.toISOString().slice(0, 19).replace('T', ' ')
    }), {
    method: 'GET'
  })
  JSONToExpensesArray(await response.json());
}

async function addTransaction(user_id: number, operation_date:Date, summa:number, descript:string) {
    const response = await fetch('https://trandafyl-test.onrender.com/moneyflow/', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "user_id": user_id,
            "operation_date": operation_date,
            "summa": summa,
            "descript": descript
        })
    })
    if(response.ok){
      window.location.reload();
      transactions.value.push({
        id: transactions.value[transactions.value.length-1].id+1,
        date: operation_date,
        sum: summa,
        description: descript
      });
    }
    update.value = false;
    update.value = true;
}

function JSONToExpensesArray(json: any) {
  transactions.value = json.map((item: any) => ({
    id: item.id,
    date: new Date(item.operation_date),
    sum: Number(item.summa),
    description: item.descript,
  }));
}

provide('profit-transactions', transactions);

onMounted(async () => {
  await getTransactions(1, new Date(2000, 5, 19), new Date(2023, 5, 19));
  unsetVars();
  console.log(transactions.value);
});

</script>

<template v-if="update">
  <div class="expences__container" v-if="transactions.length">
    <Diagram
    :getTransactions="getTransactions"></Diagram>
    <History :setPopupVisibility="setPopupVisibility" :transactions="transactions"
    ></History>
  </div>
  <TransIncomeExp v-if="addTransactionModalVis" :setPopupVisibility="setPopupVisibility"
  :addTransaction="addTransaction"></TransIncomeExp>
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