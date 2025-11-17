import { ref } from 'vue';

export function useInput(initialValue: string) {
    const value = ref(initialValue);

    const updateValue = (newValue: string) => {
        value.value = newValue;
    };

    return { value, updateValue };
}
