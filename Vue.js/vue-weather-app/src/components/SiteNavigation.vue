// To have this component present on every page
// Import this component in the App.vue
<template>
  <header class="sticky top-0 bg-weather-primary shadow-lg">
    <nav
      class="container flex flex-col sm:flex-row items-center gap-4 text-white py-6"
    >
      <!-- Set the header to the RouterLink to navigate back to the home screen -->
      <!-- the name is the route name not the path -->
      <RouterLink :to="{ name: 'home' }">
        <div class="flex items-center gap-3 flex-1">
          <i class="fa-solid fa-sun text-2xl"></i>
          <p class="text-2xl">The Local Weather</p>
        </div>
      </RouterLink>

      <div class="flex gap-3">
        <i class="fa-solid fa-circle-info"></i>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>
