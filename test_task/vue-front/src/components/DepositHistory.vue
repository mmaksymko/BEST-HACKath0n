<script setup lang="ts">

</script>
<template>
    <div class="history__container">
        <div class="transactions">
            <div class="transactions_history">
                <div class="transaction">+ 500 грн 05.06.2023</div>
                <div class="transaction">+ 1500 грн 03.06.2023</div>
                <div class="transaction">+ 1500 грн 03.06.2023</div>
                <div class="transaction">+ 1500 грн 03.06.2023</div>
                <div class="transaction">+ 1500 грн 03.06.2023</div>
                <div class="transaction">+ 1500 грн 03.06.2023</div>
                <div class="transaction">+ 1500 грн 03.06.2023</div>
                <div class="transaction">+ 1500 грн 03.06.2023</div>
                <div class="transaction">+ 1500 грн 03.06.2023</div>
                <div class="transaction">+ 1500 грн 03.06.2023</div>
                <div class="transaction">+ 1500 грн 03.06.2023</div>
                <div class="transaction">+ 1500 грн 03.06.2023</div>
                <div class="transaction">+ 1500 грн 03.06.2023</div>
                <div class="transaction">+ 1500 грн 03.06.2023</div>
                <div class="transaction">+ 1500 грн 03.06.2023</div>
                <div class="transaction">+ 1500 грн 03.06.2023</div>
                <div class="transaction">+ 1500 грн 03.06.2023</div>
            </div>
        </div>
        <button class="add_transaction">поповнити</button>
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
    background: rgba(36, 47, 64, 0.5);
    border: none;
    color: white;
    font-size: 1rem;
    padding: 1rem 6rem;
    border-radius: 0 0 1.25rem 1.25rem;
}

@media screen and (max-width: 600px) {
    .topnav-row {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
}
</style>