<template>
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
</style>

