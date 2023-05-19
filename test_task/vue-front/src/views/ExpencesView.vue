<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'
import Diagram from "../components/LineDiagramExpences.vue"
import History from "../components/ExpencesHistory.vue"
import TransIncomeExp from "../components/IncExpPopup.vue"
import {addTransactionModalVis, setPopupVisibility, unsetVars} from "@/visibilityvars";
const route = useRoute();


onMounted(async () => {
  unsetVars();
});

</script>

<template>
  <div class="expences__container">
    <Diagram></Diagram>
      <History
      :setPopupVisibility="setPopupVisibility"></History>
  </div>
  <TransIncomeExp v-if="addTransactionModalVis"
  :setPopupVisibility="setPopupVisibility"></TransIncomeExp>
  <RouterView />
</template>

<style scoped>
.expences__container {
  display: grid;
  width: 100%;
  align-items: center;
  gap: 5rem;
  grid-template-columns: 70% 30%;
  padding: 0 5rem;
}
</style>