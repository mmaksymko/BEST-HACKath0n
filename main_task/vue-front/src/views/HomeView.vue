<script setup lang="ts">
import Request from "/src/components/Request.vue"
import { RouterLink, RouterView, useRouter } from 'vue-router'
const route = useRouter();
</script>

<template>
  <div class="main__container">
    <div class="filters__container">
      <div class="filters__header">запити про допомогу</div>
      <div class="filters">
        <div class="filter">
          <label for="cities">місто</label>
          <input list="cities" name="category">
          <datalist id="cities" name="city">
            <option value="усі"></option>
            <option value="Київ"></option>
            <option value="Харків"></option>
            <option value="Дніпро"></option>
            <option value="Херсон"></option>
          </datalist>
        </div>
        <div class="filter">
          <label for="categories">категорія</label>
          <input list="categories" name="category" id="browser">
          <datalist id="categories" name="category">
            <option value="усі"></option>
            <option value="їжа"></option>
            <option value="медицина"></option>
            <option value="військове"></option>
            <option value="житло"></option>
          </datalist>
        </div>
      </div>
    <div class="chosen_filters"></div>
    </div>
    <div class="requests__container">
      <div class="requests__row">
        <Request></Request>
        <Request></Request>
        <Request></Request>
      </div>
      <div class="requests__row">
        <Request></Request>
        <Request></Request>
        <Request></Request>
      </div>
      <div class="requests__row">
        <Request></Request>
      </div>
    </div>
    <div class="request_help__container">
      <button class="request_help" @click="route.push('/help')">запросити допомогу</button>
    </div> 
  </div>
</template>

<style scoped>
.main__container {
  position: absolute;
  top: 0;
  right: 0;
  margin-top: 6rem;
  width: 100%;
}
.requests__container {
  display: flex;
  flex-direction: column;
  padding: 0rem 4rem;
  height: 35rem;
  overflow-y: scroll;
  gap: 3rem;
}
.requests__row {
  display: flex;
  justify-content: space-between;
}
.request_help__container {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: right;
  margin-top: 0.25rem;
}
.request_help {
  background-color: white;
  color: #9A57F0;
  margin: 1rem 4rem 0 0;
  height: 4rem;
  font-size: 20px;
  border: none;
  border-radius: 2rem;
  width: 18rem;
}
.filters__container {
  display: flex;
  padding: 0 6rem;
  gap: 4rem;
  font-size: 20px;
}
.filters__header {
  font-size: 20px;
  margin-bottom: 1rem;
}
.filters {
  display: flex;
  gap: 2rem;
}
.filter {
  display: flex;
  gap: 1rem;
}
input {
  width: 9rem;
  height: 1.5rem;
  border-radius: 0.75rem;
  background-color: rgba(255, 255, 255, 0.5);
  padding-left: 0.5rem;
}
input:focus {
    outline: none;
}

#categories {
  color: black;
}
</style>
