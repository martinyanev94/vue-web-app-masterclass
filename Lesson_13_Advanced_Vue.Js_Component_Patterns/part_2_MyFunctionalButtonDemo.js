const MyFunctionalButton = (props) => {
  return (
    <button class={`btn ${props.type}`} onClick={props.onClick}>
      {props.label}
    </button>
  );
};
<template>
  <my-functional-button
    type="primary"
    label="Click Me"
    @click="handleClick"
  ></my-functional-button>
</template>

<script>
import MyFunctionalButton from './MyFunctionalButton';

export default {
  components: {
    MyFunctionalButton
  },
  methods: {
    handleClick() {
      alert('Button clicked!');
    }
  }
};
</script>
