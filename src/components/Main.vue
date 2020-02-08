<template>
  <div>
    <Nav />
    <HrLine />
    <Lcontent />  
    <LandingBox />
  </div>
</template>

<script>
import Nav from '@/components/Navbar'
import HrLine from '@/components/HrLine'
import Lcontent from '@/components/LandingContent'
import LandingBox from '@/components/LandingBox'

export default {
  components: {
    Nav,
    HrLine,
    Lcontent,
    LandingBox
  }
}
</script>

<style>
</style>