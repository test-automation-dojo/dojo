<template>
  <div class="container">
    <section class="sign-in">
      <input id="username" type="text" v-model="username" placeholder="username"></input>
      <input id="password" type="password" v-model="password" @keyup.enter="signIn" placeholder="password"></input>
      <button id="sign-in" @click="signIn">
        <span v-show="!isSigningIn">Sign in</span>
        <div v-show="isSigningIn" class="spinner">
          <div class="bounce1"></div>
          <div class="bounce2"></div>
          <div class="bounce3"></div>
        </div>
      </button>
      <p id="error" :class="{ hidden: !error }">Invalid credentials</p>
    </section>
  </div>
</template>

<script>
import session from '@/session';

export default {
  data() {
    return {
      username: '',
      password: '',
      error: false,
      isSigningIn: false,
    };
  },

  methods: {
    signIn() {
      this.error = false;
      this.isSigningIn = true;

      setTimeout(() => {
        if (session.signIn(this.username, this.password)) {
          this.$router.push({ name: this.$route.params.exercise });
        } else {
          this.error = true;
        }

        this.isSigningIn = false;
      }, 2000);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/button";

.container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-family: sans-serif;
}

.sign-in {
  display: flex;
  flex-direction: column;
  text-align: center;
}

#sign-in {
  margin-top: 20px;
}

.hidden {
  visibility: hidden;
}

input {
  display: block;
  margin: 0;
  font-family: sans-serif;
  font-size: 18px;
  appearance: none;
  box-shadow: none;
  border-radius: none;
  padding: 10px;
  border: solid 1px #dcdcdc;
  transition: box-shadow 0.3s, border 0.3s;
  margin-top: 10px;
}

input:focus {
  outline: none;
  border: solid 1px #707070;
  box-shadow: 0 0 5px 1px #969696;
}

.spinner {
  align-items: center;
  display: flex;
  justify-content: center;
  height: 32px;
}

.spinner > div {
  width: 18px;
  height: 18px;
  background-color: #fff;

  border-radius: 100%;
  display: inline-block;
  -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
  animation: sk-bouncedelay 1.4s infinite ease-in-out both;
}

.spinner .bounce1 {
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
}

.spinner .bounce2 {
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
}

@-webkit-keyframes sk-bouncedelay {
  0%, 80%, 100% { -webkit-transform: scale(0) }
  40% { -webkit-transform: scale(0.7) }
}

@keyframes sk-bouncedelay {
  0%, 80%, 100% {
    -webkit-transform: scale(0);
    transform: scale(0);
  } 40% {
    -webkit-transform: scale(0.7);
    transform: scale(0.7);
  }
}
</style>
