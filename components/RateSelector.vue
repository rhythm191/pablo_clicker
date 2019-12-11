<template>
  <div>
    <select @change="$emit('change', $event.target.value)">
      <option
        v-for="(weapon, index) in weapons"
        :key="index"
        :value="weapon.rate"
        >{{ weapon.name }}</option
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
