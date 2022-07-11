import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    redirect: { name: "ListNews" },
    children: [
      {
        path: "list_news",
        name: "ListNews",
        component: () => import("@/components/ListNews.vue"),
      },
    ],
  },
  {
    path: "/sign-in",
    name: "Login",
    component: () => import("../views/LoginPage.vue"),
  },
  {
    path: "/sign-up",
    name: "Register",
    component: () => import("../views/SignUp.vue"),
  },
  {
    path: "/news/:id",
    name: "DetailNewsPage",
    component: () => import("@/views/DetailNewsPage.vue"),
  },
  {
    path: "/bookmark",
    name: "BookmarkPage",
    beforeEnter: (to, from, next) => {
      if (!localStorage.getItem("access_token") && to.name === "BookmarkPage") {
        next({ name: "Home" });
      } else {
        next();
      }
    },
    component: () => import("@/views/BookmarkPage.vue"),
  },
  {
    path: "*",
    name: "NotFound",
    component: () => import("../views/NotFound.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

// navigasi untuk authentikasi
// router.beforeEach((to, from, next) =>{

// })

export default router;
