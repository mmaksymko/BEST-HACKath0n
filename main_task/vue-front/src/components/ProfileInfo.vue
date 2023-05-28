<script setup lang="ts">
import type { Ref } from 'vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'
import { useUserStore } from "@/stores/user"
const user = useUserStore();
const route = useRoute();
</script>

<template>
    <div class="request__container">
        <div class="profile__info">
            <div class="profile__item">
                <div class="first_name _header">ім'я</div>
                <div class="first_name">{{ user.firstName }}</div>
            </div>
            <div class="profile__item">
                <div class="last_name _header">прізвище</div>
                <div class="last_name">{{ user.lastName }}</div>
            </div>
            <div class="profile__item">
                <div class="phone _header">номер телефону</div>
                <div class="phone">{{ user.phone }}</div>
            </div>
            <div class="profile__item">
                <div class="email _header">пошта</div>
                <div class="email">{{ user.email }}</div>
            </div>
            <div class="profile__item">
                <div class="email _header">пароль</div>
                <div class="email">••••••••••••••</div>
            </div>
        </div>
        <button class="change_profile">редагувати профіль</button>
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
    height: 33rem;
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
    margin-bottom: 2rem;
    height: 90%;
    gap: 1.5rem;
}
.change_profile {
    border: none;
    color: white;
    background-color: black;
    height: 4rem;
    border-radius: 1.25rem;
    width: 75%;

}

@media screen and (max-width:940px){
  .change_profile {
    height: 3.8rem;
  }
  .profile__item {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1.5rem;
    font-size: 20px;
  }
}
@media screen and (max-width:460px){
    .request__container {
    padding: 1.5rem 1rem 1.5rem 1rem;
    height: 100%;
    }
    .profile__item {
        font-size: 18px;
        gap: 0.8rem;
        align-items: center;
    }
    ._header {
        font-size: 18px;
    }
    .profile__info {
        gap: 1rem;
        margin-bottom: 1.5rem;
    }
}
</style>