<script setup lang="ts">
import { useRouter } from 'vue-router';
import { addUserVis, setPopupVisibility} from "@/visibilityvars";
import { ref } from 'vue';
const router = useRouter();
const { loginUser } = defineProps<{
    loginUser: (emailParam:string, passwordParam:string) => void;
}>()

const emailParam = ref("");
const passwordParam = ref("");

const handleSubmit = () => {
    event?.preventDefault()
    loginUser(emailParam.value, passwordParam.value);
};

</script>

<template>
    <div class="popup">
        <div class="popup__container">
            <div class="popup_head">
                <h3 id="addTransLoanDepPopup">Увійти</h3>
            </div>
            <button type="button" class="close" id="closePopup" @click="$emit('closeLogin')">✖</button>
            <form class="input__group" >
                <div class="input__item">
                    <p class="form__item__title">пошта</p>
                    <input required type="email" v-model="emailParam">
                </div>
                <div class="input__item">
                    <p class="form__item__title">пароль</p>
                    <!-- <input required type="text" v-model="passwordParam" pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"> -->
                    <input required type="text" v-model="passwordParam">
                </div>
                <a id="forgotPass">забули пароль?</a>
                <div class="popup__footer">
                    <!-- <button type="submit" class="submit_form" @click="$emit('closeLogin')">підтвердити</button> -->
                    <button type="submit" class="submit_form" @click="handleSubmit">підтвердити</button>
                    <span>На нашому сайті вперше? <a href="#" @click="setPopupVisibility(true)" class="signup">Зареєструйтеся</a>, це займе
                        кілька хвилин</span>
                </div>
            </form>
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
    padding: 1em 1.875em 0.375em 1.875em;
    align-items: center;
    justify-content: center;
}

.input__item {
    width: 30rem;
    flex-direction: column;
    margin-bottom: 0.5rem;
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
    color: black;
    border-bottom: 2px solid black;
    width: 30rem;
    height: 2rem
}

.input__item input:focus {
    outline: none;
}


#forgotPass {
    color: black;
    font-size: 0.75rem;
}

.popup__footer {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
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
