// utils.ts
export const unusedFunction = () => {
    console.log("This function is never used");
};

export const usedFunction = () => {
    console.log("This function is used!");
};

// MyComponent.vue
<template>
  <div>
    <h1>Hello Vue!</h1>
  </div>
</template>

<script lang="ts">
import { usedFunction } from './utils'; // only this will be included

export default {
  mounted() {
    usedFunction();
  }
}
</script>
