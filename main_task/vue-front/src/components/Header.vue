<script setup lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import type { Ref } from 'vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'
const route = useRoute();
</script>

<template>
  <header class="header">
    <h1>ТРАНДАФИЛЬ</h1>
    <div class="navigation">
      <a href="#" class="header-link" @click="$emit('openLogin')">увійти</a>
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
  height: 6rem;
}

h1 {
  font-size: 24px;
  font-weight: bold;
  word-break: keep-all;
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

@media screen and (max-width: 414px) {
  .main-header {
    padding: 0 0.5rem;
    height: 3.25rem;
  }

  .header-link {
    font-size: 18px;
  }
}
</style>