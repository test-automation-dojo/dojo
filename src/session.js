const state = {
  isSignedIn: false,
};

export default {
  signIn(username, password) {
    if (username === 'toby' && password === 'ninja') {
      state.isSignedIn = true;
    } else {
      state.isSignedIn = false;
    }

    return state.isSignedIn;
  },

  isSignedIn() {
    return state.isSignedIn;
  },
};
