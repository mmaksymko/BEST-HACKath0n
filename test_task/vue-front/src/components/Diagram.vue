<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'vue-chartjs'
import * as chartConfig from '../doughnutChartConfigCr.js'
import type { CreditDeposit } from '@/types';

const { getCredits,updateCreditTransactions,getCurrCreditId,setCurrCreditId } = defineProps<{
    getCredits: () => CreditDeposit[];
    updateCreditTransactions: (id:number) => void;
    setCurrCreditId: (i:number) => void;
    getCurrCreditId: () => number;
}>();

ChartJS.register(ArcElement, Tooltip, Legend)
let currIndex = 0;
const credits = getCredits();
console.log(credits);
const newDate = ref(new Date);
const interest_rate = ref(0);
const descript = ref("");

let data = {
    labels: ['виплачено', 'залишилося'],
    datasets: [
        {
            backgroundColor: [
                'rgba(204, 163, 59, 0.5)',
                'rgba(204, 163, 59, 0.0)'],
            data: [credits[currIndex].paid, credits[currIndex].total_amount - credits[currIndex].paid],
            borderColor: '#CCA43B',
            borderWidth: 1,
        }
    ]
}
const options = {
    responsive: true,
    maintainAspectRatio: false
}

function update() {
    const originalDate = new Date(credits[currIndex].operation_date); // Assuming you have the original date
    newDate.value = new Date(originalDate); // Create a new Date object with the original date
    newDate.value.setMonth(newDate.value.getMonth() + credits[currIndex].duration); // Add 5 months to the new date
    interest_rate.value = credits[currIndex].interest_rate;
    descript.value = credits[currIndex].description;
    data = {
        labels: ['виплачено', 'залишилося'],
        datasets: [
            {
                backgroundColor: [
                    'rgba(204, 163, 59, 0.5)',
                    'rgba(204, 163, 59, 0.0)'],
                data: [credits[currIndex].paid, credits[currIndex].total_amount - credits[currIndex].paid],
                borderColor: '#CCA43B',
                borderWidth: 1,
            }
        ]
    }
    updateCreditTransactions(credits[currIndex].id);
}

function nextCredit() {
    if (currIndex < credits.length - 1) {
        ++currIndex;
    }
    else{
        currIndex = 0;
    }
    setCurrCreditId(credits[currIndex].id);
    update();
}
function prevCredit(){
    if (currIndex > 0) {
        --currIndex;
    }
    else{
        currIndex = credits.length - 1;
    }
    setCurrCreditId(credits[currIndex].id);
    update();
}

onMounted(() => {
    update();
})
</script>

<template>
    <div class="diagram__container">
        <div class="diagram__header">
            <div>
                <h1>Історія</h1>
            </div>
            <div class="diagram_info">
                <p class="period">Активний до {{ newDate.toLocaleDateString() }}</p>
                <p class="add_info">ставка: {{ interest_rate }}% щомісяця</p>
                <p class="add_info">{{ credits[currIndex].description }}</p>
            </div>
        </div>
        <div class="diagram">
            <font-awesome-icon @click="prevCredit" :icon="['fas', 'chevron-left']" style="color: #ffffff;" />
            <div class="doghnut__diagram">
                <Doughnut :data="data" :options="options" />
            </div>
            <font-awesome-icon @click="nextCredit" :icon="['fas', 'chevron-right']" style="color: #ffffff;" />
        </div>
        <div class="diagram__footer"><button class="add_credit">додати</button></div>
    </div>
</template>

<style scoped>
.diagram__container {
    width: 100%;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 1.25rem;
    height: 30rem;
    flex-grow: 2;
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
    /*flex-direction: row;*/
    padding: 0 1rem;
    align-items: center;
}

canvas {
    height: 24rem;
}

.doghnut__diagram {
    position: relative;
}

.diagram__footer {
    position: relative;
    top: -4rem;
    display: flex;
    justify-content: right;
}

.add_credit {
    background: rgba(204, 163, 59, 0.5);
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