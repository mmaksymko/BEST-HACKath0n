<script setup lang="ts">
import { onBeforeUnmount, ref } from 'vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'
import Header from "../src/components/Header.vue"
import { useUserStore } from "@/stores/user"
//import TopNavigation from "../src/components/TopNavigation.vue"
import LogIn from "../src/components/LogInPopup.vue"
import SingUp from "../src/components/SignUpPopup.vue"
import InfoPopup from "../src/components/InfoPopup.vue"
import GoodWillPopup from "../src/components/GoodWillPopup.vue"
import HomeView from "./views/HomeView.vue"
import type { UserPostResponse } from './types';
import { addUserVis, setPopupVisibility } from "@/visibilityvars";

const route = useRoute();
const user = useUserStore();

const isLogInVisible = ref<boolean>(false)
const isSignUpVisible = ref<boolean>(false)
const isInfoVisible = ref<boolean>(false)
const isGoodWillVisible = ref<boolean>(false)
function showLoginPopUp(show: boolean) {
  isLogInVisible.value = show
  isSignUpVisible.value = !show
}
function showSignupPopup(show: boolean) {
  isSignUpVisible.value = show
  isLogInVisible.value = !show
}
function showGoodWillPopup(show: boolean){
  isGoodWillVisible.value = show
}

const users = ref<UserPostResponse[]>([]);
const update = ref(true);

async function addUser(firstNameParam: string, lastNameParam: string, emailParam: string, passwordParam: string, phoneParam: number) {
  const response = await fetch('https://trandafyl-server.onrender.com/user/signup', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "firstName": firstNameParam,
      "lastName": lastNameParam,
      "email": emailParam,
      "password": passwordParam,
      "phone": phoneParam
    })
  })
  if (response.status === 400) {
    console.log(response)
  } else if (response.ok) {
    users.value.push({
      _id: users.value.length ? users.value[users.value.length - 1]._id + 1 : 0,
      firstName: firstNameParam,
      lastName: lastNameParam,
      email: emailParam,
      phone: phoneParam,
      propositions: "[]",
      __v: 0
    });
  }
  console.log(await response.json())
  user.setUser(JSON.parse(await response.json()));
  update.value = false;
  update.value = true;
}
console.log(isGoodWillVisible.value)
async function loginUser(emailParam: string, passwordParam: string) {
  console.log(emailParam)
  console.log(passwordParam)
  const response = await fetch('https://trandafyl-server.onrender.com/user/login', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'credentials': 'include'
    },
    body: JSON.stringify({
      "email": emailParam,
      "password": passwordParam
    })
  })
  user.setUser((await response.json()).user);
  localStorage.setItem('userId', user._id);
  console.log(user.$state);
}

onBeforeUnmount(() => {
  localStorage.clear();
})

</script>

<template>
  <Header @openLogin="showLoginPopUp(true)" @openGoodWill="isGoodWillVisible = true"
    v-if="!['login', 'register', 'server-down'].includes(route.name?.toString() as any)"></Header>
  <LogIn v-if="isLogInVisible" @closeLogin="isLogInVisible = false" @openSignUp="showSignupPopup(true)"
    :loginUser="loginUser"></LogIn>
  <SingUp v-if="isSignUpVisible" @closeSignUp="isSignUpVisible = false"
    @submitSignUp="isSignUpVisible = false, isInfoVisible = true" :addUser="addUser"></SingUp>
  <InfoPopup v-if="isInfoVisible" @closeInfo="isInfoVisible = false"></InfoPopup>
  <GoodWillPopup v-if="isGoodWillVisible" @closeGoodWill="isGoodWillVisible = false" ></GoodWillPopup>
  <RouterView />
</template>

<style scoped></style>
