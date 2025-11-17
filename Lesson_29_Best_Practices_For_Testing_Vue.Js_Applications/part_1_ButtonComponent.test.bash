npm install --save-dev @vue/test-utils jest
<template>
  <button @click="handleClick">{{ label }}</button>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    }
  },
  methods: {
    handleClick() {
      this.$emit('btn-click');
    }
  }
}
</script>
import { shallowMount } from '@vue/test-utils';
import Button from '@/components/Button.vue';

describe('Button.vue', () => {
  it('renders props.label when passed', () => {
    const label = 'Click Me';
    const wrapper = shallowMount(Button, {
      props: { label }
    });
    expect(wrapper.text()).toMatch(label);
  });

  it('emits an event when clicked', () => {
    const wrapper = shallowMount(Button);
    wrapper.trigger('click');
    expect(wrapper.emitted('btn-click')).toBeTruthy();
  });
});
