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
                        + {{ trans.sum }} грн
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
    flex-grow: 1;
    flex-direction: column;
    justify-content: center;
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

</style>