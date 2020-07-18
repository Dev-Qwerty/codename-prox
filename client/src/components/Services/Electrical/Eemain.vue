<template>
  <div>
    <Nav />
    <Electrical />
  </div>
</template>

<script>
import Nav from '@/components/Home/Navbar'
import Electrical from '@/components/Services/Electrical/Electrical'

export default {
  components: {
    Nav,
    Electrical
  }
}
</script>