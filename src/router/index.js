import { createWebHistory, createRouter } from "vue-router";
import Vuex from "@/views/VuexExample.vue";
import Composition from "@/views/CompositionExample.vue";

const routes = [
  {
    path: "/",
    name: "vuex",
    component: Vuex,
  },
  {
    path: "/composition",
    name: "composition",
    component: Composition,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;