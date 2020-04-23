<template>
  <div class = "box">
    <form method="POST">
      <div>
        <input class="input-box" type="email" name="email" placeholder="EMAIL" v-model="email">
      </div>
      <div>
        <input class="input-box" type="number" name="phoneno" placeholder="PHONENO" v-model="phone">
      </div>      
      <div>
        <input class="input-box" type="Password" name="password" placeholder="PASSWORD" v-model ="password">
      </div>
      <div>
        <label>Keep me signed in</label>
        <input type="checkbox" name="check1" value="">
      </div>
      <div>
        <input class="sbutton" type="submit" name="" value="Sign up" @click.prevent="signUp()">
      </div>
    </form>
          
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      phone: 0,
      password: ""
    }
  },
  methods: {
    signUp() {
      if (this.password.length > 6) {
        let url = "http://localhost:3000/auth/register";
        this.$http
          .post(url, {
            email: this.email,
            phone: this.phone,
            password: this.password
          })
          .then(response => {
            localStorage.setItem("email", JSON.stringify(response.data.email));
            // localStorage.setItem('jwt',response.data.token)
            if (localStorage.getItem("email") != null) {
              this.$emit("loggedIn");
              if (this.$route.params.nextUrl != null) {
                this.$router.push(this.$route.params.nextUrl);
              } else {
                this.$router.push("/login");
              }
            }
          })
          .catch(error => {
            return alert(error);
          });
      } else {
        return alert("Password should be more than 6 characters!");
      }
    }
    }
  }
</script>

<style scoped>    
  .box {
    width: 33%;
    height: 65%;
    background-color: #fff;
    top: 63%;
    left: 50%;
    position: absolute;
    box-sizing: border-box;
    transform: translate(-50%, -50%);
    padding-top: 100px;
    padding-bottom: 5px;
    padding-left: 50px;
    padding-right: 50px;
    border-radius: 10px;
    border: none;
    box-shadow: 3px 3px #ceced1
  }
  input[type="submit"] {
    width: 100%;
    background-color: #000;
    border: none;
    color: #fff;
    height: 40px;
    opacity: 0.9;
    border-radius: 3px;
    box-shadow: 5px 5px #eeefef;
    font-size: 19px;
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
</style>