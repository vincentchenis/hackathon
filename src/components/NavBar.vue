<template>
  <div id="app">
    <div class="nav">
      <router-link :to="{ name: 'home' }"><img src='../assets/new_logo.png'></router-link>
      <router-link :to="{ name: 'Leaderboard' }">Leaderboard</router-link>
      <router-link :to="{ name: 'Contact us' }">Contact Us</router-link>
      <div class="slogan"><em>Student Heroes in every community</em></div>
      <router-link :to="{ name: 'Login' }" v-if="!authenticated" show=false>Login</router-link>
      <router-link v-if="authenticated" to="{ name: 'Login' }" v-on:click.native="logout()" replace>Logout</router-link>
    </div>
    <router-view @authenticated="setAuthenticated" />
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      authenticated: false,
      mockAccount: {
          email: "examplestudent@gmail.com",
          password: "password"
      }
    }
  },
  methods: {
      setAuthenticated(status) {
          this.authenticated = status;
      },
      logout() {
          this.authenticated = false;
          this.$router.replace({ name: "home"});
      }
  }
}
</script>

<style scoped>
.nav {
  display: flex;
  background-color: #31a4e2;
  position: fixed;
  width: 100%;
  z-index: 10000;
}

a {
  padding: 2vh 2vw 2vh 2vw;
  text-decoration: none;
  color: white;
  align-self: center;
  font-weight: 700;
}

.slogan {
    padding: 2vh 2vw 2vh 2vw;
    text-decoration: none;
    color: white;
    align-self: center;
    font-weight: 700;
    margin-left: auto;
}

a:hover, a:active, a:focus {
  text-decoration: none;
  color: white;

}

img {
  width: 10em;
}

</style>
