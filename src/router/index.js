import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

export default new VueRouter({
    routes: [
      {
        path: '/',
        name: 'Home',
        component: require('../components/Home.vue').default,
      },
      {
        path: '/register',
        name: 'Register',
        component: require('../components/Signup.vue').default
      }
    ]
  })