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
  components: {
    Slots
  }
}
</script>
<style scoped>

</style>
