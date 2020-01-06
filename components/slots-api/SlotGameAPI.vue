<template>
  <div>
    <!-- game provider section -->
    <div class="game-vendor">
      <ul>
        <li
          v-for="vendor in gameVendor"
          :key="vendor.id">
          <a
            href="#"
            :id="`game-${vendor.id}`"
            :class="{active: currVendor == vendor.id}"
            @click="switchVendor"
            :data-id="vendor.id">
          </a>
        </li>
      </ul>
    </div>
    <!-- game category section -->
    <div class="category-wrapper">
      <!-- PLACE GAME CATEGORY HERE -->
      <GameCategories
        class="game-categories"
        :categories="this.categories"
        :activeCategory="this.currCategory"
        :switchCategory="this.switchCategory"/>
      <form class="search-game">
        <!-- search here -->
        <label>
          <input
            type="text"
            placeholder="search..."
            v-model="searchVal"/>
        </label>
      </form>
    </div>
    <div class="game-container-wrapper">
      <!-- SHOW LOADING CIRCLE WHEN PAGE LOADS  -->
      <div
        v-if="loading"
        id="loading"
        class="animated">
        <div class="circle"></div>
      </div>
      <!-- SHOWS GAME LIST AFTER PAGE LOADS  -->
      <div
        class="load-more"
        v-if="!loading">
          <!-- PLACE GAME LISTS HERE -->
          <Games
            :gameData="this.games"
            :langCN="this.langCN"
            :searchGame="this.searchVal"
            :topGames="this.topGames"/>
          <div
            v-if="loadMore"
            id="loading"
            class="animated">
            <div class="circle"></div>
          </div>
      </div>
    </div>
  </div>
</template>
<script>
import Games from '~/components/slots-api/Games'
import GameCategories from '~/components/slots-api/GameCategories'
export default {
  data () {
    return {
      // load default game provider
      currVendor: '1002',
      // set default to '' (all)
      currCategory: '',
      games: [],
      // placed all top game request here
      topGames: [
        // playtech
        'fmn', 'grbjp', 'qnw', 'bob', 'fkmj',
        // pragmatic
        'vs25journey', 'cs5moneyroll', 'vs243fortseren', 'vs20sbxmas', 'vs20aladdinsorc'
      ],
      // place game provider info here
      gameVendor: [
        { name: 'Playtech', id: 1002 },
        { name: 'Pragmatic', id: 1011 },
        { name: 'Top Trend Gaming', id: 1012 },
        { name: 'Play N Go', id: 1010 }
        // { name: 'Microgaming', id: 5213 },
        // { name: 'Jumbo', id: 1018 }
      ],
      categories: [],
      // check if lang is CN or EN
      langCN: false,
      // limit games to show on first load
      maxItem: 15,
      // check page load
      loading: false,
      // check add more game
      loadMore: false,
      // search game
      searchVal: ''
    }
  },
  created () {
    this.getCategories(this.currVendor)
    this.getGames(this.currVendor, this.currCategory, 0, this.maxItem)
  },
  beforeMount () {
    window.addEventListener('scroll', () => {
      this.loadMore = this.bottomPage()
    }, { passive: true })
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.bottomPage, { passive: true })
  },
  methods: {
    // get game data from api
    getGames (id, category, gameLength, maxItems) {
      fetch(`http://player.onestop.t1t.in/pub/get_frontend_games/${id}/${category}`, {
        method: 'GET' })
        .then(response => response.json())
        .then((result) => {
          this.loading = false
          // filter games
          const showGames = result.game_list.filter((idx) => {
            return ((idx.in_flash === '1' || idx.in_html5 === '1')) && (idx.game_type_code !== 'unknown' && idx.game_type_code !== null)
          })
          let append
          // filter top games
          const getTopGames = showGames.filter((game, j) => {
            return this.topGames.includes(game.game_id_desktop)
          })
          const addMoreGames = () => {
            if (this.bottomPage()) {
              this.loadMore = false
              this.games.concat(append)
            }
          }
          // add more games when scroll hit the bottom of page
          if (getTopGames.length > 0) {
            // remove the top games to avoid duplicate games
            if (category === ' ') {
              append = getTopGames.slice(gameLength, (gameLength + maxItems))
              this.games = this.games.concat(append)
              addMoreGames()
            } else {
              const normalGames = showGames.filter((game) => {
                return !this.topGames.includes(game.game_id_desktop)
              })
              append = getTopGames.concat(normalGames).slice(gameLength, (gameLength + maxItems))
              this.games = this.games.concat(append)
              addMoreGames()
            }
          } else {
            append = showGames.slice(gameLength, (gameLength + maxItems))
            this.games = this.games.concat(append)
            addMoreGames()
          }
        })
    },
    bottomPage () {
      const scrollY = window.scrollY
      const visible = document.documentElement.clientHeight
      const pageHeight = document.documentElement.scrollHeight
      const bottomOfPage = visible + scrollY >= (pageHeight)
      return bottomOfPage || pageHeight < visible
    },
    // get categories from api
    getCategories (id) {
      fetch(`http://player.onestop.t1t.in/pub/get_frontend_games/${id}/game_type`, {
        method: 'GET' })
        .then(response => response.json())
        .then((result) => {
          this.categories = result.available_game_type_codes
        })
    },
    switchVendor (e) {
      // empty the games
      this.games = []
      // default category to all everytime vendor item change
      this.currCategory = ''
      this.loading = true
      // get current vendor-id
      this.currVendor = e.target.getAttribute('data-id')
      this.getCategories(this.currVendor)
      this.getGames(this.currVendor, this.currCategory, 0, this.maxItem)
    },
    switchCategory (e) {
      // get current category
      this.games = []
      this.loading = true
      this.currCategory = e.target.getAttribute('data-category')
      this.getGames(this.currVendor, this.currCategory, 0, this.maxItem)
    }
  },
  watch: {
    loadMore (bottom) {
      if (bottom && (this.games.length > 0)) {
        this.getGames(this.currVendor, this.currCategory, this.games.length, this.maxItem)
      }
    }
  },
  components: {
    Games,
    GameCategories
  }
}
</script>
<style scoped>
/* =========================
Loading css
============================*/
#loading{
  position: fixed;
  height: 100%;
  top: 15px;
  left: 200px;
  right: 15px;
  bottom: 0;
  z-index: 9999;
  /* background-color: #2b2b2b; */
}
#loading .circle {
position: absolute;
top: 50%;
left: 50%;
width: 80px;
height: 80px;
margin-top: 40px;
margin-left: -40px;
border-radius: 50%;
border: solid 5px #222;
border-top-color: #ccc;
-webkit-animation: spin 1s infinite linear;
        animation: spin 1s infinite linear;
}
#loading.loaded {
  display: none;
}
.category-wrapper{
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  margin-bottom: 20px;
}
.game-categories{
  grid-column-start: 1;
  grid-column-end: 5;
  margin: 15px 0;
}
.search-game{
  grid-column-start: 5;
  grid-column-end: 7;
  display: grid;
  justify-items: end;
  align-items: center;
}
.load-more #loading .circle{
  width: 40px;
  height: 40px;
  margin-top: 175px;
}
.search-game input{
  padding: 5px 12px;
  border-radius: 15px;
  border: 0;
}
.game-container-wrapper{
  min-height: 300px;
  position: relative;
}
.game-vendor{
  padding: 10px 20px;
  border-radius: 45px;
  background-color: #0c1929;
  margin-bottom: 30px;
}
.game-vendor li{
  display: inline-block;
  padding: 5px 20px;
}
.game-vendor li a{
  background: url(/images/slots-page/vendor/game-providers.png) no-repeat;
  filter: grayscale(100%);
  display: block;
  height: 45px;
}
.game-vendor li a:hover,
.game-vendor li a.active{
  filter: grayscale(0);
}
.game-vendor li a#game-1002{
  background-position: -1439px;
  width: 125px;
}
.game-vendor li a#game-1011{
  background-position: -1337px;
  width: 95px;
}
.game-vendor li a#game-1012{
  background-position: -2429px;
  width: 155px;
}
.game-vendor li a#game-1010{
  background-position: -415px;
  width: 105px;
}
@-webkit-keyframes spin {
100% {
  -webkit-transform: rotate(360deg);
}
}
@keyframes spin {
100% {
  -webkit-transform: rotate(360deg);
}
}
@media (max-width: 1500px) {
  #loading {
    display: block;
  }
  .load-more #loading .circle{
    margin-top: 35px;
  }
}
</style>
