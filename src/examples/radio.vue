<template>
  <div>
    <dg-radio :label="0" v-model="gender">男</dg-radio>
    <dg-radio :label="1" v-model="gender">女</dg-radio>
    <dg-radio-group v-model="user.gender">
      <dg-radio :label="0">男</dg-radio>
      <dg-radio :label="1">女</dg-radio>
    </dg-radio-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gender: 0,
      user: {
        gender: 0
      }
    };
  }
};
</script>
