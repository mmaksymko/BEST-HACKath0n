<script setup lang="ts">
import { computed, ref, watch } from 'vue'
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
import type { MoneyFlowInfo } from '@/types';
import { inject } from 'vue';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const startDate = ref(new Date())
const endDate = ref(new Date())

const today = new Date()

const minStartDate = computed(() => {
  const oneYearAgo = new Date(today.getFullYear() - 1, today.getMonth(), today.getDate())
  return oneYearAgo.toISOString().split('T')[0]
})

const maxEndDate = computed(() => {
  return today.toISOString().split('T')[0]
})

function validateDates() {
  if (startDate.value> endDate.value) {
    endDate.value= startDate.value
  }
}

watch(startDate, () => {
  validateDates()
})

const {getTransactions} = defineProps<{
    getTransactions: (id: number, date_start: Date, date_end: Date)  => void;
}>();

function updateTransactionList(startDate:Date,endDate:Date){
    getTransactions(1,startDate,endDate);
}

let data = {
    labels: [
        ""
    ],
    datasets: [
      {
        backgroundColor: '#CC3F0C',
        borderColor: '#CC3F0C',
        data: [ 0 ]
      }
    ]
}

const transactions = ref<MoneyFlowInfo[]>(inject('transactions') as any);

interface ExpensesData {
  dates: string[];
  expenses: number[];
}

function getExpensesData(data: MoneyFlowInfo[]): ExpensesData {
  const expensesMap: Map<string, number> = new Map();

// Calculate expenses by month
for (const item of data) {
  const monthKey = item.date.getMonth() + '-' + item.date.getFullYear();
  const monthExpenses = expensesMap.get(monthKey) || 0;
  expensesMap.set(monthKey, monthExpenses + item.sum);
}

// Sort by months
const sortedMap = new Map([...expensesMap.entries()].sort());

// Convert Map to arrays
const expensesData: ExpensesData = {
  dates: [],
  expenses: []
};

for (const [monthKey, expenses] of sortedMap) {
  const [month, year] = monthKey.split('-');
  const formattedDate = `${month}/${year}`;
  expensesData.dates.push(formattedDate);
  expensesData.expenses.push(expenses);
}

return expensesData;
}


function updateDiagramInfo(){
    const expensesData = getExpensesData(transactions.value);
    data.labels = expensesData.dates;
    data.datasets = [
      {
        backgroundColor: '#CC3F0C',
        borderColor: '#CC3F0C',
        data: expensesData.expenses
      }
    ]
}

updateDiagramInfo();
</script>

<template>
  <div class="diagram__block">
    <div class="diagram__container">
      <div class="diagram__header">
        <div>
          <h1>Історія</h1>
        </div>
      </div>
      <div class="diagram">
        <div class="doghnut__diagram">
          <Line :data="data" :options="chartConfig.options" />
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.diagram__block {
    margin-top: var(--header-height);
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
}

.diagram__container {
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

.display-button {
  margin-left: 0.5rem;
  padding: 0.25rem 0.5rem;
  background-color: transparent;
  border: none;
  color: var(--color-text);
  outline: none;
  cursor: pointer;
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

@media screen and (max-width: 600px) {}

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