import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2404125e = () => interopDefault(import('..\\pages\\casino\\index.vue' /* webpackChunkName: "pages_casino_index" */))
const _42cc28b7 = () => interopDefault(import('..\\pages\\fishing\\index.vue' /* webpackChunkName: "pages_fishing_index" */))
const _d1bfd2d0 = () => interopDefault(import('..\\pages\\lottery\\index.vue' /* webpackChunkName: "pages_lottery_index" */))
const _0ad6a984 = () => interopDefault(import('..\\pages\\promotion\\index.vue' /* webpackChunkName: "pages_promotion_index" */))
const _385b05ec = () => interopDefault(import('..\\pages\\slots\\index.vue' /* webpackChunkName: "pages_slots_index" */))
const _b535c6d8 = () => interopDefault(import('..\\pages\\sports\\index.vue' /* webpackChunkName: "pages_sports_index" */))
const _53540678 = () => interopDefault(import('..\\pages\\vip\\index.vue' /* webpackChunkName: "pages_vip_index" */))
const _17f8edf3 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/casino",
    component: _2404125e,
    name: "casino"
  }, {
    path: "/fishing",
    component: _42cc28b7,
    name: "fishing"
  }, {
    path: "/lottery",
    component: _d1bfd2d0,
    name: "lottery"
  }, {
    path: "/promotion",
    component: _0ad6a984,
    name: "promotion"
  }, {
    path: "/slots",
    component: _385b05ec,
    name: "slots"
  }, {
    path: "/sports",
    component: _b535c6d8,
    name: "sports"
  }, {
    path: "/vip",
    component: _53540678,
    name: "vip"
  }, {
    path: "/",
    component: _17f8edf3,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
