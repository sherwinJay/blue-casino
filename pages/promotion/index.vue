<template>
  <div class="main-container">
    <section class="page-container promo-wrapper">
      <h1>Promotions</h1>
      <div class="promo">
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
export default {
  data () {
    return {
      promotions: [
        { src: 'promo_banner_02.jpg', title: 'Title', content: `Your lucky weekend? Find yourself on a 10x Blackjack winning streak this weekend and you'll be receiving $100!` },
        { src: 'promo_banner_03.jpg', title: 'Title', content: `Your lucky weekend? Find yourself on a 10x Blackjack winning streak this weekend and you'll be receiving $100!` },
        { src: 'promo_banner_04.jpg', title: 'Title', content: `Your lucky weekend? Find yourself on a 10x Blackjack winning streak this weekend and you'll be receiving $100!` },
        { src: 'promo_banner_01.jpg', title: 'Title', content: `Your lucky weekend? Find yourself on a 10x Blackjack winning streak this weekend and you'll be receiving $100!` },
        { src: 'livecasino-promo-banner.png', title: 'Title', content: `Your lucky weekend? Find yourself on a 10x Blackjack winning streak this weekend and you'll be receiving $100!` },
        { src: 'promo_banner_05_V4.jpg', title: 'Title', content: `Your lucky weekend? Find yourself on a 10x Blackjack winning streak this weekend and you'll be receiving $100!` }
      ]
    }
  }
}
</script>
<style scoped>
.promo{
  display: grid;
  grid: auto / repeat(4, 1fr);
  grid-gap: 20px;
  margin-top: 45px;
}
.promo > div{
  max-width: 100%;
  overflow: hidden;
}
.promo > div img{
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
@media(max-width: 500px){
  .promo{
    display: grid;
    grid: repeat(6, 1fr) / repeat(1, 1fr);
    grid-gap: 20px;
    margin-top: 45px;
  }
}
</style>
