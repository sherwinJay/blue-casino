<template>
    <div class="game-container">
      <!-- parent container of each games -->
      <div
        class="game-slot-container"
        v-for="(game, idx) in filterGames"
        :key="idx">
        <!-- check if top games, then add class top games -->
        <div
          :class="`game-slot game-${game.gameVendor.toLowerCase()} ${topGames.includes(game.uniqueCode)  ? 'top-games' : '' }`">
          <img
            class="hot-icon"
            src="/images/slots-page/hot.png"
            alt="hot-icon">
          <img
            :src="game.gameImg"
            :alt="game.gName">
        </div>
        <div :class="`game-info game-${game.gameVendor.toLowerCase()}`">
          <span
            class="game-name">
            {{ game.game_name }}
          </span>
          <div class="btn-wrapper">
            <a
              class="btn play-btn"
              :href="game.game_link.real"
              target="_blank">
              {{game.realBtn}}
            </a>
            <a
              class="btn demo-btn"
              :href="game.game_link.trial">
              {{game.demoBtn}}
            </a>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  props: {
    gameData: {
      type: Array
    },
    searchGame: {
      type: String
    },
    langCN: {
      type: Boolean
    },
    topGames: {
      type: Array
    }
  },
  computed: {
    slotGames () {
      const game = this.gameData
      let gameArr = []
      if (game === null || game === undefined) {
        return gameArr
      } else {
        gameArr = game.map((idx, j) => {
          // GET IMAGE PATH
          // rename game provider code for img path
        //   const getImageFolder = (provider) => {
        //     if (provider === 'T1PT') {
        //       return 'playtech'
        //     } else if (provider === 'MGPLUS') {
        //       return 'microgaming'
        //     } else if (provider === 'T1PRAGMATICPLAY') {
        //       return 'pragmatic'
        //     } else if (provider === 'T1JUMB') {
        //       return 'jumbo'
        //     } else if (provider === 'T1TTG') {
        //       return 'ttg'
        //     }
        //   }

          // MODIFY GAME LINK VARIABLES
          const getLaunchUrl1 = String(idx.game_launch_url.web).split('/')[0]
          const getLaunchUrl2 = String(idx.game_launch_url.web).split('/')[1]
          const getGameLinkReal = (gameProvider, gameCode, gameType, gameMode, gameCodeOther) => {
            // CREATE GAMELINK
            // Use provider_code when comparing with gameProvider
            if (gameProvider === 'T1PT') {
              return `/${getLaunchUrl1}/${getLaunchUrl2}/${gameCode}`
            } else if (gameProvider === 'T1JUMB') {
              if (idx.game_type_code === 'card_games') {
                return `/${getLaunchUrl1}/${getLaunchUrl2}/table_and_cards/${gameCode}`
              } else if (idx.game_type_code === 'fishing_game') {
                return `/${getLaunchUrl1}/${getLaunchUrl2}/fishing/${gameCode}`
              } else {
                return `/${getLaunchUrl1}/${getLaunchUrl2}/${gameType}/${gameCode}`
              }
            } else if (gameProvider === 'T1PNG') {
              return `/${getLaunchUrl1}/${getLaunchUrl2}/${gameCode}/real`
            } else if (gameProvider === 'PT V2') {
              return `/${getLaunchUrl1}/${getLaunchUrl2}/default/${gameCode}`
            } else if (gameProvider === 'MGPLUS') {
              return `/${getLaunchUrl1}/${getLaunchUrl2}/5213/${gameCode}/real`
            } else if (gameProvider === 'HB') {
              return `/${getLaunchUrl1}/${getLaunchUrl2}/real/${gameCode}`
            } else if (gameProvider === 'DT') {
              return `/${getLaunchUrl1}/${getLaunchUrl2}/${gameCode}/real/web`
            } else if (gameProvider === 'JUMB_GAMING') {
              if (idx.game_type_code === 'card_games') {
                return `/${getLaunchUrl1}/${getLaunchUrl2}/table_and_cards/${gameCode}/real/desktop`
              } else if (idx.game_type_code === 'fishing_game') {
                return `/${getLaunchUrl1}/${getLaunchUrl2}/fishing/${gameCode}/real/desktop`
              } else {
                return `/${getLaunchUrl1}/${getLaunchUrl2}/${gameType}/${gameCode}`
              }
            } else if (gameProvider === 'PRAGMATICPLAY') {
              return `/${getLaunchUrl1}/${getLaunchUrl2}/${gameCode}/real`
            } else {
              return `/${getLaunchUrl1}/${getLaunchUrl2}/${gameCode}`
            }
          }

          const getGameLinkTrial = (gameProvider, gameCode, gameType, gameMode, gameCodeOther) => {
            // CREATE GAMELINK
            // Use provider_code when comparing with gameProvider
            if (gameProvider === 'T1PT') {
              return `/${getLaunchUrl1}/${getLaunchUrl2}/${gameCode}`
            } else if (gameProvider === 'T1JUMB') {
              if (idx.game_type_code === 'card_games') {
                return `/${getLaunchUrl1}/${getLaunchUrl2}/table_and_cards/${gameCode}`
              } else if (idx.game_type_code === 'fishing_game') {
                return `/${getLaunchUrl1}/${getLaunchUrl2}/fishing/${gameCode}`
              } else {
                return `/${getLaunchUrl1}/${getLaunchUrl2}/${gameType}/${gameCode}`
              }
            } else if (gameProvider === 'T1PNG') {
              return `/${getLaunchUrl1}/${getLaunchUrl2}/${gameCode}/fun`
            } else if (gameProvider === 'PT V2') {
              return `/${getLaunchUrl1}/${getLaunchUrl2}/default/${gameCode}`
            } else if (gameProvider === 'MGPLUS') {
              return `/${getLaunchUrl1}/${getLaunchUrl2}/5213/${gameCode}`
            } else if (gameProvider === 'HB') {
              return `/${getLaunchUrl1}/${getLaunchUrl2}/trial/${gameCode}`
            } else if (gameProvider === 'DT') {
              return `/${getLaunchUrl1}/${getLaunchUrl2}/${gameCode}`
            } else if (gameProvider === 'JUMB_GAMING') {
              if (idx.game_type_code === 'card_games') {
                return `/${getLaunchUrl1}/${getLaunchUrl2}/table_and_cards/${gameCode}/trial`
              } else if (idx.game_type_code === 'fishing_game') {
                return `/${getLaunchUrl1}/${getLaunchUrl2}/fishing/${gameCode}/trial`
              } else {
                return `/${getLaunchUrl1}/${getLaunchUrl2}/${gameType}/${gameCode}`
              }
            } else if (gameProvider === 'PRAGMATICPLAY') {
              return `/${getLaunchUrl1}/${getLaunchUrl2}/${gameCode}/fun`
            } else {
              return `/${getLaunchUrl1}/${getLaunchUrl2}/${gameCode}`
            }
          }

          const gName = this.langCN ? idx.game_name_cn : idx.game_name_en
          const gImgPath = this.langCN ? `/gamegatewayincludes/images/cn/` : `/gamegatewayincludes/images/`
          const hideDemoBtn = []

          function vendorNoDemo () {
            if (hideDemoBtn.length < 1) {
              return false
            } else {
              for (let i = 0; i < hideDemoBtn.length; i++) {
                if (hideDemoBtn[i] === idx.provider_code) {
                  return true
                }
              }
            }
          }
          // CREATE CUSTOM GAME INFORMATION
          return {
            gameVendor: idx.provider_code,
            game_name: gName,
            game_url: `${gImgPath}${idx.game_id_desktop}`,
            gameImg: this.langCN ? idx.image_path.cn : idx.image_path.en,
            game_link: {
              real: `${getGameLinkReal(game[0].provider_code, idx.game_id_desktop, idx.game_type_code)}`,
              trial: `${getGameLinkTrial(game[0].provider_code, idx.game_id_desktop, idx.game_type_code)}`
            },
            is_flash: ``,
            is_html5: ``,
            is_mobile: ``,
            category: ``,
            gameCode: idx.game_type_code,
            realBtn: this.langCN ? '开始游戏' : 'real',
            demoBtn: vendorNoDemo() ? '' : this.langCN ? '免费试玩' : 'trial',
            uniqueCode: idx.game_id_desktop
          }
        })
      }
      return gameArr
    },
    filterGames () {
      return this.slotGames.filter((game) => {
        // check if game name exist; if not return empty string
        const filteredGame = game.game_name !== null ? game.game_name.toLowerCase() : ''
        return filteredGame.match(this.searchGame.toLowerCase())
      })
    }
  }
}
</script>
<style scoped>
/* default css animation */
.game-slot-container{
  animation: popIn 0.5s;
}
@keyframes popIn {
    from {transform: scale(0.8); opacity: 0;}
    to {transform: scale(1); opacity: 1;}
}
/* default css animation end here */
.game-container{
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 20px;
  min-height: 0;
  min-width: 0;
}
.game-container .game-slot-container{
  height: 160px;
  overflow: hidden;
  position: relative;
  border-radius: 5px;
  animation: popIn 0.5s;
}
.game-container .game-slot-container img {
  -webkit-transition: -webkit-transform .5s;
  transition: -webkit-transform .5s;
  transition: transform .5s;
  transition: transform .5s, -webkit-transform .5s;
  max-width: 175%;
  left: 50%;
  position: absolute;
  top: 50%;
  -webkit-transform: translate(-50%,-50%);
  transform: translate(-50%,-50%);
  z-index: 0;
}
.game-info{
  position: relative;
  opacity: 0;
  height: 100%;
  padding: 20px 0;
  background: rgba(0,0,0,0.7);
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  justify-items: center;
  transition: 0.5s all ease-in-out;
  text-align: center;
  z-index: 5;
}
.game-info:hover{
  opacity: 1;
}
.btn-wrapper{
  display: grid;
}
.btn-wrapper .btn{
  margin: 5px 0;
}
.game-slot .hot-icon{
  display: none;
}
.game-slot.top-games .hot-icon{
  position: absolute;
  top: 23px;
  left: 88%;
  display: block;
  z-index: 3;
}
@media(max-width: 1500px){
   .game-container{
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 15px;
    min-height: 0;
    min-width: 0;
  }
  .game-container .game-slot-container img{
    max-width: 201%;
  }
  .game-container .game-slot-container{
    height: 130px;
  }
  .btn-wrapper .btn{
    padding: 2px 20px;
    font-size: 14px;
    margin: 3px 0;
  }
  .game-info{
    line-height: 20px;
    padding: 10px 0;
  }
}
</style>
