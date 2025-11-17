import { ref, watch } from 'vue';

export function useInputWithFeedback() {
    const inputValue = ref('');

    const validateInput = (newValue: string) => {
        // Add validation logic here, e.g., ensuring the input is not empty
        if (!newValue.trim()) {
            alert("Input can't be empty!");
        }
    };

    watch(inputValue, validateInput);

    return { inputValue };
}
