<template>
  <div class="main-container">
    <section class="page-container">
      <h1>Casino</h1>
      <div class="casino-wrapper">
        <div
          v-for="(promo, idx) in promotions"
          :key="idx">
          <img :src="`/images/casino/${promo.src}`">
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  head () {
    return {
      titleTemplate: '%s | Casino'
    }
  },
  data () {
    return {
      promotions: [
        { src: '7d2b013.jpg', title: 'Title', content: `Your lucky weekend? Find yourself on a 10x Blackjack winning streak this weekend and you'll be receiving $100!` },
        { src: '419cfaf.jpg', title: 'Title', content: `Your lucky weekend? Find yourself on a 10x Blackjack winning streak this weekend and you'll be receiving $100!` },
        { src: '0899326.jpg', title: 'Title', content: `Your lucky weekend? Find yourself on a 10x Blackjack winning streak this weekend and you'll be receiving $100!` }
      ]
    }
  }
}
</script>
<style scoped>
.casino-wrapper{
  display: grid;
  grid: auto / repeat(3, 1fr);
  grid-gap: 20px;
  margin-top: 45px;
}
.casino-wrapper > div{
  max-width: 100%;
  overflow: hidden;
}
.casino-wrapper > div img{
  max-width: 100%;
  border-radius: 10px;
}
@media(max-width: 500px){
  .casino-wrapper{
    display: grid;
    grid: repeat(3, 1fr) / repeat(1, 1fr);
    grid-gap: 15px;
  }
}
</style>
