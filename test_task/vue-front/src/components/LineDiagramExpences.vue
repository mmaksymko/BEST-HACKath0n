<script lang="ts">
import { onMounted, ref } from 'vue'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'

import { Line } from 'vue-chartjs'
import * as chartConfig from '../lineChartConfigExp.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

export default {
  name: 'App',
  components: {
    Line
  },
  data() {
    return chartConfig
  }
}

import { inject } from 'vue';

// Inject the parentRef from the parent component
const transactions = inject('transactions');

</script>

<template>
    <div class="diagram__container">
        <div class="diagram__header">
            <div><h1>Історія</h1></div>
        </div>
        <div class="diagram">
            <div class="doghnut__diagram"><Line :data="data" :options="options" /></div>
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
.diagram {
    display: flex;
    width: auto;
    justify-content: space-between;
    padding: 0 1rem;
    align-items: center;
}
canvas {
    height: 24rem;
}
.doghnut__diagram {
    position: relative;
    margin-top: 1rem;
}
@media screen and (max-width: 600px) {
    .topnav-row {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
}
</style>