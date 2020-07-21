<template>
    <div>
        <div>
            <center>
                <img src="../../assets/oops.png" class="failedimg">
                <h2>Failed to place order!</h2></center>
        </div>
        <div v-if="this.respCode">
            <center>
                <h4>{{ this.respMessage }}</h4>
                <h4>Don't worry, If your money is deducted, Please contact us</h4>
            </center>
        </div>
        <div>
            <center>
                <router-link :to="{path: '/services'}">
                    <button @click="backtoservices" class="backbtn" >Back to services</button>
                </router-link>
            </center>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            respCode: null,
            respMessage: null
        }
    },
    created() {
        // TODO: remove cookie after page is destroyed
        if(this.$cookies.get("r") == null) [
            this.$cookies.set("r", this.$route.query.r, '1d')
        ]
        this.respCode = this.$cookies.get("r")
        if(this.respCode == '227'){
            this.respMessage = 'Your payment has been declined by your bank. Please contact your bank for any queries.'
        } else if (this.respCode == '235') {
            this.respMessage = 'Wallet balance Insufficient.'
        } else if (this.respCode == '295') {
            this.respMessage = 'Your payment failed as the UPI ID entered is incorrect.'
        } else if (this.respCode == '334') {
            this.respMessage = 'Invalid Order ID'
        } else if (this.respCode == '400') {
            this.respMessage = 'Transaction status not confirmed yet.'
        } else if (this.respCode == '401') {
            this.respMessage = 'Your payment has been declined by your bank. Please contact your bank for any queries.'
        } else if (this.respCode == '402') {
            this.respMessage = 'Looks like the payment is not complete.'
        } else if (this.respCode == '810') {
            this.respMessage = 'Payment failed.'
        } else {
            this.respMessage = ''
        }
    },
    methods: {
        backtoservices() {
            this.$cookies.remove("cart")
            this.$cookies.remove("r")
        }
    }
}
</script>

<style>
.failedimg {
    width: 325px;
    margin-top: 100px;
    margin-bottom: 50px;
}
.backbtn {
    margin-top: 10px;
    width: 15%;
    height: 45px;
    border: none;
    color: #fff;
    background-color: rgb(15, 14, 14);
    border-radius: 5px;
}
</style>