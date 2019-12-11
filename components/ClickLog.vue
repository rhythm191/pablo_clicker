<template>
  <div class="click-log">
    <ul class="click-log__list">
      <li v-for="(item, index) in rates.reverse()" :key="index">
        {{ item }} フレームです。
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
  }
}
</script>

<style scoped>
.click-log {
  border: 1px solid #999;
  padding: 10px;
  height: 300px;
  overflow: scroll;
  text-align: left;
}

.click-log__list {
  margin: 0;
  list-style: none;
}
</style>
