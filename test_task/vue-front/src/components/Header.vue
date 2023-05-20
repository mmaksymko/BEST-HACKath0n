<script setup lang="ts">
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { defineComponent, onMounted, ref } from 'vue'
import type { Ref } from 'vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'
const route = useRoute();

const quote: Ref<HTMLParagraphElement | null> = ref(null);

onMounted(() => {
  getQuote()
});

async function getQuote() {
  const category = 'money';
  const response = await fetch('https://api.api-ninjas.com/v1/quotes?category=' + category, {
    headers: {
      'X-Api-Key': 'W8j6lWeHGm/1ItBpVi1ibw==pTLo0NfesBKWIrkg'
    }
  })
  const resp = await response.json();
  quote.value!.textContent = resp[0].quote;
}
</script>

<template>
  <header class="main-header">
    <h1>fiNaNce</h1>
    <div id="quote" ref="quote"></div>
    <div class="navigation-props">
      <router-link to="/about" class="header-link">Про нас</router-link>
      <router-link to="/tutorial" class="header-link">Послуги</router-link>
      <!-- <a href="#" class="header-link" @click="$emit('openLogin')">Увійти</a> -->
      <a href="#" class="header-link">Увійти</a>
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
  padding-right: 1rem;
  padding-top: 0.5rem;
  height: var(--header-part-height);
}

h1 {
  font-size: 24px;
  font-weight: bold;
  word-break: keep-all;
}

.navigation-props {
  display: flex;
  gap: 1rem;
  width: fit-content;
}

.header-link {
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