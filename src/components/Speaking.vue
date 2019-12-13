<template>
  <div class="container" style="margin-top: 80px">
    <p class="secondary-color">TALKS & ENGAGEMENTS</p>

    <div v-for="(speaking, index) in speaking" :key="index">
      <p class="light-color">{{speaking.title}}</p>
      <p class="blue-font-color" style="max-width: 700px">{{speaking.description}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Speaking",
  data() {
    return {
      speaking: [
        {
          title: "1MillionCups Tulsa, OK - March 2019",
          description:
            "Delivered a presentation at 1MillionCups, Tulsa, Oklahoma (2018 & 2019) on our reach with Favcode54 & how we are improving / empowering lives in Africa using technology"
        },

        {
          title: "YCBS Conference Atlanta, GA - May 2018",
          description:
            "Spoke at the Young CEOs Business Forum in Atlanta, GA (2018) discussing Big Data & how it is shaping the world."
        },

        {
          title: "United Nations Youth Assembly - August 2018",
          description:
            "In August 2018, I was Invited to speak as an outstanding Youth Delegate at the United Nations’ Youth Assembly on the impact of Favcode54 in Africa."
        },

        {
          title: "NCHC  Atlanta, GA - November 2017",
          description:
            "Presented a web hacking research paper at the NCHC ’17 conference in Atlanta, GA – discussed common Web & Software vulnerabilities & how to stay secured on the internet"
        },
        {
          title: "Southern Arkansas University Magnolia, AR - August 2017",
          description:
            "Gave 100+ High school students a sneak peak into programming @SAU – we went from prototyping to developing simple web pages."
        }
      ]
    };
  }
};
</script>

<style>
.secondary-color {
  color: #ff9800;
}

.light-color {
  color: white;
  font-size: 23px;
}

.blue-font-color {
  color: #b6d3f5;
}
</style> 