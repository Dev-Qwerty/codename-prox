<template>
  <div class="wrapper">
    <h4>Recommended Services</h4>
    <div class="container">
      <div class="box1">
        <!-- <h5>Box-1</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam nisi rem perspiciatis </p> -->
      </div>
      <div class="box2">
      </div>
      <div class="box3">
      </div>
    </div>

    <h4>Photography</h4>
    <div class="container">
      <div class="box4">
      </div>
      <div class="box5">
      </div>
    </div>

    <h4>Cleaning Services</h4>
    <div class="container">
      <div class="box6">
      </div>
      <div class="box7">
      </div>
    </div>      
  </div>    
</template>

<style scoped>
  .wrapper {
    margin-top: 60px;
    margin-left: 40px;
    margin-right: 40px;
  }
  .container {
    margin:0px;
    padding: 40px;
    display: flex;
  }
  /*.container div {
    border: 1px #ccc solid;
    padding: 10px;
  }*/
  .box1 {
    height: 200px;
    width: 400px;
    border-radius: 15px;
    overflow: hidden;
    perspective: 1px;
    background-image: url('../assets/Pbrush.jpg');
    background-blend-mode: overlay;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    border: 1px #ccc solid;
    margin-right: 40px;
  }
  .box2 {
    height: 200px;
    width: 400px;
    border-radius: 15px;
    overflow: hidden;
    perspective: 1px;    
    background-image: url('../assets/RectBulb.jpg');
    background-blend-mode: overlay;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    border: 1px #ccc solid;
    margin-right: 40px;
  }
  .box3 {
    height: 200px;
    width: 400px;
    border-radius: 15px;
    overflow: hidden;
    perspective: 1px;      
    background-image: url('../assets/ManFactory.jpg');
    background-blend-mode: overlay;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    border: 1px #ccc solid;
  }

  .box4 {
    align-self:flex-start;
    height: 200px;
    width: 400px;
    border-radius: 15px;
    overflow: hidden;
    perspective: 1px;      
    background-image: url('../assets/Pbrush.jpg');
    background-blend-mode: overlay;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    border: 1px #ccc solid;
    margin-right: 40px;
  }

  .box5 {
    height: 200px;
    width: 400px;
    border-radius: 15px;
    overflow: hidden;
    perspective: 1px;      
    background-image: url('../assets/ManFactory.jpg');
    background-blend-mode: overlay;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    border: 1px #ccc solid;
  }
  .box6 {
    align-self:flex-start;
    height: 200px;
    width: 400px;
    border-radius: 15px;
    overflow: hidden;
    perspective: 1px;      
    background-image: url('../assets/ManFactory.jpg');
    background-blend-mode: overlay;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    border: 1px #ccc solid;
    margin-right: 40px;
  }

  .box7 {
    height: 200px;
    width: 400px;
    border-radius: 15px;
    overflow: hidden;
    perspective: 1px;      
    background-image: url('../assets/Pbrush.jpg');
    background-blend-mode: overlay;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    border: 1px #ccc solid;
  }  
</style>