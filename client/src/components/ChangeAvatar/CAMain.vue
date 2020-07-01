<template>
  <div>
    <CAwrapper />
    <CAbox />
    <CAStackBox />
  </div>
</template>

<script>
import CAwrapper from '@/components/ChangeAvatar/CAwrapper'
import CAbox from '@/components/ChangeAvatar/CAbox'
import CAStackBox from '@/components/ChangeAvatar/CAStackBox'

export default {
  components: {
    CAwrapper,
    CAbox,
    CAStackBox
  }
}
</script>