<template>
  <div class="about container">
    <br />
    <h5 style="margin-top: 60px">About me - brief</h5>
    <hr />
    <br />
    <img
      src="@/assets/projects/ori.jpg"
      style="max-width: 1000px; width: 100%"
    />
    <p>
      Software Engineer passionate about developing innovative products geared
      toward simplifying & Improving life. I am currently building @WeJapa &
      @FavCode54 🔥
    </p>
    <div class="flex-container">
      <div class="flex-col">
        <p>
          Software Engineer passionate about developing innovative products
          geared toward simplifying & Improving life. I am currently building
          @WeJapa & @FavCode54 🔥Software Engineer passionate about developing
          innovative products geared toward simplifying & Improving life. I am
          currently building @WeJapa & @FavCode54 🔥
        </p>
      </div>
      <div class="flex-col">
        <p>
          Software Engineer passionate about developing innovative products
          geared toward simplifying & Improving life. I am currently building
          @WeJapa & @FavCode54 🔥Software Engineer passionate about developing
          innovative products geared toward simplifying & Improving life. I am
          currently building @WeJapa & @FavCode54 🔥
        </p>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
import Footer from "@/components/Footer";
export default {
  name: "About",
  components: { Footer },
};
</script>
<style scoped>
.flex-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 20px;
}
.flex-col {
  width: calc(50% - 30px);
  position: relative;
  margin-bottom: 20px;
  transition: all 0.4s ease-in-out !important;
}
@media only screen and (max-width: 690px) {
  .flex-col {
    width: 100%;
  }
}
</style>
