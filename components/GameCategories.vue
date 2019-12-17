<template>
  <div class="game-category">
    <ul>
      <li
        v-for="ct in createCategories"
        :key="ct.category.categoryRaw">
        <button
          :class="{active: ct.category.categoryRaw == activeCategory}"
          :data-category="ct.category.categoryRaw"
          @click="switchCategory">
          {{ ct.category.categoryName }}
        </button>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: [
    'activeCategory',
    'categories',
    'switchCategory'
  ],
  computed: {
    createCategories () {
      const newCategories = []
      // function getSlots () {
      //   for (let i = 0; i < this.categories.length; i++) {
      //     if (this.categories[i] === 'slots') {
      //       return this.categories.splice(i, 1)
      //     }
      //   }
      // }
      // console.log(getSlots)
      // if (this.categories[0] !== 'slots') {
      // }
      this.categories.map((idx) => {
        if (idx === null) {
          return test
        } else {
          const editCategoryName = () => {
            if (idx === 'fishing_game') {
              return 'fishing'
            } else if (idx === 'card_games' || idx === 'table_and_cards' || idx === 'table_games') {
              return 'table'
            } else if (idx === 'scratch_card') {
              return 'scratch'
            } else if (idx === 'fixed_odds') {
              return 'fixed odds'
            } else if (idx === 'live_dealer') {
              return 'live dealer'
            } else if (idx === 'video_poker') {
              return 'video poker'
            } else {
              return idx
            }
          }
          return newCategories.push({
            category: {
              categoryName: editCategoryName(),
              categoryRaw: idx
            }
          })
        }
      })
      return newCategories
    }
  }
}
</script>
<style scoped>
.game-categories li{
  display: inline-block;
  margin-right: 10px;
}
.game-categories li button{
  background-color: transparent;
  color: #fff;
  border: 0;
  padding: 5px 15px;
}
.game-categories li button:hover,
.game-categories li button.active{
  background-color: #e8b238;
  color: #000;
  border-radius: 15px;
}
</style>
