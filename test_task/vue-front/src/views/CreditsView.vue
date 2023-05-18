<script setup lang="ts">
import { RouterLink, RouterView, useRoute } from 'vue-router'
import { ref, onMounted } from 'vue';
import Diagram from "../components/Diagram.vue"
import History from "../components/History.vue"
import TransDepLoan from "../components/LoanDepositPopup.vue"
import type { CreditInfo, CreditDeposit } from '../types';

const route = useRoute();
const popopVisibility = ref<boolean>(false);
function setPopupVisibility(vis: boolean) {
  popopVisibility.value = vis;
}
const currCreditId = ref(-1);
const creditsTransactions = ref<CreditInfo[]>([{
  id: 0,
  date: new Date(2023, 5, 18),
  sum: 100
}
]);
const credits = ref<CreditDeposit[]>([]);

async function getTransactions(id: number, date_start: Date, date_end: Date) {
  const response = await fetch(`http://localhost:3000/moneyflow/${id}?`
    + new URLSearchParams({
      "date_start": date_start.toISOString().slice(0, 19).replace('T', ' '),
      "date_end": date_end.toISOString().slice(0, 19).replace('T', ' ')
    }), {
    method: 'GET'
  })
}

async function getCreditDepositTransaction(cd_id: number) {
  const response = await fetch(`http://localhost:3000/cd_payment/all/${cd_id}`, {
    method: 'GET'
  })
  const resp = await response.json();
  creditsTransactions.value = JSONToCreditTransArray(resp) as any;
}

async function putCreditTransaction(sum:number,date:Date) {
  const response = await fetch('http://localhost:3000/cd_payment', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "cd_id": currCreditId.value,
      "operation_date": date,
      "amount": sum
    })
  });
  console.log(await response.json());
  if(!response.ok){
    return;
  }
  setPopupVisibility(false);
  creditsTransactions.value.push({
    id: creditsTransactions.value.length,
    date: new Date(date),
    sum: sum
  })
}

async function getCreditDepositList(user_id: number, type: string) {
  const response = await fetch(`http://localhost:3000/credit_deposit/in_period/${user_id}?`
    + new URLSearchParams({
      "operation_type": type
    }), {
    method: 'GET'
  })
  const resp = (await response.json());
  credits.value = fillCreditDepositArray(resp);
  console.log(credits.value);
  getCreditDepositTransaction(credits.value[0].id);
}

function fillCreditDepositArray(json: any): CreditDeposit[] {
  const creditArray: CreditDeposit[] = json.map((item: any) => ({
    id: item.id,
    operation_date: new Date(item.operation_date),
    months: item.months,
    duration: item.duration,
    total_amount: item.total_amount,
    paid: item.paid,
    interest_rate: item.interest_rate,
    description: item.descript,
  }));
  return creditArray;
}

function JSONToCreditTransArray(json: any): CreditInfo[] {
  let creditArray = json.map((item: any) => ({
    id: item.id,
    date: new Date(item.operation_date),
    sum: item.amount
  }))
  return creditArray;
}

onMounted(async () => {
  await getCreditDepositList(1, "credit"); // Wait for the credits to be loaded
  setCurrCreditId(credits.value[0].id);
});

function getCredits() {
  return credits.value;
}

function updateCreditTransactions(id: number) {
  getCreditDepositTransaction(id);
}

function getCurrCreditId() {
  return currCreditId.value;
}
function setCurrCreditId(id: number) {
  currCreditId.value = id;
}
</script>

<template>
  <div class="credits__container">
    <Diagram v-if="credits.length > 0" :getCredits="getCredits" :updateCreditTransactions="updateCreditTransactions"
      :getCurrCreditId="getCurrCreditId" :setCurrCreditId="setCurrCreditId"></Diagram>
    <History :setPopupVisibility=setPopupVisibility :creditsTransactions="creditsTransactions"></History>
  </div>
  <TransDepLoan v-if=popopVisibility :setPopupVisibility=setPopupVisibility :addCreditTransaction="putCreditTransaction">
  </TransDepLoan>
</template>

<style scoped>
.credits__container {
  display: flex;
  width: 100%;
  align-items: center;
  gap: 5rem;
  margin-top: var(--header-height);
  padding: 0 5rem;
}
</style>