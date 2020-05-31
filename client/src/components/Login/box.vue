<template>
  <div class = "box">
    <div class="btns">
      <div>
        <router-link class="user" :to="{name: ''}" @click.native="userfn">
            <input type="submit" value="User">
        </router-link> 
      </div>
      <div>
        <router-link class="worker" :to="{name: ''}" @click.native="workerfn">
            <input type="submit" value="Worker">
        </router-link>
      </div> 
      <div>
        <router-link class="company" :to="{name: ''}" @click.native="companyfn">
            <input type="submit" value="Company">
        </router-link>
      </div>       
    </div>     
  </div>
</template>

<style scoped>    
  .box {
    width: 33%;
    height: 55%;
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
    box-shadow: 3px 3px #ceced1
  }
  .btns {
    margin-top: 6%;
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-gap: 25px;
    padding-left: 26%;
  }  
  .user input[type="submit"]{
    width: 60%;
    height: 45px;
    border: none;
    color: #fff;
    background-color: black;
    border-radius: 5px;
  }
  .worker input[type="submit"]{
    width: 60%;
    height: 45px;
    border: none;
    color: #fff;
    background-color: black;
    border-radius: 5px;
  } 
   .company input[type="submit"]{
    width: 60%;
    height: 45px;
    border: none;
    color: #fff;
    background-color: black;
    border-radius: 5px;
  }  
</style>