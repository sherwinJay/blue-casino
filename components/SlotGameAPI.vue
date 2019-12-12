<template>
  <div>
    <div class="gm-provider">
      <ul>
        <li
          v-for="vendor in gameVendor"
          :key="vendor.id">
          <a
            :class="{active: currVendor == vendor.id}"
            :data-id="vendor.id">
            {{ vendor.name }}
          </a>
        </li>
      </ul>
    </div>
    <div class="game-container">
      <div
        v-if="loading"
        id="loading"
        class="animated">
        <div class="circle"></div>
      </div>

      <div v-if="!loading">
          <!-- PLACE CATEGORY GAME LISTS HERE -->
          <Games
            :gameData="this.games"
            :langCN="this.langCN"/>
          <div
            v-if="loadMore"
            id="load-more"
            class="animated">
            <div class="circle"></div>
          </div>
      </div>
    </div>
  </div>
</template>
<script>
import Games from '~/components/Games'
export default {
  data () {
    return {
      currVendor: '1002',
      currCategory: 'slots',
      games: [],
      gameVendor: [
        { name: 'Playtech', id: 1002 },
        { name: 'Pragmatic', id: 1011 },
        { name: 'Top Trend Gaming', id: 1012 }
      ],
      langCN: false,
      maxItem: 15,
      loading: false,
      loadMore: false
    }
  },
  created () {
    this.getGames(this.currVendor, this.currCategory, 0, this.maxItem)
    // window.addEventListener('scroll', () => {
    //   this.loadMore = this.bottomPage()
    // })
  },
  methods: {
    // get data from api
    getGames (id, category, gameLength, maxItems) {
      fetch(`http://player.onestop.t1t.in/pub/get_frontend_games/${id}/${category}`, {
        method: 'GET' })
        .then(response => response.json())
        .then((result) => {
          this.loading = false
          const showGames = result.game_list.filter((idx) => {
            return idx.in_flash === '1' && idx.game_type_code !== 'unknown'
          })
          const append = showGames.slice(gameLength, (gameLength + maxItems))
          this.games = this.games.concat(append)
          // if (this.bottomPage()) {
          //   this.loadMore = false
          //   this.games.concat(append)
          // }
        })
    },
    bottomPage () {
      const scrollY = window.scrollY
      const visible = document.documentElement.clientHeight
      const pageHeight = document.documentElement.scrollHeight
      const bottomOfPage = visible + scrollY >= (pageHeight - 120)
      return bottomOfPage || pageHeight < visible
    }
  },
  watch: {
    loadMore (bottom) {
      if (bottom) {
        this.getGames(this.currVendor, this.currCategory, this.games.length, this.maxItem)
      }
    }
  },
  components: {
    Games
  }
}
</script>
<style scoped>
/* =========================
Loading css
============================*/
#loading, #load-more {
  position: fixed;
  height: 100%;
  top: 15px;
  right: 15px;
  bottom: 0;
  left: 15px;
  z-index: 9999;
  /* background-color: #2b2b2b; */
}
#loading .circle {
position: absolute;
top: 50%;
left: 50%;
width: 80px;
height: 80px;
margin-top: -40px;
margin-left: -40px;
border-radius: 50%;
border: solid 5px #222;
border-top-color: #ccc;
-webkit-animation: spin 1s infinite linear;
        animation: spin 1s infinite linear;
}

#load-more .circle {
  position: absolute;
  bottom: 50px;
  left: 50%;
  width: 40px;
  height: 40px;
  margin-top: -40px;
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
@media (min-width: 992px) {
  #loading {
    display: block;
  }

}
</style>
