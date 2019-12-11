<template>
  <div>
    <ClickButton @measure="appendRate"></ClickButton>
    <ClickLog :rates="rates"></ClickLog>
  </div>
</template>

<script>
import ClickButton from './ClickButton'
import ClickLog from './ClickLog'

export default {
  components: {
    ClickButton,
    ClickLog
  },

  data() {
    return {
      rates: []
    }
  },

  methods: {
    appendRate(value) {
      console.log('hoge')
      this.rates.push(value)
    }
  }
}
</script>
