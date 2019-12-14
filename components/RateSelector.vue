<template>
  <div class="rate-selector">
    <select @change="$emit('change', Number($event.target.value))">
      <option
        v-for="(weapon, index) in weapons"
        :key="index"
        :value="weapon.rate"
        >{{ weapon.name }} ({{ weapon.rate }} フレーム)</option
      >
    </select>
  </div>
</template>

<script>
export default {
  props: {
    validRate: {
      type: Number,
      default: 7
    }
  },
  data() {
    return {
      weapons: [
        { name: 'パブロ', rate: 7 },
        { name: 'ボトルガイザー', rate: 8 },
        { name: 'ホクサイ', rate: 11 }
      ]
    }
  }
}
</script>

<style scoped>
.rate-selector {
  margin: 10px auto;
}
select {
  padding: 8px 4px;
  border: 1px solid #333;
  font-size: 16px;
}
</style>
