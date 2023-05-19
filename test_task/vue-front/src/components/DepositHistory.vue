<script setup lang="ts">
import { useRoute } from 'vue-router';
import type {CreditInfo} from '../types';
const { setPopupVisibility, creditsTransactions} = defineProps<{
    setPopupVisibility: (vis:boolean) => void;
    creditsTransactions: CreditInfo[];
}>();
  // const response = await fetch(`http://localhost:3000/moneyflow/expenses/${id}?`
  //       + new URLSearchParams({
  //           "date_start": date_start.toISOString().slice(0, 19).replace('T', ' '),
  //           "date_end": date_end.toISOString().slice(0, 19).replace('T', ' ')
  //       }), {
  //       method: 'GET'
  //   })

  // console.log(await response.json());
</script>
<template>
    <div class="history__container">
        <div class="transactions">
            <div class="transactions_history">
                <div v-for='trans in creditsTransactions' class="transaction">  
                    <span class="transaction-sum">
                        {{ trans.sum }} грн
                    </span>
                    <span class="transaction-date">
                        {{ trans.date.toLocaleDateString() }}
                    </span>
                </div>
            </div>
        </div>
        <button class="add_transaction" @click="setPopupVisibility(true)">зняти кошти</button>
    </div>
</template>

<style scoped>
.history__container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    padding-right: 5rem;
    height: 30rem;
}
.transactions {
    padding: 1.5rem 1rem;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 1.25rem 1.25rem 0 0;
    height: 100%;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
}

.transactions_history {
    width: 100%;
    overflow-y: scroll;
    height: 100%;
}
.transaction-sum{
    display: inline-block;
    width: 55%;
}

::-webkit-scrollbar {
    width: 0.5rem;
    height: 0.5rem;
}

/* style of the scrollbar thumb */
::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 4px;
}

/* hover style of the scrollbar thumb */
::-webkit-scrollbar-thumb:hover {
    background: #aaa;
}

/* style of the scrollbar track */
::-webkit-scrollbar-track {
    background: #eee;
    border-radius: 0.25rem;
}

.transactions_history::-webkit-scrollbar {
    width: 0.5rem;
    background-color: #f1f1f1;
    border-radius: 0.5rem;
}

.transactions_history::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 0.5rem;
}

.transactions_history::-webkit-scrollbar-thumb:hover {
    background-color: #555;
}

.transaction {
    margin-bottom: 0.75rem;
}

.add_transaction {
    display: inline;
    white-space: nowrap;
    align-content: center;
    text-align: center;
    justify-content: center;
    background: rgba(36, 47, 64, 0.5);
    border: none;
    color: white;
    font-size: 1rem;
    padding: 1rem 5rem;
    border-radius: 0 0 1.25rem 1.25rem;
}
@media screen and (max-width: 1280px) {
    .history__container {
        padding-right: 3rem;
    }
    .add_transaction {
        padding: 1rem 2rem;
    }
}
@media screen and (max-width: 920px) {
    .history__container {
        padding-right: 0rem;
        margin-top: 2.75rem;
    }
    .add_transaction {
        padding: 1rem 2rem;
    }
    .transaction {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding-right: 1rem;
    }
}
@media screen and (max-width: 740px) {
    .history__container {
        height: 26rem;
    }
}
@media screen and (max-width: 460px) {
    .transaction {
        flex-direction: row;
        gap: 0;
    }
}
@media screen and (max-width: 414px) {
    .history__container {
        width: 21rem;
        font-size: 16px;
        padding: 2rem;
        height: 21rem;
        margin-bottom: 2rem;
        margin-top: 0;
    }
    .transaction {
        margin-bottom: 0.5rem;
        flex-direction: row;
        gap: 0;
    }
}
</style>