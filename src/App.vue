<template>
  <div id="app">
    <div style="height:3px; background-color:#B6D3F5"></div>
    <div id="nav">
      <NavBar />
    </div>
    <router-view />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
export default {
  components: {
    NavBar
  }
};
</script>

<style></style>
