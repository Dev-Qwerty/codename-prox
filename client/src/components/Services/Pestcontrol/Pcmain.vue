<template>
  <div>
    <Nav />
    <Pestcontrol />
  </div>
</template>

<script>
import Nav from '@/components/Home/Navbar'
import Pestcontrol from '@/components/Services/Pestcontrol/Pestcontrol'

export default {
  components: {
    Nav,
    Pestcontrol
  }
}
</script>