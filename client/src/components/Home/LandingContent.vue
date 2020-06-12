<template>
  <div id="demo" class="carousel slide" data-ride="carousel">

    <ul class="carousel-indicators">
      <li data-target="#demo" data-slide-to="0" class="active"></li>
      <li data-target="#demo" data-slide-to="1"></li>
      <li data-target="#demo" data-slide-to="2"></li>
    </ul>
    
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="../../assets/ManFactory.jpg" >
      </div>
      <div class="carousel-item">
        <img src="../../assets/Pbrush.jpg" width="1100" height="500">
      </div>
      <div class="carousel-item">
        <img src="../../assets/RectBulb.jpg" width="1100" height="500">
      </div>
    </div>
    
  </div>
</template>

<script>

</script>

<style scoped>
  .carousel-inner img {
    width: 100%;
    height: 650px;
    object-fit: cover;
  }
  .carousel-indicators > li {
    margin-top: -50px;
    margin-right: 15px;
    background-color: #000;
    height: 12px;
    width: 12px;
    border-radius: 50%;
  }  
</style>