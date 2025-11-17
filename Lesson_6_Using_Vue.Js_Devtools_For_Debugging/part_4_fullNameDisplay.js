<template>
  <div>
    <p>{{ fullName }}</p>
  </div>
</template>

<script>
import { ref, computed } from 'vue';

export default {
  setup() {
    const firstName = ref('John');
    const lastName = ref('Doe');

    const fullName = computed(() => `${firstName.value} ${lastName.value}`);

    return { firstName, lastName, fullName };
  }
}
</script>
