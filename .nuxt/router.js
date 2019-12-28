import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1b3c8295 = () => interopDefault(import('..\\pages\\casino\\index.vue' /* webpackChunkName: "pages_casino_index" */))
const _32a1bf60 = () => interopDefault(import('..\\pages\\fishing\\index.vue' /* webpackChunkName: "pages_fishing_index" */))
const _f214a57e = () => interopDefault(import('..\\pages\\lottery\\index.vue' /* webpackChunkName: "pages_lottery_index" */))
const _4b5f3ba7 = () => interopDefault(import('..\\pages\\promotion\\index.vue' /* webpackChunkName: "pages_promotion_index" */))
const _0ec832d5 = () => interopDefault(import('..\\pages\\slots\\index.vue' /* webpackChunkName: "pages_slots_index" */))
const _c6c4e66a = () => interopDefault(import('..\\pages\\sports\\index.vue' /* webpackChunkName: "pages_sports_index" */))
const _74cb4fed = () => interopDefault(import('..\\pages\\vip\\index.vue' /* webpackChunkName: "pages_vip_index" */))
const _1204852a = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/casino",
    component: _1b3c8295,
    name: "casino"
  }, {
    path: "/fishing",
    component: _32a1bf60,
    name: "fishing"
  }, {
    path: "/lottery",
    component: _f214a57e,
    name: "lottery"
  }, {
    path: "/promotion",
    component: _4b5f3ba7,
    name: "promotion"
  }, {
    path: "/slots",
    component: _0ec832d5,
    name: "slots"
  }, {
    path: "/sports",
    component: _c6c4e66a,
    name: "sports"
  }, {
    path: "/vip",
    component: _74cb4fed,
    name: "vip"
  }, {
    path: "/",
    component: _1204852a,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
