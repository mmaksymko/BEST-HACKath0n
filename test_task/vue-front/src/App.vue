<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'
import Header from "../src/components/Header.vue"
import TopNavigation from "../src/components/TopNavigation.vue"
import LogIn from "../src/components/LogInPopup.vue"
import SingUp from "../src/components/SignUpPopup.vue"

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
</script>

<template>
  <div class="navigation-container">
    <Header @openLogin="showLoginPopUp(true)" v-if="!['login', 'register', 'help', 'server-down'].includes(route.name?.toString() as any)"></Header>
    <TopNavigation v-if="!['login', 'register', 'help', 'server-down'].includes(route.name?.toString() as any)">
    </TopNavigation>
  </div>
  <LogIn v-if="isLogInVisible" @closeLogin="isLogInVisible = false" @openSignUp="showSignupPopup(true)"></LogIn>
  <SingUp v-if="isSignUpVisible" @closeSignUp="isSignUpVisible = false"></SingUp>
  <RouterView />
</template>

<style scoped>
.navigation-container{
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 8rem;
}
</style>
