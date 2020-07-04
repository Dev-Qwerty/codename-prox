<template>
  <div class="dashboard-wrapper">
    <div class="top-header">
      <p>Customer Dashboard</p>
    </div>
    <div class="mid-dashboard">
      <div class="sidenav">
        <div class="sidenav-mid">
          <router-link :to="{name: ''}" @click.native="fn">
            <div class="sidenav-mid-one active">
              <div class="sidenav-mid-img1"></div>
              <p>Work Requests</p>
            </div>
          </router-link>
          <router-link :to="{name: ''}" @click.native="fn">
            <div class="sidenav-mid-three">
              <div class="sidenav-mid-img3"></div>
              <p>My Works</p>
            </div>
          </router-link> 
          <router-link :to="{name: ''}" @click.native="fn">        
            <div class="sidenav-mid-four">
              <div class="sidenav-mid-img4"></div>
              <p>My Income</p>
            </div>
          </router-link>
          <router-link :to="{name: ''}" @click.native="fn">
            <div class="sidenav-mid-two">
              <div class="sidenav-mid-img2"></div>
              <p>Calender</p>
            </div>
          </router-link>           
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
    height: 45px;
    background-color: #fff;
    color: #000;
    text-align: center;
    padding-top: 10px;;
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
    height: 676px;
    border-left: 1px solid #00000029;    
    background-color: #F5F5F5;
  }    
  .sidenav-mid {  
    margin-top: 0px;
    display: grid;
    grid-template-rows: 1fr 1fr 1fr 1fr;
  }
  .sidenav-mid-one {
    color: #000;
    display: grid;
    grid-template-columns: 10% 90%;
    padding-top: 15px;
    padding-left: 15%;
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
    background-image: url('../../assets/Pwork.png');
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
    background-color: #fff;
  }             
</style>