<template>
  <div class = "box">
    <form action="" method="POST">
      <div>
        <input class="input-box" type="text" name="uname" placeholder="Username">
      </div>
      <div>
        <input class="input-box" type="Password" name="password" placeholder="Password">
      </div>
      <div>
        <label class="clr">Keep me signed in</label>
        <input type="checkbox" name="vehicle1" value="Bike">
      </div>
      <div>
        <input class="sbutton" type="submit" name="" value="Sign in">
      </div>
    </form>
          
  </div>
</template>

<style scoped>    
  .box {
    width: 34%;
    height: 60%;
    background-color: #fff;
    top: 63%;
    left: 50%;
    position: absolute;
    box-sizing: border-box;
    transform: translate(-50%, -50%);
    padding-top: 110px;
    padding-bottom: 5px;
    padding-left: 50px;
    padding-right: 50px;
    border-radius: 10px;
    border: none;
    box-shadow: 2px 2px #aaa
  }
  input[type="submit"] {
    width: 100%;
    background-color: #000;
    border: none;
    color: #fff;
    height: 40px;
    opacity: 0.9;
  }
  .input-box {
    width: 100%;
    padding-left: 10px;
    margin-top: 30px;
    height: 50px;
    border: 1px solid #aaa;
  }
  .box label {
    padding-top: 15px;
    padding-right: 12px;
    padding-bottom: 15px;
  }
  
</style>