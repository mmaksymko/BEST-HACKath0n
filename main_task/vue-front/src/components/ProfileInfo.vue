<script setup lang="ts">
import type { Ref } from 'vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'
const route = useRoute();
</script>

<template>
    <div class="request__container">
        <div class="profile__info">
            <div class="first_name">
                <div class="first_name _header">ім'я</div>
                <div class="first_name">Василь</div>
            </div>
            <div class="last_name">
                <div class="last_name _header">прізвище</div>
                <div class="last_name">Голобородько</div>
            </div>
            <div class="birthday">
                <div class="birthday _header">дата народження</div>
                <div class="birthday">19.05.1978</div>
            </div>
            <div class="phone">
                <div class="phone _header">номер телефону</div>
                <div class="phone">+380935687799</div>
            </div>
            <div class="email">
                <div class="email _header">пошта</div>
                <div class="email">vasyl@gmail.com</div>
            </div>
            <div class="password">
                <div class="email _header">пароль</div>
                <div class="email">••••••••••••••</div>
            </div>
        </div>
        <button class="change_password">редагувати профіль</button>
    </div>
</template>

<style scoped>
.request__container {
    display: flex;
    flex-direction: column;
    background-color: rgba(255, 255, 255, 0.5);
    border: none;
    border-radius: 2rem;
    width: 100%;
    height: calc(100% - 3.8rem);
    color: black;
    font-size: 16px;
    padding: 1.5rem 2rem 3rem 2rem;
    align-items: center;
}
._header {
    font-size: 20px;
}
.profile__info {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 3rem;
    height: 90%;
    gap: 2rem;
}
.change_password {
    border: none;
    color: white;
    background-color: black;
    height: 2.5rem;
    border-radius: 1.25rem;
    width: 20rem;

}

</style>