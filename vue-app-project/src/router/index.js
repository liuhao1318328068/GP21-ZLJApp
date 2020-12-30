import Vue from "vue";
import Router from "vue-router";

import Home from "@/views/Home";
import Index from "@/views/home/index/Index"
import Classify from "@/views/home/classify/Classify";
import Sell from "@/views/home/sell/Sell"
import Group from "@/views/home/group/Group"
import Mine from "@/views/home/mine/Mine"
import Recommend from "@/views/home/classify/goodsList/Recommend"

Vue.use(Router);
import VueRouter from "vue-router";

Vue.use(VueRouter);

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
        redirect: "/home/classify/1",
        children: [
          {
            path: ":id",
            name:"recommend",
            component: Recommend,
          }
        ]
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
      }
    ]
  }
];

const router = new Router({
  mode: "history",
  routes,
});

export default router;
