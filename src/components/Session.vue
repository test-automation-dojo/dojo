<template>
  <div class="aligner">
    <section class="sign-in">
      <input id="username" type="text" v-model="username" placeholder="username"></input>
      <input id="password" type="password" v-model="password" @keyup.enter="signIn" placeholder="password"></input>
      <button id="sign-in" @click="signIn">Sign in</button>
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
    };
  },

  methods: {
    signIn() {
      this.error = false;
      const nextPath = this.$router.currentRoute.path.replace(/\/session$/, '');

      setTimeout(() => {
        if (session.signIn(this.username, this.password)) {
          this.$router.push(nextPath);
        } else {
          this.error = true;
        }
      }, 2000);
    },
  },
};
</script>

<style scoped>
.aligner {
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

button {
  padding: 10px;
  margin-top: 20px;
  font-family: sans-serif;
  font-size: 18px;
}
</style>
