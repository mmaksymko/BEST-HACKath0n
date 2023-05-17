<script setup lang="ts">
import Diagram from "../components/expenses/ExpensesDiagram.vue"
import Expenses from "../components/expenses/ExpensesField.vue"
</script>

<template>
    <div class="page">
    <Diagram></Diagram>
    <Expenses></Expenses>
    </div>
</template>

<style scoped>
.page{
    display: flex;
}
</style>zz