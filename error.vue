  <template>
    <div class="error">
      <h2>{{ error.statusCode }}</h2>
      <h5>Page Not Found</h5>
    </div>
  </template>
  
  <script setup>
    defineProps(['error'])
  </script>
  
  <style scoped>
    h2, h5{text-align: center;}
  </style>