<script setup lang="ts">
import { RouterLink, RouterView, useRoute } from 'vue-router'
import Header from "../src/components/Header.vue"
import TopNavigation from "../src/components/TopNavigation.vue"

const route = useRoute();

</script>

<template>
  <div class="navigation-container">
    <Header v-if="!['login', 'register', 'help', 'server-down'].includes(route.name?.toString() as any)"></Header>
    <TopNavigation v-if="!['login', 'register', 'help', 'server-down'].includes(route.name?.toString() as any)">
    </TopNavigation>
  </div>
  <RouterView/>
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
