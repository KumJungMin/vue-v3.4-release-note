import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    name: "BindShorthand",
    component: () => import("./examples/BindShorthand.vue"),
  },
  {
    path: "/props",
    name: "AllProps",
    component: () => import("./examples/props/AllProps.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
