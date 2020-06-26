<template>
  <div>
    <!--<Nav />-->
    <CEwrapper />
    <CEbox />
    <CEStackBox />
  </div>
</template>

<script>
//import Nav from '@/components/Home/Navbar'
import CEwrapper from '@/components/ConfirmEmail/CEwrapper'
import CEbox from '@/components/ConfirmEmail/CEbox'
import CEStackBox from '@/components/ConfirmEmail/CEStackBox'

export default {
  components: {
    //Nav,
    CEwrapper,
    CEbox,
    CEStackBox
  }
}
</script>