<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  methods: {
    setBaseURL() {
      let url = "http://localhost:3000/checkServer";
      this.$http.get(url)
      .then(response => {
        if(response.data.status == "Success") {
          this.$serverURLI = "http://localhost:3000";
        }
      })
      .catch(error => {
       if(error.request) {
         url = "https://ec2-13-232-124-20.ap-south-1.compute.amazonaws.com:3000/checkServer";
         this.$http.get(url)
         .then(responses => {
           if(responses.data.status == "Success") {
             this.$serverURLI = "https://ec2-13-232-124-20.ap-south-1.compute.amazonaws.com:3000";
           }
         })
         .catch(error => {
           if(error.request) {
             alert("EC2 down!")          
             }
         })
       }
      }) 
    }
  },
  beforeMount() {
    this.setBaseURL();
  },
}
</script>

<style>
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    padding-left: 0px;
    padding-right: 0px;
  }
  @font-face {
    font-family: "p-medium";
    src: url("./assets/Font/poppins/Poppins-Medium.ttf") format("truetype");
  }
  @font-face {
    font-family: "p-regular";
    src: url("./assets/Font/poppins/Poppins-Regular.ttf") format("truetype");
  }  
  @font-face {
    font-family: "p-bold";
    src: url("./assets/Font/poppins/Poppins-Bold.ttf") format("truetype");
  }
  @font-face {
    font-family: "p-thin";
    src: url("./assets/Font/poppins/Poppins-Thin.ttf") format("truetype");
  }  
  @font-face {
    font-family: "lato-bold";
    src: url("./assets/Font/lato/Lato-Bold.ttf") format("truetype");
  }
  @font-face {
    font-family: "lato-black";
    src: url("./assets/Font/lato/Lato-Black.ttf") format("truetype");
  }  
  @font-face {
    font-family: "lato-light";
    src: url("./assets/Font/lato/Lato-Light.ttf") format("truetype");
  } 
  @font-face {
    font-family: "lato-thin";
    src: url("./assets/Font/lato/Lato-Thin.ttf") format("truetype");
  }         
</style>
