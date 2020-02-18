<template>
  <div class = "box">
    <form action="" method="POST">
      <div>
        <input class="input-box" type="text" name="email" placeholder="EMAIL">
      </div>
      <div>
        <input class="input-box" type="text" name="phoneno" placeholder="PHONENO">
      </div>      
      <div>
        <input class="input-box" type="Password" name="password" placeholder="PASSWORD">
      </div>
      <div>
        <label>Keep me signed in</label>
        <input type="checkbox" name="check1" value="">
      </div>
      <div>
        <input class="sbutton" type="submit" name="" value="Sign up">
      </div>
    </form>
          
  </div>
</template>

<style scoped>    
  .box {
    width: 33%;
    height: 65%;
    background-color: #fff;
    top: 63%;
    left: 50%;
    position: absolute;
    box-sizing: border-box;
    transform: translate(-50%, -50%);
    padding-top: 100px;
    padding-bottom: 5px;
    padding-left: 50px;
    padding-right: 50px;
    border-radius: 10px;
    border: none;
    box-shadow: 3px 3px #ceced1
  }
  input[type="submit"] {
    width: 100%;
    background-color: #000;
    border: none;
    color: #fff;
    height: 40px;
    opacity: 0.9;
    border-radius: 3px;
    box-shadow: 5px 5px #eeefef;
    font-size: 19px;
  }
  .input-box {
    font-size: 14px;
    width: 100%;
    padding-left: 15px;
    margin-top: 30px;
    height: 50px;
    border: 1px solid #dedee0;
    box-shadow: 4px 4px #eeefef;
  }
  .box label {
    font-size: 14px;
    padding-top: 15px;
    padding-right: 12px;
    padding-bottom: 15px;
  }
</style>