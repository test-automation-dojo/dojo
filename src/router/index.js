import Vue from 'vue';
import Router from 'vue-router';
import Session from '@/components/Session';
import Dojo from '@/components/Dojo';
import session from '@/session';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/:exercise',
      name: 'todo',
      component: Dojo,
      beforeEnter: (to, from, next) => {
        if (session.isSignedIn()) {
          next();
        } else {
          next({ name: 'session', params: { exercise: 'todo' } });
        }
      },
    },
    {
      path: '/:exercise/session',
      name: 'session',
      component: Session,
      beforeEnter: (to, from, next) => {
        if (session.isSignedIn()) {
          next(to.params.exercise);
        } else {
          next();
        }
      },
    },
  ],
});
