<template>
    <!-- <div v-if="this.orderStatus == null"> -->
    <div>
      <center><h2>Failed to place order!</h2></center>
  </div>
  <!-- <div v-else-if="this.orderStatus == '01'"> -->
      <!-- TODO: show failed messages -->
      <!-- <center><h2>Thanks for your order!</h2></center>
      <center>
          <p>Order ID: {{ this.orderDetails.orderID }}</p>
          <p>Service: {{ this.orderDetails.service.subserviceName }}</p>
          <p>Service Details</p>
          <p v-for="categories in orderDetails.service.categories" v-bind:key="categories.category">
              Service Name: {{ categories.category }}, quantity: {{ categories.quantity }}
          </p>
          <p>Total Amount: {{ this.orderDetails.totalAmount }}</p>
          <p>Address</p>
          <p>Name: {{ this.orderDetails.address.name }}</p>
          <p>Number: {{ this.orderDetails.address.phone }}</p>
          <p>Flat name/no: {{ this.orderDetails.address.line1 }}</p>
          <p>Street Address: {{ this.orderDetails.address.line2 }}</p>
          <p>District: {{ this.orderDetails.address.district }}</p>
          <p>Pincode: {{ this.orderDetails.address.pin }}</p>
          <p>Date: {{ this.orderDetails.date }}</p>
          <p>time: {{ this.orderDetails.time }}</p>
      </center>
  </div>
  <div v-else-if="this.orderStatus == '00'">
      <center>
          <h2>Failed to place order!</h2>
      </center>
  </div> -->
</template>

<script>
// import EventBus from '../../event-bus'
export default {
    // data() {
    //     return {
    //         orderStatus: null,
    //         orderDetails: null
    //     }
    // },
    // //TODO: use res code to check query params, give 001 for paylater success and check all valid codes for apy now in if condition and check paylater staus in else condition
    // created() {
    //     if(this.$route.query.length == undefined) {
    //         EventBus.$on("finalorderstatus", response => {
    //             if(response.CODE == '01') {
    //                 this.fetchOrderStatusPaylater(response)
    //             } else {
    //                 this.orderStatus = response.CODE
    //             }
    //         })
    //     } else {
    //        if(this.$route.query.code == '01') {
    //                 this.fetchOrderStatusPaynow(this.$route.query)
    //             } else {
    //                 this.orderStatus = this.$route.query.code
    //             }
    //     }
    // },
    // methods: {
    //     async fetchOrderStatusPaylater(response) {
    //         let url = 'http://localhost:3000/orders/orderstatus/' + response.ORDERID
    //         await this.$http.get(url)
    //             .then(response => {
    //                 this.orderDetails = response.data
    //             })
    //         this.orderStatus = response.CODE
    //     },
    //     async fetchOrderStatusPaynow(params) {
    //         let url = 'http://localhost:3000/orders/orderstatus/' + params.orderid
    //         await this.$http.get(url)
    //             .then(response => {
    //                 this.orderDetails = response.data
    //             })
    //         this.orderStatus = params.code
    //     }
    // }

}
</script>

<style>

</style>