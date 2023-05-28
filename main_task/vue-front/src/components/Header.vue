<script setup lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import type { Ref } from 'vue'
import { RouterLink, RouterView, useRouter } from 'vue-router'
import { useUserStore } from "@/stores/user"
const route = useRouter();
const user = useUserStore();

const { openLogin } = defineProps<{
  openLogin: (show: boolean) => void;
}>();

function toProfile(){
  if(user._id.length>1){
    route.push("/profile");
  }
  else{
    openLogin(true);
  }
}
</script>

<template>
  <header class="header">
    <h1 @click="route.push('/')">ТРАНДÁФИЛЬ</h1>
    <div class="navigation">
      <a href="#" class="header-link" @click="toProfile()">профіль</a>
    </div>
  </header>
</template>

<style scoped>
.header {
  color: hsl(0, 0%, 100%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2.5rem;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: var(--header-height);
}

h1 {
  font-size: 24px;
  font-weight: bold;
  word-break: keep-all;
  cursor: pointer;
}

.navigation {
  display: flex;
  width: fit-content;
}

.header-link {
  position: relative;
  color: white;
  font-size: 20px;
  text-decoration: none;
}

.header-link:hover {
  color: white;
  background-color: transparent;
}

.header-link::before {
  content: "";
  position: absolute;
  display: block;
  width: 100%;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: white;
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.header-link:hover::before {
  transform: scaleX(1);
}

#quote {
  font-weight: 100;
  width: 50%;
  font-size: 11px;
  text-align: center;
  color: rgba(255, 255, 255, 0.511);
}

@media screen and (max-width: 800px) {
  #quote {
    visibility: hidden;
  }
}

@media screen and (max-width: 600px) {
  .main-header {
    position: absolute;
    padding-left: 0.75rem;
    padding-right: 0.5rem;
  }

  .navigation-props {
    gap: 0.75rem;
  }
}

@media screen and (max-width: 460px) {
  .header {
    padding: 0 1rem;
  }

  .header-link {
    font-size: 20px;
  }
  h1 {
    font-size: 20px;
  }
}
</style>