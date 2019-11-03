<template>
  <div class="click-log">
    <ul class="click-log__list">
      <li v-for="click_rate in click_rates">{{ click_rate }}Fで入力しました。</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    click_rates: {
      type: Array,
      default: []
    }
  }
}
</script>

<style scoped>
  .click-log {
    border: 1px solid #999;
    padding: 10px;
  }

  .click-log__list {
    margin: 0;
    list-style: none;
  }
</style>