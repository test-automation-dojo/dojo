<template>
  <div id="dojo">
    <component :is="$route.params.exercise"></component>
    <button id="sign-out" v-show="isSignedIn" @click="signOut">
      <span>Sign out</span>
    </button>
  </div>
</template>

<script>
import session from '@/session';
import todo from '@/components/Todo';

export default {
  data() {
    return {
    };
  },

  components: {
    todo,
  },

  methods: {
    signOut() {
      session.signOut();
      this.$router.push({ name: 'session', params: this.$route.params });
    },
  },

  computed: {
    isSignedIn() {
      return session.state.isSignedIn;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/button";

#dojo {
	margin: 0;
	padding: 0;
  height: 100%;
}

#sign-out {
  position: absolute;
  top: 20px;
  right: 40px;
}
</style>
