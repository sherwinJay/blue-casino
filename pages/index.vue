<template>
  <div class="main-container">
     <!-- <div class="langBtnContainer">
      <button>CN</button>
      <button>EN</button>
    </div> -->
    <Banner />
    <div class="announcement">
      <marquee behavior="" direction="">只是印刷和排版行业的虚拟文本。自16世纪以来，Lorem Ipsum一直是业界标准的虚拟文本，当时一台未知的打印机采用了类型的厨房，并将其拼凑成一本类型的样本。它不仅存在了五个世纪，而且还延续了电子排版，基本保持不变。它在20世纪60年代随着包含Lorem Ipsum段落的Letraset表格的推出而得到普及，最近还推出了像Aldus PageMaker这样的桌面出版软件，包括Lorem Ipsum的版本</marquee>
    </div>
    <section class="home-games page-container">
      <div class="game-grid-container">
        <div class="gm-day-wrapper">
            <img src="/images/home/DesertTreasure.jpg">
        </div>
        <div
          v-for="(thumbnail, idx) in thumbnails"
          :key="idx"
          class="thumbnail">
          <!-- <span class="hot">HOT</span> -->
          <!-- <span class="hot-text">HOT</span> -->
          <img :src="`/images/home/featured-games/${thumbnail.src}`">
          <div class="game_overlay">
            <p>{{thumbnail.name}}</p>
            <a href="#">
              <a href="#" class="game-btn">Play</a>
            </a>
          </div>
        </div>
      </div>
    </section>
    <section class="promo-banner-wrapper">
      <h3>Play more than 3000 games!</h3>
      <p>Try our best games now!</p>
      <button class="btn">Play</button>
    </section>
    <section class="page-container">
      <div class="jackpot-container">
        <h2>Jackpot</h2>
        <p>¥ 1,501,148.72</p>
      </div>
      <div class="home-content">
        <div class="bonus-container">
          <h2 class="bonus">Bonuses</h2>
          <div class="bonus-img-wrapper">
            <img src="/images/home/livecasino-promo-banner.png">
          </div>
        </div>
        <div class="more-games-wrapper">
          <h2 class="more-games">More Games</h2>
          <div class="game-pages">
            <div class="gm-img-wrapper">
              <img src="/images/home/sports2.jpg">
            </div>
            <div class="gm-img-wrapper">
              <img src="/images/home/casino.jpg">
            </div>
            <div class="gm-img-wrapper">
              <img src="/images/home/slots.jpg">
            </div>
            <div class="gm-img-wrapper">
              <img src="/images/home/lottery.jpg">
            </div>
            <div class="gm-img-wrapper">
              <img src="/images/home/fishing.jpg">
            </div>
            <div class="gm-img-wrapper">
              <img src="/images/home/cards.jpg">
            </div>
          </div>
        </div>
        <div class="game-winners-container">
          <h2 class="game-winners">Daily Winners</h2>
          <Winners />
        </div>
      </div>
    </section>
    <section class="page-container home-promo-wrapper">
      <h2>Promotions</h2>
      <div class="home-promo">
        <div
         v-for="(promo, idx) in promotions"
          :key="idx">
          <img :src="`/images/home/promotions/${promo.src}`">
          <div class="promo-content">
            <h3>{{ promo.title }}</h3>
            <p>
              {{ promo.content }}
            </p>
            <a class="promo-btn" href="#">查看详情</a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import Winners from '~/components/home/Winners'
import Banner from '~/components/home/Banner'
export default {
  data () {
    return {
      thumbnails: [
        { src: 'fireflyfrenzy.jpg', name: 'Firefly Frenzy' },
        { src: 'gpas_fatchoy_pop.jpg', name: 'Fat Choy Choy Sun' },
        { src: 'SMG_ancientFortunesZeus.jpg', name: 'Ancient Fortunes: Zeus' },
        { src: 'vs5trdragons.jpg', name: 'Triple Dragon' },
        { src: 'AR29.jpg', name: 'Wealthy Chicken' },
        { src: 'aceofspades.jpg', name: 'Ace of Spades' },
        { src: 'sevensins.jpg', name: '7 Sins' },
        { src: 'grimmuerto.jpg', name: 'Grim Muerto' },
        { src: 'SMG_goldenPrincess.jpg', name: 'Golden Princess' },
        { src: 'BPG-convertusaurum.jpg', name: 'Convertus Aurum' },
        { src: 'bigwincat.jpg', name: 'Big Win Cat' },
        { src: 'belloffortune.jpg', name: 'Bell of Fortune' },
        { src: 'phtd.jpg', name: 'Pharaoh’s Treasure Deluxe' },
        { src: 'prosperitypalace.jpg', name: 'Prosperity Palace' },
        { src: 'epa.jpg', name: 'Epic Ape' },
        { src: 'SMG_shogunofTime.jpg', name: 'Shogun Of Time' },
        { src: '142.jpg', name: 'Hephaestus' }
      ],
      promotions: [
        { src: 'promo_banner_02.jpg', title: 'Title', content: `Your lucky weekend? Find yourself on a 10x Blackjack winning streak this weekend and you'll be receiving $100!` },
        { src: 'promo_banner_03.jpg', title: 'Title', content: `Your lucky weekend? Find yourself on a 10x Blackjack winning streak this weekend and you'll be receiving $100!` },
        { src: 'promo_banner_04.jpg', title: 'Title', content: `Your lucky weekend? Find yourself on a 10x Blackjack winning streak this weekend and you'll be receiving $100!` },
        { src: 'promo_banner_01.jpg', title: 'Title', content: `Your lucky weekend? Find yourself on a 10x Blackjack winning streak this weekend and you'll be receiving $100!` }
      ]
    }
  },
  components: {
    Winners,
    Banner
  }
}
</script>
<style>
.home-games{
  margin-top: -50px;
}
.announcement {
  font-size: 14px;
}
.gm-day-wrapper{
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  border-radius: 7px;
}
.gm-day-wrapper img{
  transition: transform .5s;
  max-width: 155%;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%,-50%);
  z-index: 0;
}
.promo-banner-wrapper{
  background: linear-gradient(to top left, rgba(232,178,56,0.65), rgba(6,36,72,0.75)), url(/images/home/hearthstone-frozen-throne.jpg) center no-repeat;
  background-size: cover;
  padding: 100px 0;
  min-height: 170px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.promo-banner-wrapper h3{
  font-size: 40px;
}
.promo-banner-wrapper p{
  margin: 5px 0 25px;
}
.btn{
  background-image: linear-gradient(to bottom right, #e8b238 15%, #fdea7f 50%, #e8b238 90%) !important;
  padding: 5px 30px;
  color: #000;
  border-radius: 15px;
}
/*CSS GRID TEST*/
.game-grid-container{
  display: grid;
  grid: 150px 150px 150px / repeat(7, 1fr);
  grid-gap: 15px;
  min-height: 0;
  min-width: 0;
}
.game-grid-container > div:first-child{
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 3;
  min-width: 0;
  overflow:hidden;
  width: 100%;
}
.home-content{
  margin-top: 35px;
  display: grid;
  grid: 354px / repeat(8, 1fr);
  grid-gap: 15px;
}
.bonus-container{
  grid-column-start: 1;
  grid-column-end: 3;
}
.more-games-wrapper{
  grid-column-start: 3;
  grid-column-end: 7;
}
.game-winners-container{
  grid-column-start: 7;
  grid-column-end: 9;
}
.home-content h2{
  font-size: 24px;
  margin-bottom: 20px;
}
.bonus,
.more-games,
.game-winners{
  padding: 3px 0 3px 40px;
  color: #fff;
  background-size: contain !important;
}
.gm-img-wrapper,
.bonus-img-wrapper,
.home-games .thumbnail{
  overflow: hidden;
  position: relative;
}
.thumbnail,
.gm-day-wrapper{
  box-shadow: #000 2px 2px 10px;
}
.thumbnail,
.gm-img-wrapper{
  border-radius: 7px;
}
.bonus-img-wrapper{
  height: 300px;
  background-color: #000;
}
.thumbnail > img{
  transition: transform .5s;
  max-width: 177%;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%,-50%);
  z-index: 0;
}
.thumbnail .game_overlay{
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.thumbnail .game_overlay p{
  margin: -10px 0 10px;
}
.thumbnail .game_overlay a.game-btn {
  padding: 0 12px;
  border-radius: 8px;
  color: #111;
  background-color: #e8b238;
}
.bonus-img-wrapper img{
  transition: transform .5s;
  max-width: 160%;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%,-50%);
  z-index: 0;
}
.gm-img-wrapper img{
  transition: transform .5s;
  max-width: 105%;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%,-50%);
  z-index: 0;
}
.more-games{
  background: url(/images/home/icons/playing-card.svg) left no-repeat;
}
.game-winners{
  background: url(/images/home/icons/trophy.svg) left no-repeat;
}
.bonus{
  background: url(/images/home/icons/casino.svg) left no-repeat;
}
.game-pages{
  display: grid;
  grid: 143px 143px / repeat(3, 1fr);
  grid-gap: 15px;
}
.home-promo-wrapper h2,
.jackpot-container h2{
  font-size: 32px;
  text-align: center;
  line-height: 30px;
}
.jackpot-container p{
  font-family: 'Bowlby One SC';
  border-top: 1px solid #fdea7f;
  border-bottom: 1px solid #fdea7f;
  margin-top: 15px;
  padding: 15px 0;
  text-align: center;
  font-size: 80px;
  line-height: 80px;
  letter-spacing: 5px;
  text-align: center;
  color: transparent;
  -webkit-background-clip: text;
  background-image: -webkit-gradient(linear, 50% 0%, 50% 100%, color-stop(0%, #ffffff), color-stop(100%, #fdea7f));
  background-image: -webkit-linear-gradient(#ffffff,#fdea7f);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.home-promo-wrapper{
  background: url(/images/home/promotions/promo-bg.png) #06111F;
}
.home-promo{
  display: grid;
  grid: auto / repeat(4, 1fr);
  grid-gap: 20px;
  margin-top: 45px;
}
.home-promo > div{
  max-width: 100%;
  overflow: hidden;
}
.home-promo > div img{
  max-width: 100%;
  border-radius: 10px;
}
.promo-content{
  padding: 7px 0;
}
.promo-content h3{
  font-size: 18px;
  color: #fdea7f;
  font-weight: bold;
  margin-bottom: 10px;
}
.promo-btn{
  padding: 5px 9px;
  background-color: #e8b238;
  color: #111;
  margin-top: 10px;
  border-radius: 15px;
  display: inline-block;
  font-size: 14px;
}
@media(max-width: 1500px){
.game-grid-container{
  display: grid;
  grid: 100px 100px 100px / repeat(7, 1fr);
  grid-gap: 15px;
  min-height: 0;
  min-width: 0;
}
.game-grid-container > div:first-child{
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 3;
  min-width: 0;
  overflow:hidden;
  width: 100%;
}
  .thumbnail img{
    max-width: 190%;
  }
  .gm-day-wrapper img{
    max-width: 170%;
  }
  .game-winners-container{
    font-size: 12px;
  }
  .jackpot-container p{
    font-size: 65px;
    line-height: 65px;
  }
  .thumbnail .game_overlay a img{
    height: auto;
  }
  .game-pages{
    display: grid;
    grid: 100px 100px / repeat(3, 1fr);
    grid-gap: 15px;
  }
  .gm-img-wrapper img{
    max-width: 110%;
  }
  .home-content{
    display: grid;
    grid: 265px / repeat(8, 1fr);
  }
  .bonus-img-wrapper{
    height: 216px;
  }
  .box_content.winners{
    max-height: 216px;
    overflow: hidden;
  }
}
@media(max-width: 1120px){
.game-grid-container{
  display: grid;
  grid: 120px 120px 120px 120px/ repeat(5, 1fr);
  grid-gap: 15px;
  min-height: 0;
  min-width: 0;
}
.game-grid-container > div:first-child{
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 3;
  min-width: 0;
  overflow:hidden;
  width: 100%;
}
  .thumbnail img{
    max-width: 190%;
  }
  .gm-day-wrapper img{
    max-width: 170%;
  }
}
</style>
