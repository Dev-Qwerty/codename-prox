<template>
  <div class="Modal">
    <div class="Mbg">
      <div class="Mbox">
        <div class="Img"></div>
        <p class="Heading">{{ $route.params.id }}</p>
        <div class="sBox"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cmodal'
}
</script>

<style scoped>
  .Mbg {
    position: absolute;
    top: 0%;
    left: 0%;
    background: rgb(128, 128, 128, 0.8);
    width: 100%;
    height: 800px;;
  }
  .Mbox {
    position: absolute;
    top: 15%;
    left: 25%;
    width: 50%;
    height: 600px;
    background-color: #fff;
  }
  .Img {
    margin: 0px;
    width: 100%;
    height: 340px;
    background-image: url(../../../assets/cimg.png);
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
  .sBox {
    margin-left: 35px;
    margin-top: 20px;
    width: 90%;
    border: 1px solid #000;
    height: 90px;
  } 
</style>