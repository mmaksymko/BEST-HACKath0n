<script setup lang="ts">
    const {setVisibility} = defineProps<{
        setVisibility: (s:boolean) => void;
    }>();

</script>
<template>
    <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal">
        <header class="modal-header">
            <div class="title">
                ДОДАТИ ВИТРАТИ
            </div>
            <button type="button" class="btn-close" @click="setVisibility(false)">
                ×
            </button>
        </header>
        <section class="modal-body">
            <form class="body">
                <div class="item">
                    <label for="sum">сума</label>
                    <input type="text" id="sum" name="sum">
                </div>
                <div class="item">
                    <label for="date">дата</label>
                    <input type="date" id="date" name="date">
                </div>
                <div class="item">
                    <label for="description">опис</label>
                    <input type="text" id="description" name="description">
                </div>
                <input type="submit" value="підтвердити" class="btn-submit">
            </form>
        </section>
      </div>
    </div>
    </transition>
  </template>

<style>
  .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: url(../../assets/modal.png);
    background-color: rgba(0, 0, 0, 0.75);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .modal {
    background: url(../../assets/back.png);
    background-color: #242F40;;
    border-radius: 30px;
    box-shadow: 2px 2px 20px 1px #293649;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
    padding: 2rem 10%;
    height: 25rem;
    justify-content: space-evenly;
    width: 70%;
  }
  .modal-header {
    display: flex;
    position: relative;
    color: white;
    justify-content: space-between;
    align-content: center;
    align-items: center;
  }
  .modal-body {
    position: relative;
    /* width: 20rem; */
  }
  .body{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
  }
  .btn-close {
    top: 0;
    right: 0;
    border: none;
    font-size: 0.8rem;
    cursor: pointer;
    color: black;
    background: white;
    border-radius: 50%;
    width: 1.5em;
    height: 1.5em;
  }
  .btn-submit{
    margin-top: 2rem;
    border-radius: 40px;
    background-color: white;
    padding: 1rem 2rem;
    color: #242F40;
    cursor: pointer;
  }
  .item{
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
  }
  input{
    margin-top: 0.3rem;
    background-color: transparent;
    color: white;
    border: none;
    border-bottom: white solid 2px;  
    color-scheme: dark;  
  }
  input:focus{
    margin-top: 0.3rem;
    background-color: transparent;
    color: white;
    border: none;
    border-bottom: white solid 2px;  
    color-scheme: dark;
    font-weight: lighter;
    outline: none;
  }
  label{
    font-weight: 100;
  }
  .title{
    text-align: center;
    font-weight: bold;
    margin-left: 30%;
    margin-right: 30%;
  }
</style>