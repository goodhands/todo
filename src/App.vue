<template>
  <div id="app">
    <Nav/>
    <div class="columns" id="main">
      <div class="column is-one-fifth sidebar">
        <Sidebar/>
      </div>
      <div class="column">
        <router-view></router-view>
      </div>
       <div class="column is-one-fifth left sidebar">
        <Sidebar/>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from './components/Nav';
import Sidebar from './components/Sidebar';

export default {
  name: 'App',
  components:{
    Nav,
    Sidebar
  }
};
</script>