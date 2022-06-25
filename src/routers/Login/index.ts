
export default [
  {
    path: "/",
    name: "Login",
    component: () => import("@/pages/Login/index.vue"),
    meta: {
      protect: false
    }
  }
]
