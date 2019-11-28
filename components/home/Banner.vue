<template>
  <div v-swiper:mySwiper="swiperOption">
    <div class="swiper-wrapper">
      <div  v-for="(banner, idx) in banners" :key="idx" class="swiper-slide">
        <img :src="banner">
      </div>
    </div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
    <div class="swiper-pagination swiper-pagination-bullets"></div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      banners: [ '/images/background2.jpg', '/images/sportsbanner.jpg', '/images/Fishing-Background.jpg' ],
      swiperOption: {
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        },
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 1,
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true
        },
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
.main-container .swiper-container img{
  width: 100%;
}
</style>
