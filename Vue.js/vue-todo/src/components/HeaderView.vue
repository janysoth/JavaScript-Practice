<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div>
    <header>
      <nav class="container">
        <div class="branding">
          <RouterLink :to="{ name: 'Home' }">
            <img src="../assets/CambodiaFlag.png" alt="" />
          </RouterLink>
          <h1>Jonny Vorn Soth</h1>
        </div>
        <!-- To Create Navigation Bar -->
        <ul class="nav-routes">
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/todo-app">To-Do App</RouterLink>
          <RouterLink to="/Calculator">Calculator App</RouterLink>
          <RouterLink to="/WeatherApp">Weather App</RouterLink>
          <RouterLink to="/About">About</RouterLink>
        </ul>
      </nav>
    </header>
  </div>
</template>

<!-- Scoped: only applied the style in this component -->
<style lang="scss" scoped>
header {
  background-color: #f1f1f1;
  nav {
    display: flex;
    align-items: center;
    padding: 25px 16px;

    .branding {
      display: flex;
      align-items: center;
      gap: 8px;
      img {
        max-width: 50px;
      }

      h1 {
        font-size: 24px;
      }
    }

    .nav-routes {
      display: flex;
      flex: 1;
      justify-content: flex-end;
      gap: 12px;
      list-style: none;

      a {
        text-decoration: none;
        color: inherit;
      }
    }
  }
}
</style>