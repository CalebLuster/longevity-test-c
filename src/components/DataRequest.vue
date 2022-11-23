<script lang="ts" setup>
import { Icon } from '@iconify/vue'
</script>
<template>
    <div class="search-outer-wrapper">
        <div class="search-wrapper">
          <input placeholder="Cholesterol, Weight, Age..." class="input-field" type="text">
          <Icon icon="fa6-solid:magnifying-glass" class="search-icon" />
        </div>
        <div class="search-wrapper">
          <p class="profile-name">Group by:</p>
          <div class="search-wrapper">
            <button class="navlinks" href="">disease</button>
            <button class="navlinks" href="">type</button>
            <button class="navlinks" href="">measurement unit</button>
          </div>
        </div>
      </div>
</template>
<style>
.input-field {
    border: none;
    outline: none;
    box-shadow: none;
    background-color: rgba(54, 131, 252, 0.1);
    border-radius: 6px;
    transition: all 0.5s;
    padding: 5px 10px;
    width: 20vw;
    font-family: "DM Sans";
    cursor: text;
    font-weight: 500;
    font-size: 18px;
    
  }
  
  .search-outer-wrapper {
    display: flex;
    align-items: center;
    gap: 2rem;
    min-width: 65%;
  }
  
  .input-field::placeholder {
    font-family: 'DM Sans';
    font-weight: 600;
    opacity: 0.6;
  }
  
  .search-wrapper {
    display: flex;
    align-items: center;
    gap: 2rem;
    position: relative;
  }
  
  .search-icon {
    position: absolute;
    right: 10px;
    opacity: 0.4;
  }
  
  .navlinks {
    text-decoration: none;
    color: #000;
    font-weight: 400;
    font-size: 20px;
    font-family: "DM Sans";
    padding: 3px 15px;
    border-radius: 30px;
    background-color: rgba(54, 131, 252, 0.1);
    transition: all 0.3s;
    border: none;
  }
  
  .navlinks:hover {
    background-color: #3683fc;
  }
  
  .navlinks:focus {
    background-color: #3683fc;
    color: #fff;
  }
  
  .profile-name {
    font-family: 'DM Sans';
    color: rgb(109, 108, 108);
    font-weight: 800;
    font-size: 20px;
  }
</style>