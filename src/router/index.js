import Vue from 'vue';
import Router from 'vue-router';
import Todo from '@/components/Todo';
import Session from '@/components/Session';
import session from '@/session';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/todo',
      component: Todo,
      beforeEnter: (to, from, next) => {
        if (session.isSignedIn()) {
          next();
        } else {
          next('/todo/session');
        }
      },
    },
    {
      path: '/*/session',
      component: Session,
    },
  ],
});
