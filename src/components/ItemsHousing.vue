<script lang="ts" setup>
    import ListItems from './ListItems.vue';

 const types = [
    {
        name: 'Cholesterol HDL',
        subname: '{short description}',
        units: 'mg/dL, mmol/L',
    },
    {
        name: 'Cholesterol HDL',
        subname: '{short description}',
        units: 'mg/dL, mmol/L',
    },
    {
        name: 'Weight',
        subname: '{short description}',
        units: 'Kg, pounds',
    },
    {
        name: 'Age',
        subname: '{short description}',
        units: 'years',
    },
    {
        name: 'Blood Pressure',
        subname: '{short description}',
        units: 'mmHg',
    },
]
</script>
<template>
    <div>
        <ListItems title="Types" :items="types" />
    </div>
</template>
<style>
    
</style>