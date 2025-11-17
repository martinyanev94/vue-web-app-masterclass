<template>
    <div>
        <label for="textInput">Type something:</label>
        <input id="textInput" v-model="inputValue" @input="updateInput">
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useInput } from './useInput';

export default defineComponent({
    setup() {
        const { value: inputValue, updateValue: updateInput } = useInput('');

        return { inputValue, updateInput };
    }
});
</script>
