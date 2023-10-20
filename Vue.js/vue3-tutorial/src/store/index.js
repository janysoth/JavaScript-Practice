import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      // Create data to pass through
      isLoggedin: false,

    }
  },

  // To change the value of the state
  mutations: {
    setIsLoggedIn(state) {
      state.isLoggedin = true;
    }
  }
})

export default store;