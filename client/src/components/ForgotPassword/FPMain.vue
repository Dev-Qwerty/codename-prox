<template>
  <div>
    <Nav />
    <FPwrapper />
    <FPbox />
    <FPStackBox />
  </div>
</template>

<script>
import Nav from '@/components/Home/Navbar'
import FPwrapper from '@/components/ForgotPassword/FPwrapper'
import FPbox from '@/components/ForgotPassword/FPbox'
import FPStackBox from '@/components/ForgotPassword/FPStackBox'

export default {
  components: {
    Nav,
    FPwrapper,
    FPbox,
    FPStackBox
  }
}
</script>