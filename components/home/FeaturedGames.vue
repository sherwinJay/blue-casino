<template>
  <div v-swiper:mySwiper="swiperOption" class="featured-games">
    <div class="swiper-wrapper">
      <div v-for="(game, idx) in featuredGames" :key="idx" class="swiper-slide">
        <img :src="game">
        <div class="game_overlay">
          <p>Featured Games</p>
          <a href="#">
            <img src="/images/play.png" alt="">
          </a>
        </div>
      </div>
    </div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      featuredGames: [
        '/images/fgames/1.jpg',
        '/images/fgames/2.jpg',
        '/images/fgames/3.jpg',
        '/images/fgames/4.jpg',
        '/images/fgames/5.jpg',
        '/images/fgames/6.jpg',
        '/images/fgames/7.jpg',
        '/images/fgames/8.jpg',
        '/images/fgames/3.jpg',
        '/images/fgames/7.jpg',
        '/images/fgames/2.jpg',
        '/images/fgames/5.jpg'
      ],
      swiperOption: {
        slidesPerView: 8,
        spaceBetween: 15,
        loop: true,
        loopFillGroupWithBlank: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  }
}
</script>
<style scoped>
.featured-games{
  margin: -50px 0 10px;
}
.featured-games .swiper-slide {
  position: relative;
}
.featured-games .swiper-slide .game_overlay a {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.featured-games .swiper-slide .game_overlay a img {
  max-width: 45px;
  opacity: .7;
}
.featured-games .swiper-slide:hover .game_overlay {
  opacity: 1;
  z-index: 1;
}
.swiper-slide{
  overflow: hidden;
}
.game_overlay p{
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  display: block;
  padding: 5px 0;
  margin: -20px 0 10px;
}
.game_overlay{
  display: flex;
  flex-direction: column;
  justify-content: center;
}
@media(max-width: 1400px){
  .featured-games{
    margin: -45px 0 10px;
  }
  .swiper-slide img{
    height: 90px;
  }
  .featured-games .swiper-slide .game_overlay a img{
    height: auto;
  }
  .game_overlay p{
    font-size: 14px;
  }
}
</style>
