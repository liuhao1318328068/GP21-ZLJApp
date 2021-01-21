import Vue from "vue";
import Router from "vue-router";

import Home from "@/views/home/Home";
import Index from "@/views/home/index/Index"
import Classify from "@/views/home/classify/Classify";
import Sell from "@/views/home/sell/Sell"
import Group from "@/views/home/group/Group"
import Mine from "@/views/home/mine/Mine"
import Recommend from "@/components/Recommend"
import Order from "@/views/order/Order"
import Recovery from "@/views/order/Recovery"
import Address from "@/views/order/Address"
import AddressList from "@/views/order/address/AddressList"
import AddAddress from "@/views/order/address/AddAddress"
import ShoppingCar from "@/views/shoppingCar/ShoppingCar"
import Save from "@/views/order/Save"
import Youhuiquan from "@/views/order/Youhuiquan"
import Goodsdetails from '@/views/home/index/childCom/Goodsdetails'

Vue.use(Router);

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path:"/shoppingCar",
    // name:"shoppingCar",
    component: ShoppingCar
  },
  {
    // Address
    path: "/address",
    name:"address", 
    component: Address,
    redirect: "/address/addressList",
    children:[
      {
        path:"addressList",
        name:"addressList",
        component: AddressList
      },
      {
        path:"addAddress",
        name:"addAddress",
        component: AddAddress
      }
    ]
  },
  {
    // 我的收藏
    path:"/save",
    name:"save",
    component:Save
  },
  {
    // youhuiquan
    path:"/youhuiquan",
    name:"youhuiquan",
    component:Youhuiquan,
    redirect: "/youhuiquan/upgrade",
    children:[
      // upgrade
      {
        path:"upgrade",
        name:"upgrade"
      },
      // recycel
      {
        path:"recycel",
        name:"recycel"
      },
      // hire
      {
        path:"hire",
        name:"hire"
      }
    ]
  },
  {
    // 回收订单
    path: "/recovery",
    name:"recovery", 
    component: Recovery,
    redirect: "/recovery/underway",
    children:[
      // underway
      {
        path:"underway",
        name:"underway"
      },
      // finished
      {
        path:"finished",
        name:"finished"
      }
    ]
  },
  {
    // 订单
    path: "/order",
    name: "order",
    component: Order,
    children: [
      {
        // 1全部
        path: "all",
        name:"all",
      },
      {
        // 2待付款
        path: "obligation",
        name:"obligation",
      },
      {
        // 3待发货
        path: "pending",
        name:"pending",
      },
      {
        // 4待收货
        path: "receiving",
        name:"receiving",
      },
      {
        // 5可晒单
        path:"scheduling",
        name:"scheduling"
      },
      {
        // 6售后
        path: "aftersale",
        name:"aftersale", 
      },
    ]
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
    path:'/goodsdetails',
    name:'goodsdetails',
    component:Goodsdetails
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
