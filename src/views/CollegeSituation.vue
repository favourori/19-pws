<template>
  <div>
    <div class="container">
      <div class="breadcrumb animated fadeIn">
        home / projects / collegeSituation
      </div>
      <h1 class="primary-color project-title">The College Situation.</h1>
      <p class="primary-color blue-font about-app">
        An interactive platform that connects students all over the world with:
        Schools, Jobs, Scholarships, Roommates, Fellow Students & Everything
        College!
      </p>
      <br />
    </div>

    <br />
    <br />
    <div>
      <img src="@/assets/projects/cswebscreen.jpg" class="project-image" />
    </div>

    <div>
      <img src="@/assets/projects/cswhite.jpg" class="project-image" />
    </div>
    <br />
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/Footer";
export default {
  components: {
    Footer,
  },
};
</script>

<style>
.primary-color {
  color: white;
}

.project-title {
  font-size: 32px;
}

.breadcrumb {
  margin-top: 60px;
  color: #66bd90;
  opacity: 0.8;
}

.info {
  font-size: 17px;
}

.blue-font {
  color: #ffffff;
}

.yellow-font {
  color: #ffe403;
}

.about-app {
  max-width: 630px;
  font-size: 16px;
}

.features {
  color: white;
  font-size: 21px;
  font-weight: 500;
}

.project-image {
  width: 100%;
}
</style>
