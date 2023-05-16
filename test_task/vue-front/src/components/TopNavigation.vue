<script setup lang="ts">

</script>

<template>
    <div class="topnav">
        <div class="topnav-row">
            <router-link to="/revenues" class="plain-link active">Доходи</router-link>
            <router-link to="/expenses" class="plain-link">Витрати</router-link>
        </div>
        <div class="topnav-row">
            <router-link to="/deposits" class="plain-link">Депозити</router-link>
            <router-link to="/credits" class="plain-link">Кредити</router-link>
        </div>
    </div>
</template>

<style scoped>
.topnav {
    display: flex;
    position: fixed;
    margin-top: var(--header-height);
    justify-content: center;
    top: 0;
    right: 0;
    left: 0;
    gap: 1rem;
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