<template>
  <div class="Wrapper">
      <h1>{{ sr }}</h1>
  </div>
</template>

<script>

export default {
  components: {
  },
  data() {
    return {
      sr: this.$cookies.get("wd-mw-child")
    }
  },
  methods: { 
    fn() {
    }
  }   
}       
</script>

<style scoped>
  .Wrapper {

  }
</style>