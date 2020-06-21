<template>
  <nav class="navbar navbar-expand-sm bg-white navbar-light sticky-top">
    <!-- Brand/logo -->
    <ul class="navbar-nav mr-auto">
      <!-- <img src="../assets/logo.png" alt="Logo" style="width:40px;"> -->
      <!--<a class="navbar-brand" href="#">UrbanCo</a>-->
      <router-link class="navbar-brand" :to="{ path: '/' }">UrbanCo</router-link>
    </ul>

    <!-- Links -->
    <ul class="navbar-nav ml-auto">
      <li class="nav-item">
        <router-link class="nav-link" :to="{ path: '/' }">Home</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" :to="{ path: '/about' }">About Us</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" :to="{ path: '/services' }">Services</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" :to="{ path: '/gethired' }">Get Hired</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" :to="{ path: '/blog' }">Blog</router-link>
      </li>
      <li class="nav-item">
        <a class="btn btn-light" @click="loginClicked()" tag="button">Login</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"> / </a>
      </li>
      <li class="nav-item">
        <router-link class="btn btn-light" :to="{ path: 'signup' }" tag="button">SignUp</router-link>
      </li>

    </ul>
  </nav>
</template>

<script>
export default {
  methods: {
    loginClicked() {
      window.location.href="http://localhost:8080/login";
    }
  }
}
</script>

<style>
  .nav-link {
    color: #aaa;
    font-size: 18px;
  }
  .btn {
    color: #000;
    font-size: 18px;
  }
  .navbar {
    padding-top: 15px;
    padding-bottom: 15px;
  }
  .navbar-brand {
    font-size: 22px;
  }
</style>
