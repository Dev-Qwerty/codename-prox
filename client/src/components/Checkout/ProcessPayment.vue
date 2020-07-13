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
        // TODO: FIX REFRESH PROBLEM
        EventBus.$on("payment", response => {
            this.paymentResponse = response
        })
        setInterval(() => {
            document.f1.submit()
        }, 1000);
    }
}

</script>

<style>

</style>