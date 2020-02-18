<template>
  <div id="app">
    <GHMain />
  </div>
</template>

<script>
//import Main from './components/Home/Main.vue'
//import LMain from './components/Login/LMain.vue'
//import SMain from './components/Signup/SMain.vue'
import GHMain from "./components/GetHired/GHMain.vue";

export default {
  name: "app",
  components: {
    GHMain
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  padding-left: 100px;
  padding-right: 100px;
}
</style>
