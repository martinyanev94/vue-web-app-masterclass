<template>
  <div>{{ counter }}</div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0,
      intervalId: null,
    };
  },
  created() {
    this.intervalId = setInterval(() => {
      this.counter++;
    }, 1000);
  },
  beforeDestroy() {
    clearInterval(this.intervalId);
  },
};
</script>
