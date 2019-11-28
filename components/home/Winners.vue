<template>
  <div class="box_content winners" v-swiper:mySwiper="swiperOption">
    <div class="swiper-wrapper">
      <div v-for="(winner, idx) in winners" :key="idx" class="swiper-slide">
        <div class="win_item">
          <div class="row">
            <div class="win-user col-md-4">
             <p class="win_user">{{winner. player}}</p>
            </div>
            <div class="win_text col-md-8">
              <p class="win_game">{{winner.game}}</p>
              <p class="win_amount">{{winner.winAmount}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      winners: [
        { player: 'test002', game: 'Frost Valley', winAmount: '1234. 00 USD' },
        { player: 'test002', game: 'Frost Valley', winAmount: '1234. 00 USD' },
        { player: 'test002', game: 'Frost Valley', winAmount: '1234. 00 USD' },
        { player: 'test002', game: 'Frost Valley', winAmount: '1234. 00 USD' },
        { player: 'test002', game: 'Frost Valley', winAmount: '1234. 00 USD' },
        { player: 'test002', game: 'Frost Valley', winAmount: '1234. 00 USD' },
        { player: 'test002', game: 'Frost Valley', winAmount: '1234. 00 USD' }
      ],
      swiperOption: {
        direction: 'vertical',
        slidesPerView: 6,
        spaceBetween: 0,
        mousewheel: true,
        speed: 2000,
        loop: true,
        autoplay: {
          delay: 0,
          reverseDirection: false
        }
      }
    }
  }
}
</script>
<style scoped>
.box_content.winners {
  height: 100%;
  max-height: 300px !important;
  overflow: hidden !important;
}
.box_content.winners .swiper-container {
  height: 100%;
}
.win_item {
  padding: 12px 30px;
  background: #0c1929;
}
.win_text {
  white-space: nowrap;
  display: flex;
  justify-content: flex-end;
  padding: 0;
}
.win_text p{
  margin-left: 10px;
}
p.win_amount {
  color: #e5b472;
  font-weight: 700;
}
p.win_game {
  color: #9f6141;
}
.win-user{
  padding: 0;
}
@media(max-width: 1400px){
  .box_content.winners{
    max-height: 215px !important;
    overflow: hidden !important;
  }
}
</style>
