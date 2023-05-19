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
import * as chartConfig from '../lineChartConfigInc.js'

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
</script>

<template>
    <div class="diagram__container">
        <div class="diagram__header">
            <div><h1>Історія</h1></div>
        </div>
        <div class="diagram">
            <div class="line__diagram"><Line :data="data" :options="options" /></div>       
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
.line__diagram {
    position: relative;
    margin-top: 1rem;
}
@media screen and (max-width: 600px) {

}
@media screen and (max-width: 414px) {
    h1 {
        font-size: 1.2rem;
    }
    .diagram__container {
        height: 19rem;
        width: 21rem;
        margin-bottom: 2rem;
        margin-top: 7.5rem;
    }
    .diagram {
        width: 18rem;
        padding: 0;
        height: 16rem;
        margin-top: 0.25rem;
    }
    canvas {
        height: 16rem;
        width: 19rem;
    }
}
</style>