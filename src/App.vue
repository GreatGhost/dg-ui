<template>
  <div id="app">
    <FormDemo></FormDemo>
  </div>
</template>

<script>
import ButtonDemos from "./examples/buttons";
import DialogDemos from "./examples/dialog";
import DemoSync from "./components/demo";
import InputDemo from "./examples/input";
import SwitchDemo from "./examples/switch";
import RadioDemo from "./examples/radio";
import CheckboxDemo from "./examples/checkbox";
import FormDemo from "./examples/form";
export default {
  name: "App",
  data() {
    return {
      money: 100,
      visible: false,
      aShow: false
    };
  },
  components: {
    ButtonDemos,
    DialogDemos,
    DemoSync,
    InputDemo,
    SwitchDemo,
    RadioDemo,
    CheckboxDemo,
    FormDemo
  },
  methods: {
    login(e) {
      console.log("单击事件", e);
    },
    fn1(e) {
      this.money = e;
    },
    fn2(e) {
      this.visible = e;
    }
  }
};
</script>

<style lang="scss">
.btn-group {
  .one-button {
    margin-right: 20px;
  }
}
// 进入
.fade-enter {
  opacity: 0;
}
// .fade-enter-to{
//   opacity: 1;
// }
.fade-enter-active {
  transition: opacity 1s;
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
