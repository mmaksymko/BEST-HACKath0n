<script setup lang="ts">
import { useRouter } from 'vue-router';
import { addUserVis, setPopupVisibility} from "@/visibilityvars";
import { ref } from 'vue';
const router = useRouter();
</script>

<template>
    <div class="popup">
        <div class="popup__container">
            <div class="popup_head">
                <h3 id="addTransLoanDepPopup">Корисна інформація</h3>
            </div>
            <button type="button" class="close" id="closePopup" @click="$emit('closeInfo')">✖</button>
            <div class="info">
                <p class="header">Як обрати свій напрям волонтерства?</p>
                <p>Подумайте, що вас найбільше цікавить або ж яка проблема вас турбує. Виходячи з цього, ви можете обрати напрям волонтерства. Наприклад, якщо ви любите годинами говорити телефоном, можна стати телефонним волонтером. Крім того, спробуйте різні види волонтерства — їх безліч. Спробувавши хоча б декілька з них, ви точно зрозумієте, що обрати.</p>
                <p class="header">З чого почати волонтерити?</p>
                <p>Перш за все, спробуйте почати з допомоги тим, хто вас оточує. Допоможіть сусідам, зокрема людям літнього віку, організуйте допомогу на рівні свого будинку чи мікрорайону. Ймовірно, ви знаєте потреби цих людей та можете допомогти їм.</p>
                <p class="header">Залучайте друзів та близьких.</p>
                <p>Погодьтесь, що завжди веселіше допомагати у колі друзів. Так час можна провести не тільки весело, а й корисно, допомагаючи іншим. Крім того, починаючи нову справу, ви будете підтримкою один для одного.</p>
                <p class="header">Що потрібно, аби почати волонтерити?</p>
                <p>Щоб приєднатись до волонтерського фронту потрібне лише бажання творити добро. Волонтерити може будь-хто, незалежно від віку, статусу, національності тощо. Крім того, не потрібно отримувати посвідчення волонтера, щоб допомагати локально у своєму місті. Проте важливо памʼятати, що волонтерство має три головні ознаки:</p>
                <li>Добровільність</li>
                <li>Безоплатність</li>
                <li>Суспільна користь</li>
Якщо за вашу допомогу вам пропонують оплату — це не є волонтерством.
<p class="header">Пам’ятаєте базові правила для волонтерів.</p>
Перш за все — не беріть забагато завдань. Допомагайте в міру того, як дозволяють ваші сили та ресурс. Також, найкраще обрати один напрям допомоги та зануритись у нього, аніж волонтерити у декількох сферах чи місцях одночасно. І, звісно, найважливіше — це ваша безпека. Будь-яке волонтерство не повинне загрожувати вашій безпеці. Дбайте про себе.</div>
            <button type="submit" class="submit_form" @click="$emit('closeInfo')">добре</button>
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
    height: 86%;
    width: 80%;
    background-color: white;
    border-radius: 2rem;
    position: relative;
    text-align: center;
    align-items: center;
    color: black;
}

.popup_head {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 3.75rem;
    font-size: 1.5rem;
    margin-top: 0.5rem;
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
.popup__footer {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.info {
    padding: 1% 3%;
    text-align: left;
}
.header {
    font-weight: bold;
}
.submit_form {
    background-color: black;
    color: white;
    font-weight: bold;
    font-size: 1rem;
    border: none;
    border-radius: 2rem;
    height: 2.75rem;
    width: 9rem;
    margin: 1rem 0 1rem;
    cursor: pointer;
}
.submit_form:hover {
    color: #E9B76C;
}
.signup {
    color: #9A57F0;
}
.popup__footer span {
    margin-bottom: 2rem;
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

    .input__item {
        width: 15rem;
        margin-bottom: 0.25rem;
    }

    .input__item input {
        width: 15rem;
        height: 1.75rem;
    }
}
</style>
