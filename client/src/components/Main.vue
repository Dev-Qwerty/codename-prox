<template>
  <div>
    <Nav />
    <HrLine />
    <Lcontent />  
    <LandingBox />
    <Feat />
    <Footer />
  </div>
</template>

<script>
import Nav from '@/components/Navbar'
import HrLine from '@/components/HrLine'
import Lcontent from '@/components/LandingContent'
import LandingBox from '@/components/LandingBox'
import Feat from '@/components/FeatCards'
import Footer from '@/components/Footer'

export default {
  components: {
    Nav,
    HrLine,
    Lcontent,
    LandingBox,
    Feat,
    Footer
  }
}
</script>

<style>
</style>