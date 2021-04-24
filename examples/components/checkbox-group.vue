<template>
  <div class="checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "DgCheckboxGroup",
  props: {
    value: null
  },
  provide() {
    return {
      CheckboxGroup: this
    };
  }
};
</script>
