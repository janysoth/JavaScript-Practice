<template>
  <div>
    <AppHeader @open-login-modal="isLoginOpen = true" />
    <div class="w-full flex">
      <router-view></router-view>
    </div>
    <LoginModal v-if="isLoginOpen" @close-login="isLoginOpen = false" />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import LoginModal from './components/LoginModal.vue';
import firebase from './utilities/firebase';

export default {
  components: { AppHeader, LoginModal },
  data() {
    return {
      isLoginOpen: false,
      isLoggedIn: false,
      authUser: {},
    };
  },

  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
        this.isLoggedIn = true;
        this.authUser = user;
      } else {
        // No user is signed in.
        this.isLoggedIn = false;
        this.authUser = {};
      }
    });
  },
};
</script>
