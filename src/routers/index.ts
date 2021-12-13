import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/home",
      name: "Home",
      alias: "/",
      component: () => import("../pages/Home.vue"),
    },
  ],
});

export default router;
