<template>
  <div>
    <Nav />
    <HrLine />
    <Lcontent />  
    <LandingBox />
    <Feat />
  </div>
</template>

<script>
import Nav from '@/components/Navbar'
import HrLine from '@/components/HrLine'
import Lcontent from '@/components/LandingContent'
import LandingBox from '@/components/LandingBox'
import Feat from '@/components/FeatCards'

export default {
  components: {
    Nav,
    HrLine,
    Lcontent,
    LandingBox,
    Feat
  }
}
</script>

<style>
</style>