<template>
  <div class="hello">
    <nav class="z-depth-0 primary-background">
      <div class="nav-wrapper container">
         <router-link :to="{ name: 'home'}">
        <span class="brand-logo animated fadeIn" style="animation-duration: 3s;">
          FAVOUR ORI<span class="secondary-color">.</span>
        </span>
         </router-link>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
         
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavBar",

  data() {
    return {
      isHome: true
    };
  },

 
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.primary-background {
  background-color: #222f3e;
}

.secondary-color {
  color: #FFE403;
  font-weight: 700;
  font-size: 40px;
}
</style>
