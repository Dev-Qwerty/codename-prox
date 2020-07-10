<template>
  <div class = "box-1">
    <form action="" method="POST">
      <div>
        <input type="text" name="name" id="name" placeholder="Name" v-model="name" class="input-box">
      </div>
      <div>
        <input type="text" name="phoneno" id="phoneno" v-model="phoneno" class="input-box" disabled>
      </div>
      <div>
        <input type="email" name="email" id="email" v-model="email" class="input-box" disabled>
      </div>
      <div v-if="categoryIsWorker">
          <select name="jtitle" id="jtitle" v-model="workerType" class="input-box">
                <option value="" disabled selected>Select Worker Type</option>
                <option value="worker">Individual Professional</option>
                <option value="company">Company Professional</option>
          </select> 
      </div>
      <div v-if="workerType == 'company'">
        <input type="text" name="companyID" id="companyID" v-model="companyID" class="input-box" placeholder="Company ID">
      </div>
      <div v-if="categoryIsWorker">
          <select name="service" id="service" v-model="service" class="input-box" @change="fetchTags()">
                <option value="" disabled selected>Select your main Service</option> 
                <option value="Cleaning">Cleaning</option>
                <option value="Plumbing">Plumbing</option>
                <option value="Electrical">Electrical</option>
                <option value="Home Appliances">Home Appliances</option>
                <option value="Fabrication">Fabrication</option>
                <option value="Carpentry">Carpentry</option>
                <option value="Photography">Photography</option>
                <option value="Painting">Painting</option>
                <option value="Pest Control">Pest Control</option>
          </select> 
      </div>
      <div v-if="categoryIsWorker" class="input-box">
      <input-tag v-model="tags" placeholder="Select or deselect tags accordingly!"></input-tag>
      </div>
      <div>
        <input class="sbutton" type="submit" name="" value="Continue" @click.prevent="completeProfile()">
      </div>
    </form>
  </div>
</template>

<script>
import Vue from 'vue';
export default {
  data() {
    return {
      categoryIsWorker: false,
      name: "",
      phoneno: localStorage.getItem("phoneNo"),
      email: localStorage.getItem("email"),
      tags: [],
      workerType: "",
      specialization: "",
      category: localStorage.getItem("category"),
      service: "",
      companyID: ""
    }
  },
  methods: {
    checkCategory() {
      if(this.category == 'Worker') {
        this.categoryIsWorker = true       
      }
    },
    fetchTags() {
      if(this.service != "") {
        let url = "http://localhost:3000/worker/fetchtags?service="+this.service+"&token="+this.$cookies.get("pid");
        this.$http.get(url)
        .then(response => {
          this.tags = response.data.tags;
          Vue.$toast.open({
                  message: 'Please select tags accordingly! Press x to de-select tags.',
                  type: 'info',
                  position: 'bottom-left'
              });
        })
        .catch(err => {
          Vue.$toast.open({
                  message: err,
                  type: 'error',
                  position: 'bottom-left'
              });
        })
      }
    },
    completeProfile() {
      let url = "http://localhost:3000/"+this.category+"/completeProfile/"+this.$cookies.get('id');
      if(this.category == 'Customer') {
        this.$http.post(url, {
          name: this.name,
          token: this.$cookies.get("pid")
        })
        .then(response => {
          if(response.data.status == "Success") {
            localStorage.removeItem("phoneNo");
            localStorage.removeItem("email");
            window.location.href = location.protocol + "//"+ location.host + "/addAddress";
          }
          else {
            Vue.$toast.open({
                  message: 'Error!',
                  type: 'error',
                  position: 'bottom-left'
              });
          }
        })
      }
      else if(this.category == 'Worker') {
        this.$http.post(url, {
          name: this.name,
          token: this.$cookies.get("pid"),
          workerType: this.workerType,
          specialization: this.tags,
          service: this.service,
          companyID: this.companyID
        })
        .then(response => {
          if(response.data.status == "Success") {
            localStorage.removeItem("phoneNo");
            localStorage.removeItem("email");
            window.location.href = location.protocol + "//"+ location.host + "/addAddress";
          }
          else {
            Vue.$toast.open({
                  message: 'Error!',
                  type: 'error',
                  position: 'bottom-left'
              });
          }
        })
      }
      
    }
  },
  mounted() {
    this.checkCategory();
  },
}
</script>

<style scoped>    
  .box-1 {
    width: 45%;
    height: 85%;
    background-color: #fff;
    top: 11%;
    left: 28%;
    position: absolute;
    box-sizing: border-box;
    /*transform: translate(-50%, -50%);*/
    padding-top: 28px;
    padding-bottom: 5px;
    padding-left: 50px;
    padding-right: 50px;
    border-radius: 10px;
    border: none;
    box-shadow: 3px 3px #ceced1
  }

  .box-1 label {
    font-size: 14px;
    padding-top: 15px;
    padding-right: 12px;
    padding-bottom: 15px;
  }
  input[type="submit"] {
    width: 35%;
    background-color: #000;
    border: none;
    color: #fff;
    height: 40px;
    opacity: 0.9;
    border-radius: 3px;
    box-shadow: 5px 5px #eeefef;
    font-size: 19px;
    margin-top: 2vw;
    margin-left: 13vw;
  }
  .input-box {
    font-size: 14px;
    width: 100%;
    padding-left: 15px;
    margin-top: 30px;
    height: 50px;
    border: 1px solid #dedee0;
    box-shadow: 4px 4px #eeefef;
  }
  .box label {
    font-size: 14px;
    padding-top: 15px;
    padding-right: 12px;
    padding-bottom: 15px;
  }
  .errormsg {
    margin-top: 0.5vw;
    color: red;
    background-color: #FFE0E0;
    font-weight: bold;
    width: 16vw;
    border-radius: 10px;
  }
</style>