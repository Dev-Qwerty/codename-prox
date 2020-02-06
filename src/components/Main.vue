<template>
  <div>
    <Nav />
    <Lcontent />  
    <LandingBox />
  </div>
</template>

<script>
import Nav from '@/components/Navbar'
import Lcontent from '@/components/LandingContent'
import LandingBox from '@/components/LandingBox'

export default {
  components: {
    Nav,
    Lcontent,
    LandingBox
  }
}
</script>

<style>
</style>