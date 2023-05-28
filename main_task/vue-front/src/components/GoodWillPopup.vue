<script setup lang="ts">
import { useRouter } from 'vue-router';
import { addUserVis, setPopupVisibility} from "@/visibilityvars";
import { onMounted, ref } from 'vue';
const router = useRouter();

let goodWillList = [
'Посміхніться трьом незнайомцям сьогодні.',
'Допоможіть літньому сусідові з покупками або домашніми потребами.',
'Зберіть непотрібні речі та передайте їх в місцевий благодійний магазин.',
'Придбайте додаткові продукти під час покупок і віднесіть їх до близької  кухні або благодійного фонду.',
'Зв\'яжіть шапку або шарф та передайте його бездомним.',
'Поділіться інформацією про волонтерські організації в соціальних мережах, щоб надихнути інших долучитися.',
'Відвідайте літній будинок та проведіть час з літніми людьми, розмовляючи, граючи в настільні ігри або читаючи їм.',
'Подаруйте книгу або журнал до бібліотеки вашої школи або місцевої громади.',
'Підтримайте місцеву творчу спільноту, відвідавши виставку, концерт або літературний вечір.',
'Допоможіть старенькій людині перетнути дорогу або перенести важку сумку.',
'Відвідайте тваринний притулок і пограйте з безпритульними тваринами або прогуляйте собаку.',
'Посадіть дерево або квітку в вашому місцевому парку або вузькій алеї.',
'Зробіть дарунок місцевій школі, придбавши канцелярські приладдя або книжки.',
'Допоможіть волонтерській організації організувати благодійну акцію або подію.',
'Взяти участь у прибиранні місцевого парку або пляжу.',
'Викладіть малюнки або вірші дітям у лікарнях чи інших установах охорони здоров\'я.',
'Волонтерство в місцевому пришкільному таборі, допомагаючи з організацією та проведенням розважальних активностей для дітей.',
'Запросіть місцевих митців провести безкоштовний майстер-клас для дітей або дорослих.',
'Сходіть в найближчий центр плетіння сіток та допоможіть.',
'Докладіться до збору на потреби військового.',
'Волонтерство в програмі допомоги біженцям або переселенцям, допомагаючи їм адаптуватися до нового середовища.'
]

onMounted(() => {
    const i = Math.floor(Math.random() * goodWillList.length);
    document.getElementById('message')!.innerText = goodWillList[i];
})
</script>

<template>
    <div class="popup">
        <div class="popup__container">
            <button type="button" class="close" id="closePopup" @click="$emit('closeGoodWill')">✖</button>
            <div class="popup_head">
                <h3 id="addTransLoanDepPopup">Акт допомоги</h3>
                <div id="message"></div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.popup {
    background-color: rgba(0, 0, 0, 0.8);
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    z-index: 5;
    display: flex;
    align-items: center;
    justify-content: center;
}

.popup__container {
    height: auto;
    width: 42rem;
    background-color: white;
    border-radius: 2rem;
    position: relative;
    text-align: center;
    align-items: center;
    color: black;
    padding: 5rem 2rem;
    margin-right: 10%;
    margin-left: 10%;
}

.popup_head {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 3.75rem;
    font-size: 1.5rem;
}

.close {
    position: absolute;
    top: 0;
    right: 0;
    margin: 0.75rem 0.75rem 0 0;
    width: 2rem;
    height: 2rem;
    border-radius: 1rem;
    border: none;
    color: white;
    background-color: black;
    cursor: pointer;
}
h3{
    margin-bottom: 10%;
}


@media screen and (max-width: 414px) {
    .popup__container {
        width: 21rem;
    }

    .popup_head {
        font-size: 1.2rem;
    }

    .close {
        width: 1.5rem;
        height: 1.5rem;
    }

}
</style>
