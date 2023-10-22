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
import { mapState } from 'vuex'; // Import mapState from Vuex

export default {
  components: { AppHeader, LoginModal },
  data() {
    return {
      isLoginOpen: false,
    };
  },

  computed: {
    ...mapState(['isLoggedIn']), // Use mapState to access the Vuex state
  },

  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
        this.$store.commit('setIsLoggedIn', true); // Use mutation to update the store
        this.$store.commit('setAuthUser', user); // Use mutation to update the store
      } else {
        // No user is signed in.
        this.$store.commit('setIsLoggedIn', false); // Use mutation to update the store
        this.$store.commit('setAuthUser', {}); // Use mutation to update the store
      }
    });
  }

};
</script>
