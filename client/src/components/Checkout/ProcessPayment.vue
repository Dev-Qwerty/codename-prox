<template>
  <div v-html="this.paymentResponse"></div>
</template>

<script>
import EventBus from '../../event-bus'

export default {
    data() {
        return {
            paymentResponse: null
        }
    },
    mounted() {
        EventBus.$on("payment", response => {
            this.paymentResponse = response
        })
        setTimeout(() => {
            document.f1.submit()
        }, 1000);
    }
}

</script>

<style>

</style>