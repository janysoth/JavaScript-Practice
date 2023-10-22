import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      // Create data to pass through
      isLoggedIn: false,
      authUser: {},
    };
  },

  // To change the value of the state
  mutations: {
    setIsLoggedIn(state, payload) {
      state.isLoggedIn = payload;
    },

    setAuthUser(state, payload) {
      state.authUser = payload;
    }
  }
});

export default store;