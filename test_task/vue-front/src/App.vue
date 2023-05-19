<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'
import Header from "../src/components/Header.vue"
import TopNavigation from "../src/components/TopNavigation.vue"
const route = useRoute();

const isVisible = ref<boolean>(false)
function showPopup(show:boolean) {
  console.log("in show popup")
  isVisible.value = show
  console.log(isVisible.value)
}

</script>

<template>
  <div class="navigation-container">
    <Header @openLogin="showPopup(true)" v-if="!['login', 'register', 'help', 'server-down'].includes(route.name?.toString() as any)"></Header>
    <TopNavigation v-if="!['login', 'register', 'help', 'server-down'].includes(route.name?.toString() as any)">
    </TopNavigation>
  </div>
  <LogIn v-if="isVisible" @closeLogin="showPopup(false)"></LogIn>
  <!--SingUp></SingUp-->
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
