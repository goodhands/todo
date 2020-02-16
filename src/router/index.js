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
        path: '/posts',
        name: 'Foo',
        component: require('../components/Foo.vue').default
      }
    ]
  })