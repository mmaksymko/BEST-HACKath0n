<script setup lang="ts">
import Request from "@/components/RequestPr.vue"
import Volunteer from "@/components/VolunteerPr.vue"
import Profile from "@/components/ProfileInfo.vue"
import { RouterLink, RouterView, useRouter } from 'vue-router'
import { useUserStore } from "@/stores/user"
import { onMounted, ref } from "vue";
import type { Item } from "@/types";

const route = useRouter();
const volunteersArr = ref<Item[]>([]);
const requestsArr = ref<Item[]>([]);
const user = useUserStore();
console.log(user.$state);

// повертає всі користувачеві пропозиції
async function getAllUsersPropositions(id:string) {
    const response = await fetch(`http://localhost:7000/proposition/all/${id}`, {
        method: 'GET'
    })
    if (!response.ok) return response.statusText
    return response.json()
}

async function getAuthorByPropositionId(id: string) {
  const response = await fetch(`http://localhost:7000/proposition/author/${id}`, {
    method: 'GET'
  })
  if (!response.ok) return response.statusText
  return await response.json()
}

async function getNameOfAuthorByPropositionId(id: string): Promise<string> {
  const json = await getAuthorByPropositionId(id);
  return json["firstName"] + " " + json["lastName"];
}


// повертає всі пропозиції взяті користувачем
async function getAllUsersTakenPropositions(id:string) {
    const response = await fetch(`http://localhost:7000/proposition/all-taken/${id}`, {
        method: 'GET'
    })
    if (!response.ok) return response.statusText
    return response.json()
}

// завершити пропозицію
async function completeProposition(id:string) {
    const response = await fetch(`http://localhost:7000/proposition/${id}`, {
        method: 'PUT'
    })
    if (!response.ok) return response.statusText
    let index = -1;
    index = volunteersArr.value.findIndex((item: Item)=>item._id===id);
    if(index>=0){
      volunteersArr.value[index].status = "done";
    }
    return response.json()
}

onMounted(async () => {
  if(localStorage.getItem("userId")!==null){
    console.log(await user.getUser(localStorage.getItem("userId") as string));
  }
  volunteersArr.value = await getAllUsersTakenPropositions(user._id);
  requestsArr.value = await getAllUsersPropositions(user._id);
})

</script>

<template>
  <div class="main__container">
    <div class="profile_info__container">
        <h2>Інформація про профіль</h2>
        <Profile></Profile>
    </div>
    <div class="history">
        <div class="history__block">
            <div class="requests__header"><h2>волонтерство</h2></div>
            <div class="requests__container">
                <Volunteer :getAuthorByPropositionId="getNameOfAuthorByPropositionId" :completeProposition="completeProposition"
                v-for="item in volunteersArr" :item="item" 
                ></Volunteer>
            </div>
        </div>
        <div class="history__block">
            <div class="requests__header"><h2>запити</h2></div>
            <div class="requests__container">
                <Request v-for="item in requestsArr" :item="item" ></Request>
            </div>
        </div>
 
    </div>
  </div>
</template>

<style scoped>
.main__container {
  position: absolute;
  display: grid;
  grid-template-columns: 30% 70%;
  padding: 0 3rem;
  top: 0;
  right: 0;
  margin-top: 6rem;
  width: 100%;
  gap: 4rem;
  height: 100%;
}
.history {
    display: flex;
    gap: 3rem;
}
.requests__header {
    text-align: center;
    margin-bottom: 1rem;
}
.requests__container {
  display: flex;
  flex-direction: column;
  height: 33rem;
  overflow-y: scroll;
  gap: 2rem;
}
.profile_info__container h2{
    margin-bottom: 1rem;
}
.requests__row {
  display: flex;
  justify-content: space-between;
}
.request_help__container {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: right;
  margin-top: 0.25rem;
}
.request_help {
  background-color: white;
  color: #9A57F0;
  margin: 1rem 4rem 0 0;
  height: 4rem;
  font-size: 20px;
  border: none;
  border-radius: 2rem;
  width: 18rem;
}
.filters__container {
  display: flex;
  padding: 0 6rem;
  align-items: center;
  gap: 4rem;
  font-size: 20px;
}
.filters__header {
  font-size: 20px;
  margin-bottom: 1rem;
}
.filters {
  display: flex;
  gap: 2rem;
}
.filter {
  display: flex;
  gap: 1rem;
}
input {
  width: 9rem;
  height: 1.5rem;
  border-radius: 0.75rem;
  background-color: rgba(255, 255, 255, 0.5);
  padding-left: 0.5rem;
}
input:focus {
    outline: none;
}

#categories {
  color: black;
}

@media screen and (max-width:1420px) {
  .main__container {
  gap: 3rem;
}
.history {
    display: flex;
    gap: 2rem;
}
}
@media screen and (max-width:1180px) {
  .main__container {
  gap: 2rem;
  padding: 0 2rem;
}
.history {
    display: flex;
    gap: 1.5rem;
}
  h2 {
    font-size: 20px;
  }
}
@media screen and (max-width:940px){
  .main__container {
    display: flex;
    flex-direction: column;
  }
  .history {
    flex-direction: row;
  }
  .requests__container {
  display: flex;
  flex-direction: column;
  height: 18rem;
  overflow-y: scroll;
  gap: 1.5rem;
}
}
@media screen and (max-width:460px){
  .profile_info__container {
    margin-bottom: 3rem;
  }
  .main__container {
    gap: 1.4rem;
    overflow-y: scroll;
  }
  .history {
    flex-direction: column;
    margin-bottom: 9rem;
  }
  .requests__container {
  display: flex;
  flex-direction: column;
  height: 18rem;
  overflow-y: scroll;
  gap: 2.8rem;
}
}
</style>
