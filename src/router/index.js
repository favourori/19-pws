import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import CollegeSituation from "../views/CollegeSituation.vue";
import ForYouth from "../views/ForYouth.vue";
import Projects from "../components/Projects.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/projects",
    name: "projects",
    component: Projects,
    children: [
      {
        path: "collegeSituation",
        name: "collegeSituation",
        component: CollegeSituation,
      },

      {
        path: "4yby",
        name: "4yby",
        component: ForYouth,
      },
    ],
  },

  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
