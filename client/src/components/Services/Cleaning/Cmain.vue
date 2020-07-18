<template>
  <div>
    <Nav />
    <Cleaning />
  </div>
</template>

<script>
import Nav from '@/components/Home/Navbar'
//import HrLine from '@/components/Home/HrLine'
import Cleaning from '@/components/Services/Cleaning/Cleaning'

export default {
  components: {
    Nav,
    Cleaning
  }
}
</script>