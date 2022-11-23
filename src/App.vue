<script setup lang="ts">
import NavBar from './components/NavBar.vue';
import HeaderVue from './components/HeaderVue.vue'
import DataRequest from './components/DataRequest.vue'
import ItemsHousing from './components/ItemsHousing.vue';
import ScanSection from './components/ScanSection.vue'


</script>

<template>
  <div class="body-wrapper">
    <NavBar />
    <HeaderVue />
    <div class="main-content">
      <div>
        <DataRequest />
        <ItemsHousing />
      </div>
      <div style="margin-top: 6rem;">
        <ScanSection />
      </div>
    </div>
  </div>
</template>

<style>
.body-wrapper {
  padding: 1rem 3rem;
  max-width: 1575px;
  margin: 0 auto;
}

.main-content {
  display: flex;
  gap: 10rem;
}
</style>
