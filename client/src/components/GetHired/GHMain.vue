<template>
  <div>
    <Nav />
    <GHbox />
    <Footer />
  </div>
</template>

<script>
import Nav from '@/components/Home/Navbar'
import GHbox from '@/components/GetHired/GHbox'
import Footer from '@/components/Home/Footer'

export default {
  components: {
    Nav,
    GHbox,
    Footer
  }
}
</script>