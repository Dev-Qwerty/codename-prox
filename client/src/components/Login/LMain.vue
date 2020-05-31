<template>
  <div>
    <Nav />
    <Lwrapper />
    <box />
    <LStackBox />
  </div>
</template>

<script>
import Nav from '@/components/Home/Navbar'
import Lwrapper from '@/components/Login/Lwrapper'
import box from '@/components/Login/box'
import LStackBox from '@/components/Login/LStackBox'

export default {
  components: {
    Nav,
    Lwrapper,
    box,
    LStackBox
  }
}
</script>