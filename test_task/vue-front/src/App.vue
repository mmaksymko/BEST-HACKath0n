<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'
import Header from "../src/components/Header.vue"
import TopNavigation from "../src/components/TopNavigation.vue"
import LogIn from "./components/LogInPopup.vue"
import SingUp from "./components/SignUpPopup.vue"

const isVisible = ref<boolean>(false); // Reactive variable to control the display

const route = useRoute();
function change(vis: boolean) {
  isVisible.value = vis
}
</script>

<template>
  <div class="navigation-container">
    <Header v-if="!['login', 'register', 'help', 'server-down'].includes(route.name?.toString() as any)" @showLoginPopup="isVisible = true"></Header>
    <TopNavigation v-if="!['login', 'register', 'help', 'server-down'].includes(route.name?.toString() as any)">
    </TopNavigation>
  </div>
  <LogIn v-if="isVisible"></LogIn>
  <SingUp></SingUp>
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
