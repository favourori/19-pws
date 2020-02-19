<template>
  <div class="home">
    <Intro />

    <Speaking />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Intro from "../components/Intro";
//import Projects from "../components/Projects";
import Speaking from "../components/Speaking";
import Footer from "../components/Footer";

export default {
  components: {
    Intro,
    //Projects,
    Speaking,
    Footer
  }
};
</script>
