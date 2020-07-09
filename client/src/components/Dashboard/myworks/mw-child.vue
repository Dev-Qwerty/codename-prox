<template>
  <div class="Wrapper">
    <div class="a">
      <div class="aa">
        <div class="aaa">

        </div>
        <div class="aab">

        </div>
      </div>
      <div class="ab">
        <div class="ab-top">
          <p>Contact Details</p>
        </div>
      </div>
    </div>
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
    padding-left: 10%;
    padding-top: 5%;
  }
  .a {
    width: 95%;
    display: grid;
    grid-template-columns: 60% 40%;
  }
  .aa {
    background-color: darkblue;
    height: 500px;
  }
  .ab {
    background-color: #fff;
    height: 400px;
    border: 1px solid #000
  }
  .ab-top {
    width: 100%;
    height: 35px;
    background-color: #000;
    color: #fff;
    padding-left: 5px;
    padding-top: 5px;
  }
</style>