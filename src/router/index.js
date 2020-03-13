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
        component: require('../components/Register.vue').default
      },
      {
        path: '/login',
        name: 'Login',
        component: require('../components/Signup.vue').default
      },
      {
        path: '/todo/',
        name: 'All todo'
      },
      {
        path: '/todo/new',
        name: 'New todo',
        component: require('../components/NewTodo.vue').default
      }
    ]
  })