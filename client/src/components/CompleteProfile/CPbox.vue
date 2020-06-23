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
      <input-tag v-model="tags" placeholder="Add tags"></input-tag>
      </div>
      <div v-if="categoryIsWorker">
          <select name="jtitle" id="jtitle" v-model="workerType" class="input-box">
                <option value="worker">Individual Professional</option>
                <option value="company">Company Professional</option>
          </select> 
      </div>
      <div v-if="workerType == 'company'">
        <input type="text" name="companyID" id="companyID" v-model="companyID" class="input-box" placeholder="Company ID">
      </div>
      <div v-if="categoryIsWorker">
      <input type="text" name="specialization" id="specialization" v-model="specialization" placeholder="Specialization" class="input-box">
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
      categoryIsWorker: (this.category == 'Worker')? true: false,
      name: "",
      phoneno: localStorage.getItem("phoneNo"),
      email: localStorage.getItem("email"),
      tags: [],
      workerType: "",
      specialization: "",
      category: localStorage.getItem("category")
    }
  },
  methods: {
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
            window.location.href = "http://localhost:8080/addAddress";
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
  }
}
</script>

<style scoped>    
  .box {
    width: 35%;
    height: 104px;
    background-color: #fff;
    top: 15%;
    left: 17%;
    position: absolute;
    box-sizing: border-box;
    transform: translate(-50%, -50%);
    padding-top: 110px;
    padding-bottom: 5px;
    padding-left: 50px;
    padding-right: 50px;
    border-radius: 10px;
    border: none;
    box-shadow: 3px 3px #ceced1
  }
  .box-1 {
    width: 50%;
    height: 95%;
    background-color: #fff;
    top: 42%;
    left: 59%;
    position: absolute;
    box-sizing: border-box;
    transform: translate(-50%, -50%);
    padding-top: 110px;
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
    margin-top: 1vw;
    margin-left: 15vw;
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