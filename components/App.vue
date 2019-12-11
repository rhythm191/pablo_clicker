<template>
  <div>
    <ClickButton @measure="appendRate"></ClickButton>
    <RateSelector
      :valid-rate="validRate"
      @change="changeValidRate"
    ></RateSelector>
    <ClickLog :rates="clickRates"></ClickLog>
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
