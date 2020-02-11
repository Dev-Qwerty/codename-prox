<template>
  <div>
    <Nav />
    <Lwrapper />
    <Lbox />
    <LStackBox />
  </div>
</template>

<script>
import Nav from '@/components/Home/Navbar'
import Lwrapper from '@/components/Login/Lwrapper'
import Lbox from '@/components/Login/Lbox'
import LStackBox from '@/components/Login/LStackBox'

export default {
  components: {
    Nav,
    Lwrapper,
    Lbox,
    LStackBox
  }
}
</script>