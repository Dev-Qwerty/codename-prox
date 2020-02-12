<template>
  <div id="app">
    <LMain />
  </div>
</template>

<script>
//import Main from './components/Home/Main.vue'
import LMain from './components/Login/LMain.vue'

export default {
  name: 'app',
  components: {
    LMain,
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
