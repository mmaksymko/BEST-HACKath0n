<script setup lang="ts">

</script>

<template>
    <div class="topnav">
            <router-link to="/revenues" class="plain-link active">Доходи</router-link>
            <router-link to="/expenses" class="plain-link">Витрати</router-link>
            <router-link to="/deposits" class="plain-link">Депозити</router-link>
            <router-link to="/credits" class="plain-link">Кредити</router-link>
    </div>
</template>

<style scoped>
.topnav {
    display: flex;
    position: fixed;
    justify-content: center;
    align-items: center;
    top: 5rem;
    right: 0;
    left: 0;
    height: var(--topbar-height);
    gap: 6rem;
}

.plain-link {
    color: var(--color-text);
    font-size: 20px;
    text-align: center;
}

.plain-link:hover {
    color: var(--color-text);
    font-size: 24px;
    font-weight: bold;
    background-color: transparent;
}


@media screen and (max-width: 600px) {

    *,
    *::before,
    *::after {
        font-weight: normal;
    }

    .plain-link {
        color: var(--color-text);
        font-size: 16px;
    }

    .plain-link:hover {
        color: var(--color-text);
        font-size: 18px;
        font-weight: bold;
        background-color: transparent;
    }

}


@media screen and (max-width: 600px) {
    .topnav-row {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
}
</style>