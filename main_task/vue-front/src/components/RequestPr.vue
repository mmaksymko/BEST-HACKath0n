<script setup lang="ts">
import type { Ref } from 'vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'
const route = useRoute();
</script>

<template>
    <div class="request__container">
        <div class="request__header">Заголовок</div>
        <div class="request__info">
            <div class="from">від: Петро</div>
            <div class="category">категорія: військове</div>
            <div class="city">місто: військове</div>
            <div class="description">опис: збираю на мавік</div>
            <div class="date">термін: 28.09.2023</div>
        </div>
        <div>статус: прийнято</div>
    </div>
</template>

<style scoped>
.request__container {
    display: flex;
    flex-direction: column;
    background-color: rgba(255, 255, 255, 0.5);
    border: none;
    border-radius: 2rem;
    width: 20rem;
    height: 17rem;
    color: black;
    padding: 1.5rem 2rem 3rem 2rem;
    align-items: center;
}
.request__header {
    font-size: 20px;
    text-align: center;
    margin-bottom: 2rem;
}
.request__info {
    width: 100%;
    margin-bottom: 3rem;
    height: 80%;
}

</style>