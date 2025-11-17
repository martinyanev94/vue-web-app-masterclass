npx create-nuxt-app my-app
<template>
  <div>
    <h1>Welcome to My Nuxt App!</h1>
  </div>
</template>

<script>
export default {
  async asyncData() {
    // Fetch data on the server-side
    const data = await fetch('https://api.example.com/data').then(res => res.json());
    return { data };
  }
}
</script>
