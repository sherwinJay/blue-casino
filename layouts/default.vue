<template>
  <div>
    <Header />
    <SidebarNav />
    <nuxt />
    <Footer />
  </div>
</template>
<script>
import Header from '~/components/Header'
import SidebarNav from '~/components/SidebarNav'
import Footer from '~/components/Footer'
export default {
  components: {
    Header,
    SidebarNav,
    Footer
  }
}
</script>
<style scoped>
body{
  background-color: #000 !important;
}
</style>
