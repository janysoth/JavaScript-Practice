<template>
  <div class>
    <AppHeader :isLoggedIn="isLoggedIn" @open-login-modal="isLoginOpen = true" />
    <div class="w-full flex">
      <router-view></router-view>
    </div>
    <teleport to="body">
      <LoginModal v-if="isLoginOpen" @close-login="isLoginOpen = false" />
    </teleport>
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
        this.$store.commit('setIsLoggedIn');
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
