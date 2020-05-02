<template>
  <div>
    <div class="container">
      <div class="breadcrumb animated fadeIn">
        home / projects / WeJapa
      </div>
      <h1 class="primary-color project-title">WeJapa</h1>
      <p class="primary-color blue-font about-app">
        WeJapa helps techies gain access to tech jobs across Africa, Europe and
        North America.
      </p>
      <br />
    </div>

    <br />
    <br />
    <div>
      <img src="@/assets/projects/wejapascreen.png" class="project-image" />
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
