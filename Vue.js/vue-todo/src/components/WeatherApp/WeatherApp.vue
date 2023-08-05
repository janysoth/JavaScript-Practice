<template>
  <div class="flex flex-col min-h-screen font-Roboto bg-cambodia-blue">
    <SiteNavigation />
    <RouterView />
  </div>
</template>

<script setup>
import SiteNavigation from "./SiteNavigation.vue";
</script>

<style lang="scss" scoped></style>