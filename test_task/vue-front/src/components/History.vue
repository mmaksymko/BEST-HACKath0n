<script setup lang="ts">
import type {CreditInfo} from '../types';
const { setPopupVisibility, creditsTransactions} = defineProps<{
    setPopupVisibility: (vis:boolean) => void;
    creditsTransactions: CreditInfo[];
}>();
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
        <button class="add_transaction" @click="setPopupVisibility(true)">оплатити</button>
    </div>
</template>

<style scoped>
.history__container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 30rem;
    padding-right: 5rem;
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

::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
    background: #aaa;
}

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
    align-content: center;
    text-align: center;
    justify-content: center;
    background: rgba(204, 163, 59, 0.5);
    border: none;
    color: white;
    font-size: 1rem;
    padding: 1rem 6rem;
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
        padding-right: 3rem;
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
        flex-direction: column;
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
        flex-direction: column;
        gap: 0;
    }
}
</style>