<template>
  <div class="custom">
    <Header />
    <div class="aboutmm110">
      <h1>{{ uri }} Page!</h1>
    </div>
    <slot />

    <Footer />
  </div>
</template>

<script setup>
  const uri = useRoute().fullPath.substring(1)
</script>

<style>
    .custom .aboutmm110{
        width: 100vw;
        height: 70vh;
        background: linear-gradient(rgba(9, 30, 62, .7), rgba(9, 30, 62, .7)), url('@/assets/images/carousel-1.jpg') no-repeat;
        background-color: #ccc;
        background-size: cover;
        background-position: center;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        font-weight: bold;
    }
    .custom .aboutmm110 h1{
        font-family: 'Nunito-ExtraBold';
        font-size: 4rem;
    }
</style>