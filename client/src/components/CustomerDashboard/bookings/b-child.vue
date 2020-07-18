<template>
  <div class="Wrapper">
    <p class="hdn">Track Your Bookings</p>

    <div class="t-wrapper">

      <div class="row1-tick">
        <div class="tone">
          <div class="tcircle"></div>
        </div>
        <div class="ttwo">
          <p class="thdn">Placed</p>
        </div>
      </div>
      <div class="row2-line">
        <div class="lone">
          <div class="lline"></div>
        </div>
        <div class="ltwo">
          
        </div>
      </div>

      <div class="row1-tick">
        <div class="tone">
          <div class="tcircle"></div>
        </div>
        <div class="ttwo">
          <p class="thdn">Accepted</p>
        </div>
      </div>
      <div class="row2-line">
        <div class="lone">
          <div class="lline"></div>
        </div>
        <div class="ltwo">
          
        </div>
      </div>

      <div class="row1-tick">
        <div class="tone">
          <div class="tcircle"></div>
        </div>
        <div class="ttwo">
          <p class="thdn">Arrived</p>
        </div>
      </div>
      <div class="row2-line">
        <div class="lone">
          <div class="lline"></div>
        </div>
        <div class="ltwo">
          
        </div>
      </div>

      <div class="row1-tick">
        <div class="tone">
          <div class="tcircle"></div>
        </div>
        <div class="ttwo">
          <p class="thdn">Started</p> 
        </div>
      </div>
      <div class="row2-line">
        <div class="lone">
          <div class="lline"></div>
        </div>
        <div class="ltwo">

        </div>
      </div>

      <div class="row1-tick">
        <div class="tone">
          <div class="tcircle"></div>
        </div>
        <div class="ttwo">
          <p class="thdn">Completed</p>
        </div>
      </div>
      <div class="row2-line">
        <div class="lone">
          <div class="lline"></div>
        </div>
        <div class="ltwo">

        </div>
      </div>

      <div class="row1-tick">
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
      placed: false,
      accepted: false,
      arrived: false,
      started: false,
      completed: false,
      payment: false,
      bdata: this.$cookies.get('cd-b-child')
    }
  },
  methods: { 
    fn(obj) {
      if(obj.status == 'placed') {
        this.placed = true
      } else if(obj.status == 'accepted') {
        this.placed = true
        this.accepted = true
      } else if(obj.status == 'arrived') {
        this.placed = true
        this.accepted = true  
        this.arrived = true
      } else if(obj.status == 'started') {
        this.placed = true
        this.accepted = true
        this.arrived = true
        this.started = true
      } else if(obj.status == 'completed') {
        this.placed = true
        this.accepted = true
        this.arrived = true
        this.started = true        
        this.created = true
      } else if(obj.status == 'payment'){
        this.placed = true
        this.accepted = true
        this.arrived = true
        this.started = true        
        this.created = true        
        this.payment = true
      } else {
        alert("error")
      } 
    },

    apiCall() {
      let url = this.$serverURLI +'/orderstatus/checkstatus/' + this.bdata.orderID;
      this.$http.get(url)
      .then((response) => {
        this.fn(response.data)
        /*alert(JSON.stringify(response.data))*/
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
    padding-left: 3%;
    padding-top: 3%;
  }
  .hdn {
    font-size: 23px;
    font-family: p-regular;
  }
  .t-wrapper {
    width: 50%;
    height: 400px;
    margin-left: 2%;
    margin-top: 0%;
    margin-bottom: 2%;
    display: grid;
    grid-template-rows: 8% 17% 8% 17% 8% 17% 8% 17% 8% 17% 8% 17%;
    /*background-color: burlywood;*/
  }
  .row1-tick {
    display: grid;
    grid-template-columns: 10% 90%;
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
    /*background-image: url('../../../assets/track.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;    
    border-radius: 50%;*/
  }  
  .thdn {
    font-size: 20px;
    font-family: p-medium;
  }
  .ttwo {
  
  }
  .row2-line {
    display: grid;
    grid-template-columns: 10% 90%;    
  }  
  .lone {
    /*background-color: green;*/
  }
  .lline {
    width: 3px;
    height: 100%;
    background-color: #aaa;
    margin-left: auto;
    margin-right: auto;
  }  
  .ltwo {
    /*background-color: orange;*/
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