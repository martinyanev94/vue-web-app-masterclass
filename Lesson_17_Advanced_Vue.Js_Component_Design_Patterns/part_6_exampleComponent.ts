// loggerMixin.ts
import { ComponentOptions } from 'vue';

export const loggerMixin: ComponentOptions = {
  mounted() {
    console.log(`Component: ${this.$options.name} has been mounted.`);
  }
};
<template>
  <div class="example-component">
    <h2>Example Component</h2>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { loggerMixin } from './loggerMixin';

export default defineComponent({
  mixins: [loggerMixin],
  name: 'ExampleComponent'
});
</script>

<style scoped>
.example-component {
  color: purple;
}
</style>
