<template>
  <div>
    <Nav />
    <Plumbing />
  </div>
</template>

<script>
import Nav from '@/components/Home/Navbar'
import Plumbing from '@/components/Services/Plumbing/Plumbing'

export default {
  components: {
    Nav,
    Plumbing
  }
}
</script>