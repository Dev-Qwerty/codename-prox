<template>
  <div id="app">
    <SMain />
  </div>
</template>

<script>
//import Main from './components/Home/Main.vue'
//import LMain from './components/Login/LMain.vue'
import SMain from './components/Signup/SMain.vue'

export default {
  name: 'app',
  components: {
    SMain,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  padding-left: 100px;
  padding-right: 100px;
}
</style>
