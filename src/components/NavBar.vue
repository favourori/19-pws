<template>
  <div class="hello">
    <nav class="z-depth-0 primary-background">
      <div class="nav-wrapper container">
        <router-link :to="{ name: 'home' }">
          <span
            class="brand-logo animated fadeIn left"
            style="animation-duration: 3s;"
          >
            FAVOUR ORI<span class="secondary-color">.</span>
          </span>
        </router-link>
        <a href="#" data-target="mobile-demo" class="sidenav-trigger right"
          ><i class="material-icons">menu</i></a
        >
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li>
            <router-link :to="{ name: 'projects' }">
              Featured projects
            </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'about' }">
              About me
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
    <ul class="sidenav" id="mobile-demo">
      <li @click="hideSideBar()">
        <router-link :to="{ name: 'projects' }">
          Featured projects
        </router-link>
      </li>
      <li @click="hideSideBar()">
        <router-link :to="{ name: 'about' }">
          About me
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import M from "materialize-css";
export default {
  name: "NavBar",

  data() {
    return {
      isHome: true,
    };
  },
  mounted() {
    M.AutoInit();
  },
  methods: {
    hideSideBar() {
      document.querySelector(".sidenav-overlay").click();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.primary-background {
  background-color: #000000;
}

.secondary-color {
  color: #66bd90;
  font-weight: 700;
  font-size: 40px;
}
.sidenav {
  background-color: #000 !important;
  padding: 20px;
}
.sidenav li > a {
  color: rgba(255, 255, 255, 0.87);
}
@media only screen and (max-width: 992px) {
  nav .brand-logo.left {
    line-height: 0.9;
    font-size: 20px;
  }
}
</style>
