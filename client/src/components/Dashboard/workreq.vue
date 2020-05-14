<template>
  <div class="wr-wrapper">
    <div class="wr-grid">
      <div class="incomming-req"></div>
      <div class="your-schedule"></div>
    </div>
  </div>    
</template>

<script>
export default {
    
}
</script>

<style scoped>
  .wr-grid {
    width: 100%;
    height: 676px;
    display: grid;
    grid-template-columns: 2fr 1fr;
  }
  .incomming-req {
    background-color: red;
  }
  .your-schedule {
    background-color: aqua;
  }
</style>