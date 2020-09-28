<template>
    <div>
    <div v-if="paymentResponse == null">
        <center>
            <h1>Please do not refresh this page...</h1>
        </center>
    </div>
    <div v-else v-html="this.paymentResponse"></div>
    </div>
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
            document.paytm.submit()
        }, 1000);
    }
}

</script>

<style>

</style>