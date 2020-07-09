<template>
  <div class="dashboard-wrapper">
    <div class="top-header">
      <p>Associates Dashboard</p>
    </div>
    <div class="mid-dashboard">
      <div class="sidenav">
        <div class="sidenav-top">
          <div class="sidenav-top-top">
            <div class="Circle-2" v-if="noProfilePic">
              <popper
                trigger="clickToOpen"
                :options="{
                  placement: 'right',
                  modifiers: { offset: { offset: '0,10px' } }
              }">
              <div class="popper">
                  <button class="btn-dark" @click="redirectCA()">Change Avatar</button>
                </div>
              <button slot="reference" class="Circle-3">{{ this.winfo.profile }}</button>
              </popper>
            </div>
            <div class="Circle-1" v-else>
              <popper
                trigger="clickToOpen"
                :options="{
                  placement: 'right',
                  modifiers: { offset: { offset: '0,10px' } }
              }">
              <div class="popper">
                  <button class="btn-dark" @click="redirectCA()">Change Avatar</button>
                </div>
              <button slot="reference"  class="Circle-1 ProfilePresent" :style="{ backgroundImage: `url(${profilePic.backgroundImage})` }" >
              <p class="circle-inside"></p>
            </button>
              </popper>
            </div>
            <p class="profile-name">{{ this.winfo.name }}</p>
            <div class="profile-underline"></div>
          </div>
          <div class="sidenav-top-mid">
            <div class="sidenav-top-mid-one">
              <div class="sidenav-top-mid-one-img"></div>
              <p class="job-title">{{ this.winfo.type }}</p>
            </div>
            <div class="sidenav-top-mid-two">
              <div class="sidenav-top-mid-two-img"></div>
              <p class="Place">{{ this.winfo.location }}</p>
            </div>
          </div>
          <div class="sidenav-top-bottom">
            <p>Rating: {{ this.winfo.rating }}</p>
          </div>
        </div>
        <div class="sidenav-mid">
          <router-link :to="{name: 'workrequests'}" @click.native="workreqfn">
            <div class="sidenav-mid-one active">
              <div class="sidenav-mid-img1"></div>
              <p>Work Requests</p>
            </div>
          </router-link>
          <router-link :to="{name: 'myworks'}" @click.native="myworksfn">
            <div class="sidenav-mid-three">
              <div class="sidenav-mid-img3"></div>
              <p>My Works</p>
            </div>
          </router-link> 
          <router-link :to="{name: ''}" @click.native="myincomefn">        
            <div class="sidenav-mid-four">
              <div class="sidenav-mid-img4"></div>
              <p>My Income</p>
            </div>
          </router-link>
          <router-link :to="{name: 'construct'}" @click.native="calenderfn">
            <div class="sidenav-mid-two">
              <div class="sidenav-mid-img2"></div>
              <p>Calender</p>
            </div>
          </router-link>           
        </div>
        <div class="sidenav-line"></div>
        <div class="sidenav-bottom">
          <router-link :to="{name: 'myprofile'}" @click.native="myprofilefn">
            <div class="sidenav-bottom-one">
              <div class="sidenav-bottom-img1"></div>
              <p>My Profile</p>
            </div>
          </router-link>
          <a class="sidenav-bottom-two" @click = "logout()">
            <div class="sidenav-bottom-img2"></div>
            <p>Logout</p>
          </a>          
        </div>
      </div>
      <div class="dashboard-body">         
        <router-view>
          <workreq />
          <!--<pworks />-->
          <myworks />
          <myprofile />
        </router-view>       
      </div>
    </div>
  </div>  
</template>

<script>
import workreq from '@/components/Dashboard/workreq/workreq.vue'
//import pworks from '@/components/Dashboard/pworks.vue'
import myworks from '@/components/Dashboard/myworks/myworks.vue'
import myprofile from '@/components/Dashboard/myprofile/myprofile.vue'
import Popper from 'vue-popperjs';
import 'vue-popperjs/dist/vue-popper.css';

export default {
  components: {
    workreq,
    //pworks,
    myworks,
    myprofile,
    'popper': Popper
  },
  data() {
    return {
      wid: this.$cookies.get("id"),
      winfo: [],
      noProfilePic: true,
      profilePic: {
        backgroundImage: ""
      },
      changePic: false
    }
  },
  methods: {
    /*beforeCreate: function () {
      if (!this.$session.exists()) {
        window.location.href = "http://localhost:8080/"
      }
    }*/  
    workreqfn() {
      
    },
    redirectCA() {
      window.location.href = "http://localhost:8080/dashboard/changeAvatar";
    },
    myworksfn() {
      
    },    
    myprofilefn() {
      
    },        
    logout() {
      this.$cookies.remove("username");
      this.$cookies.remove("id");
      this.$cookies.remove("pid");
      this.$cookies.remove("category");
      this.$session.destroy()
      window.location.href = "http://localhost:8080/login"
    },
    apiCall() {
      let url = 'http://localhost:3000/worker/getBasicProfile/' + this.$cookies.get("id");
      this.$http.get(url)
      .then((response) => {
        this.winfo = response.data
        if(this.winfo.profilePicLink != "") {
          this.profilePic.backgroundImage = this.winfo.profilePicLink;
          this.noProfilePic = false;
        }
      })
      .catch((error) => {
        alert(error);
      })     
    }
  },
  created() {
   this.apiCall() 
   //this.$router.push('dashboard/workrequests')
  },
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
  .fileInput {
    visibility: hidden;
    display: block;
    height: 0;
    width: 0;
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
    margin-top: 25px;
    margin-bottom: 0px;
    display: grid;
    grid-template-rows: 3fr 1fr 1px;
  }
  .Circle {
    padding-top: 10px;
    padding-left: 20px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 5px;
    width: 70px;
    height: 70px;
    background-color: #DBDBDB;
    border-radius: 50%;
  }
  .Circle-1 {
    padding-left: 1px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 5px;
    width: 70px;
    height: 70px;
    background-color: #DBDBDB;
    border-radius: 50%;
  }
  .Circle-2 {
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 5px;
    width: 70px;
    height: 70px;
    background-color: #DBDBDB;
    border-radius: 50%;
  }
  .Circle-3 {
    margin-left: auto;
    margin-right: auto;
    width: 70px;
    height: 70px;
    background-color: #DBDBDB;
    border-radius: 50%;
  }
  .circle-inside {
    font-size: 35px;
    margin: 0 auto;    
  } 
  .profile-name {
    font-size: 18px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 0px;
  }  
  .profile-underline {
    width: 58%;
    height: 1px;
    margin-left: auto;
    margin-right: auto;
    background-color: #aaa;
  }     
  .sidenav-top-mid {
    display: grid;
    grid-template-rows: 30px 30px; 
    margin-top: 20px;   
  }
 .sidenav-top-mid-one {
    /*display: grid;
    grid-template-columns: 15% 95%;*/
    display: flex;
    padding-top: 0px;
    margin-left: auto;
    margin-right: auto;    
  }     
  .sidenav-top-mid-one-img {
    margin-top: 3px;
    height: 16px;
    width: 16px;
    background-image: url('../../assets/jobTitle.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;    
  }   
  .job-title {
    margin-left: 5px;
    font-size: 17px;
    color: #707070;
  } 
 .sidenav-top-mid-two {
    /*display: grid;
    grid-template-columns: 15% 95%;*/
    display: flex;
    margin-top: -4px;
    margin-left: auto;
    margin-right: auto;       
  }     
  .sidenav-top-mid-two-img {
    margin-top: 3px;
    height: 16px;
    width: 16px;
    background-image: url('../../assets/Place.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;    
  }   
  .Place {
    margin-left: 5px;
    font-size: 17px;
    color: #707070;
  }     
  .sidenav-top-bottom {
    margin-top: -15px;
    margin-left: auto;
    margin-right: auto;   
    font-size: 18px;
    /*height: 20px;
    width: 80%;
    background-image: url('../../assets/stars.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;*/      
  }    
  .sidenav-mid {  
    margin-top: -20px;
    display: grid;
    grid-template-rows: 1fr 1fr 1fr 1fr;
  }
  .sidenav-mid-one {
    color: #fff;
    background-color: #000;
    display: grid;
    grid-template-columns: 10% 90%;
    padding-top: 15px;
    padding-left: 15%;
  }
  .sidenav-mid-one:hover {
    cursor: pointer;
  }  
  /*.sidenav-mid-one:hover {
    cursor: pointer;
    background-color: #000;
    color: #fff;
  }*/     
  .sidenav-mid-img1{
    margin-top: 3px;
    height: 15px;
    width: 15px;
    background-image: url('../../assets/Wreq.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;    
  } 
  .sidenav-mid-one p {
    font-size: 15px;
  }     
  .sidenav-mid-two {
    display: grid;
    grid-template-columns: 15% 95%;
    padding-top: 15px;
    padding-left: 10%;
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
    padding-left: 10%;    
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
    padding-left: 10%;        
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
    padding-left: 10%;
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
    padding-left: 10%;
  }  
  .sidenav-bottom-two:hover {
    cursor: pointer;
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
  .ProfilePresent {
    background-size: contain;
  }
  .ir-box-three-img {
    width: 23px;
    height: 23px;
    background-image: url('../../assets/ir-tick.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;  
  }             
</style>