// composables/useFetch.ts
import { ref } from 'vue';

export function useFetch(url: string) {
  const data = ref(null);
  const error = ref(null);

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      data.value = await response.json();
    } catch (err) {
      error.value = err;
    }
  };

  return { data, error, fetchData };
}
<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { useFetch } from '@/composables/useFetch';

export default defineComponent({
  setup() {
    const { data, error, fetchData } = useFetch('https://api.example.com/data');

    onMounted(() => {
      fetchData();
    });

    return { data, error };
  }
});
</script>
