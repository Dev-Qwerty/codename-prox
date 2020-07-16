<template>
  <div>
      <center>
          <img src="../../assets/404.svg" class="notfoundpage">
          <h2 class="notfoundmsg">Oh no, our developer fall asleep while creating this page</h2>
          <router-link :to="{path: '/services'}">
                    <button class="backbutton" >Back to services</button>
                </router-link>
      </center>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.notfoundpage {
  width: 500px;
  margin-top: 70px;
  margin-bottom: 30px;
}
.notfoundmsg {
  color: rgb(78, 78, 78);
}
.backbutton {
    margin-top: 20px;
    width: 15%;
    height: 45px;
    border: none;
    color: #fff;
    background-color: rgb(15, 14, 14);
    border-radius: 5px;
}
</style>