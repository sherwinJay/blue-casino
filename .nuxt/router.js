import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _73b700dc = () => interopDefault(import('..\\pages\\casino\\index.vue' /* webpackChunkName: "pages_casino_index" */))
const _2d11ec0e = () => interopDefault(import('..\\pages\\fishing\\index.vue' /* webpackChunkName: "pages_fishing_index" */))
const _3dcaf7da = () => interopDefault(import('..\\pages\\lottery\\index.vue' /* webpackChunkName: "pages_lottery_index" */))
const _bbe77800 = () => interopDefault(import('..\\pages\\promotion\\index.vue' /* webpackChunkName: "pages_promotion_index" */))
const _4b714fae = () => interopDefault(import('..\\pages\\slots\\index.vue' /* webpackChunkName: "pages_slots_index" */))
const _15cfe9dc = () => interopDefault(import('..\\pages\\sports\\index.vue' /* webpackChunkName: "pages_sports_index" */))
const _1ad061f4 = () => interopDefault(import('..\\pages\\vip\\index.vue' /* webpackChunkName: "pages_vip_index" */))
const _2d093a71 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/casino",
    component: _73b700dc,
    name: "casino"
  }, {
    path: "/fishing",
    component: _2d11ec0e,
    name: "fishing"
  }, {
    path: "/lottery",
    component: _3dcaf7da,
    name: "lottery"
  }, {
    path: "/promotion",
    component: _bbe77800,
    name: "promotion"
  }, {
    path: "/slots",
    component: _4b714fae,
    name: "slots"
  }, {
    path: "/sports",
    component: _15cfe9dc,
    name: "sports"
  }, {
    path: "/vip",
    component: _1ad061f4,
    name: "vip"
  }, {
    path: "/",
    component: _2d093a71,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
