<template>
  <div class="click-button-wrapper">
    <button class="click-button" @click="measure">
      Click
    </button>
  </div>
</template>

<script>
import _ from 'lodash'

export default {
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

<style scoped>
.click-button {
  width: 200px;
  height: 200px;
  color: #fff;
  background: #f30000;
  border-radius: 50%;
  font-size: 60px;
  cursor: pointer;
  margin: 20px auto;
  position: relative;
}
</style>
