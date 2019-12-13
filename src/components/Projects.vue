<template>
  <div class="container" style="margin-top: 80px">
    <p class="secondary-color">
      RECENT PROJECTS 
     
    </p>
    <div class="flex-container">
      <router-link :to="{ name: 'collegeSituation'}">
        <img src="@/assets/projects/cs.png" class="project" />
      </router-link>
      <router-link :to="{ name: '4yby'}">
        <img src="@/assets/projects/4yby.png" class="project" />
      </router-link>
      <a href="https://github.com/favourori">
        <img src="@/assets/projects/github.png" class="project" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Intro"
};
</script>

<style>
.secondary-color {
  color: #FFE403!important;
}

.project {
  width: 200px;
  border-radius: 5px;
  margin-top: 28px;
  transition: filter 0.5s ease-in-out;
  -webkit-filter: grayscale(0%); /* Ch 23+, Saf 6.0+, BB 10.0+ */
  filter: grayscale(0%); /* FF 35+ */

  box-shadow: 7px 7px rgba(65, 135, 163, 0.35), 0 4px 8px rgba(17, 35, 56, 0.04),
    0 0 8px rgba(17, 35, 56, 0.04), 0 18px 27px rgba(17, 35, 56, 0.11);
}

.project:hover {
  -webkit-filter: grayscale(100%); /* Ch 23+, Saf 6.0+, BB 10.0+ */
  filter: grayscale(100%); /* FF 35+ */
  box-shadow: 8px 8px rgba(65, 135, 163, 0.35), 0 4px 8px rgba(17, 35, 56, 0.04),
    0 0 8px rgba(17, 35, 56, 0.04), 0 18px 27px rgba(17, 35, 56, 0.11);
}

.flex-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 650px;
  margin-top: 10px;
}
</style>