<template>
  <div class="dashboard-wrapper">
    <div class="top-header">
      <p>Associates Dashboard</p>
    </div>
    <div class="mid-dashboard">
      <div class="sidenav">
        <div class="sidenav-top">
          <div class="sidenav-top-top">
            <div class="Circle">
              <p class="circle-inside">G</p>
            </div>
            <p class="profile-name">George Samuel</p>
            <div class="profile-underline"></div>
          </div>
          <div class="sidenav-top-mid">
            <div class="sidenav-top-mid-one">
              <div class="sidenav-top-mid-one-img"></div>
              <p class="job-title">Cleaner</p>
            </div>
            <div class="sidenav-top-mid-two">
              <div class="sidenav-top-mid-two-img"></div>
              <p class="Place">Kottayam</p>
            </div>
          </div>
          <div class="sidenav-top-bottom"></div>
        </div>
        <div class="sidenav-mid">
          <router-link :to="{name: 'workrequests'}" @click.native="workreqfn">
            <div class="sidenav-mid-one">
              <div class="sidenav-mid-img1"></div>
              <p>Work Requests</p>
            </div>
          </router-link>
          <div class="sidenav-mid-two">
            <div class="sidenav-mid-img2"></div>
            <p>Pending Works</p>
          </div>
          <div class="sidenav-mid-three">
            <div class="sidenav-mid-img3"></div>
            <p>My Works</p>
          </div>
          <div class="sidenav-mid-four">
            <div class="sidenav-mid-img4"></div>
            <p>My Income</p>
          </div>
        </div>
        <div class="sidenav-line"></div>
        <div class="sidenav-bottom">
          <div class="sidenav-bottom-one">
            <div class="sidenav-bottom-img1"></div>
            <p>My Profile</p>
          </div>
          <a class="sidenav-bottom-two" @click = "logout()">
            <div class="sidenav-bottom-img2"></div>
            <p>Logout</p>
          </a>          
        </div>
      </div>
      <div class="dashboard-body">
        <router-view>
          <workreq />
        </router-view>       
      </div>
    </div>
  </div>  
</template>

<script>
import workreq from '@/components/Dashboard/workreq.vue'

export default {
  components: {
    workreq
  },
  data() {

  },
  methods: {
    logout() {
      this.$cookies.remove("username");
      this.$session.destroy()
      window.location.href = "http://localhost:8080/"
    }
  },
  /*beforeCreate: function () {
    if (!this.$session.exists()) {
      window.location.href = "http://localhost:8080/"
    }
  }*/
}
</script>

<style scoped>
  .top-header {
    top: 0;
    box-sizing: border-box;
    width: 100%;
    height: 45px;
    background-color: #000;
    text-align: center;
    padding-top: 10px;;
  }
  .top-header p {
    color: #aaa;
    font-size: 17px;
  }
  .mid-dashboard {
    display: grid;
    grid-template-columns: 20% 80%;
    /*height: 676px;*/
  }
  .sidenav {
    height: 676px;
    border-left: 1px solid #00000029;    
    background-color: #fff;
    display: grid;
    grid-template-rows: 40% 32% 20px 20%;
  }
  .sidenav-top {
    padding-left: 5px;
    display: grid;
    grid-template-rows: 45% 35% 20%;    
  }
  .sidenav-top-top {
    margin-bottom: 20px;
    display: grid;
    grid-template-rows: 3fr 1fr 1px;
  }
  .Circle {
    padding-top: 10px;
    padding-left: 20px;
    margin-top: 20px;
    margin-left: 85px;
    width: 70px;
    height: 70px;
    background-color: #DBDBDB;
    border-radius: 50%;
  }
  .circle-inside {
    font-size: 35px;
  } 
  .profile-name {
    font-size: 18px;
    margin-left: 60px;
  }  
  .profile-underline {
    width: 58%;
    height: 1px;
    margin-top: -17px;
    margin-left: 50px;
    background-color: #aaa;
  }     
  .sidenav-top-mid {
    display: grid;
    grid-template-rows: 30px 30px; 
    padding-left: 60px;  
    margin-top: -5px;   
  }
 .sidenav-top-mid-one {
    display: grid;
    grid-template-columns: 15% 95%;
    padding-top: 15px;
    padding-left: 10px;
  }     
  .sidenav-top-mid-one-img {
    margin-top: 3px;
    margin-left: 8px;
    height: 16px;
    width: 16px;
    background-image: url('../../assets/jobTitle.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;    
  }   
  .job-title {
    font-size: 17px;
    color: #707070;
  } 
 .sidenav-top-mid-two {
    display: grid;
    grid-template-columns: 15% 95%;
    padding-top: 15px;
    padding-left: 10px;
  }     
  .sidenav-top-mid-two-img {
    margin-top: 3px;
    margin-left: 8px;
    height: 16px;
    width: 16px;
    background-image: url('../../assets/Place.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;    
  }   
  .Place {
    font-size: 17px;
    color: #707070;
  }     
  .sidenav-top-bottom {
    margin-top: -15px;
    margin-left: 20px;
    height: 20px;
    width: 80%;
    background-image: url('../../assets/stars.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;      
  }    
  .sidenav-mid {  
    margin-top: -20px;
    display: grid;
    grid-template-rows: 1fr 1fr 1fr 1fr;
  }
  .sidenav-mid-one {
    background-color: #000;
    display: grid;
    grid-template-columns: 15% 95%;
    padding-top: 15px;
    padding-left: 10px;
  }   
  .sidenav-mid-img1{
    margin-top: 3px;
    margin-left: 18px;
    height: 15px;
    width: 15px;
    background-image: url('../../assets/Wreq.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;    
  } 
  .sidenav-mid-one p {
    font-size: 15px;
    color: #fff;
  }     
  .sidenav-mid-two {
    display: grid;
    grid-template-columns: 15% 95%;
    padding-top: 15px;
    padding-left: 10px;
  } 
  .sidenav-mid-img2 {
    margin-top: 3px;
    margin-left: 18px;
    height: 15px;
    width: 15px;
    background-image: url('../../assets/Pwork.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;    
  }    
  .sidenav-mid-two p {
    font-size: 15px;
    color: #000;
  }      
  .sidenav-mid-three {
    display: grid;
    grid-template-columns: 15% 95%;
    padding-top: 15px;
    padding-left: 10px;    
  } 
  .sidenav-mid-img3 {
    margin-top: 3px;
    margin-left: 18px;
    height: 15px;
    width: 15px;
    background-image: url('../../assets/Mwork.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;    
  }    
  .sidenav-mid-three p {
    font-size: 15px;
    color: #000;
  }      
  .sidenav-mid-four {
    display: grid;
    grid-template-columns: 15% 95%;
    padding-top: 15px;
    padding-left: 10px;        
  } 
  .sidenav-mid-img4 {
    margin-top: 3px;
    margin-left: 18px;
    height: 15px;
    width: 15px;
    background-image: url('../../assets/Mincome.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;    
  }    
  .sidenav-mid-four p {
    font-size: 15px;
    color: #000;
  }  
  .sidenav-line {
    border-bottom: 1px solid #00000029;
  }    
  .sidenav-bottom {
    display: grid;
    grid-template-rows: 35px 35px;  
  } 
  .sidenav-bottom-one {
    display: grid;
    grid-template-columns: 15% 95%;
    padding-top: 15px;
    padding-left: 10px;
  }     
  .sidenav-bottom-img1 {
    margin-top: 3px;
    margin-left: 18px;
    height: 15px;
    width: 15px;
    background-image: url('../../assets/Mprofile.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;    
  }   
  .sidenav-bottom-one p {
    font-size: 14px;
    color: #000;
  }  
  .sidenav-bottom-two {
    display: grid;
    grid-template-columns: 15% 95%;
    padding-top: 15px;
    padding-left: 10px;
  }     
  .sidenav-bottom-img2 {
    margin-top: 3px;
    margin-left: 18px;
    height: 15px;
    width: 15px;
    background-image: url('../../assets/LogOut.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;    
  }   
  .sidenav-bottom-two p {
    font-size: 14px;
    color: #000;
  }              
  .dashboard-body {
    background-color: #F5F5F5;
  }             
</style>