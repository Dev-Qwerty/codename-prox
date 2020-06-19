<template>
  <div>
    <Nav />
    <blog />
  </div>
</template>

<script>

import Nav from '@/components/Home/Navbar.vue'
import blog from '@/components/construct/construct'

export default {
  components: {
    Nav,
    blog
  }
}
</script>