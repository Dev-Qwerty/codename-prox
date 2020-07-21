<template>
  <div>
    <Nav />
    <Photography />
  </div>
</template>

<script>
import Nav from '@/components/Home/Navbar'
import Photography from '@/components/Services/Photography/Photography'

export default {
  components: {
    Nav,
    Photography
  }
}
</script>