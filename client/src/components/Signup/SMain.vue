<template>
  <div>
    <Nav />
    <Swrapper />
    <Sbox />
    <StackBox />
  </div>
</template>

<script>
import Nav from '@/components/Home/Navbar'
import Swrapper from '@/components/Signup/Swrapper'
import Sbox from '@/components/Signup/Sbox'
import StackBox from '@/components/Signup/StackBox'

export default {
  components: {
    Nav,
    Swrapper,
    Sbox,
    StackBox
  }
}
</script>