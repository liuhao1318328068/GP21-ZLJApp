import Vue from "vue";
import Router from "vue-router";

import Home from "@/views/Home";
import Index from "@/views/home/index/Index"

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
        component: () => import("@/views/home/classify/Classify"),
      },
      {
        path: "sell",
        name:"sell",
        component: () => import("@/views/home/sell/Sell"),
      },
      {
        path: "group",
        name:"group",
        component: () => import("@/views/home/group/Group"),
      },
      {
        path: "mine",
        name:"mine",
        component: () => import("@/views/home/mine/Mine"),
      }
    ]
  },
  {
    path: "/sellEntry",
    name:"sellEntry",
    component: () => import("@sell/SellEntry"),
    children: [
      {
        path: "searchProduct",
        name:"searchProduct",
        component: () => import("@sell/SearchProduct"),
      },
      {
        path: "redPacket",
        name:"redPacket",
        component: () => import("@sell/RedPacket"),
      },
      {
        path: "sellClassify",
        name:"sellClassify",
        component: () => import("@sell/SellClassify"),
      },
      {
        path: "recoverProcess",
        name:"recoverProcess",
        component: () => import("@sell/RecoverProcess"),
      },
      {
        path: "moreHistory",
        name:"moreHistory",
        component: () => import("@sell/MoreHistory"),
      },
      {
        path: "qualityReport",
        name:"qualityReport",
        component: () => import("@sell/QualityReport"),
      },
      {
        path: "moreQuestions",
        name:"moreQuestions",
        component: () => import("@sell/MoreQuestions"),
      },
      {
        path: "evaluate",
        name:"evaluate",
        component: () => import("@sell/Evaluate/index"),
      },
    ]
  },
  
];

const router = new Router({
  mode: "history",
  routes,
});

export default router;
