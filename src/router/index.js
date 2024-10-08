import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // 登录页面
    {
      path: "/",
      name: "login",
      component: () => import("../views/Login.vue"),
    },
    // 注册页面
    {
      path: "/register",
      name: "register",
      component: () => import("../views/Register.vue"),
    },
    // 首页
    {
      path: "/home",
      name: "home",
      component: () => import("../views/Home.vue"),
    },
  ],
});

export default router;
