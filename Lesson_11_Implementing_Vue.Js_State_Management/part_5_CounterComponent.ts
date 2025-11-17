<template>
    <div>
        <h1>Count: {{ getCount }}</h1>
        <button @click="incrementCount">Increment</button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
    setup() {
        const store = useStore();

        const incrementCount = () => {
            store.dispatch('increment');
        };

        return {
            getCount: () => store.getters.getCount,
            incrementCount,
        };
    },
});
</script>
