import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _a9a0f7b6 = () => interopDefault(import('..\\pages\\casino\\index.vue' /* webpackChunkName: "pages_casino_index" */))
const _bde22060 = () => interopDefault(import('..\\pages\\fishing\\index.vue' /* webpackChunkName: "pages_fishing_index" */))
const _153a449e = () => interopDefault(import('..\\pages\\lottery\\index.vue' /* webpackChunkName: "pages_lottery_index" */))
const _597bdfd2 = () => interopDefault(import('..\\pages\\promotion\\index.vue' /* webpackChunkName: "pages_promotion_index" */))
const _0ab28176 = () => interopDefault(import('..\\pages\\slots\\index.vue' /* webpackChunkName: "pages_slots_index" */))
const _2c908e5b = () => interopDefault(import('..\\pages\\sports\\index.vue' /* webpackChunkName: "pages_sports_index" */))
const _02c2385d = () => interopDefault(import('..\\pages\\vip\\index.vue' /* webpackChunkName: "pages_vip_index" */))
const _44cbd28c = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/casino",
    component: _a9a0f7b6,
    name: "casino"
  }, {
    path: "/fishing",
    component: _bde22060,
    name: "fishing"
  }, {
    path: "/lottery",
    component: _153a449e,
    name: "lottery"
  }, {
    path: "/promotion",
    component: _597bdfd2,
    name: "promotion"
  }, {
    path: "/slots",
    component: _0ab28176,
    name: "slots"
  }, {
    path: "/sports",
    component: _2c908e5b,
    name: "sports"
  }, {
    path: "/vip",
    component: _02c2385d,
    name: "vip"
  }, {
    path: "/",
    component: _44cbd28c,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
