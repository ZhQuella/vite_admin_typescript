
export default [
  {
    path: "/index",
    name: "Index",
    component: () => import("pages/Index/index.vue"),
    meta: {
      protect: true
    }
  }
];
