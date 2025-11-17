<template>
  <div class="modal">
    <div class="modal-header">
      <slot name="header">Default Header</slot>
    </div>
    <div class="modal-body">
      <slot>Default Body Content</slot>
    </div>
    <div class="modal-footer">
      <slot name="footer">Default Footer</slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
};
</script>
<template>
  <modal>
    <template v-slot:header>
      <h1>My Custom Modal Header</h1>
    </template>
    <p>This is my custom modal content!</p>
    <template v-slot:footer>
      <button @click="closeModal">Close</button>
    </template>
  </modal>
</template>
