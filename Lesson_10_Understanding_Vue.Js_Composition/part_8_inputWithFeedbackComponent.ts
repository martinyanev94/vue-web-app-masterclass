<template>
    <div>
        <label for="inputWithFeedback">Enter something:</label>
        <input id="inputWithFeedback" v-model="inputValue" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useInputWithFeedback } from './useInputWithFeedback';

export default defineComponent({
    setup() {
        const { inputValue } = useInputWithFeedback();

        return { inputValue };
    }
});
</script>
