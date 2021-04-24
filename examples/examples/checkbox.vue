<template>
  <div>
    <dg-checkbox v-model="isShow">是否展示</dg-checkbox>
    <dg-checkbox v-model="graduate">是否毕业</dg-checkbox>

    <dg-checkbox-group v-model="list">
      <dg-checkbox label="喝酒"></dg-checkbox>
      <dg-checkbox label="抽烟"></dg-checkbox>
      <dg-checkbox label="吃饭"></dg-checkbox>
    </dg-checkbox-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: false,
      graduate: false,
      list: ["喝酒", "抽烟", "吃饭"]
    };
  }
};
</script>
