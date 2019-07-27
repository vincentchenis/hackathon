<template>
  <div class="Main flexbox">
    <div class="centerBanner">Login</div>
    <div class="login">
      <table>
         <tr>
          <td style="text-align: right;">Email:</td>
          <td><input type="text" name="email" v-model="input.email" /></td>
         </tr>
         <tr>
          <td style="text-align: right;">Password:</td>
          <td><input type="password" name="password" v-model="input.password" /></td>
         </tr>
         <tr>
          <td></td><td class="td-button"><button type="button" v-on:click="login()">Proceed</button></td>
         </tr>
      </table>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'Login',
        data() {
            return {
                input: {
                    email: "",
                    password: ""
                }
            }
        },
        methods: {
            login() {
                if(this.input.email != "" && this.input.password != "") {
                    if(this.input.email == this.$parent.mockAccount.email && this.input.password == this.$parent.mockAccount.password) {
                        this.$emit("authenticated", true);
                        this.$router.replace({ name: 'Dashboard' });
                    } else {
                        console.log("The email and / or password is incorrect");
                    }
                } else {
                    console.log("An email and password must be present");
                }
            }
        }
    }
</script>

<style scoped>
  .login {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }
  .td-button {
    float: right;
  }
</style>
