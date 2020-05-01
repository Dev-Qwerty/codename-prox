<template>
  <div class="Container">
    <div class="box">
      <h1>QUALITY SERVICES</h1>
      <h1>SERVED WITH PRIDE.</h1>     
    </div>

    <div class="Bwrapper">
      <div class="grid1">
        <div class="hrr"></div>
        <div class="heading1">
          <h3>SERVICES</h3>
        </div>
        <div class="hrr"></div>      
      </div>
      <div class="grid2">
        <div class="b1">
          <div class="iBox i1"></div>
        </div>
        <div class="b1">
          <div class="iBox i2"></div>
        </div>
        <div class="b2">
          <div class="iBox i3"></div></div>      
      </div>
      <div class="grid3">
        <div class="b1">
          <div class="iBox i4"></div>
        </div>
        <div class="b1">
          <div class="iBox i5"></div>
        </div>
        <div class="b2">
          <div class="iBox i6"></div></div>      
      </div>   
      <div class="grid4">
        <div class="b3">
          <div class="iBox i7"></div>
        </div>
        <div class="b3" @click="cfn">
          <div class="iBox i8"></div>
          <!--<router-link class="iBox i8" :to="{ path: 'gethired' }" v-on="cfn()"></router-link>-->
        </div>
        <div class="">
          <div class="iBox i9"></div>
        </div>      
      </div>
      <div class="grid5">
        <div class="hrr1"></div>
        <div class="heading1">
          <h3>OFFERS</h3>
        </div>
        <div class="hrr1"></div>      
      </div> 
      <div class="grid6">
        <div class="b3">
          <div class="iBox1 Img1">
            <div class="hWrap">
              <h4>PREMIUM CAR WASH</h4>
              <h5>STARTS @499</h5>
            </div>      
          </div>
        </div>
        <div class="">
          <div class="iBox1 Img2">
            <div class="hWrap">
              <h4>INTERIOR DEEP CLEANING</h4>
              <h5>STARTS @899</h5>
            </div>            
          </div>
        </div>      
      </div>           
    </div>
        
  </div>    
</template>

<script>
export default {
  data() {
    return {
      a: []
    }
  },
  methods: {
    cfn() {
      this.$router.push({path: 'services/cleaning'})
    }
  }
}
</script>

<style scoped>
  .box {
    padding: 100px;
    width: 100%;
    height:300px;
    background-color: #eeefef;
  }
  .box h1 {
    margin: 0px;
    padding: 0px;
    font-family: 'Times New Roman';
    font-size: 45px;
  }
  .Bwrapper {
    margin-top: 50px;
    margin-left: 70px;
    margin-right: 70px;
  }
  .grid1 {
    display: grid;
    grid-template-columns: 4fr 1fr 4fr;
    margin-top: 100px;
    margin-bottom: 20px;
  }
  .grid2 {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-auto-rows: minmax(300px, auto);
  }
  .grid3 {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-auto-rows: minmax(300px, auto);
  } 
  .grid4 {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-auto-rows: minmax(300px, auto);
  }     
  .grid5 {
    margin-top: 140px;
    display: grid;
    grid-template-columns: 4fr 1fr 4fr;
    margin-bottom: 20px;
  }   
  .grid6 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: minmax(300px, auto);
  }       
  .b1 {
    border-bottom: 1px solid #aaa;
    border-right: 1px solid #aaa;
  }
  .b2 {
    border-bottom: 1px solid #aaa;
  }
  .b3 {
    border-right: 1px solid #aaa;
  }    
  .iBox {
    border-radius: 10px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    margin-left: 80px;
    margin-top: 60px;
    height: 60%;
    width: 60%;
  }
  .i1 {
    background-image: url(../../assets/Painting.png);
  }
  .i2 {
    background-image: url(../../assets/Elec.png);
  }
  .i3 {
    background-image: url(../../assets/Painting.png);
  }
  .i4 {
    background-image: url(../../assets/Painting.png);
  }
  .i5 {
    background-image: url(../../assets/Painting.png);
  }
  .i6 {
    background-image: url(../../assets/Photo.png);
  }
  .i7 {
    background-image: url(../../assets/Painting.png);
  }
  .i8 {
    background-image: url(../../assets/Cleaning.png);
  }
  .i9 {
    background-image: url(../../assets/Painting.png);
  }          
        
  .iBox1 {
    border-radius: 10px;
    margin-left: 100px;
    margin-top: 60px;
    height: 65%;
    width: 65%;
    background-blend-mode: overlay;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;      
  }
  .Img1 {
    background-image: url(../../assets/CarWash.jpg), linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5));  
  }
  .Img2 {
    background-image: url(../../assets/IntCleaning.jpg), linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5));
  }  
  .hWrap {
    color: #fff;
    text-align: center;
    padding-top: 65px;
  }  
  .hrr {
    border: 1px solid #aaa;
    height: 0px;
    background-color: #aaa;
  }
  .hrr1 {
    border: 1px solid #aaa;
    height: 0px;
    background-color: #aaa;
  }
  .heading1 {
    margin-top: -15px;
    margin-left: 10px;
    margin-right: 10px; 
  }
</style>