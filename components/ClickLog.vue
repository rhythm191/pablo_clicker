<template>
  <div class="click-log">
    <ul class="click-log__list">
      <li
        v-for="(rate, index) in reverseRate"
        :key="index"
        :class="{
          valid: rate.isValid(),
          fast: rate.isFast(),
          slow: rate.isSlow()
        }"
      >
        {{ rate.rate }} フレームです。
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    rates: {
      type: Array,
      required: true
    }
  },
  computed: {
    reverseRate() {
      return this.rates.concat().reverse()
    }
  }
}
</script>

<style scoped>
.click-log {
  width: 100%;
  border: 1px solid #999;
  padding: 10px;
  height: 100%;
  overflow: scroll;
  text-align: left;
}
@media screen and (min-width: 768px) {
  .click-log {
    max-height: 300px;
  }
}

.click-log__list {
  margin: 0;
  padding: 0;
  list-style: none;
}

.valid {
  color: blue;
}
.fast {
  color: red;
}
.slow {
  color: orange;
}
</style>
