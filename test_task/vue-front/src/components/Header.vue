<script setup lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'

const route = useRoute();
</script>

<template>
    <header class="main-header">
        <h1>fiNaNce</h1>
        <div class="navigation-props">
            <router-link to="/about" class="plain-link">Про нас</router-link>
            <router-link to="/tutorial" class="plain-link">Послуги</router-link>
            <a href="#" class="plain-link" @click="$emit('showLoginPopup')">Увійти</a>
        </div>
    </header>
</template>

<style scoped>
.main-header {
    color: hsl(0, 0%, 100%);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.25rem;
    padding-left: 2rem;
    padding-right: 2rem;
    padding-top: 0.5rem;
    height: var(--header-height);
}

h1 {
    font-size: 24px;
    word-break: keep-all;
}

.navigation-props {
    display: flex;
    gap: 1rem;
}

@media screen and (max-width: 600px) {
    .main-header {
        padding-left: 0.75rem;
        padding-right: 0.5rem;
    }
    .navigation-props{
        gap: 0.75rem;
    }

}</style>