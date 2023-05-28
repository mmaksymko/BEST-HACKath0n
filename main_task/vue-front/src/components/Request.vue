<script setup lang="ts">
import type { Item } from '@/types';
import { onMounted, ref, type Ref } from 'vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'
const route = useRoute();

const { item,getAuthorByPropositionId } = defineProps<{
    item: Item;
    getAuthorByPropositionId: (id:string) => Promise<string>;
}>();

const string = ref<string>("1");

onMounted( async () => {
    string.value = await getAuthorByPropositionId(item._id);
    console.log(string);
})

</script>

<template>
    <div class="request__container">
        <div class="request__header">{{ item.title }}</div>
        <div class="request__info">
            <div class="from">від: {{ string }}</div>
            <div class="category">категорія: {{ item.category.join(',') }}</div>
            <div class="city">місто: {{ item.city }}</div>
            <div class="description">опис: {{ item.description }}</div>
            <div class="date">термін: {{ item.expiringDate }}</div>
        </div>
        <button class="submit_help">відгукнутися</button>
    </div>
</template>

<style scoped>
.request__container {
    display: flex;
    flex-direction: column;
    background-color: rgba(255, 255, 255, 0.5);
    border: none;
    border-radius: 2rem;
    width: 30rem;
    height: 34rem;
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


/*--------------------------------adaptation--------------------------------*/
@media screen and (max-width:1620px) {
    .request__container {
        width: 28rem;
    }
}
@media screen and (max-width:1520px) {
    .request__container {
        width: 26rem;
    }
}
@media screen and (max-width:1400px) {
    .request__container {
        width: 24rem;
    }
}
@media screen and (max-width:1320px) {
    .request__container {
        width: 22rem;
    }
}
@media screen and (max-width: 1210px) {
    .request__container {
        width: 20rem;
    }
}
@media screen and (max-width: 1090px) {
    .request__container {
        width: 18rem;
    }
}
@media screen and (max-width: 940px) {
    .request__container {
        width: 17rem;
    }
}

@media screen and (max-width: 920px) {
    .request__container {
        border-radius: 2rem;
        width: 100%;
        height: 22rem;
        padding: 1.5rem 2rem 3rem 2rem;
    }
    .submit_help {
        width: 50%;
        font-size: 1rem;
        height: 4rem;
    }
}

@media screen and (max-width: 460px) {
    .request__container {
        border-radius: 2rem;
        width: 100%;
        height: 37.5rem;
        padding: 1rem 1rem 1.5rem 1rem;
    }
}
</style>