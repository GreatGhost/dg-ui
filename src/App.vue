<template>
  <div id="app">
    <SwitchDemo></SwitchDemo>
  </div>
</template>

<script>
import ButtonDemos from './examples/buttons'
import DialogDemos from './examples/dialog'
import DemoSync from './components/demo'
import InputDemo from './examples/input'
import SwitchDemo from './examples/switch'
export default {
  name: "App",
  data(){
    return {
      money:100,
      visible:false,
      aShow:false
    }
  },
  components:{
    ButtonDemos,
    DialogDemos,
    DemoSync,
    InputDemo,
    SwitchDemo
  },
  methods:{
    login(e){
      console.log('单击事件',e)
    },
    fn1(e){
      this.money=e;
    },
    fn2(e){
      this.visible=e;
    }
  }
};
</script>

<style lang="scss">
  .btn-group{
    .one-button{
      margin-right: 20px;
    }
  }
  // 进入
  .fade-enter{
    opacity: 0;
  }
  // .fade-enter-to{
  //   opacity: 1;
  // }
  .fade-enter-active{
    transition:opacity 1s;
  }
// .fade-enter-active, .fade-leave-active {
//   transition: opacity .5s;
// }
  // 离开
  // .fade-leave{
  //   opacity: 1;
  // }
  // .fade-leave-to{
  //   opacity: 0;
  // }
  // .fade-leave-active{
  //   transition: all .5 ease-out;
  // }
</style>
