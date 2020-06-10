<template>
  <div class="wcsignup">
    <div class="Mbg">
      <div class="sh-left">
        <div class="Mbox sh-bottom">
          <div class="leftPic">
          
          </div>
          <div class="right">
            
          </div>      
        </div>
      </div>
    </div>
  </div>  
</template>

<script>


export default {
  name: 'wcSignup',
  components: { 
  },
  data() {
    return {
    }
  },
  methods: {
    signupfn() {
      
    }
  }
}
</script>

<style scoped>
  .Mbg {
    background-color: #eeefef;
    width:100%;
    height: 722px;
    padding-top: 3%;
    padding-left: 14%;
  }
  .Mbox {
    width: 85%;
    height: 610px;
    display: grid;
    grid-template-columns: 60% 40%;
  }  
  .sh-bottom {
    box-shadow: 0 5px 5px -6px #707070;
  }
  .sh-left {
    box-shadow: -5px 0 5px -6px #707070;
  }    
  .leftPic {
    margin: 0px;
    width: 100%;
    background-image: url(../../assets/wcsignup.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;  
  }
  .right {
    background-color: #fff;
  }
</style>