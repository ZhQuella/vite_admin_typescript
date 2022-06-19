import { createRouter, createWebHashHistory } from "vue-router";

import LoginRouters from "./Login";
import SystemRouters from "./System";
import OtherRouters from "./Other";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    ...LoginRouters,
    ...SystemRouters,
    ...OtherRouters
  ],
});

router.beforeEach((to, from, next) => {
  const { meta } = to;
  const { protect } = meta;
  const token = sessionStorage.getItem("token");
  if(!protect){
    console.log(to);
    if(to.name === "Login" && token){
      next({ name: "Index" });
    }
    next();
  }
  else{
    if(!token){
      next({ name: "Login" });
    }
    next();
  }
});

export default router;
