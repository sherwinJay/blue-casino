<template>
  <div class="game-category">
    <ul>
      <li
        v-for="(ct, idx) in createCategories"
        :key="idx">
        <button
          :class="`category-${ct.categoryName} ${ct.categoryRaw === activeCategory ? 'active' : ''}`"
          :data-category="ct.categoryRaw"
          @click="switchCategory">
          {{ ct.categoryName }}
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
  data () {
    return {
      defaultCategories: [
        { categoryName: 'all', categoryRaw: '' },
        { categoryName: 'hot', categoryRaw: ' ' },
        { categoryName: 'slots', categoryRaw: 'slots' }
      ]
    }
  },
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

      // edit category name here
      this.categories.map((category) => {
        if (category === null || category === 'slots') {
          return false
        } else {
          const editCategoryName = () => {
            if (category === 'fishing_game') {
              return 'fishing'
            } else if (category === 'card_games' || category === 'table_and_cards' || category === 'table_games') {
              return 'table'
            } else if (category === 'scratch_card') {
              return 'scratch'
            } else if (category === 'fixed_odds') {
              return 'fixed odds'
            } else if (category === 'live_dealer') {
              return 'live dealer'
            } else if (category === 'video_poker') {
              return 'video poker'
            } else {
              return category
            }
          }
          return newCategories.push({
            categoryName: editCategoryName(),
            categoryRaw: category
          })
        }
      })
      // console.table(this.defaultCategories.concat(newCategories))
      return this.defaultCategories.concat(newCategories)
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
