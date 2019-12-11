<template>
  <div class="click-button-wrapper">
    <!-- <button v-if="state === 'start'" class="click-button" @click="start">
      Start
    </button> -->
    <button class="click-button" @click="measure">
      Click
    </button>
    <!-- <button v-else class="click-button" disabled>Select rate</button> -->
  </div>
</template>

<script>
import _ from 'lodash'

export default {
  // props: {
  //   state: {
  //     type: String,
  //     required: true
  //   }
  // },

  data() {
    return {
      startTime: performance.now()
    }
  },

  methods: {
    start() {
      this.startTime = performance.now()
      this.$emit('start')
    },
    measure() {
      const endTime = performance.now()
      const meatureTime = endTime - this.startTime

      this.$emit('measure', this.ms2frame(meatureTime))

      this.startTime = performance.now()
    },
    ms2frame(ms) {
      return _.ceil((ms * 60) / 1000)
    }
  }
}
</script>

<style scoped></style>
