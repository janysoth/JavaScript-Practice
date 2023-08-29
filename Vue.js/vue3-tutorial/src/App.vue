<template>
  <div>
    <AppHeader />
    <div class="w-full flex">
      <!-- <FamilyMembers /> -->
      <CalendarApp />
    </div>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import CalendarApp from './components/CalendarApp.vue';
// import FamilyMembers from './components/FamilyMembers.vue';

export default {
  components: { AppHeader, CalendarApp },
};
</script>
