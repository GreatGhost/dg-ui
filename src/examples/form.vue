<template>
  <div>
    <dg-form :model="model" labelWidth="120px">
      <dg-form-item label="用户名">
        <dg-input v-model="model.username" clearable></dg-input>
      </dg-form-item>
      <dg-form-item label="是否毕业">
        <dg-switch v-model="model.isPass"></dg-switch>
      </dg-form-item>
    </dg-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      model: {
        username: "",
        isPass: false
      }
    };
  }
};
</script>
