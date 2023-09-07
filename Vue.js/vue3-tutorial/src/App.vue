<template>
  <div>
    <AppHeader />
    <div class="w-full flex">
      <router-view></router-view>
    </div>
    <LoginModal />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import LoginModal from './components/LoginModal.vue';

export default {
  components: { AppHeader, LoginModal },
};
</script>
