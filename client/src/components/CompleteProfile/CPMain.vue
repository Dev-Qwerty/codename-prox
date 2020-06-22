<template>
  <div>
    <Nav />
    <CPwrapper />
    <CPbox />
    <CPStackBox />
  </div>
</template>

<script>
import Nav from '@/components/Home/Navbar'
import CPwrapper from '@/components/CompleteProfile/CPwrapper'
import CPbox from '@/components/CompleteProfile/CPbox'
import CPStackBox from '@/components/CompleteProfile/CPStackBox'

export default {
  components: {
    Nav,
    CPwrapper,
    CPbox,
    CPStackBox
  }
}
</script>