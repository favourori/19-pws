<template>
  <div class="container" style="margin-top: 80px">
    <p class="secondary-color">
      RECENT PROJECTS
    </p>
    <div class="flex-container">
      <router-link :to="{ name: 'collegeSituation' }" class="project-link">
        <div class="inner">
          <div class="project-bg bg1"></div>
          <div class="project-content">
            WeJapa
            <p>
              WeJapa helps techies gain access to tech jobs across Africa,
              Europe and North America.
            </p>
          </div>
        </div>
        <!-- <img src="@/assets/projects/cs.png" class="project" /> -->
      </router-link>
      <router-link :to="{ name: '4yby' }" class="project-link">
        <div class="inner">
          <div class="project-bg bg2"></div>
          <div class="project-content">
            WeJapa
            <p>
              WeJapa helps techies gain access to tech jobs across Africa,
              Europe and North America.
            </p>
          </div>
        </div>
        <!-- <img src="@/assets/projects/4yby.png" class="project" /> -->
      </router-link>
      <a href="https://github.com/favourori" class="project-link">
        <div class="inner">
          <div class="project-bg bg3"></div>
          <div class="project-content">
            WeJapa
            <p>
              WeJapa helps techies gain access to tech jobs across Africa,
              Europe and North America.
            </p>
          </div>
        </div>
        <!-- <img src="@/assets/projects/github.png" class="project" /> -->
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Intro",
};
</script>

<style>
.secondary-color {
  color: #fcbf77 !important;
}

.project {
  /* width: 200px; */
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
  /* max-width: 650px; */
  margin-top: 10px;
}
.project-link {
  width: calc(33.3% - 20px);
  min-height: 30vh;
  position: relative;
  margin-bottom: 20px;
  transition: all 0.4s ease-in-out !important;
}
.inner {
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}
.project-bg {
  position: absolute;
  top: 0;
  left: 0;
  background-size: cover;
  background-position: center;
  z-index: 0;
  width: 100%;
  height: 100%;
  border-radius: 10px;
}

.bg1 {
  background-image: url("../assets/projects/cs.png");
}
.bg2 {
  background-image: url("../assets/projects/4yby.png");
}
.bg3 {
  background-image: url("../assets/projects/github.png");
}
.project-bg:after {
  content: "";
  background: #000;
  opacity: 0.6;
  border-radius: 10px;
  position: absolute;
  top: 0;
  left: 0;
  background-size: cover;
  background-position: center;
  z-index: 0;
  width: 100%;
  height: 100%;
}
a:hover.project-link .project-bg {
  transform: scale(1.05);
  transition: opacity 0.45s cubic-bezier(0.15, 0.75, 0.5, 1) 0s,
    transform 0.45s cubic-bezier(0.15, 0.75, 0.5, 1) 0s;
  backface-visibility: hidden;
}
.project-content {
  z-index: 2;
  background-image: linear-gradient(
    rgba(0, 0, 0, 0) 0px,
    rgba(0, 0, 0, 0.45) 100%,
    rgba(0, 0, 0, 0.65) 100%
  );
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 30px 15px 20px;
  color: #ffffff;
  width: calc(100%) !important;
  white-space: nowrap;
  overflow: hidden !important;
  text-overflow: ellipsis !important;
  text-shadow: 0px 3px 20px rgba(0, 0, 0, 0.8);
  border-bottom-left-radius: 10px !important;
  border-bottom-right-radius: 10px !important;
}
.project-content p {
  font-size: 12px;
  white-space: nowrap;
  overflow: hidden !important;
  text-overflow: ellipsis !important;
}
@media only screen and (max-width: 999px) and (min-width: 690px) {
  .project-link {
    width: calc(50% - 20px);
  }
}
@media only screen and (max-width: 690px) {
  .project-link {
    width: 100%;
    padding-bottom: 75%;
  }
}
</style>
