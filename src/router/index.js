import { createRouter, createWebHistory } from "vue-router";
import ViewsIndex from "../views/ViewsIndex.vue";
import ViewsPreview from "../views/ViewsPreview.vue";

const routes = [
  {
    path: "/",
    name: "Index",
    component: ViewsIndex,
  },
  {
    path: "/preview",
    name: "Preview",
    component: ViewsPreview,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
