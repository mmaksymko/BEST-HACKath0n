<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'
import Header from "../src/components/Header.vue"
import socket from "@/socket"
//import TopNavigation from "../src/components/TopNavigation.vue"
import LogIn from "../src/components/LogInPopup.vue"
import SingUp from "../src/components/SignUpPopup.vue"
import type { UserPostResponse } from './types';
import { addUserVis, setPopupVisibility} from "@/visibilityvars";

const route = useRoute();

const isLogInVisible = ref<boolean>(false)
const isSignUpVisible = ref<boolean>(false)
function showLoginPopUp(show: boolean) {
  isLogInVisible.value = show
  isSignUpVisible.value = !show
}
function showSignupPopup(show: boolean) {
  isSignUpVisible.value = show
  isLogInVisible.value = !show
}

const users = ref<UserPostResponse[]>([]);
const update = ref(true);

async function addUser(firstNameParam: string, lastNameParam: string, emailParam:string, passwordParam:string, phoneParam:number) {
  const response = await fetch('http://localhost:7000/user/signup', {
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
    window.location.reload();
    users.value.push({
      _id: users.value[users.value.length - 1]._id + 1,
      firstName: firstNameParam,
      lastName: lastNameParam,
      email: emailParam,
      phone: phoneParam,
      propositions: "[]",
      __v:0
    });
  }
  console.log(response)
  update.value = false;
  update.value = true;
}

</script>

<template>
  <Header @openLogin="showLoginPopUp(true)" v-if="!['login', 'register', 'server-down'].includes(route.name?.toString() as any)"></Header>
  <LogIn v-if="isLogInVisible" @closeLogin="isLogInVisible = false" @openSignUp="showSignupPopup(true)"></LogIn>
  <SingUp v-if="addUserVis" :setPopupVisibility="setPopupVisibility" :addUser="addUser"></SingUp>
  <RouterView />
</template>

<style scoped>
</style>
