<script setup lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'

const route = useRoute();
</script>

<template>
    <header class="main-header">
        <h1>fiNaNce</h1>
        <div class="navigation-props">
            <router-link to="/about" class="header-link">Про нас</router-link>
            <router-link to="/tutorial" class="header-link">Послуги</router-link>
            <router-link to="/login" class="header-link">Увійти</router-link>
        </div>
    </header>
</template>

<style scoped>
.main-header {
    color: hsl(0, 0%, 100%);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.25rem;
    padding-left: 2rem;
    padding-right: 2rem;
    padding-top: 0.5rem;
    height: var(--header-part-height);
}

h1 {
    font-size: 24px;
    word-break: keep-all;
}

.navigation-props {
    display: flex;
    gap: 1rem;
}

@media screen and (max-width: 600px) {
    .main-header {
        padding-left: 0.75rem;
        padding-right: 0.5rem;
    }
    .navigation-props{
        gap: 0.75rem;
    }

}
.header-link{
    position: relative;
    color: var(--color-text);
    font-size: 20px;
    text-decoration: none;
  }
  
  .header-link:hover {
    color: var(--color-text);
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
    background-color: var(--color-text);
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }
  
  .header-link:hover::before {
    transform: scaleX(1);
  }
  

</style>