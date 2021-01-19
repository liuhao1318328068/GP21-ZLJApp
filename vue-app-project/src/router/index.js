import Vue from "vue";
import Router from "vue-router";

import Home from "@/views/Home";
import Index from "@/views/home/index/Index"
import Classify from "@/views/home/classify/Classify";
import Sell from "@/views/home/sell/Sell"
import Group from "@/views/home/group/Group"
import Mine from "@/views/home/mine/Mine"
import Goodsdetails from '@/views/home/index/childCom/Goodsdetails'

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
  },
  {
    path:'/goodsdetails',
    name:'goodsdetails',
    component:Goodsdetails
  }
];

const router = new Router({
  mode: "history",
  routes,
});

export default router;
