<template>
  <div class="dashboard-wrapper">
    <div class="top-header">
      <p>Customer Dashboard</p>
    </div>
    <div class="mid-dashboard">
      <div class="sidenav">
        <div class="sidenav-mid">

          <div class="sidenav-mid-one">
            <router-link :to="{name: ''}" @click.native="fn">
              <div class="wr-1">
                <div class="sidenav-mid-img1"></div>
                <p>Bookings</p>
              </div>
            </router-link>
          </div>
          <div class="sidenav-mid-two">
            <router-link :to="{name: ''}" @click.native="fn">
              <div class="wr-1">
                <div class="sidenav-mid-img2"></div>
                <p>Order History</p>
              </div>
            </router-link>
          </div>
          <div class="sidenav-mid-three">
            <router-link :to="{name: ''}" @click.native="fn">
              <div class="wr-1">
                <div class="sidenav-mid-img3"></div>
                <p>Favorites</p>
              </div>
            </router-link>
          </div>      
          <div class="sidenav-mid-four">
            <router-link :to="{name: ''}" @click.native="fn">
              <div class="wr-1">
                <div class="sidenav-mid-img4"></div>
                <p>My Profile</p>
              </div>
            </router-link>
          </div>   
          <div class="sidenav-mid-five">
            <router-link :to="{name: ''}" @click.native="fn">
              <div class="wr-1">
                <div class="sidenav-mid-img5"></div>
                <p>Notifications</p>
              </div>
            </router-link>
          </div>                                 
        
        </div>
      </div>
      <div class="dashboard-body">         
        <router-view>
>
        </router-view>       
      </div>
    </div>
  </div>  
</template>

<script>

export default {
  components: {
    
  },
  data() {
    return {
      wid: this.$cookies.get("id"),
      winfo: []
    }
  },
  methods: { 
    workreqfn() {
      
    },
    myworksfn() {
      
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
      let url = 'http://localhost:3000/worker/getBasicProfile/' + JSON.parse(this.$cookies.get("id"));
      this.$http.get(url)
      .then((response) => {
        this.winfo = response.data
        alert(this.winfo)
        /*if(this.winfo.profilePicLink != "") {
          this.profilePic.backgroundImage = this.winfo.profilePicLink;
          this.noProfilePic = false;
        }*/
      })
      .catch((error) => {
        alert(error);
      })     
    }
  },
  created() {
   this.apiCall() 
  }
}        
</script>

<style scoped>
  .top-header {
    top: 0;
    box-sizing: border-box;
    width: 100%;
    height: 60px;
    background-color: #fff;
    color: #000;
    text-align: center;
    padding-top: 20px;
    border: 1px solid #aaa;
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
    /*height: 600px;*/
    height: calc(100vh - 60px);
    box-sizing: border-box;    
    border-left: 1px solid #00000029;    
    background-color: #F5F5F5;
    padding-top: 50%;
  }    
  .sidenav-mid {  
    height: 300px;
    box-sizing: border-box;
    margin-top: 0px;
    display: grid;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
    
    font-size: 17px;
  }
  .wr-1 {
    width: 60%;
    height: 35px;
    display: flex;
    margin-top: 5%;  
    padding-left: 5%;
    padding-top: 2%;
  }  
  .wr-1:hover {
    /*border: 1px solid #aaa;*/
    text-decoration: none;
    font-family: p-bold;
  }    
  .sidenav-mid-one {
    padding-left: 10%;
    font-family: p-medium;
  } 
  .sidenav-mid-img1{
    height: 20px;
    width: 20px;
    background-image: url('../../assets/bookings.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;    
  } 
  .sidenav-mid-one p {
    margin-left: 5%;
    color: #000;
  }  
  .sidenav-mid-one p:hover {
    
  }       
  .sidenav-mid-two {
    font-family: p-medium;
    /*padding-top: 15px;*/
    padding-left: 10%;
  } 
  .sidenav-mid-img2 {
    height: 20px;
    width: 20px;
    background-image: url('../../assets/i2.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;    
  }    
  .sidenav-mid-two p {
    margin-left: 5%;
    color: #000;
  }      
  .sidenav-mid-three {
    font-family: p-medium;
    /*padding-top: 15px;*/
    padding-left: 10%;    
  } 
  .sidenav-mid-img3 {
    height: 20px;
    width: 20px;
    background-image: url('../../assets/i3.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;    
  }    
  .sidenav-mid-three p {
    margin-left: 5%;
    color: #000;
  }      
  .sidenav-mid-four {
    font-family: p-medium;
    /*padding-top: 15px;*/
    padding-left: 10%;        
  } 
  .sidenav-mid-img4 {
    height: 20px;
    width: 20px;
    background-image: url('../../assets/i4.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;    
  }    
  .sidenav-mid-four p {
    margin-left: 5%;
    color: #000;
  }      
  .sidenav-mid-five {
    font-family: p-medium;
    /*padding-top: 15px;*/
    padding-left: 10%;        
  }   
  .sidenav-mid-img5 {
    height: 20px;
    width: 20px;
    background-image: url('../../assets/i4.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;    
  }   
  .sidenav-mid-five p {
    margin-left: 5%;
    color: #000;
  }    
  .dashboard-body {
    background-color: #fff;
  }             
</style>