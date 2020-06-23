<template>
  <div>
    <Nav />
    <AAwrapper />
    <AAbox />
    <AAStackBox />
  </div>
</template>

<script>
import Nav from '@/components/Home/Navbar'
import AAwrapper from '@/components/AddAddress/AAwrapper'
import AAbox from '@/components/AddAddress/AAbox'
import AAStackBox from '@/components/AddAddress/AAStackBox'

export default {
  components: {
    Nav,
    AAwrapper,
    AAbox,
    AAStackBox
  }
}
</script>