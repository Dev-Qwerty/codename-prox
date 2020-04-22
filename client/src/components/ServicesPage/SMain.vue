<template>
  <div>
    <Nav />
    <Swrapper />
    <Footer />
  </div>
</template>

<script>
import Nav from '@/components/Home/Navbar'
import Swrapper from '@/components/ServicesPage/Swrapper'
import Footer from '@/components/Home/Footer'

export default {
  components: {
    Nav,
    Swrapper,
    Footer
  }
}
</script>