<script setup lang="ts">
import { onMounted } from "vue";
import Request from "/src/components/Request.vue"
import { RouterLink, RouterView, useRouter } from 'vue-router'
const route = useRouter();
onMounted(() => {

})
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
  height: 100%;
}
.requests__container {
  display: flex;
  flex-direction: column;
  padding: 0rem 4rem;
  height: 30rem;
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
  background-color: rgba(255, 255, 255, 0.75);
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

/*--------------------------------adaptation--------------------------------*/
@media screen and (max-width: 1280px) {
  .credits__container {
    gap: 3rem;
    padding: 0 3rem;
  }
}
@media screen and (max-width: 1210px) {
    .requests__container {
        padding: 0 3rem;
    }
}
@media screen and (max-width: 980px){
  .requests__container {
        padding: 0 2rem;
    }
    .filters__container {
      padding: 0 4rem;
    }
}
@media screen and (max-width: 920px) {
  .requests__container {
  display: flex;
  flex-direction: column;
  padding: 0rem 3rem;
  height: 70%;
  gap: 1rem;
}
.filters__header {
  text-align: center;
}
.filters {
  justify-content: space-between;
  gap: 1rem;
  padding: 0 4rem;
  margin-bottom: 2rem;
}
.filters__container {
  display: flex;
  flex-direction: column;
  gap: 0;
}
  .requests__row {
  display: flex;
  flex-direction: column;
  gap: 1rem;

}
}

@media screen and (max-width: 750px){
  .filters__container {
    padding: 0 2rem;
  }
}
@media screen and (max-width: 460px) {
  .requests__container {
    height: 68%;
  }
  .filters__container {
    padding: 0 1rem;
}
.filters {
  padding: 0;
  font-size: 16px;
  gap: 0;
  margin-bottom: 1.5rem;
}
input {
  width: 6.5rem;
}
.filter {
  gap: 0.5rem;
}
}
</style>
