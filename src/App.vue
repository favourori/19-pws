<template>
  <div id="app">
    <div id="nav">
      <NavBar/>
    </div>
    <router-view/>
  </div>
</template>




<script>
import NavBar from '@/components/NavBar.vue'
export default {
   components: {
    NavBar
  }
}
</script>


<style>



</style>
