// BaseButton.vue
<template>
  <button :class="className">{{ label }}</button>
</template>

<script lang="ts">
export default {
  props: {
    label: {
      type: String,
      required: true
    },
    className: {
      type: String,
      default: ""
    }
  }
}
</script>

<style scoped>
button {
  font-size: 16px;
  padding: 10px;
}
</style>
