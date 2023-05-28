<script setup lang="ts">
import HelpRequestModal from '@/components/HelpRequestModal.vue';
import type { Item } from "@/types";

interface StringByString {
    [key: string]: string;
}

const Categories: StringByString = {
    'військове': 'military',
    'одяг': 'clothes',
    'тварини': 'animals',
    'транспорт': 'vehicles',
    'харчі': 'food',
    'діти': 'children',
    'житло': 'real_estate',
    'розваги': 'enternainment',
    'медицина': 'health',
    'інша': 'other'
}

function parseCategories(category: Array<string>) {
    return category.map(cat => Categories[`${cat}`])
}

function parseCategory(category: string) {
    return Categories[`${category}`]
}


async function addProposition(id: string, title: string, description: string,
    creationDate: Date, expiringDate: Date, city: string, category: string) {
    console.log(id)
    const response = await fetch(`http://localhost:7000/proposition/${id}`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: title,
            description: description,
            creationDate: creationDate,
            expiringDate: expiringDate,
            city: city,
            category: parseCategory(category)
        })
    })
    if (!response.ok) return response.statusText
    return await response.json()
}

</script>

<template>
    <HelpRequestModal :addProposition="addProposition"></HelpRequestModal>
</template>
