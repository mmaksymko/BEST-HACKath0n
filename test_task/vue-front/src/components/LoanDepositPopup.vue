<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router';

const { setPopupVisibility, addCreditTransaction } = defineProps<{
  setPopupVisibility: (vis: boolean) => void;
  addCreditTransaction: (sum: number, date: Date) => void;
}>();

const today = ref(new Date().toISOString().split('T')[0]);
const sum = ref(0);
const date = ref(new Date());
let isDeposit = false;
const route = useRoute();
if (['deposits'].includes(route.name?.toString() as any)) {
    isDeposit = true;
}

const handleSubmit = () => {
  addCreditTransaction(sum.value, date.value)
};

</script>

<template>
  <div class="popup">
    <div class="popup__container">
      <div class="popup_head">
        <h3 id="addTransLoanDepPopup">{{isDeposit?"Зняти кошти":"Оплатити"}}</h3>
      </div>
      <button type="button" @click="setPopupVisibility(false)" class="close" id="closePopup">✖</button>
      <form class="input__group" @submit.prevent="handleSubmit">
        <div class="input__item">
          <p class="form__item__title">сума</p>
          <input required type="text" v-model="sum" pattern="^[1-9]([0-9]{1,10})?(\.[1-9])?$" class="input" name="sum">
        </div>
        <div class="input__item">
          <p class="form__item__title">дата</p>
          <input required type="date" v-model="date" id="expires" class="input" :max="today" name="">
        </div>
        <div class="popup__footer">
          <button type="submit" class="submit_form">підтвердити</button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.popup {
    background-image: url("../assets/back_random.svg");
    background-repeat: no-repeat;
    background-size: cover; 
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
    background-image: url("../assets/popUp-back.svg");
    border-radius: 2rem;
    position: relative;
    text-align: center;
    align-items: center;
}

.input{
    color: var(--color-text);
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
    color: #33673B;
    background-color: white;
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
    border-bottom: 2px solid white;
    width: 30rem;
    height: 2rem
}
#expires {
    color-scheme: dark;
}
.popup__footer {
    display: flex;
    justify-content: center;
    align-items: center;
}
.submit_form {
    background-color: white;
    color: #242F40;
    font-weight: bold;
    font-size: 1rem;
    border: none;
    border-radius: 2rem;
    height: 2.75rem;
    width: 9rem;
    margin: 1rem 0 2rem;
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