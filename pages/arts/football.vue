<template>
  <div class="football">
    <h2>{{ useRoute().fullPath }}</h2>
    <!-- <h1 style="color: white;">{{ useRoute().fullPath }}</h1> -->
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'custom'
})
</script>

<style>
.football h2{
        position: absolute;
        top: 20rem;
        right: 20rem;
        z-index: 100;
        font-size: 10rem;
        color: white;
    }
</style>