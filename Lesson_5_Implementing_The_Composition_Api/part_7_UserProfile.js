<template>
  <div>
    <h1>{{ fullName }}</h1>
    <p>{{ user.email }}</p>
    <button @click="updateEmail">Update Email</button>
  </div>
</template>

<script>
import { ref, computed } from 'vue';

export default {
  setup() {
    const user = ref({
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@example.com'
    });

    const updateEmail = () => {
      user.value.email = prompt('Enter new email:', user.value.email);
    };

    const fullName = computed(() => `${user.value.firstName} ${user.value.lastName}`);

    return { user, updateEmail, fullName };
  }
}
</script>
