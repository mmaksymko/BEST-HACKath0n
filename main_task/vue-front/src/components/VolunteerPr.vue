<script setup lang="ts">
import type { Item } from '@/types';
import type { Ref } from 'vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'
const route = useRoute();
const { item,getAuthorByPropositionId } = defineProps<{
    item: Item;
    getAuthorByPropositionId: (id:string) => Promise<string>;
}>();
</script>

<template>
    <div class="request__container">
        <div class="request__header">{{ item.title }}</div>
        <div class="request__info">
            <div class="from">від: {{ getAuthorByPropositionId(item._id)}}</div>
            <div class="category">категорія: {{ item.category.join(',') }}</div>
            <div class="city">місто: {{ item.city }}</div>
            <div class="description">опис: {{ item.description }}</div>
            <div class="date">термін: {{ item.expiringDate }}</div>
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
    height: 15.5rem;
    color: black;
    padding: 1.5rem 1rem 3rem 1rem;
    align-items: center;
}
.request__header {
    font-size: 20px;
    text-align: center;
    margin-bottom: 1rem;
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

@media screen and (max-width:1520px) {
    .request__container {
        width: 26rem;
    }
}
@media screen and (max-width:1420px) {
    .request__container {
        width: 25rem;
    }
}
@media screen and (max-width:1320px) {
    .request__container {
        width: 23rem;
    }
}
@media screen and (max-width: 1220px) {
    .request__container {
        width: 22rem;
    }
}
@media screen and (max-width: 1120px) {
    .request__container {
        width: 21rem;
    }
}
@media screen and (max-width: 1080px) {
    .request__container {
        width: 20rem;
    }
}
@media screen and (max-width: 940px) {
    .request__container {
        width: 21rem;
        height: 18rem;
    }
}


@media screen and (max-width: 460px) {
    .request__container {
        border-radius: 2rem;
        width: 100%;
        padding: 1rem 1rem 1.5rem 1rem;
    }
}
</style>