<script lang="ts" setup>


defineProps<{
    title: string,
    items: Array<{
        name: string,
        subname: string,
        units: string,
    }>
}>()
</script>
<template>
    <div class="items-outer-wrapper">
        <div class="items-inner-wrapper">
            <div class="items-wrapper">
                <div class="items-left">
                    <div class="items-name">
                        <p class="items-name">Biomarker name </p>
                        <p class="items-name-sub">description</p>
                    </div>
                    <p class="items-measurement">units</p>
                </div>
                <div class="items-right">
                    <input class="items-checkbox-first" type="checkbox">
                </div>
            </div>
            <div class="items-wrapper" v-for="(item, i) in items" :key="i">
                <div class="items-left">
                    <div class="items-name">
                        <p class="items-name">{{ item.name }}</p>
                        <p class="items-name-sub">{{ item.subname }}</p>
                    </div>
                    <p class="items-measurement">{{ item.units }}</p>
                </div>
                <div class="items-right">
                    <input class="items-checkbox" type="checkbox">
                </div>
            </div>
        </div>
    </div>
</template>
<style>
.items-outer-wrapper {
    margin-top: 2rem;
    border-radius: 10px;
    height: 100vh;
}

.items-inner-wrapper {
    display: flex;
    flex-direction: column;
    border-radius: 10px;
}

.items-wrapper {
    display: flex;
    width: 100%;
    padding: 3px;
    font-family: 'DM Sans';
    font-weight: 500;
    font-size: 18px;
    border-bottom: 2px solid rgba(0, 3, 8, 0.1);
}

.items-wrapper:hover {
    background-color: rgba(54, 131, 252, 0.1);
}

.items-left {
    min-width: 50%;
    display: flex;
    gap: 5rem;
}

.items-name {
    margin-block-end: 0;
    min-width: 250px;
}

.items-name-sub {
    margin-block-start: 0.5rem;
}

.items-checkbox {
    margin-block-start: 1.5rem;
    border: none;
    outline: none;
    background-color: rgba(54, 131, 252, 0.1);
}

input[type=checkbox] {
    transform: scale(1.5);
    border: none;
    outline: none;
    background-color: rgba(54, 131, 252, 0.1);
}

.items-right {
    display: flex;
    justify-content: end;
    align-items: flex-start;
    width: 50%;
}
</style>