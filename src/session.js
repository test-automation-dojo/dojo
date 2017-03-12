import Vue from 'vue';

const STORAGE_KEY = 'dojo-is-signed-in';
const state = new Vue({
  data: {
    isSignedIn: JSON.parse(localStorage.getItem(STORAGE_KEY) || 'false'),
  },

  watch: {
    isSignedIn(value) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
    },
  },
});

export default {
  state,

  signIn(username, password) {
    if (username === 'toby' && password === 'ninja') {
      state.isSignedIn = true;
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
