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
          <router-link class="" :to="{ path: '/services/plumbing' }" @click.native="fn"> 
            <div class="iBox i1">
              <div class="i1img"></div>
              <p class="i1h">PLUMBING</p>
            </div>
          </router-link>  
        </div>
        <div class="b1">
          <router-link class="" :to="{ path: '/services/electrical-and-wiring' }" @click.native="fn"> 
            <div class="iBox i2"></div>
          </router-link>  
        </div>
        <div class="b2">
          <router-link class="" :to="{ path: '/services/electronics-and-appliances' }" @click.native="fn"> 
            <div class="iBox i3">
              <div class="i3img"></div>
              <p class="i3h">HOME APPLIANCES</p>   
            </div>
          </router-link> 
        </div>    
      </div>
      <div class="grid3">
        <div class="b1">
          <router-link class="" :to="{ path: '/services/fabrication' }" @click.native="fn"> 
            <div class="iBox i4">
              <div class="i4img"></div>
              <p class="i4h">FABRICATION</p>            
            </div>
          </router-link>  
        </div>
        <div class="b1">
          <router-link class="" :to="{ path: '/services/carpentry' }" @click.native="fn"> 
            <div class="iBox i5">
              <div class="i5img"></div>
              <p class="i5h">CARPENTRY</p>                 
            </div>
          </router-link>
        </div>
        <div class="b2">
           <router-link class="" :to="{ path: '/services/photography' }" @click.native="fn"> 
            <div class="iBox i6"></div>
          </router-link>
        </div>      
      </div>   
      <div class="grid4">
        <div class="b3">
           <router-link class="" :to="{ path: '/services/painting' }" @click.native="fn"> 
            <div class="iBox i7"></div>
          </router-link>
        </div>
        <div class="b3">
          <router-link class="" :to="{ path: '/services/cleaning' }" @click.native="fn"> 
            <div class="iBox i8"></div>
          </router-link>
        </div>
        <div class="">
          <router-link class="" :to="{ path: '/services/pest-control' }" @click.native="fn">
            <div class="iBox i9">
              <div class="i9img"></div>
              <p class="i9h">PEST CONTROL</p>              
            </div>          
          </router-link>          
        </div>      
      </div>
      <!--<div class="grid5">
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
      </div>-->           
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
    fn() {
      window.scrollTo(0,0)
    }
  }
}
</script>

<style scoped>
  .box {
    padding-top: 8%;
    padding-left: 7%;
    width: 100%;
    height:400px;
    background-color: #eeefef;
  }
  .box h1 {
    margin: 0px;
    padding-bottom: 2px;
    font-family: 'Times New Roman';
    font-size: 58px;
  }
  .Bwrapper {
    margin-top: 50px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 7%;
    width: 80%;
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
    margin-left: 80px;
    margin-top: 60px;
    height: 60%;
    width: 60%;
  }
  .i1 {
    background-color: #F1F1F1;
    padding-top: 10px;
  }
  .i1img {
    margin-left: auto;
    margin-right: auto;
    width: 100px;
    height: 110px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url(../../assets/plumbing.png);
  }
  .i1h {
    text-align: center;
    margin-top: 15px;
    color: #000;
    opacity: 68%;
    font-size: 18px;
    font-weight: bold;
  }
  .i2 {
    background-image: url(../../assets/Elec.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .i3 {
    background-color: #F1F1F1;
    padding-top: 10px;
  }
  .i3img {
    margin-left: auto;
    margin-right: auto;
    width: 125px;
    height: 110px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    background-image: url(../../assets/tv.png);
  }
  .i3h {
    text-align: center;
    margin-top: 15px;
    color: #000;
    opacity: 68%;
    font-size: 17px;
    font-weight: bold;
  }  
  .i4 {
    background-color: #F1F1F1;
    padding-top: 30px;
  }
  .i4img {
    margin-left: auto;
    margin-right: auto;
    width: 85px;
    height: 85px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    background-image: url(../../assets/fab.png);
  }
  .i4h {
    text-align: center;
    margin-top: 15px;
    color: #000;
    opacity: 68%;
    font-size: 17px;
    font-weight: bold;
  } 
  .i5 {
    background-color: #F1F1F1;
    padding-top: 30px;
  }
  .i5img {
    margin-left: auto;
    margin-right: auto;
    width: 85px;
    height: 85px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    background-image: url(../../assets/carpentry.png);
  }
  .i5h {
    text-align: center;
    margin-top: 15px;
    color: #000;
    opacity: 68%;
    font-size: 17px;
    font-weight: bold;
  } 
  .i6 {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;    
    background-image: url(../../assets/Photo.png);
  }
  .i7 {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;       
    background-image: url(../../assets/Painting.png);
  }
  .i8 {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;     
    background-image: url(../../assets/Cleaning.png);
  }
  .i9 {
    background-color: #F1F1F1;
    padding-top: 30px;
  }
  .i9img {
    margin-left: auto;
    margin-right: auto;
    width: 85px;
    height: 85px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    background-image: url(../../assets/pest.png);
  }
  .i9h {
    text-align: center;
    margin-top: 15px;
    color: #000;
    opacity: 68%;
    font-size: 17px;
    font-weight: bold;
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