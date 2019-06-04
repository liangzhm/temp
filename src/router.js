import Vue from 'vue';
import Router from 'vue-router';
import detail from './views/detail.vue';
import  '../static/css/reset.css'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/detail',
      name: 'detail',
      component: detail
    },

  ],
});
