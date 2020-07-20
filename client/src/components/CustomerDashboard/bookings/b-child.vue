<template>
  <div class="Wrapper">

    <div class="page-wrapper">

      <div class="track-section">
        <p class="hdn">Track Your Bookings</p>
  
        <div class="track-box">
          <!-- Placed -->
          <div v-if="!this.os.placed" class="row1-tick">
            <div class="tone">
              <div class="tcircle"></div>
            </div>
            <div class="ttwo">
              <p class="thdn">Placed</p>
            </div>
          </div>
          <div v-if="!this.os.placed" class="row2-line">
            <div class="lone">
              <div class="lline"></div>
            </div>
            <div class="ltwo">
              
            </div>
          </div>
          <div v-if="this.os.placed" class="row1-tick">
            <div class="tone">
              <div class="tcircle-black"></div>
            </div>
            <div class="ttwo">
              <p class="thdn">Placed</p>
            </div>
          </div>
          <div v-if="this.os.placed" class="row2-line">
            <div class="lone">
              <div class="lline-black"></div>
            </div>
            <div class="ltwo">
              
            </div>
          </div>

          <!-- Accepted -->
          <div v-if="!this.os.accepted" class="row1-tick">
            <div class="tone">
              <div class="tcircle"></div>
            </div>
            <div class="ttwo">
              <p class="thdn">Accepted</p>
            </div>
          </div>
          <div v-if="!this.os.accepted" class="row2-line">
            <div class="lone">
              <div class="lline"></div>
            </div>
            <div class="ltwo">
              
            </div>
          </div>
          <div v-if="this.os.accepted" class="row1-tick">
            <div class="tone">
              <div class="tcircle-black"></div>
            </div>
            <div class="ttwo">
              <p class="thdn">Accepted</p>
            </div>
          </div>
          <div v-if="this.os.accepted" class="row2-line">
            <div class="lone">
              <div class="lline-black"></div>
            </div>
            <div class="ltwo">
              
            </div>
          </div>

          <!-- Arrived -->
          <div v-if="!this.os.arrived" class="row1-tick">
            <div class="tone">
              <div class="tcircle"></div>
            </div>
            <div class="ttwo">
              <p class="thdn">Arrived</p>
            </div>
          </div>
          <div v-if="!this.os.arrived" class="row2-line">
            <div class="lone">
              <div class="lline"></div>
            </div>
            <div class="ltwo">
              
            </div>
          </div>
          <div v-if="this.os.arrived" class="row1-tick">
            <div class="tone">
              <div class="tcircle-black"></div>
            </div>
            <div class="ttwo">
              <p class="thdn">Arrived</p>
            </div>
          </div>
          <div v-if="this.os.arrived" class="row2-line">
            <div class="lone">
              <div class="lline-black"></div>
            </div>
            <div class="ltwo">
              
            </div>
          </div>      

          <!-- Started -->
          <div v-if="!this.os.started" class="row1-tick">
            <div class="tone">
              <div class="tcircle"></div>
            </div>
            <div class="ttwo">
              <p class="thdn">Started</p>
            </div>
          </div>
          <div v-if="!this.os.started" class="row2-line">
            <div class="lone">
              <div class="lline"></div>
            </div>
            <div class="ltwo">
              
            </div>
          </div>
          <div v-if="this.os.started" class="row1-tick">
            <div class="tone">
              <div class="tcircle-black"></div>
            </div>
            <div class="ttwo">
              <p class="thdn">Started</p>
            </div>
          </div>
          <div v-if="this.os.started" class="row2-line">
            <div class="lone">
              <div class="lline-black"></div>
            </div>
            <div class="ltwo">
              
            </div>
          </div>

          <!-- Completed -->
          <div v-if="!this.os.completed" class="row1-tick">
            <div class="tone">
              <div class="tcircle"></div>
            </div>
            <div class="ttwo">
              <p class="thdn">Completed</p>
            </div>
          </div>
          <div v-if="!this.os.completed" class="row2-line">
            <div class="lone">
              <div class="lline"></div>
            </div>
            <div class="ltwo">
              
            </div>
          </div>
          <div v-if="this.os.completed" class="row1-tick">
            <div class="tone">
              <div class="tcircle-black"></div>
            </div>
            <div class="ttwo">
              <p class="thdn">Completed</p>
            </div>
          </div>
          <div v-if="this.os.completed" class="row2-line">
            <div class="lone">
              <div class="lline-black"></div>
            </div>
            <div class="ltwo">
              
            </div>
          </div>

          <!-- payment -->
          <div v-if="!this.os.payment" class="row1-tick">
            <div class="tone">
              <div class="tcircle"></div>
            </div>
            <div class="ttwo">
              <p class="thdn">Payment</p>
            </div>
          </div>
          <div class="row2-line">
            <div class="lone">

            </div>
            <div class="ltwo">

            </div>
          </div>
          <div v-if="this.os.payment" class="row1-tick">
            <div class="tone">
              <div class="tcircle-black"></div>
            </div>
            <div class="ttwo">
              <p class="thdn">Payment</p>
            </div>
          </div>
          <div class="row2-line">
            <div class="lone">

            </div>
            <div class="ltwo">

            </div>
          </div>
        </div>
      </div>
      
      <div class="details-section">
        <p class="hdn">Booking Detals</p>
      </div>
    </div>

    <!--<div>
      <div class="dline"></div>
      <p class="dhdn">Details</p>
    </div>-->
  
  </div>
</template>

<script>

export default {
  components: {
  },
  data() {
    return {
      os: this.$cookies.get('orderstatus'), 
      bdata: this.$cookies.get('cd-b-child')
    }
  },
  methods: { 
    fn(obj) {
      if(obj.status == 'placed') {
        this.os.placed = true;
        this.$cookies.set('orderstatus', this.os, '1d');
      } else if(obj.status == 'accepted') {
        this.os.placed = true;
        this.os.accepted = true;
        this.$cookies.set('orderstatus', this.os, '1d');
      } else if(obj.status == 'arrived') {
        this.os.placed = true;
        this.os.accepted = true; 
        this.os.arrived = true;        
        this.$cookies.set('orderstatus', this.os, '1d');
      } else if(obj.status == 'started') {
        this.os.placed = true;
        this.os.accepted = true;
        this.os.arrived = true;
        this.os.started = true;
        this.$cookies.set('orderstatus', this.os, '1d');
      } else if(obj.status == 'completed') {
        this.os.placed = true;
        this.os.accepted = true;
        this.os.arrived = true;
        this.os.started = true;
        this.os.completed = true;
        this.$cookies.set('orderstatus', this.os, '1d');       
      } else if(obj.status == 'payment'){
        this.os.placed = true;
        this.os.accepted = true;
        this.os.arrived = true;
        this.os.started = true;
        this.os.completed = true;
        this.os.payment = true;
        this.$cookies.set('orderstatus', this.os, '1d');    
      } else {
        alert("error")
      } 
    },

    apiCall() {
      let url = this.$serverURLI +'/orderstatus/checkstatus/' + this.bdata.orderID;
      this.$http.get(url)
      .then((response) => {
        this.fn(response.data)
        //alert(JSON.stringify(response.data))
      })
      .catch((error) => {
        alert(error);
      })     
    },
  },

  created() {
    this.apiCall();
  }   
}       
</script>

<style scoped>
  .Wrapper {
    padding-left: 2%;
    padding-top: 2%;
  }
  .hdn {
    font-size: 23px;
    font-family: p-regular;
  }
  .page-wrapper {
    margin-left: 0%;
    width: 95%;
    display: grid;
    grid-template-columns: 40% 60%;
  }
  .track-section {
    /*background-color: red;*/
  }
  .details-section {
    /*background-color: blueviolet;*/
    border-left: 1px solid #aaa;
    padding-left: 2%;
  }
  .track-box {
    margin-top: 0px;
    margin-left: 20px;
    background-color: #fff;
    /*border: 1px solid #000;*/
    height: 550px;
    width: 400px;
    display: grid;
    grid-template-rows: 32px 1fr 32px 1fr 32px 1fr 32px 1fr 32px 1fr 32px 1fr ; 
    /*grid-template-rows: 8% 17% 8% 17% 8% 17% 8% 17% 8% 17% 8% 17%;*/
  }
  .row1-tick {
    display: grid;
    grid-template-columns: 12% 88%;
  }
  .tone {

  }
  .tcircle {
    width: 32px;
    height: 32px;
    margin-left: auto;
    margin-right: auto;    
    background-color: #aaa;
    border-radius: 50%;
  }  
  .tcircle-black {
    width: 32px;
    height: 32px;
    margin-left: auto;
    margin-right: auto;    
    background-image: url('../../../assets/track.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;    
    border-radius: 50%;    
  }
  .thdn {
    font-size: 20px;
    font-family: p-medium;
  }
  .ttwo {
    
  }
  .row2-line {

    display: grid;
    grid-template-columns: 12% 88%;    
  }  
  .lone {
    
  }
  .lline {
    width: 3px;
    height: 100%;
    background-color: #aaa;
    margin-left: auto;
    margin-right: auto;
  }  
  .lline-black {
    width: 3px;
    height: 100%;
    background-color: #000;
    margin-left: auto;
    margin-right: auto;
  }   
  .ltwo {
    
  }
  .dline {
    width: 90%;
    background-color: #aaa;
    height: 1px;
  }
  .dhdn {
    font-size: 23px;
    font-family: p-regular;
    margin-top: 1%;    
  }
</style>