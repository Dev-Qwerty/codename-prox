<template>
  <div class="Wrapper">
      <p class="hdn">Track Your Bookings</p>
      <div class="t-wrapper">
        <div class="row1-tick">
          <div class="tone">

          </div>
          <div class="ttwo">

          </div>
        </div>
        <div class="row2-line">
          <div class="lone">

          </div>
          <div class="ltwo">

          </div>
        </div>
        <div class="row1-tick">
          <div class="tone">

          </div>
          <div class="ttwo">

          </div>
        </div>
        <div class="row2-line">
          <div class="lone">

          </div>
          <div class="ltwo">

          </div>
        </div>
        <div class="row1-tick">
          <div class="tone">

          </div>
          <div class="ttwo">

          </div>
        </div>
        <div class="row2-line">
          <div class="lone">

          </div>
          <div class="ltwo">

          </div>
        </div>
        <div class="row1-tick">
          <div class="tone">

          </div>
          <div class="ttwo">

          </div>
        </div>
        <div class="row2-line">
          <div class="lone">

          </div>
          <div class="ltwo">

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
    padding-left: 3%;
    padding-top: 4%;
  }
  .hdn {
    font-size: 24px;
    font-family: p-medium;
  }
  .t-wrapper {
    width: 50%;
    height: 400px;
    margin-left: 2%;
    margin-top: 2%;
    background-color: orchid;
    display: grid;
    grid-template-rows: 8% 17% 8% 17% 8% 17% 8% 17%;
  }
  .row1-tick {
    background-color: red;
    display: grid;
    grid-template-columns: 15% 85%;
  }
  .tone {
    background-color: royalblue;
  }
  .ttwo {
    background-color: salmon;
  }
  .lone {
    background-color: green;
  }
  .ltwo {
    background-color: orange;
  }  
  .row2-line {
    background-color: purple;
    display: grid;
    grid-template-columns: 10% 90%;    
  }
</style>