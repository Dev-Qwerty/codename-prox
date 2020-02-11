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
import Nav from '@/components/Home/Navbar'
import HrLine from '@/components/Home/HrLine'
import Lcontent from '@/components/Home/LandingContent'
import LandingBox from '@/components/Home/LandingBox'
import Feat from '@/components/Home/FeatCards'
import Footer from '@/components/Home/Footer'

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