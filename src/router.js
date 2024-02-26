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
    component: () => import("./examples/props/Index.vue"),
  },
  {
    path: "/define-model",
    name: "DefineModel",
    component: () => import("./examples/define-models/Index.vue"),
  },
  {
    path: "/prev-once-watcher",
    name: "PrevOnceWatcher",
    component: () => import("./examples/once-watcher/PrevOnceWatcher.vue"),
  },
  {
    path: "/new-once-watcher",
    name: "NewOnceWatcher",
    component: () => import("./examples/once-watcher/NewOnceWatcher.vue"),
  },
  {
    path: "/getter-old-value",
    name: "GetterOldValue",
    component: () => import("./examples/GetterOldValue.vue"),
  },
  {
    path: "/slot-short-hand",
    name: "SlotShorthand",
    component: () => import("./examples/SlotShorthand/Index.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
