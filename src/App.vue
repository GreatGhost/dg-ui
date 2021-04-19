<template>
  <div id="app">

    <!-- 按钮组件封装 -->
    <div class="btn-group">
      <dg-button type="primary" >按钮</dg-button>
      <dg-button type="danger">按钮</dg-button>
      <dg-button type="warning">按钮</dg-button>
      <dg-button type="info">按钮</dg-button>
      <dg-button type="success">按钮</dg-button>
      <dg-button :plain="true">镂空</dg-button>
    </div>
    
    <!-- 鏤空 -->
    
    <div class="btn-group">
      <dg-button plain  type="primary" >按钮</dg-button>
      <dg-button plain type="danger">按钮</dg-button>
      <dg-button plain type="warning">按钮</dg-button>
      <dg-button plain type="info">按钮</dg-button>
      <dg-button plain type="success">按钮</dg-button>
      <dg-button plain >镂空</dg-button>
    </div>
  </div>
</template>

<script>
import DgButton from './components/DgButton.vue';
export default {
  name: "App",
  components: {DgButton}
};
</script>

<style lang="scss">
  .btn-group{
    .one-button{
      margin-right: 20px;
    }
  }
</style>
