<template>
  <div class="hello">
    <nav class="z-depth-0 primary-background">
      <div class="nav-wrapper container">
        <router-link :to="{ name: 'home' }">
          <span
            class="brand-logo animated fadeIn"
            style="animation-duration: 3s;"
          >
            FAVOUR ORI<span class="secondary-color">.</span>
          </span>
        </router-link>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <router-link :to="{ name: 'projects' }">
            Featured projects
          </router-link>
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
      isHome: true,
    };
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
</style>
