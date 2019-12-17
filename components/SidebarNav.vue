<template>
  <div class="sidebar-container">
    <div class="sidebar-nav">
      <div class="gm-lang">
      <ul>
        <li>EN</li>
        <!-- <li>EN</li> -->
      </ul>
      <!-- <select>
        <option value="0">CN</option>
        <option value="1">EN</option>
      </select> -->
    </div>
      <ul class="nav">
        <li
          v-for="(nav, idx) in navItems"
          :key="idx"
          :class="nav.className">
          <nuxt-link :to="nav.link">
            <span>{{nav.name}}</span>
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      sideNavClass: 'on',
      navItems: [
        { link: '/', className: 'nav-home', name: 'Home' },
        { link: '/casino', className: 'nav-casino', name: 'Casino' },
        { link: '/slots', className: 'nav-slots', name: 'Slots' },
        { link: '/sports', className: 'nav-sports', name: 'Sports' },
        { link: '/fishing', className: 'nav-fishing', name: 'Fishing' },
        { link: '/lottery', className: 'nav-lottery', name: 'Lottery' },
        { link: '/promotion', className: 'nav-promotion', name: 'Promotion' },
        { link: '/vip', className: 'nav-vip', name: 'VIP' }
      ]
    }
  }
}
</script>
<style scoped>
.sidebar-container{
    box-shadow: #050505 1px 20px 7px;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #0c1929;
    z-index: 12;
    height: 100vh;
    width: 200px;
}
.sidebar-nav{
    padding: 10px 30px;
    width: 100%;
    height: 100%;
}
.nav{
  border-top: 1px solid #fdea7f;
  border-bottom: 1px solid #fdea7f;
  padding: 10px 0;
}
ul li a{
  color: #fff;
  padding-left: 35px;
  font-size: 15px;
}
ul li{
  display: block;
  width: 100%;
  line-height: 24px;
  margin: 12px 0;
}
/* Hover */
.nav-casino{
  background: url(/images/sideNav/tokens-hover.svg?v=0.0.1) left no-repeat;
  background-size: contain;
}
.nav-slots{
  background: url(/images/sideNav/slot-machine-hover.svg) left no-repeat;
  background-size: contain;
}
.nav-sports{
  background: url(/images/sideNav/football-hover.svg?v=0.0.1) left no-repeat;
  background-size: contain;
}
.nav-fishing{
  background: url(/images/sideNav/fish-hover.svg?v=0.0.1) left no-repeat;
  background-size: contain;
}
.nav-lottery{
  background: url(/images/sideNav/wheel-of-fortune-hover.svg) left no-repeat;
  background-size: contain;
}
.nav-home{
  background: url(/images/sideNav/home-hover.svg) left no-repeat;
  background-size: contain;
}
.nav-promotion{
  background: url(/images/sideNav/flyers-hover.svg) left no-repeat;
  background-size: contain;
}
.nav-vip{
  background: url(/images/sideNav/star-on-vip-card-hover.svg?v=0.0.2) left no-repeat;
  background-size: contain;
}
.gm-lang{
  margin: 20px 0 30px;
  background: url(/images/sideNav/global.svg?v=0.0.2) left no-repeat;
  background-size: contain;
  padding-left: 25px;
}
.gm-lang select{
  background-color: transparent;
  color: #fff;
  border: 0;
  outline: none;
}
.gm-lang option{
  background-color: transparent;
  color: #000;
}
.gm-lang li{
  display: inline-block;
  width: auto;
  padding: 0 10px;
  margin: 0;
  line-height: 26px;
  font-size: 16px;
}
@media(max-width: 1120px){
  .sidebar-container{
    display: none;
  }
}
</style>
