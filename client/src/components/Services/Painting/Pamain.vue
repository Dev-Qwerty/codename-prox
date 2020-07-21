<template>
  <div>
    <Nav />
    <Painting />
  </div>
</template>

<script>
import Nav from '@/components/Home/Navbar'
import Painting from '@/components/Services/Painting/Painting'

export default {
  components: {
    Nav,
    Painting
  }
}
</script>