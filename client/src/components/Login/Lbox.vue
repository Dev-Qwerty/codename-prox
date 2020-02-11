<template>
  <div class = "box">
      <form action="login.php" method="POST">
          <p>Username</p>
          <input type="text" name="uname" placeholder="Enter Username">
          <p>Password</p>
          <input type="Password" name="password" placeholder="Enter Password">
          <input type="submit" name="" value="Sign in">
      </form>
          
  </div>
</template>

<style scoped>    
  .box {
    width: 35%;
    height: 60%;
    background-color: #fff;
    top: 63%;
    left: 50%;
    position: absolute;
    box-sizing: border-box;
    transform: translate(-50%, -50%);
    padding-top: 150px;
    padding-bottom: 5px;
    padding-left: 30px;
    padding-right: 30px;
    border-radius: 10px;
  }

  .box h3 {
    color: #000;
    padding-bottom: 6px;
    text-align: center;
    font-weight: bold;
  }
  .box h5 {
    margin: 0;
    color: #000;
    padding-bottom: 0px; 
    text-align: center;
  }
  .input-group {
    padding-top: 40px;
  }

  
</style>