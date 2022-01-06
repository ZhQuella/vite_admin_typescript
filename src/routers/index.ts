import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "Login",
      component: () => import("pages/Login.vue"),
    },
  ],
});

export default router;
