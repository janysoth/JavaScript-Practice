<template>
  <div class="flex flex-col min-h-screen font-Roboto bg-cambodia-blue">
    <SiteNavigation />
    <RouterView />
    <HomeView />
  </div>
</template>

<script setup>
import HomeView from "./HomeView.vue";
import SiteNavigation from "./SiteNavigation.vue";
</script>

<style lang="scss" scoped></style>