<template>
  <div>
    <div class="container">
      <div class="breadcrumb">home / projects / 4yby</div>
      <h1 class="primary-color project-title">4YouthByYouth - Saint Louis University</h1>
      <p class="primary-color blue-font about-app">
        Website & Mobile App for 4YBY - 
        A team of young people, health professionals,
        activists, entrepreneurs from diverse backgrounds, who are united by
        the shared passion to advance Nigerian youth participation in
        innovation and entrepreneurship for sustainable HIV prevention
        services.
      </p>
      <br />
      <p class="features">Features</p>
      <ol class="blue-font info">
        <li>Swipe to explore thousands of Colleges & Universities</li>
        <li>Add / View Housing in your location</li>
        
      </ol>
      <br />
      <p class="features">Role</p>
      <ol class="blue-font info">
        
        <li>Designed Website (Wordpress - team's choice) & Mobile App screens (Adobe XD)</li>
      </ol>
    </div>

    <br />
    <br />
    <div>
      <img src="@/assets/projects/4ybyfull.png" class="project-image" />
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
  color: #FFE403;
  opacity: 0.8;
}

.info {
  font-size: 17px;
}

.blue-font {
  color: #b6d3f5;
}

.yellow-font {
  color: #FFE403;
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