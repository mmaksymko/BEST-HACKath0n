<script setup lang="ts">
import Request from "@/components/Request.vue"
import type { Item } from "@/types";
import { computed, onMounted, ref } from "vue";
import { RouterLink, RouterView, useRouter } from 'vue-router';
import { toast } from 'vue3-toastify';
const route = useRouter();
const helpRequestList = ref<Item[]>([]);
const startHelpRequestList = ref<Item[]>([]);

async function getAllPropositions() {
  const response = await fetch('http://localhost:7000/proposition/api/all', {
    method: 'GET'
  })
  if (!response.ok) return response.statusText;
  helpRequestList.value = parseJsonToItems(await response.json());
  console.log(helpRequestList.value);
  startHelpRequestList.value = helpRequestList.value;
}

function parseJsonToItems(json: any): Item[] {
  const items: Item[] = json.map((itemData: any) => {
    const item: Item = {
      _id: itemData._id || "",
      category: itemData.category || [],
      city: itemData.city || "",
      creationDate: itemData.creationDate || "",
      description: itemData.description || "",
      expiringDate: itemData.expiringDate || "",
      status: itemData.status || "",
      title: itemData.title || "",
    };
    return item;
  });
  return items;
}

function filterByCity(city: string) {
  helpRequestList.value = helpRequestList.value.filter((value) => value.city === city);
  if (helpRequestList.value.length == 0) {
      if (city.length > 0)
      toast.error("Запитів з вашими параметрами немає, перевірте ввід чи виберіть інші", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    helpRequestList.value = startHelpRequestList.value;
  }
  dividedItems.value = divideArrayIntoChunks(helpRequestList.value, 3);
}
function filterByCategory(tempcategory: string) {
  helpRequestList.value = helpRequestList.value.filter((value) =>
    value.category.findIndex((category) => category === tempcategory)>=0);
  if (helpRequestList.value.length == 0) {
    helpRequestList.value = startHelpRequestList.value;
    if (tempcategory.length > 0)
      toast.error("Запитів з вашими параметрами немає, перевірте ввід чи виберіть інші", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
  }
  dividedItems.value = divideArrayIntoChunks(helpRequestList.value, 3);
}

async function getAuthorByPropositionId(id: string) {
  const response = await fetch(`http://localhost:7000/proposition/author/${id}`, {
    method: 'GET'
  })
  if (!response.ok) return response.statusText
  return await response.json()
}

async function getNameOfAuthorByPropositionId(id: string): Promise<string> {
  const json = await getAuthorByPropositionId(id);
  return json["firstName"] + " " + json["lastName"];
}

const dividedItems = ref<Item[][]>();

function divideArrayIntoChunks(array: Item[], chunkSize: number): Item[][] {
  const result: Item[][] = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
}

function handleCityFilter(event: Event) {
  const selectedCity = (event.target as HTMLInputElement).value;
  filterByCity(selectedCity);
}

function handleCategoryFilter(event: Event) {
  const selectedCategory = (event.target as HTMLInputElement).value;
  filterByCategory(selectedCategory);
}

onMounted(async () => {
  await getAllPropositions();
  dividedItems.value = divideArrayIntoChunks(helpRequestList.value, 3);
})
</script>

<template>
  <div class="main__container">
    <div class="filters__container">
      <div class="filters__header">запити про допомогу</div>
      <div class="filters">
        <div class="filter">
          <label for="cities">місто</label>
          <input list="cities" name="category" @change="handleCityFilter">
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
          <input list="categories" name="category" @change="handleCategoryFilter" id="browser">
          <datalist id="categories" name="category">
            <option value="усі"></option>
            <option value="їжа"></option>
            <option value="медицина"></option>
            <option value="військове"></option>
            <option value="житло"></option>
            <option value="евакуація"></option>
          </datalist>
        </div>
      </div>
      <div class="chosen_filters"></div>
    </div>
    <div class="requests__container">
      <div class="requests__row" v-for="row in dividedItems">
        <Request v-for="item in row" :item="item" :getAuthorByPropositionId="getNameOfAuthorByPropositionId"></Request>
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
  cursor: pointer;
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

@media screen and (max-width: 980px) {
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
    height: 45rem;
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
    font-size: 1rem;
  }
}

@media screen and (max-width: 750px) {
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
}</style>
