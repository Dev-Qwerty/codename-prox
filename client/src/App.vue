<template>
  <div id="app">
    <Main />
  </div>
</template>

<script>
import Main from './components/Home/Main.vue'

export default {
  name: 'app',
  components: {
    Main,
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
