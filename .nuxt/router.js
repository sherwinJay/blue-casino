import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _f7ebbfa2 = () => interopDefault(import('..\\pages\\casino\\index.vue' /* webpackChunkName: "pages_casino_index" */))
const _38f055f4 = () => interopDefault(import('..\\pages\\fishing\\index.vue' /* webpackChunkName: "pages_fishing_index" */))
const _37dbc2e7 = () => interopDefault(import('..\\pages\\lottery\\index.vue' /* webpackChunkName: "pages_lottery_index" */))
const _5b167fcd = () => interopDefault(import('..\\pages\\promotion\\index.vue' /* webpackChunkName: "pages_promotion_index" */))
const _0d390c0a = () => interopDefault(import('..\\pages\\slots\\index.vue' /* webpackChunkName: "pages_slots_index" */))
const _056b2a65 = () => interopDefault(import('..\\pages\\sports\\index.vue' /* webpackChunkName: "pages_sports_index" */))
const _5fba2893 = () => interopDefault(import('..\\pages\\vip\\index.vue' /* webpackChunkName: "pages_vip_index" */))
const _496e5cc4 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/casino",
    component: _f7ebbfa2,
    name: "casino"
  }, {
    path: "/fishing",
    component: _38f055f4,
    name: "fishing"
  }, {
    path: "/lottery",
    component: _37dbc2e7,
    name: "lottery"
  }, {
    path: "/promotion",
    component: _5b167fcd,
    name: "promotion"
  }, {
    path: "/slots",
    component: _0d390c0a,
    name: "slots"
  }, {
    path: "/sports",
    component: _056b2a65,
    name: "sports"
  }, {
    path: "/vip",
    component: _5fba2893,
    name: "vip"
  }, {
    path: "/",
    component: _496e5cc4,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
