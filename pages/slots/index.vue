<template>
  <div class="main-container">
    <div class="page-container">
      <Slots />
    </div>
  </div>
</template>
<script>
import Slots from '~/components/slots-api/SlotGameAPI'
export default {
  head () {
    return {
      titleTemplate: '%s | Slots'
    }
  },
  components: {
    Slots
  }
}
</script>
<style scoped>

</style>
