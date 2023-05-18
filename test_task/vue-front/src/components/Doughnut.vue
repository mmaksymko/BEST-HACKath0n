<template>
  <Doughnut
    :options="chartOptions"
    :data="chartData"
    :id="chartId"
    :key="chartId"
    :plugins="plugins"
    :class="cssClasses"
    :style="styles"
    :width="width"
    :height="height"
  />
</template>

<script setup lang="ts">
import { Doughnut } from 'vue-chartjs'

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale)

const chartId = 'doughnut-chart'
const datasetIdKey = 'label'
const width = 600
const height = 600
const cssClasses = ''
const styles = {}
const plugins: any[] = [] // Explicitly define the type as an array of any

const chartData = {
  labels: ['виплачено', 'залишилося'],
  datasets: [
    {
      backgroundColor: [
        'rgba(204, 163, 59, 0.5)',
        'rgba(204, 163, 59, 0.0)'
      ],
      data: [9000, 11000],
      borderColor: '#CCA43B',
      borderWidth: 1
    }
  ]
}

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false
}
</script>
