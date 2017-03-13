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

const users = [
  { username: 'toby', password: 'ninja' },
  { username: 'kirby', password: 'watermelon' },
  { username: 'scruff', password: 'icecream' },
];

export default {
  state,

  signIn(username, password) {
    const user = users.find(x => x.username === username.toLowerCase());
    if (user && user.password === password) {
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
