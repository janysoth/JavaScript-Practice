<template>
  <AppHeader />
  <div class="w-full flex">
    <FamilyMembers />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import FamilyMembers from './components/FamilyMembers.vue';

export default {
  components: { AppHeader, FamilyMembers },
};
</script>
