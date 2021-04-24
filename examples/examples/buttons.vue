<template>
    <div>
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


    <!-- 圆角 -->

    <div class="btn-group">
      <dg-button round  type="primary" >按钮</dg-button>
    </div>


    <!-- iconfont -->
    
    <div class="btn-group">
      <dg-button icon="iconashbin" circle type="primary" ></dg-button>
      <dg-button icon="iconashbin" round type="primary" >删除</dg-button>
    </div>

    <!--组件禁用 -->

    <div class="btn-group">
      <dg-button disabled @click="login" >登录</dg-button>
      <dg-button disabled type="primary" @click="login" >登录</dg-button>
      <dg-button disabled type="danger" @click="login" >登录</dg-button>

    </div>
    </div>
</template>