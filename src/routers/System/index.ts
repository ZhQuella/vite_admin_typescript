
export default [
  {
    path: "/",
    name: "Index",
    component: () => import("pages/Index/index.vue"),
    meta: {
      protect: true
    },
    children: [{
      path: "index",
      name: "Test",
      component: () => import("pages/test/index.vue"),
      meta: {
        protect: true
      }
    }]
  }
];
