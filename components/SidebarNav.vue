<template>
  <div>
    <div
      class="sidebar-container-mob"
      @click="showSideMenu">
      <div class="menu-wrapper">
        <a href="#" class="menu">
          <img src="/images/sideNav/menu.svg" alt="menu">
        </a>
      </div>
    </div>
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
        <div
          class="close-btn"
          @click="hideSideMenu">
          <span><img src="/images/close.svg" alt="close-btn"></span>
        </div>
        <ul class="nav">
          <li
            v-for="(nav, idx) in navItems"
            :key="idx"
            :class="nav.className"
            @click="hideSideMenu">
            <nuxt-link
              :to="nav.link">
              <span>{{nav.name}}</span>
            </nuxt-link>
          </li>
        </ul>
      </div>
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
  },
  methods: {
    showSideMenu () {
      const sideMenuIcon = document.querySelector('.sidebar-container')
      return sideMenuIcon.classList.add('show')
    },
    hideSideMenu () {
      const sideMenuIcon = document.querySelector('.sidebar-container')
      return sideMenuIcon.classList.remove('show')
    }
  }
}
</script>
<style scoped>
.sidebar-container .close-btn{
  display: none;
}
.sidebar-container-mob{
  position: fixed;
  top: 0;
  left: 0;
  padding: 5px 0 5px 40px;
  height: 70px;
  display: none;
  z-index: 11;
}
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
  .sidebar-container.show,
  .sidebar-container.show .close-btn{
    display: block !important;
  }
  .sidebar-container.show .close-btn{
    position: absolute;
    top: 15px;
    right: 15px;
  }
  .sidebar-container.show .close-btn img{
    width: 18px;
  }
  .sidebar-container-mob{
    display: grid !important;
    align-items: center;
  }
  .menu-wrapper img{
    width: 30px;
  }
}
@media(max-width: 500px){
  .sidebar-container-mob{
    top: -7px;
    left: 0;
    padding: 5px 0 5px 20px;
  }
}
</style>
