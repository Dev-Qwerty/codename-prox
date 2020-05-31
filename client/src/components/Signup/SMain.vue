<template>
  <div>
    <Nav />
    <Swrapper />
    <box />
    <StackBox />
  </div>
</template>

<script>
import Nav from '@/components/Home/Navbar'
import Swrapper from '@/components/Signup/Swrapper'
import box from '@/components/Signup/box'
import StackBox from '@/components/Signup/StackBox'

export default {
  components: {
    Nav,
    Swrapper,
    box,
    StackBox
  }
}
</script>