<script setup lang="ts">
import { useRouter } from 'vue-router';
import { ref } from 'vue';
const router = useRouter();
const { addUser } = defineProps<{
    addUser: (firstNameParam: string, lastNameParam: string, emailParam:string, passwordParam:string, phoneParam:number) => void;
}>()
const firstNameParam = ref("");
const lastNameParam = ref("");
const phoneParam = ref("");
const emailParam = ref("");
const passwordParam = ref("");

const handleSubmit = () => {
    addUser(firstNameParam.value, lastNameParam.value, emailParam.value, passwordParam.value, parseInt(phoneParam.value));
};

</script>

<template>
    <div class="popup">
        <div class="popup__container">
            <div class="popup_head">
                <h3 id="addTransLoanDepPopup">Зареєструватися</h3>
            </div>
            <button type="button" class="close" id="closePopup" @click="$emit('closeSignUp')">✖</button>
            <form class="input__group" @submit.prevent="handleSubmit">
                <div class="input__item">
                    <p class="form__item__title">ім'я</p>
                    <input required type="text" v-model="firstNameParam" pattern="^[A-Za-zА-Яа-яІіЇїҐґЄє]{2,}$">
                </div>
                <div class="input__item">
                    <p class="form__item__title">прізвище</p>
                    <input required type="text" v-model="lastNameParam" pattern="^[A-Za-zА-Яа-яІіЇїҐґЄє]{2,}$">
                </div>
                <div class="input__item">
                    <p class="form__item__title">день народження</p>
                    <input required type="date" id="birthday">
                </div>
                <div class="input__item">
                    <p class="form__item__title">номер телефону</p>
                    <input required type="text" v-model="phoneParam">
                </div>
                <div class="input__item">
                    <p class="form__item__title">пошта</p>
                    <input required type="email" v-model="emailParam">
                </div>
                <div class="input__item">
                    <p class="form__item__title">пароль</p>
                    <input required type="text" v-model="passwordParam" pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$">
                </div>
                <div class="input__item">
                    <p class="form__item__title">пароль</p>
                    <input required type="text" pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$">
                </div>
                <div class="popup__footer">
                    <button type="submit" class="submit_form" @click="$emit('closeSignUp')">підтвердити</button>
                </div>
            </form>
        </div>
    </div>
</template>

<style scoped>
.popup {
    background-color: rgba(0, 0, 0, 0.5);
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
    color: black;
    border-radius: 2rem;
    position: relative;
    text-align: center;
    align-items: center;
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

.input__group {
    display: flex;
    flex-direction: column;

    padding: 1rem 1.875rem 0.375rem 1.875rem;
    align-items: center;
    justify-content: center;
}

.input__item {
    width: 30rem;
    flex-direction: column;
    margin-bottom: 0.3rem;
}

.form__item__title {
    display: flex;
    width: 100%;
    height: 1.875em;
    align-items: center;
    text-align: left;
}

.input__item input {
    border: none;
    background: none;
    border-bottom: 2px solid black;
    width: 30rem;
    height: 2rem
}
.input__item input:focus {
    outline: none;
}
.popup__footer {
    display: flex;
    justify-content: center;
    align-items: center;
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
    margin: 1rem 0 2rem;
    cursor: pointer;
}
.submit_form:hover {
    color: #E9B76C;
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
}</style>