<script setup lang="ts">
import { inject, onMounted, ref, type Ref } from 'vue'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'vue-chartjs'
import type { CreditDeposit } from '@/types';
import { useRoute } from 'vue-router';

const { credits, setNewCreditPopupVis, updateCreditTransactions, setCurrCreditId } = defineProps<{
    updateCreditTransactions: (id: number) => void;
    setCurrCreditId: (i: number) => void;
    setNewCreditPopupVis: (vis: boolean) => void;
    credits: CreditDeposit[];
}>();

ChartJS.register(ArcElement, Tooltip, Legend)
let currIndex = inject<Ref<number>>('index');
let isDeposit = false;
const route = useRoute();
if (['deposits'].includes(route.name?.toString() as any)) {
    isDeposit = true;
}

const newDate = ref(new Date);
const interest_rate = ref(0);
const descript = ref("");

let data: {
    labels: string[]; datasets: { backgroundColor: string[]; data: number[]; borderColor: string; borderWidth: number; }[] |
        { backgroundColor: string[]; data: number[]; borderColor: string; borderWidth: number; }[] |
        { backgroundColor: string[]; data: number[]; borderColor: string; borderWidth: number; }[];
};
setData();

function setData() {
    if (!currIndex) {
        return;
    }
    if (isDeposit) {
        data = {
            labels: ['залишок','зняття коштів'],
            datasets: [
                {
                    backgroundColor: [
                        'rgba(0, 105, 255, 0.5)',
                        'rgba(0, 105, 255, 0.0)'],
                    data: [credits[currIndex.value].total_amount-credits[currIndex.value].paid, credits[currIndex.value].paid],
                    borderColor: '#242F40',
                    borderWidth: 1,
                }
            ]
        }
    }
    else {
        data = {
            labels: ['виплачено', 'залишилося'],
            datasets: [
                {
                    backgroundColor: [
                        'rgba(204, 163, 59, 0.5)',
                        'rgba(204, 163, 59, 0.0)'],
                    data: [credits[currIndex.value].paid, credits[currIndex.value].total_amount - credits[currIndex.value].paid],
                    borderColor: '#CCA43B',
                    borderWidth: 1,
                }
            ]
        }
    }
}


const options = {
    responsive: true,
    maintainAspectRatio: false
}

function update() {
    if (!currIndex) {
        return;
    }
    const originalDate = new Date(credits[currIndex.value].operation_date); // Assuming you have the original date
    newDate.value = new Date(originalDate); // Create a new Date object with the original date
    newDate.value.setMonth(newDate.value.getMonth() + credits[currIndex.value].duration); // Add 5 months to the new date
    interest_rate.value = credits[currIndex.value].interest_rate;
    descript.value = credits[currIndex.value].description;
    setData();
    updateCreditTransactions(credits[currIndex.value].id);
}

function nextCredit() {
    if (!currIndex) {
        return;
    }
    if (currIndex.value < credits.length - 1) {
        ++currIndex.value;
    }
    else {
        currIndex.value = 0;
    }
    setCurrCreditId(credits[currIndex.value].id);
    update();
}
function prevCredit() {
    if (!currIndex) {
        return;
    }
    if (currIndex.value > 0) {
        --currIndex.value;
    }
    else {
        currIndex.value = credits.length - 1;
    }
    setCurrCreditId(credits[currIndex.value].id);
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
                <p class="add_info">{{ credits[currIndex as number].description }}</p>
            </div>
        </div>
        <div class="diagram">
            <font-awesome-icon @click="prevCredit" :icon="['fas', 'chevron-left']" style="color: #ffffff;" />
            <div class="doghnut__diagram">
                <Doughnut :data="data" :options="options" />
            </div>
            <font-awesome-icon @click="nextCredit" :icon="['fas', 'chevron-right']" style="color: #ffffff;" />
        </div>
        <div class="diagram__footer" ><button @click="setNewCreditPopupVis(true)" class="add_credit">додати</button></div>
    </div>
</template>

<style scoped>
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
  