<script setup lang="ts">
import { useUserStore } from "@/stores/user"
import { ref } from 'vue';
const user = useUserStore();

const { addProposition } = defineProps<{
    addProposition: (id:string, title:string, description:string,
   creationDate:Date, expiringDate:Date, city:string, category:string) => void;
}>();

const title = ref("");
const category = ref("");
const city = ref("");
const description = ref("");
const endTime = ref(new Date());

function handleAdd(){
    addProposition(user._id,title.value,description.value,new Date(),endTime.value,city.value,category.value);
}

</script>

<template>
  <div class="help-request-modal">
    <div class="help-request-modal-content">

    <div class="header">
        <h2 class="text-style">Запит на допомогу</h2>
    </div><br>

    <div class="container">
        <label class="text-style">заголовок</label>
        <input type="text" v-model="title" class="text-input"><br>
    </div>

    <div class="container">
        <label class="text-style">категорія</label>
        <input type="text" v-model="category" list="categories-datalist" class="text-input">
        <datalist name="categories" id="categories-datalist">
            <option value="">--Вибрати--</option>
            <option value="Медична допомога" id="medicine"></option>
            <option value="Військова допомога" id="military"></option>
            <option value="Гуманітарна допомога" id="humanitarian"></option>
            <option value="Інше" id="other"></option>
        </datalist><br>
    </div>

    <div class="categories-chosen"> 
        <div class="categories-chosen-style">   
            <label>Медична допомога</label>
        </div>
        <div class="categories-chosen-style">   
            <label>Гуманітарна допомога</label>
        </div>
    </div>
   
    <div class="container">
        <label class="text-style" style="margin-bottom: 5px;">місто</label>
        <select class="text-input" v-model="city" name="cities" id="cities-select">
            <option value="">--Вибрати--</option>
            <option value="kyiv">Київ</option>
            <option value="kharkiv">Харків</option>
            <option value="bahmut">Бахмут</option>
            <option value="dnipro">Дніпро</option>
            <option value="sumy">Суми</option>
            <option value="mykolayiv">Миколаїв</option>
            <option value="other">Інші</option>
        </select><br>
    </div>
        <br><label class="text-style">опис</label>
        <textarea class="description" v-model="description"></textarea><br>
    <div class="container"  >
        <label class="text-style" >термін</label>
        <input type="date" v-model="endTime" class="text-input" ><br>
    </div>
</div>
         <button class="accept-button" @click="handleAdd">підтвердити</button>
   
  </div>
</template>

<style scoped>

.help-request-modal
{
    background-color: rgba(255, 255, 255, 0.5);
    width: 70%;
    height: 70%; 
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 2rem;
    padding: 1rem 2rem 3rem 2rem;
 }
.help-request-modal-content
{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    left: 10px;
}
.header{
    margin: auto;
    font-weight: bold;
   
}
.text-style
{
    font-weight: bold;
    color: black;
    padding: 0;
}
.container
{
    margin-top: 1rem;
    padding-right: 1rem;
}

.text-input{
    background-color: transparent; 
    border: none; 
    border-bottom: 1px solid black;
    margin-left: 1rem;
}
input:focus {
    outline: none;
}
.categories-chosen{
    display: flex
}
.categories-chosen-style{
    margin: auto;
    background-color: transparent; 
    border: 1px solid black; 
    border-radius:10px;
    min-height:1.5rem; 
    min-width: auto; 
    margin: 10px;
    padding: 5px;
    display: inline-block;   
    color: black; 
}

.description
{
    background-color: transparent; 
    border: 1px solid black;
    width: -webkit-fill-available;
    height: 6rem;
    overflow: auto;
    resize: none;
 
}
.accept-button{
    float: right;
    background-color: black;
    color: #fff;
    border:none;
    border-radius: 1.25rem;
    min-height: 2.5rem; 
    min-width: 9rem;
    margin-top: 1rem;
}
textarea:focus {
    outline: none;
}

@media screen and (max-width:800px) {
   
   .header{
       margin-left: auto;
       margin-bottom: auto;
       font-weight: bold;
      
   }
   .help-request-modal
   {
       background-color: rgba(255, 255, 255, 0.7);
       width: 80vh;
       height: auto;
       position: absolute;
       top: 50%;
       left: 50%;
       transform: translate(-50%, -50%);
       border-radius: 2rem;
       padding: 3rem;
     
    }
   }

@media screen and (max-width:700px) {
   
   .header{
       margin-left: auto;
       margin-bottom: auto;
       font-weight: bold;
      
   }
   .help-request-modal
   {
       background-color: rgba(255, 255, 255, 0.7);
       width: 60vh;
       height: auto;
       position: absolute;
       top: 50%;
       left: 50%;
       transform: translate(-50%, -50%);
       border-radius: 2rem;
       padding: 3rem;
    }
   }
   @media screen and (max-width: 600px) {
   
   .header{
       margin-left: auto;
       margin-bottom: auto;
       font-weight: bold;
      
   }
   .help-request-modal
   {
       background-color: rgba(255, 255, 255, 0.7);
       width: 55vh;
       height: auto;
       position: absolute;
       top: 50%;
       left: 50%;
       transform: translate(-50%, -50%);
       border-radius: 2rem;
       padding: 3rem;
    }
   }
@media screen and (max-width: 500px) {
   
.header{
    margin-left: auto;
    margin-bottom: auto;
    font-weight: bold;
   
}
.help-request-modal
{
    background-color: rgba(255, 255, 255, 0.7);
    width: 50vh;
    height: auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 2rem;
    padding: 3rem;
 }
}


</style>


