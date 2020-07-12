<template>
  <div class="Wrapper">
    <p class="hdn">Track Your Bookings</p>
    <div class="t-wrapper">
      <div class="row1-tick">
        <div class="tone">
          <div class="tcircle"></div>
        </div>
        <div class="ttwo">
          <p class="thdn">Arrived</p>
        </div>
      </div>
      <div class="row2-line">
        <div class="lone">
          <div class="lline"></div>
        </div>
        <div class="ltwo">
          
        </div>
      </div>
      <div class="row1-tick">
        <div class="tone">
          <div class="tcircle"></div>
        </div>
        <div class="ttwo">
          <p class="thdn">Work Started</p> 
        </div>
      </div>
      <div class="row2-line">
        <div class="lone">
          <div class="lline"></div>
        </div>
        <div class="ltwo">

        </div>
      </div>
      <div class="row1-tick">
        <div class="tone">
          <div class="tcircle"></div>
        </div>
        <div class="ttwo">
          <p class="thdn">Work Completed</p>
        </div>
      </div>
      <div class="row2-line">
        <div class="lone">
          <div class="lline"></div>
        </div>
        <div class="ltwo">

        </div>
      </div>
      <div class="row1-tick">
        <div class="tone">
          <div class="tcircle"></div>
        </div>
        <div class="ttwo">
          <p class="thdn">Payment</p>
        </div>
      </div>
      <div class="row2-line">
        <div class="lone">

        </div>
        <div class="ltwo">

        </div>
      </div>
    </div>
    <div>
      <div class="dline"></div>
      <p class="dhdn">Details</p>
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
    font-size: 23px;
    font-family: p-regular;
  }
  .t-wrapper {
    width: 50%;
    height: 400px;
    margin-left: 2%;
    margin-top: 2%;
    margin-bottom: 2%;
    display: grid;
    grid-template-rows: 8% 17% 8% 17% 8% 17% 8% 17%;
  }
  .row1-tick {
    display: grid;
    grid-template-columns: 10% 90%;
  }
  .tone {
    
  }
  .tcircle {
    width: 32px;
    height: 32px;
    /*background-color: #000;*/
    background-image: url('../../../assets/track.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;    
    border-radius: 50%;
    margin-left: auto;
    margin-right: auto;
  }  
  .thdn {
    font-size: 20px;
    font-family: p-medium;
  }
  .ttwo {
  
  }
  .row2-line {
    display: grid;
    grid-template-columns: 10% 90%;    
  }  
  .lone {
    /*background-color: green;*/
  }
  .lline {
    width: 3px;
    height: 100%;
    background-color: #000;
    margin-left: auto;
    margin-right: auto;
  }  
  .ltwo {
    /*background-color: orange;*/
  }  
  .dline {
    width: 90%;
    background-color: #aaa;
    height: 1px;
  }
  .dhdn {
    font-size: 23px;
    font-family: p-regular;
    margin-top: 1%;    
  }
</style>