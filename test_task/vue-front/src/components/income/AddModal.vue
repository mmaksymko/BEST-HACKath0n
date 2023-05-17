<!-- <template>
    <div class="modal">
        <div class="modal-header">
            Додати витрати
        </div>
        <form class="modal-body">
            <label for="sum">Сума</label><br>
            <input type="text" id="sum" name="sum"><br>
            <label for="date">Дата</label><br>
            <input type="text" id="date" name="date"><br><br>
            <label for="description">Опис</label><br>
            <input type="text" id="description" name="description"><br><br>
            <input type="submit" value="Підтвердити">
        </form>
    </div>
</template>
<style scope>
.modal{
    z-index: 10;
}
</style> -->
<script>
    export default{
        name: "Modal",
        methods:{
            close(){
                this.$emit('close');
            },
        },
    };
</script>
<template>
    <div class="modal-backdrop">
      <div class="modal">
        <header class="modal-header">
            <div class="title">
                Додати витрати
            </div>
            <button type="button" class="btn-close" @click="close">
                ×
            </button>
        </header>
        <section class="modal-body">
            <form class="body">
                <div class="item">
                    <label for="sum">Сума</label>
                    <input type="text" id="sum" name="sum">
                </div>
                <div class="item">
                    <label for="date">Дата</label>
                    <input type="date" id="date" name="date">
                </div>
                <div class="item">
                    <label for="description">Опис</label>
                    <input type="text" id="description" name="description">
                </div>
                <input type="submit" value="Підтвердити" class="btn-submit">
            </form>
        </section>
        <!-- <footer class="modal-footer">
            <slot name="footer">
            </slot>
        </footer> -->
        
      </div>
    </div>
  </template>

<style>
  .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: url(../../assets/modal.svg);
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .modal {
    background: url(../../assets/back.svg);
    background-color: #242F40;;
    border-radius: 30px;
    box-shadow: 2px 2px 20px 1px #293649;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
    padding: 2rem 10rem;
    height: 25rem;
    justify-content: space-evenly;
  }
  .modal-header {
    display: flex;
    position: relative;
    color: white;
    justify-content: space-between;
    align-content: center;
  }
  .modal-body {
    position: relative;
    width: 15rem;
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
    /* padding: 0.7rem; */
    cursor: pointer;
    color: black;
    background: white;
    border-radius: 50%;
    width: 1.5rem;
    height: 1.5rem;
  }
  .btn-submit{
    margin-top: 2rem;
    border-radius: 40px;
    background-color: white;
    padding: 1rem 2rem;
    color: #242F40;
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
  }
</style>