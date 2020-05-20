<template>
  <div class="Modal">
    <div class="Mbg">
      <div class="Mbox">
        <div class="Img">
          <router-link :to="{ path: '/services/cleaning/modal/cart' }">
            <div class="cbtn"></div>
          </router-link>
        </div>  
        <!--<router-link class="btn" :to="{name: ''}" @click.native="fn">
          <input type="submit" value="btn">
        </router-link>-->             
      </div>
    </div>
  </div>  
</template>

<script>


export default {
  name: 'checkout'
}
</script>

<style scoped>
  .Mbg {
    position: absolute;
    top: 0%;
    left: 0%;
    background: rgb(128, 128, 128, 0.5);
    width: 100%;
    height: 100%;
  }
  .Mbox {
    position: absolute;
    top: 6%;
    left: 25%;
    width: 50%;
    height: 900px;
    background-color: #fff;
  }
  .Img {
    margin: 0px;
    width: 100%;
    height: 340px;
    background-image: url(../../../assets/cout3.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;        
  }
  .cbtn {
    position: absolute;
    top: 2%;
    left: 94%;
    width: 30px;
    height: 30px;
    background-image: url(../../../assets/closebtn.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;        
  }  
  .Heading {
    color: #000;
    font-size: 28px;
    margin-top: 20px;
    text-align: center;
    margin-bottom: 0px;
  }
  .btn input[type="submit"]{
    margin-top: 20px;
    margin-left: 40%;
    width: 100px;
    height: 45px;
    border: none;
    color: #fff;
    background-color: black;
    border-radius: 5px;
 } 
</style>