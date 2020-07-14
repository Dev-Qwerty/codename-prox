<template>
  <div class = "box-1">
    <div class="box-top-section">
      <p>Change Avatar</p>
    </div>
    <div id="preview">
    <img v-if="url" :src="url" class="Circle"/>
    <div class="Circle" v-else>
    </div>
    </div>
    <form action="" method="POST" enctype="multipart/form-data" @submit.prevent="uploadAvatar()">
      <div>
        <label for="uploadfile" class="sbutton1 atext" id="one">
          <p class="one-inside">Select New Avatar</p>
        </label>
        <input type="file" name="demo_file" id="uploadfile" @change="onFileChange" ref="file" class="sbutton1"> 
      </div>
      <div>
        <input class="sbutton" type="submit" name="" value="Upload" id="two">
      </div>
    </form>
    <button @click.prevent="deleteAvatar()" class="sbutton1" id="three">Delete Avatar</button>
  </div>
</template>

<script>
import Vue from 'vue';
import axios from 'axios';
export default {
  data() {
    return {
      url: null,
      category: 'worker',
      fileLink: ""
    }
  },
  methods: {
    onFileChange(e) {
      const file = e.target.files[0];
      this.fileLink = file;
      this.url = URL.createObjectURL(file);
    },
    apiCall() {
      let URL = this.$serverURLI + '/' +this.category+'/getBasicProfile/'+ this.$cookies.get("id");
      this.$http.get(URL)
      .then(response => {
        if(response.data.profilePicLink !="") {
          this.url = response.data.profilePicLink;
        }
        else {
          this.url = null;
        }
      })
    },
    deleteAvatar() {
      if(this.url == null) {
        Vue.$toast.open({
          message: 'No avatar present!',
          type: 'error',
          position: 'bottom-left'
        });
      }
      else {
        const filename = this.url.slice(31);
        let URL = this.$serverURLI + '/delete_file/'+ filename + '?category='+this.category+'&id='+ this.$cookies.get("id");
        this.$http.get(URL)
        .then(response => {
          if(response.data.status == "Success") {
            Vue.$toast.open({
                message: 'Deleted successfully!',
                type: 'success',
                position: 'bottom-left'
            });
            this.url = null;
            window.location.href = location.protocol + "//"+ location.host + "/dashboard";
          }
        })
      }
    },
    async uploadAvatar() {
      if(this.fileLink == "") {
        Vue.$toast.open({
                message: 'Please select a file!',
                type: 'warning',
                position: 'bottom-left'
            });
      }
      else {
      const formData = new FormData();
      formData.append('demo_file', this.fileLink);
      let URL = this.$serverURLI + '/post_file?category='+this.category+'&id='+this.$cookies.get("id");
      await axios.post(URL, formData)
      .then(response => {
        if(response.data.success == true) {
          Vue.$toast.open({
                message: 'Uploaded successfully!',
                type: 'success',
                position: 'bottom-left'
            });
            window.location.href = location.protocol + "//"+ location.host + "/dashboard/workrequests";
        }
        else {
           Vue.$toast.open({
                message: 'Upload error! Please check the format! JPEG/JPG/PNG only allowed!',
                type: 'error',
                position: 'bottom-left'
            });
        }
      })
    }    
  }
  },
  beforeMount() {
    this.apiCall();
  },
}
</script>

<style scoped>  
  #preview{
    display: flex;
  }    
  .box-1 {
    box-shadow: 0 0 8px #DBDBDB;
    width: 60%;
    height: 500px;
    background-color: #fff;
    margin-left: auto;
    margin-right: auto;
    margin-top: 80px;
  }
  .box-top-section {
    font-size: 15px;
    padding-left: 15px;
    padding-top: 10px;
    height: 40px;
    width: 100%;
    color: #fff;
    background-color: #000;
  }
  .box-1 label {
    font-size: 14px;
    padding-top: 15px;
    padding-right: 12px;
    padding-bottom: 15px;
  }
  input[type="submit"] {
    border-radius: 10px;
    width: 30%;
    background-color: #000;
    border: none;
    color: #fff;
    height: 40px;
    opacity: 0.9;
    border-radius: 3px;
    box-shadow: 5px 5px #eeefef;
    margin-top: 10px;
    margin-left: 17vw;
  }
  .sbutton1{
    border-radius: 10px;
    width: 30%;
    background-color: #000;
    border: none;
    color: #fff;
    height: 40px;
    opacity: 0.9;
    border-radius: 3px;
    box-shadow: 5px 5px #eeefef;
    margin-top: 10px;
    margin-left: 17vw;
  }
  .input-box {
    font-size: 14px;
    width: 100%;
    padding-left: 15px;
    margin-top: 30px;
    height: 55px;
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
  .Circle {
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 5px;
    margin-top: 20px;
    width: 140px;
    height: 140px;
    background-color: #DBDBDB;
    border-radius: 50%;
    outline-color: #000;
  }
   .circle-inside {
    font-size: 35px;
    margin: 0 auto;    
  }
  input[type="file"] {
    display: none;
  }
  .custom-file-upload {
    border: 1px solid #ccc;
    display: inline-block;
    padding: 6px 12px;
    cursor: pointer;
  } 
  .atext:hover{
    cursor: pointer;
  }
  #one {
    margin-top: 45px;
    text-align: center;
    font-size: 17px;
  }
  #two {
    margin-top: 10px;
    text-align: center;
    font-size: 17px;
  }
  #three {
    font-size: 17px;
    margin-top: 20px;
    text-align: center;
  }
  .one-inside {
    position: absolute;
    top: 25vw;
    margin-left: 40px;
  }
</style>