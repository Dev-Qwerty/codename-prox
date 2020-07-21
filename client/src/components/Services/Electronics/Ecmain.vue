<template>
  <div>
    <Nav />
    <Electronics />
  </div>
</template>

<script>
import Nav from '@/components/Home/Navbar'
import Electronics from '@/components/Services/Electronics/Electronics'

export default {
  components: {
    Nav,
    Electronics
  }
}
</script>