<script lang="ts" setup>

</script>
<template>
    <div class="header">
        <div class="header-wrapper">
          <div class="logo-wrapper">
            <img class="logo" src="../assets/Logo144.png" />
          </div>
          <div class="profile-wrapper">
           <p class="profile-name">Caleb</p>
            <img class="profile-pic" src="../assets/IMG_5564(2).jpg" alt="">
          </div>
        </div>
      </div>
</template>
<style>
.profile-pic {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  
  .profile-wrapper {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  
  .profile-name {
    font-family: 'DM Sans';
    color: rgb(109, 108, 108);
    font-weight: 800;
    font-size: 20px;
  }
  .header-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .logo-wrapper {
    display: flex;
    align-items: center;
    gap: 2rem;
  }
  
  .logo {
    width: 100px;
  }
  
  .header {
    max-width: 1575px;
    max-height: 1080px;
    margin: 0 auto;
    padding: 0 5px;
  }
</style>