import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    name: "BindShorthand",
    component: () => import("./examples/BindShorthand.vue"),
  },
  // {
  //   path: "/test",
  //   name: "Test",
  //   component: () => import("./views/Test.vue"),
  // },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
