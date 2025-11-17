const eventLoggerMixin = {
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    incrementCounter() {
      this.counter++;
      console.log(`Counter incremented to: ${this.counter}`);
    },
  },
};

export default {
  mixins: [eventLoggerMixin],
  template: `
    <div>
      <button @click="incrementCounter">Increment</button>
      <p>Counter: {{ counter }}</p>
    </div>
  `,
};
<template>
  <div>
    <button @click="incrementCounter">Increment in Component A</button>
    <p>Counter: {{ counter }}</p>
  </div>
</template>

<script>
import eventLoggerMixin from './eventLoggerMixin';

export default {
  mixins: [eventLoggerMixin],
};
</script>
