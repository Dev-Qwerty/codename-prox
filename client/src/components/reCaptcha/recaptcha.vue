<template>
  <div 
  id="g-recaptcha"
  class="g-recaptcha"
  :data-sitekey="sitekey">
  </div>
</template>

<script>
export default {
  data () {
    return {
      sitekey: '6LfsCfYUAAAAAEKiFDDFZW9yqlCZpd3G3EFoDy2w',
      widgetId: 0
    }
  },
  methods: {
    execute () {
      window.grecaptcha.execute(this.widgetId)
    },
    reset () {
      window.grecaptcha.reset(this.widgetId)
    },
    render () {
      if (window.grecaptcha) {
        this.widgetId = window.grecaptcha.render('g-recaptcha', {
          sitekey: this.sitekey,
          size: 'invisible',
          // the callback executed when the user solve the recaptcha
          callback: (response) => {
            // emit an event called verify with the response as payload
            this.$emit('verify', response)
            // reset the recaptcha widget so you can execute it again
            this.reset() 
          }
        })
      }
    }
  },
  mounted () {
    // render the recaptcha widget when the component is mounted
    this.render()
  }
}
</script>