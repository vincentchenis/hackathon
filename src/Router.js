import Vue from "vue";
import Router from "vue-router";
import Home from "./Pages/Home.vue";
import ContactUs from "./Pages/ContactUs.vue";
import Leaderboard from "./Pages/Leaderboard.vue";
import Login from "./Pages/Login.vue";
import Dashboard from "./Pages/Dashboard.vue";
import AboutUs from "./Pages/AboutUs.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/Leaderboard",
      name: "Leaderboard",
      component: Leaderboard
    },
    {
      path: "/ContactUs",
      name: "Contact us",
      component: ContactUs
    },
    {
      path: "/Login",
      name: "Login",
      component: Login
    },
    {
      path: "/Dashboard",
      name: "Dashboard",
      component: Dashboard
    },
    {
      path: "/AboutUs",
      name: "About us",
      component: AboutUs
    }
  ]
});
