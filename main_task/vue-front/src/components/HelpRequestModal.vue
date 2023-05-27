<script setup lang="ts">

</script>

<template>
  <div class="help-request-modal">
    <div class="help-request-modal-content">

    <div class="header">
        <h2 class="text-style">Запит на допомогу</h2>
    </div><br>

    <div class="container">
        <label class="text-style">заголовок</label>
        <input type="text" class="text-input"><br>
    </div>

    <div class="container">
        <label class="text-style">категорія</label>
        <input type="text" list="categories-datalist" class="text-input">
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
        <select class="text-input" name="cities" id="cities-select">
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
        <textarea class="description"></textarea><br>
    <div class="container"  >
        <label class="text-style" >термін</label>
        <input type="date" class="text-input" ><br>
    </div>
</div>
         <button class="accept-button">підтвердити</button>
   
  </div>
</template>

<style scoped>

.help-request-modal
{
    background-color: rgba(255, 255, 255, 0.7);
    width: 50rem;
    height: 30rem; 
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 2rem;
    padding: 3rem;
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
    position: absolute;
    background-color:#0a0a23;
    color: #fff;
    border:none;
    border-radius:15px;
    min-height:2rem; 
    min-width: 9rem;
    right: 10px;
    bottom: 10px ;
}
</style>
