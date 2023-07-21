<template>
  <div>
    <!-- Use Suspense Component to use the async function -->
    <Suspense>
      <AsyncCityView />
      <template #fallback>
        <p class="flex flex-col text-white items-center py-12">Loading...</p>
      </template>
    </Suspense>
  </div>
</template>

<script setup>
import AsyncCityView from "../components/AsyncCityView.vue";
</script>
