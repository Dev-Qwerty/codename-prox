<template>
  <div>
    <Nav />
    <Swrapper />
    <Sbox />
    <SignStackBox />
  </div>
</template>

<script>
import Nav from '@/components/Home/Navbar'
import Swrapper from '@/components/Signup/Swrapper'
import Sbox from '@/components/Signup/Sbox'
import SignStackBox from '@/components/Signup/SignStackBox'

export default {
  components: {
    Nav,
    Swrapper,
    Sbox,
    SignStackBox
  }
}
</script>