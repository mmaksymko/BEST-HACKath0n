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
        <div class="request_help__container">
        <label for="status">статус: </label>
        <select name="status" id="status">
            <option value="volvo">прийнято</option>
            <option value="saab">виконано</option>
        </select>
    </div>
    </div>
</template>

<style scoped>
.request__container {
    display: flex;
    flex-direction: column;
    background-color: rgba(255, 255, 255, 0.5);
    border: none;
    border-radius: 2rem;
    width: 27rem;
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
.submit_help {
    background-color: black;
    color: white;
    border: none;
    height: 3rem;
    border-radius: 1.5rem;
    width: 75%;
}
#status {
    background-color: rgba(255, 255, 255, 0);
    border: 2px solid black;
    color: black;
    height: 2rem;
    border-radius: 1rem;
    font-size: 16px;
    padding-left: 0.2rem;
}
#status:focus {
    outline: none;
}
</style>