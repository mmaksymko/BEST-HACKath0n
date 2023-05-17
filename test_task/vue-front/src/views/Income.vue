<script setup lang="ts">
import Diagram from "../components/income/Diagram.vue"
import History from "../components/income/History.vue"
import Modal from "../components/income/AddModal.vue"
</script>

<template>
  <main>
    <Diagram></Diagram>
    <History></History>
    
  </main>
</template>

<style scoped>
p{
  margin: 10rem;
}
main{
    display: flex;
    justify-content: space-between;
}

</style>