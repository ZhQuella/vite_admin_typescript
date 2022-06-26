
export default [
  {
    path: "/",
    name: "",
    component: () => import("pages/Index/index.vue"),
    meta: {
      protect: true
    },
    children: [{
      path: "index",
      name: "WorkBench",
      component: () => import("pages/test/index.vue"),
      meta: {
        protect: true
      }
    },{
      path: "Test1",
      name: "TestPage1",
      component: () => import("pages/test2/index.vue"),
      meta: {
        protect: true
      }
    },{
      path: "Test2",
      name: "TestPage2",
      component: () => import("pages/test3/index.vue"),
      meta: {
        protect: true
      }
    }]
  }
];
