<script setup lang="ts">
import Diagram from "../components/income/Diagram.vue"
import History from "../components/income/History.vue"
import Modal from "../components/income/AddModal.vue";
import {ref} from "vue"

const isOpen = ref<boolean>(false);
function setVisibility(state:boolean){
  isOpen.value = state;
}

</script>

<template>
  <main>
    <Diagram></Diagram>
    <History 
    :setVisibility="setVisibility"></History>
  </main>
  <Modal v-if="isOpen"
  :setVisibility="setVisibility"></Modal>
</template>

<style scoped>
p{
  margin: 10rem;
}
main{
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
}

</style>