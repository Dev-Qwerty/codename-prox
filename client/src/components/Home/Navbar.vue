<template>
  <nav class="navbar navbar-expand-sm bg-white navbar-light sticky-top">
    <!-- Brand/logo -->
    <ul class="navbar-nav mr-auto">
      <!-- <img src="../assets/logo.png" alt="Logo" style="width:40px;"> -->
      <!--<a class="navbar-brand" href="#">UrbanCo</a>-->
      <router-link class="navbar-brand" :to="{ path: '/' }">CliqServe</router-link>
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
      <li class="nav-item" v-if="!(this.cc == 'true')">
        <a class="btn btn-light" @click="loginClicked()" tag="button">Login</a>
      </li>
      <li class="nav-item" v-if="!(this.cc == 'true')">
        <a class="nav-link" href="#"> / </a>
      </li>
      <li class="nav-item signup" v-if="!(this.cc == 'true')">
        <router-link class="btn btn-light" :to="{ path: 'signup' }" tag="button">SignUp</router-link>
      </li>
      <li class="nav-item" v-if="this.cc == 'true'">
        <div class="dropdown show">
          <div class="Profile" data-toggle="dropdown" id="dropdownMenuLink"></div>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <a class="dropdown-item" @click="dfn">Dashboard</a>
            <!--<a class="dropdown-item" @click="mpfn">My Profile</a>-->            
            <a class="dropdown-item" @click="logout">Logout</a>
          </div>
        </div>             
      </li>      
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      cc: 'false'
    }
  },
  methods: {
    loginClicked() {
      window.location.href="http://localhost:8080/login";
    },
    ccfn() {
      let category = this.$cookies.get("category")
      if(category != null) {
        if(category == "Customer") {
          this.cc = 'true'
        }  
      }
    },
    logout() {
      this.$cookies.remove("username");
      this.$cookies.remove("id");
      this.$cookies.remove("pid");
      this.$cookies.remove("category");
      this.$session.destroy()
      window.location.href = "http://localhost:8080/login"
    },
    dfn() {
      window.location.href = "http://localhost:8080/customerdashboard"
    },
    mpfn() {
      window.location.href = "http://localhost:8080/customerdashboard/myprofile"
    }
  },
  created() {
    this.ccfn()
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
  .signup {
    margin-right: 110px;
  }
  .Profile {
    margin-right: 110px;
    margin-left: 5px;
    border: 1px solid #aaa;
    border-radius: 5px;
    width: 39px;
    height: 39px;
    background-image: url('../../assets/p2.png');
    background-blend-mode: overlay;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;       
  }
  .Profile:hover {
    cursor: pointer;      
  }  
  .dropdown-item:hover {
  cursor: pointer;
  }
</style>
