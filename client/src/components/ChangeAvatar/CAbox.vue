<template>
  <div class = "box-1">
    <div id="preview">
    <img v-if="url" :src="url" class="Circle"/>
    <div class="Circle" v-else>
    </div>
    </div>
    <form action="" method="POST">
      <div>
        <input type="file" name="demo_file" id="uploadfile" @change="onFileChange">
      </div>
      <div>
        <input class="sbutton" type="submit" name="" value="Upload" @click.prevent="">
      </div>
    </form>
    <button @click.prevent="deleteAvatar()">Delete Avatar</button>
  </div>
</template>

<script>
import Vue from 'vue';
export default {
  data() {
    return {
      url: null,
      category: 'worker'
    }
  },
  methods: {
    onFileChange(e) {
      const file = e.target.files[0];
      this.url = URL.createObjectURL(file);
    },
    apiCall() {
      let URL = 'http://localhost:3000/'+this.category+'/getBasicProfile/'+ this.$cookies.get("id");
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
        let URL = 'http://localhost:3000/delete_file/'+ filename + '?category='+this.category+'&id='+ this.$cookies.get("id");
        this.$http.get(URL)
        .then(response => {
          if(response.data.status == "Success") {
            Vue.$toast.open({
                message: 'Deleted successfully!',
                type: 'success',
                position: 'bottom-left'
            });
            window.reload(true);
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
    width: 45%;
    height: 85%;
    background-color: #fff;
    top: 11%;
    left: 28%;
    position: absolute;
    box-sizing: border-box;
    /*transform: translate(-50%, -50%);*/
    padding-top: 15px;
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
    margin-top: 10px;
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
  .Circle {
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 5px;
    width: 150px;
    height: 150px;
    background-color: #DBDBDB;
    border-radius: 50%;
    outline-color: #000;
  }
   .circle-inside {
    font-size: 35px;
    margin: 0 auto;    
  } 
</style>