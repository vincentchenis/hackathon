<template>
  <div>
    <NavBar />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
  name: 'app',
  components: {
    NavBar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

body {
  margin: 0;
}

.flexbox {
  display: flex;
  flex-direction: column;
}

.Main {
  height: 93vh;
}

.centerBanner {
  color: #f60090;
  align-self: center;
  padding: 2vh 2vw 2vh 2vw;
  font-weight: 900;
  font-size: 3em;
  margin: 10vh 0 5vh 0;
}

.explanation {
  align-self: center;
}

.mission {
  padding-left: 5vw;
  padding-right: 5vw;
  padding-bottom: 8vh;
  background-color: #d8d9dc;
}
</style>

<!--
colour scheme:
pink: #f60090
blue: #31a4e2
purple: #9260e8
grey: #d8d9dc
 -->
