<template>
  <div class="click-button-wrapper">
    <button v-if="state === 'start'" class="click-button" @click="start">Start</button>
    <button v-else-if="state === 'measure'" class="click-button" @click="measure">Click</button>
    <button v-else class="click-button" disabled>Select rate</button>
  </div>
  
</template>

<script>
export default {
  props: {
    state: {
      type: String,
      required: true
    }
  },

  data() {
    return {
      startTime: performance.now()
    }
  },

  methods: {
    start() {
      this.startTime = performance.now();
      this.$emit('start');
    },
    measure() {
      const endTime = performance.now();

      const meatureTime = endTime - this.startTime;
      
      this.startTime = performance.now();
      this.$emit('measure', meatureTime);
    }
  }
}
</script>


<style scoped>

</style>