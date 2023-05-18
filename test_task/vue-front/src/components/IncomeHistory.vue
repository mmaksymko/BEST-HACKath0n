<script setup lang="ts">

</script>
<template>
    <div class="history__container">
        <div class="transactions">
            <div class="transactions_history">
                <div class="transaction">
                    <div class="gen_info">
                        <p>+ 18000 грн</p>
                        <p>05.09.2022</p>
                    </div>
                    <p>зарплата</p>
                </div>
                <div class="transaction">
                    <div class="gen_info">
                        <p>+ 18000 грн</p>
                        <p>05.09.2022</p>
                    </div>
                    <p>зарплата</p>
                </div>
                <div class="transaction">
                    <div class="gen_info">
                        <p>+ 18000 грн</p>
                        <p>05.09.2022</p>
                    </div>
                    <p>зарплата</p>
                </div>
                <div class="transaction">
                    <div class="gen_info">
                        <p>+ 18000 грн</p>
                        <p>05.09.2022</p>
                    </div>
                    <p>зарплата</p>
                </div>
                <div class="transaction">
                    <div class="gen_info">
                        <p>+ 18000 грн</p>
                        <p>05.09.2022</p>
                    </div>
                    <p>зарплата</p>
                </div>
                <div class="transaction">
                    <div class="gen_info">
                        <p>+ 18000 грн</p>
                        <p>05.09.2022</p>
                    </div>
                    <p>зарплата</p>
                </div>
                <div class="transaction">
                    <div class="gen_info">
                        <p>+ 18000 грн</p>
                        <p>05.09.2022</p>
                    </div>
                    <p>зарплата</p>
                </div>
            </div>
        </div>
        <button class="add_transaction">додати дохід</button>
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
    height: 26.825rem;
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
    background: rgba(51, 103, 59, 0.5);
    border: none;
    color: white;
    font-size: 1rem;
    padding: 1rem 6rem;
    border-radius: 0 0 1.25rem 1.25rem;
}
.topnav-row {
    display: flex;
    gap: 2rem;
    margin-left: 2rem;
    margin-right: 2rem;
}

@media screen and (max-width: 600px) {
    .topnav-row {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
}
</style>