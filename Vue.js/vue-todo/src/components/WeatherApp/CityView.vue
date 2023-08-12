<template>
  <div class="flex flex-col min-h-screen font-Roboto bg-cambodia-blue">
    <SiteNavigation />
    <Suspense>
      <AsyncCityView />
      <template #fallback>
        <p class="flex flex-col text-white items-center py-12">Loading...</p>
      </template>
    </Suspense>
  </div>
</template>

<script setup>
import AsyncCityView from "./AsyncCityView.vue";
import SiteNavigation from "./SiteNavigation.vue";
</script>
