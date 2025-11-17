import { ref } from 'vue';

export function useUser() {
  const user = ref({
    name: 'John Doe',
    email: 'john@example.com'
  });

  const updateEmail = () => {
    user.value.email = prompt('Enter new email:', user.value.email);
  };

  return { user, updateEmail };
}
<template>
  <div>
    <h1>{{ user.name }}</h1>
    <p>{{ user.email }}</p>
    <button @click="updateEmail">Update Email</button>
  </div>
</template>

<script>
import { useUser } from './useUser';

export default {
  setup() {
    const { user, updateEmail } = useUser();
    return { user, updateEmail };
  }
}
</script>
