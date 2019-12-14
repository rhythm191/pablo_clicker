<template>
  <div class="app-container">
    <ClickLog :rates="clickRates"></ClickLog>
    <RateSelector
      :valid-rate="validRate"
      @change="changeValidRate"
    ></RateSelector>
    <ClickButton @measure="appendRate"></ClickButton>
  </div>
</template>

<script>
import Rate from '../assets/rate'

import ClickButton from './ClickButton'
import RateSelector from './RateSelector'
import ClickLog from './ClickLog'

export default {
  components: {
    ClickButton,
    RateSelector,
    ClickLog
  },

  data() {
    return {
      validRate: 7,
      clickRates: [new Rate(3, 3)]
    }
  },

  methods: {
    appendRate(value) {
      this.clickRates.push(new Rate(value, this.validRate))
    },
    changeValidRate(value) {
      this.validRate = value
    }
  }
}
</script>

<style scoped>
.app-container {
  margin: 0 auto;
  height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: center;
}

@media screen and (max-width: 768px) {
  .app-container {
    justify-content: flex-end;
  }
}
</style>
