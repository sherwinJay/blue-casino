<template>
  <div>
    <div>
      <p
        v-for="(game, idx) in filterGames"
        :key="idx">{{game.game_name}}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    gameData: {
      type: Array
    }
  },
  computed: {
    slotGames () {
      const game = this.gameData
      const newArr = []
      if (game === null || game === undefined) {
        return newArr
      } else {
        game.map((idx) => {
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

          // modify gamelink
          const getGameLink = (gameProvider, gameCode, gameType, gameMode, gameCodeOther) => {
            const getLaunchUrl1 = String(idx.game_launch_url.web).split('/')[0]
            const getLaunchUrl2 = String(idx.game_launch_url.web).split('/')[1]

            if (gameProvider === 'T1PT') {
              return `/${getLaunchUrl1}/${getLaunchUrl2}/${gameCode}/${gameMode}`
            } else if (gameProvider === 'T1JUMB') {
              if (idx.game_type_code === 'card_games') {
                return `/${getLaunchUrl1}/${getLaunchUrl2}/table_and_cards/${gameCode}`
              } else if (idx.game_type_code === 'fishing_game') {
                return `/${getLaunchUrl1}/${getLaunchUrl2}/fishing/${gameCode}`
              } else {
                return `/${getLaunchUrl1}/${getLaunchUrl2}/${gameType}/${gameCode}`
              }
            } else {
              return `/${getLaunchUrl1}/${getLaunchUrl2}/${gameCode}`
            }
          }

          const gName = this.langCN ? idx.game_name_cn : idx.game_name_en
          const gImgPath = this.langCN ? `/gamegatewayincludes/images/cn/` : `/gamegatewayincludes/images/`

          // create new game list data
          newArr.push({
            game_name: gName,
            game_url: `${gImgPath}${idx.game_id_desktop}`,
            gameImg: this.langCN ? idx.image_path.cn : idx.image_path.en,
            game_link: {
              real: `${getGameLink(game[0].provider_code, idx.game_id_desktop, idx.game_type_code, 'real')}`,
              trial: `${getGameLink(game[0].provider_code, idx.game_id_desktop, idx.game_type_code, 'trial')}`
            },
            is_flash: ``,
            is_html5: ``,
            is_mobile: ``,
            category: ``,
            gameCode: idx.game_type_code,
            realBtn: this.langCN ? '开始游戏' : 'real',
            demoBtn: this.langCN ? '免费试玩' : 'trial'
          })
        })
        console.log(newArr)
        return newArr
      }
    },
    filterGames () {
      return this.slotGames.filter((game) => {
        const filteredGame = game.game_name.toLowerCase()
        return filteredGame
      })
    }
  }
}
</script>
<style scoped>

</style>
