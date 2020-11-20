import Vue from "vue";
import VueRouter, {RouteConfig} from "vue-router";
import Main from "@/views/Main.vue";
import SignIn from "@/views/SignIn.vue";

Vue.use(VueRouter);

// Routes map urls to views
const routes: Array<RouteConfig> = [
  {
    path: "/",
    component: Main,
  },
  {
    path: "/sign_in",
    component: SignIn,
  },
];

export default new VueRouter({
  routes,
});
