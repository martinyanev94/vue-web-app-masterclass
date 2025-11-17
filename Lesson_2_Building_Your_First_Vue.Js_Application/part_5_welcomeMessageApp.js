<script>
export default {
  data() {
    return {
      welcomeMessage: 'Welcome to My First Vue App!'
    }
  },
  methods: {
    changeMessage() {
      this.welcomeMessage = 'Let’s build something amazing together!';
    }
  }
}
</script>
<template>
  <div id="app">
    <header>
      <h1>{{ welcomeMessage }}</h1>
      <button @click="changeMessage">Click Me!</button>
    </header>
  </div>
</template>
