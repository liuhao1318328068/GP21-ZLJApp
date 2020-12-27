import Vue from "vue";
import Router from "vue-router";

import Home from "@/views/Home";
// import Index from "@/views/home/index/Index"
// import Classify from "@/views/home/classify/Classify";
// import Sell from "@/views/home/sell/Sell"
// import Group from "@/views/home/group/Group"
// import Mine from "@/views/home/mine/Mine"

// 路由懒加载ES6写法，优化
const Index = () => import("@/views/home/index/Index") 
const Classify = () => import("@/views/home/classify/Classify") 
const Sell = () => import("@/views/home/sell/Sell") 
const Group = () => import("@/views/home/group/Group") 
const Mine = () => import("@/views/home/mine/Mine") 

Vue.use(Router);

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "home",
    component: Home,
    redirect: "/home/index",
    children: [
      {
        path: "index",
        name:"index",
        component: Index,
      },
      {
        path: "classify",
        name:"classify",
        component: Classify,
      },
      {
        path: "sell",
        name:"sell",
        component: Sell,
      },
      {
        path: "group",
        name:"group",
        component: Group,
      },
      {
        path: "mine",
        name:"mine",
        component: Mine,
      },
    ],
  },
];

const router = new Router({
  mode: "history",
  routes,
});

export default router;
