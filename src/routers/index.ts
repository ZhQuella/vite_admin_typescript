import { createRouter, createWebHashHistory } from "vue-router";

import LoginRouters from "./Login";
import IndexRouters from "./Index";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    ...LoginRouters,
    ...IndexRouters
  ],
});

export default router;
