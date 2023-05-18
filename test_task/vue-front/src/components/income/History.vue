<script setup lang="ts">
    const {setVisibility} = defineProps<{
        setVisibility: (s:boolean) => void;
    }>();
</script>

<template>
    
    <div class="history">
        <div class="history-body">
        </div>
        <footer>
            <button @click=setVisibility(true)>Додати доходи</button>
        </footer>
    </div>
</template>

<style scoped>

.history{
    margin-top: 8rem;
    height: 25rem;
    margin-right: 0.5rem;
    margin-left: 0.5rem;
}
.history-body{
    border-radius: 20px 20px 0px 0px;
    width: 20rem;
    height: 22rem;
    background: rgba(0, 0, 0, 0.5);
}
button{
    color: white;
    margin-left: auto;
    width: 20rem;
    height: 3rem;
    position: absolute;
    background: rgba(51, 103, 59, 0.5);
    border-radius: 0px 0px 20px 20px;
    font-weight: lighter;
    border: none;
    color: white;
    cursor: pointer;
}
button:hover{
    background: linear-gradient(to right, rgba(51, 103, 59, 0.5),  rgba(0, 0, 0, 0.5));
    transition: 3s;
}
</style>