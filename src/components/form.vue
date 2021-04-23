<template>
  <div class="one-form">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "DgForm",
  props: {
    model: {
      type: Object,
      require: true
    },
    labelWidth: {
      type: String,
      default: "80px"
    }
  },
  provide() {
    return {
      Form: this
    };
  }
};
</script>
