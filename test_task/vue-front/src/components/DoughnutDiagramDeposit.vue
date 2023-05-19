<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'vue-chartjs'
import * as chartConfig from '../doughnutChartConfigDep.js'
import type { CreditDeposit } from '@/types';

ChartJS.register(ArcElement, Tooltip, Legend)

const props = defineProps<{
  setNewCreditPopupVis: (vis: boolean) => void;
}>()

const data = ref(chartConfig.data)
const options = ref(chartConfig.options)

onMounted(() => {
  const chartCanvas = document.getElementById('chartCanvas')

  if (chartCanvas) {
    const ctx = chartCanvas.getContext('2d')

    if (ctx) {
      new ChartJS(ctx, {
        type: 'doughnut',
        data: data.value,
        options: options.value,
      })
    } else {
      console.error('Failed to acquire canvas context')
    }
  } else {
    console.error('Canvas element not found')
  }
})
</script>
<template>
  <div class="diagram__container">
    <div class="diagram__header">
      <div>
        <h1>Історія</h1>
      </div>
      <div class="diagram_info">
        <p class="period">Активний до 11.12.2023</p>
        <p class="add_info">ставка: 1,9% щомісяця</p>
        <p class="add_info">опис депозиту</p>
      </div>
    </div>
    <div class="diagram">
      <font-awesome-icon :icon="['fas', 'chevron-left']" style="color: #ffffff;" />
      <div class="doughnut__diagram">
        <canvas id="chartCanvas"></canvas>
      </div>
      <font-awesome-icon :icon="['fas', 'chevron-right']" style="color: #ffffff;" />
    </div>
    <div class="diagram__footer">
      <button @click="props.setNewCreditPopupVis(true)" class="add_credit">додати</button>
    </div>
  </div>
</template>
  
 
  
<style scoped>
.diagram__container {
  margin-top: var(--header-height);
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 1.25rem;
  height: 30rem;
  width: 100%;
  padding: 1rem;
}

.diagram__header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.period {
  font-size: 1.75rem;
  margin-bottom: 1rem;
}

.add_info {
  text-align: right;
  font-size: 1rem;
}

.add_info:first-child {
  margin-bottom: 0.75rem;
}

.diagram {
  display: flex;
  position: relative;
  width: auto;
  top: -4rem;
  justify-content: space-between;
  padding: 0 1rem;
  align-items: center;
}

canvas {
  height: 24rem;
}

.doughnut__diagram {
  position: relative;
}

.diagram__footer {
  position: relative;
  top: -4rem;
  display: flex;
  justify-content: right;
}

.add_credit {
  background: rgba(36, 47, 64, 0.5);
  border: none;
  color: white;
  font-size: 1rem;
  padding: 0.5rem 2rem;
  border-radius: 0.75rem;
}

@media screen and (max-width: 600px) {
  .topnav-row {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
}
</style>
  