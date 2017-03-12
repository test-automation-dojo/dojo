import Vue from 'vue';

const state = new Vue({
  data: {
    isSignedIn: false,
  },
});

export default {
  state,

  signIn(username, password) {
    if (username === 'toby' && password === 'ninja') {
      state.isSignedIn = true;
    } else {
      state.isSignedIn = false;
    }

    return state.isSignedIn;
  },

  signOut() {
    state.isSignedIn = false;
  },

  isSignedIn() {
    return state.isSignedIn;
  },
};
