<template>
  <div>
    <Nav />
    <Carpentry />
  </div>
</template>

<script>
import Nav from '@/components/Home/Navbar'
import Carpentry from '@/components/Services/Carpentry/Carpentry'

export default {
  components: {
    Nav,
    Carpentry
  }
}
</script>