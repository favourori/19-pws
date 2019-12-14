<template>
  <div>
    <div class="container">
      <div class="breadcrumb animated fadeIn">home / projects / collegeSituation</div>
      <h1 class="primary-color project-title">The College Situation.</h1>
      <p
        class="primary-color blue-font about-app"
      >An interactive platform that connects students all over the world with: Schools, Jobs, Scholarships, Roommates, Fellow Students & Everything College!</p>
      <br />
      <p class="features">Features</p>
      <ol class="blue-font info">
        <li>Swipe to explore thousands of Colleges & Universities</li>
        <li>Add / View Housing in your location</li>
        <li>Access hundreds of scholarships by location</li>
        <li>Read or Share stories (Immigration, admission, etc)</li>
      </ol>
      <br />
      <p class="features">Role</p>
      <ol class="blue-font info">
        <li>
          Developed the backend (API) using Node JS -
          <a
            class="yellow-font"
            href="https://github.com/favourori/TheCollegeSituation"
          >View on Github</a>
        </li>
        <li>Designed Website (HTMl, CSS, JavaScript) & Mobile App screens (Adobe XD)</li>
      </ol>
    </div>

    <br />
    <br />
    <div>
      <img src="@/assets/projects/cswebscreen.jpg" class="project-image" />
    </div>
 
    <div>
      <img src="@/assets/projects/cswhite.jpg" class="project-image"  />
    </div>
    <br />
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/Footer";
export default {
  components: {
    Footer
  }
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
  color: #ffe403;
  opacity: 0.8;
}

.info {
  font-size: 17px;
}

.blue-font {
  color: #b6d3f5;
}

.yellow-font {
  color: #ffe403;
}

.about-app {
  max-width: 630px;
  font-size: 18px;
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