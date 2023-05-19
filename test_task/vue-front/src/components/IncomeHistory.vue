<script setup lang="ts">
import type { MoneyFlowInfo } from '@/types';


const { transactions, setPopupVisibility} = defineProps<{
    transactions: MoneyFlowInfo[];
    setPopupVisibility: (i: boolean) => void;
}>();
</script>
<template>
    <div class="history__container">
        <div class="transactions">
            <div class="transactions_history">
                <div class="transaction" v-for="transaction in transactions">
                    <div class="gen_info">
                        <p>{{ transaction.sum }} грн</p>
                        <p>{{ transaction.date.toLocaleDateString() }}</p>
                    </div>
                    <p>{{ transaction.description}}</p>
                </div>
            </div>
        </div>
        <button @click=setPopupVisibility(true) class="add_transaction">додати</button>
    </div>
</template>

<style scoped>
.history__container {
    display: flex;
    flex-direction: column;
    margin-top: var(--header-height);
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
}
.transactions_history {
    overflow-y: scroll;
    height: 100%;
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
.gen_info {
    display: flex;
    gap: 0.5rem;
}
.add_transaction {
    align-content: center;
    text-align: center;
    justify-content: center;
    background: rgba(22, 126, 13, 0.366);
    border: none;
    color: white;
    font-size: 1rem;
    padding: 1rem 6rem;
    border-radius: 0 0 1.25rem 1.25rem;
}

@media screen and (max-width: 600px) {
}
@media screen and (max-width: 414px) {
    .history__container {
        width: 21rem;
        font-size: 16px;
        padding: 0;
        height: 21rem;
        margin-bottom: 2rem;
        margin-top: 0;
    }
    .transaction {
        margin-bottom: 0.5rem;
    }
}

</style>