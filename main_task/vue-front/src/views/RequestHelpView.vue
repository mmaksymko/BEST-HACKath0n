<script setup lang="ts">
import HelpRequestModal from '@/components/HelpRequestModal.vue';

async function addProposition(id:string, title:string, description:string,
   creationDate:Date, expiringDate:Date, city:string, category:string) {
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
            category: category
        })
    })
    if (!response.ok) return response.statusText
    return await response.json()
}

</script>

<template>
  <HelpRequestModal 
  :addProposition="addProposition"></HelpRequestModal>
</template>
